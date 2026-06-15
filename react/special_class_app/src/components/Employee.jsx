
     
const Employee = ({empDetails}) => {

  const{companyNamenew,employyeName,employeeRole,employeeSalary} = empDetails;

  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-3">Company Dashboard</h1>

        <p>Comapany Name: {companyNamenew}</p>
        <p>Employee Name: {employyeName}</p>
        <p>Employee Role: {employeeRole}</p>
        <p>Employee Salary: {employeeSalary}</p>

      </div>
    </>
  )
}

export default Employee