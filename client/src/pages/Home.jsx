import { useEffect, useState } from "react"
import { getPosts } from '../api/posts'
import Post from "../components/post"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <div>
      {posts.map(el => (
        <Post
          id={el._id}
          text={el.text}
          key={el._id}
          handle={el.author.handle}
          username={el.author.username}
        />
      ))}
    </div>
  )
}