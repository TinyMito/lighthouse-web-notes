# Recursion
### Alternative to traditional loops.

Traditional Loop
```javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```

Recursion calling back to the its' function until the condition is **falsey**.
```javascript
function countEvenToTwelve(number) {
  if (number <= 12) {
    console.log(number);
    countEvenToTwelve(number+2);
  }
}
countEvenToTwelve(0);
```