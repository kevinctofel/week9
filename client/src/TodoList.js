import Todo from './Todo';
import './todolist.css';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

function TodoList({todos, completeTodo, deleteTodo, editTodo}) {

    const listTodos = todos.map((todo) => {
            return <Todo 
                        key = {todo.id} 
                        todo={todo}
                        completeTodo = {completeTodo} 
                        deleteTodo = {deleteTodo} 
                        editTodo = {editTodo} 
                    />
            });

    return (
        <>
           <Typography variant='body2'><ul>{listTodos}</ul></Typography>
        </>
    )

}

export default TodoList;