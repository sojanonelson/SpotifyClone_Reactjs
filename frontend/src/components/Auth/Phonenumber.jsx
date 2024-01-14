import React, { useState } from "react";
import logo from "../../images/logoBW.png";
const Phonenumber = () => {
  const [selectedCode, setSelectedCode] = useState("+1"); // Initial default country code

  const countryCodes = [
    { code: "+1" },
    { code: "+44" },
    { code: "+91" },
    { code: "+33" },
    { code: "+49" },
    { code: "+81" },
    { code: "+86" },
    // Add more country codes as needed
  ];

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value);
  };
  return (
    <div className="bg-black h-screen">
      <div className=" w-full p-8">
        <img className="w-28" src={logo} alt="login logo" />
      </div>
    <div className="justify-center w-full item-center flex felx-col">
      <div className="justify-center w-4/6 items-center mt-10 flex flex-col">
        <h1 className="font font-extrabold text-xl text-white">
          Enter phone number
        </h1>
        <div className="flex flex-col justify-center mt-3 w-full items-center">
          <div className="w-full justify-center items-center flex">
            <select
              id="countryCode"
              onChange={handleCodeChange}
              value={selectedCode}
              className="bg-[#050505] rounded-md border-[1px] border-gray-500 outline-none text-white  p-3 px-8  "
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label} ({country.code})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Phone number"
              className="bg-[#050505] rounded-md border-[1px] border-gray-500 outline-none text-white   p-3 w-2/6  mx-4"
              // Add additional input properties as needed
            />
          </div>
          <div className="w-3/6 ">
            <div className=" flex justify-start items-center">
              <button className="bg-green-500 p-3 px-6 text-black rounded-full mt-6 font-bold">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Phonenumber;
