import React, { useState, useEffect, useMemo, useRef } from "react";
import songs from "../../Data/songs";
import "../sass/Footer.scss";
import song from "../../images/song.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/Controler.scss";
import { playPauseAction } from "../../Redux/Action/actions";
import audio1 from "../../Data/perfect.mp3";
import audio2 from "../../Data/koode.mp3";
import audio3 from "../../Data/ghost.mp3";
import audio4 from "../../Data/malabar.mp3"

import {
  faShuffle,
  faRepeat,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
  faCirclePlay,
  faBars,
  faVolumeLow,
  faHeart,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";

const Controler = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isNextTrackReady, setIsNextTrackReady] = useState(false);
  const nextTrackRef = useRef(null);

  const [currentSong, setCurrentSong] = useState(songs[0]);

  const tracks = useMemo(() => [audio1, audio2, audio3, audio4], []);

  const audioRef = useRef(new Audio(audio1));

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
 

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    
    const audio = audioRef.current;
  
    if (isPlaying) {
      audio.pause();
    } else {
     audio.play();
    }
  }
  // const playPause = () => {
  //   const audio = audioRef.current;
  //   if (isPlaying) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  const nextTrack = () => {
    handleNext()
    const audio = audioRef.current;
    audio.pause();
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
    setCurrentTime(0); 
    setIsPlaying(true);
    setIsNextTrackReady(false);

    const newAudio = new Audio(tracks[newIndex]);

    newAudio.addEventListener("loadedmetadata", () => {
      setTotalDuration(newAudio.duration);
    });

    newAudio.addEventListener("timeupdate", () => {
      setCurrentTime(newAudio.currentTime);
    });

    newAudio.addEventListener("canplaythrough", () => {
      setIsNextTrackReady(true);
    });

    nextTrackRef.current = newAudio;

    newAudio.load();

    newAudio.addEventListener("loadeddata", () => {
      if (nextTrackRef.current === newAudio) {
        audioRef.current = newAudio;
        setIsNextTrackReady(true);
        if (isPlaying) {
          newAudio.play();
       }
      }
    });
  };

  const handleNext = () => {
    // Logic to play next song
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]); 
  }

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setTotalDuration(audio.duration);
    };
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentTrackIndex, tracks]);

  console.log("Song playing: ", isPlaying);
  console.log("playing:" , currentSong)
  console.log("Current song index: ", currentTrackIndex)

  return (
    <div className="bg-black w-full p-2 lg:p-3 flex flex-row ">
      <div className=" w-1/6    m-1 flex justify-center items-center  ">
        <img
          className="w-12 rounded-md  cursor-pointer "
          src={currentSong.img}
          alt="profile"
        />
        <div className="ml-2 w-2/6">
          <h1 className="MyFont cursor-pointer text-sm  text-white  hover:underline ">
          {currentSong.name}
          </h1>
          <p className="MyFont cursor-pointer text-[10px] hover:underline text-white">
          {currentSong.artist}
          </p>
        </div>
        <div>
        <FontAwesomeIcon
          className=" cursor-pointer "
          color="white"
          size="lg"
          icon={faHeart}
        ></FontAwesomeIcon>
      </div>
      </div>
      <div className=" control flex-col flex  w-full justify-center items-center">
        <div className=" flex flex-row justify-center items-center">
          <div className="md:flex hidden">
            <FontAwesomeIcon
              className="mx-2 cursor-pointer settings"
              size="lg"
              icon={faShuffle}
            ></FontAwesomeIcon>
          </div>
          <FontAwesomeIcon
            className="mx-2 cursor-pointer settings "
            size="lg"
            icon={faBackwardStep}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            
            onClick={togglePlay} 
            className="mx-2 cursor-pointer"
            color="white"
            size="2xl"
            icon={isPlaying ? faCirclePause : faCirclePlay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={nextTrack}
            className="mx-2 cursor-pointer settings"
            size="lg"
            icon={faForwardStep}
          ></FontAwesomeIcon>
          <div className="md:flex hidden">
            <FontAwesomeIcon
              className="mx-2 cursor-pointer settings"
              size="lg"
              icon={faRepeat}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className=" flex lg:w-3/6 flex-row  ">
          <span className="MyFont text-[#868686] select-none mt-2 pr-2 ">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            value={currentTime}
            className="mt-2 w-full h-3  bg-gray-200 rounded-full cursor-pointer select-none  accent-[#1ED760]  hover:accent-white outline-none focus:outline-none active:outline "
            onChange={(e) => {
              const newTime = parseFloat(e.target.value);
              setCurrentTime(newTime);
              audioRef.current.currentTime = newTime;
            }}
            max={totalDuration || 0}
          />
          {/* comments only */}
          <span className="mt-2 text-[#868686] select-none  pl-2">
            {formatTime(totalDuration)}
          </span>
        </div>
      </div>
      <div className="hidden md:flex ">
        <div className=" flex-row flex mr-4 justify-center items-center">
          <FontAwesomeIcon
            className="ml-4 settings cursor-pointer"
            size="lg"
            icon={faBars}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="ml-4 settings cursor-pointer"
            size="lg"
            icon={faWindowRestore}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mx-2 settings cursor-pointer"
            size="lg"
            icon={faVolumeLow}
          ></FontAwesomeIcon>
          <input
            type="range"
            value={1}
            className="volumeControl w-[100%] outline-none  border-none accent-white hover:accent-[#1ED760]"
            duration={100 / 1000}
            max={3 || 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Controler;
