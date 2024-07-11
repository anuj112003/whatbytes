// components/ScoreForm.js
// "use client";


// import { useState } from 'react';

// const ScoreForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     rank: '',
//     percentile: '',
//     score: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send the data to an API
//     console.log('Form data submitted:', formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
//       <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
//         <h2 className="text-xl font-bold mb-4">Update Score</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="rank" className="block text-gray-700 mb-2">Rank:</label>
//             <input
//               type="text"
//               id="rank"
//               name="rank"
//               value={formData.rank}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="percentile" className="block text-gray-700 mb-2">Percentile:</label>
//             <input
//               type="text"
//               id="percentile"
//               name="percentile"
//               value={formData.percentile}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="score" className="block text-gray-700 mb-2">Score:</label>
//             <input
//               type="numeric"
//               id="score"
//               name="score"
//               value={formData.score}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div className="flex justify-end">
           
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ScoreForm;
"use client";
import { useState } from 'react';

const ScoreForm = ({ onClose, onUpdateStatistics }) => {
  const [formData, setFormData] = useState({
    rank: '',
    percentile: '',
    score: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the statistics in the parent component
    onUpdateStatistics({
      rank: formData.rank || 1,
      percentile: formData.percentile || 0,
      correctAnswers: formData.score || '0 / 15'
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-100 ">
      <div className="bg-white p-6 rounded-md shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Update Statistics</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="rank" className="block text-gray-700">Rank:</label>
            <input
              type="text"
              id="rank"
              name="rank"
              value={formData.rank}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="percentile" className="block text-gray-700">Percentile:</label>
            <input
              type="text"
              id="percentile"
              name="percentile"
              value={formData.percentile}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="score" className="block text-gray-700">Score:</label>
            <input
              type="text"
              id="score"
              name="score"
              value={formData.score}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
            <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScoreForm;
