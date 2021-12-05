import ChartDataActionTypes from './chartData.types';

export const onFetchData = () => ({
  type: ChartDataActionTypes.ON_FETCHING_CHART_DATA,
});


export const setData = (data) => ({
  type: ChartDataActionTypes.SET_CONTENT_CHART_DATA,
  payload: data
});

export const setError = (error) => ({
  type: ChartDataActionTypes.SET_ERROR,
  payload: error
});

