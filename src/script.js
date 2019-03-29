import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.listRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1>My React App</h1>
      </div>
    )
  }
}

export default App
