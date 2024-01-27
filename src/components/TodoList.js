import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputText from "./InputText";

const TodoList = ({
  id,
  title,
  completed,
  completeTask,
  deleteTask,
  updateTask,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon onClick={() => completeTask(id)}>
              {completed ? <CheckCircleOutlinedIcon /> : <CircleOutlinedIcon />}
            </ListItemIcon>
            <ListItemText
              primary={title}
              sx={{ textDecoration: completed ? "line-through" : "none" }}
            />
            <ListItemIcon onClick={() => handleOpen()}>
              <EditIcon />
            </ListItemIcon>
            <ListItemIcon onClick={() => deleteTask(id)}>
              <DeleteIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputText
            buttonHandler={updateTask}
            inpText={title}
            inpId={id}
            buttonText="Save"
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default TodoList;
