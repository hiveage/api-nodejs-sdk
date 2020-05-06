# Usage of Task API call functions

You can save items for reuse in statements.

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api)

## Table of content
- [Create a New Item](#create-a-new-item) 
- [Retrieve an Item](#retrieve-an-item) 
- [Update an Item](#update-an-item) 
- [List All items](#list-all-items) 
- [Delete an Item](#delete-an-item)

## Create a New Item

Creates a New Item for reuse in statements.

Required Parameters : Hash Key, Data

Usage : 

```js
    hiveage.createItem({
        item_category: {
            name: 'My Item',
            price: '150.00',
            formatted_price: '150.00',
            description: 'This is a sample item',
            unit: 'hourly',
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        
```
Response :
```js
    {
        item_category: {
            id: 444444,
            name: 'My Item',
            price: '150.00',
            formatted_price: '150.00',
            description: 'This is a sample item',
            unit: 'hourly',
            created_at: '2020-05-01T14:44:37+10:00'
        }
    }
```

## Retrieve an Item

Retrieve an item object with a specified id.

Required Parameters : Hash Key, ID

Usage : 
```js
    let id = XXXXXX
    hiveage.retriveItem(id).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Update an Item

Update a saved item. 

Required Parameters : ID, Data

Usage:
```js
    let id = XXXXXX
    hiveage.updateItem(id, {
        item_category: {
            name: 'Updated Item'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## List All items

Returns a list of items. The items are returned sorted alphabetically.
The results will be paginated. You can use the following optional params object to traverse the results.

Required Parameters : Params

Usage:
```js
    hiveage.listAllItems(Params).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```

## Delete an Item

Deleting an item object permanently.

Required Parameters : ID

Usage:
```js
    let id = XXXXXX
    hiveage.deleteItem(id).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
```