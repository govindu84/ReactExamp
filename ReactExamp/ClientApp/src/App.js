import React, { Component } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

class App extends Component {
    state = {
        counters: [{ id: 1, value: 2 }, { id: 2, value: 0 },
        { id: 3, value: 4 }, { id: 4, value: 8 }]
    };

    handleEventClick = cid => {
        console.log(cid);
        const counters = this.state.counters.filter(c => c.id !== cid);
        console.log(counters.length);
        this.setState({ counters });
    }
    onHandleReset = () => {
        const counters = this.state.counters.map(c => { c.value = 0; return c });
        this.setState({ counters });
    }
    onHandleIncrement = counter => {
        counter.value++;
        this.setState({ counter });
    }
    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters countersApp={this.state.counters} onReset={this.onHandleReset} onIncrement={this.onHandleIncrement} onDelete={this.handleEventClick}  />
                </main>
            </React.Fragment>
        );
    }
}

export default App;