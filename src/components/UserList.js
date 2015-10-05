import React from 'react';
import UserStore from '../stores/Users';
import actions from '../actions/actions';
import { Link } from 'react-router';
// Sub-components
import Box from './views/Box';
import FollowButton from './views/FollowButton';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    // initial state
    this.state = UserStore.getState(); // { users, user }

    // aliases
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    UserStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState(UserStore.getState());
  }
  render() {
    let users = this.state.users.filter(user => {
      return this.state.user.cid !== user.cid;
    });
    users = this.renderUsers(users);

    return (
      <ul>
        { users }
      </ul>
    );
  }
  renderUsers(users) {
    return users.map(user => {
      return (
        <Box key={user.cid} 
          user={user} >
          <FollowButton userId={user.cid} currentUser={this.state.user}/>
        </Box>
      )
    });
  }
}

export default UserList;
