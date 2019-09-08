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
      <div>
        <span>{this.props.data.text}</span>
        <Button className='deleteButton' type='submit' onClick={e => this.handleDelete(e)}>削除</Button>
        <span>
          <input type='text' value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <Button type='submit' onClick={e => this.handleUpdate(e)}>更新</Button>
        </span>
      </div>
    )
  }
}

export default EachTask
