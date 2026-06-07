import { useState } from "react";
import { employees as employeeData } from "../data/employees";

import SearchBar from "../components/SearchBar";
import DepartmentFilter from "../components/DepartmentFilter";
import EmployeeList from "../components/EmployeeList";
import SalarySummary from "../components/SalarySummary";
import AddEmployeeForm from "../components/AddEmployeeForm";

function Dashboard() {
  const [employees, setEmployees] =
    useState(employeeData);

  const [search, setSearch] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const filteredEmployees =
    employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =
        department === ""
          ? true
          : employee.department ===
            department;

      return (
        matchesSearch &&
        matchesDepartment
      );
    });

  return (
    <div className="p-5">
      <h1>
        Employee Management Dashboard
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <DepartmentFilter
        department={department}
        setDepartment={
          setDepartment
        }
      />

      <SalarySummary
        employees={filteredEmployees}
      />

      <AddEmployeeForm
        employees={employees}
        setEmployees={
          setEmployees
        }
      />

      <EmployeeList
        employees={
          filteredEmployees
        }
      />
    </div>
  );
}

export default Dashboard;