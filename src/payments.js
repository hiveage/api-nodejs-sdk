const Payments = {

  //---------------------------------------------------Payments-----------------------------------------------------------------------------------------
  // Create an new payment requires hash key and JSON data parameters. Returns created payment result.
  createPayment(hash, data) {
    if (!data || !hash) {
      throw new Error("Please enter hash key and JSON file")
    }
    return this.postRequest(`/api/invs/${hash}/payments`, data)
  },

  // Showing all the existing payments requires hash key parameter. Returns all payment result.
  listAllPayments(hash) {
    if (!hash) {
      throw new Error("Please enter hash key")
    }
    return this.getRequest(`/api/invs/${hash}/payments`)
  },

  // Deleting an existing payment requires hash key and id parameters. Returns deleted payment result.
  deletePayment(hash, id) {
    if (!hash || !id) {
      throw new Error("Please enter both hash key and id")
    }
    return this.deleteRequest(`/api/invs/${hash}/payments/${id}`)
  },

  // Updating an existing payment requires hash key,id and JSON data parameters. Returns updated payment result.
  updatePayment(hash, id, data) {
    if (!hash || !id) {
      throw new Error("Please enter both hash key and id")
    }
    if (!data) {
      throw new Error('Please fill up some data that to be updated')
    }
    return this.putRequest(`/api/invs/${hash}/payments/${id}`, data)
  },

  // Retrive an existing payment requires hash key and id parameters. Returns searched payment result.
  retrivePayment(hash, id) {
    if (!hash || !id) {
      throw new Error("Please enter both hash key and id")
    }
    return this.getRequest(`/api/invs/${hash}/payments/${id}`)
  },
};

module.exports = Payments;
