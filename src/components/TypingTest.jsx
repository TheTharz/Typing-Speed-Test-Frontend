import React from 'react';
import sampleText from '../Data/SampleText';
import { useState } from 'react';
const TypingTest = () => {
  const text = sampleText[0];
  return (
    <div>
      {text.split('').map((char, index) => (
        <span key={index} className='correct'>
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingTest;
