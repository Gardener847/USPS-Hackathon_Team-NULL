import React, { Component } from 'react';

export default class SaveAction extends Component {
  render() {
    return (
      <div className="btn_action">
        {/* btn_topFoldImg_resize */}
        <input type="submit" value={this.props.action} className="btn btn-lg btn-primary">
        </input>
      </div>
    );
  }
}