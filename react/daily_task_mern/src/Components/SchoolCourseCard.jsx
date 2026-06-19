
const SchoolCourseCard = ({ school }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        {school.schoolName}
      </h2>

      <h3 className="font-semibold mb-3">
        Courses Offered
      </h3>

      <div className="flex flex-wrap gap-2">
        {school.courses.map((course, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SchoolCourseCard;