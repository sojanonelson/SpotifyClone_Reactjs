import React from 'react'
import {
     
    faChevronLeft,
    faChevronRight,
    faBell,
  } from "@fortawesome/free-solid-svg-icons";
  import "../sass/HomeLayout.scss"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import profile from "../../images/profile.jpeg";

function Navbar() {
  return (
    <div className='flex bg-[#121212] w-full h-16 mt-1  justify-center items-center'>
      
      
        <nav className="content-navbar mb-3  p-2  w-full  ">
          <div className="float-left flex ">
            <FontAwesomeIcon
              className="ml-6 mt-3  cursor-pointer rounded-full p-3 bg-black"
              color="#a7a7a7"
              icon={faChevronLeft}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="ml-2 mt-3 cursor-pointer rounded-full p-3 bg-black"
              color="#a7a7a7"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            <div>
              <input
                className=" mt-2 content-main-nav-input bg-[#242424] ml-4 w-[350px] h-9 p-6  rounded-full  "
                placeholder="What do you want to listen to?"
              ></input>
            </div>
          </div>

          <div className="float-right flex-row flex">
            <button className="bg-white text-black text-sm px-3 font-medium hover:h-10 hover:text-[0.900rem] transition duration-300   mt-3 h-9  rounded-full content-navbar-right">
              Explore Premium
            </button>
            <button className="bg-black text-white mx-2 mt-3 px-3 h-9 rounded-full content-navbar-right">
              Install App
            </button>
            <FontAwesomeIcon
              className="m-1 cursor-pointer rounded-full p-3 mt-3 ml-1 bg-black"
              color="#a7a7a7"
              icon={faBell}
            ></FontAwesomeIcon>
            <button>
              <img
                className="w-8 rounded-full  "
                src={profile}
                alt="profile"
              ></img>
            </button>
          </div>
        </nav>
      
    </div>
  )
}

export default Navbar
