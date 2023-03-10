import { useState } from "react"
import { createPost } from "../api/posts"

export default function NewPost() {

  const [username, setUsername] = useState('')
  const [twuut, setTwuut] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const data = await createPost(twuut, username)
    console.log(data);
  }


  return (
    <div>
      <h1>New Twuut</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Username  */}
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Twuut */}
          <div>
            <label>Twuut</label>
            <textarea
              value={twuut}
              onChange={(e) => setTwuut(e.target.value)}></textarea>
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  )
}