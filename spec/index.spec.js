const demo = require('../index');

describe("Fake coverage", function() {
  it('is and incorrect test', function() {
    // This input will cause a NaN result, but we are only checking that the result is not a string
    const badArray = ['1', '3', 'L'];
    expect(demo.addStringified(badArray)).not.toBe(jasmine.any(String));
  });
  it('is a non sense test', function() {
    // This will execute correctly, but we are not checking that the sum is correct
    const goodArray = ['1', '3', '2'];

    expect(demo.addStringified(goodArray)).toBeDefined();
  });
  it('just dont expect anything', function() {
    demo.addStringified(['1', '2']);
  });
});