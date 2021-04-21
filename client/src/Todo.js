import {useState} from "react";
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

function Todo({ todo, completeTodo, deleteTodo, editTodo }) {

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [text, setText] = useState(todo.text);

    /*
      - Todo contains local state:
           - edit (true or false): trigger rendering other elements
           - text (string): todo text that will change if user decides to update todo text
      - We need to conditionally render different elements:
           - <span>todo text</span> with two buttons (delete and edit) 
           OR
           - <input value = text (from state)> and two buttons (update and cancel)
    */

    const toggleEdit = () => {
        setEdit(!edit);
        // reset input text and error state, if cancelling edit
        setText(todo.text)
        setError(false)    
    };
    
    const handleEdit = (evt) => {
        (evt.target.value === "") ? setError(true) : setError(false)        
        setText(evt.target.value);
    };
    
    const handleUpdate = (id, text) => {
        editTodo(id, text);
        toggleEdit();
    };
    
      /*
      We need to conditionally render elements depending on user clicking the "edit" button or not
      When user clicks "edit":
          - triggers a change in state (edit) and will re-render the <Todo>
          - edit (state) will be true and will render the elements defined in the falsy (:) expression
      When component first renders:
          - edit (state) is false by default and renders the todo text in a <span>
      When user clicks "update":
          - triggers the handleUpdate function that executes the passed down function
          - toggles edit state adn sets state of local input        
     */
   
    return (
        <li>
             <input type="checkbox" checked = { todo.isCompleted } onChange={() => completeTodo(todo.id)} />
             
              {/* ternary ? if truthy, renders text wrapped in <span> : if falsy, renders input field to edit */}
             
              {!edit ? (
                  <>
                      <span style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}> {todo.text} </span>
                      <Button variant="contained" color="secondary" size='small' startIcon={<DeleteIcon />} onClick ={() => deleteTodo(todo.id)}>Delete</Button>
                      <Button variant="contained" color="primary" size='small' onClick={() => toggleEdit()} disabled={todo.isCompleted}>Edit</Button>
                  </>   
              ) : (
                  <>
                      <input type="text" value={text}  onChange={handleEdit} />
                      <Button variant="contained" color="primary" size='small' startIcon={<SaveIcon />} disabled = {error} onClick={() => handleUpdate(todo.id, text)}>Update</Button>
                      <Button variant="contained" color="secondary" size='small' onClick={() => toggleEdit()}> Cancel </Button>
                 </>
              )} 
        </li>
    );
}

export default Todo;