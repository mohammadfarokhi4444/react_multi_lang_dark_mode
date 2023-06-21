import { Alert, AlertTitle, Snackbar } from "@mui/material";

const ShowSnackbar = ({ snackData, setSnackData }) => {
  const closeAlert = (event, reason) => {
    if (reason == "clickaway") return;
    setSnackData(null);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={!!snackData}
      autoHideDuration={3000}
      onClose={closeAlert}
    >
      {snackData && (
        <Alert
          severity={snackData.type || "error"}
          onClose={closeAlert}
          variant="filled"
        >
          <AlertTitle>{snackData.type}</AlertTitle>
          {snackData.des}
        </Alert>
      )}
    </Snackbar>
  );
};
export default ShowSnackbar;
