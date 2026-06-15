 
const CourseCard = ({courseName,duration,fee}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
  
      <h1 className="font-bold text-xl mb-3">Reusable component Course Card</h1>
        
        <h2 className="font-bold">{courseName}</h2>

        <p>Duration: {duration}</p>
        <p>Fees: {fee}</p>

    </div>
    </>
  )
}

export default CourseCard