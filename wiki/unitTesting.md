# Unit Testing
### Setup with Mocha and Chai

1. We initial the current directory.
```javascript
npm init
```

2. Install Mocha & Chai
```javascript
npm install mocha@9.2.2 chai --save-dev
```

3. Edit the `package.json` file and add the mocha line.
```javascript
"scripts": {
  "test": "./node_modules/mocha/bin/mocha"
},
```
> Alternative
> ```javascript
> "scripts": {
>   "test": "mocha"
> },
> ```

4. Import `chai` code at the top
```javascript
const assert = require('chai').assert;
```

5. To run the test
```javascript
npm test
```
> Alternative
> ```javascript
> npm test test/test_palindromes.js
> ```