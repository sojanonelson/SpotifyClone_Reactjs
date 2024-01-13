import React from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faBookmark,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuickWidget from "../../widget/QuickWidget";

const ContentLeft = () => {
  return (
    <div className="content-left hidden md:block lg:w-1/5 xl:w-1/6">
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
        <div className="library-head p-2">
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
          <div className="library-quick-access flex flex-wrap justify-center md:justify-start mt-2">
            <button className="quickBtn  mb-2 md:mb-1">Playlists</button>
            <button className="quickBtn mb-2 md:mb-1 ml-4">Artists</button>
            <button className="quickBtn mb-2 md:mb-1 ml-4">
              Podcasts & Shows
            </button>
          </div>

          <div className="songs flex flex-col overflow-x-hidden overflow-y-auto mt-2">
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            <QuickWidget />
            {/* Add more QuickWidget components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
