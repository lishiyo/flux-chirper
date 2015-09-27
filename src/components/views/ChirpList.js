import React from 'react';
import moment from 'moment';
import UserStore from '../../stores/Users';

// Sub-components
import Box from './Box';

// Dumb Component <--- Home passes in chirps
class ChirpList extends React.Component {
  render() {
    let chirps = this.props.chirps.map(c => this.renderChirp(c));

    return (
      <ul>
          { chirps }
      </ul>
    )
  }

  renderChirp(chirp) {
    return (
      <Box key={chirp.cid} 
          user={ chirp } 
          timestamp={ moment(chirp.$created).fromNow() } >
          { chirp.text }
      </Box>
    );
  }
}

ChirpList.propTypes = {
  chirps: React.PropTypes.array.isRequired
}

export default ChirpList;
