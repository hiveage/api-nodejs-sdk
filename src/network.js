const Network = {

  // Create a new company, client or vendor by creating a new Connection
  createConnection(data) {
    if (!data) {
      throw new Error("Please enter some data")
    }
    return this.postRequest('/api/network', data)
  },

  // This retrieves the details of an existing Connection.
  retriveConnection(hash) {
    if (!hash) {
      throw new Error("Please enter a hash key")
    }
    return this.getRequest(`/api/network/${hash}`)
  },

  // Updating an existing connection requires hash_key and other parameters. Returns the updated Connection.
  updateConnection(hash, data) {
    if (!hash || !data) {
      throw new Error("Please fill the required hash key and data")
    }
    return this.putRequest(`/api/network/${hash}`, data)
  },

  // A deleted Connection is moved to the Trash. Once deleted, it is no longer possible to create new statements
  deleteConnection(hash) {
    if (!hash) {
      throw new Error("Please enter a hash key")
    }
    return this.deleteRequest(`/api/network/${hash}`)
  },

  // Returns a list of your connections, sorted alphabetically.
  listAllConnections(params) {
    return this.getRequest(`/api/network/`, params)
  },

  // Returns a list of associated invoices, sorted by date and created_at.
  invoiceActivities(hash, params = {}) {
    if (!hash) {
      throw new Error("Please enter a hash key")
    }
    return this.getRequest(`/api/network/${hash}/invoices`, params)
  },

  // Returns a list of associated estimates, sorted by created_at.
  estimateActivities(hash, params = {}) {
    if (!hash) {
      throw new Error("Please enter a hash key")
    }
    return this.getRequest(`/api/network/${hash}/estimates`, params)
  },

  // Returns a list of associated recurring invoices, sorted by created_at
  recurringInvoice(hash, params = {}) {
    if (!hash) {
      throw new Error("Please enter a hash key")
    }
    return this.getRequest(`/api/network/${hash}/recurring_invoices`, params)
  }

}

module.exports = Network
