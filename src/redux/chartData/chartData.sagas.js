import { takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios'; 

import ChartDataActionTypes from './chartData.types';

import {
  setData,
  setError
} from './chartData.actions.js';


export function* getChartData() {
  try {
    const res = yield axios({
      method: 'get',
      url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json',
    });
    yield put(setData(res.data));
  } catch (error) {
    yield put(setError(error));
  }
}

export function* onFetch() {
  yield takeLatest(ChartDataActionTypes.ON_FETCHING_CHART_DATA, getChartData);
}

export function* chartDataSagas() {
  yield all([
    call(onFetch)
  ]);
}
