import React from "react";

import { connect } from "react-redux";
import {uid} from 'react-uid';

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

import { updateData } from "../../redux/chartData/chartData.actions";

import styles from './Chart.module.css';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  const { type, elements, mainIndex, setChartData } = props;

  const getData = (label) => {
    const backgroundColor = [];
    const borderColor = [];
    elements.forEach((element) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      backgroundColor.push(`rgba(${r}, ${g}, ${b}, 0.2)`);
      borderColor.push(`rgba(${r}, ${g}, ${b})`);
    });
    const data = {
      labels: elements,
      datasets: [
        {
          label: label,
          data: elements,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    };
    return data;
  };

  const getChart = () => {
    switch (type) {
      case "Bar":
        return <Bar data={getData("Bar Chart")} />;
      case "Pie":
        return <Pie data={getData("Pie Chart")} />;
      default:
        return null;
    }
  };

  const handleOnChange = (e,mainIndex,index) => {
    const {value} = e.target;
    setChartData({mainIndex:mainIndex,dataIndex:index,value});
  };
  return (
    <div className={styles.chartContainer}>
      <div className={styles.inputContainer}>
        {elements.map((data,index) => {
          return (
            <input
              key={uid(`input-${index}`)}
              type="number"
              value={data}
              onChange={(e) => handleOnChange(e,mainIndex,index)}
            />
          );
        })}
      </div>
      {getChart()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setChartData: (data) => dispatch(updateData(data)),
});

export default connect(null, mapDispatchToProps)(Chart);
