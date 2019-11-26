import React, { useState } from 'react';
import './TodoListItem.css'


const TodoListItem = ({ important, done, label }) => {

    const [isDone, setIsDone] = useState(done)

    let onToggleDone = () => {
        setIsDone(false)
    }

    let classNames = 'todo-list-item';
    if (important) {
        classNames += ' important';
    }

    if (isDone) {
        classNames += ' done';
    }


    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}>{label}</span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"></i>
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default TodoListItem;

// export default class TodoListItem extends Component {


//     state = {
//         done: false
//     }

//     onLabelClick = () => {
//         this.setState = ({
//             done: true
//         })
//         debugger
//     }


//     render() {

//         const { label, important = false } = this.props
//         const { done } = this.state

//         let classNames = 'todo-list-item';
//         debugger
//         if (done) {
//             debugger
//             classNames += ' done';
//           }

//         const style = {
//             color: important ? 'steelblue' : 'black',
//             fontWeight: important ? 'bold' : 'normal'
//         }

//         return (
//             <span className={classNames}>
//                 <span className='todo-list-item-lable'
//                     style={style}
//                     onClick={this.onLabelClick}>
//                     {label}
//                 </span>
//                 <button type='button'
//                     className='btn btn-outline-danger btn-sm float-right'>
//                     <i className='fa fa-trash-o'></i>
//                 </button>
//                 <button type='button'
//                     className='btn btn-outline-success btn-sm float-right'>
//                     <i className='fa fa-exclamation'></i>
//                 </button>
//             </span>
//         )
//     }
// }
