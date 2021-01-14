import React from 'react';

const Operator = (props) => {
  return (
    <input
      type='button'
      className={
        props.active
          ? 'btn btn-outline-primary m-2 p-4 font-weight-bold disabled col-2'
          : 'btn btn-outline-primary m-2 p-4 font-weight-bold col-2'
      }
      onClick={props.active ? props.handleClick : function () {}}
      value={props.label}
    />
  );
};

export default Operator;
