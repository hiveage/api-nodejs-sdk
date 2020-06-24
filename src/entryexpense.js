const EntryExpense = {

  // Creating a new expense entry requires data parameters. Returns the created expense entry.
  createEntryExpense(data) {
    if (!data) {
      throw new Error("please enter some data")
    }
    return this.postRequest(`api/expense`, data)
  },

  // // Retriving a expense entry requires id parameters. Returns the searched expense entry.
  retriveEntryExpense(id) {
    if (!id) {
      throw new Error("please enter id");
    }
    return this.getRequest(`api/expense/${id}`);
  },

  // // Updating an existing expenses entry requires id parameters with updating data. Returns the updated expenses entry.
  updateEntryExpense(id, data) {
    if (!id) {
      throw new Error("Please enter id")
    }
    if (!data) {
      throw new Error('Please fill up some data that to be updated')
    }
    return this.putRequest(`api/expense/${id}`, data)
  },

  // Listing  all existing expenses entries no parameters. Returns the All expenses entries.
  listAllEntryExpense(params = {}) {
    return this.getRequest(`api/expense`, params)
  },

  // // Deleting an existing expense entry requires id parameter. Returns the deleted expense's result.
  deleteEntryExpense(id) {
    if (!id) {
      throw new Error("Please enter id");
    }
    return this.deleteRequest(`api/expense/${id}`);
  },
};

module.exports = EntryExpense;
