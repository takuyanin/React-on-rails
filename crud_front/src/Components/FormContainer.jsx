import React from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css'

class FormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      product: ''
    }
  }

  onChangeText (e) {
    this.setState({ product: e.target.value })
  }

  handleSubmit () {
    this.props.createProduct(this.state.product)
    this.setState({ product: '' })
  }

  render () {
    return (
      <div>
        <form>
          <FormGroup controlId='formBasicText'>
            <FormControl
              type='text'
              value={this.state.product}
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
