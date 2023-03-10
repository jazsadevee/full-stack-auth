import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

export async function createPost(twuut, username) {
  const response = await api.post('/post', {
    username, twuut
  })
  return response.data
}