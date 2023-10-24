import React from 'react';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className='flex flex-row gap-5 p-8 items-center justify-between'>
      <div className='flex flex-row gap-5 items-center'>
        <img src={Logo} width={100} height={100} alt='logo' />
        <div>
          <h1 className='text-xl font-medium'>KeyBlitz</h1>
          <p>Achieve Warp Speed</p>
        </div>
      </div>
      <div className='flex flex-row gap-4'>
        <button class='smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-yellow after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-text'>
          Profile
        </button>
        <button
          class='smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-yellow after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-text'
          onClick={handleLogin}
        >
          Log In
        </button>
        <button class='smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-yellow after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-text'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
