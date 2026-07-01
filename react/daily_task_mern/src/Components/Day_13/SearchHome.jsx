import { useNavigate } from "react-router-dom";

const SearchHome = () => {
  const navigate = useNavigate();

  const handleStdSearch = () => {
    navigate("/StudentSearch");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[420px]">
        <h1 className="text-3xl font-bold text-center text-white bg-blue-600 py-3 rounded-lg mb-8">
          Search Options
        </h1>

        {/* Student Search */}
        <div className="flex justify-between items-center border rounded-lg p-4 mb-4 hover:shadow-md transition">
          <p className="text-lg font-medium text-gray-700">
            Student Search
          </p>

          <button
            onClick={handleStdSearch}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Open
          </button>
        </div>

        {/* Product Search */}
        <div className="flex justify-between items-center border rounded-lg p-4 mb-4 hover:shadow-md transition">
          <p className="text-lg font-medium text-gray-700">
            Product Search
          </p>

          <button
            onClick={() => navigate("/ProductSearch")}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Open
          </button>
        </div>

        {/* Employee Search */}
        <div className="flex justify-between items-center border rounded-lg p-4 hover:shadow-md transition">
          <p className="text-lg font-medium text-gray-700">
            Employee Search
          </p>

          <button
            onClick={() => navigate("/EmployeeSearch")}
            className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchHome;