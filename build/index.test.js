'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var movie = new _2.default();

test('says hello', function () {
  return expect(movie.hello()).toBe("hello world");
});