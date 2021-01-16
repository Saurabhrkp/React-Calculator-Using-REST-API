import React from 'react';

const Operator = (props) => {
  return (
    <input
      type='button'
      className={
        props.active
          ? 'btn btn-primary m-2 p-4 font-weight-bold disabled col-2 rounded'
          : 'btn btn-primary m-2 p-4 font-weight-bold col-2 rounded'
      }
      onClick={props.active ? props.handleClick : function () {}}
      value={props.label}
    />
  );
};

export default Operator;
