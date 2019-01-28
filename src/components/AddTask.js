import React, { Component } from 'react'

class AddTask extends Component {
    render() {
        const NewTask = this.props.NewTask

        let input

        return (
            <form
                id="Input-Container"
                onSubmit={e => {
                    e.preventDefault()
                    NewTask([
                        input.value,
                        Date.now(),
                        { Complete: false, style: 'Item-Data' },
                    ])
                    input.value = ''
                }}
            >
                <input
                    id="Add-Task"
                    autoComplete="off"
                    ref={node => (input = node)}
                    placeholder="Add task"
                />
                <div
                    id="Add-Task-Submit"
                    onClick={e => {
                        e.preventDefault()
                        NewTask([
                            input.value,
                            Date.now(),
                            { Complete: false, style: 'Item-Data' },
                        ])
                        input.value = ''
                    }}
                >
                    Add
                </div>
            </form>
        )
    }
}

export default AddTask
