# Usage of Payment API call functions

You can record manual payments to invoices using this API call. 

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api/)

## Table of content
- [Create a New Payment](#create-a-new-payment)   
- [Retrieve a Payment](#retrieve-a-payment)  
- [Update a Payment](#update-a-payment)  
- [List All Payments](#list-all-payments)   
- [Delete a Payment](#delete-a-payment)

## Create a New Payment

Creates payment object for invoices.

Required Parameters : Hash Key, Data

Usage : 

```js
    let hashKey = "XXXXXXXXXXXX"
    hiveage.createPayment(hashKey, {
        payment: {
            "date": "2015-01-20",
            "amount": "10.0",
            "formatted_amount": "$10.00",
            "balance": "5.0",
            "formatted_balance": "$5.00",
            "payment_method": "paypal",
            "details": "Payment details",
            "combined_payment_details": "Paypal: Payment details",
            "currency_iso_code": "USD",
            "currency_symbol": "$",
            "payment_receipt_no": "RCPT-1"
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
        payment: {
            "id": 2235,
            "date": "2015-01-20",
            "amount": "10.0",
            "formatted_amount": "$10.00",
            "balance": "5.0",
            "formatted_balance": "$5.00",
            "payment_method": "paypal",
            "details": "Payment details",
        }
    }
```

## Retrieve a Payment

Retrieve a payment with a specified ID.

Required Parameters : Hash Key, ID

Usage : 
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.retrivePayment(hashKey, id).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Update a Payment

Update a payment associated with a invoice.

Required Parameters : Hash Key , ID, Data

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.updatePayment(hashKey, id, {
        payment: {
            "amount": "20.0",
        },
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## List All Payments

Returns a list of payments. The payments are returned sorted by date.
The results will be paginated. You can use the following optional params object to traverse the results.

Required Parameters : Hash Key, Params

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    hiveage.listAllPayments(hashKey).then(response => {
        log(response)
    }).catch(error => {
            console.log(error)
    })
```

## Delete a Payment

Deletes a payments object permanently.Returns an object with a deleted parameter on success.

Required Parameters :  Hash Key, ID

Usage:
```js
    let hashKey = "XXXXXXXXXXXX"
    let id = 111111
    hiveage.deletePayment(hashKey, id).then(response => {
        log(response)
    }).catch(error => {
        console.log(error)
    })
```
