"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imdbMovies = function () {
	function imdbMovies() {
		_classCallCheck(this, imdbMovies);
	}

	_createClass(imdbMovies, [{
		key: "fetchImdbMovie",
		value: function () {
			var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(endpoint) {
				var url, response, json;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								url = "https://www.omdbapi.com" + endpoint;
								_context.next = 3;
								return (0, _nodeFetch2.default)(url);

							case 3:
								response = _context.sent;
								_context.next = 6;
								return response.json();

							case 6:
								json = _context.sent;

								if (!(response.status !== 200)) {
									_context.next = 9;
									break;
								}

								throw Error(json.message);

							case 9:
								return _context.abrupt("return", json);

							case 10:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function fetchImdbMovie(_x) {
				return _ref.apply(this, arguments);
			}

			return fetchImdbMovie;
		}()
	}, {
		key: "getByTitle",
		value: function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(title) {
				var season = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var episode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var Season, Episode, movie;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (title) {
									_context2.next = 3;
									break;
								}

								console.error("title is required!");
								return _context2.abrupt("return");

							case 3:
								_context2.prev = 3;
								Season = season ? "&Season=" + season : "";
								Episode = episode ? "&Episode=" + episode : "";
								_context2.next = 8;
								return this.fetchImdbMovie("/?t=" + title + Season + Episode);

							case 8:
								movie = _context2.sent;

								console.log(movie);
								return _context2.abrupt("return", movie);

							case 13:
								_context2.prev = 13;
								_context2.t0 = _context2["catch"](3);

								console.error("Error: " + _context2.t0.message);

							case 16:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 13]]);
			}));

			function getByTitle(_x2) {
				return _ref2.apply(this, arguments);
			}

			return getByTitle;
		}()
	}, {
		key: "getById",
		value: function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id) {
				var season = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var episode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var Season, Episode, movie;
				return regeneratorRuntime.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								if (id) {
									_context3.next = 3;
									break;
								}

								console.error("id is required!");
								return _context3.abrupt("return");

							case 3:
								_context3.prev = 3;
								Season = season ? "&Season=" + season : "";
								Episode = episode ? "&Episode=" + episode : "";
								_context3.next = 8;
								return this.fetchImdbMovie("/?i=" + id + Season + Episode);

							case 8:
								movie = _context3.sent;

								console.log(movie);
								return _context3.abrupt("return", movie);

							case 13:
								_context3.prev = 13;
								_context3.t0 = _context3["catch"](3);

								console.error("Error: " + _context3.t0.message);

							case 16:
							case "end":
								return _context3.stop();
						}
					}
				}, _callee3, this, [[3, 13]]);
			}));

			function getById(_x5) {
				return _ref3.apply(this, arguments);
			}

			return getById;
		}()
	}]);

	return imdbMovies;
}();

exports.default = imdbMovies;