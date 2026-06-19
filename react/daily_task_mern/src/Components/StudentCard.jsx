
const StudentCard = ({ school }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        {school.schoolName}
      </h2>

      <p>
        <span className="font-semibold">
          Principal:
        </span>{" "}
        {school.principal.name}
      </p>

      <p>
        <span className="font-semibold">
          City:
        </span>{" "}
        {school.city}
      </p>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">
          Sports Available
        </h3>

        <div className="flex flex-wrap gap-2">
          {school.sports.map((sport, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentCard