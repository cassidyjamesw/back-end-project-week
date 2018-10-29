const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(helmet());
server.use(express.json());

// sanity check endpoint
server.get("/", (req, res) => {
  res.send("Testing");
});

//Routes

server.listen(9000, () => console.log("\nAPI running on port 9000\n"));
