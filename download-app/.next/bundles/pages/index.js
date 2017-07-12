
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(591);


/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(592);

var _Header2 = _interopRequireDefault(_Header);

var _Download = __webpack_require__(627);

var _Download2 = _interopRequireDefault(_Download);

var _Images = __webpack_require__(648);

var _Images2 = _interopRequireDefault(_Images);

var _store = __webpack_require__(569);

var _nextReduxWrapper = __webpack_require__(649);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_Header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(_Download2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement(_Images2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }], [{
    key: 'getInitProps',
    value: function getInitProps(_ref) {
      var store = _ref.store;

      store.dispatch((0, _store.searchImages)());
      store.dispatch((0, _store.inputChange)());
      store.dispatch((0, _store.downloadImages)());
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null)(Index);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = __webpack_require__(563);

var _reactRedux = __webpack_require__(562);

var _redux = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Download free pic'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactBootstrap.Jumbotron, { style: { borderRadius: '15px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('h1', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Download Free Images'), _react2.default.createElement('p', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Download free images from ', _react2.default.createElement('a', { href: 'https://unsplash.com/', target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'unsplash.com')), _react2.default.createElement('p', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Just write the word, search and click download'), state.display ? _react2.default.createElement('p', { style: { textAlign: 'center' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'You\'ll download ' + state.length + ' pics of ' + state.text) : null)))));
    }
  }]);

  return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Header.js"); } } })();

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _store = __webpack_require__(569);

var _reactBootstrap = __webpack_require__(563);

var _reactRedux = __webpack_require__(562);

var _redux = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Download.js';


var Download = function (_Component) {
  (0, _inherits3.default)(Download, _Component);

  function Download() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Download);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Download.__proto__ || (0, _getPrototypeOf2.default)(Download)).call.apply(_ref, [this].concat(args))), _this), _this.searchImages = function (state) {
      _this.props.searchImages(state.text);
    }, _this.inputChange = function (e) {
      var text = e.target.value;
      _this.props.inputChange(text);
    }, _this.downloadImages = function (state) {
      _this.props.downloadImages(state.text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Download, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('form', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(_reactBootstrap.InputGroup, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_reactBootstrap.FormControl, { onChange: function onChange(e) {
          return _this2.inputChange(e);
        }, type: 'text', placeholder: 'Search photo', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_reactBootstrap.InputGroup.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', onClick: function onClick() {
          return _this2.searchImages(state);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-search', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), ' Search')))))), _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 3, lgOffset: 5, style: { paddingLeft: '40px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, state.length > 0 ? _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'success', onClick: function onClick() {
          return _this2.downloadImages(state);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-download', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), ' Download') : null))));
    }
  }]);

  return Download;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    searchImages: (0, _redux.bindActionCreators)(_store.searchImages, dispatch),
    inputChange: (0, _redux.bindActionCreators)(_store.inputChange, dispatch),
    downloadImages: (0, _redux.bindActionCreators)(_store.downloadImages, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Download);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Download.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Download.js"); } } })();

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

var _store = __webpack_require__(569);

var _reactBootstrap = __webpack_require__(563);

var _reactRedux = __webpack_require__(562);

var _redux = __webpack_require__(553);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Images.js';


var Images = function (_Component) {
  (0, _inherits3.default)(Images, _Component);

  function Images() {
    (0, _classCallCheck3.default)(this, Images);

    return (0, _possibleConstructorReturn3.default)(this, (Images.__proto__ || (0, _getPrototypeOf2.default)(Images)).apply(this, arguments));
  }

  (0, _createClass3.default)(Images, [{
    key: 'render',
    value: function render() {
      var state = this.props.state;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_reactBootstrap.Row, { style: { marginTop: '20px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, state.images.map(function (image) {
        return _react2.default.createElement(_reactBootstrap.Col, { lg: 4, key: image.key, style: { marginTop: '5px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, _react2.default.createElement('img', { src: image.image, style: { width: '310px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }));
      })))));
    }
  }]);

  return Images;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    state: state
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Images);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Images.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alejandroestrada/Documents/Code/proyectos/save-images/download-app/components/Images.js"); } } })();

