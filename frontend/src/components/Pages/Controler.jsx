import React from "react";
import "../sass/Footer.scss";
import song from "../../images/song.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faShuffle,
  faRepeat,
  faBackwardStep,
  faForwardStep,
  faCirclePause,
  faBars,
  faVolumeLow,
  faHeart,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
const Controler = () => {
  const duration = "500";
  const second = "30";

  return (
    <div className="bg-black flex flex-row ">
      <div className="control-cover-art  m-2 flex justify-center items-center  ">
        <img className="w-12 rounded-md  " src={song} alt="profile" />
        <div className="ml-2">
          <h1 className="MyFont cursor-pointer text-lg  text-white  hover:underline ">Perfect</h1>
          <p className="MyFont cursor-pointer text-sm hover:underline text-white">Artist Name</p>
        </div>
        <FontAwesomeIcon className="ml-4 cursor-pointer" color="white" size="xl" icon={faHeart}></FontAwesomeIcon>
      </div>
      <div className=" control flex-col flex  w-full justify-center items-center">
        <div className="">
        <FontAwesomeIcon className="mx-2 cursor-pointer" color="white" size="xl" icon={faShuffle}></FontAwesomeIcon>
          <FontAwesomeIcon className="mx-2 cursor-pointer " color="#242424"  size="xl" icon={faBackwardStep}></FontAwesomeIcon>
          <FontAwesomeIcon className="mx-2 cursor-pointer" color="white" size="xl" icon={faCirclePause}></FontAwesomeIcon>
          <FontAwesomeIcon className="mx-2 cursor-pointer" color="#242424" size="xl" icon={faForwardStep}></FontAwesomeIcon>
          <FontAwesomeIcon className="mx-2 cursor-pointer" color="#242424" size="xl" icon={faRepeat}></FontAwesomeIcon>
        </div>
        <div className=" flex w-[40%] flex-row">
        <span className="MyFont text-white mt-2 pr-2 ">1:38</span>
        <input
        type="range"
        value={1}
        className="mt-2 w-[100%] border-none accent-[#242424] bg-blue-500 "
        duration={100/1000}
        max={3 || 0}
        
      />
      <span className="mt-2 text-white pl-2">4:44</span>
      </div>
        
        </div>


        <div className="flex-row flex  mr-4 justify-center items-center">
        <FontAwesomeIcon className="mx-2 cursor-pointer" color="white" size="xl" icon={faBackwardStep}></FontAwesomeIcon>
        </div>
    </div>
  );
};

export default Controler;
