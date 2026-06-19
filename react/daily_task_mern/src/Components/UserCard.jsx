
const UserCard = ({userdetails}) => {


  const {Name,Email,Phone,City} = userdetails;
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-3  bg-gray-400 p-2 rounded-md">User Information Card</h1>
        <p>Name: {Name}</p>
        <p>Email: {Email}</p>
        <p>Phone: {Phone}</p>
        <p>City: {City}</p>
      </div>
    </>
  )
}

export default UserCard