import { Router } from "express";
import * as postController from '../controllers/posts.js'

const router = Router()

router.get('/', postController.GetPosts)

export default router