import React, { Component } from 'react';

import WantedMail from './WantedMails';

export default class Section extends Component {
  render() {
    return (
      <div>
        <h1 className="header_my-mails">{this.props.header}</h1>
        <hr></hr>
        <WantedMail logo={this.props.logo1} brand={this.props.brand1} ad={this.props.ad1}
        onClick={() => this.props.addPref(this.props.brand)}/>
        <WantedMail logo={this.props.logo2} brand={this.props.brand2} ad={this.props.ad2}
        onClick={() => this.props.addPref(this.props.brand)}
        />
      </div>
    );
  }
}