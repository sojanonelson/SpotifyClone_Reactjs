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
const Footer = () => {

    const duration = "500"
    const second = "30"

  return (
    <div className=" justify-center bg-black w-full   flex-row">
      <div className="flex float-left flex-row justify-center items-center">
        <img
          className="w-14 m-2 rounded-md "
          src={song}
          alt="Perfect Song Cover"
        ></img>
        <div>
          <h1 className="text-white text-lg">Perfect</h1>
          <p className="text-white text-sm">Ed Sheeran</p>
        </div>
        <FontAwesomeIcon className="w-10" color="white" icon={faHeart} />
      </div>
      <div className="justify-center flex-col flex items-center   mx-10 ">
        <div>
          <FontAwesomeIcon
            className="m-3"
            size="lg"
            color="white"
            icon={faShuffle}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="m-3"
            size="lg"
            color="white"
            icon={faBackwardStep}
          />
          <FontAwesomeIcon
            className="m-3"
            size="lg"
            color="white"
            icon={faCirclePause}
          />
          <FontAwesomeIcon
            className="m-3"
            size="lg"
            color="white"
            icon={faForwardStep}
          />
          <FontAwesomeIcon
            className="m-3"
            size="lg"
            color="white"
            icon={faRepeat}
          />
        </div>
        <div>
          <input
            type="range"
            min="0"
            max={ duration / 1000}
            default="0"
            value={"30"}
            className="timeline"
          />
        </div>
      </div>
      <div className="float-right justify-center flex items-center ">
        <FontAwesomeIcon className="w-10" color="white" icon={faBars} />
        <FontAwesomeIcon className="w-10" color="white" icon={faVolumeLow} />
        <FontAwesomeIcon
          className="w-10"
          color="white"
          icon={faWindowRestore}
        />
      </div>
    </div>
  );
};

export default Footer;
