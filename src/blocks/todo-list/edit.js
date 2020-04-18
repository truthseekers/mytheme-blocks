import { Component } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from "@wordpress/compose";

class ReduxTodoEdit extends Component {
    state = {
        new_todo: ""
    };
    render() {
        const { todos, addToDo, toggleToDo } = this.props;
        return (
            <div>
                {todos.map((todo, index) => {
                    return (
                        <div
                            key={index}
                            style={todo.completed ? { textDecoration: 'line-through', opacity: 0.5 } : undefined}
                        >
                            <input
                                disabled={todo.loading}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleToDo(todo, index)}
                            />
                            {todo.title}
                        </div>
                    );
                })}
                <input
                    type="text"
                    value={this.state.new_todo}
                    onChange={(e) => this.setState({ new_todo: e.target.value })}
                />
                <button onClick={() => addToDo({ title: this.state.new_todo, completed: false })}>Add</button>
            </div>
        );
    }
}

export default compose([
    withSelect(select => {
        return {
            todos: select('mytheme-blocks/todo').getTodos()
        };
    }),
    withDispatch(dispatch => {
        return {
            addToDo: item => {
                dispatch('mytheme-blocks/todo').addToDo(item);
            },
            toggleToDo: (todo, index) => {
                dispatch('mytheme-blocks/todo').toggleTodo(todo, index);
            }
        };
    })
])(ReduxTodoEdit);
