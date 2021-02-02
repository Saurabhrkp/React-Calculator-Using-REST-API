import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getHistory,
  getCalculated,
  clearOutput,
  deleteById,
} from './actions/actions';
import History from './components/History';
import Calculator from './components/Calculator';

const App = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    props.getHistory();
    setLoading(false);
  }, [props.output, props.getHistory]);

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-auto col-sm-12 col-md-6 col-lg-6 mb-3'>
          <Calculator
            output={props.output}
            calculate={props.getCalculated}
            clearOutput={props.clearOutput}
          />
        </div>
        <div className='col col-sm-12 col-md-6 col-lg-6'>
          <History
            history={props.history}
            loading={loading}
            deleteById={props.deleteById}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    history: state.data.history,
    output: state.data.output,
  };
};

export default connect(mapStateToProps, {
  getHistory,
  getCalculated,
  clearOutput,
  deleteById,
})(App);
