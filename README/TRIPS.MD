# Usage of Trips API call functions

Trips can be created according to purpose and apply their operations

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.client or vendor by creating a new Connection.com/api/)

## Table of content
- [Create a new Trip](#create-a-new-trip) 
- [Retrieve a Trip](#retrieve-a-trip) 
- [Update a Trip](#update-a-trip) 
- [Delete a Trip](#delete-a-trip)
- [List all Trips](#list-all-trips)

## Create a new Trip

You can create a new Trip.

Required Parameters : Data

Usage : 

```js
    hiveage.createTrip({
        "trip_category": {
            "id": 12,
            "name": "Travelling",
            "rate": "10.0",
            "formatted_rate": "10.00",
            "created_at": "2014-07-21T11:04:58Z"
        }
    }).then((response) => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```
Response :
```js
    {
        "trip_category": {
            "id": 12,
            "name": "Travelling",
            "rate": "10.0",
            "formatted_rate": "10.00",
            "created_at": "2014-07-21T11:04:58Z"
        }
```

## Retrieve a Trip

This retrieves the details of an existing Trip. You need to supply the id that was returned.

Required Parameters : id

Usage : 
```js
    let id = "XXXX"
    hiveage.retriveTrip(id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update a Trip

Updating an existing Trip requires id and other parameters. Returns the updated Task.

Required Parameters : id, Data

Usage:
```js
    let id = "XXXX"
    hiveage.updateTrip(id,{
            "trip_category": {
                "name": "Travelling",
            }
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```

## Delete a Trip

A deleted Trip is moved to the Trash.

Required Parameters : id

Usage:
```js
    let id = "XXXX"
      hiveage.deleteTrip(id).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```
## List all Trips

Returns a list of your Trips, sorted alphabetically.
The results will be paginated.

Required Parameters : null

Usage:
```js
    hiveage.listAllTrips().then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```


