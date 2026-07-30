import http from "http";
import dotenv from "dotenv";
import os from 'os';
import process from "process";
import path from 'path'

dotenv.config();
const app = http.createServer();
const PORT = process.env.PORT;
const ApplicationName = process.env.ApplicationName;
const AuthorName = process.env.AuthorName;

const filePath = path.join("images", "log.png")

const absolutePath = path.resolve("app.js")
console.log(absolutePath);


console.log(`Appplication name: ${ApplicationName}`);
console.log(`Author name: ${AuthorName}`);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});



console.log(filePath);


console.log(os.hostname());

console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());

console.log(os.totalmem());

console.log(os.freemem());


console.log(process.version);

console.log(process.cwd());

console.log(process.platform);

console.log(process.argv);

console.log(process.env);
                                    
