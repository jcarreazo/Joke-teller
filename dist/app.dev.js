"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _VoiceRSS = _interopRequireDefault(require("./VoiceRSS.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var button = document.getElementById('button');
var audioElement = document.getElementById('audio');

function test() {
  _VoiceRSS["default"].speech({
    key: 'ebe27db905e44cbe92e4e55695e1bff1',
    src: 'Hello, world!',
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

test();
var _default = audioElement;
exports["default"] = _default;