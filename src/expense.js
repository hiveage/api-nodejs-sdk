const Expense = {

  // Creating a expense requires param parameters. Returns the created expense.
  createExpense(data) {
    if (!data) {
      throw new Error("please enter some data")
    }
    return this.postRequest(`/api/categories/expenses`, data)
  },

  // Retriving a expense requires id parameters. Returns the searched expense.
  retriveExpense(id) {
    if (!id) {
      throw new Error("please enther id");
    }
    return this.getRequest(`/api/categories/expenses/${id}`);
  },

  // Updating an existing expenses requires id parameters. Returns the updated expenses.
  updateExpense(id, data) {
    if (!id) {
      throw new Error("Please enter id")
    }
    if (!data) {
      throw new Error('Please fill up some data that to be updated')
    }
    return this.putRequest(`/api/categories/expenses/${id}`, data)
  },

  // Listing  all existing expenses no parameter. Returns the All expenses.
  listAllExpenses(params = {}) {
    return this.getRequest(`/api/categories/expenses`, params)
  },

  // Deleting an existing expense requires id parameter. Returns the deleted expense's result.
  deleteExpense(id) {
    if (!id) {
      throw new Error("Please enter id");
    }
    return this.deleteRequest(`/api/categories/expenses/${id}`);
  },
};

module.exports = Expense;
