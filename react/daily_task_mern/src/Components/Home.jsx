import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {

  const navigate = useNavigate();

  const handleClickStudent = ()=>{
    navigate("/maincontent")
  }

  const handleclickSchoolCard = ()=>{
    navigate("/school")
  }

  const handleClickCourseList = () =>{
    navigate('/schoolCourseList')
  }

  const handleclickDashBoard = () =>{
    navigate('/dashboard')
  }

  const handleClickClassComponet = () =>{
    navigate('/StudentClass')
  }

  const handleClickRenderingMethod = () => {
    navigate('/UseStateRendering')
  }

  const handlClickUseStateManagement = () =>{
    navigate('/UseStateManagement')
  }

  const handleClickREndringObj = () => {
    navigate('/Navbar')
  }

 return (

  <>

    <div className="min-h-screen ">
      
      {/* Main Content */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">

        {/* Home Button Card - 1*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Title
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 1
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickStudent}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 2*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Title
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 2
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleclickSchoolCard}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 3*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Title
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 3
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickCourseList}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 4*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            School DashBoard
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 4
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleclickDashBoard}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>





        {/* Home Button Card - 5*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Class Component & Class Component Lifecycle Methods
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 5
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickClassComponet}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>





        {/* Home Button Card - 6*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
            Use State & Rendering methods
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 6
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickRenderingMethod}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 7*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_6 UseStateManagement
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 7
          </p>

          <div className="flex justify-center">
            <button
              onClick={handlClickUseStateManagement}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>




       {/* Home Button Card - 8*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_7 Rendering
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 8
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickREndringObj}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>











      </div>
      
    </div>

    <div>
      <div>
        <Footer/>
      </div>
    </div>
  </>
  
);
};

export default Home;
