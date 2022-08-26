import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Moment from "moment";
import Button from "@mui/material/Button";
import "./style.css";

import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import CountryFlags from "../../helpers/CountryFlags.json";
import QuickView from "./QuickView";
import { Helmet } from "react-helmet";

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
<<<<<<< HEAD
          <Typography>{children}</Typography>
=======
          <Typography component={"div"} variant={"p"}>{children}</Typography>
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
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
<<<<<<< HEAD
  const [gameDates, setGameDates] = React.useState([]);
=======
  const [gameDates, setGameDates] = React.useState({
    all: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    groupE: [],
    groupF: [],
    groupG: [],
    groupH: [],
  });
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41

  const handleGroupChange = (event, newValue) => {
    setGroupValue(newValue);
  };

  /**
   * @dev states for quick view modal
   */
  // eslint-disable-next-line
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = (data) => {
    localStorage.setItem("quickViewItem", JSON.stringify(data));
    setModalOpen(true);
  };

  /**
   * @dev convert game dates to more readable format
   */
  React.useEffect(() => {
    var dates = [];
<<<<<<< HEAD
=======
    var groupADates = [];
    var groupBDates = [];
    var groupCDates = [];
    var groupDDates = [];
    var groupEDates = [];
    var groupFDates = [];
    var groupGDates = [];
    var groupHDates = [];
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41

    WorldCupFixtures.forEach((data) => {
      dates.push(Moment(data.DateUtc).format("LL"));
    });

<<<<<<< HEAD
    const uniqueDates = [...new Set(dates)];
    setGameDates(uniqueDates);
=======
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group A")
        groupADates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group B")
        groupBDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group C")
        groupCDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group D")
        groupDDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group E")
        groupEDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group F")
        groupFDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group G")
        groupGDates.push(Moment(data.DateUtc).format("LL"));
    });
    WorldCupFixtures.forEach((data) => {
      if (data.Group === "Group H")
        groupHDates.push(Moment(data.DateUtc).format("LL"));
    });

    setGameDates({
      all: [...new Set(dates)],
      groupA: [...new Set(groupADates)],
      groupB: [...new Set(groupBDates)],
      groupC: [...new Set(groupCDates)],
      groupD: [...new Set(groupDDates)],
      groupE: [...new Set(groupEDates)],
      groupF: [...new Set(groupFDates)],
      groupG: [...new Set(groupGDates)],
      groupH: [...new Set(groupHDates)],
    });
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
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
      <Helmet>
        <title>Showcases | Playpoint</title>
      </Helmet>
      {modalOpen && <QuickView handleModalClose={setModalOpen} />}
      <h1>Showcases</h1>
<<<<<<< HEAD

      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoI1jUI6TmNhKEDpDBzwkh2dtMJrxxzcZxw&usqp=CAU" alt="" /> */}
      {/* <h3>Prepared for Fifa WorldCup 2022</h3> */}
      {/* <div>Fixtures Per Groups</div> */}
=======
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={groupValue}
            onChange={handleGroupChange}
<<<<<<< HEAD
            aria-label="basic tabs example"
=======
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
          >
            {groups.map((value, index) => {
              return <Tab label={value} {...a11yProps(index)} key={index} />;
            })}
          </Tabs>
        </Box>

        <TabPanel value={groupValue} index={0}>
