"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VoiceRSS = {
  speech: function speech(e) {
    this._validate(e), this._request(e);
  },
  _validate: function _validate(e) {
    if (!e) throw "The settings are undefined";
    if (!e.key) throw "The API key is undefined";
    if (!e.src) throw "The text is undefined";
    if (!e.hl) throw "The language is undefined";

    if (e.c && "auto" != e.c.toLowerCase()) {
      var a = !1;

      switch (e.c.toLowerCase()) {
        case "mp3":
          a = new Audio().canPlayType("audio/mpeg").replace("no", "");
          break;

        case "wav":
          a = new Audio().canPlayType("audio/wav").replace("no", "");
          break;

        case "aac":
          a = new Audio().canPlayType("audio/aac").replace("no", "");
          break;

        case "ogg":
          a = new Audio().canPlayType("audio/ogg").replace("no", "");
          break;

        case "caf":
          a = new Audio().canPlayType("audio/x-caf").replace("no", "");
      }

      if (!a) throw "The browser does not support the audio codec " + e.c;
    }
  },
  _request: function _request(e) {
    var a = this._buildRequest(e),
        t = this._getXHR();

    t.onreadystatechange = function () {
      if (4 == t.readyState && 200 == t.status) {
        if (0 == t.responseText.indexOf("ERROR")) throw t.responseText;
        _app["default"].src = t.responseText;

        _app["default"].play();
      }
    }, t.open("POST", "https://api.voicerss.org/", !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.send(a);
  },
  _buildRequest: function _buildRequest(e) {
    var a = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec();
    return "key=" + (e.key || "") + "&src=" + (e.src || "") + "&hl=" + (e.hl || "") + "&v=" + (e.v || "") + "&r=" + (e.r || "") + "&c=" + (a || "") + "&f=" + (e.f || "") + "&ssml=" + (e.ssml || "") + "&b64=true";
  },
  _detectCodec: function _detectCodec() {
    var e = new Audio();
    return e.canPlayType("audio/mpeg").replace("no", "") ? "mp3" : e.canPlayType("audio/wav").replace("no", "") ? "wav" : e.canPlayType("audio/aac").replace("no", "") ? "aac" : e.canPlayType("audio/ogg").replace("no", "") ? "ogg" : e.canPlayType("audio/x-caf").replace("no", "") ? "caf" : "";
  },
  _getXHR: function _getXHR() {
    try {
      return new XMLHttpRequest();
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml3.XMLHTTP");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {}

    try {
      return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {}

    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}

    throw "The browser does not support HTTP request";
  }
};
var _default = VoiceRSS;
exports["default"] = _default;