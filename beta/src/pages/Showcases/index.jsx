import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Moment from "moment";
import "./style.css";

import WorldCupFixtures from "../../helpers/WorldCupFixtures.json";
import QuickView from "./QuickView";
import { Helmet } from "react-helmet";
import ShowcaseCard from "./ShowcaseCard";

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
          <Typography component={"div"} variant={"p"}>
            {children}
          </Typography>
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
    handleModel();
  };

  const handleModel = () => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  };

  /**
   * @dev convert game dates to more readable format
   */
  React.useEffect(() => {
    var dates = [];
    var groupADates = [];
    var groupBDates = [];
    var groupCDates = [];
    var groupDDates = [];
    var groupEDates = [];
    var groupFDates = [];
    var groupGDates = [];
    var groupHDates = [];

    WorldCupFixtures.forEach((data) => {
      dates.push(Moment(data.DateUtc).format("LL"));
    });

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
  }, []);

  return (
    <div className="showcases__container">
      <Helmet>
        <title>Showcases | Playpoint</title>
      </Helmet>

      {modalOpen && <QuickView handleModalClose={setModalOpen} />}

      <h1>Showcases</h1>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={groupValue}
            onChange={handleGroupChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {groups.map((value, index) => {
              return <Tab label={value} {...a11yProps(index)} key={index} />;
            })}
          </Tabs>
        </Box>

        <TabPanel value={groupValue} index={0}>
          {gameDates.all.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="all"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={1}>
          {gameDates.groupA.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group A"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={2}>
          {gameDates?.groupB?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group B"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={3}>
          {gameDates?.groupC?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group C"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={4}>
          {gameDates?.groupD?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group D"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={5}>
          {gameDates?.groupE?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group E"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={6}>
          {gameDates?.groupF?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group F"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={7}>
          {gameDates?.groupG?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group G"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
        <TabPanel value={groupValue} index={8}>
          {gameDates?.groupH?.map((data, index) => {
            return (
              <ShowcaseCard
                handleModalOpen={handleModalOpen}
                group="Group H"
                data={data}
                key={index}
              />
            );
          })}
        </TabPanel>
      </Box>
    </div>
  );
}
