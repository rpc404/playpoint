const MarketplaceRouter = require("express").Router();
const multer = require("multer");

const newMarketplaceStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let fileFormat = file.mimetype.split("/");
    let fileName = Date.now() + "." + fileFormat[fileFormat.length - 1];
    cb(null, fileName);
  },
});

const newMarketplaceUpload = multer({ storage: newMarketplaceStorage });
const { newMarketplaceController, getMarketplacesController } = require("../controllers/Marketplace");

MarketplaceRouter.post(
  "/new-marketplace",
  newMarketplaceUpload.single("marketplaceCoverImage"),
  newMarketplaceController
).get("/get-marketplaces", getMarketplacesController);

module.exports = MarketplaceRouter;
