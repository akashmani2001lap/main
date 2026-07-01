import { useEffect, useState } from "react"

const DataShower = () => {

  const [users,setUser] = useState([])

  useEffect(()=>{
    const storeData = JSON.parse(localStorage.getItem("newUserData")) || [];
    setUser(storeData);
  },[])

 return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-8">
      Registered Users
    </h1>

    <div className="grid gap-6 max-w-4xl mx-auto">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-5 border"
        >
          <p>
            <span className="font-semibold">Name:</span>{" "}
            {user.userName}
          </p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            {user.userEmail}
          </p>

          <p>
            <span className="font-semibold">Age:</span>{" "}
            {user.userAge}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default DataShower