import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import allRoutes from "./routes/userRoutes.js";
import connectDb from "../server/config/db.js";

dotenv.config();
connectDb();

const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use("/api/users", allRoutes);

app.listen(PORT, () => {
  console.log(`successfully server run on the http://localhost:${PORT}`);
});

//  http://localhost:5000/api/user/allUser
