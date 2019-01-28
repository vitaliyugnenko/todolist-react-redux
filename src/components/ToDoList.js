import React, { Component } from 'react'

class ToDoList extends Component {
    render() {
        const tasks = this.props.tasks
        const DelTask = this.props.DelTask
        const ChangeTask = this.props.ChangeTask
        const SaveTask = this.props.SaveTask
        const CompleteTask = this.props.CompleteTask
        const isChange = this.props.isChange
        const changeId = this.props.changeId
        const isTaskSave = this.props.isTaskSave
        const changedTask = this.props.changedTask
        const ChangingTask = this.props.ChangingTask
        const changingValue = this.props.changingValue

        let result
        let targetId
        let list
        let newTasks
        let inputValue

        isChange
            ? (list = tasks.map((item, i) => {
                  if (isTaskSave && item[1] === changeId)
                      return (
                          <div className="Item">
                              <div className={item[2].style} id={item[1]}>
                                  {changedTask}
                              </div>
                              <div className="Item-Wrapper">
                                  <div
                                      id={item[1]}
                                      className="Input-Edit"
                                      onClick={e => {
                                          inputValue = document.getElementById(
                                              item[1]
                                          ).textContent
                                          ChangeTask({
                                              id: +e.target.id,
                                              value: inputValue,
                                          })
                                      }}
                                  >
                                      Edit
                                  </div>
                                  <div
                                      id={item[1]}
                                      className="Item-Del"
                                      onClick={e => {
                                          targetId = parseInt(e.target.id)
                                          result = tasks.filter(
                                              id => id[1] !== targetId
                                          )
                                          DelTask(result)
                                      }}
                                  >
                                      Delete
                                  </div>
                              </div>
                          </div>
                      )
                  else if (item[1] === changeId)
                      return (
                          <div className="Item" key={item[1]}>
                              <input
                                  className="Item-Input"
                                  autoFocus
                                  ref={input => (this.textInput = input)}
                                  id={item[1]}
                                  value={changingValue}
                                  onChange={() =>
                                      ChangingTask(this.textInput.value)
                                  }
                              />
                              <div className="Item-Wrapper">
                                  <div
                                      className="Item-Submit"
                                      id={item[1]}
                                      onClick={e => {
                                          this.textInput.value.length > 0
                                              ? (newTasks = tasks.map(item => {
                                                    return item[1] ===
                                                        +e.target.id
                                                        ? [
                                                              this.textInput
                                                                  .value,
                                                              +e.target.id,
                                                              item[2],
                                                          ]
                                                        : item
                                                }))
                                              : (newTasks = tasks)
                                          SaveTask({
                                              task: this.textInput.value,
                                              id: +e.target.id,
                                              tasks: newTasks,
                                          })
                                      }}
                                  >
                                      Submit
                                  </div>
                                  <div
                                      className="Item-Del"
                                      id={item[1]}
                                      onClick={e => {
                                          targetId = parseInt(e.target.id)
                                          result = tasks.filter(
                                              id => id[1] !== targetId
                                          )
                                          DelTask(result)
                                      }}
                                  >
                                      Delete
                                  </div>
                              </div>
                          </div>
                      )
                  else
                      return (
                          <div className="Item" key={item[1]}>
                              <div
                                  className={item[2].style}
                                  id={item[1]}
                                  style={{
                                      marginRight: '20px',
                                      display: 'inline-block',
                                      marginTop: '5px',
                                  }}
                                  onClick={e => {
                                      newTasks = tasks.map(item =>
                                          item[1] === +e.target.id
                                              ? [
                                                    item[0],
                                                    item[1],
                                                    {
                                                        Complete: true,
                                                        style:
                                                            'Item-Data Complete',
                                                    },
                                                ]
                                              : item
                                      )
                                      CompleteTask(newTasks)
                                  }}
                              >
                                  {item[0]}
                              </div>
                              <div className="Item-Wrapper">
                                  <div
                                      id={item[1]}
                                      className="Input-Edit"
                                      onClick={e => {
                                          inputValue = document.getElementById(
                                              item[1]
                                          ).textContent
                                          ChangeTask({
                                              id: +e.target.id,
                                              value: inputValue,
                                          })
                                      }}
                                  >
                                      Edit
                                  </div>
                                  <div
                                      id={item[1]}
                                      className="Item-Del"
                                      onClick={e => {
                                          targetId = parseInt(e.target.id)
                                          result = tasks.filter(
                                              id => id[1] !== targetId
                                          )
                                          DelTask(result)
                                      }}
                                  >
                                      Delete
                                  </div>{' '}
                              </div>
                          </div>
                      )
              }))
            : (list = tasks.map((item, i) => {
                  return (
                      <div className="Item" key={item[1]}>
                          <div
                              className={item[2].style}
                              id={item[1]}
                              style={{
                                  marginRight: '20px',
                                  display: 'inline-block',
                                  marginTop: '5px',
                              }}
                              onClick={e => {
                                  newTasks = tasks.map(item =>
                                      item[1] === +e.target.id
                                          ? [
                                                item[0],
                                                item[1],
                                                {
                                                    Complete: true,
                                                    style: 'Item-Data Complete',
                                                },
                                            ]
                                          : item
                                  )
                                  CompleteTask(newTasks)
                              }}
                          >
                              {item[0]}
                          </div>
                          <div className="Item-Wrapper">
                              <div
                                  id={item[1]}
                                  className="Input-Edit"
                                  onClick={e => {
                                      inputValue = document.getElementById(
                                          item[1]
                                      ).textContent
                                      ChangeTask({
                                          id: +e.target.id,
                                          value: inputValue,
                                      })
                                  }}
                              >
                                  Edit
                              </div>
                              <div
                                  id={item[1]}
                                  className="Item-Del"
                                  onClick={e => {
                                      targetId = parseInt(e.target.id)
                                      result = tasks.filter(
                                          id => id[1] !== targetId
                                      )
                                      DelTask(result)
                                  }}
                              >
                                  Delete
                              </div>
                          </div>{' '}
                      </div>
                  )
              }))

        return <div id="ItemContainer">{list}</div>
    }
}

export default ToDoList
