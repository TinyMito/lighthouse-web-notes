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

### Class
Please note to capitalize the class name!
```javascript
class Blueprint {

}

let copy1 = new blueprint();
let copy2 = new blueprint();
```

## Methods and Properties
### Example Blueprint Class
Class will reduce the needs of duplicating the same code.
```javascript
class Blueprint {
  constructor() {
    // This is a method
    this.key = ['property'];
  }

  addProperty(data) {
    // This is a method
    this.key.push(data);
  }
}

let copy1 = new Blueprint();    // Create a copy of the Blueprint
copy1.addProperty('property2'); // Call function

console.log(copy1);             // Blueprint { key: [ 'property', 'property2' ] }
console.log(copy1.key);         // [ 'property', 'property2' ]
```

### Class DRY Code
Class is undefined in the beginning (without hard coded values).
```javascript
class Blueprint {
  constructor(key1, key2) {
    this.key = key1;
    this.key2 = key2;
  }
}

let copy1 = new Blueprint('key1Data', 'key2Data');    
```

## Inheritance
### Example 1
Another example how `super.item()` access the superclass.
```javascript
class Blueprint {
  constructor(a) {
    this.key = a;
  }
  item() { // 3
    return `the key is ${this.key}`; // 4
  }
}

class box extends Blueprint {
  item() {
    return `In the box, ${super.item()}.`; // 2
  }
}

const box1 = new box(`Cat`); // 1

console.log(box1.item()) // In the box, the key is Cat.
```

### Example 2
Additional there is a `super()` in subclass's constructor to add or overwrite the superclass's constructor entire.
```javascript
class Blueprint {
  constructor() {
    this.key = ['property'];
  }
}

class printA extends Blueprint { // It includes from Blueprint objects
  addProperty() {
    this.key3 = ['propertyA'];
  }
}

class printB extends Blueprint {
  constructor() { // Has a constructor!
    super(); // Within the constructor to add or overwrite the superclass
    this.key3 = ['propertyB'];
  }
}

let copy1 = new printA();

copy1.addProperty(); // Call the method (trigger)
console.log(copy1) // printA { key: [ 'property' ], key3: [ 'propertyA' ] }

let copy2 = new printB();
console.log(copy2); // printB { key: [ 'property' ], key3: [ 'propertyB' ]
```