import { Router } from "express";
import * as postController from '../controllers/posts.js'

const router = Router()

router.get('/', postController.GetPosts)
router.get('/:id', postController.GetPostById)

export default router