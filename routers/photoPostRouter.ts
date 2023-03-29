import * as Express from 'express';
import photoPostController from '../controllers/photoPostController';

const router = Express.Router();

//Set new photo post
router.post('/posts', photoPostController.create);

//Get all photo posts
router.get('/posts', photoPostController.getAll);

//Get photo post by id
router.get('/posts/:id', photoPostController.getById);

//Update photo post
router.put('/posts', () => {});

//Delete photo post by id
router.delete('/posts/:id', () => {});

export default router;
