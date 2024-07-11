
'use client';

// import ComparisonGraph from '../component/ComparisonGraph';
// import Piechart from "../component/Piechart";
// import ScoreForm from "../component/ScoreForm";
// import { useState } from 'react';

// // export const metadata = {
// //   title: 'WhatBytes Dashboard',
// //   description: 'WhatBytes Skill Test Dashboard',
// // };

// export default function Home() {
//   const syllabusAnalysis = [
//     { title: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-600' },
//     { title: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-600' },
//     { title: 'Tables & References in HTML', percentage: 24, color: 'bg-red-600' },
//     { title: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-600' },
//   ];

//   const [showScoreForm, setShowScoreForm] = useState(false);

//   const update = () => {
//     setShowScoreForm(true);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <h1 className="text-xl font-bold">WhatBytes</h1>
//         </div>
//         <nav>
//           <ul>
//             <li className="p-4 hover:bg-gray-200 ">
//               <a href="#">Dashboard</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Skill Test</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Internship</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">
//         <div className="bg-white p-6 shadow-md rounded-md">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Skill Test</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4 flex items-center justify-between border">
//               <div>
//                 <h4 className='font-bold'>Hyper Text Markup Language</h4>
//                 <p>Question: 8 | Duration: 15 min | Submitted on 5 July 2021</p>
//               </div>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={update}>Update</button>
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Syllabus Wise Analysis</h3>
//               <div className="mt-4 space-y-4">
//                 {syllabusAnalysis.map((item, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between items-center mb-2">
//                       <p>{item.title}</p>
//                       <p className="font-bold">{item.percentage}%</p>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-4">
//                       <div
//                         className={`${item.color} h-4 rounded-full`}
//                         style={{ width: `${item.percentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
//               <h3 className="text-xl font-bold">Quick Statistics</h3>
//               <div className="flex items-center justify-between mt-4">
//                 <div>
//                   <p className="text-gray-600">Your Rank</p>
//                   <p className="text-2xl font-bold">1</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Percentile</p>
//                   <p className="text-2xl font-bold">30%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Correct Answers</p>
//                   <p className="text-2xl font-bold">10 / 15</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//             <div className="bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Comparison Graph</h3>
//               <p className="mt-2">You scored 30% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
//               <div className="mt-4">
//                 <ComparisonGraph />
//               </div>
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Question Analysis</h3>
//               <p className="mt-2">You scored 10 questions correct out of 15. However, it still needs some improvements</p>
//               <div>
//                 <Piechart />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {showScoreForm && (
//           <ScoreForm onClose={() => setShowScoreForm(false)} />
//         )}
//       </main>
//     </div>
//   );
// }




// import ComparisonGraph from '../component/ComparisonGraph';
// import Piechart from "../component/Piechart";
// import ScoreForm from "../component/ScoreForm";
// import { useState } from 'react';

// // export const metadata = {
// //   title: 'WhatBytes Dashboard',
// //   description: 'WhatBytes Skill Test Dashboard',
// // };

// export default function Home() {
//   const syllabusAnalysis = [
//     { title: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-600' },
//     { title: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-600' },
//     { title: 'Tables & References in HTML', percentage: 24, color: 'bg-red-600' },
//     { title: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-600' },
//   ];

//   const [showScoreForm, setShowScoreForm] = useState(false);
//   const [statistics, setStatistics] = useState({
//     rank: 1,
//     percentile: 30,
//     correctAnswers: '10 / 15'
//   });

//   const update = () => {
//     setShowScoreForm(true);
//   };

