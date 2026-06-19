
const SchoolCard = ({ school }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        {school.schoolName}
      </h2>

      <p className="text-gray-600 mb-3">
         {school.city}
      </p>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Principal:</span>{" "}
          {school.principal.name}
        </p>

        <p>
          <span className="font-semibold">Students:</span>{" "}
          {school.students}
        </p>

        <p>
          <span className="font-semibold">Teachers:</span>{" "}
          {school.teachers}
        </p>
      </div>
    </div>
  );
};

export default SchoolCard;