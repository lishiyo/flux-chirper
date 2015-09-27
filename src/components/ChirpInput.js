import React from 'react';
// Encapsulates its own state - the input
import ChirpInputView from './views/ChirpInputView';

class ChirpInput extends React.Component {
  constructor(props) {
    super(props);
    // set initial state
    this.state = {
      value: ''
    };
    // set handler shortcuts
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    // update state to send to handleClick
    this.setState({
      value: event.target.value
    });
  }

  handleClick(event) {
    this.props.onSave(this.state.value);

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <ChirpInputView
        value={this.state.value}
        onChange={this.handleChange}
        onClick={this.handleClick} />
    );
  }
}

ChirpInput.propTypes = {
  onSave: React.PropTypes.func.isRequired
}

export default ChirpInput;
