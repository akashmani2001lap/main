
const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">TechSolutions</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-200">Home</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
        <li className="cursor-pointer hover:text-gray-200">Services</li>
        <li className="cursor-pointer hover:text-gray-200">Contact</li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar