import React from "react";
import "../sass/HomeLayout.scss";
import {
  faHouse,
  faMagnifyingGlass,
  faBookmark,
  faPlus,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Pages/Footer";

const HomeLayout = () => {
  return (
    <div className="content">
      <div className="content-left">
        <div className="content-left-nav">
          <div className="nav-icon">
            <FontAwesomeIcon size="lg" icon={faHouse} />
            <span className="nav-icon-title">Home</span>
          </div>
          <div className="nav-icon">
            <FontAwesomeIcon size="lg" icon={faMagnifyingGlass} />
            <span className="nav-icon-title">Search</span>
          </div>
        </div>
        <div className="library">
          <div className="library-head">
            <FontAwesomeIcon size="lg" color="#A7A7A7" icon={faBookmark} />
            <span className="library-head-title">Your Library</span>
            <span className="library-head-navigation">
              <FontAwesomeIcon
                size="lg"
                color="#a7a7a7"
                className="library-head-navigation-icon cursor-pointer"
                icon={faPlus}
              />
              <FontAwesomeIcon
                size="lg"
                className="cursor-pointer"
                color="#a7a7a7"
                icon={faArrowRight}
              />
            </span>
            <div className="library-quick-access">
              <button className=" quickBtn ">Playlists</button>
              <button className="quickBtn ml-4">Artists</button>
              <button className="quickBtn ml-4">Podcasts & Shows</button>
            </div>
            <div className="songs bg-red-700 mt-2 ">
              <div className="bg-blue-300 h-20">a</div>
              <div className="bg-blue-400 h-20">b</div>
              <div className="bg-blue-500 h-20">c</div>
              <div className="bg-blue-600 h-20">d</div>
              <div className="bg-blue-700 h-20">e</div>
              <div className="bg-blue-800 h-20">f</div>
              <div className="bg-blue-900 h-20">g</div>
              <div className="bg-blue-300 h-20">a</div>
              <div className="bg-blue-400 h-20">b</div>
              <div className="bg-blue-500 h-20">c</div>
              <div className="bg-blue-600 h-20">d</div>
              <div className="bg-blue-700 h-20">e</div>
              <div className="bg-blue-800 h-20">f</div>
              <div className="bg-blue-900 h-20">g</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-main flex flex-col">
        <nav className="content-navbar fixed ">
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
            <button className="bg-white text-black text-sm px-3 mx-2 mt-3 h-10  rounded-full content-navbar-right">
              Explore Premium
            </button>
            <button className="bg-black text-white mx-2 mt-3 px-3 h-10 rounded-full content-navbar-right">
              Install App
            </button>
            <FontAwesomeIcon
              className="m-1 cursor-pointer rounded-full p-3 mt-3 ml-1 bg-black"
              color="#a7a7a7"
              icon={faBell}
            ></FontAwesomeIcon>
            <button>
              <img
                className="w-8 rounded-full m-4 "
                src={profile}
                alt="profile"
              ></img>
            </button>
          </div>
        </nav>

        <div className="overflow-y-auto flex  flex-col max-h-[800px]">
         
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>
          <h1 className="text-white temp text-lg bold MyFont float-left ">
            Good evening
          </h1>


        </div>
      </div>
      <div className="fixed w-full bottom-0">
      <Footer></Footer>


      </div>
    </div>
  );
};

export default HomeLayout;
