import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    fetch('http://localhost:8080/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  }, []) // run one time only when App renders

  const addTodo = text => {
    const newTodoBody = {
      id: uuidv4(),
      text: text,
      isCompleted: false
    }
    fetch('http://localhost:8080/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodoBody)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  };

  const editTodo = (id, text) => {

    const updatedToDoBody = {
      id: id,
      text: text
    }
    fetch('http://localhost:8080/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedToDoBody)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  }

  const completeTodo = (id) => {
    const completedToDoBody = {
      id: id
    }
    fetch('http://localhost:8080/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(completedToDoBody)
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  };

  const deleteTodo = id => {

    fetch('http://localhost:8080/delete/' + id)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
  };

  return (
    <>
      <Grid container direction="column"
        justify="center"
        alignItems="center">
        <Typography color="primary"><h1>Tasks to do</h1></Typography>
        <Typography color="primary"><p>Add new tasks to the input field</p></Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </Grid>
    </>
  );
}

export default App;