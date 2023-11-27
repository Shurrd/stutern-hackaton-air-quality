import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '../../components/Button/Button';

const EmailConfirmation = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className='bg-white mt-[106px] max-w-[428px] m-auto p-6 sm:border sm:border-[#98A2B3] sm:rounded-xl'>
      <div className='text-center flex flex-col gap-1 items-center justify-center'>
        <h1 className='font-semibold text-lg'>Please check your email</h1>
        <p className='text-[#667085] text-sm'>
          We've sent a code to{' '}
          <span className='font-semibold'>aminu@gmail.com</span>
        </p>
      </div>
      <div className='m-auto mt-5 mb-1.5'>
        <OtpInput
          containerStyle={'justify-center gap-2'}
          inputStyle={{
            height: '60px',
            width: '60px',
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input
              {...props}
              placeholder='0'
              className='font-medium text-[3rem] border border-border text-primary rounded-lg w-16'
            />
          )}
        />
      </div>
      <p className='text-[#667085] text-sm text-center'>
        Didn't get a code?{' '}
        <span className='text-primary underline'>Click to resend</span>
      </p>
      <div>
        <Button>Verify</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
};

export default EmailConfirmation;
