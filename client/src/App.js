import {useState, useEffect} from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

import { v4 as uuidv4 } from 'uuid';


function App() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {

    fetch('http://localhost:8080/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error))
   },[]) // run one time only when App renders

  const addTodo = text => {
    const newTodos = [
         ...todos,
         { 
           id: uuidv4(),
           text: text,
           isCompleted: false
          }
    ];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const temporaryTodos = [...todos]; 
    const index = temporaryTodos.findIndex(todo => todo.id === id);
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted; 
    setTodos(temporaryTodos);
  };

  const deleteTodo = id => {
    const temporaryTodos = [...todos]; 
    const newTodos = temporaryTodos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id, text) => {
    const temporaryTodos = [...todos];
    const index =- temporaryTodos.findIndex(todo => todo.id === id);
    temporaryTodos[index].text = text;
    setTodos(temporaryTodos);
  }

  return (
    <>
      <h2>Todo App</h2>
      <h4>Add new todos via the input field:</h4>
      <TodoForm addTodo = {addTodo} />
      <TodoList 
             todos = {todos} 
             completeTodo={completeTodo}
             deleteTodo = {deleteTodo} 
             editTodo = {editTodo}
      />
    </>
  );
}

export default App;