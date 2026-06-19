import { useState } from "react"

const UseStateManagement = () => {



  // Task 1 - Counter Application
  let [count,setCount] = useState(0)

  const increament = ()=>{
    setCount(count + 1)
  }

    const decreament = ()=>{
    setCount(count - 1)
  }

    const reset = ()=>{
    setCount(0)
  }

  //Task 2 - Student Name Update

  let [stname,setStName] = useState("Sudhan")

  const handleNameChange = ()=>{
    setStName(stname === "Sudhan" ? "Ravi" : "Sudhan")
  }


  //Task 3 - Age Increment

  let [age,setAge] =  useState(18);

  const handleSetAge = () =>{
    setAge(age + 1)
  }


  //Task 4 

   const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  //Task 5
  const [darkMode, setDarkMode] = useState(false);
  
  //task 6

   const [show, setShow] = useState(true);

   //Task 7

   const [user, setUser] = useState(null);

    const loadUser = () => {
    setUser({
      name: "Sudhan",
      city: "Chennai",
    });
  };



  return (
    <>
    
    <div className={`min-h-screen flex flex-col justify-center items-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}>



      <div>
        <h1>{count}</h1>

        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        <button onClick={reset}>Reset</button>

      </div>


      <div>
        <h1>{stname}</h1>

        <div>
          <button onClick={handleNameChange}>Change Name</button>
        </div> 
      </div>



      <div>
        <h1>{age}</h1>

        <div>
          <button onClick={handleSetAge}>Increase Age</button>
        </div>
      </div>


      <div>
        <h1> {isLoggedIn ? "Logged In" : "Logged Out"}</h1>

        <button onClick={handleLogin}> {isLoggedIn ? "Logout" : "Login"}</button>
      </div>

      <div>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
      </div>


      <div>

        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

        {show && (
        <p className="mt-5 text-lg">
          Welcome to React useState!
        </p>
      )}
      </div>


      <div>
        <button onClick={loadUser}>Load User</button>

         {user && (
        <div className="mt-5">
          <h2>Name : {user.name}</h2>
          <h2>City : {user.city}</h2>
        </div>
      )}
      </div>







    </div>


    </>
  )
}

export default UseStateManagement