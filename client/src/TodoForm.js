import {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import 'fontsource-roboto';

function TodoForm({addTodo}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // make sure input has a value
        if (value === "") {
            setErrorMessage("todo is empty");
            return;
        } else {
            // using function (addTodo) passed as a prop
            addTodo(value);
            // after adding clear input value
            setValue("");
        }
    }

    const handleChange = (evt) => {
        if (errorMessage) setErrorMessage("");
        setValue(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    type="text"
                    className="input"
                    value={value}
                    onChange={handleChange}
                />
                <button variant="contained" color="primary">Add Todo</button>
            </form>
            <div className="error">{errorMessage}</div>
        </>
    )
}

export default TodoForm;