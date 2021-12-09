import React, { Component } from 'react'

export default class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "Cybersoft",
            isLogin : false,
        }
    }


    handleLogin = () => {
        this.setState({
            isLogin: true,})
    };

    handleLogout = () => {
        this.setState({
            isLogin: false,})
    };


    renderHTML() {
        // toan tu 3 ngoi:  dk? "dung" : "sai"
        return this.state.isLogin ? (<div>
            <h1>Hello {this.state.username}</h1>
            <button className="btn btn-danger" onClick = {this.handleLogout}>Log out</button>
        </div>) : (<div>
            <h1>Vui long Login</h1>
            <button className="btn btn-success" onClick={this.handleLogin}>Log in</button>
        </div>)
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
