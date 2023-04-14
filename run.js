const object = {
  key1: 'property1',
  callKey: function() {
    console.log(`Calling this key1: ${this.key1}`);
  }
}
object.callKey();