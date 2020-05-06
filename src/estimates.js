
//---------------------------------------------------Estimate-----------------------------------------------------------------------------------------
const Estimates = {
  // Creating a new estimate requires JSON data parameter. Returns created estimate result.
  createEstimate(data) {
    if (!data) {
      throw new Error("Please enter JSON file")
    }
    return this.postRequest(`/api/estm`, data)
  },

  // Retriving an estimate requires hash key parameter. Returns searched estimate's result.
  retriveEstimate(hash) {
    if (!hash) {
      throw new Error("Please enter hash key")
    }
    return this.getRequest(`/api/estm/${hash}`)
  },

  // Updating an existing estimate requires hash key and data parameter. Returns updated estimate result.
  updateEstimate(hash, data) {
    if (!hash) {
      throw new Error("Please enter hash key")
    }
    if (!data) {
      throw new Error('Please fill up some data that to be updated')
    }
    return this.putRequest(`/api/estm/${hash}`, data)
  },

  // Deleting an existing estimate requires hash key parameter. Returns deleted estimate result.
  deleteEstimate(hash) {
    if (!hash) {
      throw new Error("Please enter hash key")
    }
    return this.deleteRequest(`/api/estm/${hash}`)
  },

  // Showing all existing estimates No parameter. Returns all estimates result.
  listAllEstimates(params = {}) {
    return this.getRequest(`/api/estm`, params)
  },

  // Send estimates
  sendEstimates(hash, data) {
    if (!hash || !data) {
      throw new Error("Please enter hash key and data");
    }
    return this.postRequest(`/api/estm/${hash}/deliver`, data);
  }
}


module.exports = Estimates;
