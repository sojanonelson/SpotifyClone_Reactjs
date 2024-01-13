import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "../sass/HomeLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../images/profile.jpeg";

function Navbar() {
  return (
    <div className='flex bg-[#121212] w-full h-auto mt-1 rounded-tl-md rounded-tr-md justify-center items-center'>

      <nav className="content-navbar mb-3 p w-full">
        <div className="md:flex md:items-center">
          <div className='hidden md:block'>
          <div className="md:w-3/3 flex flex-col  md:block bg-[#121212]  ">
            <FontAwesomeIcon
              className="ml-1 mt-3 cursor-pointer rounded-full p-2 bg-black"
              color="#a7a7a7"
              icon={faChevronLeft}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="ml-1 mt-3 cursor-pointer rounded-full p-2 bg-black"
              color="#a7a7a7"
              icon={faChevronRight}
            ></FontAwesomeIcon>
          </div>
          </div>
          <div className="md:w-3/3 px-2 mt-3">
            <input
              className="content-main-nav-input bg-[#242424]  w-full md:w-[350px] h-9 p-6 rounded-full"
              placeholder="What do you want to listen to?"
            ></input>
          </div>
          <div className="md:w-2/3 bg-[#121212]  flex justify-end items-center mt-3">
            <button className="bg-white text-black text-sm px-3 font-medium hover:h-10 hover:text-[0.900rem] transition duration-300 h-9 rounded-full content-navbar-right">
              Explore Premium
            </button>
            <button className="bg-black text-white mx-2 px-3 h-9  rounded-full content-navbar-right">
              Install App
            </button>
            <FontAwesomeIcon
              className="m-1 cursor-pointer rounded-full p-3 ml-1 bg-black"
              color="#a7a7a7"
              icon={faBell}
            ></FontAwesomeIcon>
            <button>
              <img
                className=" w-8 mx-1 bg-[#121212]  rounded-full"
                src={profile}
                alt="profile"
              ></img>
            </button>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
