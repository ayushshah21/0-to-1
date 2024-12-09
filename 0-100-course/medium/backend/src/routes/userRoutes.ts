import express from 'express'
import { userExists, validateUser } from '../middleware';
import { UserController } from '../controllers/userController';

const userController = new UserController();

const router = express.Router();

router.post('/signup', userExists, async (req, res) => {
   await userController.signup(req, res);
})
router.post('/signin', validateUser, async (req, res) => {
    await userController.signin(req, res);
})
router.post('/info', async (req, res) => {
    await userController.getInfo(req, res);
})

export default router;