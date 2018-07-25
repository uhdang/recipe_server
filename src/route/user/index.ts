import {Router} from 'express';
import {createUser, deleteUser, getUser} from '../../api/user';

const router:Router = Router();

router.post('/', createUser);
router.get('/', getUser);
router.delete('/', deleteUser);

export default router;
