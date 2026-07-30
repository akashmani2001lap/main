import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/users", authRoutes);

app.listen(PORT, () => {
  console.log(`server has beem running on http://localhost:${PORT}`);
});

// http://localhost:5000/api/users/register
