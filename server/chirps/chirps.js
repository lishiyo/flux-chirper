import { Router } from 'express';
const router = module.exports = Router();
import { required } from '../auth/login';

// ========= CHIRPS API ========

import locallyDb from 'locallydb';
const db = new locallyDb('./.data');
const chirps = db.collection('chirps');

/**
GET /api/chirps
POST /api/chirps
**/
router.route('/api/chirps')
    .all(required)
    .get((req, res) => {
        res.json(chirps.toArray());
    })
    .post((req, res) => {
        let chirp = req.body; // text
        chirp.userId = req.user.cid;

        // TO BE REMOVED
        chirp.username = req.user.username;
        chirp.fullname = req.user.fullname;
        chirp.email = req.user.email;

        // create a chirp and return it
        const id = chirps.insert(chirp);
        res.json(chirps.get(id));
    });

export default router;
