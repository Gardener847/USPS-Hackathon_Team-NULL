import React, { Component } from 'react';

export default class TrashMail extends Component {
  render() {
    return (
      <span id={this.props.brand}>
        <img src={this.props.logo} width="140" height="140"/>
        <p className="p-wanted-mails">
          <input type="checkbox" name={this.props.brand} 
          onClick={this.props.addRestore}/>
          {this.props.brand}
        </p>
      </span>
    );
  }
}