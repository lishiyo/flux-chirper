import React from 'react';
import actions from '../../actions/actions';
import UserStore from '../../stores/Users';

export default class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
  }
  follow(event) {
    actions.follow(this.props.userId);
  }
  unfollow(event) {
    actions.unfollow(this.props.userId);
  }
  render() {
    // var { checked, ...other } = this.props;
    let { userId, currentUser } = this.props; 
    if (currentUser.cid === userId ) {
      return (<span> This is you! </span>);
    }

    let text, action;
    if (currentUser.following.indexOf(userId) === -1) {
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
  userId: React.PropTypes.number.isRequired, // who to follow/unfollow
  currentUser: React.PropTypes.object.isRequired
}
