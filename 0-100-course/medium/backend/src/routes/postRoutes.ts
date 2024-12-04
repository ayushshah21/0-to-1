import express from 'express';
const router = express.Router();


router.post('/', () => console.log("Hi"))
router.put('/', () => console.log("Hi"))
router.put('/', () => console.log("Hi"))

export default router;