const Item = {

  // Creating a item requires param parameters. Returns the created item.
  createItem(data) {
    if (!data) {
      throw new Error("please some data to update")
    }
    return this.postRequest(`/api/categories/items`, data)
  },

  // Retriving a item requires id parameters. Returns the searched item.
  retriveItem(id) {
    if (!id) {
      throw new Error("please enther id")
    }
    return this.getRequest(`/api/categories/items/${id}`)
  },

  // Updating an existing items requires id parameters. Returns the updated items.
  updateItem(id, data) {
    if (!id || !data) {
      throw new Error("Please enter id and data that needs to be updated")
    }
    return this.putRequest(`/api/categories/items/${id}`, data)
  },

  // Listing  all existing items no parameter. Returns the All items.
  listAllItems(params = {}) {
    return this.getRequest(`/api/categories/items`, params)
  },

  // Deleting an existing item requires id parameter. Returns the deleted item's result.
  deleteItem(id) {
    if (!id) {
      throw new Error("Please enter id")
    }
    return this.deleteRequest(`/api/categories/items/${id}`)
  },
};

module.exports = Item;
