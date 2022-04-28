const fs = require("fs");
const http = require("http");
const port = 3000;

let string = "Hello World";
fs.writeFile("./txt/output.txt", string, "utf-8", (err, data) => {
  console.log(`Write file success`);
});

const server = http.createServer((req, res) => {
  fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


