import { Component } from '@wordpress/element';
import { withSelect, withDispatch } from '@wordpress/data';
import { composer } from "@wordpress/compose";

class ReduxTodoEdit extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default compose([
    withSelect(
        (select) => {
            return {

            }
        }
    ),
    withDispatch(
        (dispatch) => {
            return {

            }
        }
    )
])(ReduxTodoEdit);
