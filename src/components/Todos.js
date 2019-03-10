import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div>
            {
                props.todos.length > 1
                &&
                <button onClick={props.handleDeleteTodos}>
                    Remove All
                </button>
            }
            {props.todos.length === 0 && <p>Please add an Todo to get started!</p>}
            {
                props.todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        handleDeleteTodo={props.handleDeleteTodo}
                        handleToggleTodo={props.handleToggleTodo}
                    />
                ))
            }
        </div>
    );
};

export default Todos;
