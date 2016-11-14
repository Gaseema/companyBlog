import React from 'react';
import { Button } from 'react-bootstrap';

class UpdateTime extends React.Component {
  constructor() {
    super();

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.props.updateTime(new Date().toString());
  }

  render() {
    return (
      <Button onClick={this.updateTime}>Update Time</Button>
    );
  }
}

UpdateTime.propTypes = {
  updateTime: React.PropTypes.func
};

export default UpdateTime;

