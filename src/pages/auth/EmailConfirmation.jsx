import React from 'react';

const EmailConfirmation = () => {
  return (
    <div className='bg-white mt-[106px] max-w-[428px] m-auto p-6 sm:border sm:border-[#98A2B3] sm:rounded-xl'>
      <div className='text-center flex flex-col gap-1 items-center justify-center'>
        <h1>Please check your email</h1>
        <p>
          We've sent a code to <span>aminu@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default EmailConfirmation;
