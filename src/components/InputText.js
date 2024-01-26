import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const InputText = ({ addTask }) => {
  const [inputText, setInputText] = useState("");

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
      <Button variant="contained" onClick={() => addTask(inputText)}>
        Add
      </Button>
    </Box>
  );
};

export default InputText;
