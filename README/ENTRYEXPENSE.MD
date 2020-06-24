# Usage of Expenses API call functions

You can save create EntryExpense for reuse in statements.

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api)

## Table of content
- [Create a New ExpenseEntry](#create-a-new-expenseentry)
- [Retrieve an ExpenseEntry](#retrieve-an-expenseentry) 
- [Update an ExpenseEntry](#update-an-expenseentry) 
- [List All ExpensesEntries](#list-all-expensesentries) 
- [Delete an ExpenseEntry](#delete-an-expenseentry)

## Create a New ExpenseEntry

You can create a new ExpenseEntry.

Required Parameters : Data

Usage : 

```js
    hiveage.createEntryExpense({
        "expense_entry": {
            "description": "test mock",
            "date": "2016-08-12",
            "amount": "80.0",
            "expense_category_id": 225604
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
        expense_entry: 
        {
            id: 62529,
            description: "test mock",
            date: "2016-08-12",
            amount: "8.0",
            formatted_amount: "8.00",
            currency: "USD",
            state: "unbilled",
            updated_at: "2020-06-19T12:46:57Z",
            created_at: "2020-06-19T12:46:57Z",
            expense_category: {
            id: 225604,
            name: "Houses",
            rate: "0.0"
            },
            connection: null,
            user: {
            id: 63767,
            name: "Kevin Von",
            email: "kevin@vesess.com"
            },
            uploads: [],
            taggings: []
        }
    }
```

## Retrieve an ExpenseEntry

Retrieve an expenseentry object with a specified ID.

Required Parameters : id

Usage : 
```js
    let id = "XXXX"
    hiveage.retriveEntryExpense(id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update an ExpenseEntry

Update an expenseEntry.

Required Parameters : id, Data

Usage:
```js
    let id = "XXXX"
    hiveage.updateEntryExpense(id,{
            "expense_category": {
                "name": "Update expense"
            }
        }).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```


## List All ExpensesEntries

Return list of expensesEntries. The items are returned sorted alphabetically.
The results will be paginated.

Required Parameters : Params

Usage:
```js
    hiveage.listAllEntryExpense(Params).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```

## Delete an ExpenseEntry

Deleting an expenseEntry object permanently.

Required Parameters : id

Usage:
```js
    let id = "XXXX"
      hiveage.deleteEntryExpense(id).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```