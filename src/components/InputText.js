import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const InputText = ({
  buttonHandler,
  buttonText,
  inpText,
  inpId,
  handleClose,
}) => {
  const [inputText, setInputText] = useState(inpText);

  return (
    <Box sx={{ height: "10vh", width: "sm" }}>
      <TextField
        size="small"
        label="Enter Task"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => buttonHandler(inpId, inputText, handleClose)}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default InputText;
