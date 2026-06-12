
const HeroSection = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-center text-center h-[80vh] bg-gray-100 px-6">
      <h2 className="text-5xl font-bold text-gray-800">
        Build Your Dream Website
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl">
        We help businesses create modern, responsive, and
        user-friendly web applications using the latest technologies.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
    </>
  )
}

export default HeroSection