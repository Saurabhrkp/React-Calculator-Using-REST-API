import React from 'react';
import { useState } from 'react';

import Screen from './Screen';
import Number from './Number';
import Operator from './Operator';

const Calculator = ({ calculate, output, clearOutput }) => {
  const [active, setActive] = useState(false);
  const [equal, setEqual] = useState(false);
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=': {
        setEqual(false);
        let [firstValue, secondValue] = input.split(/[+*/-]/g);
        calculate(operation, firstValue, secondValue);
        break;
      }
      case 'CLS': {
        setInput('');
        clearOutput();
        break;
      }
      default: {
        if (input.search(/[+*/-]/g) === -1) {
          setActive(true);
        }
        if (value.match(/[+*/-]/g)) {
          if (input.search(/[+*/-]/g) === -1) {
            value === '+'
              ? setOperation('add')
              : value === '-'
              ? setOperation('subtract')
              : value === '*'
              ? setOperation('multiply')
              : setOperation('divide');
          }
          setActive(false);
          setEqual(true);
        }
        setInput(input + value);
        break;
      }
    }
  };

  return (
    <div className='container-fluid card text-white bg-dark mb-3 shadow-lg rounded'>
      <Screen question={input} answer={output} />
      <div className='container p-2 text-center mb-5'>
        <div className='row justify-content-center'>
          <div className='col p-4'></div>
        </div>
        <div className='row justify-content-center'>
          <Number label={'1'} handleClick={handleClick} />
          <Number label={'2'} handleClick={handleClick} />
          <Number label={'3'} handleClick={handleClick} />
          <Operator label={'+'} handleClick={handleClick} active={active} />
        </div>
        <div className='row justify-content-center'>
          <Number label={'4'} handleClick={handleClick} />
          <Number label={'5'} handleClick={handleClick} />
          <Number label={'6'} handleClick={handleClick} />
          <Operator label={'-'} handleClick={handleClick} active={active} />
        </div>
        <div className='row justify-content-center'>
          <Number label={'7'} handleClick={handleClick} />
          <Number label={'8'} handleClick={handleClick} />
          <Number label={'9'} handleClick={handleClick} />
          <Operator label={'*'} handleClick={handleClick} active={active} />
        </div>
        <div className='row justify-content-center'>
          <Operator label={'CLS'} handleClick={handleClick} active={true} />
          <Number label={'0'} handleClick={handleClick} />
          <Operator label={'='} handleClick={handleClick} active={equal} />
          <Operator label={'/'} handleClick={handleClick} active={active} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
