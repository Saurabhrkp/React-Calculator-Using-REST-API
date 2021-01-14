import React from 'react';

const IO = (props) => {
  return (
    <div className=''>
      <input type='text' readOnly value={props.value} />
    </div>
  );
};

export default IO;
