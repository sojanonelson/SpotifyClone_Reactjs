
import React from 'react'

const ContentFooter = () => {
    const handleTextClick = () => {
        const url = 'https://github.com/sojanonelson';  
        window.open(url, '_blank');
      };
  return (
    <div className='bg-[#131218]  flex-col p-10 pb-32 flex'>
        <div className='flex flex-row'>
        <div className='flex flex-col mx-8 justify-left '>
            <h1 className='MyFont text-white font-extrabold text-1xl'>Company</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>About</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Jobs</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>For the Record</h1>
            
        </div>
        <div className='flex mx-8  flex-col justify-left '>
            <h1 className='MyFont text-white font-extrabold text-1xl'>Communities</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>For Artists</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Developers</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Advertising</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Investors</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Vendors</h1>
            
        </div>
        <div className='flex mx-8  flex-col justify-left '>
            <h1 className='MyFont  text-white font-extrabold text-1xl'>Useful links</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Support</h1>
            <h1 className='text-[#afafaf] hover:underline underline-offset-1 hover:text-white'>Free Mobile App</h1>
            
            
        </div>
        </div>

        {/* line */}
        <div className='border-t-2 border-[#afafaf] my-5'></div>

        <div className='flex mt-3 flex-row'>
        
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>Legal</h1>
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>Privacy Center</h1>
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>Privacy Policy</h1>
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>Cookies</h1>
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>About Ads</h1>
        <h1 className='mx-5 hover:text-white text-[#afafaf]'>Accessibility</h1>      


        </div>
        <div>
            
        <h1 onClick={handleTextClick} className=' cursor-pointer float-right text-[#afafaf]'>Spotify Clone © SOJAN</h1>
       
        </div>
        
       
        

      
    </div>
  )
}

export default ContentFooter
