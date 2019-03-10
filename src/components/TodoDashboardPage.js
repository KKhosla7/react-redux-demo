import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { addTodo, toggleTodo, removeTodo, removeAllTodo } from '../actions/todos';

class TodoDashboardPage extends Component {
    handleDeleteTodos = () => {
        this.props.dispatch(removeAllTodo());
    }

    handleDeleteTodo = (todoToRemove) => {
        this.props.dispatch(removeTodo({ todo: todoToRemove }));
    }

    handleToggleTodo = (todoToToggle) => {
        this.props.dispatch(toggleTodo({ todo: todoToToggle }));
    }

    handleAddTodo = (todo) => {
        if (!todo) {
            return 'Enter valid value for add todo';
        }

        this.props.dispatch(addTodo({ todo }));
    }

    render() {
        return (
            <div>
                <Todos
                    todos={this.props.todos}
                    handleDeleteTodos={this.handleDeleteTodos}
                    handleDeleteTodo={this.handleDeleteTodo}
                    handleToggleTodo={this.handleToggleTodo}
                />
                <AddTodo
                    handleAddTodo={this.handleAddTodo}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(TodoDashboardPage);
