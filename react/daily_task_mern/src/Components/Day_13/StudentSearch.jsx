import { useState } from "react";

const StudentSearch = () => {
  const students = [
    { id: 1, name: "Sudhan", age: 20 },
    { id: 2, name: "Sudhakar", age: 21 },
    { id: 3, name: "Akash", age: 22 },
    { id: 4, name: "Rahul", age: 20 },
    { id: 5, name: "Arun", age: 19 },
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Student Search
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Student Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {student.name}
              </h2>

              <p className="text-gray-700">
                <span className="font-semibold">Age:</span> {student.age}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-600 text-xl font-semibold">
            No Student Found
          </p>
        )}
      </div>
    </div>
  );
};

export default StudentSearch;