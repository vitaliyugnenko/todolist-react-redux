import {
    NEW_TASK,
    DEL_TASK,
    CHANGE_TASK,
    COMPLETE_TASK,
    DEL_ALL,
    SAVE_TASK,
    CHANGE_TASK_REQUEST,
    CHANGING_TASK,
} from '../actions/index'

const initialState = {
    tasks: [],
    isChange: false,
    changeId: null,
    changingValue: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TASK_REQUEST:
            return {
                ...state,
                isChange: false,
                changeId: null,
                changeTask: '',
                isTaskSave: false,
            }

        case CHANGING_TASK:
            return {
                ...state,
                changingValue: action.payload,
            }

        case NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload.task],
                isChange: false,
                changeTask: '',
                changeId: null,
                isTaskSave: false,
            }

        case DEL_TASK:
            return {
                ...state,
                tasks: action.payload,
                isChange: false,
            }

        case CHANGE_TASK:
            return {
                ...state,
                isChange: !state.isChange,
                changeId: action.payload.id,
                changingValue: action.payload.value,
            }

        case SAVE_TASK:
            return {
                ...state,
                changedTask: action.payload.task,
                changeId: action.payload.id,
                isTaskSave: true,
                tasks: action.payload,
            }

        case COMPLETE_TASK:
            return {
                ...state,
                tasks: action.payload,
            }

        case DEL_ALL:
            return {
                ...state,
                tasks: [],
                isChange: false,
            }

        default:
            return state
    }
}
