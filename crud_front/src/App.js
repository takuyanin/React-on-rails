import React from 'react'
import ReactDOM from 'react-dom'
import MainContainer from './Components/MainContainer'
import bgImage from '../public/image.jpg'

class App extends React.Component {
  render () {
    const style = {backgroundImage:`url(${bgImage})`}
    return (
      <div className='App' style={style}>
        <MainContainer />
      </div>
    )
  }
}

export default App

ReactDOM.render(
  <App />, document.querySelector('.container')
)