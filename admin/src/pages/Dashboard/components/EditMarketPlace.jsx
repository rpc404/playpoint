import { Button } from "@mui/material";
import axios from "axios";
import React from "react";


export default function EditMarketPlace({resetMarketplaceFocused,editSlug,getMarketplaces}) {

 

   /**
   * @dev for new marketplace validation
   */
    const [updateMarketplaceItem, setUpdateMarketplaceItem] = React.useState(editSlug);
  
    /**
     * @dev onchange marketplace id also check if it matches
     * with other marketplace id's
     */
    const handleMarketplaceSlug = (e) => {
      setUpdateMarketplaceItem({
        ...updateMarketplaceItem,
        marketplaceName: e.target.value,
      });
    };
  
    const handleResetInputs = () => {
      setUpdateMarketplaceItem({
        ...updateMarketplaceItem,
        marketplaceName: "",
      });
    };
  
    const handleUpdateMarketplaceItem = async (e) => {
      e.preventDefault();
      // later maybe it need to update cover image as well
      // formData.append("marketplaceCoverImage", marketplaceCoverImage);
      axios(
          import.meta.env.VITE_SERVER_URI + "api/marketplace/update-marketplace",
          {
            method:'patch',
            data:updateMarketplaceItem,
          }
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
      <form onSubmit={handleUpdateMarketplaceItem}>
        <h3>Edit Marketplace</h3>
        <input
          type="text"
          value={updateMarketplaceItem.marketplaceSlug}
          placeholder="Marketplace ID"
          disabled
        />
        <input
          type="text"
          placeholder="Marketplace Name"
          value={updateMarketplaceItem.marketplaceName}
          onChange={handleMarketplaceSlug}
        />
        {updateMarketplaceItem.marketplaceCoverImage && (
          <img
            src={ import.meta.env.VITE_SERVER_URI + updateMarketplaceItem.marketplaceCoverImage}
          />
        )}

        {/* <input
          type="file"
          placeholder="Cover Image"
          onChange={(e) =>
            setUpdateMarketplaceItem({
              ...updateMarketplaceItem,
              marketplaceCoverImage: e.target.files[0],
            })
          }
        /> */}

        <div className="buttons">
          <Button type="submit">Submit</Button>
          <Button onClick={() => handleResetInputs()}>Reset</Button>
        </div>
      </form>
    </div>
  );
}
