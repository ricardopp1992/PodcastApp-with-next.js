webpackHotUpdate("static/development/pages/channels.js",{

/***/ "./pages/channels.js":
/*!***************************!*\
  !*** ./pages/channels.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");
/* harmony import */ var _components_podcastWithClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/podcastWithClick */ "./components/podcastWithClick.js");
/* harmony import */ var _components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PodcastPlayer */ "./components/PodcastPlayer.js");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.js");






function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openPodcast", function (event, podcast) {
      event.preventDefault();

      _this.setState({
        openPodcast: podcast
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePodcast", function (event) {
      event.preventDefault();

      _this.setState({
        openPodcast: null
      });
    });

    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          audios = _this$props.audios,
          series = _this$props.series,
          statusCode = _this$props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_4__["default"], {
          statusCode: statusCode
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-556857098"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
        className: "jsx-556857098"
      }, " ", channel.title, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: channel.urls.banner_image.original,
        className: "jsx-556857098" + " " + ""
      }), openPodcast && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-556857098" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PodcastPlayer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        clip: openPodcast,
        onClose: this.closePodcast
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-556857098"
      }, channel.title), audios.map(function (clip, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/podcast?idAudio=".concat(clip.id)
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
          className: "jsx-556857098"
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
          src: clip.channel.urls.logo_image.origin,
          alt: "imagen",
          className: "jsx-556857098"
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
          className: "jsx-556857098"
        }, clip.title)));
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-556857098"
      }, "Sub-series"), series.length !== 0 ? series.map(function (serie, i) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-556857098"
        }, serie.title);
      }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-556857098"
      }, "No hay subseries para mostrar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-556857098"
      }, "\xDAltimos podcast"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_podcastWithClick__WEBPACK_IMPORTED_MODULE_5__["default"], {
        podcasts: audios,
        onClickPodcast: this.openPodcast
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1663431498",
        css: "header.jsx-556857098{color:#fff;background:#8756ca;padding:15px;text-align:center;}.channels.jsx-556857098{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.jsx-556857098{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-556857098 img.jsx-556857098{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h2.jsx-556857098{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}.modal.jsx-556857098{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SaWNhcmRvL0Rlc2t0b3AvUGxhdHppL25leHQvcG9kY2FzdC9wYWdlcy9jaGFubmVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SDRCLEFBR29DLEFBTUUsQUFNQyxBQU1JLEFBS04sQUFPRyxXQTdCSSxDQXVCSCxDQWpCRixDQU1NLENBa0JkLEdBWmtDLEdBYWpDLE1BeEJNLENBaUJHLEFBUVIsRUEvQkssSUFZRixFQW9CRixJQXpCbUQsR0FOMUMsQ0F1QlQsQ0FYWSxBQW9CUCxRQVJJLEtBUFAsQ0FnQmYsRUFoQ0EsUUFpQkEsRUFPQSx3QkFaQSxHQU5BIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SaWNhcmRvL0Rlc2t0b3AvUGxhdHppL25leHQvcG9kY2FzdC9wYWdlcy9jaGFubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXHJcbmltcG9ydCBQb2RjYXN0V2l0aENsaWNrIGZyb20gJy4uL2NvbXBvbmVudHMvcG9kY2FzdFdpdGhDbGljaydcclxuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyJztcclxuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGRhdGEpIHtcclxuICAgICAgICBsZXQgcXVlcnkgPSBkYXRhLnF1ZXJ5XHJcbiAgICAgICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXHJcbiAgICAgICAgLy8gcmVzIGVzIGxhIHJlc3B1ZXN0YSBkZSBuZXh0LlxyXG4gICAgICAgIGxldCByZXMgPSBkYXRhLnJlc1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgWyByZXFDaGFubmVscywgcmVxQXVkaW9zLCByZXFTZXJpZXMgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICAgICAgaWYoIHJlcUNoYW5uZWxzLnN0YXR1cyA+PSA0MDAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJhIGN1ZXN0aW9uZXMgZGUgU0VPXHJcbiAgICAgICAgICAgICAgICByZXMuc2F0dXNDb2RlID0gcmVxQ2hhbm5lbHMuc3RhdHVzIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCA6IG51bGwsIGF1ZGlvcyA6IG51bGwsIHNlcmllcyA6IG51bGwsIHN0YXR1c0NvZGU6IHJlcUNoYW5uZWxzLnN0YXR1cyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcmVxQ2hhbm5lbHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKVxyXG4gICAgICAgICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVscy5qc29uKClcclxuICAgICAgICAgICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcmVxQ2xpcCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApXHJcbiAgICAgICAgICAgIGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxyXG4gICAgICAgICAgICBsZXQgYXVkaW9zID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXHJcbiAgICBcclxuICAgICAgICAgICAgLy8gbGV0IHJlcVNlcmllID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYClcclxuICAgICAgICAgICAgbGV0IGRhdGFTZXJpZSA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcclxuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZS5ib2R5LmNoYW5uZWxzXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9zLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCA6IG51bGwsIGF1ZGlvcyA6IG51bGwsIHNlcmllcyA6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9kY2FzdCA9IChldmVudCwgcG9kY2FzdCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBwb2RjYXN0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvZGNhc3QgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb3MsIHNlcmllcywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYoIHN0YXR1c0NvZGUgIT09IDIwMCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXsgc3RhdHVzQ29kZSB9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj4ge2NoYW5uZWwudGl0bGV9IDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb2RjYXN0ICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvZGNhc3RQbGF5ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwPXsgb3BlblBvZGNhc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuY2xvc2VQb2RjYXN0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDaGFubmVsR3JpZCBjaGFubmVscz17YXVkaW9zfT48L0NoYW5uZWxHcmlkPiAqL31cclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLm1hcCgoY2xpcCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3Q/aWRBdWRpbz0keyBjbGlwLmlkIH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbn0gYWx0PVwiaW1hZ2VuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2xpcC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGgxPlN1Yi1zZXJpZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIChzZXJpZXMubGVuZ3RoICE9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzLm1hcCgoc2VyaWUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57c2VyaWUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIGhheSBzdWJzZXJpZXMgcGFyYSBtb3N0cmFyPC9wPiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+w5psdGltb3MgcG9kY2FzdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9kY2FzdFdpdGhDbGljayBcclxuICAgICAgICAgICAgICAgICAgICBwb2RjYXN0cz17IGF1ZGlvcyB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tQb2RjYXN0PXsgdGhpcy5vcGVuUG9kY2FzdCB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ricardo/Desktop/Platzi/next/podcast/pages/channels.js */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "80834505",
        css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SaWNhcmRvL0Rlc2t0b3AvUGxhdHppL25leHQvcG9kY2FzdC9wYWdlcy9jaGFubmVscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxS21DLEFBR2tDLFNBQ2Esc0JBQ0wsaUJBQ3JCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SaWNhcmRvL0Rlc2t0b3AvUGxhdHppL25leHQvcG9kY2FzdC9wYWdlcy9jaGFubmVscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXHJcbmltcG9ydCBQb2RjYXN0V2l0aENsaWNrIGZyb20gJy4uL2NvbXBvbmVudHMvcG9kY2FzdFdpdGhDbGljaydcclxuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2RjYXN0UGxheWVyJztcclxuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGRhdGEpIHtcclxuICAgICAgICBsZXQgcXVlcnkgPSBkYXRhLnF1ZXJ5XHJcbiAgICAgICAgbGV0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkXHJcbiAgICAgICAgLy8gcmVzIGVzIGxhIHJlc3B1ZXN0YSBkZSBuZXh0LlxyXG4gICAgICAgIGxldCByZXMgPSBkYXRhLnJlc1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgWyByZXFDaGFubmVscywgcmVxQXVkaW9zLCByZXFTZXJpZXMgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfWApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2F1ZGlvX2NsaXBzYCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKVxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICAgICAgaWYoIHJlcUNoYW5uZWxzLnN0YXR1cyA+PSA0MDAgKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwYXJhIGN1ZXN0aW9uZXMgZGUgU0VPXHJcbiAgICAgICAgICAgICAgICByZXMuc2F0dXNDb2RlID0gcmVxQ2hhbm5lbHMuc3RhdHVzIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCA6IG51bGwsIGF1ZGlvcyA6IG51bGwsIHNlcmllcyA6IG51bGwsIHN0YXR1c0NvZGU6IHJlcUNoYW5uZWxzLnN0YXR1cyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcmVxQ2hhbm5lbHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKVxyXG4gICAgICAgICAgICBsZXQgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVscy5qc29uKClcclxuICAgICAgICAgICAgbGV0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWxcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcmVxQ2xpcCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7aWRDaGFubmVsfS9hdWRpb19jbGlwc2ApXHJcbiAgICAgICAgICAgIGxldCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxyXG4gICAgICAgICAgICBsZXQgYXVkaW9zID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzXHJcbiAgICBcclxuICAgICAgICAgICAgLy8gbGV0IHJlcVNlcmllID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtpZENoYW5uZWx9L2NoaWxkX2NoYW5uZWxzYClcclxuICAgICAgICAgICAgbGV0IGRhdGFTZXJpZSA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcclxuICAgICAgICAgICAgbGV0IHNlcmllcyA9IGRhdGFTZXJpZS5ib2R5LmNoYW5uZWxzXHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCwgYXVkaW9zLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCA6IG51bGwsIGF1ZGlvcyA6IG51bGwsIHNlcmllcyA6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9kY2FzdCA9IChldmVudCwgcG9kY2FzdCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBwb2RjYXN0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvZGNhc3QgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb3MsIHNlcmllcywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYoIHN0YXR1c0NvZGUgIT09IDIwMCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXsgc3RhdHVzQ29kZSB9IC8+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj4ge2NoYW5uZWwudGl0bGV9IDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfT48L2ltZz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW5Qb2RjYXN0ICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvZGNhc3RQbGF5ZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlwPXsgb3BlblBvZGNhc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17IHRoaXMuY2xvc2VQb2RjYXN0IH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxDaGFubmVsR3JpZCBjaGFubmVscz17YXVkaW9zfT48L0NoYW5uZWxHcmlkPiAqL31cclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXVkaW9zLm1hcCgoY2xpcCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3Q/aWRBdWRpbz0keyBjbGlwLmlkIH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjbGlwLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbn0gYWx0PVwiaW1hZ2VuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y2xpcC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGgxPlN1Yi1zZXJpZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIChzZXJpZXMubGVuZ3RoICE9PSAwKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzLm1hcCgoc2VyaWUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57c2VyaWUudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5vIGhheSBzdWJzZXJpZXMgcGFyYSBtb3N0cmFyPC9wPiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8aDI+w5psdGltb3MgcG9kY2FzdDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9kY2FzdFdpdGhDbGljayBcclxuICAgICAgICAgICAgICAgICAgICBwb2RjYXN0cz17IGF1ZGlvcyB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tQb2RjYXN0PXsgdGhpcy5vcGVuUG9kY2FzdCB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ricardo/Desktop/Platzi/next/podcast/pages/channels.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var query, idChannel, res, _ref, _ref2, reqChannels, reqAudios, reqSeries, dataChannel, channel, dataAudios, audios, dataSerie, series;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = data.query;
                idChannel = query.id; // res es la respuesta de next.

                res = data.res;
                _context.prev = 3;
                _context.next = 6;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels"))]);

              case 6:
                _ref = _context.sent;
                _ref2 = _slicedToArray(_ref, 3);
                reqChannels = _ref2[0];
                reqAudios = _ref2[1];
                reqSeries = _ref2[2];

                if (!(reqChannels.status >= 400)) {
                  _context.next = 14;
                  break;
                }

                // para cuestiones de SEO
                res.satusCode = reqChannels.status;
                return _context.abrupt("return", {
                  channel: null,
                  audios: null,
                  series: null,
                  statusCode: reqChannels.status
                });

              case 14:
                _context.next = 16;
                return reqChannels.json();

              case 16:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel; // let reqClip = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)

                _context.next = 20;
                return reqAudios.json();

              case 20:
                dataAudios = _context.sent;
                audios = dataAudios.body.audio_clips; // let reqSerie = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)

                _context.next = 24;
                return reqSeries.json();

              case 24:
                dataSerie = _context.sent;
                series = dataSerie.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audios: audios,
                  series: series,
                  statusCode: 200
                });

              case 29:
                _context.prev = 29;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", {
                  channel: null,
                  audios: null,
                  series: null,
                  statusCode: 503
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 29]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channels")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=channels.js.ded0cb8289862444e767.hot-update.js.map