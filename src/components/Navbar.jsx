import React, { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import { GoHome, GoGear } from 'react-icons/go';
import { BiWorld } from 'react-icons/bi';
import { LuMenu } from 'react-icons/lu';
import { CgClose } from 'react-icons/cg';
import navLinks from '../utils/navLinks';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
    console.log(menu);
  };

  return (
    <>
      <nav className='px-8 lg:px-16 xl:px-32 py-5 flex justify-between items-center border border-b-[#EAECF0] bg-white'>
        <div className='flex items-center gap-10'>
          <Link to={'/'}>
            <img src={Logo} alt='Air Quality' />
          </Link>
          <Link
            to='/'
            className={
              menu
                ? 'bg-[#53389E] text-white hidden  md:flex items-center rounded-md px-2 py-1 gap-2 text-sm font-medium'
                : 'hidden md:flex bg-[#53389E] text-white items-center rounded-md px-2 py-1 gap-2 text-sm font-medium'
            }
          >
            <GoHome size={25} />
            Overview
          </Link>
          <Link
            to='/global-index'
            className={
              menu
                ? 'hidden md:flex items-center gap-2 text-[#a5a6a7] text-sm font-semibold'
                : 'hidden md:flex items-center gap-2 text-[#a5a6a7] text-sm font-semibold'
            }
          >
            <BiWorld size={25} />
            Global Index
          </Link>
        </div>
        <Link
          className={
            menu
              ? 'hidden items-center gap-2 md:flex text-sm font-semibold'
              : 'hidden items-center gap-2 md:flex text-sm font-semibold'
          }
        >
          <GoGear size={25} />
          Settings
        </Link>
        <div
          className={
            menu ? 'md:hidden block cursor-pointer' : 'md:hidden cursor-pointer'
          }
          onClick={handleMenu}
        >
          {menu ? <CgClose size={25} /> : <LuMenu size={25} />}
        </div>
      </nav>
      <div
        className={
          menu
            ? 'md:hidden bg-white pb-10 px-7 py-4 flex flex-col gap-5 shadow-2xl'
            : 'hidden'
        }
      >
        {navLinks.map((item) => {
          const { id, name, icon } = item;
          const Icon = icon;
          return (
            <Link
              key={id}
              className='text-[#a5a6a7] flex items-center gap-2 text-sm font-semibold'
            >
              <Icon size={18} />
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
