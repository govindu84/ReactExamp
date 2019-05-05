import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-primary">  
                <a className="navbar-brand" style={{ color: "Black" }} href="#">Navbar
                <span className="badge badge-pill badge-secondary sm-2" > {this.props.totalCounters} </span>
                </a>
            </nav>
        );
    }
}

export default Navbar;