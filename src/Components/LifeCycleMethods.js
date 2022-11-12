import React, { Component } from 'react'

export class LifeCycleMethods extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        console.log("Component is mounting")
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidUpdate(prevState, prevProp) {
        if (prevState.count !== this.state.count) {
            console.log("Component did update")
        }
    }
    componentWillUnmount() {
        console.log("component is unmounting")
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button type="" onClick={this.increment}>click me</button>
            </div>
        )
    }
}

export default LifeCycleMethods
