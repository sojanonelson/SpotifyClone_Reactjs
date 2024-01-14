import React from "react";

const AuthInput = ({title,type, value, onChange, name, defaultValue}) => {
  return (
    <div className="mt-1 w-full ">
      <h1 className="text-white font my-1">{title}</h1>
      <input
        className=" bg-[#050505] rounded-md border-[1px] border-white outline-none text-white  p-3  w-full"
        placeholder={title}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default AuthInput;
