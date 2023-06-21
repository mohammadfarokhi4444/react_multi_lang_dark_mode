import { Box, CircularProgress, Typography } from "@mui/material";

const SmallText = ({ text, sx }) => {
  return (
    <Typography color="common.whit" variant="h5" sx={{...sx}} >
      {text}
    </Typography>
  );
};
export default SmallText;
