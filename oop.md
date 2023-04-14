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

### Methods and Properties
#### Example Blueprint Class
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

#### Class DRY Code
```javascript
class Blueprint {
  constructor(key1, key2) {
    this.key = ['property'];
    this.key1 = key1;
    this.key2 = key2;
  }

  addProperty(data) {
    this.key.push(data);
  }
}

let copy1 = new Blueprint('key1Data', 'key2Data');    
// Create a copy of the Blueprint with predefined data.
```

#### Inheritance
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
    super(); // Call the constructor of the parent class first
    this.key3 = ['propertyB'];
  }
}

let copy1 = new printA();

copy1.addProperty(); // Call the method (trigger)
console.log(copy1) // printA { key: [ 'property' ], key3: [ 'propertyA' ] }

let copy2 = new printB();
console.log(copy2) // printB { key: [ 'property' ], key3: [ 'propertyB' ] }
```