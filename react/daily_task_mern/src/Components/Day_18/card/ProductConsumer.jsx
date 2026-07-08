import { useContext } from "react"
import ProductContext from "../context/ProductContext"

const ProductConsumer = () => {

  const {products} = useContext(ProductContext)

  return (

    <>
      <div>
        {products.map((e)=>(
         <div key={e.id}>
           <p>{e.title}</p>
          <p>{e.price}</p>
         </div>
        ))}
      </div>
    </>

  )
}

export default ProductConsumer