webpackHotUpdate(5,{

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.downloadImages = exports.searchImages = exports.inputChange = exports.reducer = undefined;

var _assign = __webpack_require__(112);

var _assign2 = _interopRequireDefault(_assign);

var _redux = __webpack_require__(553);

var _reduxThunk = __webpack_require__(628);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(629);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  text: 'Random',
  images: [],
  length: 0,
  display: false
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === "SEARCH") {
    return (0, _assign2.default)({}, state, { text: action.text, images: action.images, length: action.length, display: action.display });
  } else if (action.type === "SEARCH_WORD") {
    return (0, _assign2.default)({}, state, { text: action.text, display: action.display });
  }
  return state;
};

// ACTIONS
var inputChange = exports.inputChange = function inputChange(text) {
  return function (dispatch) {
    return dispatch({ type: 'SEARCH_WORD', text: text, display: false });
  };
};

var searchImages = exports.searchImages = function searchImages(text) {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:8000/search/' + text).then(function (response) {
      var display = response.data.images.length > 0 ? true : false;
      dispatch({ type: 'SEARCH', text: text, display: display, images: response.data.images, length: response.data.images.length });
    });
  };
};

var downloadImages = exports.downloadImages = function downloadImages(text) {
  return function (dispatch) {
    return _axios2.default.get('http://localhost:8000/download/?name=' + text).then(function (response) {
      dispatch({ type: 'SEARCH', text: 'Downloading' });
    });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/store.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ZTZlMWYyNWQ5ZWYwZjVlNmE4My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/YzE4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHRleHQ6ICdSYW5kb20nLFxuICBpbWFnZXM6IFtdLFxuICBsZW5ndGg6IDAsXG4gIGRpc3BsYXk6IGZhbHNlXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24gKSA9PiB7XG4gIGlmKGFjdGlvbi50eXBlID09PSBcIlNFQVJDSFwiKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHRleHQ6IGFjdGlvbi50ZXh0LCBpbWFnZXM6IGFjdGlvbi5pbWFnZXMsIGxlbmd0aDogYWN0aW9uLmxlbmd0aCwgZGlzcGxheTogYWN0aW9uLmRpc3BsYXkgfSlcbiAgfSBlbHNlIGlmKGFjdGlvbi50eXBlID09PSBcIlNFQVJDSF9XT1JEXCIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdGV4dDogYWN0aW9uLnRleHQsIGRpc3BsYXk6IGFjdGlvbi5kaXNwbGF5IH0pXG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5cbi8vIEFDVElPTlNcbmV4cG9ydCBjb25zdCBpbnB1dENoYW5nZSA9IHRleHQgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggKHsgdHlwZTogJ1NFQVJDSF9XT1JEJywgdGV4dCwgZGlzcGxheTogZmFsc2UgfSlcbn1cblxuZXhwb3J0IGNvbnN0IHNlYXJjaEltYWdlcyA9IHRleHQgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvc2VhcmNoLyR7dGV4dH1gKVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgY29uc3QgZGlzcGxheSA9IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2VcbiAgICBkaXNwYXRjaCAoeyB0eXBlOiAnU0VBUkNIJywgdGV4dCwgZGlzcGxheSwgaW1hZ2VzOiByZXNwb25zZS5kYXRhLmltYWdlcywgbGVuZ3RoOiByZXNwb25zZS5kYXRhLmltYWdlcy5sZW5ndGh9KVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZG93bmxvYWRJbWFnZXMgPSAodGV4dCkgPT4gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvZG93bmxvYWQvP25hbWU9JHt0ZXh0fWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBkaXNwYXRjaCAoeyB0eXBlOiAnU0VBUkNIJywgdGV4dDogJ0Rvd25sb2FkaW5nJyB9KVxuICB9KVxufVxuXG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdhcmUpKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFQQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9