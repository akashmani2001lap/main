import { useState } from "react";

function AddEmployeeForm({
  employees,
  setEmployees,
}) {
  const [name, setName] = useState("");
  const [department, setDepartment] =
    useState("");
  const [salary, setSalary] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name,
      department,
      salary: Number(salary),
    };

    setEmployees([
      ...employees,
      newEmployee,
    ]);

    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <input
        placeholder="Salary"
        value={salary}
        onChange={(e) =>
          setSalary(e.target.value)
        }
      />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default AddEmployeeForm;