import { useNavigate } from "react-router-dom";

const HomeUseEffect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-10">
        useEffect Process
      </h1>

      {/* Cards Container */}
      <div className="w-full max-w-4xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-5">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Count Effect
          </h2>

          <button
            onClick={() => navigate("/CountUseEffect")}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Open
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Timer useEffect
          </h2>

          <button
            onClick={() => navigate("/TimerUSeEffect")}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Open
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            User Data Fetch
          </h2>

          <button
            onClick={() => navigate("/UserDataFetch")}
            className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Open
          </button>
        </div>

      </div>
    </div>
  );
};

export default HomeUseEffect;