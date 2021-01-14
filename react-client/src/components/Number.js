import React from 'react';

const Number = (props) => {
  return (
    <input
      type='button'
      className='btn btn-outline-info m-2 p-4 col-2 font-weight-bold'
      onClick={props.handleClick}
      value={props.label}
    />
  );
};

export default Number;
