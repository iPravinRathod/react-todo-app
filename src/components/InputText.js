import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const InputText = ({
  buttonHandler,
  buttonText,
  inpText,
  inpId,
  handleClose,
}) => {
  const [inputText, setInputText] = useState(inpText);

  return (
    <Box
      sx={{
        height: "10vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            size="small"
            fullWidth
            label="Enter Task"
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            onClick={() => buttonHandler(inpId, inputText, handleClose)}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputText;
