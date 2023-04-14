const myFirst = function(a, b) {
  // Code stuff here
  console.log(a)
  b();
}

const mySecond = function() {
  console.log('Hi back to you!');
}

myFirst('Hello World', mySecond);