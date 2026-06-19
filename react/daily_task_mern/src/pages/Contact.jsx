
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-3 rounded"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>Email: support@example.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Chennai, Tamil Nadu</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;