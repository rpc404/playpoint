import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import EditFixture from "./EditFixture";
import NewFixtures from './NewFixtures'

export default function Fixtures() {
  const [fixturesItems, setFixturesItems] = React.useState([]);
  const [isHome, setIsHome] = React.useState(true);
  const [action, setAction] = React.useState("");
  const [editItem, seteditItem] = React.useState({});

  const getFixtures = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URI}api/fixture/get-fixtures`)
      .then((res) => setFixturesItems(res.data?.fixtures))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    getFixtures();
  }, []);

  const handleAddItem = () => {
    setIsHome(false);
    setAction('add-item');
  }

  const deleteItem = (id) => {
    axios(`${import.meta.env.VITE_SERVER_URI}api/fixture/delete-fixture`, {
      method: 'delete',
      data: { _id: id }
    })
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          getFixtures();
        }
      })
      .catch((err) => console.error(err));
  }

  const handleEdit = (data) =>{
    setAction('edit-item');
    setIsHome(false)
    seteditItem(data)
  }


  return (
    <div className="fixtures__container">
      <div className="fixturesCoverImage"></div>
      {isHome &&
        <>
          <div className="title">
            <h2>Fixtures - 10 Fixtures</h2>
            <div className="rightTitleBar">
              <Button onClick={() => handleAddItem()}>
                <i className="ri-menu-add-line"></i> Add Item
              </Button>
            </div>
          </div>

          <div className="fixtureItems__container">
            <div className="titles">
              <p>
                <i className="ri-medal-line"></i> S.N.
              </p>
              <p>
                <i className="ri-gamepad-line"></i> Game
              </p>
              <p>
                <i className="ri-map-pin-line"></i> Location
              </p>
              <p>
                <i className="ri-layout-masonry-line"></i> Group
              </p>
              <p>
                <i className="ri-fire-line"></i> Action
              </p>
            </div>

            <div className="items">
              {fixturesItems.map((data, index) => {
                console.log(data);
                return (
                  <div className="item__container" key={index}>
                    <p>{index + 1}</p>
                    <p>
                      {data.HomeTeam} vs {data.AwayTeam}
                    </p>
                    <p>{data.Location}</p>
                    <p>{data.Group}</p>
                    <p>
                      <Button onClick={()=>handleEdit(data)}><i className="ri-edit-2-line"></i> Edit</Button>
                      <Button onClick={() => deleteItem(data._id)}><i className="ri-delete-bin-5-line"></i> Delete</Button>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      }
      {
        !isHome && action === 'add-item' &&
        <NewFixtures setIsHome={setIsHome} setAction={setAction} getFixtures={getFixtures} />
      }

      {
        !isHome && action === 'edit-item' &&
        <EditFixture
          setAction={setAction}
          setIsHome={setIsHome}
          getFixtures={getFixtures}
          editItem={editItem}
        />
      }

    </div>
  );
}
