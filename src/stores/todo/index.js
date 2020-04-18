import { registerStore } from "@wordpress/data";

const DEFAULT_STATE = [];

const actions = {
    populateToDos(todos) {
        return {
            type: 'POPULATE_TODOS',
            todos
        };
    },
    addToDo(item) {
        return {
            type: 'ADD_TODO',
            item: item
        };
    },
    fetchTodos() {
        return {
            type: 'FETCH_TODOS'
        };
    },
    *toggleTodo(todo, index) {
        yield {
            type: 'UPDATE_TODO',
            index,
            todo: { ...todo, loading: true }
        };
        const response = yield {
            type: 'TOGGLE_TODO',
            todo
        };
        return {
            type: 'UPDATE_TODO',
            index,
            todo: response
        }
    }
}

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.item]
        case 'POPULATE_TODOS':
            return [...action.todos]
        case 'UPDATE_TODO': {
            let state_copy = [...state];
            state_copy[action.index] = action.todo;
            return state_copy;
        }

        default:
            return state;

    }
}

const selectors = {
    getTodos(state) {
        return state;
    },
    getToDosNumber(state) {
        return state.length;
    },
    getUnDoneToDosNumber(state) {
        return state.filter(todo => !todo.completed).length
    },
    getDoneToDosNumber(state) {
        return state.filter(todo => todo.completed).length
    }
}

registerStore('mytheme-blocks/todo', {
    reducer,
    selectors,
    actions,
    controls: {
        FETCH_TODOS() {
            return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
                .then(response => response.json())
        },
        TOGGLE_TODO({ todo }) {
            return fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: !todo.completed
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
        }
    },
    resolvers: {
        * getTodos() { // this is a generator function.
            const todos = yield actions.fetchTodos();
            return actions.populateToDos(todos);
        }
    }
})

// can access custom redux store with: wp.data.select('mytheme-blocks/todo').getTodos()
