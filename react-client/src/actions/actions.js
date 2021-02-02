import * as actionTypes from './index';
import axios from 'axios';

let hostAddress =
  process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

export const getHistory = () => async (dispatch) => {
  const res = await axios.post(`${hostAddress}/history`, {
    apiKey: process.env.REACT_APP_API_KEY,
  });
  dispatch({
    type: actionTypes.GET_HISTORY,
    payload: res.data.historyArray.reverse(),
  });
};

export const getCalculated = (operation, firstValue, secondValue) => async (
  dispatch
) => {
  const res = await axios.post(`${hostAddress}/${operation}`, {
    firstValue: firstValue,
    secondValue: secondValue,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  dispatch({
    type: actionTypes.CALCULATE,
    payload: res.data.result,
  });
};

export const clearOutput = () => (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_SCREEN,
  });
};

export const deleteById = (id) => async (dispatch) => {
  await axios.post(`${hostAddress}/deleteByID`, {
    id: id,
    apiKey: process.env.REACT_APP_API_KEY,
  });
  dispatch({
    type: actionTypes.DELETE_OPERATION,
    payload: id,
  });
};
