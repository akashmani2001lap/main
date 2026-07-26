import http from 'http'

const app = http.createServer();
const PORT = 5000;

app.listen(PORT,()=>{
  console.log(`the sever has been run on the ${PORT} port..`);
  
})