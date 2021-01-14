import React from 'react';
import { useState, useEffect } from 'react';

import Button from './Button';
import Screen from './Screen';

const Calculator = ({ input, output }) => {
  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=': {
        break;
      }
      case 'Cls': {
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <div className='container justify-content-center align-content-center my-auto'>
      <Screen question={input} answer={output} />
      <div className='row'>
        <Button label={'1'} handleClick={handleClick} type='input' />
        <Button label={'2'} handleClick={handleClick} type='input' />
        <Button label={'3'} handleClick={handleClick} type='input' />
        <Button label={'4'} handleClick={handleClick} type='input' />
        <Button label={'-'} handleClick={handleClick} type='action' />
        <Button label={'+'} handleClick={handleClick} type='action' />
      </div>
      <div className='row'>
        <Button label={'5'} handleClick={handleClick} type='input' />
        <Button label={'6'} handleClick={handleClick} type='input' />
        <Button label={'7'} handleClick={handleClick} type='input' />
        <Button label={'8'} handleClick={handleClick} type='input' />
        <Button label={'*'} handleClick={handleClick} type='action' />
        <Button label={'/'} handleClick={handleClick} type='action' />
      </div>
      <div className='row'>
        <Button label={'9'} handleClick={handleClick} type='input' />
        <Button label={'.'} handleClick={handleClick} type='input' />
        <Button label={'0'} handleClick={handleClick} type='input' />
        <Button label={'Cls'} handleClick={handleClick} type='action' />
        <Button label={'='} handleClick={handleClick} type='action' />
      </div>
    </div>
  );
};

export default Calculator;
