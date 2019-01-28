import React, { Component } from 'react'
import AddTask from './AddTask'
import Footer from './Footer'
import ToDoList from './ToDoList'

class App extends Component {
    render() {
        const NewTask = this.props.NewTask
        const DelAll = this.props.DelAll
        const DelTask = this.props.DelTask
        const CompleteTask = this.props.CompleteTask
        const ChangeTask = this.props.ChangeTask
        const SaveTask = this.props.SaveTask
        const tasks = this.props.tasks
        const isChange = this.props.isChange
        const changeId = this.props.changeId
        const isTaskSave = this.props.isTaskSave
        const changedTask = this.props.changedTask
        const ChangingTask = this.props.ChangingTask
        const changingValue = this.props.changingValue

        return (
            <div className="App">
                <div id="Header">To Do List</div>
                <AddTask NewTask={NewTask} />
                <ToDoList
                    tasks={tasks}
                    isChange={isChange}
                    DelTask={DelTask}
                    CompleteTask={CompleteTask}
                    ChangeTask={ChangeTask}
                    changeId={changeId}
                    SaveTask={SaveTask}
                    isTaskSave={isTaskSave}
                    changedTask={changedTask}
                    ChangingTask={ChangingTask}
                    changingValue={changingValue}
                />
                <Footer DelAll={DelAll} />
            </div>
        )
    }
}

export default App
