
const Product = ({productName,productPrice,productCategory,productBrand}) => {
  return (
    <>
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-3  bg-gray-400 p-2 rounded-md">Product Details</h1>

            <p>Product Name:{productName}</p>
            <p>Product Price:{productPrice}</p>
            <p>Product Category:{productCategory}</p>
            <p>Product Brand:{productBrand}</p>
      </div>
    </>
  )
}

export default Product