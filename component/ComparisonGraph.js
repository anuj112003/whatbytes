'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
  datasets: [
    {
      label: 'Number of Students',
      data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function ComparisonGraph() {
  return <Line data={data} options={options} />;
}
