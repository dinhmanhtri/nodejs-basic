const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", "utf-8", (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    });
  } else if (req.url === "/about") {
    fs.readFile("./views/about.html", "utf-8", (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(data);
    });
  } else {
    res.writeHead(400);
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

