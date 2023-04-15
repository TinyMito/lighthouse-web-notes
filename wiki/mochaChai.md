# Mocha and Chai
### Library
Every test JavaScript file requires an assertion library.
```javascript
const assert = require('chai').assert;
```

Here is equivalent to `console.log()` with expected result.
```javascript
describe("Title", () => {
  it("Description", () => {
    assert.strictEqual(data, result);
  });
});
```
### Assertion Methods
`assert.strictEqual(data, expected)`

`assert.notStrictEqual(data, expected)`

`assert.ok(data)`

`assert.notOk(data)`

`assert.isTrue(data)`

`assert.isFalse(data)`

`assert.isNull(data)`

`assert.isNotNull(data)`

`assert.isUndefined(data)`

`assert.isDefined(data)`