import React from 'react';

const History = ({ history, loading }) => {
  if (loading) {
    return (
      <div className='container'>
        <div className='row text-center mx-auto'>
          <div className='col my-auto'>
            <div className='spinner-border'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <ul className='row text-center list-group'>
        <li className='list-group-item d-flex justify-content-center align-items-center'>
          <h4>History</h4>
        </li>
        {history.map((operation, index) => (
          <li
            key={index}
            className='list-group-item d-flex justify-content-center align-items-center'
          >
            {operation}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
