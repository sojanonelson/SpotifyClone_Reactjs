import React from "react";
import "../sass/Footer.scss";
import song from "../../images/song.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/Controler.scss";
import audio from "../../Data/perfect.mp3"
import { useState } from "react";

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
  const audioRef = React.useRef(new Audio(audio));

  const playPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-black flex flex-row ">
      <div className="control-cover-art  m-2 flex justify-center items-center  ">
        <img className="w-12 rounded-md  " src={song} alt="profile" />
        <div className="ml-2">
          <h1 className="MyFont cursor-pointer text-lg  text-white  hover:underline ">
            Perfect
          </h1>
          <p className="MyFont cursor-pointer text-sm hover:underline text-white">
            Artist Name
          </p>
        </div>
        <FontAwesomeIcon
          className="ml-4 cursor-pointer"
          color="white"
          size="lg"
          icon={faHeart}
        ></FontAwesomeIcon>
      </div>
      <div className=" control flex-col flex  w-full justify-center items-center">
        <div className="">
          <FontAwesomeIcon
            className="mx-2 cursor-pointer settings"
            size="lg"
            icon={faShuffle}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mx-2 cursor-pointer settings "
            size="lg"
            icon={faBackwardStep}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            
            onClick={playPause}
            className="mx-2 cursor-pointer"
            color="white" 
            size="2xl"
            icon={isPlaying ? faCirclePause : faCirclePlay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mx-2 cursor-pointer settings"
            size="lg"
            icon={faForwardStep}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="mx-2 cursor-pointer settings"
            size="lg"
            icon={faRepeat}
          ></FontAwesomeIcon>
        </div>
        <div className=" flex w-[40%] flex-row  ">
          <span className="MyFont text-[#868686] mt-2 pr-2 ">1:38</span>
          <input
            type="range"
            value={1}
            className="mt-2 w-[100%] border-none outline-none accent-white hover:accent-[#1ED760]  "
            duration={100 / 1000}
            max={3 || 0}
          />
          {/* comments only */}
          <span className="mt-2 text-[#868686]  pl-2">4:44</span>
        </div>
      </div>

      <div className="flex-row flex  mr-4 justify-center items-center">
        <FontAwesomeIcon
          className="ml-4 settings cursor-pointer"
          size="lg"
          icon={faBars}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="ml-4 settings  cursor-pointer"
          size="lg"
          icon={faWindowRestore}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="mx-2 settings cursor-pointer "
          size="lg"
          icon={faVolumeLow}
        ></FontAwesomeIcon>
        <input
          type="range"
          value={1}
          className=" volumeControl  w-[100%] border-none  accent-white hover:accent-[#1ED760]  "
          duration={100 / 1000}
          max={3 || 0}
        />
      </div>
    </div>
  );
};

export default Controler;
