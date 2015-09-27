import React from 'react';
import actions from '../actions/actions';

// Stores
import ChirpStore from '../stores/Chirps';

// Sub-components
import ChirpInput from './ChirpInput';
import ChirpList from './views/ChirpList';

// Smart Component bound to ChirpStore
class Home extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = this.getState();

    // alias handlers
    this.onChange = this.onChange.bind(this);
    this.saveChirp = this.saveChirp.bind(this);
  }
  componentDidMount() {
    ChirpStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    ChirpStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState(() => this.getState());
  }
  getState() {
    return ChirpStore.getState();
  }
  saveChirp(text) {
    actions.chirp(text);
    // dispatcher.dispatch({
    //     actionType: CHIRP,
    //     data: text
    // })
  }
  render() {
    return (
      <div>
        <ChirpInput onSave={this.saveChirp} />
        <ChirpList chirps={this.state.chirps} />
      </div>
    );
  }
}

export default Home;
