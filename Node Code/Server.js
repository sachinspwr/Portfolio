// const http = require("http");
// const fs = require("fs");

// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile("./portfolio.html", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     });
//   } else if (req.url === "/style.css") {
//     fs.readFile("./style.css", (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Not Found");
//       } else {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.end(data);
//       }
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Handle SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
