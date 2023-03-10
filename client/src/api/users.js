import api from "./apiConfig";

export async function getProfile(handle) {
  const response = await api.get(`/user/${handle}`)
  return response.data
}

export async function signin(username, password) {
  const response = await api.post('/auth/signin', {
    username, password
  })
  return response.data
}