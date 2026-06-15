
const Student = ({name,age,course}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-3">Student Profile</h2>

        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Course: {course}</p>

      </div>
    </>
  )
}

export default Student