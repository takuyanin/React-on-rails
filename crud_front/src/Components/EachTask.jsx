import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class EachTask extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      updateText: '',
      isShown: false,
      taskStyle: {}
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

  showHidden () {
    console.log(this.state.isShown)
    if (this.state.isShown === true) {
      this.setState({
        isShown: false,
        taskStyle: {}
      })
    } else {
      this.setState({
        isShown: true,
        taskStyle: { display: 'block' }
      })
    }
  }

  render () {
    return (
      <div className="eachTask">
        <span className="eachTask-content" style={this.state.taskStyle}>{this.props.data.text}</span>
        <Button className='deleteBtn' type='submit' onClick={e => this.handleDelete(e)}>delete</Button>
        <span>
          <input type='text' value={this.state.updateText} onChange={e => this.handleInput(e)} />
        </span>
        <span>
          <Button type='submit' onClick={e => this.handleUpdate(e)}>update</Button>
        </span>
        <span className="showBtn" onClick={e => this.showHidden(e)}><FontAwesomeIcon icon={faChevronDown} /></span>
      </div>
    )
  }
}

export default EachTask
