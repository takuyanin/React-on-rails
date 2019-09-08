import React from 'react'
import axios from 'axios'
import TasksContainer from './TasksContainer'
import FormContainer from './FormContainer'
import update from 'react-addons-update'

class MainContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      memos: []
    }
    this.createTask = this.createTask.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.deleteMemo = this.deleteMemo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.updateMemo = this.updateMemo.bind(this)
  }

  componentDidMount () {
    console.log("componentDidMount")
    axios.all([
      axios.get('http://localhost:3001/todos'),
      axios.get('http://localhost:3001/memos')
    ])
    .then(axios.spread((todoRes, memoRes) => {
      this.setState({
        todos: todoRes.data,
        memos: memoRes.data
      })
    }))
    .catch((data) => {
      console.log(data)
    })
  }

  createTask (task, radio) {
    if (radio === 'todos') {
      axios.post('http://localhost:3001/todos', { todo: task })
        .then((response) => {
          const newData = update(this.state.todos, { $push: [response.data] })
          this.setState({ todos: newData })
        })
        .catch((data) => {
          console.log(data)
        })
    } else {
      axios.post('http://localhost:3001/memos', { memo: task })
        .then((response) => {
          const newData = update(this.state.memos, { $push: [response.data] })
          this.setState({ memos: newData })
        })
        .catch((data) => {
          console.log(data)
        })
    }
  }

  deleteTodo (id) {
    axios.delete(`http://localhost:3001/todos/${id}`)
      .then((response) => {
        const todoIndex = this.state.todos.findIndex(x => x.id === id)
        const deletedTodos = update(this.state.todos, { $splice: [[todoIndex, 1]] })
        this.setState({ todos: deletedTodos })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  deleteMemo (id) {
    axios.delete(`http://localhost:3001/memos/${id}`)
      .then((response) => {
        const memoIndex = this.state.memos.findIndex(x => x.id === id)
        const deletedMemos = update(this.state.memos, { $splice: [[memoIndex, 1]] })
        this.setState({ memos: deletedMemos })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  updateTodo (id, todo) {
    axios.patch(`http://localhost:3001/todos/${id}`, { todo: todo })
      .then((response) => {
        const todoIndex = this.state.todos.findIndex(x => x.id === id)
        const todos = update(this.state.todos, { [todoIndex]: { $set: response.data } })
        this.setState({ todos: todos })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  updateMemo (id, todo) {
    axios.patch(`http://localhost:3001/memos/${id}`, { memo: todo })
      .then((response) => {
        const todoIndex = this.state.memos.findIndex(x => x.id === id)
        const memos = update(this.state.memos, { [todoIndex]: { $set: response.data } })
        this.setState({ memos: memos })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render () {
    return (
      <div className='app-main'>
        <FormContainer createTodo={this.createTask} />
        <TasksContainer
          todoData={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}
          memoData={this.state.memos} deleteMemo={this.deleteMemo} updateMemo={this.updateMemo}
        />
      </div>
    )
  }
}

export default MainContainer
