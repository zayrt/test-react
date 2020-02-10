import React from 'react';

export default class Value extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() { }

  render() {
    return <div key={this.props.val}>{this.props.val}</div>;
  }
}
