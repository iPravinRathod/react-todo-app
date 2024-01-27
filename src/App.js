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

  const addTask = (id, inputText, handleClose) => {
    inputText.trim() &&
      setTasks((prevItems) => {
        return [
          ...prevItems,
          { id: crypto.randomUUID(), title: inputText, completed: false },
        ];
      });
  };

  const deleteTask = (id) => {
    setTasks((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const updateTask = (id, text, handleClose) => {
    setTasks((prevItems) => {
      const updatedList = prevItems.map((e) => {
        if (e.id === id) {
          e.title = text;
        }
        return e;
      });
      return updatedList;
    });
    handleClose();
  };

  const completeTask = (id) => {
    setTasks((prevItems) => {
      const updatedList = prevItems.map((e) => {
        if (e.id === id) {
          e.completed = !e.completed;
        }
        return e;
      });
      return updatedList;
    });
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h1" gutterBottom>
          Tasks
        </Typography>

        <InputText buttonHandler={addTask} buttonText="Add" inpText="" />

        {tasks.map((task) => {
          return (
            <TodoList
              key={task.id}
              id={task.id}
              title={task.title}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
              updateTask={updateTask}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default App;
