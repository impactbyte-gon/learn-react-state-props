import React, { Component } from 'react'

import MyParagraph from './MyParagraph'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Haidar Hanif',
      location: 'Impact Byte',
      text: 'Hello people of the world',
      names: [
        'Haidar',
        'Jonathan',
        'Fajrin',
        'Sakti',
        'Bara',
        'Fahri',
        'Mario',
        'Gibran'
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <MyParagraph names={this.state.names} />
      </div>
    )
  }
}

export default App
