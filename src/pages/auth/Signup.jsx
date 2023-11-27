import { Formik } from 'formik';
import React from 'react';
import InputBox from '../../components/Inputs/InputBox';
import { initialSignupValues, signupSchema } from '../../schema/auth.schema';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (values) => {
    console.log('Signup form values', values);
  };

  return (
    <div className='bg-white mt-[106px] max-w-[428px] m-auto p-6 sm:border sm:border-[#98A2B3] sm:rounded-xl'>
      <div className='text-center flex flex-col gap-1 items-center'>
        <h1 className='font-semibold text-lg'>Please enter your details</h1>
        <p>Enter your email and password to access your account.</p>
      </div>
      <div>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
          enableReinitialize
          initialValues={initialSignupValues}
        >
          {({
            values,
            setFieldTouched,
            isValid,
            setFieldValue,
            errors,
            handleSubmit,
            ...formik
          }) => (
            <div>
              <div className='flex flex-col gap-7'>
                <InputBox
                  placeholder={'username'}
                  label={'Email or username'}
                  name='username'
                  id='username'
                  value={values?.username}
                  isValid={values?.username && !errors?.username}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'password'}
                  label={'Password'}
                  name='password'
                  id='password'
                  value={values?.password}
                  isValid={values?.password && !errors?.password}
                  setFieldTouched={setFieldTouched}
                />
                <InputBox
                  placeholder={'confirm password'}
                  label={'Enter password again'}
                  name='confirm_password'
                  id='confirm_password'
                  value={values?.confirm_password}
                  isValid={
                    values?.confirm_password && !errors?.confirm_password
                  }
                  setFieldTouched={setFieldTouched}
                />
              </div>
              <div>
                <p>
                  Don't have an account yet? <Link to={'/login'}>Sign Up</Link>
                </p>
                {/* Button Here */}
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
