import { useEffect, useState } from "react";

const CountUseEffect = () => {
  const [loading, setLoading] = useState("");

  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    setLoading("Component Loaded");
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  useEffect(() => {
    document.title = `Count ${count2}`;
  }, [count2]);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleClickCount2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        useEffect Examples
      </h1>

      {/* Loading Message */}
      <div className="bg-green-100 text-green-700 px-6 py-3 rounded-lg shadow mb-8">
        {loading}
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl px-5">
        {/* Count Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Count State
          </h2>

          <p className="text-5xl font-bold text-blue-500 mb-6">{count}</p>

          <button
            onClick={handleClickCount}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Increment
          </button>
        </div>

        {/* Document Title Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Document Title Count
          </h2>

          <p className="text-5xl font-bold text-purple-500 mb-6">
            {count2}
          </p>

          <button
            onClick={handleClickCount2}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountUseEffect;