import { all, call } from 'redux-saga/effects';

import { chartDataSagas } from './chartData/chartData.sagas';

export default function* rootSaga() {
  yield all([call(chartDataSagas)]);
}
