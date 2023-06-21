import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import MediumText from "../Shared/MediumText";
import { useUserState } from "../../context/UserContext";

const Dashboard = () => {
  // const fullname = localStorage.getItem("fullName");
  const { fullName } = useUserState();
  const theme = useTheme();
  const { t } = useTranslation();
  const getTimeAndGreetMsg = () => {
    {
      let greetMsg = "";
      const nowDate = new Date();
      const hour = nowDate.getHours();
      const min = nowDate.getMinutes();
      switch (true) {
        case hour < 12:
          greetMsg = t("dashboard.goodMorning");
        case hour >= 12 && hour <= 17:
          greetMsg = t("dashboard.goodAfternoon");
        case hour > 17 && hour <= 24:
          greetMsg = t("dashboard.goodEvning");
      }
      return {
        time: `${hour.toString().padStart(2, "0")} : ${min
          .toString()
          .padStart(2, "0")}`,
        greetMsg,
      };
    }
  };
  const { time, greetMsg } = getTimeAndGreetMsg();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // bgcolor="tomato"
      width="100%"
      height="70vh"
    >
      <MediumText text={time} sx={{ direction: "ltr" }} />
      <MediumText text={`${greetMsg} ${fullName}`} />
    </Box>
  );
};

export default Dashboard;
