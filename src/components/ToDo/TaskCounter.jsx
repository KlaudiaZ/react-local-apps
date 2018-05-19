import React from 'react';

const TaskCounter = (props) => {
    return (
        <h1 className="title">ToDo React App &nbsp;  
            <span className="has-text-success">{props.tasks.filter(task => task.done).length}</span> / {props.tasks.length}
        </h1>
    );
}

export default TaskCounter;