# Week 5 Notes
## Promise
The `Promise()` is a built-in function to handle async callback in a more readable format. 

Example of Async Callback Hell.
```javascript
asyncFunc1(function(result1) {
  asyncFunc2(result1, function(result2) {
    asyncFunc3(result2, function(result3) {
      asyncFunc4(result3, function(result4) {
        // Do something with result4
      });
    });
  });
});
```

Example after using Promise() in place.
```javascript
asyncFunc1()
  .then(function(result1) {
    return asyncFunc2(result1);
  })
  .then(function(result2) {
    return asyncFunc3(result2);
  })
  .then(function(result3) {
    return asyncFunc4(result3);
  })
  .then(function(result4) {
    // Do something with result4
  })
  .catch(function(error) {
    // Handle errors
  });
```

The `.then` will run if the there are no error in the Promise() scope and if there is an error the `.catch` will be triggered.


Please see more [here](promise.md)...

## Working with a JS server

```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Hello, client!\r\n');
  socket.end();
});

server.listen(3000);
```

```javascript
const net = require('net');

const HOST = '127.0.0.1';
const PORT = 3000;

const client = new net.Socket();

client.connect(PORT, HOST, () => {
  console.log('Connected to server');
  client.write('Hello, server!\r\n');
});

client.on('data', (data) => {
  console.log(`Received data: ${data}`);
  client.destroy();
});

client.on('close', () => {
  console.log('Connection closed');
});
```


## Working with API

## Working with JSON

