import uuid from 'uuid';

const todosReducerDefaultState = {
    todos: []
};

const TodosReducer = (state = todosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    {
                        id: uuid.v4(),
                        todoText: action.todo,
                        completed: false
                    }
                ]
            };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => action.todo.id === todo.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo)
            };
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter((todo) => action.todo.id !== todo.id)
            };
        case 'REMOVE_ALL_TODO':
            return {
                todos: []
            };
        default:
            return state;
    }
}

export default TodosReducer;
