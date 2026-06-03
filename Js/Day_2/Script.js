//  Day 2 Task
    
// Task 1

//Type 1
const studentName = (firstName,latName)=>{

  return firstName + latName

}
 
console.log("Akash","mani")


//Type 2
const studentName1 = (FisrtName,LastName)=>{

return `${FisrtName}${LastName}`

}

console.log(studentName1("jhony", "bhai"));


//Task 2

const totalAmount = (price , productCount) =>{

  return price * productCount
   
}

console.log(totalAmount(400,3))
 

// Task 3

//To check the user age is valid to the voting process

const ageLimit = (age) =>{

    if(age >= 18 ){
 
      console.log("you are allowed to vote")

    }
    else( console.log("your age is below 18, So yo are not allowed for the voting process")
    )

};

ageLimit(17);


//Task 4

const largestNumber = (num1, num2, num3) =>{

    if(num1 >= num2 && num1 >= num3){
      return num1 ;
    }else if(num2 >= num1 && num2 >= num3){
      return num2;
    }else{
      return num3
    }

};

console.log(largestNumber(23,45,68));


//Task 5

const user_Name = (userName = "Guest")=>{

  return userName;

}

console.log(user_Name("Akash M"));


// Task 6

const calculate = (num1, num2)=>{

  return {

    sum : num1 + num2,
    diffrence : num1 - num2,
    Multiplication : num1 * num2,
    Division : num1 / num2

  }

}

console.log(calculate(10,50));


// Task 7

const  totalmark = (sub1,sub2,sub3,sub4,sub5,)=>{

  const allMark = sub1 + sub2 + sub3 + sub4 + sub5
  const average = allMark / 5

  return {

    allMark,
    average
  };

};
console.log(totalmark(88,98,78,98,79));





// Task 8

const calculateSalary = (salary)=>{

  const hra = salary *0.02;
  const DA = salary *0.01;
  const totalSalary = salary + hra + DA;

  return {
    hra,
    DA,
    totalSalary
  }

}
console.log(calculateSalary(45000));



// Task 9

const celsiusToFahrenheit = (celsius) =>{

  return (celsius * 9/5) + 32;

};
console.log(celsiusToFahrenheit(25));



// Task 10

// To check if the provided value even number or not..

const evenNumber = (num) =>{

    if(num / 2 == 0){
      return `${num} is a Even Number`
    }

    return `${num} is a odd Number`

}

console.log(evenNumber(18));



// Task 11

const strlenght = (str) =>{

   const lenghtOfStr = str.length;
   return lenghtOfStr;
}
console.log(strlenght("Hello Hi"));



// Task 12

const printName = (name, count)=>{

  for(let i = 1 ; i <= count ; i++){
    console.log(name)
  }

}
printName('Akash', 2)


// Task 13

const multipleMark = (...marks) =>{

  let totalmark = 0; 

  for(let mark of marks){

    totalmark += mark;

  }


  return totalmark;
}

console.log(multipleMark(65,67,89,78,89))


// Task 14



// Task 15


// Task 16




