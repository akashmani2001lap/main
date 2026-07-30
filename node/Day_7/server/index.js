import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './config/db.js';


dotenv.config();
connectDb();
const app = express();

app.use(cors())
app.use(express.json())



const PORT = process.env.PORT


app.listen(PORT,()=>{

  console.log(`sever has been successfully run on http://localhost:${PORT}`);

})


