require("dotenv").config(); // loads .env configuration

const express = require("express");
const helmet = require("helmet");
const server = express();
const knex = require("./data/config.js");
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

const port = process.env.PORT || 9000;

server.listen(port, () => console.log(`Api running on port: ${port}`));
