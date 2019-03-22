import { autorun, observable, computed } from 'mobx';


class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = new Date().getTime();
        this.complete = false;
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = "";
    @computed get filteredTodos() {
        var matchsFilter = new RegExp(this.filter, "i");
        return this.todos.filter(todo => !this.filter || matchsFilter.test(todo.value)); 
    }

    addTodos(value) {
        this.todos.push(new Todo(value)); 
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

var store = window.store = new TodoStore;

export default store;

autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
});