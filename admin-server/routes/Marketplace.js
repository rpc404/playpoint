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
const {
  newMarketplaceController,
  getMarketplacesController,
  updateMarketplacesController,
  deleteMarketplaceController,
} = require("../controllers/Marketplace");

MarketplaceRouter.get("/get-marketplaces", getMarketplacesController)
  .post(
    "/new-marketplace",
    newMarketplaceUpload.single("marketplaceCoverImage"),
    newMarketplaceController
  )
  .patch(
    "/update-marketplace",
    updateMarketplacesController
  )
  .delete("/delete-marketplace", deleteMarketplaceController)
  .patch("/update-marketplace-summary", deleteMarketplaceController)

module.exports = MarketplaceRouter;
