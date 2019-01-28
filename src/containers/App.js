import { connect } from 'react-redux'
import App from '../components/App'

import {
    NewTask,
    DelAll,
    DelTask,
    CompleteTask,
    ChangeTask,
    SaveTask,
    ChangingTask,
} from '../actions/index'

const mapStateToProps = ({ ToDos }) => {
    return {
        tasks: ToDos.tasks,
        isChange: ToDos.isChange,
        changeId: ToDos.changeId,
        isTaskSave: ToDos.isTaskSave,
        changedTask: ToDos.changedTask,
        changingValue: ToDos.changingValue,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        NewTask: data => {
            dispatch(NewTask(data))
        },
        DelAll: () => {
            dispatch(DelAll())
        },
        DelTask: id => {
            dispatch(DelTask(id))
        },
        ChangeTask: data => {
            dispatch(ChangeTask(data))
        },
        SaveTask: task => {
            dispatch(SaveTask(task))
        },
        ChangingTask: value => {
            dispatch(ChangingTask(value))
        },
        CompleteTask: data => {
            dispatch(CompleteTask(data))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
