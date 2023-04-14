class Blueprint {
  constructor(a) {
    this.key = a;
  }
  item() {
    return `the key is ${this.key}`;
  }
}

class box extends Blueprint { // It includes from Blueprint objects
  item() {
    return `In the box, ${super.item()}.`;
  }
}

const box1 = new box(`Cat`);

console.log(box1.item()) // 