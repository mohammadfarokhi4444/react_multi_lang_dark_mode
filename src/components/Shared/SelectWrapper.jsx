import { TextField, MenuItem, styled } from "@mui/material";

const TextFieldCustom = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    // backgroundColor: theme.palette.primary.main,
    borderRadius: "20px !important",
    color: "text.primary !important",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px !important",
    height: "56px",
  },
  // "& .MuiOutlinedInput-notchedOutline": {
  //   border: 0,
  // },
}));
const SelectWrapper = ({
  name,
  options,
  fieldValue,
  setFieldValue,
  isEn,
  ...otherProps
}) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue({
      ...fieldValue,
      [name]: options.filter((el) => el.id == value)[0],
    });
  };
  const configTextField = {
    name,
    value: fieldValue[name]?.id || "",
    select: true,
    variant: "outlined",
    onChange: handleChange,
    ...otherProps,
  };

  return (
    <TextFieldCustom
      {...configTextField}
      sx={{
        width: {md:"50%",xs:"80%" },
        m: "10px 0px",
        borderRadius: "10px !important",
      }}
    >
      {options.map((el) => (
        <MenuItem
          key={el.id}
          value={el.id}
          sx={{ fontSize: "16px", fontWeight: "600" }}
        >
          {isEn ? el.slug : el.title}
        </MenuItem>
      ))}
    </TextFieldCustom>
  );
};

export default SelectWrapper;
