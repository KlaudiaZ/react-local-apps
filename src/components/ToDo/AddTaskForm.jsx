import React, { Component}  from 'react';

class AddTaskForm extends Component {
    input = null;
    
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds">
                    <input className="input is-large" placeholder="Your task description" ref={el => {this.input = el}} />
                </div>
                <div className="column">  
                    <a className="button is-link is-large" 
                        onClick={() => this.props.onAddTask(this.input.value)}>
                        Add Task
                    </a>
                </div>
            </div>  
        );
    }
}

export default AddTaskForm;