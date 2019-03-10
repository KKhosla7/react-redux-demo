import { createStore } from 'redux';
import TodosReducer from '../reducers/todos';

export default () => {
    const store = createStore(TodosReducer);
    store.subscribe(() => {
        console.log(store.getState());
    });
    return store;
};
