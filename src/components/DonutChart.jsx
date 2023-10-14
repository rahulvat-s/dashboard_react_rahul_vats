import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DonutChart = () => {
  useEffect(() => {
    // Data and configuration for the chart
    const dataDoughnut = {
      labels: ["Target", "New", "Old"],
      datasets: [
        {
          data: [70, 180, 110],
          backgroundColor: [
            "rgb(236, 72, 153)",
            "rgb(105, 41, 163)",
            "rgb(236, 239, 241)",
          ],
          borderWidth: 0, // Set borderWidth to 0 to remove gaps between segments
          hoverOffset: 4,
        },
      ],
    };

    const configDoughnut = {
      type: "doughnut",
      data: dataDoughnut,
      options: {
        cutout: "60%", // Adjust the size of the hole in the center
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = dataDoughnut.labels[context.dataIndex];
                const value = dataDoughnut.datasets[0].data[context.dataIndex];
                const total = dataDoughnut.datasets[0].data.reduce(
                  (acc, val) => acc + val,
                  0
                );
                const percentage = ((value / total) * 100).toFixed(2) + "%";
                return `${label}: ${percentage}`;
              },
            },
          },
        },
      },
    };

    // Create the chart when the component mounts
    const chartDoughnut = new Chart(
      document.getElementById("chartDoughnut"),
      configDoughnut
    );

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      chartDoughnut.destroy();
    };
  }, []); // The empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="rounded-lg overflow-hidden relative">
      <canvas
        className="mt-2 lg:h-[12rem] lg:w-[12rem] h-[14rem] w-[14rem]"
        id="chartDoughnut"
      ></canvas>
      <div className="absolute inset-0 flex items-center justify-center align-center">
        <div className="text-neutral-800 text-xl font-bold">
          65%
          <div className="text-gray-700 text-xs">Total new</div>
          <div className="text-gray-700 text-xs">customers</div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
