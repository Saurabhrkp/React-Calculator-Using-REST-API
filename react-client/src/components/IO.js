import React from 'react';

const IO = (props) => {
  return (
    <div className='col col-10'>
      <input
        type='text'
        className='form-control rounded-0'
        readOnly
        value={props.value || ' '}
      />
    </div>
  );
};

export default IO;
