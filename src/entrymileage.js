const EntryMileage = {

  // Creating a new mileage entry requires data parameters. Returns the created mileage entry.
  createEntryMileage(data) {
    if (!data) {
      throw new Error("please enter some data")
    }
    return this.postRequest(`api/mileage`, data)
  },

  // // Retriving a mileage entry requires id parameters. Returns the searched mileage entry.
  retriveEntryMileage(id) {
    if (!id) {
      throw new Error("please enter id");
    }
    return this.getRequest(`api/mileage/${id}`);
  },

  // // Updating an existing mileage entry requires id parameters with updating data. Returns the updated mileage entry.
  updateEntryMileage(id, data) {
    if (!id) {
      throw new Error("Please enter id")
    }
    if (!data) {
      throw new Error('Please fill up some data that to be updated')
    }
    return this.putRequest(`api/mileage/${id}`, data)
  },

  // Listing  all existing mileage entries no parameters. Returns the All mileage entries.
  listAllEntryMileage(params = {}) {
    return this.getRequest(`api/mileage`, params)
  },

  // // Deleting an existing mileage entry requires id parameter. Returns the deleted mileage's result.
  deleteEntryMileage(id) {
    if (!id) {
      throw new Error("Please enter id");
    }
    return this.deleteRequest(`api/mileage/${id}`);
  },
};

module.exports = EntryMileage;
