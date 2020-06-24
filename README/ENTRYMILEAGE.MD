# Usage of Expenses API call functions

You can save createEntryMileage for reuse in statements.

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api)

## Table of content
- [Create a New MileageEntry](#create-a-new-mileageentry)
- [Retrieve a MileageEntry](#retrieve-a-mileageentry) 
- [Update a MileageEntry](#update-a-mileageentry) 
- [List All MileageEntries](#list-all-mileageentries) 
- [Delete a MileageEntry](#delete-a-mileageentry)

## Create a New MileageEntry

You can create a new ExpenseEntry.

Required Parameters : Data

Usage : 

```js
    hiveage.createEntryMileage({
        "mileage_entry": {
            "description": "test mileage mock",
            "date": "2016-08-12",
            "mileage_unit": "km",
            "distance": 40,
            "trip_category_id": 132299,
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
        "mileage_entry": {
            "id": 2540,
            "description": "test mileage mock",
            "date": "2016-08-12",
            "distance": "40.0",
            "formatted_distance": "40.00",
            "mileage_unit": "mi",
            "state": "unbilled",
            "updated_at": "2020-06-22T04:12:31Z",
            "created_at": "2020-06-22T04:09:56Z",
            "trip_category": {
                "id": 132299,
                "name": "My Trip",
                "rate": "45.0"
            },
            "connection": null,
            "user": {
                "id": 63767,
                "name": "Johne fero",
                "email": "Johne@vesess.com"
            },
            "uploads": [],
            "taggings": []
        } 
    }
```

## Retrieve a MileageEntry

Retrieve an mileageEntry object with a specified ID.

Required Parameters : id

Usage : 
```js
    let id = "XXXX"
    hiveage.retriveEntryMileage(id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update a MileageEntry

Update an mileageEntry.

Required Parameters : id, Data

Usage:
```js
    let id = "XXXX"
    hiveage.updateEntryMileage(id,{
            "mileage_entry": {
                "description": "Update test mileage mock"
            }
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```


## List All MileageEntries

Return list of mileageEntries. The items are returned sorted alphabetically.
The results will be paginated.

Required Parameters : Params

Usage:
```js
    hiveage.listAllEntryMileage(Params).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```

## Delete a MileageEntry

Deleting an mileageEntry object permanently.

Required Parameters : id

Usage:
```js
    let id = "XXXX"
      hiveage.deleteEntryMileage(id).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```