import { useNavigate } from "react-router-dom";

const UseMemoHome = () => {

  const navigate = useNavigate();


  const handleClickproduct = () => {
    navigate("/ProductListUseMemo");
  };

  const handleClickStudent = ()=>{
    navigate('/StudentPlacement')
  };



  return (
    <>
      <div>UseMemoHome</div>

      <div className="min-h-screen ">




        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {/* Home Button Card - 1*/}
          <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
            <h2 className="text-xl font-semibold mb-2 text-center">Product List</h2>

            <p className="text-gray-600 mb-4 text-center">Card - 1</p>

            <div className="flex justify-center">
              <button
                onClick={handleClickproduct}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {/* Home Button Card - 2*/}
          <div className="w-64 bg-gray-300 rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300 m-8">
            <h2 className="text-xl font-semibold mb-2 text-center">Placed Student List</h2>

            <p className="text-gray-600 mb-4 text-center">Card - 1</p>

            <div className="flex justify-center">
              <button
                onClick={handleClickStudent}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        </div>





      </div>
    </>
  );
};

export default UseMemoHome;
