const request = require("./requests");
const Network = require("./network");
const Contacts = require("./contacts");
const Invoices = require("./invoices");
const Estimates = require("./estimates");
const Payments = require("./payments");
const Expense = require("./expense");
const EntryExpense = require("./entryexpense");
const Trips = require("./trips");
const EntryMileage = require("./entrymileage");
const Task = require("./task");
const Item = require("./items");
const RecurringInvoice = require("./recurringInvoices");

class Hiveage {
  constructor(subdomain, apiKey) {
    if (!subdomain) {
      throw new Error("Please enter a valid subdomain");
    }
    if (!apiKey) {
      throw new Error("Please enter a valid api key");
    }
    this.url = `https://${subdomain}.hiveage.com`;
    this.apiKey = apiKey;
  }
}

// Assigning request object methods to Hiveage class
Hiveage.prototype.getRequest = request.getRequest;
Hiveage.prototype.postRequest = request.postRequest;
Hiveage.prototype.putRequest = request.putRequest;
Hiveage.prototype.deleteRequest = request.deleteRequest;

// Assigning network object methods to Hiveage class
Hiveage.prototype.createConnection = Network.createConnection;
Hiveage.prototype.retriveConnection = Network.retriveConnection;
Hiveage.prototype.updateConnection = Network.updateConnection;
Hiveage.prototype.deleteConnection = Network.deleteConnection;
Hiveage.prototype.listAllConnections = Network.listAllConnections;
Hiveage.prototype.invoiceActivities = Network.invoiceActivities;
Hiveage.prototype.estimateActivities = Network.estimateActivities;
Hiveage.prototype.recurringInvoice = Network.recurringInvoice;

// Assigning contact object methods to Hiveage class
Hiveage.prototype.createContact = Contacts.createContact;
Hiveage.prototype.retriveContact = Contacts.retriveContact;
Hiveage.prototype.updateContact = Contacts.updateContact;
Hiveage.prototype.listAllContacts = Contacts.listAllContacts;
Hiveage.prototype.deleteContact = Contacts.deleteContact;

// Assigning Invoice object methods to Hiveage class
Hiveage.prototype.createInvoice = Invoices.createInvoice;
Hiveage.prototype.retriveInvoice = Invoices.retriveInvoice;
Hiveage.prototype.deleteInvoice = Invoices.deleteInvoice;
Hiveage.prototype.updateInvoice = Invoices.updateInvoice;
Hiveage.prototype.listAllInvoices = Invoices.listAllInvoices;
Hiveage.prototype.sendInvoice = Invoices.sendInvoice;
Hiveage.prototype.sendReminder = Invoices.sendReminder;

// Assigning Estimates object methods to Hiveage class
Hiveage.prototype.createEstimate = Estimates.createEstimate;
Hiveage.prototype.retriveEstimate = Estimates.retriveEstimate;
Hiveage.prototype.updateEstimate = Estimates.updateEstimate;
Hiveage.prototype.deleteEstimate = Estimates.deleteEstimate;
Hiveage.prototype.listAllEstimates = Estimates.listAllEstimates;
Hiveage.prototype.sendEstimates = Estimates.sendEstimates;

// Assigning Payments object methods to Hiveage class
Hiveage.prototype.createPayment = Payments.createPayment;
Hiveage.prototype.retrivePayment = Payments.retrivePayment;
Hiveage.prototype.updatePayment = Payments.updatePayment;
Hiveage.prototype.listAllPayments = Payments.listAllPayments;
Hiveage.prototype.deletePayment = Payments.deletePayment;

// Assigning Expense object methods to Hiveage class
Hiveage.prototype.createExpense = Expense.createExpense;
Hiveage.prototype.retriveExpense = Expense.retriveExpense;
Hiveage.prototype.updateExpense = Expense.updateExpense;
Hiveage.prototype.listAllExpenses = Expense.listAllExpenses;
Hiveage.prototype.deleteExpense = Expense.deleteExpense;

// Assigning Expense object methods to Hiveage class
Hiveage.prototype.createEntryExpense = EntryExpense.createEntryExpense;
Hiveage.prototype.retriveEntryExpense = EntryExpense.retriveEntryExpense;
Hiveage.prototype.updateEntryExpense = EntryExpense.updateEntryExpense;
Hiveage.prototype.listAllEntryExpense = EntryExpense.listAllEntryExpense;
Hiveage.prototype.deleteEntryExpense = EntryExpense.deleteEntryExpense;

// Assigning Trip object methods to Hiveage class
Hiveage.prototype.createTrip = Trips.createTrip;
Hiveage.prototype.retriveTrip = Trips.retriveTrip;
Hiveage.prototype.updateTrip = Trips.updateTrip;
Hiveage.prototype.listAllTrips = Trips.listAllTrips;
Hiveage.prototype.deleteTrip = Trips.deleteTrip;

// Assigning Mileage object methods to Hiveage class
Hiveage.prototype.createEntryMileage = EntryMileage.createEntryMileage;
Hiveage.prototype.retriveEntryMileage = EntryMileage.retriveEntryMileage;
Hiveage.prototype.updateEntryMileage = EntryMileage.updateEntryMileage;
Hiveage.prototype.listAllEntryMileage = EntryMileage.listAllEntryMileage;
Hiveage.prototype.deleteEntryMileage = EntryMileage.deleteEntryMileage;

// Assigning Task object methods to Hiveage class
Hiveage.prototype.createTask = Task.createTask;
Hiveage.prototype.retriveTask = Task.retriveTask;
Hiveage.prototype.updateTask = Task.updateTask;
Hiveage.prototype.listAllTasks = Task.listAllTasks;
Hiveage.prototype.deleteTask = Task.deleteTask;

// Assigning Item object methods to Hiveage class
Hiveage.prototype.createItem = Item.createItem;
Hiveage.prototype.retriveItem = Item.retriveItem;
Hiveage.prototype.updateItem = Item.updateItem;
Hiveage.prototype.listAllItems = Item.listAllItems;
Hiveage.prototype.deleteItem = Item.deleteItem;

// Assigning createRecurring object methods to Hiveage class
Hiveage.prototype.createRecurring = RecurringInvoice.createRecurring;
Hiveage.prototype.retriveRecurring = RecurringInvoice.retriveRecurring;
Hiveage.prototype.deleteRecurring = RecurringInvoice.deleteRecurring;
Hiveage.prototype.updateRecurring = RecurringInvoice.updateRecurring;
Hiveage.prototype.listAllRecurring = RecurringInvoice.listAllRecurring;
Hiveage.prototype.invoiceActivities = RecurringInvoice.invoiceActivities;

module.exports = Hiveage;
