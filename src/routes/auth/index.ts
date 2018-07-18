import { Request, Response, Router} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('auth went through');
    return res.status(200).end();
});

export default router;
