import React, { Component } from "react";

class MultiButton extends Component {
    render() {
        return(
            <div className="multi-button-container">
                <button id="left">Observatories</button>
                <button id="mid">Automation</button>
                <button id="right">Accessories</button>
            </div>
        );
    }
}

export default MultiButton;