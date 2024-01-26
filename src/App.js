import "./App.css";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputText from "./components/InputText";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: crypto.randomUUID(), title: "eat", completed: false },
    { id: crypto.randomUUID(), title: "code", completed: false },
    { id: crypto.randomUUID(), title: "sleep", completed: false },
  ]);

  const addTask = (inputText) => {
    setTasks((prevItems) => {
      return [
        ...prevItems,
        { id: crypto.randomUUID(), title: inputText, completed: false },
      ];
    });
  };

  const deteteTask = (id) => {
    setTasks((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
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
            <TodoList
              key={task.id}
              id={task.id}
              title={task.title}
              deteteTask={deteteTask}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
