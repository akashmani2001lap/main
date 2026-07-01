import { useState } from "react"
import LoginDataForm from "../Day_10/LoginDataForm"

const LoginForm = () => {

  const [loginData,setLoginData] = useState({userName:"",userPassword:""})
  const [saveData,setSaveData] = useState([])

  const handleChange = (e) =>{
    setLoginData({...loginData,[e.target.name]:e.target.value})

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSaveData((prev)=>[...prev,loginData])
    console.log(saveData);
    
    setLoginData({userName:"",userPassword:""})
  }
  return (

      <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
            <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>
            <input type="text" name="userName" value={loginData.userName} placeholder="Enter your Name.." onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input type="text" name="userPassword" value={loginData.userPassword} placeholder="Enter Your password.." onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input type="submit"  value={"Login"} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"/>
          </form>
        </div>
        <LoginDataForm  datas={saveData}/>
      </>
    
  )
}

export default LoginForm