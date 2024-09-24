// 'use client';
// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Link from 'next/link';

// const CreateQuestion = () => {
//   const [question, setQuestion] = useState('');
//   const [weight, setWeight] = useState(10);
//   const [answers, setAnswers] = useState(['']);
//   const [explanations, setExplanations] = useState(['']);
//   const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
//   const [shuffleOptions, setShuffleOptions] = useState(false);
//   const [activeAnswerIndex, setActiveAnswerIndex] = useState(null);
//   const [activeButton, setActiveButton] = useState(null);

//   const handleSave = () => {
//     console.log({
//       question,
//       weight,
//       answers,
//       explanations,
//       correctAnswerIndex,
//       shuffleOptions,
//     });
//   };

//   const handleCancel = () => {
//     setQuestion('');
//     setWeight(10);
//     setAnswers(['']);
//     setExplanations(['']);
//     setCorrectAnswerIndex(null);
//     setShuffleOptions(false);
//   };

//   const addAnswer = () => {
//     setAnswers([...answers, '']);
//   };

//   const removeAnswer = (index) => {
//     const newAnswers = answers.filter((_, i) => i !== index);
//     const newExplanations = explanations.filter((_, i) => i !== index);
//     setAnswers(newAnswers);
//     setExplanations(newExplanations);

//     if (correctAnswerIndex === index) {
//       setCorrectAnswerIndex(null);
//     } else if (correctAnswerIndex > index) {
//       setCorrectAnswerIndex(correctAnswerIndex - 1);
//     }

//     if (activeAnswerIndex === index) {
//       setActiveAnswerIndex(null);
//     }
//   };

//   const handleAnswerChange = (index, value) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = value;
//     setAnswers(newAnswers);
//   };

//   const handleExplanationChange = (index, value) => {
//     const newExplanations = [...explanations];
//     newExplanations[index] = value;
//     setExplanations(newExplanations);
//   };

//   const handleClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   const handleAnswerClick = (index) => {
//     setActiveAnswerIndex(index);
//   };

//   const toolbarOptions = [
//     ['bold', 'italic', 'underline', 'strike'],
//     [{ list: 'ordered' }, { list: 'bullet' }],
//     ['link', 'image'],
//     [{ header: [1, 2, 3, false] }],
//   ];

//   const modules = {
//     toolbar: toolbarOptions,
//   };

//   return (
//     <>
//       <div className="<div className="container mx-auto p-4 style={{ maxWidth: '1440px' }}></div>

//       {/* Header dengan Warna Biru Kustom */}
//       <header className="bg-customBlue text-white p-4 sm:p-6 font-poppins" style={{ maxWidth: '1440px', height: '108px' }}>
//         <div className="container mx-auto flex justify-start items-center p-0">
//           <Link href="/">
//             <img src="/img/menu.png" alt="Menu" className="h-7" style={{ maxWidth: '69px', height: '70px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Vector.png" alt="Vector" className="h-6" style={{ maxWidth: '279px', height: '50px', marginLeft: '20px' }} />
//           </Link>
//         </div>
//       </header>

//       {/* Header Baru dengan Tombol */}
//       <header className="bg-newHeaderColor text-white p-1 sm:p-2" style={{ maxWidth: '1440px', height: '71px' }}>
//         <div className="container mx-auto flex justify-start items-center p-4 space-x-60">
//           <Link href="/">
//             <img src="/img/Buat Tes.png" alt="Buat Tes" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Publikasi.png" alt="Publikasi" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Tes Terpublikasi.png" alt="Tes Terpublikasi" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Analisis.png" alt="Analisis" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//           </Link>
//         </div>
//       </header>

//       {/* Formulir Buat Pertanyaan */}
//       <div className="container mx-auto p-2 sm:p-4 w-full" style={{ maxWidth: '1309px', height: '1153px' }}>
//         <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black">
//           <Link href="/">
//             <img src="/img/Nomor 1.png" alt="Nomor 1" className="h-7" style={{ maxWidth: '90px', height: '20px' }} />
//           </Link>

