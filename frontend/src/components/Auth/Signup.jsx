import React from 'react';
import logo from "../../images/logoBW.png";
import AuthInput from '../../constant/AuthInput';
import AuthOption from '../../constant/AuthOption';
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/Apple.png";
import { useNavigate } from 'react-router-dom';
const Signup = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Redirect to the login page
    navigate("/login");
  };
  const handlePhonenumClick = () => {
    // Redirect to the login page
    navigate('/phonenumber');}

  return (
    <div className='bg-[#121212] h-screen '>
      <div className=" w-full p-8">
        <img className="w-28" src={logo} alt="login logo" />
      </div>

      <div className='flex flex-col justify-center  items-center'>
        <div className='w-[300px]'>

        
        <h1 className='text-white font-extrabold font text-4xl '>
        Sign up to start
        </h1>
        <h1 className='text-white font-extrabold  font text-4xl '>
        listening
        </h1>
        <div className='mt-10'>
          <AuthInput title="Email address"/>
        </div>
        <h1 onClick={handlePhonenumClick} className='underline cursor-pointer text-green-500 font mt-2'>Use phone number instead.</h1>
        <div className="w-full justify-center items-center flex">
              <button className="bg-green-500  p-2 w-full   text-black rounded-full mt-6 font-bold">
                Next
              </button>
              </div>
              <div className='flex flex-row justify-center items-center'>
          <div className='border-t border-b mt-10 w-3/4 flex flex-col border-gray-500'></div>
          <p className='text-white pt-10 px-2 text-center'>or</p>
          <div className='border-t border-b mt-10 w-3/4 flex flex-col border-gray-500'></div>
        </div>
        <div>
        <AuthOption bg="#121212" icon={google} title="Continue with Google" />
            <AuthOption  bg="#121212" icon={facebook} title="Continue with Facebook" />
            <AuthOption  bg="#121212" icon={apple} title="Continue with Apple" />
        </div>
        <div className='border-t border-b mt-10 w-4/4 flex flex-col border-gray-500'></div>
        <div className="w-full flex justify-center items-center flex-row my-8">
            <p className="text-gray-300 text-center my-4">
            Already have an account?{" "}
            </p>
            <p onClick={handleLoginClick} className=" text-white cursor-pointer   underline text-center font my-4 px-1">
            Log in here.
            </p>
          </div>
          <p className="text-white text-center text-[10px] mt-10">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>

        
        
      </div>
      </div>
    </div>
  );
}

export default Signup;
