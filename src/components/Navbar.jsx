import React, { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { GoHome, GoGear } from 'react-icons/go';
import { BiWorld } from 'react-icons/bi';

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className='px-8 lg:px-16 xl:px-32 py-5 flex justify-between items-center border border-b-[#EAECF0]'>
      {menu ? (
        <>
          <div className='flex items-center gap-6'>
            <Link to={'/'}>
              <img src={Logo} alt='Air Quality' />
            </Link>
            <Link className='bg-[#53389E] text-white hidden  md:flex items-center rounded-md px-2 py-1 gap-2'>
              <GoHome size={25} />
              Overview
            </Link>
            <Link className='hidden md:flex items-center gap-2 text-[#a5a6a7]'>
              <BiWorld size={25} />
              Global Index
            </Link>
          </div>
          <Link className='hidden items-center gap-2 md:flex'>
            Settings
            <GoGear size={25} />
          </Link>
        </>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;
