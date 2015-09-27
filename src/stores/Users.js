import Store from './store';
import constants from '../constants';

const UserStore = Store.createStore({
    currentUser: USER,
    init () {
        this.bindAction(constants.GOT_USER, this.set);
        this.bindAction(constants.GOT_USERS, this.set);
        this.bindAction(constants.FOLLOWED, this.updateUser);
        this.bindAction(constants.UNFOLLOWED, this.updateUser);
    },
    updateUser(data) {
        this.currentUser = data;
    },
    getState() {
        console.log("UserStore get state!", this.all());
        return {
            users: this.all(),
            user: this.currentUser
        }
    }
});

export default UserStore;
