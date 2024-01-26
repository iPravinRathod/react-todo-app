import "./App.css";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
    const [tasks, setTasks] = useState(["eat", "code", "sleep", "pee"]);
    const [inputText, setInputText] = useState("");

    const addTask = () => {
        setTasks((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    };
    return (
        <div className="App">
            <Container maxWidth="sm">
                <h1>hello</h1>
                <Box sx={{ height: "10vh" }}>
                    <TextField
                        size="small"
                        label="Enter Task"
                        value={inputText}
                        onChange={(event) => {
                            setInputText(event.target.value);
                        }}
                    />
                    <Button variant="contained" onClick={addTask}>
                        Add
                    </Button>
                </Box>

                {tasks.map((task) => {
                    return (
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={task} />
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
