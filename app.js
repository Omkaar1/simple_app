const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hi, my name is Omkar and i am a DevOps engineer 🚀");
});

server.listen(3000);
