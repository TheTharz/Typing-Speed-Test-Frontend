import React from 'react';

const Login = () => {
  return (
    <div className='w-full h-screen flex flex-row items-center justify-center gap-8 bg-lightgray '>
      {/* container of left side */}
      <div>
        <div>
          <h3>Welcome</h3>
          <p>Sign in to</p>
          <p>Speed, Type, Excel</p>
        </div>
        <div>
          <form>
            <div>
              <label for='email'>Username</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='username'
              />
            </div>
            <div>
              <label for='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='password'
              />
            </div>
            <div>
              <input type='checkbox' />
              <label for='rememberMe'>Remember me</label>
              <p>Forgot Password</p>
            </div>
            <button type='submit'>Login</button>
          </form>
        </div>
        <div>
          <p>Don't have an account</p>
          <p>Register Now</p>
        </div>
      </div>

      {/* container of right side */}
      <div>
        <p>
          Redefine Your <br /> Typing Velocity: <br /> Where Words <br /> Meet
          Warp <br /> Speed
        </p>
      </div>
    </div>
  );
};

export default Login;
