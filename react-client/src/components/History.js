import React from 'react';
import { useState } from 'react';

import Pagination from './Pagination';

const History = ({ history, loading, deleteById }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let currentOperations = [];
  const operationsPerPage = 12;

  // Get current operation history
  const indexOfLastOperation = currentPage * operationsPerPage;
  const indexOfFirstOperation = indexOfLastOperation - operationsPerPage;
  currentOperations = history.slice(
    indexOfFirstOperation,
    indexOfLastOperation
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (loading) {
    return (
      <div className='container'>
        <div className='row text-center my-5'>
          <div className='col my-5'>
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
      <ul className='row text-center list-group shadow-lg'>
        <li className='list-group-item list-group-item-action active rounded-top'>
          <h4>History</h4>
        </li>
        {currentOperations.map((operation) => (
          <li
            key={operation[0]}
            className='list-group-item list-group-item-action'
          >
            {operation[1]}
            <button
              type='button'
              className='close'
              aria-label='Close'
              onClick={() => deleteById(operation[0])}
            >
              <span className='float-right' aria-hidden='true'>
                &times;
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className='row justify-content-center my-3'>
        <Pagination
          operationsPerPage={operationsPerPage}
          totalOperations={history.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default History;
