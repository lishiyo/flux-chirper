import { Router } from 'express';
const router = module.exports = Router();
import { required, makeUserSafe } from '../auth/login';

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
POST /api/follow
POST /api/unfollow
**/
router.route('/api/follow')
    .all(required)
    .post((req, res) => {
        let userId = req.body
    });

export default router;
