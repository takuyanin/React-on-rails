import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './Components/MainContainer'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <MainContainer />
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />, document.querySelector('.container')
)