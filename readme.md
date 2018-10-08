# Coverage is a lie

Any of the tests on `spec/index.spec.js` will pass, and cause a 100% execution, even if they are useless.

## How to execute

1. Download or clone the repo
2. Open the console on the root of the project and run `npm i`
3. Wait until finished and run `npm test`

You can execute only one of the tests using `fit` like so:

```javascript
fit('is a non sense test', function() {
```