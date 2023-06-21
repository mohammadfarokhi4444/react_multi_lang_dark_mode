import { Typography } from "@mui/material";

const MediumText = ({ text, sx = {} }) => {
  return (
    <Typography color="common.whit" variant="h3" sx={{ mt: "30px", ...sx }}>
      {text}
    </Typography>
  );
};
export default MediumText;
