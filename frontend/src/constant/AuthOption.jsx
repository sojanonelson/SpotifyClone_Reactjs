import React from 'react';

import '../components/sass/Auth.scss';

const AuthOption = ({ icon, title , bg }) => {
  const containerStyle = `bg-${bg || 'black'} border-[1px] w-full border-white p-3 m-1 cursor-pointer flex flex-row justify-center items-center rounded-3xl`;
  return (
    <div className={containerStyle}>
      {icon && <img className='w-6' src={icon} alt="icon" />}
      <span className='text-white font pl-8 font-bold'>{title}</span>
    </div>
  );
}

export default AuthOption;
