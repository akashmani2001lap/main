//Day_3 Task

//Task_1 Bank Account Using Closure

const accountSystem = (amount) => {
  let Initial_Balance = 5000;

  return {
    deposit(amount) {
      Initial_Balance += amount;

      console.log(`Deposited : ${Initial_Balance}`);
    },

    withdraw(amount) {
      if (amount <= Initial_Balance) {
        Initial_Balance -= amount;
        console.log(`Withdrawn:${amount}`);
      } else {
        console.log("Insufficient Balance");
      }
    },

    checkBalance() {
      console.log(`Current balace is:${Initial_Balance}`);
    },
  };
};

const account = accountSystem();

account.checkBalance();
account.deposit(500);
account.checkBalance();
account.withdraw(200);
account.checkBalance();

// Task_2  Student Attendance Counter

const attendanceTracker = () => {
  let count = 0;

  return (countAttendance = () => {
    count++;
    console.log(`Attendance Count is: ${count}`);
  });
};

const attendance = attendanceTracker();

attendance();
attendance();

// Task_3 Website Visitor Counter

const calculateVisitors = () => {
  let visitors = 0;

  return () => {
    visitors++;
    console.log(`Visitors Count is : ${visitors}`);
  };
};

const visit = calculateVisitors();

visit();
visit();
visit();

//Task_4 Shopping Cart Counter

const shoppingCartCounter = (product) => {
  let count = 0;

  return {
    addProduct(product) {
      count += product;
      console.log(`Added product is: ${count}`);
    },

    removeProduct(product) {
      count -= product;
      console.log(`Removed product is: ${product}`);
    },

    totalItem() {
      console.log(`Total item is ${count}`);
    },
  };
};

const cart = shoppingCartCounter();

cart.addProduct(2);
cart.totalItem();
cart.removeProduct(1);
cart.totalItem();

// Task_5  ATM Machine System

const atmSystem = (amount) => {
  let balance = 10000;

  return {
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
                console.log(`withdrawn amount: ${amount}`);

      } else {
        console.log("Insuficiant Balance");
        
      }
    },

    checkBalance(){    
      console.log(`Balance amount: ${balance}`);     
    }
  };
};

const atm = atmSystem();

atm.checkBalance()
atm.withdraw(2000)
atm.checkBalance()



// Task_6  Login Attempt Tracker


const loginTracker = () =>{

  let loginAttempt = 0;

  return ()=>{
    loginAttempt++
    console.log(`Attempt count:${loginAttempt}`);  
  };

};

const login = loginTracker();

login()
login()
login()