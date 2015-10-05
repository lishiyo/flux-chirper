import constants from '../constants';
import Store from './Store';
import UserStore from './Users';
import { filterSet } from '../utils/utils';

let ChirpStore = Store.createStore({
    // custom methods
    init() {
        // bind chirps from server
        this.bindAction(constants.GOT_CHIRPS, this.set);
        this.bindAction(constants.CHIRPED, this.add);
    },
    getState() { // public state
        return { 
            chirps: this.timeline()
        }; 
    },
    timeline() {
        // my own tweets and my followed tweets
        let userIds = [UserStore.getCurrentUser().cid].concat(UserStore.getCurrentUser().following);
        // true if chirp's userId is in the array
        let userInFollowing = function(chirp) {
            return (userIds.indexOf(chirp.userId) !== -1);
        }

        return filterSet(this.all(), userInFollowing);
    }
});

export default ChirpStore;
