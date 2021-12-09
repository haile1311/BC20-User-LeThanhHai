import React, { Component } from 'react';

export default class ExampleHandlingEvents extends Component {

    constructor(props){
        super(props);
    }
    // binding
    // this.handleLogin = this.handleLogin.bind(this);

    username = "Cybersoft";
    isLogin = false;

    // renderHTML() {
    //     if (this.isLogin) {
    //         return (
    //             <div>
    //                 <h1>Hello {this.username}</h1>
    //                 <button className="btn btn-danger">Log out</button>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>
    //                 <h1>Vui long Login</h1>
    //                 <button className="btn btn-success">Log in</button>
    //             </div>
    //         );
    //     }
    // }

    handleLogin = () => {
        console.log(this.isLogin);
        this.isLogin = "true";
        console.log(this.isLogin);
    };
    

    renderHTML() {
        // toan tu 3 ngoi:  dk? "dung" : "sai"
        return this.isLogin ? (<div>
            <h1>Hello {this.username}</h1>
            <button className="btn btn-danger">Log out</button>
        </div>) : (<div>
                    <h1>Vui long Login</h1>
                    <button className="btn btn-success" onClick ={this.handleLogin}>Log in</button>
                </div>)
            }   
            
    render() {
        return (
            <div>
                <h1>ExampleHandlingEvents</h1>
                {this.renderHTML()};
            </div>
        )
    }
}
