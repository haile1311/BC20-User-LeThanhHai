import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo = () => {
        const username = "Cybersoft";
        const age = 4;
        this.props.resetInfo(username, age);
    };


    


    render() {
        // const propUsername = this.props.username;
        const {username,age} = this.props;
        console.log(username,age);
        return (
            <div>
                <h3>Child</h3>
                <p>Username:  {username} - Age: {age}</p>
                <button className="btn btn-danger" onClick={this.handleResetInfo}>Reset info</button>
            </div>
        )
    }
}
