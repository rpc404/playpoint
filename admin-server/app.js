const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const dbUri = process.env.MONGO_DB_URI;

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database => Connected..."))
  .catch((err) => {
    console.log("database connection failed. exiting now...");
    console.error(err);
    process.exit(1);
  });

/**
 * @documentation HTTP request logger middleware for node.js
 */
const morgan = require("morgan");

/**
 * @documentation Cross Origin Resource Sharing
 * Cors is a node.js package for providing a Connect/Express
 * middleware that can be used to enable CORS with various options.
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
const cors = require("cors");

const MarketplaceRouter = require("./routes/Marketplace");
const FixtureRouter = require("./routes/Fixture");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app
  .use(cors())
  .use(morgan("dev"))
  .use(express.static("uploads"))
  .use("/api/marketplace", MarketplaceRouter)
  .use("/api/fixture", FixtureRouter)
  .get("*", (req, res) =>
    res.json({
      msg: "404 Not Found!",
    })
  );

module.exports = app;
