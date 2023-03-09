import 'dotenv/config'
import './connections.js'

import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'


await User.deleteMany()
await Post.deleteMany()

const myself = await User.create({
  username: 'Jas Sade',
  handle: 'JazSadeVee'
})

await Post.insertMany([
  {
    text: 'Typescript > Javascript\nChange my mind.',
    date: '2023-03-08T16:16:08.888Z',
    author: myself._id,
  },
  {
    text: 'Rust will be the future of programming languages',
    date: '2023-03-09T16:16:08.888Z',
    author: myself._id,
  }
])

const tina = await User.create({
  username: "Tina Wink",
  handle: "Christina"
})

await Post.create({
  text: 'I love Harry Potter & Anime',
  author: tina._id,
  date: '2023-03-09T16:16:08.888Z',
})

await mongoose.disconnect()