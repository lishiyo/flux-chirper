import constants from '../constants';
import Store from './Store';

let ChirpStore = Store.createStore({
    // custom methods
    init () {
        // bind chirps from server
        this.bindAction(constants.GOT_CHIRPS, this.set);
        this.bindAction(constants.CHIRPED, this.add);
    },
    getState () { // public state
        return { 
            chirps: this.all() 
        }; 
    },
});

export default ChirpStore;
