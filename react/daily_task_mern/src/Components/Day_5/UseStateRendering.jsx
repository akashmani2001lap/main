import { useState } from "react";

const UseStateRendering = () => {
  let [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };

  const decreament = () => {
    setCount(count - 1);
  };

  const [student] = useState({
    name: "Akash",
    age: 25,
    course: "React JS",
  });

  // const [courses] = useState(["HTML", "CSS", "JavaScript", "React"]);

  const [courses] = useState([
    "HTML",
    "CSS",
    "JAVA SCRIPT",
    "REACT"

  ])

  const [employees] = useState([
    {
      id: 1,
      name: "Akash",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Karthik",
      role: "Backend Developer",
    },
    {
      id: 3,
      name: "Rahul",
      role: "Full Stack Developer",
    },
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-80">
        <div>
          <h1 className="text-5xl font-bold text-blue-600 mb-6">{count}</h1>
        </div>

        <div className="flex justify-center gap-3">
          <div>
            <button
              onClick={decreament}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Decreament
            </button>
          </div>

          <div>
            <button
              onClick={increament}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Increament
            </button>
          </div>
        </div>

        <div className="mt-10">
          <h1 className=" bg-blue-600 p-1 mb-2 "   >Student data</h1>
          <h1>Student Name: {student.name}</h1>
          <h1>Student Age: {student.age}</h1>
          <h1>Studenet Course: {student.course}</h1>
        </div>
 
         <div className="mt-10">
          <h1 className=" bg-blue-600 p-1 mb-2">Courses List</h1>

          {courses.map((course, index) => (
            <p key={index}>{course}</p>
          ))}
        </div>


        <div className="mt-10">
          <h1 className=" bg-blue-600 p-1 mb-2">Employee List</h1>

          {employees.map((emp) => (
            <div
              key={emp.id}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h2>{emp.name}</h2>
              <p>{emp.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseStateRendering;
