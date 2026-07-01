import { useState } from "react";

const EmployeeSearch = () => {
  const employees = [
    {
      id: 1,
      name: "Akash",
      age: 24,
      role: "Frontend Developer",
      department: "IT",
      salary: 45000,
      city: "Chennai",
      experience: 2,
    },
    {
      id: 2,
      name: "Priya",
      age: 27,
      role: "Backend Developer",
      department: "IT",
      salary: 60000,
      city: "Bangalore",
      experience: 4,
    },
    {
      id: 3,
      name: "Rahul",
      age: 30,
      role: "UI/UX Designer",
      department: "Design",
      salary: 55000,
      city: "Hyderabad",
      experience: 5,
    },
    {
      id: 4,
      name: "Sneha",
      age: 26,
      role: "QA Engineer",
      department: "Testing",
      salary: 48000,
      city: "Pune",
      experience: 3,
    },
    {
      id: 5,
      name: "Karthik",
      age: 29,
      role: "Full Stack Developer",
      department: "IT",
      salary: 70000,
      city: "Chennai",
      experience: 6,
    },
    {
      id: 6,
      name: "Divya",
      age: 25,
      role: "HR Executive",
      department: "HR",
      salary: 40000,
      city: "Coimbatore",
      experience: 2,
    },
    {
      id: 7,
      name: "Arun",
      age: 31,
      role: "Project Manager",
      department: "Management",
      salary: 90000,
      city: "Mumbai",
      experience: 8,
    },
    {
      id: 8,
      name: "Meena",
      age: 28,
      role: "Data Analyst",
      department: "Analytics",
      salary: 65000,
      city: "Delhi",
      experience: 5,
    },
    {
      id: 9,
      name: "Vignesh",
      age: 23,
      role: "Intern",
      department: "IT",
      salary: 25000,
      city: "Madurai",
      experience: 1,
    },
    {
      id: 10,
      name: "Anjali",
      age: 32,
      role: "DevOps Engineer",
      department: "Infrastructure",
      salary: 85000,
      city: "Bangalore",
      experience: 7,
    },
  ];

  const [search, setSearch] = useState("");

  const filteredData = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Employee Search
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          placeholder="Search employee by name..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Employee Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.length > 0 ? (
          filteredData.map((employee) => (
            <div
              key={employee.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {employee.name}
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Age:</span> {employee.age}
                </p>

                <p>
                  <span className="font-semibold">Role:</span>{" "}
                  {employee.role}
                </p>

                <p>
                  <span className="font-semibold">Department:</span>{" "}
                  {employee.department}
                </p>

                <p>
                  <span className="font-semibold">City:</span>{" "}
                  {employee.city}
                </p>

                <p>
                  <span className="font-semibold">Experience:</span>{" "}
                  {employee.experience} Years
                </p>

                <p>
                  <span className="font-semibold">Salary:</span> ₹
                  {employee.salary.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-600 text-xl font-semibold">
            No Employee Found
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeSearch;