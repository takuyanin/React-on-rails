import React from 'react'
import axios from 'axios'
import TodosContainer from './TodosContainer'
import FormContainer from './FormContainer'
import update from 'react-addons-update'

class MainContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
    this.createTodo = this.createTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
  }

  componentDidMount () {
    console.log("componentDidMount")
    axios.get('http://localhost:3001/todos')
      .then((results) => {
        console.log(results)
        this.setState({ todos: results.data })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  createTodo (todo) {
    console.log("createTodo")
    axios.post('http://localhost:3001/todos', { todo: todo })
      .then((response) => {
        const newData = update(this.state.todos, { $push: [response.data] })
        this.setState({ todos: newData })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  deleteTodo (id) {
    console.log("deleteTodo")
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then((response) => {
        const todoIndex = this.state.todos.findIndex(x => x.id === id)
        const deletedTodos = update(this.state.todos, { $splice: [[todoIndex, 1]] })
        this.setState({ todos: deletedTodos })
        console.log('delete')
      })
      .catch((data) => {
        console.log(data)
      })
  }

  updateTodo (id, todo) {
    console.log("updateTodo")
    axios.patch(`http://localhost:3001/todos/${id}`, { todo: todo })
      .then((response) => {
        const todoIndex = this.state.todos.findIndex(x => x.id === id)
        const todos = update(this.state.todos, { [todoIndex]: { $set: response.data } })
        this.setState({ todos: todos })
        console.log('update')
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render () {
    return (
      <div className='app-main'>
        <FormContainer createTodo={this.createTodo} />
        <TodosContainer todoData={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
      </div>
    )
  }
}

export default MainContainer
