import React from 'react'
import liked from "../../../images/liked.jpg"
import MainWidget from '../../widget/MainWidget'
import RecentWidget from '../../widget/RecentWidget'

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
      <h1 className='text-white MyFont ml-8 mt-2 font-medium cursor-text select-none text-3xl'>{Greeting()}</h1>
      <div className='flex mx-8 mt-4  flex-row'>
      <MainWidget title={"Liked Songs"} image={liked}/>
      <MainWidget title={"Title2"} image={"https://i.scdn.co/image/ab67706f00000003734aea8a9641f7060e8e1bb7"}/>
      <MainWidget title={"Title3"} image={"https://i.scdn.co/image/ab67616d0000b273b852a616ae3a49a1f6b0f16e"}/>
      </div>
      <div className='flex mx-8 mt-4  flex-row'>
      <MainWidget title={"Title4"} image={"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb893cbb48baaa18f74c26430"} url={"#"} />
      <MainWidget title={"Title5"} image={"https://i.scdn.co/image/ab67616d0000b273840d0f957bd2f65796959f1f"}/>
      <MainWidget title={"Title6"} image={"https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb893cbb48baaa18f74c26430"}/>
      </div>
      {/* Second */}
      <div className='Second'>
      <h1 className='text-white MyFont ml-8 mt-8 font-medium cursor-text  select-none text-3xl'>Recent Played</h1>
      <div className='flex flex-row p-5 justify-center items-center'>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
      </div>
      </div>
      {/* Third */}
      <div className='Third'>
      <h1 className='text-white MyFont ml-8 mt-1 font-medium cursor-text  select-none text-3xl'>Made For SOJAN</h1>
      <div className='flex flex-row p-5 justify-center items-center'>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
      </div>
      </div>
      {/* Fourth */}
      <div className='Third'>
      <h1 className='text-white MyFont ml-8 mt-1 font-medium cursor-text  select-none text-3xl'>Trending</h1>
      <div className='flex flex-row p-5 justify-center items-center'>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
        <RecentWidget/>
      </div>
      </div>

      
    </div>
  )
}

export default ContentMain
