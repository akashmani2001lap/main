import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="text-center py-20 bg-gray-100">
      <h2 className="text-5xl font-bold">
        Welcome to Tech Solutions
      </h2>

      <p className="mt-4 text-gray-600">
        Build modern websites with React.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Register
        </button>
      </div>
    </section>
  );
}

export default Banner;