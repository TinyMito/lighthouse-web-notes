# Net
### Server
~working in progress~

```javascript
const net = require('net');

const server = net.createServer((socket) => {
  socket.write('Hello, client!\r\n');
  socket.end();
});

server.listen(3000);
```

### Client
~working in progress~
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