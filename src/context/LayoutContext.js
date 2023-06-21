import { useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@mui/material";
import { getData } from "../components/Utils/DB";

const LayoutStateContext = createContext();

function LayoutProvider({ children }) {
  const {
    i18n: { language, dir },
  } = useTranslation();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSidebarOpened, setIsSidebarOpened] = useState(
    isSmall ? false : true
  );
  const [darkMode, setDarkMode] = useState(!!getData("darkMode"));
  return (
    <div dir={dir(language)}>
      <LayoutStateContext.Provider
        value={{ isSidebarOpened, setIsSidebarOpened, darkMode, setDarkMode }}
      >
        {children}
      </LayoutStateContext.Provider>
    </div>
  );
}

function useLayoutState() {
  const context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

export { LayoutProvider, useLayoutState };
