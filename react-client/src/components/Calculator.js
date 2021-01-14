import React from 'react';
import { useState } from 'react';

import Screen from './Screen';
import Number from './Number';
import Operator from './Operator';

const Calculator = ({ calculate, output, setOutput }) => {
  const [active, setActive] = useState(false);
  const [equal, setEqual] = useState(false);
  const [input, setInput] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case '=': {
        let [firstValue, secondValue] = input.split(/[+*\/-]/g);
        calculate(operation, firstValue, secondValue);
        break;
      }
      case 'Cls': {
        setInput('');
        setOutput('');
        break;
      }
      default: {
        if (input.search(/[+*\/-]/g) === -1) {
          setActive(true);
        }
        if (value.match(/[+*\/-]/g)) {
          if (input.search(/[+*\/-]/g) === -1) {
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
    <div className='container justify-content-center align-content-center my-auto'>
      <Screen question={input} answer={output} />
      <div className='row'>
        <Number label={'1'} handleClick={handleClick} />
        <Number label={'2'} handleClick={handleClick} />
        <Number label={'3'} handleClick={handleClick} />
        <Number label={'4'} handleClick={handleClick} />
        <Operator label={'-'} handleClick={handleClick} active={active} />
        <Operator label={'+'} handleClick={handleClick} active={active} />
      </div>
      <div className='row'>
        <Number label={'5'} handleClick={handleClick} />
        <Number label={'6'} handleClick={handleClick} />
        <Number label={'7'} handleClick={handleClick} />
        <Number label={'8'} handleClick={handleClick} />
        <Operator label={'*'} handleClick={handleClick} active={active} />
        <Operator label={'/'} handleClick={handleClick} active={active} />
      </div>
      <div className='row'>
        <Number label={'9'} handleClick={handleClick} />
        <Number label={'0'} handleClick={handleClick} />
        <Operator label={'Cls'} handleClick={handleClick} active={true} />
        <Operator label={'='} handleClick={handleClick} active={equal} />
      </div>
    </div>
  );
};

export default Calculator;
