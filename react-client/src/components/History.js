import React from 'react';
import { useState } from 'react';

import Pagination from './Pagination';

const History = ({ history, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  let currentOperations = [];
  const operationsPerPage = 10;

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
        {currentOperations.map((operation, index) => (
          <li
            key={index}
            className='list-group-item d-flex justify-content-center align-items-center'
          >
            {operation}
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
