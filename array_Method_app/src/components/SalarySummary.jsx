  function SalarySummary({ employees }) {
  const totalSalary = employees.reduce(
    (total, employee) =>
      total + employee.salary,
    0
  );

  return (
    <h2>
      Total Salary: ₹{totalSalary}
    </h2>
  );
}

export default SalarySummary;