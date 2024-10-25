"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Graph = () => {
  const data = {
    labels: ["Bills", "Food", "Shopping", "Insurance"],
    datasets: [
      {
        label: "My Dataset",
        data: [200, 50, 100, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart Example",
      },
    },
  };
  return (
    <div className="container flex justify-between mt-[40px]">
      <div className="rounded-xl flex flex-col w-[640px] h-[416px] bg-white">
        <div className="flex gap-[8px] items-center px-6 py-4">
          <p className="tex-[16px] leading-[24px] font-[600] text-[#0F172A]">
            Income-Expense
          </p>
        </div>
        <div className="px-6 py-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">Grapch</div>
        </div>
      </div>
      <div className="rounded-xl flex flex-col w-[640px] h-[416px] bg-white">
        <div className="flex gap-[8px] items-center px-6 py-4">
          <p className="text-[16px] leading-[24px] font-[600] text-[#0F172A]">
            Income-Expense
          </p>
          <p>Jun 1 - Nov 30</p>
        </div>
        <div className="px-6 py-5 flex flex-col w-[400px] h-[400px] gap-4">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
