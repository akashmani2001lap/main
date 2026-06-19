import StudentCard from "./StudentCard"

const SchoolList = ({ schools }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {schools.map((school) => (
        <StudentCard
          key={school.id}
          school={school}
        />
      ))}
    </div>
  )
}

export default SchoolList