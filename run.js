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
  constructor() {
    super(); // Call the constructor of the parent class first
    this.key3 = ['propertyB'];
  }
}

let copy1 = new printA();
let copy2 = new printB();
copy1.addProperty(); // Call the method (trigger)
console.log(copy1) // printA { key: [ 'property' ], key3: [ 'propertyA' ] }
console.log(copy2) // printA { key: [ 'property' ], key3: [ 'propertyA' ] }