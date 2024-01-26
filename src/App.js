import "./App.css";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputText from "./components/InputText";

function App() {
  const [tasks, setTasks] = useState(["eat", "code", "sleep"]);

  const addTask = (inputText) => {
    setTasks((prevItems) => {
      return [...prevItems, inputText];
    });
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h1" gutterBottom>
          Tasks
        </Typography>

        <InputText addTask={addTask} />

        {tasks.map((task) => {
          return (
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={task} />
                  <ListItemIcon onClick={() => alert("h")}>
                    <DeleteIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
