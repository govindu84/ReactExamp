import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  
    render() {
        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}> RESET</button>

                {this.props.countersApp.map(counter => <Counter key={counter.id} counter1={counter} onDelete={this.props.onDelete} onHandleIncrement={this.props.onIncrement} />)}
            </div>
        );
    }
}

export default Counters;