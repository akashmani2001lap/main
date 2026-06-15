
const EmployeeCard = ({employeeName,employeeID,department,salary,experince}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-3">Employee Details</h1>

        <p>Employee Name: {employeeName}</p>
        <p>Employee ID: {employeeID}</p>
        <p>Department: {department}</p>
        <p>Salary:{salary}</p>
        <p>Experience:{experince}</p>

      </div>
    </>
  )
}

export default EmployeeCard