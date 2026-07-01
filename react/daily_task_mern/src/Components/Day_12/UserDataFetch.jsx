import { useEffect, useState } from "react";

const UserDataFetch = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        User Data Fetch
      </h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {userData.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              {e.name}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Username:</span> {e.username}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {e.email}
              </p>

              <p>
                <span className="font-semibold">Street:</span>{" "}
                {e.address.street}
              </p>

              <p>
                <span className="font-semibold">City:</span> {e.address.city}
              </p>

              <p>
                <span className="font-semibold">Zip Code:</span>{" "}
                {e.address.zipcode}
              </p>

              <p>
                <span className="font-semibold">Phone:</span> {e.phone}
              </p>

              <p>
                <span className="font-semibold">Website:</span> {e.website}
              </p>

              <p>
                <span className="font-semibold">Company:</span>{" "}
                {e.company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDataFetch;