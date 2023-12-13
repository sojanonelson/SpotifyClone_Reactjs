import React from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faBookmark,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContentLeft = () => {
  return (
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
  );
};

export default ContentLeft;
