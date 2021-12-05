import React from "react";

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
  const { type, elements } = props;
  console.log(props);

  const getData = (label) => {
    const backgroundColor = [];
    const borderColor = [];
    elements.forEach(element => {
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
        return <Pie data={getData("Pie Chart")}/>;
      default:
        return null;
    }
  };
  return <div>{getChart()}</div>;
};

export default Chart;
