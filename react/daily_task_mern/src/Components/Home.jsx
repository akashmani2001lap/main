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

  const handleClickFormHandling = () =>{
    navigate('/RegisterNew')
  }

  const handleClickFormWithProps = () =>{
    navigate('/LoginForm')
  }

  const handleClickStudentRegForm = () =>{
    navigate('/StudentRegistrationForm')
  }

  const handleClickUseEffect = () =>{
    navigate('/HomeUseEffect')
  }

  const handleClickSearch = () =>{
    navigate('/SearchHome')
  }

  const handleFilterFetch = () =>{
    navigate('/FilterFetch')
  }

  const handleUSeRef = () =>{
    navigate('/UseRef')
  }

  const handleUSeContext = () =>{
    navigate('/UseContextHome')
  }

  const handleusememo = ()=>{
    navigate('/UseMemoHome')
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




        {/* Home Button Card - 9*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_8 & Day_9 Form Handling
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 9
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickFormHandling}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>






         {/* Home Button Card - 10*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_10 Form Handling with Props
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 10
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickFormWithProps}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>




         {/* Home Button Card - 11*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_11 Form Handling with Edit & Delete
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 11
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickStudentRegForm}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



         {/* Home Button Card - 12*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_12 UseEffect 
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 12
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickUseEffect}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>


        {/* Home Button Card - 13*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_13 Search Option 
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 13
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleClickSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>




        {/* Home Button Card - 14*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_14 FilterFetch 
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 14
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleFilterFetch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>




         {/* Home Button Card - 15*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_16 useRef
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 15
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleUSeRef}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 15*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_18 useRef
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 16
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleUSeContext}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        </div>



        {/* Home Button Card - 16*/}
        <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
          <h2 className="text-xl font-semibold mb-2 text-center">
           Day_19 useMemo
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Card - 17
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleusememo}
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
