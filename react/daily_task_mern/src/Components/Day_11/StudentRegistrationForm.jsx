import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StudentDataForm from "./StudentDataForm";

const StudentRegistrationForm = () => {

  const navigate =  useNavigate();

  const [stdDetails, setStdDetails] = useState({
    stdName: "",
    stdAge: "",
    stdCourse: "",
    stdCity: "",
  });

  const handleChange = (e) => {
    setStdDetails({
      ...stdDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const students = JSON.parse(localStorage.getItem("StudentDatas")) || []

    students.push(stdDetails);

    localStorage.setItem("StudentDatas",JSON.stringify(students));

    navigate('/StudentDataForm');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white shadow-md rounded-lg p-6 w-80 space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Student Registration
        </h2>

        <input
          type="text"
          name="stdName"
          placeholder="Enter Student Name"
          value={stdDetails.stdName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="stdAge"
          placeholder="Enter Age"
          value={stdDetails.stdAge}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="stdCourse"
          placeholder="Enter Course"
          value={stdDetails.stdCourse}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="stdCity"
          placeholder="Enter City"
          value={stdDetails.stdCity}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleClick}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>

      <StudentDataForm setStdDetails = {setStdDetails}/>
    </div>
  );
};

export default StudentRegistrationForm;