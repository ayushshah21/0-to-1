import express from 'express';
import { PostController } from '../controllers/postController';
import { validateUser } from '../middleware';
const router = express.Router();
const postController = new PostController();

router.post('/', validateUser, async (req, res) => {
    postController.createBlog(req, res);
})
router.put('/:id', async(req, res) => {
    postController.updateBlog(req, res);
})
router.get('/:id', async(req, res) => {
    postController.getBlog(req, res);
})

router.get('/', async(req, res) => {
    postController.getAllBlogs(req, res);
})

export default router;