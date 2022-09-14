const Marketplace = require("../models/Marketplace");

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
};
