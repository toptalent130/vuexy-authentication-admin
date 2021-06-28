import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setAuthToken from './setAuthToken'

const SERVER_URL = 'http://127.0.0.1:5000'

export default {
  namespaced: true,
  state: {
    state: {
      status: '',
      user: {},
    },
  },
  getters: {
    authStatus: state => state.status,
    currentUser: state => state.user,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    REGESTER_USER({ commit, dispatch }, userInfo) {
      return new Promise(async (resolve, reject) => {
        commit('auth_request')
        await axios
          .post(`${SERVER_URL}/register`, userInfo)
          .then(res => {
            const { token } = res.data
            localStorage.setItem('token', token)
            dispatch('SET_CURRENT_USER', token)
            resolve(res)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
    LOGIN_USER({ commit, dispatch }, userInfo) {
      return new Promise(async (resolve, reject) => {
        commit('auth_request')
        await axios
          .post(`${SERVER_URL}/login`, userInfo)
          .then(res => {
            const { token } = res.data
            localStorage.setItem('token', token)
            dispatch('SET_CURRENT_USER', token)
            resolve(res)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
    SET_CURRENT_USER({ commit }, token) {
      setAuthToken(token)
      const decoded = jwtDecode(token)
      commit('auth_success', decoded)
    },
    LOGOUT({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        setAuthToken()
        resolve()
      })
    },
  },
}
