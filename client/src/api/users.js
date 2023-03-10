import api from "./apiConfig";

export async function getProfile(handle) {
  const response = await api.get(`/user/${handle}`)
  return response.data
}

const LOCALSTORAGE_KEY = 'token'

export async function signin(username, password) {
  const response = await api.post('/auth/signin', {
    username, password
  })

  localStorage.setItem(LOCALSTORAGE_KEY, response.data)

  return response.data
}