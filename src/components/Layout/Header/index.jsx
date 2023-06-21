import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowForward, Menu, Person } from "@mui/icons-material";
import { useLayoutState } from "../../../context/LayoutContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../../../assets/style/header.css";

const Header = () => {
  const { t } = useTranslation();
  const { isSidebarOpened, setIsSidebarOpened } = useLayoutState();
  const [profileMenu, setProfileMenu] = useState(false);
  return (
    <AppBar position="fixed" className="appBar">
      <Toolbar className="toolbar">
        <Box
          display="flex"
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <Box display="flex" sx={{ alignItems: "center" }}>
            <IconButton
              color="inherit"
              onClick={() => setIsSidebarOpened(!isSidebarOpened)}
              className="headerMenuButtonSandwich"
            >
              {isSidebarOpened ? <ArrowForward /> : <Menu />}
            </IconButton>
            <Typography color="common.whit" variant="h6">
              {t("header.title")}
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
