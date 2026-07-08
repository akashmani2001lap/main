import { useContext } from "react"
import UsersContext from "../context/UsersContext"

const UserDetailsConsumer = () => {


  const {user} = useContext(UsersContext)
 
  

  return (

    <div>
      <p>Name:  {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role:  {user.role}</p>
    </div>

  )
}

export default UserDetailsConsumer