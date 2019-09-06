import React from 'react'
import ViewTodo from './ViewTodo'

class TodosContainer extends React.Component {
  render () {
    return (
      <div className='todoList'>
        {this.props.todoData.map((data) => {
          return (
            <ViewTodo data={data} key={data.id} onDelete={this.props.deleteTodo} onUpdate={this.props.updateTodo} />
          )
        })}
      </div>
    )
  }
}

export default TodosContainer
