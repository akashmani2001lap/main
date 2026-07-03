import { useEffect, useState } from "react";

const FilterFetch = () => {
  const [datas, setDatas] = useState([]);
  const [unicategory, setUniCategory] = useState([]);
  const [saveUnicat, setSaveUniCat] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [search, setSearch] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const resdata = await response.json();

      setDatas(resdata.products);

      const uniCat = [...new Set(resdata.products.map((e) => e.category))];
      setUniCategory(uniCat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  let sortProducts = [...datas];

  if (sortValue === "asc") {
    sortProducts.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "dec") {
    sortProducts.sort((a, b) => b.price - a.price);
  }

  if (saveUnicat) {
    sortProducts = sortProducts.filter((e) => e.category === saveUnicat);
  }

  if (search) {
    sortProducts = sortProducts.filter((e) =>
      e.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Product Store
      </h1>

      {/* Filters */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between px-5 mb-10">
        <input
          type="text"
          placeholder="Search Product..."
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={(e) => setSaveUniCat(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>

          {unicategory.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <select
          onChange={(e) => setSortValue(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low → High</option>
          <option value="dec">High → Low</option>
        </select>
      </div>

      {/* Products */}

      <div className="max-w-7xl mx-auto grid gap-8 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-56 w-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            <div className="p-5">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3 capitalize">
                {product.category}
              </span>

              <h2 className="text-lg font-bold mb-2">{product.title}</h2>

              <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-green-600">
                  ${product.price}
                </h3>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterFetch;
