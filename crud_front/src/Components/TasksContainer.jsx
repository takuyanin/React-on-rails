import React from 'react'
import EachTask from './EachTask'

class TasksContainer extends React.Component {
  render () {
    return (
      <div>
        <div className='todoList'>
          {this.props.todoData.map((data) => {
            return (
              <div>
                <EachTask data={data} key={data.id} onDelete={this.props.deleteTodo} onUpdate={this.props.updateTodo} />
              </div>
            )
          })}
        </div>
        <div className='memoList'>
          {this.props.memoData.map((data) => {
            return (
              <div>
                <EachTask data={data} key={data.id} onDelete={this.props.deleteMemo} onUpdate={this.props.updateMemo} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TasksContainer
