
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-8">
          Welcome to our platform. We specialize in building modern,
          responsive, and user-friendly web applications using the
          latest technologies such as React, JavaScript, and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-100 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Mission</h2>
            <p>
              Deliver high-quality software solutions that help
              businesses grow.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Vision</h2>
            <p>
              Become a trusted technology partner worldwide.
            </p>
          </div>

          <div className="bg-gray-100 p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Values</h2>
            <p>
              Innovation, Quality, Integrity, and Customer Satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;