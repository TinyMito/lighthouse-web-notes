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
See more [here](function.md#delays)...

### Asynchronous Functions
How asynchronous functions might be used include:

- Making a network API request
- Connecting to a chat server
- Anything that takes time and where we want users to know that the code is still running, like showing a basic loading animation

See more [here](asynchronous.md)...

## Object Oriented Javascript
### Super
- Overriding methods in subclasses to change their behaviour. Sometimes this is all you need, but other times we end up repeating some things in the overriding methods. That brings us to point 2 below.
- Using `super` in the overriding methods in order to avoid repeating code that's already present in the superclass.

See more [here](oop.md#inheritance)...

### Getters and Setters
Two main reasons to use getters and setters:
- Validating data before assigning it to a property
- Computing a value on the fly instead of simply pulling it out of a property

See more [here](oop.md#getters--setters)...