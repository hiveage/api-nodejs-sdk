# Usage of Network API call functions

Each company, client, and vendor in Hiveage is a Connection, and together they make up the Network of that company. A connection could be an organization or an individual. 

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api/)

## Table of content
- [Create a new Connection](#create-a-new-connection) 
- [Retrieve a Connection](#retrieve-a-connection) 
- [Update a Connection](#update-a-connection) 
- [Delete a Connection](#delete-a-connection)
- [List all Connections](#list-all-connections)
- [Invoice Activities](#invoice-activities) 
- [Estimate Activities](#estimate-activities) 
- [Recurring Invoice Activities](#recurring-invoice-activities)


## Create a new Connection

You can create a new company, client or vendor by creating a new Connection.

Required Parameters : Data

Usage : 

```js
    hiveage.createConnection(
        {
            "network": {
                "name": "Your Name",
                "first_name": "Your First Name",
                "last_name": "Your Last Name",
                "business_email": "email@example.com",
                "currency": "USD",
                "address": "941 Example Ave. #5 ",
                "city": "Long Beach",
                "state_name": "CA",
                "zip_code": "90813",
                "country": "United States",
                "phone": "562-556-5555",
                "fax": "562-381-5555",
                "website_url": "http://example.hiveage.com",
                "category": "organization",
                "language": "en-us",
                "primary_contact_first_name": "John",
                "primary_contact_last_name": "Roe"
            }
        }
    ).then((response) => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```
Response :
```js
    {
        "network": {
            "id": 12345678,
            "hash_key": "ySEuaOmG8GppQw",
            "category": "organization",
            "primary": false,
            "business_email": "email@example.com",
            "website_url": "http://example.hiveage.com",
            "logo_url": "https://s3.amazonaws.com/hiveage-production/defaults/default_business-128x128.png",
            "address": "941 Example Ave. #5 ",
            "address_2": null,
            "full_address": "Tester\n941 Example Ave. #5\nLong Beach CA 90813\nUnited States",
            "city": "Long Beach",
            "state_name": "CA",
            "zip_code": "90813",
            "country": "United States",
            "country_code": null,
            "primary_contact_first_name": "John",
            "primary_contact_last_name": "Roe",
            "language": "en-us",
            "language_name": "English (US)",
            "currency": "usd",
            "currency_iso_code": "USD",
            "currency_symbol": "$",
            "allow_statement_view": true,
            "created_at": "2020-04-28T17:35:45Z",
            "updated_at": "2020-04-28T17:35:45Z",
            "name": "Tester",
            "phone": "562-556-5555",
            "fax": "562-381-5555",
            "method": "list all connection"
        }
```

## Retrieve a Connection

This retrieves the details of an existing Connection. You need to supply only the hash_key that was returned.

Required Parameters : Hash Key

Usage : 
```js
    let hashKey = "XXXXXXXXX"
    hiveage.retriveConnection(hashKey)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update a Connection

Updating an existing connection requires hash_key and other parameters. Returns the updated Connection.

Required Parameters : Hash Key , Data

Usage:
```js
    let hashKey = "XXXXXXXXX"
    hiveage.updateConnection(hashKey,
        {
            "network": {
                "name": "Axios Tester"
            }
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```

## Delete a Connection

A deleted Connection is moved to the Trash. Once deleted, it is no longer possible to create new statements (invoices, estimates etc.) for that Connection.

Required Parameters : Hash Key

Usage:
```js
    let hashKey = "XXXXXXXXX"
      hiveage.deleteConnection(hashKey).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```
## List all Connections

Returns a list of your connections, sorted alphabetically.
The results will be paginated. You can use the params object to traverse the results.

Required Parameters : Params

Usage:
```js
    hiveage.listAllConnections({}).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```

## Invoice Activities

Returns a list of associated invoices, sorted by date and created_at.
The results will be paginated. You can use the params object to traverse the results.

Required Parameters : Hash Key , Params

Usage:
```js
    let hashKey = "XXXXXXXXX"
    hiveage.invoiceActivities(hashKey).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
```

## Estimate Activities

Returns a list of associated estimates, sorted by created_at.
The results will be paginated. You can use the params object to traverse the results.

Required Parameters : Hash Key , Params

Usage:
```js
    let hashKey = "XXXXXXXXX"
    hiveage.estimateActivities(hashKey).then(response => {
      console.log(response)
    })
```
## Recurring Invoice Activities

Returns a list of associated recurring invoices, sorted by created_at.The results will be paginated. You can use the params object to traverse the results.

Required Parameters : Hash Key , Params

Usage:
```js
    let hashKey = "XXXXXXXXX"
    hiveage.recurringInvoice(hashKey).then(response => {
        console.log(response)
    })
```

