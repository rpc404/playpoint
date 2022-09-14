const express = require("express");
const app = express();
const bodyParser = require("body-parser");

/**
 * @dev proper usage of node-cache must be added including apache kafka
 * or any other cache protocols can be impleted
 * const NodeCache = require("node-cache");
 * const customCache = new NodeCache();
 */

/**
 * @documentation Cross-Site Request Forgery Protection
 * https://en.wikipedia.org/wiki/Cross-site_request_forgery
 */
const csrf = require("csurf");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const csrfProtection = csrf({ cookie: true });
app
  .use(cookieParser())
  /**
   * @documentation X-Powered-By for Security, Save Bandwidth in ExpressJS(Node.js)
   * https://stackoverflow.com/questions/33580671/what-does-x-powered-by-mean#:~:text=X%2DPowered%2DBy%20is%20set,out%20what%20kind%20of%20server).
   * */
  .use(helmet())
  .use(helmet.hidePoweredBy())
  .use(helmet.noSniff());

/**
 * @documentation Rate Limiter for Node.js
 * https://blog.logrocket.com/rate-limiting-node-js/#:~:text=Rate%20limiting%20is%20a%20very,are%20processed%20by%20our%20server.
 */
const rateLimit = require("express-rate-limit");
const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 10 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

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

/**
 * @dev folder listener
 */
const statik = require("node-static");
const public = new statik.Server("./public");

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

app
  .get("/", apiLimiter, csrfProtection, (req, res) => {
    const csrfToken = req.csrfToken();

    //   customCache.set("csrfToken", token, 10 * 60);

    res.json({
      csrfToken,
    });
  })
  .use(cors())
  .use(morgan("dev"))
  .use(express.static('uploads'))
  .use("/api/marketplace", apiLimiter, csrfProtection, MarketplaceRouter)
  .get("*", (req, res) =>
    res.json({
      msg: "404 Not Found!",
    })
  );

module.exports = app;
