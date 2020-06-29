// Code ClickityClick Component Here
import React, { Component } from 'react'


export default class ClickityClick extends Component {

    state = {
        times: 0
    }

    handleClick = () => {
        this.setState(prevState => ({ times: prevState.times + 1 }), () => console.log(this.state))
    }

    render() {
        return (
            <div>
                <p> I have {this.state.times === 0 ? 'not been clicked.' : `been clicked ${this.state.times} ${this.state.times === 1 ? 'time' : 'times'}.`}</p>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}