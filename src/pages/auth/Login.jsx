import { Formik } from 'formik';
import React from 'react';
import InputBox from '../../components/Inputs/InputBox';
import { initialLoginValues, loginSchema } from '../../schema/auth.schema';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Login = () => {
  const handleSubmit = (values) => {
    console.log('Login form values', values);
  };

  return (
    <section id='login' className=''>
      <div className='bg-white mt-[106px] max-w-[428px] m-auto p-6 sm:border sm:border-[#98A2B3] sm:rounded-xl'>
        <div className='text-center flex flex-col gap-1 items-center mb-5'>
          <h1 className='font-semibold text-lg'>Please enter your details</h1>
          <p className='text-sm text-[#667085]'>
            Enter your email and password to access your account.
          </p>
        </div>
        <div>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            enableReinitialize
            initialValues={initialLoginValues}
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
              <div className='flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
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
                </div>
                <div>
                  <p className='my-4 text-center'>
                    Don't have an account yet?{' '}
                    <Link to={'/signup'} className='text-primary'>
                      Sign Up
                    </Link>
                  </p>
                  {/* Button Here */}
                  <Button>Sign in</Button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Login;
