"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = require('node-fetch');

var imdbMovies = function () {
	function imdbMovies() {
		(0, _classCallCheck3.default)(this, imdbMovies);
	}

	(0, _createClass3.default)(imdbMovies, [{
		key: "fetchImdbMovie",
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(endpoint) {
				var url, response, json;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								url = "https://www.omdbapi.com" + endpoint;
								_context.next = 3;
								return fetch(url);

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
			var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(title) {
				var season = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var episode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var Season, Episode, movie;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
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
			var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id) {
				var season = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var episode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var Season, Episode, movie;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
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
	}, {
		key: "hello",
		value: function hello() {
			return 'hello world';
		}
	}]);
	return imdbMovies;
}();

module.exports = imdbMovies;