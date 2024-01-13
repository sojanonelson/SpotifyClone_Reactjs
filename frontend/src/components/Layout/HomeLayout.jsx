import React from "react";
import Navbar from "../Navbar/Navbar";
import ContentLeft from "../Pages/content/ContentLeft";
import ContentMain from "../Pages/content/ContentMain";
import Controler from "../Control/Controler";
import ContentFooter from "../Pages/content/ContentFooter";

const HomeLayout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Content Left */}
      
      <ContentLeft />
      

      {/* Main Content */}
      <div className="flex flex-col p-2 md:flex-grow">
        {/* Navbar */}
        <Navbar />

        {/* Content Main and Footer */}
        <div className="md:flex overflow-x-auto flex-col main  h-screen  rounded-sm ">
          <ContentMain />
          <ContentFooter />
        </div>
      </div>

      {/* Control Bar */}
      <div className="fixed bottom-0 w-full">
        <Controler />
      </div>
    </div>
  );
};

export default HomeLayout;
