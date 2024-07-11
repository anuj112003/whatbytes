// components/PieChart.js
// 'use client';
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const PieChart = (score) => {
// const sto =score.params;
//   const data = {
//     labels: ['Red', 'Blue'],
//     datasets: [
//       {
//         label: '# of score',
//         data: [10, 15],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
          
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
         
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };
// console.log(score);
//   return (
//     <div style={{ position: 'relative', width: '100%', height: '400px' }}>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default PieChart;


'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ score }) => {
  // Assuming score is a string like '10 / 15', parse it
  const [correct] = score.split('/').map(Number);

  // Data for the pie chart
  const data = {
    
    datasets: [
      {
        label: 'Score Breakdown',
        data: [correct, 15 - correct],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px'}}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

// components/CircularProgressSlider.js
// components/CircularSliderControl.js
// import React, { useState } from 'react';

// const CircularSliderControl = ({ size = 100, strokeWidth = 10, initialValue , color = "text-blue-500" }) => {
//   const value=initialValue.split('/').map(Number);
//   const [progress, setProgress] = useState(value[0]); // Use the initial value
// console.log(value[0]);
//   const center = size / 2;
//   const radius = center - strokeWidth / 2;
//   const circumference = 2 * Math.PI * radius;

//   const handleInputChange = (e) => {
//     const newValue = Math.min(Math.max(e.target.value, 0), 100);
//     setProgress(newValue);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-center justify-center bg-white p-2 rounded shadow-lg">
//       <svg width={size} height={size} className="relative">
//         <circle
//           className="text-gray-300"
//           strokeWidth={strokeWidth}
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={center}
//           cy={center}
//         />
        
//         <circle
//           className={color}
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference - (progress / 100) * circumference}
//           strokeLinecap="round"
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={center}
          
//         />
        
//       </svg>
//       {/* <input
//         type="range"
//         min="0"
//         max="100"
//         value={progress}
//         onChange={handleInputChange}
//         className="mt-4 w-full"
//       /> */}
//     </div>
//   );
// };

// export default CircularSliderControl;
