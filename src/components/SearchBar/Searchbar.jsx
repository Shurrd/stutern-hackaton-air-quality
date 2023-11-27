import React from 'react';

import { IoSearchSharp } from 'react-icons/io5';

const Searchbar = ({ placeholder, handleSearch, value, label }) => {
  return (
    <div className='flex'>
      <div className='flex mt-1 items-center justify-center relative md:justify-start w-full md:w-auto'>
        <input
          type={`text`}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          value={value}
          className={`focus:outline-none w-full md:w-[400px] pr-[16px] pl-10 py-2.5 border border-[#D0D5DD] rounded-[8px] text-grey-label ${
            label === 'ticket' && 'py-[14px] border border-[#5C70AF]'
          }`}
        />
        <div className={`absolute left-[15px]`}>
          <IoSearchSharp size={20} color='#667085' />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
