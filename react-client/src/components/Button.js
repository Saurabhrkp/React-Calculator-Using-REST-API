import React from 'react';

const Button = (props) => {
  return (
    <input
      type='button'
      className={
        props.type === 'action'
          ? 'btn btn-outline-info m-2'
          : 'btn btn-outline-primary m-2'
      }
      onClick={props.handleClick}
      value={props.label}
    />
  );
};

export default Button;
