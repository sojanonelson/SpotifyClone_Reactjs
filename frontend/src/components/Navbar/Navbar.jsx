import React, { useState } from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faBell,
  faUser 
} from "@fortawesome/free-solid-svg-icons";
import "../sass/HomeLayout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../images/profile.jpeg";

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className='flex bg-[#121212] w-full h-auto mt-1 rounded-tl-md rounded-tr-md justify-center items-center'>

      <nav className="content-navbar mb-3 p w-full">
        <div className="md:flex md:items-center relative">
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
          <div className="md:w-2/3 bg-[#121212]  flex justify-end items-center mt-3 relative">
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
            <button onClick={toggleOptions}>
              <img
                className=" w-8 mx-1 bg-[#121212]  rounded-full"
                src={profile}
                alt="profile"
              ></img>
            </button>
            {showOptions && (
              <div className="options-container absolute top-full right-0 bg-[#141414] p-1 rounded-md">
                <div className='my-2  flex flex-row cursor-pointer p-2 hover:bg-[#222222]'><p className='text-white text-sm font'>Account</p> <FontAwesomeIcon
    className=" mx-1  flex-1 rounded-full"
    icon={faUser}
    size='1x'
    color="#a7a7a7"
  /></div>
                <div className='my-2 cursor-pointer p-2 hover:bg-[#222222]'><p className='text-white text-sm font'>Profile</p></div>
                <div className='my-2 cursor-pointer p-2 hover:bg-[#222222]'><p className='text-white text-sm font'>Upgrade to Premium</p></div>
                <div className='my-2 cursor-pointer p-2 hover:bg-[#222222]'><p className='text-white text-sm font'>Settings</p></div>
                <div className='border border-gray-600'></div>
                <div className='my-2 cursor-pointer p-2 hover:bg-[#222222]' ><p className='text-white text-sm font'>Log out</p></div>
                
              </div>
            )}
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;
