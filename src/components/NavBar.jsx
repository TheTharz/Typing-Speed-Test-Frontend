import React from 'react';
import Logo from '../assets/logo.png';
const NavBar = () => {
  return (
    <div>
      <div>
        <img src={Logo} width={50} height={50} />
        <div>
          <h1>KeyBlitz</h1>
          <p>Achieve Warp Speed</p>
        </div>
      </div>
      <div>
        <button>Logout</button>
        <button>Profile</button>
        <button>login</button>
      </div>
    </div>
  );
};

export default NavBar;
