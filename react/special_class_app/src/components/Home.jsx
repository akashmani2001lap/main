import Student from "../components/Student";
import Company from "./Company";
import EmployeeCard from "./EmployeeCard";
import Product from "./Product";
import Skills from "./Skills";
import UserCard from "./UserCard";
import Parent from "./Parent";
import CourseCard from "./CourseCard";

const Home = () => {
  const skill = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  const userDetails = {
    Name: "AkashMani",
    Email: "akashmani2001am@gmail.com",
    Phone: 6369140851,
    City: "chennai",
  };

  const empDetails = {
    companyNamenew: "SLA",
    employyeName: "Tamil",
    employeeRole: "Instructor",
    employeeSalary: 30000,
  };

  const name = "Sudhan";
  const course = "MERN";

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gray-500 p-6 rounded-md">
          Props Practice Tasks
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <Student name="Akash" age={24} course="React JS" city="Chennai" />

          <EmployeeCard
            employeeName="Ram"
            employeeID={204}
            department="IT"
            salary={20000}
            experince="2years"
          />

          <Product
            productName="Vs Code"
            productPrice={15000}
            productCategory="IT Departmnet"
            productBrand="Atlassian"
          />

          <Skills technologies={skill} />

          <UserCard userdetails={userDetails} />

          <Company impDetails={empDetails} />

          <Parent name={name} course={course} />

          <CourseCard courseName="FrontEnd" duration="3month" fee={30000} />

          <CourseCard courseName="Backend" duration="3month" fee={25000} />

          <CourseCard courseName="MERN stack" duration="3month" fee={45000} />
        </div>
      </div>
    </>
  );
};

export default Home;
