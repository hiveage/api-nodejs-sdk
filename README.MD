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
- [Support and Migration](#support-and-migration)
- [Built With](#built-with)
- [License](#license)

## Requirements

Paddington requires the following to run:

- [Node.js][node] 0.10+
- [npm][npm] (normally comes with Node.js)

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

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

- [createConnection(data)](README/NETWORK.MD#create-a-new-connection)
- [retriveConnection(hash)](README/NETWORK.MD#retrieve-a-connection)
- [updateConnection(hash, data)](README/NETWORK.MD#update-a-connection)
- [listAllConnections(params)](README/NETWORK.MD#delete-a-connection)
- [deleteConnection(hash)](README/NETWORK.MD#list-all-connections)
- [invoiceActivities(hash, params)](README/NETWORK.MD#invoice-activities) 
- [estimateActivities(hash, params)](README/NETWORK.MD#estimate-activities) 
- [recurringInvoice(hash, params)](README/NETWORK.MD#recurring-invoice-activities)

Contacts

- [createContact(hash, data)](README/CONTACT.MD#create-a-new-contact)
- [retriveContact(hash, id)](README/CONTACT.MD#retrieve-a-contact)
- [updateContact(hash, id, data)](README/CONTACT.MD#update-a-contact)
- [listAllContacts(hash, params)](README/CONTACT.MD#list-all-contacts)
- [deleteContact(hash, id)](README/CONTACT.MD#delete-a-contact)

Invoice

- [createInvoice(data)](README/INVOICE.MD#create-a-invoice)
- [retriveInvoice(hash)](README/INVOICE.MD#retrieve-an-invoice)
- [updateInvoice(hash, data)](README/INVOICE.MD#update-an-invoice)
- [listAllInvoices(params)](README/INVOICE.MD#list-all-invoices)
- [sendInvoice(hash, data)](README/INVOICE.MD#send-invoice) 
- [sendReminder(hash, data)](README/INVOICE.MD#send-invoice-reminder)
- [deleteInvoice(hash)](README/INVOICE.MD#delete-an-invoice)

Estimates

- [createEstimate(data)](README/ESTIMATE.MD#create-a-new-estimate)
- [retriveEstimate(hash)](README/ESTIMATE.MD#retrieve-an-estimate)
- [updateEstimate(hash, data)](README/ESTIMATE.MD#update-an-estimate)
- [listAllEstimates(params)](README/ESTIMATE.MD#list-all-estimates)
- [sendEstimates(hash, data)](README/ESTIMATE.MD#send-estimate)
- [deleteEstimate(hash)](README/ESTIMATE.MD#delete-an-estimate)

Payment

- [createPayment(hash, data)](README/PAYMENT.MD#create-a-new-payment)
- [retrivePayment(hash, id)](README/PAYMENT.MD#retrieve-a-payment)
- [updatePayment(hash, id, data)](README/PAYMENT.MD#update-a-payment)
- [listAllPayments(hash, params)](README/PAYMENT.MD#list-all-payments)
- [deletePayment(hash, id)](README/PAYMENT.MD#delete-a-payment)

Expense

- [createExpense(data)](README/EXPENSE.MD#create-a-new-expense)
- [retriveExpense(params)](README/EXPENSE.MD#retrieve-an-expense)
- [updateExpense(id,data)](README/EXPENSE.MD#update-an-expense)
- [listAllExpenses(id)](README/EXPENSE.MD#list-all-expenses)
- [deleteExpense(id)](README/EXPENSE.MD#delete-an-expense)

Trip

- [createTrip(data)](README/TRIP.MD#create-a-new-trip)
- [retriveTrip(id)](README/TRIP.MD#retrieve-a-trip)
- [updateTrip(id, data)](README/TRIP.MD#update-a-trip)
- [listAllTrips(params)](README/TRIP.MD#list-all-trips)
- [deleteTrip(id)](README/TRIP.MD#delete-a-trip)

Task

- [createTask(data)](README/TASK.MD#create-a-new-task)
- [retriveTask(id)](README/TASK.MD#retrieve-a-task)
- [updateTask(id, data)](README/TASK.MD#update-a-task)
- [listAllTasks(params)](README/TASK.MD#list-all-task)
- [deleteTask(id)](README/TASK.MD#delete-a-task)

Item
- [createItem(data)](README/ITEM.MD#create-a-new-item)
- [retriveItem(id)](README/ITEM.MD#retrieve-an-item)
- [updateItem(id, data)](README/ITEM.MD#update-an-item)
- [listAllItems(params)](README/ITEM.MD#list-all-items)
- [deleteItem(id)](README/ITEM.MD#delete-an-item)

Notes : 
- ***hash : must field***
- ***id : must field***
- ***data : must field***
  - should be a JSON object
- ***params : optional field***
  - should be a JSON object

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
