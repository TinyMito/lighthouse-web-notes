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
See more [here](function.md#delays)

### Asynchronous Functions
How asynchronous functions might be used include:

- Making a network API request
- Connecting to a chat server
- Anything that takes time and where we want users to know that the code is still running, like showing a basic loading animation

See more [here](asynchronous.md)

## Quiz Notes

##### Questions
> Answer