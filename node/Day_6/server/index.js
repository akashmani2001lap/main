import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use("/api/users",userRoutes)
app.use("/api/products",productRoutes)

app.listen(PORT,()=>{
  console.log(`server has been successfull running on http://localhost:${PORT}`);
  
})

//   http://localhost:/api/users/register

//   http://localhost:5000/api/products/getProduct