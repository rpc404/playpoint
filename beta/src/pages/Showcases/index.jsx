import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Moment from "moment";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./style.css";

import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import CountryFlags from "../../helpers/CountryFlags.json";

/**
 * @dev styles for quick view modal
 */
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

/**
 *
 * @dev utils for tabs
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Showcases() {
  /**
   * @dev states for the tab panel
   */
  const [groupValue, setGroupValue] = React.useState(0);
  const groups = [
    "all",
    "group a",
    "group b",
    "group c",
    "group d",
    "group e",
    "group f",
    "group g",
    "group h",
  ];
  const [gameDates, setGameDates] = React.useState([]);

  const handleGroupChange = (event, newValue) => {
    setGroupValue(newValue);
  };

  /**
   * @dev states for quick view modal
   */
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  /**
   * @dev convert game dates to more readable format
   */
  React.useEffect(() => {
    var dates = [];

    WorldCupFixtures.forEach((data) => {
      dates.push(Moment(data.DateUtc).format("LL"));
    });

    const uniqueDates = [...new Set(dates)];
    setGameDates(uniqueDates);
  }, []);

  /**
   * @dev only list games according to dates
   */
  const getGamesByDate = (date) => {
    var games = [];

    WorldCupFixtures.forEach((data) => {
      if (Moment(data.DateUtc).format("LL") === date) {
        games.push(data);
      }
    });

    return games;
  };

  return (
    <div className="showcases__container">
      <h1>Showcases</h1>

      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoI1jUI6TmNhKEDpDBzwkh2dtMJrxxzcZxw&usqp=CAU" alt="" /> */}
      {/* <h3>Prepared for Fifa WorldCup 2022</h3> */}
      {/* <div>Fixtures Per Groups</div> */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={groupValue}
            onChange={handleGroupChange}
            aria-label="basic tabs example"
          >
            {groups.map((value, index) => {
              return <Tab label={value} {...a11yProps(index)} key={index} />;
            })}
          </Tabs>
        </Box>

        <TabPanel value={groupValue} index={0}>
          {gameDates.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <h3>
                  <i className="ri-calendar-line"></i> {data}
                </h3>

                {getGamesByDate(data).map((data, index) => {
                  return (
                    <div className="gameDetails__item" key={index}>
                      <div className="gameDetails__teamDetails">
                        <div className="teamName">{data.HomeTeam}</div>
                        <div>
                          {CountryFlags.map((country, index) => {
                            return (
                              <img
                                src={
                                  data.HomeTeam === country.name &&
                                  country.image
                                }
                              />
                            );
                          })}
                        </div>
                        <div className="gameTime">
                          {data.DateUtc.split(" ")[1].split(":")[0] +
                            ":" +
                            data.DateUtc.split(" ")[1].split(":")[1]}
                        </div>
                        <div className="teamName">{data.AwayTeam}</div>
                      </div>

                      <div className="gameDetails__location">
                        <i className="ri-map-pin-2-line"></i> {data.Location}
                      </div>

                      <div className="gameDetails__action">
                        <Modal
                          open={modalOpen}
                          onClose={handleModalClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Text in a modal
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Duis mollis, est non commodo luctus, nisi erat
                              porttitor ligula.
                            </Typography>
                          </Box>
                        </Modal>
                        <Button className="quickView" onClick={handleModalOpen}>
                          Quick View
                        </Button>
                        <Button>
                          <i className="ri-arrow-right-line"></i>
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={1}>
          Group A
        </TabPanel>
        <TabPanel value={groupValue} index={2}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={3}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={4}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={5}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={6}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={7}>
          hello
        </TabPanel>
        <TabPanel value={groupValue} index={8}>
          hello
        </TabPanel>
      </Box>
    </div>
  );
}
