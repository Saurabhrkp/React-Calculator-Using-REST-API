import React from 'react';
import IO from './IO';

const Screen = (props) => {
  return (
    <div className=''>
      <IO value={props.question} />
      <IO value={props.answer} />
    </div>
  );
};

export default Screen;