<<<<<<< HEAD
          {gameDates.map((data, index) => {
            // console.log(data)
            return (
              <div className="gameDetails" key={index}>
                <h3>
                  <i className="ri-calendar-line"></i> {data}
                </h3>

                {getGamesByDate(data).map((data, index) => {
                  // console.log(data)
                  return (
                    <div className="gameDetails__item" key={index}>
                      <div className="gameDetails__teamDetails">
                        <div className="teamName">{data.HomeTeam}</div>
                        {CountryFlags.map((country, i) => {
                          return (
                            country.name === data.HomeTeam && (
                              <img
                                src={country.image}
                                alt={country.name}
                                key={i}
                                loading="lazy"
                              />
                            )
                          );
                        })}
                        <div className="gameTime">
                          {data.DateUtc.split(" ")[1].split(":")[0] +
                            ":" +
                            data.DateUtc.split(" ")[1].split(":")[1]}
                        </div>
                        {CountryFlags.map((country, i) => {
                          return (
                            country.name === data.AwayTeam && (
                              <img
                                src={country.image}
                                alt={country.name}
                                key={i}
                                loading="lazy"
                              />
                            )
                          );
                        })}
                        <div className="teamName">{data.AwayTeam}</div>
                      </div>
=======
          {gameDates.all.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  return (
                    <div className="gameDetails__item" key={index}>
                      {window.innerWidth > 576 ? (
                        <div className="gameDetails__teamDetails">
                          <div className="teamName">{data.HomeTeam}</div>
                          {CountryFlags.map((country, i) => {
                            return (
                              country.name === data.HomeTeam && (
                                <img
                                  src={country.image}
                                  alt={country.name}
                                  key={i}
                                  loading="lazy"
                                />
                              )
                            );
                          })}
                          <div className="gameTime">
                            {data.DateUtc.split(" ")[1].split(":")[0] +
                              ":" +
                              data.DateUtc.split(" ")[1].split(":")[1]}
                          </div>
                          {CountryFlags.map((country, i) => {
                            return (
                              country.name === data.AwayTeam && (
                                <img
                                  src={country.image}
                                  alt={country.name}
                                  key={i}
                                  loading="lazy"
                                />
                              )
                            );
                          })}
                          <div className="teamName">{data.AwayTeam}</div>
                        </div>
                      ) : (
                        <Button className="gameDetails__teamDetails">
                          <div className="teamName">{data.HomeTeam}</div>
                          {CountryFlags.map((country, i) => {
                            return (
                              country.name === data.HomeTeam && (
                                <img
                                  src={country.image}
                                  alt={country.name}
                                  key={i}
                                  loading="lazy"
                                />
                              )
                            );
                          })}
                          <div className="gameTime">
                            {data.DateUtc.split(" ")[1].split(":")[0] +
                              ":" +
                              data.DateUtc.split(" ")[1].split(":")[1]}
                          </div>
                          {CountryFlags.map((country, i) => {
                            return (
                              country.name === data.AwayTeam && (
                                <img
                                  src={country.image}
                                  alt={country.name}
                                  key={i}
                                  loading="lazy"
                                />
                              )
                            );
                          })}
                          <div className="teamName">{data.AwayTeam}</div>
                        </Button>
                      )}
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41

                      <div className="gameDetails__location">
                        <i className="ri-map-pin-2-line"></i> {data.Location}
                      </div>

                      <div className="gameDetails__action">
                        <Button
                          className="quickView"
                          onClick={() => handleModalOpen(data)}
                        >
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
<<<<<<< HEAD
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
=======
          {gameDates.groupA.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group A")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={2}>
          {gameDates?.groupB?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group B")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={3}>
          {gameDates?.groupC?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group C")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={4}>
          {gameDates?.groupD?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group D")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={5}>
          {gameDates?.groupE?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group E")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={6}>
          {gameDates?.groupF?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group F")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={7}>
          {gameDates?.groupG?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group G")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
        <TabPanel value={groupValue} index={8}>
          {gameDates?.groupH?.map((data, index) => {
            return (
              <div className="gameDetails" key={index}>
                <Typography component={"span"} variant={"h3"}>
                  <i className="ri-calendar-line"></i> {data}
                </Typography>

                {getGamesByDate(data).map((data, index) => {
                  if (data.Group === "Group H")
                    return (
                      <div className="gameDetails__item" key={index}>
                        {window.innerWidth > 576 ? (
                          <div className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </div>
                        ) : (
                          <Button className="gameDetails__teamDetails">
                            <div className="teamName">{data.HomeTeam}</div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.HomeTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="gameTime">
                              {data.DateUtc.split(" ")[1].split(":")[0] +
                                ":" +
                                data.DateUtc.split(" ")[1].split(":")[1]}
                            </div>
                            {CountryFlags.map((country, i) => {
                              return (
                                country.name === data.AwayTeam && (
                                  <img
                                    src={country.image}
                                    alt={country.name}
                                    key={i}
                                    loading="lazy"
                                  />
                                )
                              );
                            })}
                            <div className="teamName">{data.AwayTeam}</div>
                          </Button>
                        )}

                        <div className="gameDetails__location">
                          <i className="ri-map-pin-2-line"></i> {data.Location}
                        </div>

                        <div className="gameDetails__action">
                          <Button
                            className="quickView"
                            onClick={() => handleModalOpen(data)}
                          >
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
>>>>>>> 6bdf6ce1fbc4d0b40d3f0d58e925424bb5d54c41
        </TabPanel>
      </Box>
    </div>
  );
}
