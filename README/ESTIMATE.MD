# Usage of Estimate API call functions

One or many Estimates can be associated with a business or a contact. The API allows you to create, update and delete estimates. Estimates can be created to give an estimate to users. Later an Estimate can be converted to estimate. An estimate object can have Taxes, Discounts and Shipping charges etc

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api/)

## Table of content
- [Create a New Estimate](#create-a-new-estimate) 
- [Retrieve an Estimate](#retrieve-an-estimate) 
- [Update an Estimate](#update-an-estimate) 
- [List All Estimates](#list-all-estimates)
- [Send Estimate](#send-estimate)
- [Delete an Estimate](#delete-an-estimate)


## Create a New Estimate

You can create Estimate for business and individual accounts. 

Required Parameters : Data

Usage : 

```js
    hiveage.createEstimate({
        "estimate": {
            "connection_id": 1234567,
            "hash_key": 'XXXXXXXXXXXXX',
            "due_date": "2015-10-18",
            "date": "2015-01-18",
            "summary": "estimate summary",
            "note": "estimate Note",
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
        estimate: {
            id: 222222,
            business_id: 1111111,
            date: "2020-04-20",
            hash_key: "XXXXXXXXXXXXXXX",
            state: "sent",
            summary: "Radio Company Test",
            note: "updated note",
            company_id: 61298,
            statement_no: "EST-0001",
            currency: "USD",
            send_reminders: false,
            expire_date: "2020-07-19",
            billed_total: "68000.0",
            sub_total: "68000.0",
            created_at: "2020-04-20T07:10:42-06:00",
        },
    }
```

## Retrieve an Estimate

Retrieve an estimate object with a specified hash_key.Returns a estimate JSON object if a valid estimate hash_key was provided. Returns an error otherwise.

Required Parameters : Hash Key

Usage : 
```js
    let estimateHash = "XXXXXXXXXXXX"
    hiveage.retriveestimate(estimateHash).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Update an Estimate

Updating an estimate object.

Required Parameters : Hash Key , Data

Usage:
```js
    let estimateHash = 'XXXXXXXXXXXX'
    hiveage.updateEstimate(estimateHash, {
        'estimate': {
            'statement_no': 'IN-0005',
            'summary': 'estimate summary to be updated'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## List All Estimates

Returns a list of estimates. The estimates are returned sorted alphabetically.
The results will be paginated. You can use the following optional params object to traverse the results.

Required Parameters : Params

Usage:
```js
    hiveage.listAllEstimates().then(response => {
        console.log(response.estimates[1].connection)
    }).catch(error => {
        console.log(error)
    })
```

## Send Estimate

There are two ways to deliver a message.

i. Delivers an exisiting estimate without specifying any parameters. It will use defalut estimate email template values.
ii. To send a custom email message for an estimate, use the params object.

Required Parameters :  Hash Key, Data

Usage:
```js
    let estimateHash = "XXXXXXXXXXXX"
    hiveage.sendEstimates(estimateHash, {
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

## Delete an Estimate

Deleting an estimate object will move it to Trash. It will not be deleted permanently. To permanently delete an estimate, the user has to log into Hiveage and delete it manually from the trash.

Required Parameters :  Hash Key

Usage:
```js
    let estimateHash = 'XXXXXXXXXXXX'
    hiveage.deleteEstimate(estimateHash).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

