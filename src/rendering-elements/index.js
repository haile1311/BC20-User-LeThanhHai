import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Cybersoft";
    age = "18";
    lop = "BC20";

    renderInfo() {
        return (
            <>
                <p>{this.username} - {this.age}</p>
                <p>Lop: {this.lop}</p>
            </>
        );
    }

    render() {
        return (
            <div>
                <h3>RenderingElements</h3>
                {this.renderInfo()}
            </div>
        )
    }
}
