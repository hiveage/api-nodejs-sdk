# Usage of Invoice API call functions

One or many Invoices can be associated with a business or a contact. The API allows you to create, update and delete invoices. Invoices can be created to get payment from users.

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api/)

## Table of content
- [Create a Invoice](#create-a-invoice) 
- [Retrieve an Invoice](#retrieve-an-invoice) 
- [Update an Invoice](#update-an-invoice) 
- [List All Invoices](#list-all-invoices) 
- [Send Invoice](#send-invoice) 
- [Send Invoice Reminder](#send-invoice-reminder) 
- [Delete an Invoice](#delete-an-invoice)


## Create a Invoice 

You can create invoices for business and individual accounts. 

Required Parameters : Data

Usage : 

```js
    hiveage.createInvoice({
        "invoice": {
            "connection_id": 1234567,
            "hash_key": 'XXXXXXXXXXXXX',
            "due_date": "2015-10-18",
            "date": "2015-01-18",
            "summary": "Invoice summary",
            "note": "Invoice Note",
            "statement_no": "IN-001",
            "payment_options": ["paypal", "cash", "check"],
            "allow_partial_payments": 1,
            "send_receipts_automatically": 1,
            "po_number": "PO-number",
            "send_reminders": false
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```
Response :
```js
    {
        contact: {
            id: 111111,
            first_name: 'Axios Test Contact',
            last_name: 'Tester',
            email: 'peter@example.com',
            mobile: '562-556-5555',
            phone: '562-381-5555',
            created_at: '2020-04-30T05:41:00Z'
        }
    }
```

## Retrieve an Invoice

Retrieve an invoice object with a specified hash_key.

Required Parameters : Hash Key

Usage : 
```js
    let invoiceHash = "XXXXXXXXXXXX"
    hiveage.retriveInvoice(invoiceHash).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Update an Invoice

Update an invoice object.

Required Parameters : Hash Key , Data

Usage:
```js
    let invoiceHash = 'XXXXXXXXXXXX'
    hiveage.updateInvoice(invoiceHash, {
        'invoice': {
            'statement_no': 'IN-0005',
            'summary': 'Invoice summary to be updated'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error.response.data)
    })
```

## List All Invoices

Returns a list of invoices. The invoices are returned sorted alphabetically.
The results will be paginated. You can use the following optional params object to traverse the results.

Required Parameters : Params

Usage:
```js
    hiveage.listAllInvoices(Params).then(response => {
        console.log(response.invoices[1].connection)
    }).catch(error => {
        console.log(error)
    })
```

## Send Invoice

There are two ways to deliver a message.

i. Delivers an exisiting invoice without specifying any parameters. It will use defalut invoice email template values.
ii. To send a custom email message for an invoice, use the params object.

Required Parameters :  Hash Key, Data

Usage:
```js
    let invoiceHash = "XXXXXXXXXXXX"
    hiveage.sendInvoice(invoiceHash, {
        'delivery': {
            'recipients': [{ name: 'Nisanthan', email: 'Nisanthan@vesess.com' }, { name: 'Ishanka', email: 'ishanka@vesess.com' }],
            'subject': 'Testing the node client',
            'message': 'test initiated by Tester'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Send Invoice Reminder

There are two ways to send an invoice reminder.

i. Delivers an exisiting invoice without specifying any parameters. It will use defalut invoice reminder template values.
ii. You can set all params object if you wish to send custom emali message to selected invoice.

Required Parameters :  Hash Key, Data

Usage:
```js
    let invoiceHash = 'XXXXXXXXXXXX'
    hiveage.sendReminder(invoiceHash, {
        'delivery': {
            'recipients': [{ name: 'Nisanthan', email: 'Nisanthan@vesess.com' }],
            'subject': 'Testing invoice reminder',
            'message': 'test initiated by Tester'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```


## Delete an Invoice

Deleting an invoice object will move it to Trash. It will not be deleted permanently. To permanently delete an invoice, the user has to log into Hiveage and delete it manually from the trash.

Required Parameters :  Hash Key

Usage:
```js
    let invoiceHash = 'XXXXXXXXXXXX'
    hiveage.deleteInvoice(invoiceHash).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```
