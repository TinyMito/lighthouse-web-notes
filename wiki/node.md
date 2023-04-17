## Node Methods
#### Passing arguments from node command line
```
process.argv.slice(2)
```

#### Event Handling User Input
`stdin` = standard input

`stdout` = standard output

`on` returns immediately, without running the callback code.

```javascript
// on any input from stdin (standard input), output a "." to stdout
process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback');
```
![Node Input Output](Node_User_input_with_callbacks.png)

#### If a process hangs, you can kill the process
```javascript
// \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
```

#### Alternative to console.log
Instead of using `console.log` that will adds `\n` each output loop. We can use node to output in single line.
```javascript
process.stdout.write
```

To fix the end output of `stdout`
```
setTimeout(() => {console.log();}, delay);
```