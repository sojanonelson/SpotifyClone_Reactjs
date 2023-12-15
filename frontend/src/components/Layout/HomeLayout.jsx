import React from "react";
import "../sass/HomeLayout.scss";
import Navbar from "../Navbar/Navbar";
import ContentLeft from "../Pages/content/ContentLeft";
import ContentMain from "../Pages/content/ContentMain";
import Controler from "../Control/Controler";
import ContentFooter from "../Pages/content/ContentFooter";

const HomeLayout = () => {
  return (
    <div className="content">
      <ContentLeft />

      <div className="content-main w-full  flex flex-col">
        <Navbar />

        <div className="overflow-x-auto flex rounded-sm scrollBar  flex-col max-h-[830px]">
          <ContentMain />
          <ContentFooter/>
          
        </div>
        
        
      </div>
      <div className="Controler fixed w-full inset-x-0 bottom-0">
        <Controler/>
      </div>
    </div>
  );
};

export default HomeLayout;
