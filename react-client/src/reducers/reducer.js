import * as actionTypes from '../actions';

const initialState = {
  history: [],
  output: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HISTORY:
      return { ...state, history: action.payload };
    case actionTypes.CALCULATE:
      return { ...state, output: action.payload };
    case actionTypes.CLEAR_SCREEN:
      return { ...state, output: '' };
    case actionTypes.DELETE_OPERATION:
      return {
        ...state,
        history: state.history.filter((entry) => entry[0] !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
