const Trips = {
  // Function to create a new trip
  createTrip(data) {
    if (!data) {
      throw new Error("Please enter some json data");
    }
    return this.postRequest("/api/categories/trips", data);
  },

  // This retrieves the details of an existing Trip.
  retriveTrip(id) {
    if (!id) {
      throw new Error("Please enter a hash key");
    }
    return this.getRequest(`/api/categories/trips/${id}`);
  },

  // Update a trip category.
  updateTrip(id, data) {
    if (!id || !data) {
      throw new Error("Please fill the required id key and data");
    }
    return this.putRequest(`/api/categories/trips/${id}`, data);
  },


  // Returns a list of trips. The trips are returned sorted alphabetically.
  listAllTrips(params = {}) {
    return this.getRequest(`/api/categories/trips`, params);
  },

  // Deleting a trip object permanently.
  deleteTrip(id) {
    if (!id) {
      throw new Error("Please enter a id key");
    }
    return this.deleteRequest(`/api/categories/trips/${id}`);
  }
};

module.exports = Trips;
