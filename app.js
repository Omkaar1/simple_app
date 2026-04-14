const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hi, my name is Omkar and i am a DevOps engineer with 3 years of experience!");
});

server.listen(3000);
