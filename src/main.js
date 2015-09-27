import React from 'react';
import ReactRouter, { Route } from 'react-router';

import API from './API/index';

// Components
import App from './components/App';
import Home from './components/Home';
import UserList from './components/UserList';

const routes = (
    // App route will run for all routes
    <Route handler={ App }>
        <Route name='home' path='/' handler={ Home } />
        <Route name='users' path='/users' handler={ UserList } />
        <Route name='user' path='/user/:id' handler={ Home } />
    </Route>
);

// grab all data
API.fetchChirps();
API.fetchUsers();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
});
