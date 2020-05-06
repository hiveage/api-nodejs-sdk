const RecurringInvoice = {

    //---------------------------------------------------RecurringInvoice-----------------------------------------------------------------------------------------
    // Create an new RecurringInvoice requires param parameters. Returns created RecurringInvoice result.
    createRecurring(param){
        if(!param){
            throw new Error("Please enter hash key and JSON file")
        }
        return this.postRequest(`/api/rinv/`,param)
    },

    // Showing all the existing RecurringInvoices. Returns all RecurringInvoice result.
    listAllRecurring(){
        return this.getRequest(`/api/rinv`)
    }, 

    // Deleting an existing RecurringInvoice requires hash key parameters. Returns deleted RecurringInvoice result.
    deleteRecurring(hash){
        if(!hash){
            throw new Error("Please enter hash key")
        }
        return this.deleteRequest(`/api/rinv/${hash}`)
    },

    // Updating an existing RecurringInvoice requires hash key and data parameters. Returns updated RecurringInvoice result.
    updateRecurring(hash,data = {}){
        if(!hash){
            throw new Error("Please enter hash key")
        }
        return this.putRequest(`/api/rinv/${hash}`,data)
    },

    // Retrive an existing RecurringInvoice requires hash key parameters. Returns searched RecurringInvoice result.
    retriveRecurring(hash){
        if(!hash){
            throw new Error("Please enter hash key")
        }
        return this.getRequest(`/api/rinv/${hash}`)
    },

    // Retrive an existing RecurringInvoice requires hash key parameters. Returns searched RecurringInvoice result.
    invoiceActivities(){
        return this.getRequest(`/api/rinv/q00MYh2dywH6RA/invoices`)
    }    

}

module.exports = RecurringInvoice