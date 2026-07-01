import { useEffect, useState } from "react";

const StudentDataForm = ({setStdDetails}) => {
  const [stdData, setStdData] = useState([]);
  const [editIndex,setEditIndex] = useState([])

  useEffect(() => {
    const studentsdt = JSON.parse(localStorage.getItem("StudentDatas")) || [];

     setStdData(studentsdt);
  }, []);


  const edit =(e,i) =>{
    setEditIndex(i);
    setStdData(e)
    console.log(editIndex);
    
  }


  const delete_data = (index) =>{
    
    const remove = stdData.filter((_,i)=> i !== index)
    setStdDetails(remove)
  }




  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
        Student Details
      </h1>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stdData.map((e, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-5 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Student {i + 1}
            </h2>

            <p className="mb-2">
              <span className="font-semibold">Name:</span> {e.stdName}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Age:</span> {e.stdAge}
            </p>

            <p className="mb-2">
              <span className="font-semibold">Course:</span> {e.stdCourse}
            </p>

            <p>
              <span className="font-semibold">City:</span> {e.stdCity}
            </p>
             <button onClick={()=>edit(e,i)}>Edit</button>
            <button onClick={()=>delete_data(i)}>Delete</button>
          </div>
        ))}


      </div>

      {stdData.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No student records found.
        </p>
      )}
    </div>
  );
};

export default StudentDataForm;