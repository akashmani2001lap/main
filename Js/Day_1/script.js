// Task_1 Variable Declaration & Reassignment

const { startTransition } = require("react");

var user_name = "Akash_manibalan";
var user_name = "Akash_M"; // we can reassign the value when the variable is created using the var keyword
console.log(user_name);

let phone_Number = 6369140851;
//let phone_Number = 9786653490   // we can't reassign the  value because 'phone_Number'has already been declared let won't allow the reassign
console.log(phone_Number);

const blood_group = "O+";
//const blood_group = "A+"  //we can reassign the value when the variable is created using the const keyword
console.log(blood_group);

//Task 2: Scope Challenge

let global_Variable = "it can be globaly accessable";

function function_Scope() {
  let a = 15;
  console.log(global_Variable); // we can able to access the variable because we assigned it globaly
}

function_Scope();
console.log(a); // when we try to access the variable insied a funtion, it will show the variable 'a' is not defined

let age = 18;

if (age > 18) {
  let result = "Varibale inside a block scope ";
  console.log("major");
  console.log(global_Variable); // we can able to access the variable because we assigned it globaly
}

console.log(result); // when we try to access the variable insied a funtion, it will show the variable 'result' is not defined

//Task 3: Lexical Scope

const grand_Parent = () => {
  const grand_Parent_Name = "Arumugam";

  return () => {
    const Parent_Name = "Manibalan";

    return () => {
      const child_Name = "AkashMani";

      console.log(grand_Parent_Name);
      console.log(Parent_Name);
      console.log(child_Name);
    };
  };
};

grand_Parent()()(); // Lexical scope means a function can access variables from the scope in which it was defined,

//Task 4: Scope Chain Search

const company = "SLA";

function parent() {
  function child() {
    console.log(company);
  }

  child();
}

parent(); //  When JavaScript cannot find a variable in the current scope, it keeps searching outward. This chain of accessible scopes is called the scope chain.

//Task 5: Hoisting Prediction

console.log(a);

var a = 100; //



//Task 5: Hoisting Prediction

console.log(a);

var a = 100;  

// hoisting is the javascript behaviour, when i initialize a variable and try to access it before the declaration phase.
// that time javascript moves the declaration part to the top of there scope during the compilation phase and before the execution phase 
// so it will return the 'undefined' value on the output but its only with the 'Var' key word.

// Variable declared with 'let'  and 'const' are hoistable but there are not initialized with no other value like "Undefined" 
// they remain completely inaccessible in a state called TDZ (Temporal dead zone). when you try to access them it will reutn the 'referenceError'





// Task 6: TDZ Investigation

console.log(username);

let username = "Sudhan";

// TDZ (Temporal Dead Zone) is the period between When a variable is created in memory, When the variable is initialized with its declaration.
// Variables declared with let and const are hoisted, but they remain inaccessible during this period.

//why reference Error Occurs...

//  Because let variables are hoisted. They are not initialized during the creation phase.
//  Accessing them before their declaration line puts you inside the Temporal Dead Zone.
//JavaScript prevents access and throws a ReferenceError.




// Task 7: Execution Context


const greet = ()=>{
  console.log("Hello");
  
}

greet();

// When the JavaScript program starts, the engine creates the Global Execution Context and JavaScript executes the code line by line.
//When greet() is called, JavaScript creates a new Function Execution Context and pushes it onto the Call Stack.
// after all statements inside greet() are executed, the function finishes and the Function Execution Context is removed (popped) from the Call Stack.
// There is no more code to execute. The Global Execution Context also completes Call Stack becomes empty.

//program starts

         |

//global execution starts

          |

// funtion execution starts

          |

  //console.log("Hello")

          |

//Function Context Ends

          |

// Global Context Ends

          |

//xecution Complete





// Task 8: Type Conversion Challenge


console.log("10" + 5);  // 105

console.log("10" - 5);  // 5

console.log(true + 1);  // 2

console.log(false + 10); // 10

console.log(Number("100"));  // 100

console.log(String(500));  // "500"



// Task 9: Primitive vs Non-Primitive


// primitive data types 

var name = "akash"              // String

let pnone_NUmber = 6369140851   // Number

let result = true               // Boolean

let age                         // Undefined

let User_Name = null            //  Null  

const ma_NUmber = 123456789876543n    // BigInt

const sym = Symbol("foo")       // Symbol


// Non Primitive data types


 // Object
const myObj = {         
  
name = 'Akash',
age = 25,
phoneNumber = 6369140851

}                  


//Array
const fruits = ["Apple", "Banana", 42, true]



//Function
function User(name) {
  return "Hello, " + name + "!";
}

console.log(User("Akash M"));


// Task 10: Complete Interview Scenario

// Hoisting Example
console.log(company);

//var Example
var company = "SLA";


// TDZ example

console.log(student);
let student = "Akash";


// const Example
const course = "MERN";

// Type Conversion
let age = "25";
let convertedAge = Number(age);


function parent() {
  // Function Scope
  var department = "Development";

  // Block Scope
  if (true) {
    let project = "React Project";
    const duration = "3 Months";

    console.log(project);
    console.log(duration);
  }
}



 // Lexical Scope
  function child() {
    console.log(company);
    console.log(course);
    console.log(department);
    console.log(convertedAge);
  }

  child(); // Function Call
}

parent();     


// Memory Creation Phase

// Before executing any code, JavaScript creates memory for variables and functions.


// Execution Phase

// JavaScript executes line by line.
// student → "Akash"


// Scope Creation

// When parent() runs:
// A new Function Execution Context is created.


// Lexical Scope

// Inside parent the child function is written inside parent, So it can access.



// Variable Lookup Process

// When child executesJavaScript searches:

// Child Scope
//    |
// Parent Scope
//    |
// Global Scope 