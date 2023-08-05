import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const TypeWriterAnimation = () => {
  return (
    <div className='font-semibold text-[54px] m-3 p-1 font-default text-yellow'>
      <p className='text-darkbackground'>
        Redifine Your <br /> Typing Velocity :{' '}
      </p>
      <p>
        Where Words Meet <br />
      </p>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Warp Speed',
          2000, // wait 2s before replacing "Mice" with "Hamsters"
          'Swift Fingers',
          2000,
          'Quick Precision',
          2000,
        ]}
        wrapper='span'
        speed={20}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWriterAnimation;
