import { Link } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {

   const [users,setUsers] = useState([
  
      {name:"React",year:2013,cat:"Node",plan:"Basic", course:{name:"React"}},
      {name:"Node",year:2014,cat:"Node",plan:"Hard", course:{name:"Node"}},
      {name:"Angular",year:2015,cat:"Node",plan:"Hard", course:{name:"Angular"}},
      {name:"HTML",year:2017,cat:"Node",plan:"Basic", course:{name:"HTML"}},
      {name:"Express",year:2020,cat:"Node",plan:"Basic", course:{name:"Express"}},
  ]) 
    
  const handleClick = (indexvalue) =>{
       let edit = users.map((e,i)=>
          i === indexvalue ? {...e,year:2020}:e
       )

    setUsers(edit)
  }


  return (
    <>
    <div className="bg-blue-600 text-white flex p-3 gap-10 shadow-xl">
        <div className="mx-10 bg-white p-1 rounded w-25 text-black text-center">Logo</div>
        <div className="mx-10 flex gap-10">
            
            <Link to={""}>Home</Link>
            <Link to={"/object"}>Object</Link>
            <Link to={"/array"}>Array</Link>
            <Link to={"/arrobj"}>Array of Object</Link>

        </div>
    </div>

    <div>
       <div className="bg-green-500 p-10 h-150">
         <div className="flex justify-items-start gap-5 items-center">
          <h1 className="mb-5 text-center bg-white w-25 rounded p-2">Object</h1>
           <button className=" bg-white p-2 rounded mb-5" >Click to Update</button>
        </div>
        <div className="bg-white p-10 flex gap-6">
          {users.map((e,i)=>(
            <div className="bg-black p-3 text-white w-50 h-60 rounded-2xl" key={i+1}>
          
              <h1>{e.name}</h1>
              <p>{e.year}</p>
              <p>{e.cat}</p>
              <p className="mb-5">{e.plan} <span className="bg-amber-300 text-black my-2 p-1 rounded ">{e.course.name}</span></p>
               <button className="bg-white w-25 text-center rounded p-1 text-black" onClick={()=>handleClick(i)}>More</button>
          </div>
          ))}
        </div>
    </div>
    </div>



    </>
  )
}

export default Navbar