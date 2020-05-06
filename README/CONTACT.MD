# Usage of Contact API call functions

One or many contacts can be associated with a connection object. The API allows you to create, update and delete contacts. Contact details are required when you send statements (invoices, estimates etc.). 

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api/)

## Table of content
- [Create a New Contact](#create-a-new-contact)
- [Retrieve a Contact](#retrieve-a-contact)
- [Update a Contact](#update-a-contact)
- [List All contacts](#list-all-contacts)
- [Delete a Contact](#delete-a-contact)

## Create a New Contact

You can create contacts associated with a connection object. The connection hash_key must be specified in the request URL.

Required Parameters : Hash Key, Data

Usage : 

```js
    //     "invoice": {
    //         "connection_id": 1326852,
    //         "hash_key": 'XwGzH0PkFjT1DQ',
    //         "due_date": "2015-10-18",
    //         "date": "2015-01-18",
    //         "summary": "Invoice summary",
    //         "note": "Invoice Note",
    //         "statement_no": "IN-001",
    //         "payment_options": ["paypal", "cash", "check"],
    //         "allow_partial_payments": 1,
    //         "send_receipts_automatically": 1,
    //         "po_number": "PO-number",
    //         "send_reminders": false
    //     }
    // }).then((response) => {
    //     console.log(response)
    // }).catch(error => {
    //     console.log(error.response.data)
    // })
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

## Retrieve a Contact

Retrieve a contact object given ID.

Required Parameters : Hash Key, ID

Usage : 
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.retriveContact(hashKey, id).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Update a Contact

Update a contact associated with a connection.

Required Parameters : Hash Key , ID, Data

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.updateContact(hashKey, id, {
        contact: {
            first_name: "Tester Name Changed",
        },
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## List All contacts

Returns a list of your connections, sorted alphabetically.
The results will be paginated. You can use the following optional params object to traverse the results.

Required Parameters : Hash Key, Params

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    hiveage.listAllContacts(hashKey).then(response => {
        log(response)
    }).catch(error => {
            console.log(error)
    })
```

## Delete a Contact

Deleting a contact object permanently.

Required Parameters :  Hash Key, ID

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.deleteContact(hashKey, id).then(response => {
        log(response)
    }).catch(error => {
        console.log(error)
    })
```