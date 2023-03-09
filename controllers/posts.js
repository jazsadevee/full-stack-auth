import User from '../models/users.js'
import Post from '../models/posts.js'

export async function GetPosts(req, res) {
  const posts = await Post.find().populate('author')
  return res.json(posts)
}

export async function GetPostById(req, res) {
  const id = req.params.id
  console.log(id);
  const post = await Post.findById(id).populate('author')
  return res.json(post)
}