import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ id, title, deteteTask, editTask }) => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={title} />
          <ListItemIcon onClick={() => deteteTask(id)}>
            <DeleteIcon />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default TodoList;
