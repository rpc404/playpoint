import React from "react";
import Button from "@mui/material/Button";
import "./styles/style.css";
import Home from "./components/Home";
import Marketplaces from "./components/Marketplaces";
import Questionaires from "./components/Questionaires";
import Results from "./components/Results";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Fixtures from "./components/Fixtures";
import SidebarItems from "./utils/Sidebar.json";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("home");

  const handleActiveTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="dashboard__container">
      <div className="dashboardSidebar">
        <div className="title">
          <img
            src="https://ik.imagekit.io/lexworld/Logo.png"
            alt=""
            loading="lazy"
          />
          <h3>Playpoint</h3>
        </div>

        <div className="sidebarMenuItems__container">
          {SidebarItems.map((data, index) => {
            const { name, icon, tabName } = data;
            return (
              <Button
                key={index}
                onClick={() => handleActiveTabChange(tabName)}
                className={activeTab === tabName ? "active" : ""}
              >
                <i className={icon}></i> {name}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="dashboardMain">
        <div className="dashboardMain__topbar">
          <Button>
            <img
              src="https://images.unsplash.com/photo-1662952208192-228dc2ffd410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              loading="lazy"
            />
            <p>Domsan Lex</p>
          </Button>
          <Button>
            <i className="ri-logout-box-line"></i> Logout
          </Button>
        </div>
        <div className="scrollable__container">
          {activeTab === "home" ? (
            <Home />
          ) : activeTab === "profile" ? (
            <Profile />
          ) : activeTab === "marketplaces" ? (
            <Marketplaces />
          ) : activeTab === "fixtures" ? (
            <Fixtures />
          ) : activeTab === "questionaires" ? (
            <Questionaires />
          ) : activeTab === "results" ? (
            <Results />
          ) : (
            <Settings />
          )}
        </div>
      </div>
    </div>
  );
}
