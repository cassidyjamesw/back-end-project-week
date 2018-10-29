const express = require("express");
const helmet = require("helmet");
const server = express();
var cors = require("cors");

//import routes
const notesRoutes = require("./data/helpers/notesRoutes");

server.use(helmet());
server.use(express.json());
server.use(cors());

// sanity check endpoint
server.get("/", (req, res) => {
  res.send("Testing");
});

//Routes
server.use("/api/notes", notesRoutes);

server.listen(9000, () => console.log("\nAPI running on port 9000\n"));
