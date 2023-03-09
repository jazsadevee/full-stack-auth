import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}