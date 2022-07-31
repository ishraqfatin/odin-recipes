const http = require("http");
const fs = require("fs");
const port = 2000;

const server = http.createServer(
  function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
  // res.write("Its me Mario!");
  // res.end();
});

server.listen(port, function (error) {
  if (error) {
    console.log("Oops! Something went wrong", error);
  } else {
    console.log("Things are working fine on this port " + port);
  }
});
