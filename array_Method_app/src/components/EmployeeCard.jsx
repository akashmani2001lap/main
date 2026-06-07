function EmployeeCard({ employee }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3>{employee.name}</h3>
      <p>{employee.department}</p>
      <p>₹{employee.salary}</p>
    </div>
  );
}

export default EmployeeCard;