//   const handleUpdateStatistics = (newStatistics) => {
//     setStatistics(newStatistics);
//     setShowScoreForm(false);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <h1 className="text-xl font-bold">WhatBytes</h1>
//         </div>
//         <nav>
//           <ul>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Dashboard</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Skill Test</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Internship</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">
//         <div className="bg-white p-6 shadow-md rounded-md">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Skill Test</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4 flex items-center justify-between border">
//               <div>
//                 <h4 className='font-bold'>Hyper Text Markup Language</h4>
//                 <p>Question: 8 | Duration: 15 min | Submitted on 5 July 2021</p>
//               </div>
//               <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={update}>Update</button>
//               {showScoreForm && (
//           <ScoreForm onClose={() => setShowScoreForm(false)} onUpdateStatistics={handleUpdateStatistics} />
//         )}
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Syllabus Wise Analysis</h3>
//               <div className="mt-4 space-y-4">
//                 {syllabusAnalysis.map((item, index) => (
//                   <div key={index}>
//                     <div className="flex justify-between items-center mb-2">
//                       <p>{item.title}</p>
//                       <p className="font-bold">{item.percentage}%</p>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-4">
//                       <div
//                         className={`${item.color} h-4 rounded-full`}
//                         style={{ width: `${item.percentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
//               <h3 className="text-xl font-bold">Quick Statistics</h3>
//               <div className="flex items-center justify-between mt-4">
//                 <div>
//                   <p className="text-gray-600">Your Rank</p>
//                   <p className="text-2xl font-bold">{statistics.rank}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Percentile</p>
//                   <p className="text-2xl font-bold">{statistics.percentile}%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Correct Answers</p>
//                   <p className="text-2xl font-bold">{statistics.correctAnswers}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//             <div className="bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Comparison Graph</h3>
//               <p className="mt-2">You scored {statistics.percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
//               <div className="mt-4">
//                 <ComparisonGraph />
//               </div>
//             </div>

//             <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Question Analysis</h3>
//               <p className="mt-2">You scored {statistics.correctAnswers} correct out of 15. However, it still needs some improvements</p>
//               <Piechart score={statistics.correctAnswers}/>
//               <div className='h-80 w-80 bg-slate-100 rounded-[50%] absolute top-[790px] right-[170px]'>
                 
//               </div>
              
//             </div>
//           </div>
          
//         </div>

       
//       </main>
//     </div>
//   );
// }


