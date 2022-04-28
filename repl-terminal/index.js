const http = require("http");
const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.end("Hello World");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

