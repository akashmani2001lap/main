import http from "http";
import dotenv from "dotenv";

dotenv.config();

const app = http.createServer();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server has been run on http://localhost:${PORT}`);
});
