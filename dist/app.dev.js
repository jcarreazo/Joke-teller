"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VoiceRSS = _interopRequireDefault(require("./VoiceRSS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var button = document.getElementById('button');
var audioElement = document.getElementById('audio');
var jokeSource;

function test(apikey, word) {
  try {
    _VoiceRSS["default"].speech({
      key: apikey,
      src: word,
      hl: 'en-us',
      v: 'Linda',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
    });
  } catch (error) {
    console.log(error);
  }
} // Get jokes fetching from the API


function getJokes() {
  var joke, apiURL, response, data, e;
  return regeneratorRuntime.async(function getJokes$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          joke = '';
          apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(apiURL));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;

          if (data.setup) {
            joke = "".concat(data.setup, " ... ").concat(data.delivery);
          } else {
            joke = data.joke;
          }

          test("ebe27db905e44cbe92e4e55695e1bff1", joke);
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);
          //Catch error
          e = new Error(_context.t0);
          console.log(e);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 13]]);
}

getJokes();
var _default = audioElement;
exports["default"] = _default;