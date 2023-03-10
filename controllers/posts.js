import Post from '../models/posts.js'
import User from '../models/users.js'

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

export async function CreatePost(req, res) {
  const { username, twuut } = req.body
  const user = await User.findOne({ handle: username })
  const newPost = await Post.create({
    author: user._id,
    date: new Date(),
    text: twuut,
  })
  return res.json(newPost)
}