import { Box, CircularProgress } from "@mui/material";

const CustomCircle = () => {
  return (
    <Box
      width="100%"
      height="70vh"
      display="grid"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress
        color="primary"
        size={50}
        sx={{ alignSelf: "center" }}
      />
    </Box>
  );
};
export default CustomCircle;
