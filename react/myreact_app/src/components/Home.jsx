import {useNavigate}  from "react-router-dom"
import { Link } from "react-router-dom";

const Home = () => {

  const  navigate = useNavigate();

  const studentProfileHandle = ()=>{
     
    navigate ("/studentProfile")

  }

  const  CompanyInfoHandle = ()=>{ 
     
    navigate ("/CompanyInfo")

  }

  const MovieDetailsHandle = ()=>{
     
    navigate ("/MovieDetails")

  }

  const ProductCardHandle = ()=>{
     
    navigate ("/ProductCard")

  }


  return (
   <>
    <div>

      <div className="p-5 bg-orange-400  flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">MY APPLICATION</h1>
        <Links />
      </div>

    <div className="bg-yellow-200  w-screen h-screen  ">



      {/* //cards */}

      <div className="flex justify-around">

        <div className="w-50 h-50 bg-orange-400 mx-10 my-20 rounded-lg shadow-xl hover:scale-105 transition duration-300">        
          <h2 className=" flex text-center justify-center my-10">To see the StudentProfile click the button.</h2>

          <div className=" flex  justify-center ">

            <button onClick={studentProfileHandle} className="w-30 h-10 bg-white rounded-sm ">Click Here..</button>

          </div>

        </div>

        <div className="w-50 h-50 bg-orange-400 mx-10 my-20 rounded-lg shadow-xl hover:scale-105 transition duration-300">        
          <h2 className=" flex text-center justify-center my-10">To see the MovieDetails click the button.</h2>

          <div className=" flex  justify-center ">

            <button onClick={MovieDetailsHandle} className="w-30 h-10 bg-white rounded-sm ">Click Here..</button>

          </div>

        </div>

        <div className="w-50 h-50 bg-orange-400 mx-10 my-20 rounded-lg shadow-xl hover:scale-105 transition duration-300">        
          <h2 className=" flex text-center justify-center my-10">To see the CompanyInfo click the button.</h2>

          <div className=" flex  justify-center ">

            <button onClick={CompanyInfoHandle} className="w-30 h-10 bg-white rounded-sm ">Click Here..</button>

          </div>

        </div>

        <div className="w-50 h-50 bg-orange-400 mx-10 my-20 rounded-lg shadow-xl hover:scale-105 transition duration-300">        
          <h2 className=" flex text-center justify-center my-10">To see the ProductDetails click the button.</h2>

          <div className=" flex  justify-center ">

            <button onClick={ProductCardHandle} className="w-30 h-10 bg-white rounded-sm ">Click Here..</button>

          </div>

        </div>
        

       

      </div>
    </div>


    </div>
    
   </>
  )
}
export default Home 


const Links = ()=>{

  return(
    <>
    <div className="">

      <Link className="mx-3 ">Home</Link>
      <Link className="mx-3">Task</Link>
      <Link className="mx-3">Project</Link>
      <Link className="mx-3 mr-7">About Me</Link>

    </div>
    </>
  )
}




