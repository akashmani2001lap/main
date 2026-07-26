import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config();

const app = express()


app.use(cors())

app.use(expres.json())


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`server has been successfully run on http://localhost:${PORT}`)
  
})





