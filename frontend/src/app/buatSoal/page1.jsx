'use client';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Link from 'next/link';

const CreateDouble = () => {
  const [questions, setQuestions] = useState([{
    question: '',
    weight: 10,
    answers: [''],
    explanations: [''],
    correctAnswerIndex: null,
    shuffleOptions: false
  }]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const handleSave = () => {
    console.log(questions);
  };

  const handleCancel = () => {
    setQuestions([{
      question: '',
      weight: 10,
      answers: [''],
      explanations: [''],
      correctAnswerIndex: null,
      shuffleOptions: false
    }]);
    setCurrentPage(0);
    setTotalPages(1);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };

  const handleExplanationChange = (questionIndex, explanationIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].explanations[explanationIndex] = value;
    setQuestions(newQuestions);
  };

  const handleAnswerAdd = (questionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.push('');
    // newQuestions[questionIndex].explanations.push('');
    // Tambahkan penjelasan kosong hanya untuk jawaban baru jika belum ada
    setQuestions(newQuestions);
  };

  const handleAnswerRemove = (questionIndex, answerIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.splice(answerIndex, 1);
    // Hapus penjelasan terkait jawaban yang dihapus
    newQuestions[questionIndex].explanations.splice(answerIndex, 1);
    setQuestions(newQuestions);
  };

  const handleAddPage = () => {
    const newQuestions = [...questions, {
      question: '',
      weight: 10,
      answers: [''],
      explanations: [''],
      correctAnswerIndex: null,
      shuffleOptions: false
    }];
    setQuestions(newQuestions);
    setTotalPages(totalPages + 1);
    setCurrentPage(totalPages);
  };

  const handleDeleteAll = () => {
    // Menghapus semua soal, jawaban, dan pembahasan
    setQuestions([]);
    setCurrentPage(0);
    console.log("Semua soal, jawaban, dan pembahasan telah dihapus.");
  };
  
  const handleFinish = () => {
    setIsFinished(true); // Set status selesai
  };

  const handlePageChange = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
    }
  };///ini kl pakai previous dan next aja
  

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ header: [1, 2, 3, false] }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      <div className="container mx-auto p-4" style={{ maxWidth: '1440px' , height: '1662px'}}></div>

      {/* Header dengan Warna Biru Kustom */}
      <header className="bg-customBlue text-white p-4 sm:p-6 font-poppins" style={{ maxWidth: '1440px', height: '108px' }}>
        <div className="container mx-auto flex justify-start items-center p-0">
          <Link href="/">
            <img src="/img/menu.png" alt="Menu" className="h-7" style={{ maxWidth: '69px', height: '70px' }} />
          </Link>
          <Link href="/">
            <img src="/img/Vector.png" alt="Vector" className="h-6 ml-4" style={{ maxWidth: '279px', height: '50px' }} />
          </Link>
        </div>
      </header>

      {/* Header Baru dengan Tombol */}
      <header className="bg-newHeaderColor text-white p-1 sm:p-2" style={{ maxWidth: '1440px', height: '71px' }}>
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="/">
            <img src="/img/Buat Tes.png" alt="Buat Tes" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
          </Link>
          <Link href="/">
            <img src="/img/Publikasi.png" alt="Publikasi" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
          </Link>
          <Link href="/">
            <img src="/img/Tes Terpublikasi.png" alt="Tes Terpublikasi" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
          </Link>
          <Link href="/">
            <img src="/img/Analisis.png" alt="Analisis" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
          </Link>
        </div>
      </header>

      {/* Formulir Buat Pertanyaan */}
      <div className="container mx-auto p-2 sm:p-4 w-full" style={{ maxWidth: '1329px', height: '1256px' }}>
        {/* Header page */}
        <header className="bg-customBlue text-white p-4 sm:p-6" style={{ maxWidth: '1329px', height: '65px' }}>
          <div className="container mx-auto flex justify-between items-center p-0">
            {/* Tampilkan Page */}
            <div className="flex items-center space-x-4">
              <span> Page {currentPage + 1}</span>
            </div>
            {/* Titik 3 di sebelah kanan */}
            <div className="flex items-center">
              <Link href="/">
                <img src="/img/titik 3.png" 
                alt="Titik 3" className="h-7" style={{ maxWidth: '20px', height: '20px' }} />
              </Link>
            </div>
          </div>
        </header>


        <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6">
          <span> Nomor {currentPage + 1} </span>

          {/* Navigasi Halaman */}
          {/* <div className="flex justify-between mb-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="bg-gray-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div> */}

          {questions.map((q, questionIndex) => (
            <div key={questionIndex} className={`bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6 ${questionIndex !== currentPage ? 'hidden' : ''}`}>
              {/* Input Pertanyaan dengan ReactQuill */}
              <div className="mb-4">
                <div className="border border-black bg-[#D9D9D9] p-2 rounded mb-4" style={{ maxWidth: '1309px', height: '312px' }}>
                  {/* Bobot */}
                  <div className="p-4 flex justify-between items-center mb-4 w-full">
                    <div className="flex items-center">
                      <Link href="/">
                        <img src="/img/Soal pilihan ganda.png" alt="Soal pilihan ganda" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link href="/">
                        <img src="/img/Bobot.png" alt="Bobot" className="h-7" style={{ maxWidth: '120px', height: '20px' }} />
                      </Link>
                      <input
                        type="number"
                        value={q.weight}
                        onChange={(e) => handleQuestionChange(questionIndex, 'weight', Number(e.target.value))}
                        className="w-full sm:w-16 p-2 border border-black rounded"
                        placeholder="10"
                      />
                    </div>
                  </div>

                  {/* Input Pertanyaan */}
                  <ReactQuill
                    value={q.question}
                    onChange={(value) => handleQuestionChange(questionIndex, 'question', value)}
                    modules={modules}
                    theme="snow"
                    className="bg-[#fcfafa] border border-black rounded"
                    style={{ maxWidth: '1220px', height: '209px' }}
                    />
                </div>
              </div>

              {/* Acak Pilihan */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <Link href="/">
                  <img src="/img/Jawaban.png" alt="Jawaban" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
                </Link>
                <div className="flex items-center ml-auto p-2 space-x-6">
                  <Link href="/">
                    <img src="/img/Acak pilihan.png" alt="Acak pilihan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
                  </Link>
                  <input
                    type="checkbox"
                    checked={q.shuffleOptions}
                    onChange={() => handleQuestionChange(questionIndex, 'shuffleOptions', !q.shuffleOptions)}
                    className="ml-2"
                  />
                </div>
              </div>

              {/* Input Jawaban */}
              <div className="mb-4 space-y-4">
                {q.answers.map((answer, answerIndex) => (
                  <div key={answerIndex} className="flex space-x-4 items-center">
                    <div className="w-full">
                      <ReactQuill
                        value={answer}
                        onChange={(value) => handleAnswerChange(questionIndex, answerIndex, value)}
                        modules={modules}
                        theme="snow"
                        className="bg-[#fcfafa] border border-black rounded"
                      />
                    </div>
                    <div className="border border-black rounded-[15px] p-2 flex items-center space-x-2 bg-white">
                      <input
                        type="radio"
                        name={`correctAnswer-${questionIndex}`}
                        checked={q.correctAnswerIndex === answerIndex}
                        onChange={() => handleQuestionChange(questionIndex, 'correctAnswerIndex', answerIndex)}
                      />
                      <Link href="/">
                        <img src="/img/Benar.png" alt="Benar" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
                      </Link>
                    </div>
                    {/* Tombol Cancel untuk menghapus jawaban */}
                    <button onClick={() => handleAnswerRemove(questionIndex, answerIndex)} className="border-0 bg-transparent p-0">
                      <img src="/img/cancel.png" alt="cancel" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
                    </button>
                  </div>
                ))}
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center justify-between mt-4">
                    <button
                      onClick={() => handleAnswerAdd(questionIndex)}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                      <img src="/img/Group 266.png" alt="Tambah" className="h-8" />
                      <span>Tambah Jawaban</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Input Pembahasan */}
              <div className="mb-4 space-y-4">
                {q.explanations.map((explanation, explanationIndex) => (
                  <div key={explanationIndex} className="flex items-center space-x-4 mb-4">
                    <div className="w-full">
                      <Link href="/">
                        <img src="/img/Pembahasan.png" alt="Pembahasan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
                      </Link>
                      <ReactQuill
                        value={explanation}
                        onChange={(value) => handleExplanationChange(questionIndex, explanationIndex, value)}
                        modules={modules}
                        theme="snow"
                        className="bg-[#fcfafa] border border-black rounded"
                      />
                    </div>
                    <div className='w-[180px]'></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tombol Simpan, Batal, dan Tambah Soal */}
          <div className="flex flex-col space-y-4">
            <div className="flex justify-end mt-4 space-x-2">
              <bottom
               onClick={handleAddPage}
               className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
             >
              <Link href="/">
                <img src="/img/hapus.png" alt="hapus" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
              </Link>
              </bottom>
              <Link href="/">
                <img src="/img/Group 272.png" alt="benar" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
              </Link>
            </div>
            <div className="flex justify-start items-center">
              <button
                onClick= {handleAddPage}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
              >
                <img src="/img/tambah soal.png" alt="Tambah" className="h-8" />
                  <span>Tambah soal</span>
              </button>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={handleFinish}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              <img src="/img/selesai.png" alt="selesai" className="h-7" style={{ maxWidth: '161px', height: '54px' }} />
            </button>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <button
              onClick={() => handleAnswerAdd(questionIndex)}
              className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              <img src="/img/Group 288.png" alt="Tambah" className="h-8" />
                <span>Tambah</span>
            </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default CreateDouble;




////////////////////////////////
// 'use client';
// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Link from 'next/link';

// const CreateDouble = () => {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [questions, setQuestions] = useState([{
//     question: '',
//     weight: 10,
//     answers: [''],
//     explanations: [''],
//     correctAnswerIndex: null,
//     shuffleOptions: false
//   }]);

//   const handleSave = () => {
//     console.log(questions);
//   };

//   const handleCancel = () => {
//     setQuestions([{
//       question: '',
//       weight: 10,
//       answers: [''],
//       explanations: [''],
//       correctAnswerIndex: null,
//       shuffleOptions: false
//     }]);
//     setCurrentPageIndex(0);
//   };

//   const handleQuestionChange = (field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerChange = (answerIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers[answerIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleExplanationChange = (explanationIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].explanations[explanationIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerAdd = () => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers.push('');
//     updatedQuestions[currentPageIndex].explanations.push('');
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerRemove = (answerIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers.splice(answerIndex, 1);
//     updatedQuestions[currentPageIndex].explanations.splice(answerIndex, 1);
//     setQuestions(updatedQuestions);
//   };

//   const handleAddPage = () => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex] = {
//       question: '',
//       weight: 10,
//       answers: [''],
//       explanations: [''],
//       correctAnswerIndex: null,
//       shuffleOptions: false
//     };
//     setQuestions(updatedQuestions);
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
//       <div className="container mx-auto p-4" style={{ maxWidth: '1440px' }}></div>

//       {/* Header dengan Warna Biru Kustom */}
//       <header className="bg-customBlue text-white p-4 sm:p-6 font-poppins" style={{ maxWidth: '1440px', height: '108px' }}>
//         <div className="container mx-auto flex justify-start items-center p-0">
//           <Link href="/">
//             <img src="/img/menu.png" alt="Menu" className="h-7" style={{ maxWidth: '69px', height: '70px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Vector.png" alt="Vector" className="h-6 ml-4" style={{ maxWidth: '279px', height: '50px' }} />
//           </Link>
//         </div>
//       </header>

//       {/* Header Baru dengan Tombol */}
//       <header className="bg-newHeaderColor text-white p-1 sm:p-2" style={{ maxWidth: '1440px', height: '71px' }}>
//         <div className="container mx-auto flex justify-between items-center p-4">
//             <Link href="/">
//             <img src="/img/Buat Tes.png" alt="Buat Tes" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Publikasi.png" alt="Publikasi" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Tes Terpublikasi.png" alt="Tes Terpublikasi" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Analisis.png" alt="Analisis" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//         </div>
//     </header>

//       {/* Formulir Buat Pertanyaan */}
//       <div className="container mx-auto p-2 sm:p-4 w-full" style={{ maxWidth: '1309px', height: '1153px' }}>
//         <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6">
//           <Link href="/">
//             <img src="/img/Nomor 1.png" alt="Nomor 1" className="h-7" style={{ maxWidth: '90px', height: '20px' }} />
//           </Link>

//           {questions[currentPageIndex] && (
//             <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6">
//               {/* Input Pertanyaan dengan ReactQuill */}
//               <div className="mb-4">
//                 <div className="border border-black bg-[#D9D9D9] p-2 rounded mb-4" style={{ maxWidth: '1309px', height: '312px' }}>
//                   {/* Bobot */}
//                   <div className="p-4 flex justify-between items-center mb-4 w-full">
//                     <div className="flex items-center">
//                       <Link href="/">
//                         <img src="/img/Soal pilihan ganda.png" alt="Soal pilihan ganda" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                       </Link>
//                     </div>
//                     <div className="flex items-center">
//                       <Link href="/">
//                         <img src="/img/Bobot.png" alt="Bobot" className="h-7" style={{ maxWidth: '120px', height: '20px' }} />
//                       </Link>
//                       <input
//                         type="number"
//                         value={questions[currentPageIndex].weight}
//                         onChange={(e) => handleQuestionChange('weight', Number(e.target.value))}
//                         className="w-full sm:w-16 p-2 border border-black rounded"
//                         placeholder="10"
//                       />
//                     </div>
//                   </div>

//                   {/* Input Pertanyaan */}
//                   <ReactQuill
//                     value={questions[currentPageIndex].question}
//                     onChange={(value) => handleQuestionChange('question', value)}
//                     modules={modules}
//                     theme="snow"
//                     className="bg-[#fcfafa] border border-black rounded"
//                   />
//                 </div>
//               </div>

//               {/* Acak Pilihan */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
//                 <Link href="/">
//                   <img src="/img/Jawaban.png" alt="Jawaban" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                 </Link>
//                 <div className="flex items-center ml-auto p-2 space-x-6">
//                   <Link href="/">
//                     <img src="/img/Acak pilihan.png" alt="Acak pilihan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                   </Link>
//                   <input
//                     type="checkbox"
//                     checked={questions[currentPageIndex].shuffleOptions}
//                     onChange={() => handleQuestionChange('shuffleOptions', !questions[currentPageIndex].shuffleOptions)}
//                     className="ml-2"
//                   />
//                 </div>
//               </div>

//               {/* Input Jawaban */}
//               <div className="mb-4 space-y-4">
//                 {questions[currentPageIndex].answers.map((answer, answerIndex) => (
//                   <div key={answerIndex} className="flex space-x-4 items-center">
//                     <div className="w-full">
//                       <ReactQuill
//                         value={answer}
//                         onChange={(value) => handleAnswerChange(answerIndex, value)}
//                         modules={modules}
//                         theme="snow"
//                         className="bg-[#fcfafa] border border-black rounded"
//                       />
//                     </div>
//                     <div className="border border-black rounded-[15px] p-2 flex items-center space-x-2 bg-white">
//                       <input
//                         type="radio"
//                         name={`correctAnswer-${currentPageIndex}`}
//                         checked={questions[currentPageIndex].correctAnswerIndex === answerIndex}
//                         onChange={() => handleQuestionChange('correctAnswerIndex', answerIndex)}
//                       />
//                       <Link href="/">
//                         <img src="/img/Benar.png" alt="Benar" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//                       </Link>
//                     </div>
//                     <button onClick={() => handleAnswerRemove(answerIndex)} className="border-0 bg-transparent p-0">
//                       <img src="/img/cancel.png" alt="cancel" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                     </button>
//                   </div>
//                 ))}
//                 <div className="flex flex-col space-y-4 mt-4">
//                   <div className="flex items-center justify-between mt-4">
//                     <button
//                       onClick={handleAnswerAdd}
//                       className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//                     >
//                       <img src="/img/Group 266.png" alt="Tambah" className="h-8" />
//                       <span>Tambah Jawaban</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Input Pembahasan */}
//               <div className="mb-4 space-y-4">
//                 {questions[currentPageIndex].explanations.map((explanation, explanationIndex) => (
//                   <div key={explanationIndex} className="flex space-x-4 items-center">
//                     <div className="w-full">
//                       <Link href="/">
//                         <img src="/img/Pembahasan.png" alt="Pembahasan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                       </Link>
//                       <ReactQuill
//                         value={explanation}
//                         onChange={(value) => handleExplanationChange(explanationIndex, value)}
//                         modules={modules}
//                         theme="snow"
//                         className="bg-[#fcfafa] border border-black rounded"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Tombol Simpan, Batal, dan Tambah Soal */}
//           <div className="flex flex-col space-y-4">
//             <div className="flex justify-end mt-4 space-x-2">
//               <Link href="/">
//                 <img src="/img/Group 268.png" alt="Group 268" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//               <Link href="/">
//                 <img src="/img/Group 272.png" alt="Group 272" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//             </div>
//             <div className="flex justify-center items-left">
//               <button onClick={handleAddPage} className="bg-yellow-500 text-white p-2 rounded ml-4">
//                 Tambah Soal
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateDouble;


/////////////////////////////////////////////////
// 'use client';
// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Link from 'next/link';

// const CreateDouble = () => {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const [questions, setQuestions] = useState([{
//     question: '',
//     weight: 10,
//     answers: [''],
//     explanations: [''],
//     correctAnswerIndex: null,
//     shuffleOptions: false
//   }]);

//   const handleSave = () => {
//     console.log(questions);
//   };

//   const handleCancel = () => {
//     setQuestions([{
//       question: '',
//       weight: 10,
//       answers: [''],
//       explanations: [''],
//       correctAnswerIndex: null,
//       shuffleOptions: false
//     }]);
//     setCurrentPageIndex(0);
//   };

//   const handleQuestionChange = (field, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex][field] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerChange = (answerIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers[answerIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleExplanationChange = (explanationIndex, value) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].explanations[explanationIndex] = value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerAdd = () => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers.push('');
//     updatedQuestions[currentPageIndex].explanations.push('');
//     setQuestions(updatedQuestions);
//   };

//   const handleAnswerRemove = (answerIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex].answers.splice(answerIndex, 1);
//     updatedQuestions[currentPageIndex].explanations.splice(answerIndex, 1);
//     setQuestions(updatedQuestions);
//   };

//   const handleAddPage = () => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentPageIndex] = {
//       question: '',
//       weight: 10,
//       answers: [''],
//       explanations: [''],
//       correctAnswerIndex: null,
//       shuffleOptions: false
//     };
//     setQuestions(updatedQuestions);
//     setCurrentPageIndex(currentPageIndex)
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
//       <div className="container mx-auto p-4" style={{ maxWidth: '1440px' }}></div>

//       {/* Header dengan Warna Biru Kustom */}
//       <header className="bg-customBlue text-white p-4 sm:p-6 font-poppins" style={{ maxWidth: '1440px', height: '108px' }}>
//         <div className="container mx-auto flex justify-start items-center p-0">
//           <Link href="/">
//             <img src="/img/menu.png" alt="Menu" className="h-7" style={{ maxWidth: '69px', height: '70px' }} />
//           </Link>
//           <Link href="/">
//             <img src="/img/Vector.png" alt="Vector" className="h-6 ml-4" style={{ maxWidth: '279px', height: '50px' }} />
//           </Link>
//         </div>
//       </header>

//       {/* Header Baru dengan Tombol */}
//       <header className="bg-newHeaderColor text-white p-1 sm:p-2" style={{ maxWidth: '1440px', height: '71px' }}>
//         <div className="container mx-auto flex justify-between items-center p-4">
//             <Link href="/">
//             <img src="/img/Buat Tes.png" alt="Buat Tes" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Publikasi.png" alt="Publikasi" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Tes Terpublikasi.png" alt="Tes Terpublikasi" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//             </Link>
//             <Link href="/">
//             <img src="/img/Analisis.png" alt="Analisis" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//             </Link>
//         </div>
//     </header>

//       {/* Formulir Buat Pertanyaan */}
//       <div className="container mx-auto p-2 sm:p-4 w-full" style={{ maxWidth: '1309px', height: '1153px' }}>
//         <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6">
//         <span className="text-xl font-bold">
//           Nomor {currentPageIndex + 1}
//         </span>

//           {questions[currentPageIndex] && (
//             <div className="bg-[#FFFFFF] p-4 rounded-lg shadow-md w-full border border-t-black mb-6">
//               {/* Input Pertanyaan dengan ReactQuill */}
//               <div className="mb-4">
//                 <div className="border border-black bg-[#D9D9D9] p-2 rounded mb-4" style={{ maxWidth: '1309px', height: '312px' }}>
//                   {/* Bobot */}
//                   <div className="p-4 flex justify-between items-center mb-4 w-full">
//                     <div className="flex items-center">
//                       <Link href="/">
//                         <img src="/img/Soal pilihan ganda.png" alt="Soal pilihan ganda" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                       </Link>
//                     </div>
//                     <div className="flex items-center">
//                       <Link href="/">
//                         <img src="/img/Bobot.png" alt="Bobot" className="h-7" style={{ maxWidth: '120px', height: '20px' }} />
//                       </Link>
//                       <input
//                         type="number"
//                         value={questions[currentPageIndex].weight}
//                         onChange={(e) => handleQuestionChange('weight', Number(e.target.value))}
//                         className="w-full sm:w-16 p-2 border border-black rounded"
//                         placeholder="10"
//                       />
//                     </div>
//                   </div>

//                   {/* Input Pertanyaan */}
//                   <ReactQuill
//                     value={questions[currentPageIndex].question}
//                     onChange={(value) => handleQuestionChange('question', value)}
//                     modules={modules}
//                     theme="snow"
//                     className="bg-[#fcfafa] border border-black rounded"
//                   />
//                 </div>
//               </div>

//               {/* Acak Pilihan */}
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
//                 <Link href="/">
//                   <img src="/img/Jawaban.png" alt="Jawaban" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                 </Link>
//                 <div className="flex items-center ml-auto p-2 space-x-6">
//                   <Link href="/">
//                     <img src="/img/Acak pilihan.png" alt="Acak pilihan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                   </Link>
//                   <input
//                     type="checkbox"
//                     checked={questions[currentPageIndex].shuffleOptions}
//                     onChange={() => handleQuestionChange('shuffleOptions', !questions[currentPageIndex].shuffleOptions)}
//                     className="ml-2"
//                   />
//                 </div>
//               </div>

//               {/* Input Jawaban */}
//               <div className="mb-4 space-y-4">
//                 {questions[currentPageIndex].answers.map((answer, answerIndex) => (
//                   <div key={answerIndex} className="flex space-x-4 items-center">
//                     <div className="w-full">
//                       <ReactQuill
//                         value={answer}
//                         onChange={(value) => handleAnswerChange(answerIndex, value)}
//                         modules={modules}
//                         theme="snow"
//                         className="bg-[#fcfafa] border border-black rounded"
//                       />
//                     </div>
//                     <div className="border border-black rounded-[15px] p-2 flex items-center space-x-2 bg-white">
//                       <input
//                         type="radio"
//                         name={`correctAnswer-${currentPageIndex}`}
//                         checked={questions[currentPageIndex].correctAnswerIndex === answerIndex}
//                         onChange={() => handleQuestionChange('correctAnswerIndex', answerIndex)}
//                       />
//                       <Link href="/">
//                         <img src="/img/Benar.png" alt="Benar" className="h-7" style={{ maxWidth: '80px', height: '20px' }} />
//                       </Link>
//                     </div>
//                     <button onClick={() => handleAnswerRemove(answerIndex)} className="border-0 bg-transparent p-0">
//                       <img src="/img/cancel.png" alt="cancel" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                     </button>
//                   </div>
//                 ))}
//                 <div className="flex flex-col space-y-4 mt-4">
//                   <div className="flex items-center justify-between mt-4">
//                     <button
//                       onClick={handleAnswerAdd}
//                       className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
//                     >
//                       <img src="/img/Group 266.png" alt="Tambah" className="h-8" />
//                       <span>Tambah Jawaban</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Input Pembahasan */}
//               <div className="mb-4 space-y-4">
//                 {questions[currentPageIndex].explanations.map((explanation, explanationIndex) => (
//                   <div key={explanationIndex} className="flex space-x-4 items-center">
//                     <div className="w-full">
//                       <Link href="/">
//                         <img src="/img/Pembahasan.png" alt="Pembahasan" className="h-7" style={{ maxWidth: '130px', height: '20px' }} />
//                       </Link>
//                       <ReactQuill
//                         value={explanation}
//                         onChange={(value) => handleExplanationChange(explanationIndex, value)}
//                         modules={modules}
//                         theme="snow"
//                         className="bg-[#fcfafa] border border-black rounded"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Tombol Simpan, Batal, dan Tambah Soal */}
//           <div className="flex flex-col space-y-4">
//             <div className="flex justify-end mt-4 space-x-2">
//               <Link href="/">
//                 <img src="/img/Group 268.png" alt="Group 268" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//               <Link href="/">
//                 <img src="/img/Group 272.png" alt="Group 272" className="h-7" style={{ maxWidth: '154px', height: '54px' }} />
//               </Link>
//             </div>
//             <div className="flex justify-center items-left">
//               <button onClick={handleAddPage} className="bg-yellow-500 text-white p-2 rounded ml-4">
//                 Tambah Soal
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateDouble;