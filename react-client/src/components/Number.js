import React from 'react';

const Number = (props) => {
  return (
    <input
      type='button'
      className='btn btn-outline-info m-2'
      onClick={props.handleClick}
      value={props.label}
    />
  );
};

export default Number;
