import React, { Component } from 'react'
import ExampleHandlingEvents from './example';


export default class HandlingEvent extends Component {
    handlingEvents() {
        console.log(123);
    }

    handlingEventsParams(username,age){
        console.log(username,age);
    }

    render() {
        return (
            <div>
                <h3>HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handlingEvents}>Handling Event</button>
                <button className="btn btn-info" onClick={() => {
                    console.log(456);
                }}>HandlingEvents</button>
                <button className="btn btn-danger" onClick={()=>{
                    this.handlingEventsParams("Cybersoft", "18")
                }}>HandlingEvents Params</button>

                <ExampleHandlingEvents />
            </div>
        )
    }
    
}
