import React, { Component } from 'react';
import '../App.css';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '', 
            sayac: 0,
            last:'O'};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log("s");
        if (this.state.sayac % 2 === 0) {
            this.setState(state => ({
                text: 'X',
                last:'X'
            }));
        }
        else {
            this.setState(state => ({
                text: '0',
                last:'0'
            }));
        }
        this.setState(state => ({
            sayac: this.state.sayac + 1
        }));
    };
    render() {
        return (
            <div className="Square" onClick={this.handleClick}>
                {this.state.text}

            </div>
        );
    }
}

export default Square;
