import React from 'react';

const Operator = (props) => {
  return (
    <input
      type='button'
      className={
        props.active
          ? 'btn btn-outline-primary m-2 disabled'
          : 'btn btn-outline-primary m-2'
      }
      onClick={props.active ? props.handleClick : ''}
      value={props.label}
    />
  );
};

export default Operator;
