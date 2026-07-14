import { useMemo, useState } from "react";

const filteredData = (search, products) => {
  console.log("Filter Render");

  return products.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
};

const ProductListUseMemo = () => {
  console.log("Component Render");

  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Phone", price: 30000 },
    { id: 2, name: "Keyboard", price: 300 },
    { id: 3, name: "Mouse", price: 250 },
    { id: 4, name: "Monitor", price: 6000 },
    { id: 5, name: "USB Hub", price: 800 },
    { id: 6, name: "Laptop", price: 40000 },
  ];

  const data = useMemo(() => {
    return filteredData(search, products);
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black py-10 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Product List
        </h1>

        {/* Search Box */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-xl
              px-5 py-4
              rounded-2xl
              bg-white/10
              backdrop-blur-lg
              border border-white/20
              text-white
              placeholder-gray-300
              outline-none
              focus:ring-2
              focus:ring-indigo-400
              transition-all
            "
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((e) => (
            <div
              key={e.id}
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-3xl
                p-6
                shadow-xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {e.name}
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-gray-300">
                  Product ID: {e.id}
                </span>

                <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                  ₹{e.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {data.length === 0 && (
          <div className="text-center text-white text-2xl mt-10">
            No products found 😔
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListUseMemo;