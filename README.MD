# Hiveage Node Client

Node.js client library for using Hiveage APIs. Support for authorization and authentication with basic authentication.

[![NPM version][shield-npm]](#)
[![Node.js version support][shield-node]](#)
[![Build status][shield-build]](#)
[![Code coverage][shield-coverage]](#)
[![Dependencies][shield-dependencies]](#)
[![MIT licensed][shield-license]](#)

## Table of Contents

- [Requirements](#requirements)
- [Features](#Features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Built With](#built-with)
- [License](#license)

## Requirements

Paddington requires the following to run:

- [Node.js][node] 0.10+
- [npm][npm] (normally comes with Node.js)

## Features

Allows connecting to Hiveage API and get results as JSON Object. The client has the following features:

- Transparent HTTPS connection to Hiveage API.
- Allows simple HTTP basic authentication.
- Allows most common HTTP operations: GET, POST, PUT, DELETE, PATCH.

## Installation

```console
$ npm install hiveage
```

## Usage

First we need to create HiveageAPI Object

```js
//importing Hiveage Package
const Hiveage = require("hiveage");

// Create Hiveage object using domain, API key
const HiveageAPI = new Hiveage("<< DOMAIN >>", "<< API KEY >>");
// Example : new Hiveage('john','xyzabcsded')
```

Then, We need can access the available methods of HiveageAPI object

```js
// Creating new connection
HiveageAPI.createConnection(data)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

## Methods

### List of available methods


Network

- [createConnection(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#create-a-new-connection)
- [retriveConnection(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#retrieve-a-connection)
- [updateConnection(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#update-a-connection)
- [listAllConnections(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#delete-a-connection)
- [deleteConnection(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#list-all-connections)
- [invoiceActivities(hash, params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#invoice-activities) 
- [estimateActivities(hash, params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#estimate-activities) 
- [recurringInvoice(hash, params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/NETWORK.MD#recurring-invoice-activities)

Contacts

- [createContact(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/CONTACT.MD#create-a-new-contact)
- [retriveContact(hash, id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/CONTACT.MD#retrieve-a-contact)
- [updateContact(hash, id, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/CONTACT.MD#update-a-contact)
- [listAllContacts(hash, params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/CONTACT.MD#list-all-contacts)
- [deleteContact(hash, id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/CONTACT.MD#delete-a-contact)

Invoice

- [createInvoice(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#create-a-invoice)
- [retriveInvoice(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#retrieve-an-invoice)
- [updateInvoice(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#update-an-invoice)
- [listAllInvoices(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#list-all-invoices)
- [sendInvoice(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#send-invoice) 
- [sendReminder(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#send-invoice-reminder)
- [deleteInvoice(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/INVOICE.MD#delete-an-invoice)

Estimates

- [createEstimate(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#create-a-new-estimate)
- [retriveEstimate(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#retrieve-an-estimate)
- [updateEstimate(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#update-an-estimate)
- [listAllEstimates(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#list-all-estimates)
- [sendEstimates(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#send-estimate)
- [deleteEstimate(hash)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ESTIMATE.MD#delete-an-estimate)

Payment

- [createPayment(hash, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/PAYMENT.MD#create-a-new-payment)
- [retrivePayment(hash, id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/PAYMENT.MD#retrieve-a-payment)
- [updatePayment(hash, id, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/PAYMENT.MD#update-a-payment)
- [listAllPayments(hash, params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/PAYMENT.MD#list-all-payments)
- [deletePayment(hash, id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/PAYMENT.MD#delete-a-payment)

Expense

- [createExpense(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/EXPENSE.MD#create-a-new-expense)
- [retriveExpense(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/EXPENSE.MD#retrieve-an-expense)
- [updateExpense(id,data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/EXPENSE.MD#update-an-expense)
- [listAllExpenses(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/EXPENSE.MD#list-all-expenses)
- [deleteExpense(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/EXPENSE.MD#delete-an-expense)

Trip

- [createTrip(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TRIP.MD#create-a-new-trip)
- [retriveTrip(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TRIP.MD#retrieve-a-trip)
- [updateTrip(id, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TRIP.MD#update-a-trip)
- [listAllTrips(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TRIP.MD#list-all-trips)
- [deleteTrip(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TRIP.MD#delete-a-trip)

Task

- [createTask(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TASK.MD#create-a-new-task)
- [retriveTask(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TASK.MD#retrieve-a-task)
- [updateTask(id, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TASK.MD#update-a-task)
- [listAllTasks(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TASK.MD#list-all-task)
- [deleteTask(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/TASK.MD#delete-a-task)

Item
- [createItem(data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ITEM.MD#create-a-new-item)
- [retriveItem(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ITEM.MD#retrieve-an-item)
- [updateItem(id, data)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ITEM.MD#update-an-item)
- [listAllItems(params)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ITEM.MD#list-all-items)
- [deleteItem(id)](https://github.com/hiveage/api-nodejs-sdk/blob/master/README/ITEM.MD#delete-an-item)

Notes : 
- ***hash : must field***
- ***id : must field***
- ***data : must field***
  - should be a JSON object
- ***params : optional field***
  - should be a JSON object
    - Example :-
  ```js
  params = { "per_page":20, "page":1, "order":"desc" }
  ```
  
## Contributing
  Fork the repository and create a pull request

## Built With

- [Axios](https://github.com/axios/axios) - client-side HTTP request library

## License

Hiveage node api client is licensed under the [MIT](#) license.  
Copyright &copy; 2020, Hiveage

[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[shield-coverage]: https://img.shields.io/badge/coverage-100%25-brightgreen.svg
[shield-dependencies]: https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
[shield-node]: https://img.shields.io/badge/node.js%20support-0.10–5-brightgreen.svg
[shield-npm]: https://img.shields.io/badge/npm-v1.0.0-blue.svg
[shield-build]: https://img.shields.io/badge/build-passing-brightgreen.svg
