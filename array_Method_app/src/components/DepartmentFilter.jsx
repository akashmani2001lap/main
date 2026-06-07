function DepartmentFilter({
  department,
  setDepartment,
}) {
  return (
    <select
      value={department}
      onChange={(e) =>
        setDepartment(e.target.value)
      }
    >
      <option value="">All</option>
      <option value="Frontend">
        Frontend
      </option>
      <option value="Backend">
        Backend
      </option>
    </select>
  );
}

export default DepartmentFilter;