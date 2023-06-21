import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        height: "50vh",
        width: {md:"50%",xs:"90%"},
        mt: "25vh",
        borderRadius: "40px",
      }}
    >
      <Box display="grid" alignItems="center" alignContent="center" justifyContent="center" height="100%">
        <Typography
          variant="h1"
          component="span"
          color="common.white"
          textAlign="center"
          mb="50px"
        >
          {t("notFound.404")}
        </Typography>
        <Typography
          typography={{sm:"h2", xs:"h3"}}
          component="span"
          color="common.white"
          textAlign="center"
        >
          {t("notFound.notFound")}
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
