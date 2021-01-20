import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import History from './components/History';
import Calculator from './components/Calculator';

const App = () => {
  const [output, setOutput] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  let hostAddress = '';
  if (process.env.NODE_ENV === 'development') {
    hostAddress = 'http://localhost:5000';
  }

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.post(`${hostAddress}/history`, {
          apiKey: process.env.REACT_APP_API_KEY,
        });
        setHistory(res.data.historyArray.reverse());
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getHistory();
  }, [output, hostAddress]);

  const calculate = async (operation, firstValue, secondValue) => {
    try {
      const res = await axios.post(`${hostAddress}/${operation}`, {
        firstValue: firstValue,
        secondValue: secondValue,
        apiKey: process.env.REACT_APP_API_KEY,
      });
      setOutput(res.data.result);
    } catch (error) {
      setOutput(' ');
      console.error(error);
    }
  };

  const deleteById = async (id) => {
    try {
      await axios.post(`${hostAddress}/deleteByID`, {
        id: id,
        apiKey: process.env.REACT_APP_API_KEY,
      });
      setHistory(history.filter((entry) => entry[0] !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-auto col-sm-12 col-md-6 col-lg-6 mb-3'>
          <Calculator
            output={output}
            calculate={calculate}
            setOutput={setOutput}
          />
        </div>
        <div className='col col-sm-12 col-md-6 col-lg-6'>
          <History
            history={history}
            loading={loading}
            deleteById={deleteById}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