//           {/* Input Pertanyaan dengan ReactQuill */}
//           <div className="mb-4">
//             <div className="border border-black bg-[#D9D9D9] p-2 rounded mb-4" style={{ maxWidth: '1309px', height: '312px' }}>
//               {/* Bobot */}
//               <div className="p-4 flex justify-between items-center mb-4 w-full">
//                 <div className="flex items-center">
//                   <Link href="/">
//                     <img src="/img/Soal pilihan ganda.png" alt="Soal pilihan ganda" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                   </Link>
//                 </div>
//                 <div className="flex items-center">
//                   <Link href="/">
//                     <img src="/img/Bobot.png" alt="Bobot" className="h-7" style={{ maxWidth: '120px', height: '20px' }} />
//                   </Link>
//                   <input
//                     type="number"
//                     value={weight}
//                     onChange={(e) => setWeight(Number(e.target.value))}
//                     className="w-full sm:w-16 p-2 border border-black rounded"
//                     placeholder="10"
//                   />
//                 </div>
//               </div>
//               {/* Input Pertanyaan dengan ReactQuill */}
//               <ReactQuill
//                 value={question}
//                 onChange={setQuestion}
//                 modules={modules}
//                 theme="snow"
//                 className="bg-[#fcfafa] border border-black rounded"
//                 style={{ maxWidth: '1220px', height: '209px' }}
//               />
//             </div>
//           </div>

//           {/* Acak Pilihan */}
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
//             <Link href="/">
//               <img src="/img/Jawaban.png" alt="Jawaban" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//             </Link>
//             <div className="flex items-center ml-autocontainer mx-auto items-center p-2 space-x-20">
//               <Link href="/">
//                 <img src="/img/Acak pilihan.png" alt="Acak pilihan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//               </Link>
//               <input
//                 type="checkbox"
//                 checked={shuffleOptions}
//                 onChange={() => setShuffleOptions(!shuffleOptions)}
//                 className="ml-2"
//               />
//             </div>
//           </div>

//           {/* Input Jawaban */}
// <div className="mb-4 space-y-4">
//   {answers.map((answer, index) => (
//     <div key={index} className="flex space-x-4 items-center">
//       <div className="w-full">
//         <ReactQuill
//           value={answer}
//           onChange={(value) => handleAnswerChange(index, value)}
//           modules={modules}
//           theme="snow"
//           className={`bg-[#fcfafa] border border-black rounded ${
//             activeAnswerIndex === index ? 'border-blue-500' : ''
//           }`}
//           onClick={() => handleAnswerClick(index)}
//         />
//       </div>
//       <div className="border border-black rounded-[15px] p-2 flex items-center space-x-2 bg-white">
//         <input
//           type="radio"
//           name="correctAnswer"
//           checked={correctAnswerIndex === index}
//           onChange={() => setCorrectAnswerIndex(index)}
//         />
//         <Link href="/">
//           <img src="/img/Benar.png" alt="Benar" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//         </Link>
//       </div>
//       {/* Tombol Cancel untuk menghapus jawaban */}
//       <button onClick={() => removeAnswer(index)} className="border-0 bg-transparent p-0">
//         <img src="/img/cancel.png" alt="cancel" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//       </button>
//     </div>
//   ))}
// </div>

          

//           {/* Tombol */}
//           <div className='flex flex-col space-y-4 mt-4'>
//             <div className="flex items-center justify-between mt-4">
//               <button
//                 onClick={addAnswer}
//                 className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//               >
//                 <img src="/img/Group 266.png" alt="Tambah" className="h-8" />
//               </button>
//             </div>
//             {/* Input Pembahasan */}
//             <div className="mb-4 space-y-4">
//               {explanations.map((explanation, index) => (
//                 <div key={index} className="flex space-x-4 items-center">
//                   <div className="w-full">
//                     <Link href="/">
//                       <img src="/img/Pembahasan.png" alt="Pembahasan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                     </Link>
//                     <ReactQuill
//                       value={explanation}
//                       onChange={(value) => handleExplanationChange(index, value)}
//                       modules={modules}
//                       theme="snow"
//                       className={`bg-[#fcfafa] border border-black rounded ${
//                         activeAnswerIndex === index ? 'border-blue-500' : ''
//                       }`}
//                       onClick={() => handleAnswerClick(index)}
//                     />
//                   </div>
//                   <div className='w-[180px]'></div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-end mt-4 space-x-2">
//               <Link href="/">
//                 <img src="/img/Group 268.png" alt="Group 268" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//               <Link href="/">
//                 <img src="/img/Group 272.png" alt="Group 272" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateQuestion;
