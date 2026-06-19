
const SchoolStats = ({ schools }) => {

  const totalSchools = schools.length;

  const totalStudents = schools.reduce(
    (sum, school) => sum + school.students,
    0
  );

  const totalTeachers = schools.reduce(
    (sum, school) => sum + school.teachers,
    0
  );  
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold">Total Schools</h2>
        <p className="text-3xl text-blue-600">
          {totalSchools}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold">Total Students</h2>
        <p className="text-3xl text-green-600">
          {totalStudents}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold">Total Teachers</h2>
        <p className="text-3xl text-red-600">
          {totalTeachers}
        </p>
      </div>
    </div>
    
  )
}

export default SchoolStats