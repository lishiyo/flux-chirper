import { Router } from 'express';
const router = module.exports = Router();
import { required, makeUserSafe } from '../auth/login';
import { pushSet, removeFromSet } from '../../src/utils/utils';

// ========= USERS API ========

import locallyDb from 'locallydb';
const db = new locallyDb('./.data');
const users = db.collection('users');

/**
GET /api/users
POST /api/users - new user
**/
router.route('/api/users')
    .all(required)
    .get((req, res) => {
        res.json(users.toArray().map(makeUserSafe) );
    });
    
/**
POST /api/follow/:id
POST /api/unfollow/:id
**/
router.route('/api/follow/:id')
    .all(required)
    .post((req, res) => {
        let userId = parseInt(req.params.id, 10);
        let currentUser = req.user; // from passport
        pushSet(currentUser.following, userId);
        // update user in database
        users.update(req.user.cid, currentUser);

        res.json(makeUserSafe(currentUser));
    });

router.route('/api/unfollow/:id')
    .all(required)
    .post((req, res) => {
        let userId = parseInt(req.params.id, 10);
        // currentUser.following = [ userid ]
        let currentUser = req.user; // from passport
        removeFromSet(currentUser.following, userId);
        // update user in database 
        users.update(req.user.cid, currentUser);

        res.json(makeUserSafe(currentUser));
    });

export default router;
