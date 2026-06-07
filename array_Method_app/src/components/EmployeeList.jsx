import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <div className="grid gap-4">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;