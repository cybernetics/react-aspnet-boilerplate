import React, { Component } from 'react';
import { connect } from 'react-redux';

class Index extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

export default connect(
  (state) => state,
  { }
)(Index);
