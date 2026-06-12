
const ProductCard = () => {
  return (
    <>
        <div className="p-5 bg-orange-400 flex justify-center items-center w-screen h-screen">
          <div className="  text-center bg-yellow-200 rounded-sm  w-100 h-100 ">
            <h1 className="my-10 text-2xl font-bold">PRODUCT DETAILS</h1>

            <ol>
              <li> Product Name :</li>
              <li>Product Price:   </li>
              <li>Product Category:  </li>
              <li>Product Description: </li>
            </ol>

          </div>
        </div>

    </>

  )
}

export default ProductCard