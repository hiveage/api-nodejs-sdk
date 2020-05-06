const Invoices = {
  //------------------------------------------------Invoice-----------------------------------------------------------------------------------------
  // Create a new Invoice requires JSON data parameter. Returns the new Invoice's result.
  createInvoice(data) {
    if (!data) {
      throw new Error("Please enter JSON file");
    }
    return this.postRequest(`/api/invs`, data);
  },

  // Retrive an existing Invoice requires hash_key parameter. Returns the searched result.
  retriveInvoice(hash) {
    if (!hash) {
      throw new Error("Please enter hash key");
    }
    return this.getRequest(`/api/invs/${hash}`);
  },

  // Deleting an existing Invoice requires hash_key parameter. Returns the deleted invoice's result.
  deleteInvoice(hash) {
    if (!hash) {
      throw new Error("Please enter hash key");
    }
    return this.deleteRequest(`/api/invs/${hash}`);
  },

  // Updating an existing Invoice requires hash_key and data parameter. Returns updated result.
  updateInvoice(hash, data) {
    if (!hash || !data) {
      throw new Error("Please enter hash key and some data that need to be updated");
    }
    return this.putRequest(`/api/invs/${hash}`, data);
  },

  // Showing all existing Invoices requires hash_key parameter. Returns all invoices result.
  listAllInvoices(params = {}) {
    return this.getRequest(`/api/invs`, params);
  },

  // SendingInvoice email from Invoices requires hash_key parameter. Returns all invoices result.
  sendInvoice(hash, data) {
    if (!hash || !data) {
      throw new Error("Please enter hash key and data");
    }
    return this.postRequest(`/api/invs/${hash}/deliver`, data);
  },

  // SendingReminder email from Invoices requires hash_key parameter. Returns all invoices result.
  sendReminder(hash, data) {
    if (!hash || !data) {
      throw new Error("Please enter hash key and data");
    }
    return this.postRequest(`/api/invs/${hash}/reminder`, data);
  },
};

module.exports = Invoices;
