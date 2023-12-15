import React from "react";


const RecentWidget = () => {
  return (
    <div className="bg-[#1b1b1be0] hover:bg-[#242424] m-2 cursor-pointer h-[350px]  rounded-md p-2">
        <div className="justify-center items-center flex">
        <img className="rounded-lg w-[150px]" alt="RecentWidget" src={"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb74bfb056c86232b5b5257bd4"}></img>
        {/* <img className='shadow-3xl  hover:w-10  ' width="35" height="35" src="https://img.icons8.com/flat-round/64/play--v1.png" alt="play"/> */}
        </div>
        <div>
        <h1 className="text-white mt-2 text-lg font-bold">Malayalam dj songs</h1>
        <p className="text-white">Best remix songs</p>
        </div>

    </div>  
  );
};

export default RecentWidget;
