# Usage of Expenses API call functions

You can save expense categories for reuse in statements.

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api)

## Table of content
- [Create a New Expense](#create-a-new-expense)
- [Retrieve an Expense](#retrieve-an-expense) 
- [Update an Expense](#update-an-expense) 
- [List All Expenses](#list-all-expenses) 
- [Delete an Expense](#delete-an-expense)

## Create a New Expense

You can create a new Expense.

Required Parameters : Data

Usage : 

```js
    hiveage.createExpense({
        "expense_category": {
            "name": "Travelling Test",
            "formatted_price": "150.00",
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
        "expense_category": {
            "id": 13,
            "name": "Travelling Test",
            "formatted_price": "150.00",
            "created_at": "2014-07-21T11:04:58Z"
        }
    }
```

## Retrieve an Expense

Retrieve an expense object with a specified ID.

Required Parameters : id

Usage : 
```js
    let id = "XXXX"
    hiveage.retriveExpense(id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update an Expense

Update an expense category.

Required Parameters : id, Data

Usage:
```js
    let id = "XXXX"
    hiveage.updateExpense(id,{
            "expense_category": {
                "name": "Update expense"
            }
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```


## List All Expenses

Return list of expenses. The items are returned sorted alphabetically.
The results will be paginated.

Required Parameters : Params

Usage:
```js
    let params = { 
        per_page:20, 
        page:1, 
        order:asc 
    }
    hiveage.listAllExpenses(Params).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```

## Delete an Expense

Deleting an expense object permanently.

Required Parameters : id

Usage:
```js
    let id = "XXXX"
      hiveage.deleteExpense(id).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```