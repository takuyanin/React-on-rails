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
    const style = {width: 20, height: 20}

    return (
      <div>
        <Input type='radio' name='radioGroup'
               value="todos" checked={this.state.radio === 'todos'}
               onChange={e => this.onChangeRadio(e)} style={style}>
        </Input>
        <label>Todo</label>
        <Input type='radio' name='radioGroup'
               value="memos" checked={this.state.radio === 'memos'}
               onChange={e => this.onChangeRadio(e)} style={style}>
        </Input>
        <label>メモ</label>
        <FormGroup controlId='formBasicText'>
          <FormControl
            type='text'
            value={this.state.todo}
            placeholder='Enter text'
            onChange={e => this.onChangeText(e)}
          />
        </FormGroup>
        <Button type='submit' onClick={e => this.handleSubmit(e)}>投稿する</Button>
      </div>
    )
  }
}

export default FormContainer
