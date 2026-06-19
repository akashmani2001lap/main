
const Services = () => {
  const services = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "UI/UX Design",
    "API Integration",
    "Website Maintenance",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold mb-3">
                {service}
              </h2>

              <p className="text-gray-600">
                We provide professional {service.toLowerCase()}
                services for businesses and startups.
              </p>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;