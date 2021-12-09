import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import ChildrenComponent from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 4,  
        }
    }

    handleChangeInfo = () => {
        this.setState({
            username: "Hai",
            age: "25",
        })
    }

    // hàm reset có nhiệm vụ nhận lại data từ component Child
    reset = (username,age) => {
        console.log(username,age);
        // cập nhật lại State
        this.setState({
            username,
            age,
        })
    }   


    render() {
        
        const {username, age} = this.state;
        return (
            <div>
                <h3>Communication</h3>
                <p>Username: {username} - Age: {age}
                </p>
                <button className="btn btn-success" onClick ={this.handleChangeInfo}>Change info</button>
                <hr /> 
                <Child username={username} age ={age} resetInfo={this.reset} />
                <ChildFnc username={username} age={age} />
                <hr />
                <ChildrenComponent>
                    <p>Username: {username} - Age: {age}</p>
                    <div>Hai</div>
                    <h3>Hello</h3>
                </ChildrenComponent>
            </div>
        )
    }
}
