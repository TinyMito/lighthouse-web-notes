# Week 4 Notes
### Asynchronous Concepts
JavaScript engine code runs line by line and some code can end up blocking the process for the next function to run. The solution is to code in a way for it to multitask.

JavaScript has a few parts that work together to facilitate multitasking: the `Call Stack`, the `Web APIs`, the `Callback Queue`, and then the `Event Loop`.

### Order of Execution

To set a timer for the function to execute in later timeline.
```javascript
setTimeout(function() {
  // Code here
}, 1000);
```
[Example](function.md#delays)

### Asynchronous Functions
How asynchronous functions might be used include:

- Making a network API request
- Connecting to a chat server
- Anything that takes time and where we want users to know that the code is still running, like showing a basic loading animation

[Example](asynchronous.md)

## Object Oriented Javascript
### Super
- Overriding methods in subclasses to change their behaviour. Sometimes this is all you need, but other times we end up repeating some things in the overriding methods. That brings us to point 2 below.
- Using `super` in the overriding methods in order to avoid repeating code that's already present in the superclass.

[Example](oop.md#inheritance)

### Getters and Setters
Two main reasons to use getters and setters:
- Validating data before assigning it to a property
- Computing a value on the fly instead of simply pulling it out of a property

[Example](oop.md#getters--setters)

## OOP Best Practices
- Reduce duplicated code (reusability)
- Breaking code up into sensibly-divided units (modularity)

### Abstraction
Abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level.

### Private Properties
Add an `_` underscore prefix at least we know this property is private and cannot be access from outside directly.
```javascript
this._property.push(item);
```

### Single Responsibility Principle
Object has to be broken up into more objects that all just do one thing. If something need to change in code, it will not affect the all the objects in Task class.

###### Before
```javascript
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
  sendNotification() {
    // Send a notification to the user that their task is complete
  }
  saveToDatabase() {
    // Save this task to the database
  }
}
```

###### After
```javascript
// Manage the state of a task
class Task {
  complete() {
    // Mark this task as complete
  }
}

class NotificationManager {
  sendNotification(task) {
    // Send a notification to the user that their task is complete
  }
}

class DatabaseManager {
  saveToDatabase(task) {
    // Save this task to the database
  }
}
```

## Quiz Notes

##### When should you use the super keyword?
> Use super when overriding methods in order to execute the superclass's version of the method
