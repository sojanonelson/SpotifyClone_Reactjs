import React from 'react'


const MainWidget = (props) => {
  return (
    <div className='bg-[#242424] transition  duration-300 hover:bg-[#696969] cursor-pointer flex-row justify-center mx-3 w-full items-center rounded-sm'>
        <img src={props.image} alt="image" className='  select-none float-left rounded-l-sm w-14'></img>
        <div className='justify-center items-center '>
        <span className='Myfont float-left m-4 select-none   text-white '>{props.title}</span>
        <img className='float-right m-2 shadow-lg justify-center items-center' width="35" height="35" src="https://img.icons8.com/flat-round/64/play--v1.png" alt="play"/>
        </div>
      
    </div>
  )
}

export default MainWidget
