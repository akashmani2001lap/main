import { useNavigate } from "react-router-dom";

const UseContextHome = () => {
  const navigate = useNavigate();

  const handleUserprofileClick = () => {
    navigate("/UserDetailsConsumer");
  };

  const handleProductClick = () => {
    navigate("/ProductConsumer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex flex-col items-center py-12">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-indigo-700 mb-12">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl px-6">

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2">

          <div className="text-6xl mb-5">
            👤
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            User Profile
          </h2>

          <p className="text-gray-500 mb-8">
            View and manage your profile information, account settings,
            and personal details.
          </p>

          <button
            onClick={handleUserprofileClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            Open Profile
          </button>

        </div>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-2">

          <div className="text-6xl mb-5">
            🛍️
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Product Catalog
          </h2>

          <p className="text-gray-500 mb-8">
            Browse products, explore categories, and discover the latest
            available items.
          </p>

          <button
            onClick={handleProductClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
          >
            View Products
          </button>

        </div>

      </div>

    </div>
  );
};

export default UseContextHome;