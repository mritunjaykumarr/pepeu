import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const MyPieChart = () => {
  const data = {
    labels: ["Airdrop", "Team", "Liquidity", "PreSale"],
    datasets: [
      {
        data: [60, 10, 10, 20],
        backgroundColor: ["#f5a67e", "#1eb8e0", "#e66392", "#e8c3b9"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "The total supply of L2PEPE tokens will be allocated as follows",
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "350px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MyPieChart;
