export const NEW_TASK = 'NEW_TASK'
export const DEL_TASK = 'DEL_TASK'
export const CHANGE_TASK = 'CHANGE_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'
export const DEL_ALL = 'DEL_ALL'
export const SAVE_TASK = 'SAVE_TASK'
export const CHANGE_TASK_REQUEST = 'CHANGE_TASK_REQUEST'
export const CHANGING_TASK = 'CHANGING_TASK'

export const NewTask = task => ({
    type: NEW_TASK,
    payload: { task },
})

export const CompleteTask = task => ({
    type: COMPLETE_TASK,
    payload: task,
})

export const DelTask = task => ({
    type: DEL_TASK,
    payload: task,
})

export const DelAll = () => ({
    type: DEL_ALL,
})

export const ChangeTask = task => {
    return dispatch => {
        dispatch({
            type: CHANGE_TASK_REQUEST,
        })

        dispatch({
            type: CHANGE_TASK,
            payload: task,
        })
    }
}

export const ChangingTask = task => ({
    type: CHANGING_TASK,
    payload: task,
})

export const SaveTask = task => ({
    type: SAVE_TASK,
    payload: task.tasks,
})
