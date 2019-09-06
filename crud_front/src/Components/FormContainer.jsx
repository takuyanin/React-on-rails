import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

class FormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  onChangeText (e) {
    this.setState({ todo: e.target.value })
  }

  handleSubmit () {
    this.props.createTodo(this.state.todo)
    this.setState({ todo: '' })
  }

  render () {
    return (
      <div>
        <form>
          <FormGroup controlId='formBasicText'>
            <FormControl
              type='text'
              value={this.state.todo}
              placeholder='Enter text'
              onChange={e => this.onChangeText(e)}
            />
          </FormGroup>
        </form>
        <Button type='submit' onClick={e => this.handleSubmit(e)}>つぶやく</Button>
      </div>
    )
  }
}

export default FormContainer
