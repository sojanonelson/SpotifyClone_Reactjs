import React from "react";
import photo from "../../images/liked.jpg";
const QuickWidget = () => {
  return (
    <div className=" hover:bg-[#242424] p-1">
      <div className="transition m-1  duration-300  cursor-pointer flex-row justify-center mx-3 w-full items-center rounded-sm">
        <img
          src={photo}
          
          className="  select-none float-left rounded-sm w-14"
          alt="QuickWidget"
        ></img>
        <div className="justify-center items-center ">
          <div className="flex-col flex pl-2 ">
            <span className="Myfont float-left    select-none   text-white ">
              Liked Songs
            </span>
            <span className="Myfont float-left  select-none   text-white ">
              Liked Songs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickWidget;
