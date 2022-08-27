import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

export default function Navbar() {
  /**
   * @dev Auth0 Provider utils
   */
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  /**
   * @dev navbar small drawer utils
   */
  const [state, setState] = React.useState({
    right: false,
  });
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-bar-chart-grouped-line"></i>
            <ListItemText primary="Leaderboards" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-message-3-line"></i>
            <ListItemText primary="Chats" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-football-line"></i>
            <ListItemText primary="Leagues" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-notification-4-line"></i>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <i className="ri-fingerprint-line"></i>
            <ListItemText primary="Login / Register" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <div className="navbar__container">
      <div onClick={() => navigate("/")} className="logo__container">
        <img src="https://ik.imagekit.io/lexworld/Logo.png" alt="" />
        <h3>Playpoint</h3>

        <div className="navLinks">
          <Link to="/">Leaderbords</Link>
          <Link to="/chats">Chats</Link>
          <Link to="/leagues">Leagues</Link>
        </div>
      </div>
      <div className="navbar__authentication">
        <Button className="notificationBtn">
          <i className="ri-notification-2-line"></i>Notifications
        </Button>
        {!isAuthenticated && (
          <Button onClick={() => loginWithRedirect()}>
            <i className="ri-fingerprint-line"></i> Login / Register
          </Button>
        )}
        {isAuthenticated && (
          <>
            <Button>
              <i className="ri-user-line"></i> {user.name}
            </Button>
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <i className="ri-logout-box-line"></i> Logout
            </Button>
          </>
        )}
      </div>
      {window.innerWidth < 576 && (
        <div className="drawer">
          <div onClick={toggleDrawer("right", true)}>
            <i className="ri-menu-3-line"></i>
          </div>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </div>
      )}
    </div>
  );
}