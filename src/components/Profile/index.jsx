import { useTranslation } from "react-i18next";
import { useUserState } from "../../context/UserContext";
import CustomInput from "../Shared/CustomInput";
import SmallText from "../Shared/SmallText";
import { Box, Button } from "@mui/material";
import SelectWrapper from "../Shared/SelectWrapper";
import { useState } from "react";
import { storeData } from "../Utils/DB";
import { useLayoutState } from "../../context/LayoutContext";

const Profile = () => {
  const { t, i18n } = useTranslation();
  const { userName } = useUserState();
  const { darkMode, setDarkMode } = useLayoutState();
  const mode = darkMode ? "dark" : "light";
  const lang = i18n.language;
  const [fieldValue, setFieldValue] = useState({
    theme: {
      id: mode,
      title: t(`profile${mode}`),
    },
    lang: {
      id: lang,
      title: t(`profile${lang}`),
    },
  });

  const themeList = [
    {
      id: "light",
      title: t("profile.light"),
    },
    {
      id: "dark",
      title: t("profile.dark"),
    },
  ];
  const langList = [
    {
      id: "en",
      title: t("profile.en"),
    },
    {
      id: "fa",
      title: t("profile.fa"),
    },
  ];
  const handleUpdate = () => {
    if (fieldValue.theme.id !== mode) {
      storeData("darkMode", !darkMode);
      setDarkMode(!darkMode);
    }
    if (fieldValue.lang.id !== lang) {
      storeData("lang", fieldValue.lang.id);
      i18n.changeLanguage(fieldValue.lang.id, () => {});
    }
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <SmallText text={t("profile.userName")} sx={{ minWidth: "100px" }} />
        <CustomInput name="" value={userName} />
      </Box>
      <Box display="flex" alignItems="center">
        <SmallText text={t("profile.theme")} sx={{ minWidth: "100px" }} />
        <SelectWrapper
          name="theme"
          options={themeList}
          fieldValue={fieldValue}
          setFieldValue={setFieldValue}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <SmallText text={t("profile.lang")} sx={{ minWidth: "100px" }} />
        <SelectWrapper
          name="lang"
          options={langList}
          fieldValue={fieldValue}
          setFieldValue={setFieldValue}
        />
      </Box>
      <Box width="100%" display="flex" justifyContent="center" mt="50px">
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{
            color: "text.secondary",
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          {t("profile.saveChange")}
        </Button>
      </Box>
    </>
  );
};

export default Profile;
