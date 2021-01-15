import React from 'react';

const IO = (props) => {
  return (
    <div className='col col-10'>
      <input
        type='text'
        className='form-control text-right'
        readOnly
        value={props.value || ' '}
        style={{ fontSize: '1.5em' }}
      />
    </div>
  );
};

export default IO;
