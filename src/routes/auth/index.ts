import * as express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    console.log('auth went through');
    return res.status(200).end();
});

export default router;
