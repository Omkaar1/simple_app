const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Omkar DevOps engineer CI/CD 🚀");
});

server.listen(3000);
