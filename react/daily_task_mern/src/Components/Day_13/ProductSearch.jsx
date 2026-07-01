import { useState } from "react";

const ProductSearch = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 65000,
      brand: "Dell",
    },
    {
      id: 2,
      name: "Laptop Stand",
      category: "Accessories",
      price: 1200,
      brand: "Portronics",
    },
    {
      id: 3,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 899,
      brand: "Logitech",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 2999,
      brand: "Redragon",
    },
    {
      id: 5,
      name: "Monitor",
      category: "Electronics",
      price: 12000,
      brand: "LG",
    },
    {
      id: 6,
      name: "USB Hub",
      category: "Accessories",
      price: 799,
      brand: "TP-Link",
    },
    {
      id: 7,
      name: "Smartphone",
      category: "Electronics",
      price: 25000,
      brand: "Samsung",
    },
    {
      id: 8,
      name: "Smart Watch",
      category: "Wearables",
      price: 4999,
      brand: "Noise",
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 3499,
      brand: "JBL",
    },
    {
      id: 10,
      name: "Gaming Headset",
      category: "Audio",
      price: 2599,
      brand: "HyperX",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredProductData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Product Search
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Product Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProductData.length > 0 ? (
          filteredProductData.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {product.name}
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Brand:</span>{" "}
                  {product.brand}
                </p>

                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {product.category}
                </p>

                <p>
                  <span className="font-semibold">Price:</span> ₹
                  {product.price.toLocaleString()}
                </p>
              </div>

              <button className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-600 text-xl font-semibold">
            No Product Found
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;