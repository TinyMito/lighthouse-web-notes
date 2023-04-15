# NPM Setup
### Login
Command to login into NPM from the terminal.
```javascript
npm login
```

### Update README.md
```markdown
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description
```

### Update package.json
Change the `"name"` to `@username/lotide` in our package.json file.

Specify valid `"description"` and `"author"` fields.

Set the `"version"` to `"1.0.0"` if it's not already set.

### Publish
It will asks for 2FA code if you have one setup. Just remember, increment the version number.
```
npm publish
```