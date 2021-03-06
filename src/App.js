import React, { useEffect } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { uid } from "react-uid";

import { ChartData } from "./redux/chartData/chartData.selectors";
import { onFetchData } from "./redux/chartData/chartData.actions";

import Chart from "./components/Chart/Chart";

import style from "./App.module.css";

const App = (props) => {
  const { getChartData, ChartData } = props;
  useEffect(() => {
    getChartData();
  }, [getChartData]);

  const renderCharts = () => {
    return ChartData.map((data, index) => {
      return <Chart key={uid(`chart-${index}`)} {...data} mainIndex={index} />;
    });
  };

  return (
    <div className={style.container}>
      {ChartData.length > 0 ? renderCharts() : "No data"}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  ChartData: ChartData,
});

const mapDispatchToProps = (dispatch) => ({
  getChartData: () => dispatch(onFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
