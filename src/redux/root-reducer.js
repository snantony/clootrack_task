import { combineReducers } from 'redux';

import chartReducer from './chartData/chartData.reducer';


const rootReducer = combineReducers({
  chart: chartReducer,
});

export default rootReducer;
