import actions from '../actions/actions';
import dispatcher from '../dispatcher';
import constants from '../constants';
import API from './api';

// register a handler to dispatch types
dispatcher.register(action => {
    switch (action.actionType) {
        case constants.CHIRP:
            API.saveChirp(action.data);
            break;
        case constants.FOLLOW:
            API.follow(action.data);
            break;
        case constants.UNFOLLOW:
            API.unfollow(action.data);
            break;
    }
});

export default API;
