const Marketplace = require("../models/Marketplace");
const { sanitizeQueryInput } = require("../utils/QuerySanitizer");

module.exports = {
  newMarketplaceController: (req, res) => {
    const { marketplaceName, marketplaceSlug } = req.body;
    const { filename } = req.file;

    const newMarketplace = Marketplace.create({
      marketplaceName,
      marketplaceSlug,
      marketplaceCoverImage: filename,
    });

    Promise.all([newMarketplace])
      .then(() => {
        res.status(200).json({
          sytatus: 200,
          message: "Marketplace created successfully!",
        });
      })
      .catch((err) => console.log(err));
  },
  getMarketplacesController: (req, res) => {
    Marketplace.find()
      .then((response) => res.status(200).json({ data: response }))
      .catch((err) => console.error(err));
  },
  updateMarketplacesController: async (req, res) => {
    const { marketplaceName, marketplaceSlug } = req.body;

    const marketplaceData = await Marketplace.findOne({
      marketplaceSlug: sanitizeQueryInput(marketplaceSlug),
    });

    Marketplace.updateOne(
      {
        marketplaceSlug: sanitizeQueryInput(marketplaceSlug),
      },
      {
        $set: {
          marketplaceName: marketplaceName || marketplaceData.marketplaceName,
        },
      }
    )
      .then(() =>
        res.status(200).json({
          message: "Marketplace Updated Successfully!",
        })
      )
      .catch((err) => console.error(err));
  },
  deleteMarketplaceController: (req, res) => {
    const { marketplaceSlug } = req.body;

    const deleteMarketplace = Marketplace.deleteOne({
      marketplaceSlug: sanitizeQueryInput(marketplaceSlug),
    });

    Promise.all([deleteMarketplace])
      .then(() =>
        res.status(200).json({ message: "Marketplace Deleted Successfully!" })
      )
      .catch((error) => console.error(error));
  },
};
