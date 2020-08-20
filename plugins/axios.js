export default ({ $axios, store }) => {
    $axios.defaults.baseURL = 'https://hamlet-hrm.herokuapp.com/api'
  
    if (process.server) {
      return
    }
  
    $axios.interceptors.request.use(request => {
      request.baseURL = 'https://hamlet-hrm.herokuapp.com/api'
  
      // Get token from auth.js store
      const token = store.state.token
  
      // Update token axios header
      if (token) {
        request.headers.common['Authorization'] = token
      }
      return request
    })
  }