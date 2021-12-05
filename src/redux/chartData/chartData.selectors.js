import { createSelector } from 'reselect';

const selectChartData = state => state.chart;

export const ChartData = createSelector(
  [selectChartData],
  chart => chart.ChartData
);
