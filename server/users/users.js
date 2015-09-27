import { Router } from 'express';
const router = module.exports = Router();
import { required, makeUserSafe } from '../auth/login';

// ========= USERS API ========

import locallyDb from 'locallydb';
const db = new locallyDb('./.data');
const users = db.collection('users');

/**
GET /api/users
POST /api/users
**/
router.route('/api/users')
    .all(required)
    .get((req, res) => {
        res.json(users.toArray().map(makeUserSafe) );
    })
    .post((req, res) => {
        let user = req.body; // text
        user.cid = req.user.cid;

        // TO BE REMOVED
        user.username = req.user.username;
        user.fullname = req.user.fullname;
        user.email = req.user.email;

        let id = users.insert(user);
        res.json(users.get(id));
    });

export default router;
