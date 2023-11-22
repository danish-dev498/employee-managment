import React from 'react';
import backgroundImage from '../../../assets/background.jpg';
import abstraction from '../../../assets/abstraction.png';

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import CheckboxInput from '../../../components/ui/CheckboxInput';
import Drawer from '../../../components/ui/Drawer';
import WithGoggle from './WithGoggle';
import ShowPassword from './ShowPassword';

const LoginForm = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className='flex items-center justify-center h-screen'>
        <div className='xl:w-[1200px] lg:w-[850px]  shadow-xl rounded-3xl mr-4 ml-4'>
          <div className='flex justify-between md:h-[600px]'>
            <div className='xs:hidden lg:block xl:w-[570px] lg:w-[400px] flex items-center justify-center bg-white bg-opacity-25  backdrop-blur-sm rounded-l-3xl'>
              <img className='rotate-3 ' src={abstraction} alt='abstraction' />
            </div>

            <div className='p-16 bg-white md:flex-1 sm:w-[540px] rounded-r-3xl xs:rounded-l-3xl lg:rounded-l-none'>
              <form>
                <div className='mb-5'>
                  <h1 className='text-3xl font-semibold leading-7 '>Sign In</h1>
                  <span className='text-lg font-normal '>Welcome back</span>
                </div>
                <Input id='email' label='Email' />
                <div className='relative mb-4'>
                  <Input id='password' label='Password' />
                  <div className='absolute bottom-8 right-3'>
                    <ShowPassword />
                  </div>
                  <p className='absolute bottom-0 right-0 text-sm font-medium'>
                    Forget Password
                  </p>
                </div>
                <div className='flex items-center gap-3 mb-4 '>
                  <CheckboxInput />
                  <h1 className='text-sm'>
                    By continuing you agree to{' '}
                    <span className='text-teal-blue-400'>
                      Terms & Conditions
                    </span>{' '}
                    and{' '}
                    <span className='text-teal-blue-400'>Privacy Policy</span>
                  </h1>
                </div>

                <div className='w-full'>
                  <Button type='small'>Create Account</Button>
                </div>
              </form>
              <Drawer />
              <WithGoggle>Sign in with Google</WithGoggle>
              <div>
                <h1 className='text-sm font-medium text-center'>
                  Already have an account?{' '}
                  <span className='text-teal-blue-400'>Sign in</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
