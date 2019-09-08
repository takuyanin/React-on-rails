import React from 'react'
import { Button } from 'react-bootstrap'

class EachTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updateText: ''
    }
  }

  handleDelete () {
    this.props.onDelete(this.props.data.id)
  }

  handleUpdate () {
    this.props.onUpdate(this.props.data.id, this.state.updateText)
    this.setState({ updateText: '' })
  }

  handleInput (e) {
    this.setState({ updateText: e.target.value })
  }

  render () {
    return (
      <div class="eachTask">
        <span class="eachTask-content">{this.props.data.text}</span>
        <Button className='deleteBtn' type='submit' onClick={e => this.handleDelete(e)}>delete</Button>
        <span>
          <input type='text' value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <Button type='submit' onClick={e => this.handleUpdate(e)}>update</Button>
        </span>
      </div>
    )
  }
}

export default EachTask
