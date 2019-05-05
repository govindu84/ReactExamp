import React, { Component } from 'react';

export default class Counter extends Component {

  

    render() {      
        return (
            <div>
                <span className={this.addStyle()}> {this.props.counter1.value} </span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onHandleIncrement(this.props.counter1)}>increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter1.id)}>Delete</button>
            </div>
        );
    }

    addStyle() {
        const countValue = this.props.counter1.value;
        let clsNameCount = countValue === 0 ? "badge m-2 badge-warning" : "badge m-2 badge-primary";
        return clsNameCount;
    }

    
}