/***/ })

},[590]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlLmpzP2ZhMTFmNmQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZmExMWY2ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz9mYTExZjZkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRG93bmxvYWQuanM/ZmExMWY2ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlcy5qcz9mYTExZjZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdGV4dDogJ1JhbmRvbScsXG4gIGltYWdlczogW10sXG4gIGxlbmd0aDogMCxcbiAgZGlzcGxheTogZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiApID0+IHtcbiAgaWYoYWN0aW9uLnR5cGUgPT09IFwiU0VBUkNIXCIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdGV4dDogYWN0aW9uLnRleHQsIGltYWdlczogYWN0aW9uLmltYWdlcywgbGVuZ3RoOiBhY3Rpb24ubGVuZ3RoLCBkaXNwbGF5OiBhY3Rpb24uZGlzcGxheSB9KVxuICB9IGVsc2UgaWYoYWN0aW9uLnR5cGUgPT09IFwiU0VBUkNIX1dPUkRcIikge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB0ZXh0OiBhY3Rpb24udGV4dCwgZGlzcGxheTogYWN0aW9uLmRpc3BsYXkgfSlcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cblxuLy8gQUNUSU9OU1xuZXhwb3J0IGNvbnN0IGlucHV0Q2hhbmdlID0gdGV4dCA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCAoeyB0eXBlOiAnU0VBUkNIX1dPUkQnLCB0ZXh0LCBkaXNwbGF5OiBmYWxzZSB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoSW1hZ2VzID0gdGV4dCA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9zZWFyY2gvJHt0ZXh0fWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBjb25zdCBkaXNwbGF5ID0gcmVzcG9uc2UuZGF0YS5pbWFnZXMubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZVxuICAgIGRpc3BhdGNoICh7IHR5cGU6ICdTRUFSQ0gnLCB0ZXh0LCBkaXNwbGF5LCBpbWFnZXM6IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLCBsZW5ndGg6IHJlc3BvbnNlLmRhdGEuaW1hZ2VzLmxlbmd0aH0pXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkb3dubG9hZEltYWdlcyA9ICh0ZXh0KSA9PiBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kb3dubG9hZC8/bmFtZT0ke3RleHR9YClcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGRpc3BhdGNoICh7IHR5cGU6ICdTRUFSQ0gnLCB0ZXh0OiAnRG93bmxvYWRpbmcnIH0pXG4gIH0pXG59XG5cblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9IChpbml0aWFsU3RhdGUgPSBpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IERvd25sb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvRG93bmxvYWQnXG5pbXBvcnQgSW1hZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VzJ1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBzZWFyY2hJbWFnZXMgLCBpbnB1dENoYW5nZSwgZG93bmxvYWRJbWFnZXN9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHN0YXRpYyBnZXRJbml0UHJvcHMgKHsgc3RvcmUgfSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKHNlYXJjaEltYWdlcygpKVxuICAgIHN0b3JlLmRpc3BhdGNoKGlucHV0Q2hhbmdlKCkpXG4gICAgc3RvcmUuZGlzcGF0Y2goZG93bmxvYWRJbWFnZXMoKSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8RG93bmxvYWQgLz5cbiAgICAgICAgPEltYWdlcyAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG51bGwpKEluZGV4KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDb2wsIFJvdywgSnVtYm90cm9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RG93bmxvYWQgZnJlZSBwaWM8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnIH19PlxuICAgICAgICAgICAgPENvbCBsZz17OH0gbGdPZmZzZXQ9ezJ9PlxuICAgICAgICAgICAgICA8SnVtYm90cm9uIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzE1cHgnIH19PlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRvd25sb2FkIEZyZWUgSW1hZ2VzPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkRvd25sb2FkIGZyZWUgaW1hZ2VzIGZyb20gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPnVuc3BsYXNoLmNvbTwvYT48L3A+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5KdXN0IHdyaXRlIHRoZSB3b3JkLCBzZWFyY2ggYW5kIGNsaWNrIGRvd25sb2FkPC9wPlxuICAgICAgICAgICAgICAgIHsgc3RhdGUuZGlzcGxheSA/IDxwIHN0eWxlPXt7ICB0ZXh0QWxpZ246ICdjZW50ZXInIH19PntgWW91J2xsIGRvd25sb2FkICR7c3RhdGUubGVuZ3RofSBwaWNzIG9mICR7c3RhdGUudGV4dH1gfTwvcD4gOiBudWxsIH0gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdGVcbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEhlYWRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgc2VhcmNoSW1hZ2VzLCBpbnB1dENoYW5nZSwgZG93bmxvYWRJbWFnZXN9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgQ29sLCBSb3csIEZvcm1Db250cm9sLCBCdXR0b24sIElucHV0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5cbmNsYXNzIERvd25sb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2VhcmNoSW1hZ2VzID0gKHN0YXRlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hJbWFnZXMoc3RhdGUudGV4dClcbiAgfVxuXG4gIGlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICB0aGlzLnByb3BzLmlucHV0Q2hhbmdlKHRleHQpXG4gIH1cblxuICBkb3dubG9hZEltYWdlcyA9IChzdGF0ZSkgPT4ge1xuICAgIHRoaXMucHJvcHMuZG93bmxvYWRJbWFnZXMoc3RhdGUudGV4dClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwL2xhdGVzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBsZ09mZnNldD17Mn0+XG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmlucHV0Q2hhbmdlKGUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHBob3RvXCIvPlxuICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5zZWFyY2hJbWFnZXMoc3RhdGUpfT48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj4gU2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdyBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cbiAgICAgICAgICAgIDxDb2wgbGc9ezN9IGxnT2Zmc2V0PXs1fSBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzQwcHgnIH19PlxuICAgICAgICAgICAgICB7IHN0YXRlLmxlbmd0aCA+IDAgPyA8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCIgb25DbGljaz17KCkgPT4gdGhpcy5kb3dubG9hZEltYWdlcyhzdGF0ZSl9PjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZG93bmxvYWRcIj48L3NwYW4+IERvd25sb2FkPC9CdXR0b24+IDogbnVsbCB9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICggc3RhdGUgKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdGVcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hJbWFnZXM6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZWFyY2hJbWFnZXMsIGRpc3BhdGNoKSxcbiAgICBpbnB1dENoYW5nZTogYmluZEFjdGlvbkNyZWF0b3JzKGlucHV0Q2hhbmdlLCBkaXNwYXRjaCksXG4gICAgZG93bmxvYWRJbWFnZXM6IGJpbmRBY3Rpb25DcmVhdG9ycyhkb3dubG9hZEltYWdlcywgZGlzcGF0Y2gpXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShEb3dubG9hZCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Eb3dubG9hZC5qcyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBzZWFyY2hJbWFnZXMsIGlucHV0Q2hhbmdlfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IENvbCwgUm93LCBGb3JtQ29udHJvbCwgQnV0dG9uLCBJbnB1dEdyb3VwIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuXG5cbmNsYXNzIEltYWdlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fT5cbiAgICAgICAgICAgIDxDb2wgbGc9ezh9IGxnT2Zmc2V0PXsyfT5cbiAgICAgICAgICAgICAge3N0YXRlLmltYWdlcy5tYXAoaW1hZ2UgPT4gXG4gICAgICAgICAgICAgICAgPENvbCBsZz17NH0ga2V5PXtpbWFnZS5rZXl9IHN0eWxlPXt7IG1hcmdpblRvcDogJzVweCd9fT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZS5pbWFnZX0gc3R5bGU9e3sgd2lkdGg6ICczMTBweCd9fS8+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCBzdGF0ZSApID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZVxuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW1hZ2VzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0ltYWdlcy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFQQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7QUFYQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQWlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQWhCQTtBQUNBO0FBeUJBOztBQUlBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFwQ0E7QUFDQTtBQTJDQTs7QUFJQTtBQUZBO0FBRkE7QUFDQTtBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFRQTs7Ozs7QUFyQkE7QUFDQTtBQXVCQTs7QUFJQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        