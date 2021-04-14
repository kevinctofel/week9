import {useState} from 'react';

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
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={handleChange}
                />
                <button>Add Todo</button>
            </form>
            <div className="error">{errorMessage}</div>
        </>
    )
}

export default TodoForm;