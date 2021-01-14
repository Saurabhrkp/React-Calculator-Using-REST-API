import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import History from './components/History';
import Calculator from './components/Calculator';

const App = () => {
  const [output, setOutput] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/history?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        setHistory(res.data.historyArray.reverse());
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getHistory();
  }, [output]);

  const calculate = async (operation, firstValue, secondValue) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/${operation}?apiKey=${process.env.REACT_APP_API_KEY}&firstValue=${firstValue}&secondValue=${secondValue}`
      );
      setOutput(res.data.result);
    } catch (error) {
      setOutput(' ');
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-auto col-sm-12 col-md-6 col-lg-6'>
          <Calculator
            output={output}
            calculate={calculate}
            setOutput={setOutput}
          />
        </div>
        <div className='col col-sm-12 col-md-6 col-lg-6'>
          <History history={history} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default App;
