import React from 'react';

const Tasks = (props) => {
    return (
        <div className="notification">
            {props.tasks.map((task, index) => {
                return (
                <div key={index}>
                    <label className="checkbox is-size-3">
                    <input className="todo-checkbox" type="checkbox" checked={task.done} 
                    onClick={() => props.onCheckboxChange(index)} />
                    {task.name}
                    </label>
                </div>
                )
            })}
        </div>
    );   
}

export default Tasks;