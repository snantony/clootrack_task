import ChartDataActionTypes from "./chartData.types";

const INITIAL_STATE = {
  ChartData: [],
  error: null,
};

const chartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ChartDataActionTypes.SET_CONTENT_CHART_DATA:
      return {
        ...state,
        ChartData: action.payload,
        error: null,
      };
    case ChartDataActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default chartReducer;
