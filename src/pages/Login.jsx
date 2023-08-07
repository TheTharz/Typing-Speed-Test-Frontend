import React, { useState } from 'react';
import TypewriterAnimation from '../components/TypeWriterAnimation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginValidation from '../constants/loginValidation';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function handleValidation(e) {
    e.preventDefault();
    const validationError = loginValidation(data);
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      const { email, password } = data;
      try {
        const reponse = await axios.post('/login', {
          email,
          password,
        });
        const user = reponse.data.user;
        if (user.error) {
          console.log(user.error);
        } else {
          setData({});
          navigate('/home');
          console.log('logged in successfully');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className='w-full h-screen flex flex-row items-center justify-center gap-8 bg-lightgray font-default'>
      {/* container of left side */}
      <div className='m-4 p-4 bg-darkbackground rounded-lg w-[400px] text-yellow'>
        <div className='p-2'>
          <h3 className='text-2xl font-light'>Welcome!</h3>
          <p className='text-3xl font-medium pt-6 pb-2'>Sign in to</p>
          <p className='text-[16px] font-regular'>Speed, Type, Excel</p>
        </div>
        <div className='py-4 px-2 text-[16px]'>
          <form onSubmit={handleValidation}>
            <div className='flex flex-col gap-1 my-2 py-2'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
                onChange={handleInput}
              />
              {errors.email && (
                <p className='text-red-500 text-[12px]'>{errors.email}</p>
              )}
            </div>
            <div className='flex flex-col gap-1 my-2 py-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Enter your password'
                className='border rounded px-4 py-2 border-border text-white focus:outline-none focus:border-lightgray bg-darkbackground'
                onChange={handleInput}
              />
              {errors.password && (
                <p className='text-red-500 text-[12px]'>{errors.password}</p>
              )}
            </div>
            <div className='flex flex-row justify-between items-center text-[12px]'>
              <div className='font-light space-x-1 flex items-center'>
                <input type='checkbox' />
                <label htmlFor='rememberMe'>Remember me</label>
              </div>
              <p className='text-lightgray'>Forgot Password?</p>
            </div>

            <div className='flex w-full justify-center items-center'>
              <button
                type='submit'
                className='w-[300px] bg-yellow text-darkbackground rounded-lg cursor-pointer m-4 p-2 text-16 font-medium'
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-row justify-center gap-1 text-xs'>
          <p className='text-lightgray font-light'>Don't have an account?</p>
          <p
            className='text-yellow font-semibold cursor-pointer'
            onClick={() => {
              navigate('/signup');
            }}
          >
            Register Now
          </p>
        </div>
      </div>

      {/* container of right side */}
      <div className='w-[500px]'>
        <TypewriterAnimation />
      </div>
    </div>
  );
};

export default Login;
