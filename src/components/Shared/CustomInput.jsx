import { TextField, styled } from "@mui/material";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";

const CustomInput = ({ name, handleKeyDown, ...otherProps }) => {
  const isMd = useResponsive("down", "md");
  const TextFieldCustom = styled(TextField)(({ theme }) => ({
    width: isMd ? "80% !important" : "50% !important",
    margin: "15px 0px",
    "& input": {
      "&:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0px 1000px ${theme.palette.background.default} inset !important`,
      },
    },
    "& .MuiInput-root:before": {
      borderBottom: `solid ${theme.palette.primary.main} 1px `,
    },
    "& input::placeholder": {
      [theme.breakpoints.down("md")]: {
        fontSize: "13px",
      },
      fontSize: "16px",
      paddingBottom: "5px",
    },
  }));

  const onKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value && handleKeyDown) {
      handleKeyDown(event.target.value);
    }
  };

  const configTextField = {
    variant: "outlined",
    label: name,
    onKeyDown: onKeyDown,
    ...otherProps,
  };

  return (
    <TextFieldCustom
      InputProps={{
        style: {
          borderRadius: "10px",
        },
      }}
      {...configTextField}
    />
  );
};

export default CustomInput;
