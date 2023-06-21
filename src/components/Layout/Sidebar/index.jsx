import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLayoutState } from "../../../context/LayoutContext";
import "../../../assets/style/sidebar.css";
import {
  Home as HomeIcon,
  Logout as LogoutIcon,
  AcUnit as AcUnitIcon,
  ListAlt as ListAltIcon,
  AccountBox as AccountBoxIcon,
} from "@mui/icons-material";
import LargeDrawer from "./LargeDrawer";
import SidebarLink from "./SidebarLink";
import MiniDrawer from "./MiniDrawer";

const Sidebar = () => {
  const [isOpenChild, setIsOpenChild] = useState(false);
  const { isSidebarOpened, setIsSidebarOpened } = useLayoutState();
  const theme = useTheme();
  const {
    t,
    i18n: { language, dir },
  } = useTranslation();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const anchor = dir(language) == "rtl" ? "right" : "left";
  const structure = [
    {
      id: 0,
      label: t("sidebar.dashboard"),
      link: `/app/dashboard`,
      icon: <HomeIcon />,
    },
    {
      id: 1,
      label: t("sidebar.weather"),
      link: `/app/weather`,
      icon: <AcUnitIcon />,
    },
    {
      id: 2,
      label: t("sidebar.todoList"),
      link: `/app/todo-list`,
      icon: <ListAltIcon />,
    },
    {
      id: 3,
      label: t("sidebar.profile"),
      link: `/app/profile`,
      icon: <AccountBoxIcon />,
    },
    {
      id: 4,
      label: t("sidebar.logout"),
      link: `/logout`,
      icon: <LogoutIcon />,
    },
  ];
  const ListItems = () => {
    return (
      <>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            open={isSidebarOpened}
            setOpen={setIsSidebarOpened}
            isOpenChild={isOpenChild}
            setIsOpenChild={setIsOpenChild}
            {...link}
          />
        ))}
      </>
    );
  };
  return (
    <>
      {isSmall ? (
        <MiniDrawer
          open={isSidebarOpened}
          setOpen={setIsSidebarOpened}
          anchor={anchor}
        >
          <ListItems />
        </MiniDrawer>
      ) : (
        <LargeDrawer open={isSidebarOpened} anchor={anchor}>
          <ListItems />
        </LargeDrawer>
      )}
    </>
  );
};

export default Sidebar;
