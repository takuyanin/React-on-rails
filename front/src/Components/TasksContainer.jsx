import React from 'react'
import EachTask from './EachTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faListAlt } from '@fortawesome/free-solid-svg-icons'

class TasksContainer extends React.Component {
  render () {
    return (
      <div className='tasksContainer'>
        <div className="tasksContainer-inner">
          <div className='todoList'>
            <div className='todoList-inner'>
              <div className='todoList-inner-title'>
                <FontAwesomeIcon icon={faListAlt} /><span>Todo</span>
              </div>
              {this.props.todoData.map((data) => {
                return (
                  <div>
                    <EachTask data={data} key={data.id} onDelete={this.props.deleteTodo} onUpdate={this.props.updateTodo} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className='memoList'>
            <div className='memoList-inner'>
              <div className='memoList-inner-title'>
                <FontAwesomeIcon icon={faStickyNote} /><span>Memo</span>
              </div>
              {this.props.memoData.map((data) => {
                return (
                  <div>
                    <EachTask data={data} key={data.id} onDelete={this.props.deleteMemo} onUpdate={this.props.updateMemo} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TasksContainer
