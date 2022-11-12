import React, { Component } from 'react'

export class Event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message :"Hi, But This is not Me !"
      }
    }
    renderme = () => {
        this.setState({
            message : "This is Me Now my name is Haris"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button type="" onClick={this.renderme}>Me</button>
      </div>
    )
    }
}

export default Event
