import React, { Component } from 'react';
import './ToDo.css';
import Tasks from './Tasks';
import TaskCounter from './TaskCounter';
import AddTaskForm from './AddTaskForm';

class ToDo extends Component {
  state = {
    tasks: [
      { name: "Buy Milk", done: false },
      { name: "Pay Taxes", done: false }
    ]
  }

  handleAddTask = (val) => {
    const newTasks = [...this.state.tasks];
    const newTask = { name: val, done: false };
    newTasks.push(newTask);
    this.setState({
      tasks: newTasks
    });
  }

  handleCheckboxChange = (index) => {
    const newTasks = [...this.state.tasks];
    const changedTask = this.state.tasks[index];
    newTasks[index] = {
      name: changedTask.name,
      done: !changedTask.done
    };
    this.setState({
      tasks: newTasks
    });
  }

  render () {
    return (
      <section className="section todo project">
        <div className="columns">
          <div className="column container is-fluid">
            
            <TaskCounter tasks={this.state.tasks} />
            <Tasks onCheckboxChange={this.handleCheckboxChange} tasks={this.state.tasks} />

            <AddTaskForm onAddTask={this.handleAddTask} />

          </div>
        </div>  
      </section>
    )
  }
}

export default ToDo;