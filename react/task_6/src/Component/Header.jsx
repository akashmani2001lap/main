import img from "../assets/unnamed.png"



const Header = () => {
 
  return (
    <header>
      <div className="p-5 flex items-center bg-amber-200">
    <img className="w-20 h-20" src={img} alt="" />

    <h1 className="mx-3">Tech Solutions</h1>

    <div className="ml-auto">
      <ul className="flex">
        <li className="mx-5">Home</li>
        <li className="mx-5">About</li>
        <li className="mx-5">Services</li>
        <li className="mx-5">Contact</li>
      </ul>
    </div>
  </div>

      
    </header>
  );
}

export default Header