import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProfile } from "../api/users"
import Post from "../components/post"

export default function Profile() {
  const params = useParams()
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile(params.handle).then(setProfile)
  }, [params.handle])

  useEffect(() => {
    console.log(profile);
  }, [profile])

  return (
    <div>
      <h1>{profile.username}</h1>
      <pre>@{profile.handle}</pre>
      <hr />
      {profile.posts?.map(el => (
        <Post
          key={el._id}
          text={el.text}
          username={profile.username}
          handle={profile.handle}
        />
      ))}
    </div>
  )
}