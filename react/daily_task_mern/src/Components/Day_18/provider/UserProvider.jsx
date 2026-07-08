// import { useState } from "react"
import UsersContext from "../context/UsersContext"

const UserProvider = ({children}) => {

  // const [user] = useState({ name: "Sudhan", email: "sudhan@gmail.com", role: "Trainer"})
  const user = {
    name: "Sudhan", email: "sudhan@gmail.com", role: "Trainer"
  }
  return (

    <UsersContext.Provider value={{user}}>
        {children}
    </UsersContext.Provider>

  )
}

export default UserProvider