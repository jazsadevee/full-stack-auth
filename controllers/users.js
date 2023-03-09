import User from '../models/users.js'
import Post from '../models/posts.js'

export async function getProfile(req, res) {
  const handle = req.params.handle
  const user = await User.findOne({ handle })
  const posts = await Post.find({ author: user._id })
  return res.json({
    ...user.toJSON(),
    posts,
  })
}