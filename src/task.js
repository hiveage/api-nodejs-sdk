const Task = {

  // Creating a task requires param parameters. Returns the created task.
  createTask(data) {
    if (!data) {
      throw new Error("please enter some data to create task")
    }
    return this.postRequest(`/api/categories/tasks`, data)
  },

  // Retriving a task requires id parameters. Returns the searched task.
  retriveTask(id) {
    if (!id) {
      throw new Error("please enther id")
    }
    return this.getRequest(`/api/categories/tasks/${id}`)
  },

  // Updating an existing tasks requires id parameters. Returns the updated tasks.
  updateTask(id, data) {
    if (!id || !data) {
      throw new Error("Please enter id and data that needs to be updated")
    }
    return this.putRequest(`/api/categories/tasks/${id}`, data)
  },

  // Listing  all existing tasks no parameter. Returns the All tasks.
  listAllTasks(params = {}) {
    return this.getRequest(`/api/categories/tasks`, params)
  },

  // Deleting an existing task requires id parameter. Returns the deleted task's result.
  deleteTask(id) {
    if (!id) {
      throw new Error("Please enter id")
    }
    return this.deleteRequest(`/api/categories/tasks/${id}`)
  }
}

module.exports = Task;
