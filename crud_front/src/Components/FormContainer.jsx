import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import FormCheck, { Input } from 'react-bootstrap/FormCheck'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

class FormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo: '',
      radio: 'todos'
    }
  }

  onChangeRadio (e) {
    if ( e.target.value === 'todos' ) {
      this.setState({ radio: 'todos'})
    } else {
      this.setState({ radio: 'memos'})
    }
  }

  onChangeText (e) {
    this.setState({ todo: e.target.value })
  }

  handleSubmit () {
    this.props.createTodo(this.state.todo, this.state.radio)
    this.setState({ todo: ''})
  }

  render () {
    return (
      <div className="formContainer">
        <div className="formContainer-inner">
          <div className="formContainer-inner-top">
            <span>Post Form</span>
          </div>
          <div className="formContainer-inner-bottom">
            <div className="formContainer-inner-bottom-label">
              <div>
                <Input type='radio' name='radioGroup' className='radioBtn'
                      value="todos" checked={this.state.radio === 'todos'}
                      onChange={e => this.onChangeRadio(e)}>
                </Input>
                <label>Todo</label>
              </div>
              <div>
                <Input type='radio' name='radioGroup' className='radioBtn'
                      value="memos" checked={this.state.radio === 'memos'}
                      onChange={e => this.onChangeRadio(e)}>
                </Input>
                <label>メモ</label>
              </div>
            </div>
            <FormGroup className="formGroup" controlId='formBasicText'>
              <FormControl
                as="textarea"
                row="3"
                className="formControl"
                type='text'
                value={this.state.todo}
                placeholder='Enter text'
                onChange={e => this.onChangeText(e)}
              />
            </FormGroup>
            <Button type='submit' onClick={e => this.handleSubmit(e)}>Post</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default FormContainer