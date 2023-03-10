import { Router } from "express";
import * as postController from '../controllers/posts.js'

const router = Router()

router.get('/', postController.GetPosts)
router.post('/', postController.CreatePost)
router.get('/:id', postController.GetPostById)

export default router