import React, { Component } from 'react';

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div className="topNavBar">
        <nav>
          Team Name
        </nav>
      </div>
    );
  }
}
