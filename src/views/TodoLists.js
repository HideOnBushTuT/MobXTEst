import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.createOneTodo = this.createOneTodo.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    createOneTodo(e) {
        if (e.which === 13) {
            this.props.store.addTodos(e.target.value);
            e.target.value = '';
        }
    }

    filterChange(e) {
        this.props.store.filter = e.target.value;
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete;
    }

    render() {
        const { filter, filteredTodos, todos, clearComplete } = this.props.store;

        const todoLists = filteredTodos.map((todo) => (
            <li key={todo.id}>
            <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete}/>{todo.value}</li>
        ))
        return <div>
            <h1>Todos</h1>
            {filter}
            <br />
            <h4>filter:</h4>
            <input value={filter} onChange={this.filterChange} />
            <br />
            <h4>add one</h4>
            <input onKeyPress={this.createOneTodo} />
            <ul>{todoLists}</ul>
            <a href="#" onClick={clearComplete}>Clear complete</a>
        </div>
    }
}

export default TodoList;