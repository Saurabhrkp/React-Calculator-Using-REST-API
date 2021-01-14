import React from 'react';
import IO from './IO';

const Screen = (props) => {
  return (
    <div className='form-group row justify-content-center mt-5'>
      <IO value={props.question} />
      <IO value={props.answer} />
    </div>
  );
};

export default Screen;
