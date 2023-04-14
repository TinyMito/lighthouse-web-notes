# Object Oriented Programming
### OOP
Function inside the object and the use of `this`.
```javascript
const object = {
  key1: 'property1',
  callKey: function() {
    console.log(`Calling this key1: ${this.key1}`);
  }
}
object.callKey(); // Calling this key1: property1
```