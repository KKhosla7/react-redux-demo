import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <span
                style={{
                    textDecoration:
                        props.todo.completed ?
                            'line-through' :
                            'none'
                }}
            >
                {props.todo.todoText}
            </span>
            <button
                onClick={(e) => {
                    props.handleDeleteTodo(props.todo);
                }}
            >
                Remove
            </button>

            <button
                onClick={(e) => {
                    props.handleToggleTodo(props.todo);
                }}
            >
                {props.todo.completed ? 'Completed' : 'InComplete'}
            </button>
        </div>
    );
};

export default Todo;
