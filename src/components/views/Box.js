import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { avatar } from './../../utils/utils';

// fullname, username, avatar, text || buttons, timestamp || null
// user
// timestamp
// text || buttons <-- child element

class Box extends React.Component {
  render() {
    const user = this.props.user;
    const timestamp = this._timestamp();

    return (
      <li className='row chirp'>
        <Link className='two columns' 
            to='user' 
            params={ { id: user.userId || user.cid } }>
            <img src={avatar(user.email) } />
        </Link>
        <div className='ten columns'>
            <p>
              <strong> {user.fullname} </strong>
              <span className='timestamp'>
                @{user.username} { timestamp }
              </span>
            </p>
            <p> { this.props.children } </p>
        </div>
      </li>
    );
  }

  _timestamp() { 
    // moment(user.$created).fromNow()
    return this.props.timestamp ? 
      ' ' + String.fromCharCode(8226) + ' ' + this.props.timestamp :
      ' ';
  }
}

Box.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default Box;
