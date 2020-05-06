//---------------------------------------------------Contact-----------------------------------------------------------------------------------------
const Contacts = {

    // Creating a contact requires hash_key and data parameters. Returns the created contact.
    createContact(hash, data) {
        if (!data) {
            throw new Error("please enter a hash key")
        }if (!hash) {
            throw new Error("please enter the hash key")
        }
        return this.postRequest(`/api/network/${hash}/contacts`, data)
    },

    // Retriving a contact requires hash_key and id parameters. Returns the searched contact.
    retriveContact(hash, id) {
        if (!hash || !id) {
            throw new Error("please enther both hash key and id")
        }
        return this.getRequest(`/api/network/${hash}/contacts/${id}`)
    },

    // Updating an existing contacts requires hash_key and id parameters. Returns the updated contacts.
    updateContact(hash, id, data) {
        if (!hash || !id || !data) {
            throw new Error("Please enter a hash key and id and valid data")
        }
        return this.putRequest(`/api/network/${hash}/contacts/${id}`, data)
    },

    // Listing  all existing contacts requires hash_key parameter. Returns the All contacts.
    listAllContacts(hash, params = {}) {
        return this.getRequest(`/api/network/${hash}/contacts`, params)
    },

    // Deleting an existing contact requires hash_key and id parameter. Returns the deleted contact's result.
    deleteContact(hash, id) {
        if (!hash || !id) {
            throw new Error("Please enter both hash key and id")
        }
        return this.deleteRequest(`/api/network/${hash}/contacts/${id}`)
  },
};

module.exports = Contacts;
