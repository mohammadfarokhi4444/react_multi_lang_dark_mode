import {
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { signOut, useUserDispatch } from "../../../context/UserContext";

const SidebarLink = ({ label, link, icon, open, setOpen, nested }) => {
  const theme = useTheme();
  const userDispatch = useUserDispatch();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const isActiveItem =
    window.location.pathname === link ||
    window.location.pathname.indexOf(link) !== -1;

  const navigate = useNavigate();

  const handleClick = () => {
    if (link === "/logout") {
      return signOut(userDispatch, navigate);
    }
    navigate(link);
    if (isSmall) setOpen(false);
  };

  return (
    <Fragment>
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              // px: 2.5,
              alignItems: "center",
            }}
            onClick={() => handleClick()}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                margin: nested ? "0px 20px" : "0px 8px",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={label}
              sx={{
                textAlign: "start",
                opacity: open ? 1 : 0,
                color: isActiveItem ? "primary.main" : "common.black",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Fragment>
  );
};

export default SidebarLink;
