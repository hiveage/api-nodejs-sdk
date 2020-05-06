const axios = require('axios')

const requests = {

  // get method for get requests
  getRequest(getUrl, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(this.url + getUrl, {
        data: params,
        auth: {
          username: this.apiKey
        },
        responseType: 'json'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },

  // post methods for post requests
  postRequest(postUrl, data) {
    return new Promise((resolve, reject) => {
      axios.post(this.url + postUrl, data, {
        auth: {
          username: this.apiKey
        },
        responseType: 'json'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },

  // put method for put requests
  putRequest(putUrl, data) {
    return new Promise((resolve, reject) => {
      axios.put(this.url + putUrl, data, {
        auth: {
          username: this.apiKey
        },
        responseType: 'json'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  },

  deleteRequest(deleteUrl) {
    return new Promise((resolve, reject) => {
      axios.delete(this.url + deleteUrl, {
        auth: {
          username: this.apiKey
        },
        responseType: 'json'
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error.response.data)
      })
    })
  }
}

module.exports = requests;
