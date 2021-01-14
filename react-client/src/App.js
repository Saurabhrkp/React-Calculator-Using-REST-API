import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import History from './components/History';
import Calculator from './components/Calculator';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/history?apiKey=${process.env.REACT_APP_AUTHENTICATION_KEY}`
        );
        setHistory(res.data.historyArray);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    getHistory();
  }, [output]);

  return (
    <div className='container row vh-100 justify-content-center align-content-center'>
      <div className='col'>
        <Calculator input={input} output={output} />
      </div>
      <div className='col'>
        <History history={history} loading={loading} />
      </div>
    </div>
  );
};

export default App;
