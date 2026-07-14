import { useMemo, useState } from "react";

function StudentPlacement() {
  const [darkTheme, setDarkTheme] = useState(false);

  const students = [
    { id: 1, name: "Akash", placed: true },
    { id: 2, name: "Rahul", placed: false },
    { id: 3, name: "Arun", placed: true },
    { id: 4, name: "Kumar", placed: false },
    { id: 5, name: "John", placed: true },
  ];

  const statistics = useMemo(() => {
    console.log("Calculating Student Statistics...");

    const totalStudents = students.length;

    const placedStudents = students.filter(
      (student) => student.placed
    ).length;

    const unplacedStudents = students.filter(
      (student) => !student.placed
    ).length;

    return {
      totalStudents,
      placedStudents,
      unplacedStudents,
    };
  }, [students]);

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkTheme
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Student Placement Dashboard
            </h1>
            <p className="text-gray-500 mt-2">
              Placement statistics using useMemo
            </p>
          </div>

          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            {darkTheme ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkTheme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-medium text-gray-500">
              Total Students
            </h3>
            <p className="text-4xl font-bold mt-3">
              {statistics.totalStudents}
            </p>
          </div>

          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkTheme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-medium text-green-500">
              Placed Students
            </h3>
            <p className="text-4xl font-bold mt-3 text-green-500">
              {statistics.placedStudents}
            </p>
          </div>

          <div
            className={`p-6 rounded-2xl shadow-lg ${
              darkTheme ? "bg-slate-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-medium text-red-500">
              Unplaced Students
            </h3>
            <p className="text-4xl font-bold mt-3 text-red-500">
              {statistics.unplacedStudents}
            </p>
          </div>
        </div>

        {/* Student List */}
        <div
          className={`rounded-2xl shadow-lg overflow-hidden ${
            darkTheme ? "bg-slate-800" : "bg-white"
          }`}
        >
          <div className="p-5 border-b border-gray-300">
            <h2 className="text-2xl font-semibold">
              Student List
            </h2>
          </div>

          <div className="divide-y divide-gray-300">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center p-5 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Student ID: {student.id}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    student.placed
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.placed ? "Placed" : "Unplaced"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPlacement;