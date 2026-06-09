//Task_1
console.log("---------//TasK_1--------");



let studentDetails = {
  stName :"Akash",
  stPhoneNumber : 636914851,
  stAge : 25
}

console.log(`The Student name is ${studentDetails.stName} and his age was ${studentDetails.stAge} for contact him ${studentDetails.stPhoneNumber} `);


//Task_2
console.log("---------//TasK_2--------");



const empDetails = (empName,empAge,empSalary)=>{

//let empYearlySalary = empSalary * 12

console.log
(`Employee_Name = ${empName}
Employee_Age = ${empAge}
Employee_YearlySalry = ${empSalary * 12}`);

}
empDetails("Akash",25,48000)



//Task_3
console.log("---------//TasK_3--------");


const getDiscountedPrice = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log(getDiscountedPrice(1000, 20));


// Task_4
console.log("---------//TasK_4--------");


const userRegistration = (userName,userAge,userRole = "employee")=>{

  console.log(
  `UserName = ${userName} 
  UserAge = ${userAge} 
  UserRole = ${userRole}`);
  
}

userRegistration("Akash",25)

//Task_5
console.log("---------//TasK_5--------");

const shoppingCart = (...allProducts) =>{

 return allProducts.reduce((num,sum)=>num+sum,0)

}

console.log(shoppingCart(23,34,32,45,6,6,7));


//Task_6
console.log("---------//TasK_6--------");


const fronEnd = ["html", "CSS", "javascript", "React"]
const backEnd = ["NodeJs", "ExpressJs", "mangoDb"]

let WebDevelopemnt = [...fronEnd , ...backEnd]

console.log(WebDevelopemnt);


//Task_7
console.log("-----------//TasK_7-----------");

const employeDt = {
  name : "murali",
  age : 38
}

let additionalInfo = {...employeDt,Location : "velachery"}

console.log(additionalInfo);


//Task_8
console.log("---------//TasK_8--------");

let studentDt = {
  stuName :"Akash",
  stuPhoneNumber : 636914851,
  stuAge : 25
}

let {stuName , stuPhoneNumber, stuAge} = studentDt;

console.log(stuName);
console.log(stuPhoneNumber);
console.log(stuAge);


//Task_9
console.log("---------//TasK_9--------");


let studentName = "Akash";
let studentAge = 25;
let studentPhoneNumber = 636914851;

let studentDetailsNew = {
  studentName,
  studentAge,
  studentPhoneNumber  
}

console.log(studentDetailsNew );


//Task_10
console.log("---------//TasK_10--------");


const newuser = {
  id: 1,
  name: "Akash",
  profile: {
    email: "akash@gmail.com",
    address: {
      city: "Chennai",
      state: "Tamil Nadu"
    }
  }
};

const displayDashboard = (userData) => {

  const name = userData?.name ?? "Guest User";

  const email =
    userData?.profile?.email ??
    "Email Not Available";

  const city =
    userData?.profile?.address?.city ??
    "City Not Available";

  const state =
    userData?.profile?.address?.state ??
    "State Not Available";

  console.log(`

        USER DASHBOARD

Name  : ${name}
Email : ${email}
City  : ${city}
State : ${state}

`);
};

displayDashboard(newuser);


//Task_11
console.log("---------//TasK_11--------");


const getHighestMark = (...marks)=>{

  heighest = marks[0]

  for(mark of marks){
    if(mark > heighest){

      heighest = mark;
    }

  }
  return heighest;

}
console.log(getHighestMark (23,56,78,34,53));


///Task_12
console.log("---------//TasK_12--------");


function mergeCourses(...courseArrays) {
  return courseArrays.flat();
}

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const database = ["MongoDB", "MySQL"];

const allCourses = mergeCourses(
  frontend,
  backend,
  database
);

console.log(allCourses);



//Task_13
console.log("---------//TasK_13--------");


function updateStock(product, newStock) {
  return {
    ...product,
    stock: newStock
  };
}

const product = {
  id: 101,
  name: "Laptop",
  stock: 10
};

const updatedProduct = updateStock(product, 25);

console.log("Original:", product);
console.log("Updated:", updatedProduct);




//Task_14
console.log("---------//TasK_14--------");


function displayUser(user) {
  const { name, age, city } = user;

  console.log(`
User Details

Name : ${name}
Age  : ${age}
City : ${city}
`);
}

const user = {
  name: "Akash",
  age: 25,
  city: "Chennai"
};

displayUser(user);




//Task_15
console.log("---------//TasK_15--------");


let employees = [];


// Add Employee
const addEmployee = (
  id,
  name,
  salary = 15000,
  department = "General"
) => {

  const employee = {
    id,
    name,
    salary,
    department
  };

  employees.push(employee);

  console.log(`${name} added successfully`);
};


// Update Employee
const updateEmployee = (
  id,
  updatedData
) => {

  employees = employees.map(emp =>
    emp.id === id
      ? { ...emp, ...updatedData }
      : emp
  );

  console.log(`Employee ${id} updated`);
};


// Display Employee
const displayEmployee = (id) => {

  const employee = employees.find(
    emp => emp.id === id
  );

  if (!employee) {
    console.log("Employee not found");
    return;
  }

  const {
    name,
    salary,
    department
  } = employee;

  console.log(`
Employee Details

ID         : ${id}
Name       : ${name}
Salary     : ${salary}
Department : ${department}
`);
};


// Calculate Total Salary
const calculateSalary = (...salaries) => {

  return salaries.reduce(
    (total, salary) => total + salary,
    0
  );
};


// Optional Chaining + Nullish Coalescing
const getDepartment = (id) => {

  const employee = employees.find(
    emp => emp.id === id
  );

  return employee?.department ?? "No Department Assigned";
};


// Employee Operations

addEmployee(
  1,
  "Akash",
  30000,
  "Frontend"
);

addEmployee(
  2,
  "John",
  40000,
  "Backend"
);

addEmployee(
  3,
  "David"
);

displayEmployee(1);

updateEmployee(
  1,
  {
    salary: 35000
  }
);

displayEmployee(1);

console.log(
  "\nDepartment:",
  getDepartment(1)
);

const totalSalary = calculateSalary(
  ...employees.map(emp => emp.salary)
);

console.log(
  `\nTotal Salary of All Employees: ${totalSalary}`
);


// Display All Employees

console.log("\nAll Employees:");
console.table(employees);