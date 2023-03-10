import 'dotenv/config'
import './connections.js'

import User from '../models/users.js'
import Post from '../models/posts.js'
import mongoose from 'mongoose'


await User.deleteMany()
await Post.deleteMany()

const myself = await User.create({
  username: 'Jas Sade',
  handle: 'jazsadevee'
})

await Post.insertMany([
  {
    text: 'Yeagerist',
    date: '2023-03-08T16:16:08.888Z',
    author: myself._id,
  },
  {
    text: 'Eren was right',
    date: '2023-03-09T16:16:08.888Z',
    author: myself._id,
  }
])

const tina = await User.create({
  username: "Christina",
  handle: "Tina Wink"
})

await Post.create({
  text: 'I love Harry Potter & Anime',
  author: tina._id,
  date: '2023-03-09T16:16:08.888Z',
})

const tay = await User.create({
  username: "Cydney Taylor",
  handle: "Macy Gray"
})

await Post.create({
  text: "I'll do it if you do it first",
  author: tay._id,
  date: '2023-03-10T16:16:08.888Z',
})

await mongoose.disconnect()