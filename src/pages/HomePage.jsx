import React from 'react';
import NavBar from '../components/NavBar';
import TypingTest from '../components/TypingTest';
const HomePage = () => {
  return (
    <div className='bg-darkgray w-full h-screen font-default'>
      <NavBar />
      <TypingTest />
    </div>
  );
};

export default HomePage;
