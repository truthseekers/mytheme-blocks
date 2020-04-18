import { registerStore, dispatch } from "@wordpress/data";

const DEFAULT_STATE = [];

const actions = {
    populateToDos(todos) {
        return {
            type: 'POPULATE_TODOS',
            todos
        }
    },
    addToDo(item) {
        return {
            type: 'ADD_TODO',
            item: item
        }
    },
    fetchTodos() {
        return {
            type: 'FETCH_TODOS'
        }
    }
}

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.item]
        case 'POPULATE_TODOS':
            return [...action.todos]

        default:
            return state;

    }
}

const selectors = {
    getTodos(state) {
        return state;
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
