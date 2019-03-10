import React from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import { bindActionCreators } from 'redux';
import * as TodoActionCreators from '../actions/todos';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

const TodoAgGridPage = (props) => (
    <div className="ag-theme-balham-dark" style={{
        height: '500px',
        width: '600px'
    }}>
        {props.todos.length === 0 && <p>Please add an Todo to get started!</p>}
        {/* {props.todos.map((todo) => {
            return <div key={todo.id}>{todo.todoText}</div>;
        })} */}

        <AgGridReact
            columnDefs={columnDefs}
            rowData={props.todos}
        >
        </AgGridReact>
    </div>
);

const columnDefs = [
    { headerName: 'id', field: 'id' },
    { headerName: 'Todo', field: 'todoText', editable: true },
    {
        headerName: 'Status',
        field: 'completed',
        editable: true,
        cellEditor: "agSelectCellEditor",
        cellEditorParams: {
            values: ["false", "true"]
        }
    }
];

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ ...TodoActionCreators }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAgGridPage);
