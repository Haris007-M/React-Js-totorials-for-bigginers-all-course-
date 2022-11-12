import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
        this.cRef = React.createRef()
    }
    focus = () => {
        this.cRef.current.focus()
    }

    click = () => {
        alert(this.cRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder='click here to type' ref={this.cRef} /><br /><br />
                <button type="button" onClick={this.focus}>Focus</button>
                <button type="button" onClick={this.click}>Click me</button>
            </div>
        )
    }
}

export default Refs
