import React from 'react';
import sampleText from '../Data/SampleText';
import { useState } from 'react';
import Letter from './Letter';
const TypingTest = () => {
  const text = sampleText[0];

  return (
    <div className='flex flex-row'>
      {text.split(' ').map((char, index) => (
        <span key={index} className='correct'>
          {console.log(char)} // this is not i wanted
          <Letter character={char} />
        </span>
      ))}
    </div>
  );
};

export default TypingTest;
