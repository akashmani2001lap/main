
const GrandChild = ({name,course}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="font-bold text-xl mb-3">Props Drilling Task To Grand Child</h1>
        <p>Name: {name}</p>
        <p>Course: {course}</p>
      </div>
    </>
  )
}

export default GrandChild