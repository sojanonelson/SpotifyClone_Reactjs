import React, { useState } from "react";
import logo from "../../images/logoBW.png";
import "../sass/Auth.scss";
import axios from "axios";
import AuthOption from "../../constant/AuthOption";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import apple from "../../images/Apple.png";
import AuthInput from "../../constant/AuthInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleRememberMeChange = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", credentials);

      // Handle the successful login response
      console.log("Login successful:", response.data);
      navigate("/");

      // You may want to redirect the user to another page upon successful login
    } catch (error) {
      // Handle login error
      console.error("Login error:", error);
    }
  };

  return (
    <div className="md:bg-gradient-to-b from-[#161616] to-black sm:bg-black">
      <div className="bg-black w-full p-8">
        <img className="w-28" src={logo} alt="login logo" />
      </div>
      <div className="justify-center items-center flex md:p-8">
        <div className="bg-black w-[700px] rounded-md flex flex-col justify-center items-center">
          <h1 className="text-white text-left mt-16 text-3xl lg:text-5xl font-extrabold">
            Log in to Spotify
          </h1>
          <div className="md:w-2/4 px-2 justify-center w-full items-center flex flex-col mt-7 lg:mt-14">
            <AuthOption icon={google} title="Continue with Google" />
            <AuthOption icon={facebook} title="Continue with Facebook" />
            <AuthOption icon={apple} title="Continue with Apple" />
            <AuthOption title="Continue with phone number" />
          </div>
          <div className="border-t border-b mt-10 w-3/4 flex flex-col border-gray-500"></div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="justify-center items-center mb-5 w-full flex flex-col">
              <div className="mt-4 lg:w-2/4">
                <AuthInput
                  title="Email or username"
                  value={credentials.email}
                  onChange={handleInputChange}
                  name="email"
                  defaultValue=""
                />
                <AuthInput
                  type="password"
                  title="Password"
                  showVisibility
                  value={credentials.password}
                  onChange={handleInputChange}
                  name="password"
                  defaultValue=""
                />
              </div>
              <div className="flex justify-center items-center mt-3 mr-24 w-full">
                <input
                  type="radio"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-white text-center">
                  Remember me
                </label>
              </div>
              <div className="w-full justify-center items-center flex">
                <button onClick={handleLogin} className="bg-green-500 p-2 w-2/4 text-black rounded-full mt-6 font-bold">
                  Log in
                </button>
              </div>
              <p className="text-white text-center underline cursor-pointer my-4">
                Forget your password?
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-row my-8">
            <p className="text-white text-center my-4">
              Don't have an account?{" "}
            </p>
            <p
              onClick={() => navigate("/signup")}
              className="hover:text-green-500 text-white cursor-pointer underline text-center font my-4 px-1"
            >
              Sign up for Spotify
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
};

export default Login;
