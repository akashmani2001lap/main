import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handleCliickLogin =() =>{
    navigate("/login");
  };

  const handleClickRegister =()=>{
    navigate("/register")
  }

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tech Solutions</h1>
          <p className="mt-1 text-sm">Welcome to our website</p>
        </div>

        <div className="flex ">
          <div className="ml-auto flex">
            <Link  to={'/'} className="mx-3">Home</Link>
            <Link to={'/about'} className="mx-3">About</Link>
            <Link to={'/Services'} className="mx-3">Service</Link>
            <Link to={'/contact'} className="mx-3">Contact</Link>
          </div>

          <div className="mx-5 flex items-center ">
            <button onClick={handleCliickLogin} className="mx-3 bg-green-600 text-white rounded-lg p-2 px-3 hover:bg-green-700 transition   ">
              Login
            </button>
            <button onClick={handleClickRegister}  className="mx-3  bg-green-600 text-white rounded-lg p-2   hover:bg-green-700 transition">
              Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
