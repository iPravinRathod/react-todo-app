import "./App.css";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import InputText from "./components/InputText";
import TodoList from "./components/TodoList";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Stack from "@mui/material/Stack";

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

  const deleteAllTask = () => {
    setTasks([]);
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

  const completeAllTask = () => {
    setTasks((prevItems) => {
      const updatedList = prevItems.map((e) => {
        e.completed = true;
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
        {tasks.length > 0 && (
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              variant="outlined"
              startIcon={<DoneAllIcon />}
              onClick={completeAllTask}
            >
              Complete All
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteAllTask}
            >
              Delete All
            </Button>
          </Stack>
        )}

        {tasks.map((task) => {
          if (task.completed === false) {
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
          } else {
            // Return a placeholder or null for tasks that are not completed
            return null;
          }
        })}

        <Typography variant="h5" textAlign={"left"} gutterBottom>
          Completed
        </Typography>

        {tasks.map((task) => {
          if (task.completed === true) {
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
          } else {
            // Return a placeholder or null for tasks that are not completed
            return null;
          }
        })}
      </Container>
    </div>
  );
}

export default App;
