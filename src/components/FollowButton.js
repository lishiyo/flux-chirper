import React from 'react';
import actions from '../actions/actions';
import UserStore from '../stores/Users';

export default class FollowButton extends React.Component {
  constructor(props) {
    // current user state
    this.state = {
        id: UserStore.currentUser.id,
        currentlyFollowing: UserStore.currentUser.following
    };

    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    UserStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState(this.getState.call(this));
  }
  follow(event) {
    actions.follow(this.props.userId);
  }
  unfollow(event) {
    actions.unfollow(this.props.userId);
  }
  render() {
    let { userId } = this.props;
    if (this.state.id === userId ) {
      return (<span> This is you! </span>);
    }

    let text, action;
    if (this.state.currentlyFollowing.indexOf(userId) === -1) {
      text = 'Follow';
      action = this.follow;
    } else {
      text = 'Unfollow';
      action = this.unfollow
    }

    return (<button onClick={action}>{text}</button>);
  }
}

FollowButton.propTypes = {
  userId: React.PropTypes.number.isRequired
}
