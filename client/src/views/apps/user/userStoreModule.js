import axios from '@axios'

const SERVER_URL = 'http://127.0.0.1:5000'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${SERVER_URL}/users`, { params: queryParams })
          .then(response => {
            resolve(response) 
          })
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${SERVER_URL}/user/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    deleteUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${SERVER_URL}/user/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${SERVER_URL}/addUser`, { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
