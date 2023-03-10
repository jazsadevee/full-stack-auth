import Post from '../models/posts.js'
import User from '../models/users.js'
import jwt from 'jsonwebtoken'

const TOKEN_KEY = process.env.TOKEN_KEY

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
  // extract token from headers
  const token = req.headers.authorization
  // verify token and extra the user's info
  const data = jwt.verify(token, TOKEN_KEY)
  if (!data) {
    return res.status(401).json({
      message: 'You must signin to Twuut'
    })
  }
  const { id } = data

  // const user = await User.findOne({ handle: username })
  const newPost = await Post.create({
    author: id,
    date: new Date(),
    text: twuut,
  })
  return res.json(newPost)
}
