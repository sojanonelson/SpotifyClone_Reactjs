import React from 'react';
import liked from "../../../images/liked.jpg";
import MainWidget from '../../widget/MainWidget';
import RecentWidget from '../../widget/RecentWidget';

const Greeting = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return greeting || "Hello";
}

const ContentMain = () => {
  return (
    <div className='flex flex-col'>
      <div className='justify-center '>
      <h1 className='text-white MyFont ml-8 mt-2 font-medium cursor-text select-none text-3xl'>{Greeting()}</h1>

      {/* First Row */}
      <div className='flex flex-wrap justify-center items-center mx-8 mt-4'>
        <MainWidget title={"Liked Songs"} image={liked} />
        <MainWidget title={"Title2"} image={"https://i.scdn.co/image/ab67706f00000003734aea8a9641f7060e8e1bb7"} />
        <MainWidget title={"Title3"} image={"https://i.scdn.co/image/ab67616d0000b273b852a616ae3a49a1f6b0f16e"} />
      </div>

      {/* Second Row */}
      <div className='flex flex-wrap justify-center items-center mx-8 mt-4'>
        <MainWidget title={"Title4"} image={"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb893cbb48baaa18f74c26430"} url={"#"} />
        <MainWidget title={"Title5"} image={"https://i.scdn.co/image/ab67616d0000b273840d0f957bd2f65796959f1f"} />
        <MainWidget title={"Title6"} image={"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb893cbb48baaa18f74c26430"} />
      </div>
      </div>

      {/* Recent Played Section */}
      <div className='Second flex flex-col'>
        <h1 className='text-white MyFont ml-8 mt-8 font-medium cursor-text select-none text-3xl'>Recent Played</h1>
        <div className='flex flex-wrap p-5 justify-center items-center'>

          {/* RecentWidget components */}
          <div className='w-full sm:w-3/3 md:w-2/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-3/3 md:w-2/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          

        </div>
      </div>
      <div className='Second flex flex-col'>
        <h1 className='text-white MyFont ml-8 mt-8 font-medium cursor-text select-none text-3xl'>Next</h1>
        <div className='flex flex-wrap p-5 justify-center items-center'>

          {/* RecentWidget components */}
          <div className='w-full sm:w-1/2 md:w-2/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-2/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2'>
            <RecentWidget />
          </div>

          

        </div>
      </div>

      {/* Other Sections (Made For, Trending, etc.) */}
      {/* ... */}
    </div>
  )
}

export default ContentMain;