// pages/index.tsx
import ComparisonGraph from '../component/ComparisonGraph'; // Ensure the path is correct
import Piechart from '../component/Piechart'; // Ensure the path is correct
import ScoreForm from '../component/ScoreForm'; // Ensure the path is correct
import { useState } from 'react';
interface Statistics {
  rank: number;
  percentile: number;
  correctAnswers: string;
}
export default function Home() {
  const syllabusAnalysis = [
    { title: 'HTML Tools, Forms, History', percentage: 80, color: 'bg-blue-600' },
    { title: 'Tags & References in HTML', percentage: 60, color: 'bg-orange-600' },
    { title: 'Tables & References in HTML', percentage: 24, color: 'bg-red-600' },
    { title: 'Tables & CSS Basics', percentage: 96, color: 'bg-green-600' },
  ];

  const [showScoreForm, setShowScoreForm] = useState(false);
  const [statistics, setStatistics] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: '10 / 15'
  });

  const update = () => {
    setShowScoreForm(true);
  };

  const handleUpdateStatistics = (newStatistics: Statistics) => {
    setStatistics(newStatistics);
    setShowScoreForm(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h1 className="text-xl font-bold">WhatBytes</h1>
        </div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-200">
              <a href="#">Dashboard</a>
            </li>
            <li className="p-4 hover:bg-gray-200">
              <a href="#">Skill Test</a>
            </li>
            <li className="p-4 hover:bg-gray-200">
              <a href="#">Internship</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-6">
        <div className="bg-white p-4 md:p-6 shadow-md rounded-md">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Skill Test</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4 flex items-center justify-between border">
              <div>
                <h4 className='font-bold text-sm md:text-base'>Hyper Text Markup Language</h4>
                <p className="text-xs md:text-sm">Question: 8 | Duration: 15 min | Submitted on 5 July 2021</p>
              </div>
              <button className="bg-blue-600 text-white px-2 py-1 text-xs md:px-4 md:py-2 rounded" onClick={update}>Update</button>
             <div className=''> {showScoreForm && (
                <ScoreForm onClose={() => setShowScoreForm(false)} onUpdateStatistics={handleUpdateStatistics} />
              )}</div>
            </div>

            <div className="mt-4 md:mt-6 bg-gray-50 p-4 rounded-md shadow-md">
              <h3 className="text-lg md:text-xl font-bold">Syllabus Wise Analysis</h3>
              <div className="mt-2 md:mt-4 space-y-4">
                {syllabusAnalysis.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm md:text-base">{item.title}</p>
                      <p className="font-bold text-sm md:text-base">{item.percentage}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`${item.color} h-4 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md shadow-md mb-4">
              <h3 className="text-lg md:text-xl font-bold">Quick Statistics</h3>
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-4">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600 text-sm md:text-base">Your Rank</p>
                  <p className="text-xl md:text-2xl font-bold">{statistics.rank}</p>
                </div>
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600 text-sm md:text-base">Percentile</p>
                  <p className="text-xl md:text-2xl font-bold">{statistics.percentile}%</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm md:text-base">Correct Answers</p>
                  <p className="text-xl md:text-2xl font-bold">{statistics.correctAnswers}</p>
                </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            <div className="bg-gray-50 p-4 rounded-md shadow-md">
              <h3 className="text-lg md:text-xl font-bold">Comparison Graph</h3>
              <p className="mt-2 text-sm md:text-base">You scored {statistics.percentile}% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
              <div className="mt-4">
                <ComparisonGraph />
              </div>
            </div>

            <div className="mt-4 md:mt-6 bg-gray-50 p-4 rounded-md shadow-md ">
              <h3 className="text-lg md:text-xl font-bold">Question Analysis</h3>
              <p className="mt-2 text-sm md:text-base">You scored {statistics.correctAnswers} correct out of 15. However, it still needs some improvements</p>
              <Piechart score={statistics.correctAnswers} />
              
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}



// app/page.js 2222
// import ComparisonGraph from '../component/ComparisonGraph';
// import Image from 'next/image';

// export const metadata = {
//   title: 'WhatBytes Dashboard',
//   description: 'WhatBytes Skill Test Dashboard',
// };

// export default function Home() {
//   const syllabusAnalysis = [
//     { title: 'HTML Tools, Forms, History', percentage: 80 },
//     { title: 'Tags & References in HTML', percentage: 60 },
//     { title: 'Tables & References in HTML', percentage: 24 },
//     { title: 'Tables & CSS Basics', percentage: 96 },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <h1 className="text-xl font-bold">WhatBytes</h1>
//         </div>
//         <nav>
//           <ul>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Dashboard</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Skill Test</a>
//             </li>
//             <li className="p-4 hover:bg-gray-200">
//               <a href="#">Internship</a>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">
//         <div className="bg-white p-6 shadow-md rounded-md">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold">Skill Test</h2>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Quick Statistics</h3>
//               <div className="flex items-center justify-between mt-4">
//                 <div>
//                   <p className="text-gray-600">Your Rank</p>
//                   <p className="text-2xl font-bold">1</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Percentile</p>
//                   <p className="text-2xl font-bold">30%</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Correct Answers</p>
//                   <p className="text-2xl font-bold">10 / 15</p>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-md shadow-md">
//               <h3 className="text-xl font-bold">Comparison Graph</h3>
//               <p className="mt-2">You scored 30% percentile which is lower than the average percentile 72% of all the engineers who took this assessment</p>
//               <div className="mt-4">
//                 <ComparisonGraph />
//               </div>
//             </div>
//           </div>

  //           <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
  //             <h3 className="text-xl font-bold">Syllabus Wise Analysis</h3>
  //             <div className="mt-4 space-y-4">
  //               {syllabusAnalysis.map((item, index) => (
  //                 <div key={index}>
  //                   <div className="flex justify-between items-center mb-2">
  //                     <p>{item.title}</p>
  //                     <p className="font-bold">{item.percentage}%</p>
  //                   </div>
  //                   <div className="w-full bg-gray-200 rounded-full h-4">
  //                     <div
  //                       className="bg-blue-600 h-4 rounded-full"
  //                       style={{ width: `${item.percentage}%` }}
  //                     ></div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>

//           <div className="mt-6 bg-gray-50 p-4 rounded-md shadow-md">
//             <h3 className="text-xl font-bold">Question Analysis</h3>
//             <p className="mt-2">You scored 10 question correct out of 15. However it still needs some improvements</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
