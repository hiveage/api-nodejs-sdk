# Usage of Task API call functions

Task can be created according to purpose and apply their operations

Please refer Hiveage API for more details : [Hiveage API](https://www.hiveage.com/api)

## Table of content
- [Create a new Task](#create-a-new-task) 
- [Retrieve a Task](#retrieve-a-task) 
- [Update a Task](#update-a-task) 
- [List all Task](#list-all-task)
- [Delete a Task](#delete-a-task)

## Create a new Task

You can create a new Task.

Required Parameters : has key,Data

Usage : 

```js
    hiveage.createTask({
            "task_category": {
                "name": "Development",
                "rate": "10.0",
                "formatted_rate": "10.00",
                "created_at": "2014-07-21T11:04:58Z"
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
            "task_category": {
                "id": 12,
                "name": "Development",
                "rate": "10.0",
                "formatted_rate": "10.00",
                "created_at": "2014-07-21T11:04:58Z"
            }
    }
```

## Retrieve a Task

This retrieves the details of an existing Payment. You need to supply the hash_key and id that was returned.

Required Parameters : Hash Key,id

Usage : 
```js
    let id = "XXXX"
    hiveage.retriveTask(id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
```

## Update a Task

Updating an existing Task requires id and other parameters. Returns the updated Task.

Required Parameters : id, Data

Usage:
```js
    let id = "XXXX"
    hiveage.updatePayment(id,{
            "task_category": {
                "name": "Development",
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
```

## Delete a Task

A deleted Task is moved to the Trash.

Required Parameters : id

Usage:
```js
    let id = "XXXX"
      hiveage.deleteTask(id).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
```
## List all Task

Returns a list of your Tasks, sorted alphabetically.
The results will be paginated.

Required Parameters : Params

Usage:
```js
    hiveage.listAllTasks(Params).then(response => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    })
```
