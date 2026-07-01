import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RegisterNew = () => {

  const navigate = useNavigate();

  const [userData,setUserData] = useState({userName :"",userEmail:"",userAge:""})

  const handleChange = (e) =>{
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const myData = JSON.parse(localStorage.getItem("newUserData")) || []

    myData.push(userData)

    localStorage.setItem( "newUserData", JSON.stringify(myData))

    alert("successfully Added")

    setUserData({userName :"",userEmail:"",userAge:""})
      
    navigate('/DataShower')
  }

  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-700">Register</h2>
          <input type="text" name="userName" value={userData.userName} placeholder="Enter your Name Here.." onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="text" name="userEmail" value={userData.userEmail} placeholder="Enter your Email.." onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input type="text" name="userAge" value={userData.userAge} placeholder="Enter your Age.." onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
           <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Register
        </button>
        </form>
      </div>
    </>
  )
}

export default RegisterNew