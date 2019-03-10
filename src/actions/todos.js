export const addTodo = ({ todo }) => ({
    type: 'ADD_TODO',
    todo: todo
});

export const toggleTodo = ({ todo }) => ({
    type: 'TOGGLE_TODO',
    todo: todo
});

export const removeTodo = ({ todo }) => ({
    type: 'REMOVE_TODO',
    todo: todo
});

export const removeAllTodo = () => ({
    type: 'REMOVE_ALL_TODO'
});
