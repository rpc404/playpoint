import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

export default function NewMarketplace({
  resetMarketplaceFocused,
  getMarketplaces,
}) {
  /**
   * @dev for new marketplace validation
   */
  const [newMarketplaceItem, setNewMarketplaceItem] = React.useState({
    marketplaceSlug: "",
    marketplaceName: "",
    marketplaceCoverImage: null,
  });

  /**
   * @dev onchange marketplace id also check if it matches
   * with other marketplace id's
   */
  const handleMarketplaceSlug = (e) => {
    setNewMarketplaceItem({
      ...newMarketplaceItem,
      marketplaceSlug:
        e.target.value.replace(/ /g, "-") +
        Math.floor(Math.random() * (999 - 100 + 1) + 100),
      marketplaceName: e.target.value,
    });
  };

  const handleResetInputs = () => {
    setNewMarketplaceItem({
      marketplaceSlug: "",
      marketplaceName: "",
      marketplaceCoverImage: null,
    });
  };

  const handleNewMarketplaceSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const { marketplaceName, marketplaceCoverImage, marketplaceSlug } =
      newMarketplaceItem;
    formData.append("marketplaceSlug", marketplaceSlug);
    formData.append("marketplaceName", marketplaceName);
    formData.append("marketplaceCoverImage", marketplaceCoverImage);
    axios
      .post(
        import.meta.env.VITE_SERVER_URI + "api/marketplace/new-marketplace",
        formData
      )
      .then((res) => {
        if (res.status === 200) {
          getMarketplaces();
          resetMarketplaceFocused();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="newMarketplaceItem__container">
      <form onSubmit={handleNewMarketplaceSubmit}>
        <h3>New Marketplace</h3>
        <input
          type="text"
          value={newMarketplaceItem.marketplaceSlug}
          placeholder="Marketplace ID"
          disabled
        />
        <input
          type="text"
          placeholder="Marketplace Name"
          value={newMarketplaceItem.marketplaceName}
          onChange={handleMarketplaceSlug}
        />
        {newMarketplaceItem.marketplaceCoverImage && (
          <img
            src={URL.createObjectURL(newMarketplaceItem.marketplaceCoverImage)}
          />
        )}
        <input
          type="file"
          placeholder="Cover Image"
          onChange={(e) =>
            setNewMarketplaceItem({
              ...newMarketplaceItem,
              marketplaceCoverImage: e.target.files[0],
            })
          }
        />
        <div className="buttons">
          <Button type="submit">Submit</Button>
          <Button onClick={() => handleResetInputs()}>Reset</Button>
        </div>
      </form>
    </div>
  );
}
