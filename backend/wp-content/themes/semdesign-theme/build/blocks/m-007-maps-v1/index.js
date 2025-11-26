/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@react-google-maps/api/dist/esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@react-google-maps/api/dist/esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Autocomplete: () => (/* binding */ Autocomplete),
/* harmony export */   BicyclingLayer: () => (/* binding */ BicyclingLayer),
/* harmony export */   BicyclingLayerF: () => (/* binding */ BicyclingLayerF),
/* harmony export */   Circle: () => (/* binding */ Circle),
/* harmony export */   CircleF: () => (/* binding */ CircleF),
/* harmony export */   Data: () => (/* binding */ Data),
/* harmony export */   DataF: () => (/* binding */ DataF),
/* harmony export */   DirectionsRenderer: () => (/* binding */ DirectionsRenderer),
/* harmony export */   DirectionsService: () => (/* binding */ DirectionsService),
/* harmony export */   DistanceMatrixService: () => (/* binding */ DistanceMatrixService),
/* harmony export */   DrawingManager: () => (/* binding */ DrawingManager),
/* harmony export */   DrawingManagerF: () => (/* binding */ DrawingManagerF),
/* harmony export */   FLOAT_PANE: () => (/* binding */ FLOAT_PANE),
/* harmony export */   GoogleMap: () => (/* binding */ GoogleMap),
/* harmony export */   GoogleMapsMarkerClusterer: () => (/* binding */ index_esm),
/* harmony export */   GoogleMarkerClusterer: () => (/* binding */ GoogleMarkerClusterer$1),
/* harmony export */   GroundOverlay: () => (/* binding */ GroundOverlay),
/* harmony export */   GroundOverlayF: () => (/* binding */ GroundOverlayF),
/* harmony export */   HeatmapLayer: () => (/* binding */ HeatmapLayer),
/* harmony export */   HeatmapLayerF: () => (/* binding */ HeatmapLayerF),
/* harmony export */   InfoBox: () => (/* binding */ InfoBoxComponent),
/* harmony export */   InfoBoxF: () => (/* binding */ InfoBoxF),
/* harmony export */   InfoWindow: () => (/* binding */ InfoWindow),
/* harmony export */   InfoWindowF: () => (/* binding */ InfoWindowF),
/* harmony export */   KmlLayer: () => (/* binding */ KmlLayer),
/* harmony export */   LoadScript: () => (/* binding */ LoadScript),
/* harmony export */   LoadScriptNext: () => (/* binding */ LoadScriptNext$1),
/* harmony export */   MAP_PANE: () => (/* binding */ MAP_PANE),
/* harmony export */   MARKER_LAYER: () => (/* binding */ MARKER_LAYER),
/* harmony export */   MapContext: () => (/* binding */ MapContext),
/* harmony export */   Marker: () => (/* binding */ Marker),
/* harmony export */   MarkerClusterer: () => (/* binding */ ClustererComponent),
/* harmony export */   MarkerClustererF: () => (/* binding */ MarkerClustererF),
/* harmony export */   MarkerF: () => (/* binding */ MarkerF),
/* harmony export */   OVERLAY_LAYER: () => (/* binding */ OVERLAY_LAYER),
/* harmony export */   OVERLAY_MOUSE_TARGET: () => (/* binding */ OVERLAY_MOUSE_TARGET),
/* harmony export */   OverlayView: () => (/* binding */ OverlayView),
/* harmony export */   OverlayViewF: () => (/* binding */ OverlayViewF),
/* harmony export */   Polygon: () => (/* binding */ Polygon),
/* harmony export */   PolygonF: () => (/* binding */ PolygonF),
/* harmony export */   Polyline: () => (/* binding */ Polyline),
/* harmony export */   PolylineF: () => (/* binding */ PolylineF),
/* harmony export */   Rectangle: () => (/* binding */ Rectangle),
/* harmony export */   RectangleF: () => (/* binding */ RectangleF),
/* harmony export */   StandaloneSearchBox: () => (/* binding */ StandaloneSearchBox),
/* harmony export */   StreetViewPanorama: () => (/* binding */ StreetViewPanorama),
/* harmony export */   StreetViewService: () => (/* binding */ StreetViewService),
/* harmony export */   TrafficLayer: () => (/* binding */ TrafficLayer),
/* harmony export */   TrafficLayerF: () => (/* binding */ TrafficLayerF),
/* harmony export */   TransitLayer: () => (/* binding */ TransitLayer),
/* harmony export */   TransitLayerF: () => (/* binding */ TransitLayerF),
/* harmony export */   useGoogleMap: () => (/* binding */ useGoogleMap),
/* harmony export */   useJsApiLoader: () => (/* binding */ useJsApiLoader),
/* harmony export */   useLoadScript: () => (/* binding */ useLoadScript)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);





function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function getDefaultExportFromCjs$1 (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var invariant_1;
var hasRequiredInvariant;
function requireInvariant() {
  if (hasRequiredInvariant) return invariant_1;
  hasRequiredInvariant = 1;

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var NODE_ENV = "development";
  var invariant = function invariant(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }
      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };
  invariant_1 = invariant;
  return invariant_1;
}

var invariantExports = requireInvariant();
var invariant = /*@__PURE__*/getDefaultExportFromCjs$1(invariantExports);

var MapContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useGoogleMap() {
  invariant(!!react__WEBPACK_IMPORTED_MODULE_1__.useContext, 'useGoogleMap is React hook and requires React version 16.8+');
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  invariant(!!map, 'useGoogleMap needs a GoogleMap available up in the tree');
  return map;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forEach(obj, fn) {
  Object.keys(obj).forEach(key => {
    return fn(obj[key], key);
  });
}

/* global google */
/* eslint-disable filenames/match-regex */
function applyUpdaterToNextProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
updaterMap,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
prevProps,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
nextProps,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var map = {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var iter = (fn, key) => {
    var nextValue = nextProps[key];
    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };
  forEach(updaterMap, iter);
  return map;
}
function registerEvents(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
instance, eventMap) {
  var registeredList = reduce(eventMap, function reducer(acc, googleEventName,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onEventName) {
    if (typeof props[onEventName] === 'function') {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }
    return acc;
  }, []);
  return registeredList;
}
function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}
function unregisterEvents() {
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  events.forEach(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_ref) {
  var {
    updaterMap,
    eventMap,
    prevProps,
    nextProps,
    instance
  } = _ref;
  var registeredEvents = registerEvents(nextProps, instance, eventMap);
  applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
  return registeredEvents;
}

var eventMap$i = {
  onDblClick: 'dblclick',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMapTypeIdChanged: 'maptypeid_changed',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick',
  onTilesLoaded: 'tilesloaded',
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onDrag: 'drag',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onProjectionChanged: 'projection_changed',
  onResize: 'resize',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed'
};
var updaterMap$i = {
  extraMapTypes(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center(map, center) {
    map.setCenter(center);
  },
  clickableIcons(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading(map, heading) {
    map.setHeading(heading);
  },
  mapTypeId(map, mapTypeId) {
    map.setMapTypeId(mapTypeId);
  },
  options(map, options) {
    map.setOptions(options);
  },
  streetView(map, streetView) {
    map.setStreetView(streetView);
  },
  tilt(map, tilt) {
    map.setTilt(tilt);
  },
  zoom(map, zoom) {
    map.setZoom(zoom);
  }
};
// TODO: unfinished!
function GoogleMapFunctional(_ref) {
  var {
    children,
    options,
    id,
    mapContainerStyle,
    mapContainerClassName,
    center,
    // clickableIcons,
    // extraMapTypes,
    // heading,
    // mapTypeId,
    onClick,
    onDblClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseDown,
    onMouseUp,
    onRightClick,
    // onMapTypeIdChanged,
    // onTilesLoaded,
    // onBoundsChanged,
    onCenterChanged,
    // onHeadingChanged,
    // onIdle,
    // onProjectionChanged,
    // onResize,
    // onTiltChanged,
    // onZoomChanged,
    onLoad,
    onUnmount
  } = _ref;
  var [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // const [extraMapTypesListener, setExtraMapTypesListener] = useState<google.maps.MapsEventListener | null>(null)
  var [centerChangedListener, setCenterChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && map !== null) {
      map.setOptions(options);
    }
  }, [map, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map !== null && typeof center !== 'undefined') {
      map.setCenter(center);
    }
  }, [map, center]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(map, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(map, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(map, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(map, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(map, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(map, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(map, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(map, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(map, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(map, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(map, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(map, 'center_changed', onCenterChanged));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var map = ref.current === null ? null : new google.maps.Map(ref.current, options);
    setMap(map);
    if (map !== null && onLoad) {
      onLoad(map);
    }
    return () => {
      if (map !== null) {
        if (onUnmount) {
          onUnmount(map);
        }
      }
    };
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    id: id,
    ref: ref,
    style: mapContainerStyle,
    className: mapContainerClassName,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MapContext.Provider, {
      value: map,
      children: map !== null ? children : null
    })
  });
}
(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(GoogleMapFunctional);
class GoogleMap extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      map: null
    });
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "mapRef", null);
    _defineProperty(this, "getInstance", () => {
      if (this.mapRef === null) {
        return null;
      }
      return new google.maps.Map(this.mapRef, this.props.options);
    });
    _defineProperty(this, "panTo", latLng => {
      var map = this.getInstance();
      if (map) {
        map.panTo(latLng);
      }
    });
    _defineProperty(this, "setMapCallback", () => {
      if (this.state.map !== null) {
        if (this.props.onLoad) {
          this.props.onLoad(this.state.map);
        }
      }
    });
    _defineProperty(this, "getRef", ref => {
      this.mapRef = ref;
    });
  }
  componentDidMount() {
    var map = this.getInstance();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$i,
      eventMap: eventMap$i,
      prevProps: {},
      nextProps: this.props,
      instance: map
    });
    this.setState(function setMap() {
      return {
        map
      };
    }, this.setMapCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.map !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps,
        nextProps: this.props,
        instance: this.state.map
      });
    }
  }
  componentWillUnmount() {
    if (this.state.map !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.map);
      }
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      id: this.props.id,
      ref: this.getRef,
      style: this.props.mapContainerStyle,
      className: this.props.mapContainerClassName,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MapContext.Provider, {
        value: this.state.map,
        children: this.state.map !== null ? this.props.children : null
      })
    });
  }
}

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

function makeLoadScriptUrl(_ref) {
  var {
    googleMapsApiKey,
    googleMapsClientId,
    version = 'weekly',
    language,
    region,
    libraries,
    channel,
    mapIds,
    authReferrerPolicy
  } = _ref;
  var params = [];
  invariant(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId), 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.');
  if (googleMapsApiKey) {
    params.push("key=".concat(googleMapsApiKey));
  } else if (googleMapsClientId) {
    params.push("client=".concat(googleMapsClientId));
  }
  if (version) {
    params.push("v=".concat(version));
  }
  if (language) {
    params.push("language=".concat(language));
  }
  if (region) {
    params.push("region=".concat(region));
  }
  if (libraries && libraries.length) {
    params.push("libraries=".concat(libraries.sort().join(',')));
  }
  if (channel) {
    params.push("channel=".concat(channel));
  }
  if (mapIds && mapIds.length) {
    params.push("map_ids=".concat(mapIds.join(',')));
  }
  if (authReferrerPolicy) {
    params.push("auth_referrer_policy=".concat(authReferrerPolicy));
  }
  params.push('loading=async');
  params.push('callback=initMap');
  return "https://maps.googleapis.com/maps/api/js?".concat(params.join('&'));
}

var isBrowser = typeof document !== 'undefined';

function injectScript(_ref) {
  var {
    url,
    id,
    nonce
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = _ref;
  if (!isBrowser) {
    return Promise.reject(new Error('document is undefined'));
  }
  return new Promise(function injectScriptCallback(resolve, reject) {
    var existingScript = document.getElementById(id);
    var windowWithGoogleMap = window;
    if (existingScript) {
      // Same script id/url: keep same script
      var dataStateAttribute = existingScript.getAttribute('data-state');
      if (existingScript.src === url && dataStateAttribute !== 'error') {
        if (dataStateAttribute === 'ready') {
          return resolve(id);
        } else {
          var originalInitMap = windowWithGoogleMap.initMap;
          var originalErrorCallback = existingScript.onerror;
          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap) {
              originalInitMap();
            }
            resolve(id);
          };
          existingScript.onerror = function (err) {
            if (originalErrorCallback) {
              originalErrorCallback(err);
            }
            reject(err);
          };
          return;
        }
      }
      // Same script id, but either
      // 1. requested URL is different
      // 2. script failed to load
      else {
        existingScript.remove();
      }
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.async = true;
    script.nonce = nonce || '';
    script.onerror = function onerror(err) {
      script.setAttribute('data-state', 'error');
      reject(err);
    };
    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute('data-state', 'ready');
      resolve(id);
    };
    document.head.appendChild(script);
  }).catch(err => {
    console.error('injectScript error: ', err);
    throw err;
  });
}

function isGoogleFontStyle(element) {
  // 'Roboto' or 'Google Sans Text' font download
  var href = element.href;
  if (href && (href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0 || href.indexOf('https://fonts.googleapis.com/css?family=Google+Sans+Text') === 0)) {
    return true;
  }
  // font style elements
  if (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.tagName.toLowerCase() === 'style' &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.styleSheet &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.styleSheet.cssText &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.styleSheet.cssText = '';
    return true;
  }
  // font style elements for other browsers
  if (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.tagName.toLowerCase() === 'style' &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.innerHTML &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    element.innerHTML = '';
    return true;
  }
  // when google tries to add empty style
  if (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  element.tagName.toLowerCase() === 'style' &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  !element.styleSheet &&
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  !element.innerHTML) {
    return true;
  }
  return false;
}
// Preventing the Google Maps library from downloading an extra font
function preventGoogleFonts() {
  // we override these methods only for one particular head element
  // default methods for other elements are not affected
  var head = document.getElementsByTagName('head')[0];
  if (head) {
    var trueInsertBefore = head.insertBefore.bind(head);
    // TODO: adding return before reflect solves the TS issue
    head.insertBefore = function insertBefore(newElement, referenceElement) {
      if (!isGoogleFontStyle(newElement)) {
        Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
      }
      return newElement;
    };
    var trueAppend = head.appendChild.bind(head);
    // TODO: adding return before reflect solves the TS issue
    head.appendChild = function appendChild(textNode) {
      if (!isGoogleFontStyle(textNode)) {
        Reflect.apply(trueAppend, head, [textNode]);
      }
      return textNode;
    };
  }
}

var cleaningUp = false;
function DefaultLoadingElement() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: "Loading..."
  });
}
var defaultLoadScriptProps = {
  id: 'script-loader',
  version: 'weekly'
};
class LoadScript extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "check", null);
    _defineProperty(this, "state", {
      loaded: false
    });
    _defineProperty(this, "cleanupCallback", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete window.google.maps;
      this.injectScript();
    });
    _defineProperty(this, "isCleaningUp", /*#__PURE__*/_asyncToGenerator(function* () {
      function promiseCallback(resolve) {
        if (!cleaningUp) {
          resolve();
        } else {
          if (isBrowser) {
            var timer = window.setInterval(function interval() {
              if (!cleaningUp) {
                window.clearInterval(timer);
                resolve();
              }
            }, 1);
          }
        }
        return;
      }
      return new Promise(promiseCallback);
    }));
    _defineProperty(this, "cleanup", () => {
      cleaningUp = true;
      var script = document.getElementById(this.props.id);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      Array.prototype.slice.call(document.getElementsByTagName('script')).filter(function filter(script) {
        return typeof script.src === 'string' && script.src.includes('maps.googleapis');
      }).forEach(function forEach(script) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName('link')).filter(function filter(link) {
        return link.href === 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans';
      }).forEach(function forEach(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName('style')).filter(function filter(style) {
        return style.innerText !== undefined && style.innerText.length > 0 && style.innerText.includes('.gm-');
      }).forEach(function forEach(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    });
    _defineProperty(this, "injectScript", () => {
      if (this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }
      invariant(!!this.props.id, 'LoadScript requires "id" prop to be a string: %s', this.props.id);
      var injectScriptOptions = {
        id: this.props.id,
        nonce: this.props.nonce,
        url: makeLoadScriptUrl(this.props)
      };
      injectScript(injectScriptOptions).then(() => {
        if (this.props.onLoad) {
          this.props.onLoad();
        }
        this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });
        return;
      }).catch(err => {
        if (this.props.onError) {
          this.props.onError(err);
        }
        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(this.props.googleMapsApiKey || '-', ") or Client ID (").concat(this.props.googleMapsClientId || '-', ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "));
      });
    });
    _defineProperty(this, "getRef", el => {
      this.check = el;
    });
  }
  componentDidMount() {
    if (isBrowser) {
      if (window.google && window.google.maps && !cleaningUp) {
        console.error('google api is already presented');
        return;
      }
      this.isCleaningUp().then(this.injectScript).catch(function error(err) {
        console.error('Error at injecting script after cleaning up: ', err);
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }
    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup();
      // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  }
  componentWillUnmount() {
    if (isBrowser) {
      this.cleanup();
      var timeoutCallback = () => {
        if (!this.check) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          delete window.google;
          cleaningUp = false;
        }
      };
      window.setTimeout(timeoutCallback, 1);
      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  }
  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: this.getRef
      }), this.state.loaded ? this.props.children : this.props.loadingElement || (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DefaultLoadingElement, {})]
    });
  }
}
_defineProperty(LoadScript, "defaultProps", defaultLoadScriptProps);

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_ref) {
  var {
    id = defaultLoadScriptProps.id,
    version = defaultLoadScriptProps.version,
    nonce,
    googleMapsApiKey,
    googleMapsClientId,
    language,
    region,
    libraries,
    preventGoogleFontsLoading,
    channel,
    mapIds,
    authReferrerPolicy
  } = _ref;
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  var [isLoaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [loadError, setLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function trackMountedState() {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function validateLoadedState() {
    if (isLoaded) {
      invariant(!!window.google, 'useLoadScript was marked as loaded, but window.google is not present. Something went wrong.');
    }
  }, [isLoaded]);
  var url = makeLoadScriptUrl({
    version,
    googleMapsApiKey,
    googleMapsClientId,
    language,
    region,
    libraries,
    channel,
    mapIds,
    authReferrerPolicy
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }
    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }
    if (window.google && window.google.maps && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }
    injectScript({
      id,
      url,
      nonce
    }).then(setLoadedIfMounted).catch(function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }
      console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(googleMapsApiKey || '-', ") or Client ID (").concat(googleMapsClientId || '-', ")\n        Otherwise it is a Network issue.\n      "));
      console.error(err);
    });
  }, [id, url, nonce]);
  var prevLibraries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded,
    loadError,
    url
  };
}

var _excluded$1 = ["loadingElement", "onLoad", "onError", "onUnmount", "children"];
var defaultLoadingElement = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DefaultLoadingElement, {});
function LoadScriptNext(_ref) {
  var {
      loadingElement,
      onLoad,
      onError,
      onUnmount,
      children
    } = _ref,
    hookOptions = _objectWithoutProperties(_ref, _excluded$1);
  var {
    isLoaded,
    loadError
  } = useLoadScript(hookOptions);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function handleOnLoad() {
    if (isLoaded && typeof onLoad === 'function') {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function handleOnError() {
    if (loadError && typeof onError === 'function') {
      onError(loadError);
    }
  }, [loadError, onError]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function handleOnUnmount() {
    return () => {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}
var LoadScriptNext$1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(LoadScriptNext);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

// do not edit .js files directly - edit src/index.jst

var fastDeepEqual$1 = function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};
var isEqual = /*@__PURE__*/getDefaultExportFromCjs(fastDeepEqual$1);

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
  LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
  LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
class Loader {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  constructor(_ref) {
    var {
      apiKey,
      authReferrerPolicy,
      channel,
      client,
      id = DEFAULT_ID,
      language,
      libraries = [],
      mapIds,
      nonce,
      region,
      retries = 3,
      url = "https://maps.googleapis.com/maps/api/js",
      version
    } = _ref;
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID; // Do not allow empty string
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!isEqual(this.options, Loader.instance.options)) {
        throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options), " !== ").concat(JSON.stringify(Loader.instance.options)));
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  get options() {
    return {
      version: this.version,
      apiKey: this.apiKey,
      channel: this.channel,
      client: this.client,
      id: this.id,
      libraries: this.libraries,
      language: this.language,
      region: this.region,
      mapIds: this.mapIds,
      nonce: this.nonce,
      url: this.url,
      authReferrerPolicy: this.authReferrerPolicy
    };
  }
  get status() {
    if (this.errors.length) {
      return LoaderStatus.FAILURE;
    }
    if (this.done) {
      return LoaderStatus.SUCCESS;
    }
    if (this.loading) {
      return LoaderStatus.LOADING;
    }
    return LoaderStatus.INITIALIZED;
  }
  get failed() {
    return this.done && !this.loading && this.errors.length >= this.retries + 1;
  }
  /**
   * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
   *
   * @ignore
   * @deprecated
   */
  createUrl() {
    var url = this.url;
    url += "?callback=__googleMapsCallback&loading=async";
    if (this.apiKey) {
      url += "&key=".concat(this.apiKey);
    }
    if (this.channel) {
      url += "&channel=".concat(this.channel);
    }
    if (this.client) {
      url += "&client=".concat(this.client);
    }
    if (this.libraries.length > 0) {
      url += "&libraries=".concat(this.libraries.join(","));
    }
    if (this.language) {
      url += "&language=".concat(this.language);
    }
    if (this.region) {
      url += "&region=".concat(this.region);
    }
    if (this.version) {
      url += "&v=".concat(this.version);
    }
    if (this.mapIds) {
      url += "&map_ids=".concat(this.mapIds.join(","));
    }
    if (this.authReferrerPolicy) {
      url += "&auth_referrer_policy=".concat(this.authReferrerPolicy);
    }
    return url;
  }
  deleteScript() {
    var script = document.getElementById(this.id);
    if (script) {
      script.remove();
    }
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   * @deprecated, use importLibrary() instead.
   */
  load() {
    return this.loadPromise();
  }
  /**
   * Load the Google Maps JavaScript API script and return a Promise.
   *
   * @ignore
   * @deprecated, use importLibrary() instead.
   */
  loadPromise() {
    return new Promise((resolve, reject) => {
      this.loadCallback(err => {
        if (!err) {
          resolve(window.google);
        } else {
          reject(err.error);
        }
      });
    });
  }
  importLibrary(name) {
    this.execute();
    return google.maps.importLibrary(name);
  }
  /**
   * Load the Google Maps JavaScript API script with a callback.
   * @deprecated, use importLibrary() instead.
   */
  loadCallback(fn) {
    this.callbacks.push(fn);
    this.execute();
  }
  /**
   * Set the script on document.
   */
  setScript() {
    var _a, _b;
    if (document.getElementById(this.id)) {
      // TODO wrap onerror callback for cases where the script was loaded elsewhere
      this.callback();
      return;
    }
    var params = {
      key: this.apiKey,
      channel: this.channel,
      client: this.client,
      libraries: this.libraries.length && this.libraries,
      v: this.version,
      mapIds: this.mapIds,
      language: this.language,
      region: this.region,
      authReferrerPolicy: this.authReferrerPolicy
    };
    // keep the URL minimal:
    Object.keys(params).forEach(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    key => !params[key] && delete params[key]);
    if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
      // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
      // which also sets the base url, the id, and the nonce
      /* eslint-disable */
      (g => {
        // @ts-ignore
        var h,
          a,
          k,
          p = "The Google Maps JavaScript API",
          c = "google",
          l = "importLibrary",
          q = "__ib__",
          m = document,
          b = window;
        // @ts-ignore
        b = b[c] || (b[c] = {});
        // @ts-ignore
        var d = b.maps || (b.maps = {}),
          r = new Set(),
          e = new URLSearchParams(),
          u = () =>
          // @ts-ignore
          h || (h = new Promise((f, n) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            yield a = m.createElement("script");
            a.id = this.id;
            e.set("libraries", [...r] + "");
            // @ts-ignore
            for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]);
            e.set("callback", c + ".maps." + q);
            a.src = this.url + "?" + e;
            d[q] = f;
            a.onerror = () => h = n(Error(p + " could not load."));
            // @ts-ignore
            a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
            m.head.append(a);
          })));
        // @ts-ignore
        d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = function (f) {
          for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            n[_key - 1] = arguments[_key];
          }
          return r.add(f) && u().then(() => d[l](f, ...n));
        };
      })(params);
      /* eslint-enable */
    }
    // While most libraries populate the global namespace when loaded via bootstrap params,
    // this is not the case for "marker" when used with the inline bootstrap loader
    // (and maybe others in the future). So ensure there is an importLibrary for each:
    var libraryPromises = this.libraries.map(library => this.importLibrary(library));
    // ensure at least one library, to kick off loading...
    if (!libraryPromises.length) {
      libraryPromises.push(this.importLibrary("core"));
    }
    Promise.all(libraryPromises).then(() => this.callback(), error => {
      var event = new ErrorEvent("error", {
        error
      }); // for backwards compat
      this.loadErrorCallback(event);
    });
  }
  /**
   * Reset the loader state.
   */
  reset() {
    this.deleteScript();
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.onerrorEvent = null;
  }
  resetIfRetryingFailed() {
    if (this.failed) {
      this.reset();
    }
  }
  loadErrorCallback(e) {
    this.errors.push(e);
    if (this.errors.length <= this.retries) {
      var delay = this.errors.length * Math.pow(2, this.errors.length);
      console.error("Failed to load Google Maps script, retrying in ".concat(delay, " ms."));
      setTimeout(() => {
        this.deleteScript();
        this.setScript();
      }, delay);
    } else {
      this.onerrorEvent = e;
      this.callback();
    }
  }
  callback() {
    this.done = true;
    this.loading = false;
    this.callbacks.forEach(cb => {
      cb(this.onerrorEvent);
    });
    this.callbacks = [];
  }
  execute() {
    this.resetIfRetryingFailed();
    if (this.loading) {
      // do nothing but wait
      return;
    }
    if (this.done) {
      this.callback();
    } else {
      // short circuit and warn if google.maps is already loaded
      if (window.google && window.google.maps && window.google.maps.version) {
        console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. " + "This may result in undesirable behavior as options and script parameters may not match.");
        this.callback();
        return;
      }
      this.loading = true;
      this.setScript();
    }
  }
}

var defaultLibraries = ['maps'];
function useJsApiLoader(_ref) {
  var {
    id = defaultLoadScriptProps.id,
    version = defaultLoadScriptProps.version,
    nonce,
    googleMapsApiKey,
    // googleMapsClientId,
    language,
    region,
    libraries = defaultLibraries,
    preventGoogleFontsLoading,
    // channel,
    mapIds,
    authReferrerPolicy
  } = _ref;
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  var [isLoaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  var [loadError, setLoadError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function trackMountedState() {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  var loader = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return new Loader({
      id,
      apiKey: googleMapsApiKey,
      version,
      libraries,
      language: language || 'en',
      region: region || 'US',
      mapIds: mapIds || [],
      nonce: nonce || '',
      authReferrerPolicy: authReferrerPolicy || 'origin'
    });
  }, [id, googleMapsApiKey, version, libraries, language, region, mapIds, nonce, authReferrerPolicy]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function effect() {
    if (isLoaded) {
      return;
    } else {
      loader.load().then(() => {
        if (isMounted.current) {
          setLoaded(true);
        }
        return;
      }).catch(error => {
        setLoadError(error);
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  var prevLibraries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }
    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded,
    loadError
  };
}

function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$h = {};
var updaterMap$h = {
  options(instance, options) {
    instance.setOptions(options);
  }
};
function TrafficLayerFunctional(_ref) {
  var {
    options,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var trafficLayer = new google.maps.TrafficLayer(_objectSpread$f(_objectSpread$f({}, options), {}, {
      map
    }));
    setInstance(trafficLayer);
    if (onLoad) {
      onLoad(trafficLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var TrafficLayerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(TrafficLayerFunctional);
class TrafficLayer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      trafficLayer: null
    });
    _defineProperty(this, "setTrafficLayerCallback", () => {
      if (this.state.trafficLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.trafficLayer);
      }
    });
    _defineProperty(this, "registeredEvents", []);
  }
  componentDidMount() {
    var trafficLayer = new google.maps.TrafficLayer(_objectSpread$f(_objectSpread$f({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$h,
      eventMap: eventMap$h,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });
    this.setState(function setTrafficLayer() {
      return {
        trafficLayer
      };
    }, this.setTrafficLayerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.trafficLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.trafficLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(TrafficLayer, "contextType", MapContext);

function BicyclingLayerFunctional(_ref) {
  var {
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var bicyclingLayer = new google.maps.BicyclingLayer();
    setInstance(bicyclingLayer);
    bicyclingLayer.setMap(map);
    if (onLoad) {
      onLoad(bicyclingLayer);
    }
    return () => {
      if (bicyclingLayer !== null) {
        if (onUnmount) {
          onUnmount(bicyclingLayer);
        }
        bicyclingLayer.setMap(null);
      }
    };
  }, []);
  return null;
}
var BicyclingLayerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(BicyclingLayerFunctional);
class BicyclingLayer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      bicyclingLayer: null
    });
    _defineProperty(this, "setBicyclingLayerCallback", () => {
      if (this.state.bicyclingLayer !== null) {
        this.state.bicyclingLayer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.bicyclingLayer);
        }
      }
    });
  }
  componentDidMount() {
    var bicyclingLayer = new google.maps.BicyclingLayer();
    this.setState(() => {
      return {
        bicyclingLayer
      };
    }, this.setBicyclingLayerCallback);
  }
  componentWillUnmount() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.bicyclingLayer);
      }
      this.state.bicyclingLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(BicyclingLayer, "contextType", MapContext);

function TransitLayerFunctional(_ref) {
  var {
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var transitLayer = new google.maps.TransitLayer();
    setInstance(transitLayer);
    transitLayer.setMap(map);
    if (onLoad) {
      onLoad(transitLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var TransitLayerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(TransitLayerFunctional);
class TransitLayer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      transitLayer: null
    });
    _defineProperty(this, "setTransitLayerCallback", () => {
      if (this.state.transitLayer !== null) {
        this.state.transitLayer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.transitLayer);
        }
      }
    });
  }
  componentDidMount() {
    var transitLayer = new google.maps.TransitLayer();
    this.setState(function setTransitLayer() {
      return {
        transitLayer
      };
    }, this.setTransitLayerCallback);
  }
  componentWillUnmount() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.transitLayer);
      }
      this.state.transitLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(TransitLayer, "contextType", MapContext);

function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$g = {
  onCircleComplete: 'circlecomplete',
  onMarkerComplete: 'markercomplete',
  onOverlayComplete: 'overlaycomplete',
  onPolygonComplete: 'polygoncomplete',
  onPolylineComplete: 'polylinecomplete',
  onRectangleComplete: 'rectanglecomplete'
};
var updaterMap$g = {
  drawingMode(instance, drawingMode) {
    instance.setDrawingMode(drawingMode);
  },
  options(instance, options) {
    instance.setOptions(options);
  }
};
function DrawingManagerFunctional(_ref) {
  var {
    options,
    drawingMode,
    onCircleComplete,
    onMarkerComplete,
    onOverlayComplete,
    onPolygonComplete,
    onPolylineComplete,
    onRectangleComplete,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [circlecompleteListener, setCircleCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [markercompleteListener, setMarkerCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [overlaycompleteListener, setOverlayCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [polygoncompleteListener, setPolygonCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [polylinecompleteListener, setPolylineCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rectanglecompleteListener, setRectangleCompleteListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setDrawingMode(drawingMode !== null && drawingMode !== void 0 ? drawingMode : null);
    }
  }, [instance, drawingMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onCircleComplete) {
      if (circlecompleteListener !== null) {
        google.maps.event.removeListener(circlecompleteListener);
      }
      setCircleCompleteListener(google.maps.event.addListener(instance, 'circlecomplete', onCircleComplete));
    }
  }, [instance, onCircleComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMarkerComplete) {
      if (markercompleteListener !== null) {
        google.maps.event.removeListener(markercompleteListener);
      }
      setMarkerCompleteListener(google.maps.event.addListener(instance, 'markercomplete', onMarkerComplete));
    }
  }, [instance, onMarkerComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onOverlayComplete) {
      if (overlaycompleteListener !== null) {
        google.maps.event.removeListener(overlaycompleteListener);
      }
      setOverlayCompleteListener(google.maps.event.addListener(instance, 'overlaycomplete', onOverlayComplete));
    }
  }, [instance, onOverlayComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onPolygonComplete) {
      if (polygoncompleteListener !== null) {
        google.maps.event.removeListener(polygoncompleteListener);
      }
      setPolygonCompleteListener(google.maps.event.addListener(instance, 'polygoncomplete', onPolygonComplete));
    }
  }, [instance, onPolygonComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onPolylineComplete) {
      if (polylinecompleteListener !== null) {
        google.maps.event.removeListener(polylinecompleteListener);
      }
      setPolylineCompleteListener(google.maps.event.addListener(instance, 'polylinecomplete', onPolylineComplete));
    }
  }, [instance, onPolylineComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRectangleComplete) {
      if (rectanglecompleteListener !== null) {
        google.maps.event.removeListener(rectanglecompleteListener);
      }
      setRectangleCompleteListener(google.maps.event.addListener(instance, 'rectanglecomplete', onRectangleComplete));
    }
  }, [instance, onRectangleComplete]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    invariant(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    var drawingManager = new google.maps.drawing.DrawingManager(_objectSpread$e(_objectSpread$e({}, options), {}, {
      map
    }));
    if (drawingMode) {
      drawingManager.setDrawingMode(drawingMode);
    }
    if (onCircleComplete) {
      setCircleCompleteListener(google.maps.event.addListener(drawingManager, 'circlecomplete', onCircleComplete));
    }
    if (onMarkerComplete) {
      setMarkerCompleteListener(google.maps.event.addListener(drawingManager, 'markercomplete', onMarkerComplete));
    }
    if (onOverlayComplete) {
      setOverlayCompleteListener(google.maps.event.addListener(drawingManager, 'overlaycomplete', onOverlayComplete));
    }
    if (onPolygonComplete) {
      setPolygonCompleteListener(google.maps.event.addListener(drawingManager, 'polygoncomplete', onPolygonComplete));
    }
    if (onPolylineComplete) {
      setPolylineCompleteListener(google.maps.event.addListener(drawingManager, 'polylinecomplete', onPolylineComplete));
    }
    if (onRectangleComplete) {
      setRectangleCompleteListener(google.maps.event.addListener(drawingManager, 'rectanglecomplete', onRectangleComplete));
    }
    setInstance(drawingManager);
    if (onLoad) {
      onLoad(drawingManager);
    }
    return () => {
      if (instance !== null) {
        if (circlecompleteListener) {
          google.maps.event.removeListener(circlecompleteListener);
        }
        if (markercompleteListener) {
          google.maps.event.removeListener(markercompleteListener);
        }
        if (overlaycompleteListener) {
          google.maps.event.removeListener(overlaycompleteListener);
        }
        if (polygoncompleteListener) {
          google.maps.event.removeListener(polygoncompleteListener);
        }
        if (polylinecompleteListener) {
          google.maps.event.removeListener(polylinecompleteListener);
        }
        if (rectanglecompleteListener) {
          google.maps.event.removeListener(rectanglecompleteListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var DrawingManagerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(DrawingManagerFunctional);
class DrawingManager extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      drawingManager: null
    });
    _defineProperty(this, "setDrawingManagerCallback", () => {
      if (this.state.drawingManager !== null && this.props.onLoad) {
        this.props.onLoad(this.state.drawingManager);
      }
    });
    invariant(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
  }
  componentDidMount() {
    var drawingManager = new google.maps.drawing.DrawingManager(_objectSpread$e(_objectSpread$e({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });
    this.setState(function setDrawingManager() {
      return {
        drawingManager
      };
    }, this.setDrawingManagerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  }
  componentWillUnmount() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }
      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(DrawingManager, "contextType", MapContext);

function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$f = {
  onAnimationChanged: 'animation_changed',
  onClick: 'click',
  onClickableChanged: 'clickable_changed',
  onCursorChanged: 'cursor_changed',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDraggableChanged: 'draggable_changed',
  onDragStart: 'dragstart',
  onFlatChanged: 'flat_changed',
  onIconChanged: 'icon_changed',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPositionChanged: 'position_changed',
  onRightClick: 'rightclick',
  onShapeChanged: 'shape_changed',
  onTitleChanged: 'title_changed',
  onVisibleChanged: 'visible_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$f = {
  animation(instance, animation) {
    instance.setAnimation(animation);
  },
  clickable(instance, clickable) {
    instance.setClickable(clickable);
  },
  cursor(instance, cursor) {
    instance.setCursor(cursor);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  icon(instance, icon) {
    instance.setIcon(icon);
  },
  label(instance, label) {
    instance.setLabel(label);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  opacity(instance, opacity) {
    instance.setOpacity(opacity);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  shape(instance, shape) {
    instance.setShape(shape);
  },
  title(instance, title) {
    instance.setTitle(title);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$5 = {};
function MarkerFunctional(_ref) {
  var {
    position,
    options,
    clusterer,
    noClustererRedraw,
    children,
    draggable,
    visible,
    animation,
    clickable,
    cursor,
    icon,
    label,
    opacity,
    shape,
    title,
    zIndex,
    onClick,
    onDblClick,
    onDrag,
    onDragEnd,
    onDragStart,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onMouseDown,
    onRightClick,
    onClickableChanged,
    onCursorChanged,
    onAnimationChanged,
    onDraggableChanged,
    onFlatChanged,
    onIconChanged,
    onPositionChanged,
    onShapeChanged,
    onTitleChanged,
    onVisibleChanged,
    onZindexChanged,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickableChangedListener, setClickableChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [cursorChangedListener, setCursorChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [animationChangedListener, setAnimationChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [draggableChangedListener, setDraggableChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [flatChangedListener, setFlatChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [iconChangedListener, setIconChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [positionChangedListener, setPositionChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [shapeChangedListener, setShapeChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [titleChangedListener, setTitleChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [visibleChangedListener, setVisibleChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [zIndexChangedListener, setZindexChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof options !== 'undefined' && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof draggable !== 'undefined' && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [instance, position]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    instance === null || instance === void 0 || instance.setAnimation(animation);
  }, [instance, animation]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && clickable !== undefined) {
      instance.setClickable(clickable);
    }
  }, [instance, clickable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && cursor !== undefined) {
      instance.setCursor(cursor);
    }
  }, [instance, cursor]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && icon !== undefined) {
      instance.setIcon(icon);
    }
  }, [instance, icon]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && label !== undefined) {
      instance.setLabel(label);
    }
  }, [instance, label]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && opacity !== undefined) {
      instance.setOpacity(opacity);
    }
  }, [instance, opacity]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && shape !== undefined) {
      instance.setShape(shape);
    }
  }, [instance, shape]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && title !== undefined) {
      instance.setTitle(title);
    }
  }, [instance, title]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && zIndex !== undefined) {
      instance.setZIndex(zIndex);
    }
  }, [instance, zIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClickableChanged) {
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      setClickableChangedListener(google.maps.event.addListener(instance, 'clickable_changed', onClickableChanged));
    }
  }, [onClickableChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onCursorChanged) {
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      setCursorChangedListener(google.maps.event.addListener(instance, 'cursor_changed', onCursorChanged));
    }
  }, [onCursorChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onAnimationChanged) {
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      setAnimationChangedListener(google.maps.event.addListener(instance, 'animation_changed', onAnimationChanged));
    }
  }, [onAnimationChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDraggableChanged) {
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      setDraggableChangedListener(google.maps.event.addListener(instance, 'draggable_changed', onDraggableChanged));
    }
  }, [onDraggableChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onFlatChanged) {
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      setFlatChangedListener(google.maps.event.addListener(instance, 'flat_changed', onFlatChanged));
    }
  }, [onFlatChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onIconChanged) {
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      setIconChangedListener(google.maps.event.addListener(instance, 'icon_changed', onIconChanged));
    }
  }, [onIconChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      setPositionChangedListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
    }
  }, [onPositionChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onShapeChanged) {
      if (shapeChangedListener !== null) {
        google.maps.event.removeListener(shapeChangedListener);
      }
      setShapeChangedListener(google.maps.event.addListener(instance, 'shape_changed', onShapeChanged));
    }
  }, [onShapeChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onTitleChanged) {
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      setTitleChangedListener(google.maps.event.addListener(instance, 'title_changed', onTitleChanged));
    }
  }, [onTitleChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onVisibleChanged) {
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      setVisibleChangedListener(google.maps.event.addListener(instance, 'visible_changed', onVisibleChanged));
    }
  }, [onVisibleChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      setZindexChangedListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
    }
  }, [onZindexChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var markerOptions = _objectSpread$d(_objectSpread$d(_objectSpread$d({}, options || defaultOptions$5), clusterer ? defaultOptions$5 : {
      map
    }), {}, {
      position
    });
    var marker = new google.maps.Marker(markerOptions);
    if (clusterer) {
      clusterer.addMarker(marker, !!noClustererRedraw);
    } else {
      marker.setMap(map);
    }
    if (position) {
      marker.setPosition(position);
    }
    if (typeof visible !== 'undefined') {
      marker.setVisible(visible);
    }
    if (typeof draggable !== 'undefined') {
      marker.setDraggable(draggable);
    }
    if (typeof clickable !== 'undefined') {
      marker.setClickable(clickable);
    }
    if (typeof cursor === 'string') {
      marker.setCursor(cursor);
    }
    if (icon) {
      marker.setIcon(icon);
    }
    if (typeof label !== 'undefined') {
      marker.setLabel(label);
    }
    if (typeof opacity !== 'undefined') {
      marker.setOpacity(opacity);
    }
    if (shape) {
      marker.setShape(shape);
    }
    if (typeof title === 'string') {
      marker.setTitle(title);
    }
    if (typeof zIndex === 'number') {
      marker.setZIndex(zIndex);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(marker, 'dblclick', onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(marker, 'dragend', onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(marker, 'dragstart', onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(marker, 'mousedown', onMouseDown));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(marker, 'mouseout', onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(marker, 'mouseover', onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(marker, 'mouseup', onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(marker, 'rightclick', onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(marker, 'click', onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(marker, 'drag', onDrag));
    }
    if (onClickableChanged) {
      setClickableChangedListener(google.maps.event.addListener(marker, 'clickable_changed', onClickableChanged));
    }
    if (onCursorChanged) {
      setCursorChangedListener(google.maps.event.addListener(marker, 'cursor_changed', onCursorChanged));
    }
    if (onAnimationChanged) {
      setAnimationChangedListener(google.maps.event.addListener(marker, 'animation_changed', onAnimationChanged));
    }
    if (onDraggableChanged) {
      setDraggableChangedListener(google.maps.event.addListener(marker, 'draggable_changed', onDraggableChanged));
    }
    if (onFlatChanged) {
      setFlatChangedListener(google.maps.event.addListener(marker, 'flat_changed', onFlatChanged));
    }
    if (onIconChanged) {
      setIconChangedListener(google.maps.event.addListener(marker, 'icon_changed', onIconChanged));
    }
    if (onPositionChanged) {
      setPositionChangedListener(google.maps.event.addListener(marker, 'position_changed', onPositionChanged));
    }
    if (onShapeChanged) {
      setShapeChangedListener(google.maps.event.addListener(marker, 'shape_changed', onShapeChanged));
    }
    if (onTitleChanged) {
      setTitleChangedListener(google.maps.event.addListener(marker, 'title_changed', onTitleChanged));
    }
    if (onVisibleChanged) {
      setVisibleChangedListener(google.maps.event.addListener(marker, 'visible_changed', onVisibleChanged));
    }
    if (onZindexChanged) {
      setZindexChangedListener(google.maps.event.addListener(marker, 'zindex_changed', onZindexChanged));
    }
    setInstance(marker);
    if (onLoad) {
      onLoad(marker);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clickableChangedListener !== null) {
        google.maps.event.removeListener(clickableChangedListener);
      }
      if (cursorChangedListener !== null) {
        google.maps.event.removeListener(cursorChangedListener);
      }
      if (animationChangedListener !== null) {
        google.maps.event.removeListener(animationChangedListener);
      }
      if (draggableChangedListener !== null) {
        google.maps.event.removeListener(draggableChangedListener);
      }
      if (flatChangedListener !== null) {
        google.maps.event.removeListener(flatChangedListener);
      }
      if (iconChangedListener !== null) {
        google.maps.event.removeListener(iconChangedListener);
      }
      if (positionChangedListener !== null) {
        google.maps.event.removeListener(positionChangedListener);
      }
      if (titleChangedListener !== null) {
        google.maps.event.removeListener(titleChangedListener);
      }
      if (visibleChangedListener !== null) {
        google.maps.event.removeListener(visibleChangedListener);
      }
      if (zIndexChangedListener !== null) {
        google.maps.event.removeListener(zIndexChangedListener);
      }
      if (onUnmount) {
        onUnmount(marker);
      }
      if (clusterer) {
        clusterer.removeMarker(marker, !!noClustererRedraw);
      } else if (marker) {
        marker.setMap(null);
      }
    };
  }, []);
  var chx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return children ? react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, child => {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child)) {
        return child;
      }
      var elementChild = child;
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(elementChild, {
        anchor: instance
      });
    }) : null;
  }, [children, instance]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: chx
  }) || null;
}
var MarkerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MarkerFunctional);
class Marker extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
  }
  componentDidMount() {
    var _this = this;
    return _asyncToGenerator(function* () {
      var markerOptions = _objectSpread$d(_objectSpread$d(_objectSpread$d({}, _this.props.options || defaultOptions$5), _this.props.clusterer ? defaultOptions$5 : {
        map: _this.context
      }), {}, {
        position: _this.props.position
      });
      // Unfortunately we can't just do this in the contstructor, because the
      // `MapContext` might not be filled in yet.
      _this.marker = new google.maps.Marker(markerOptions);
      if (_this.props.clusterer) {
        _this.props.clusterer.addMarker(_this.marker, !!_this.props.noClustererRedraw);
      } else {
        _this.marker.setMap(_this.context);
      }
      _this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps: {},
        nextProps: _this.props,
        instance: _this.marker
      });
      if (_this.props.onLoad) {
        _this.props.onLoad(_this.marker);
      }
    })();
  }
  componentDidUpdate(prevProps) {
    if (this.marker) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps,
        nextProps: this.props,
        instance: this.marker
      });
    }
  }
  componentWillUnmount() {
    if (!this.marker) {
      return;
    }
    if (this.props.onUnmount) {
      this.props.onUnmount(this.marker);
    }
    unregisterEvents(this.registeredEvents);
    if (this.props.clusterer) {
      this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw);
    } else if (this.marker) {
      this.marker.setMap(null);
    }
  }
  render() {
    var children = this.props.children ? react__WEBPACK_IMPORTED_MODULE_1__.Children.map(this.props.children, child => {
      if (!(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(child)) {
        return child;
      }
      var elementChild = child;
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(elementChild, {
        anchor: this.marker
      });
    }) : null;
    return children || null;
  }
}
_defineProperty(Marker, "contextType", MapContext);

var ClusterIcon = /** @class */function () {
  function ClusterIcon(cluster, styles) {
    cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.cluster = cluster;
    this.clusterClassName = this.cluster.getClusterer().getClusterClass();
    this.className = this.clusterClassName;
    this.styles = styles;
    this.center = undefined;
    this.div = null;
    this.sums = null;
    this.visible = false;
    this.boundsChangedListener = null;
    this.url = '';
    this.height = 0;
    this.width = 0;
    this.anchorText = [0, 0];
    this.anchorIcon = [0, 0];
    this.textColor = 'black';
    this.textSize = 11;
    this.textDecoration = 'none';
    this.fontWeight = 'bold';
    this.fontStyle = 'normal';
    this.fontFamily = 'Arial,sans-serif';
    this.backgroundPosition = '0 0';
    this.cMouseDownInCluster = null;
    this.cDraggingMapByCluster = null;
    this.timeOut = null;
    this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
    this.onBoundsChanged = this.onBoundsChanged.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.draw = this.draw.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.useStyle = this.useStyle.bind(this);
    this.setCenter = this.setCenter.bind(this);
    this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
  }
  ClusterIcon.prototype.onBoundsChanged = function () {
    this.cDraggingMapByCluster = this.cMouseDownInCluster;
  };
  ClusterIcon.prototype.onMouseDown = function () {
    this.cMouseDownInCluster = true;
    this.cDraggingMapByCluster = false;
  };
  ClusterIcon.prototype.onClick = function (event) {
    this.cMouseDownInCluster = false;
    if (!this.cDraggingMapByCluster) {
      var markerClusterer_1 = this.cluster.getClusterer();
      /**
       * This event is fired when a cluster marker is clicked.
       * @name MarkerClusterer#click
       * @param {Cluster} c The cluster that was clicked.
       * @event
       */
      google.maps.event.trigger(markerClusterer_1, 'click', this.cluster);
      google.maps.event.trigger(markerClusterer_1, 'clusterclick', this.cluster); // deprecated name
      // The default click handler follows. Disable it by setting
      // the zoomOnClick property to false.
      if (markerClusterer_1.getZoomOnClick()) {
        // Zoom into the cluster.
        var maxZoom_1 = markerClusterer_1.getMaxZoom();
        var bounds_1 = this.cluster.getBounds();
        var map = markerClusterer_1.getMap();
        if (map !== null && 'fitBounds' in map) {
          map.fitBounds(bounds_1);
        }
        // There is a fix for Issue 170 here:
        this.timeOut = window.setTimeout(function () {
          var map = markerClusterer_1.getMap();
          if (map !== null) {
            if ('fitBounds' in map) {
              map.fitBounds(bounds_1);
            }
            var zoom = map.getZoom() || 0;
            // Don't zoom beyond the max zoom level
            if (maxZoom_1 !== null && zoom > maxZoom_1) {
              map.setZoom(maxZoom_1 + 1);
            }
          }
        }, 100);
      }
      // Prevent event propagation to the map:
      event.cancelBubble = true;
      if (event.stopPropagation) {
        event.stopPropagation();
      }
    }
  };
  ClusterIcon.prototype.onMouseOver = function () {
    /**
     * This event is fired when the mouse moves over a cluster marker.
     * @name MarkerClusterer#mouseover
     * @param {Cluster} c The cluster that the mouse moved over.
     * @event
     */
    google.maps.event.trigger(this.cluster.getClusterer(), 'mouseover', this.cluster);
  };
  ClusterIcon.prototype.onMouseOut = function () {
    /**
     * This event is fired when the mouse moves out of a cluster marker.
     * @name MarkerClusterer#mouseout
     * @param {Cluster} c The cluster that the mouse moved out of.
     * @event
     */
    google.maps.event.trigger(this.cluster.getClusterer(), 'mouseout', this.cluster);
  };
  ClusterIcon.prototype.onAdd = function () {
    var _a;
    this.div = document.createElement('div');
    this.div.className = this.className;
    if (this.visible) {
      this.show();
    }
    (_a = this.getPanes()) === null || _a === void 0 ? void 0 : _a.overlayMouseTarget.appendChild(this.div);
    var map = this.getMap();
    if (map !== null) {
      // Fix for Issue 157
      this.boundsChangedListener = google.maps.event.addListener(map, 'bounds_changed', this.onBoundsChanged);
      this.div.addEventListener('mousedown', this.onMouseDown);
      this.div.addEventListener('click', this.onClick);
      this.div.addEventListener('mouseover', this.onMouseOver);
      this.div.addEventListener('mouseout', this.onMouseOut);
    }
  };
  ClusterIcon.prototype.onRemove = function () {
    if (this.div && this.div.parentNode) {
      this.hide();
      if (this.boundsChangedListener !== null) {
        google.maps.event.removeListener(this.boundsChangedListener);
      }
      this.div.removeEventListener('mousedown', this.onMouseDown);
      this.div.removeEventListener('click', this.onClick);
      this.div.removeEventListener('mouseover', this.onMouseOver);
      this.div.removeEventListener('mouseout', this.onMouseOut);
      this.div.parentNode.removeChild(this.div);
      if (this.timeOut !== null) {
        window.clearTimeout(this.timeOut);
        this.timeOut = null;
      }
      this.div = null;
    }
  };
  ClusterIcon.prototype.draw = function () {
    if (this.visible && this.div !== null && this.center) {
      var pos = this.getPosFromLatLng(this.center);
      this.div.style.top = pos !== null ? "".concat(pos.y, "px") : '0';
      this.div.style.left = pos !== null ? "".concat(pos.x, "px") : '0';
    }
  };
  ClusterIcon.prototype.hide = function () {
    if (this.div) {
      this.div.style.display = 'none';
    }
    this.visible = false;
  };
  ClusterIcon.prototype.show = function () {
    var _a, _b, _c, _d, _e, _f;
    if (this.div && this.center) {
      var divTitle = this.sums === null || typeof this.sums.title === 'undefined' || this.sums.title === '' ? this.cluster.getClusterer().getTitle() : this.sums.title;
      // NOTE: values must be specified in px units
      var bp = this.backgroundPosition.split(' ');
      var spriteH = parseInt(((_a = bp[0]) === null || _a === void 0 ? void 0 : _a.replace(/^\s+|\s+$/g, '')) || '0', 10);
      var spriteV = parseInt(((_b = bp[1]) === null || _b === void 0 ? void 0 : _b.replace(/^\s+|\s+$/g, '')) || '0', 10);
      var pos = this.getPosFromLatLng(this.center);
      this.div.className = this.className;
      this.div.setAttribute('style', "cursor: pointer; position: absolute; top: ".concat(pos !== null ? "".concat(pos.y, "px") : '0', "; left: ").concat(pos !== null ? "".concat(pos.x, "px") : '0', "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
      var img = document.createElement('img');
      img.alt = divTitle;
      img.src = this.url;
      img.width = this.width;
      img.height = this.height;
      img.setAttribute('style', "position: absolute; top: ".concat(spriteV, "px; left: ").concat(spriteH, "px"));
      if (!this.cluster.getClusterer().enableRetinaIcons) {
        img.style.clip = "rect(-".concat(spriteV, "px, -").concat(spriteH + this.width, "px, -").concat(spriteV + this.height, ", -").concat(spriteH, ")");
      }
      var textElm = document.createElement('div');
      textElm.setAttribute('style', "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px"));
      if ((_c = this.sums) === null || _c === void 0 ? void 0 : _c.text) textElm.innerText = "".concat((_d = this.sums) === null || _d === void 0 ? void 0 : _d.text);
      if ((_e = this.sums) === null || _e === void 0 ? void 0 : _e.html) textElm.innerHTML = "".concat((_f = this.sums) === null || _f === void 0 ? void 0 : _f.html);
      this.div.innerHTML = '';
      this.div.appendChild(img);
      this.div.appendChild(textElm);
      this.div.title = divTitle;
      this.div.style.display = '';
    }
    this.visible = true;
  };
  ClusterIcon.prototype.useStyle = function (sums) {
    this.sums = sums;
    var styles = this.cluster.getClusterer().getStyles();
    var style = styles[Math.min(styles.length - 1, Math.max(0, sums.index - 1))];
    if (style) {
      this.url = style.url;
      this.height = style.height;
      this.width = style.width;
      if (style.className) {
        this.className = "".concat(this.clusterClassName, " ").concat(style.className);
      }
      this.anchorText = style.anchorText || [0, 0];
      this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
      this.textColor = style.textColor || 'black';
      this.textSize = style.textSize || 11;
      this.textDecoration = style.textDecoration || 'none';
      this.fontWeight = style.fontWeight || 'bold';
      this.fontStyle = style.fontStyle || 'normal';
      this.fontFamily = style.fontFamily || 'Arial,sans-serif';
      this.backgroundPosition = style.backgroundPosition || '0 0';
    }
  };
  ClusterIcon.prototype.setCenter = function (center) {
    this.center = center;
  };
  ClusterIcon.prototype.getPosFromLatLng = function (latlng) {
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);
    if (pos !== null) {
      pos.x -= this.anchorIcon[1];
      pos.y -= this.anchorIcon[0];
    }
    return pos;
  };
  return ClusterIcon;
}();

/* global google */
var Cluster$1 = /** @class */function () {
  function Cluster(markerClusterer) {
    this.markerClusterer = markerClusterer;
    this.map = this.markerClusterer.getMap();
    this.gridSize = this.markerClusterer.getGridSize();
    this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
    this.averageCenter = this.markerClusterer.getAverageCenter();
    this.markers = [];
    this.center = undefined;
    this.bounds = null;
    this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
    this.getSize = this.getSize.bind(this);
    this.getMarkers = this.getMarkers.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.getMap = this.getMap.bind(this);
    this.getClusterer = this.getClusterer.bind(this);
    this.getBounds = this.getBounds.bind(this);
    this.remove = this.remove.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this);
    this.calculateBounds = this.calculateBounds.bind(this);
    this.updateIcon = this.updateIcon.bind(this);
    this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
  }
  Cluster.prototype.getSize = function () {
    return this.markers.length;
  };
  Cluster.prototype.getMarkers = function () {
    return this.markers;
  };
  Cluster.prototype.getCenter = function () {
    return this.center;
  };
  Cluster.prototype.getMap = function () {
    return this.map;
  };
  Cluster.prototype.getClusterer = function () {
    return this.markerClusterer;
  };
  Cluster.prototype.getBounds = function () {
    var bounds = new google.maps.LatLngBounds(this.center, this.center);
    var markers = this.getMarkers();
    for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
      var marker = markers_1[_i];
      var position = marker.getPosition();
      if (position) {
        bounds.extend(position);
      }
    }
    return bounds;
  };
  Cluster.prototype.remove = function () {
    this.clusterIcon.setMap(null);
    this.markers = [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete this.markers;
  };
  Cluster.prototype.addMarker = function (marker) {
    var _a;
    if (this.isMarkerAlreadyAdded(marker)) {
      return false;
    }
    if (!this.center) {
      var position = marker.getPosition();
      if (position) {
        this.center = position;
        this.calculateBounds();
      }
    } else {
      if (this.averageCenter) {
        var position = marker.getPosition();
        if (position) {
          var length_1 = this.markers.length + 1;
          this.center = new google.maps.LatLng((this.center.lat() * (length_1 - 1) + position.lat()) / length_1, (this.center.lng() * (length_1 - 1) + position.lng()) / length_1);
          this.calculateBounds();
        }
      }
    }
    marker.isAdded = true;
    this.markers.push(marker);
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();
    var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
    if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
      // Zoomed in past max zoom, so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount < this.minClusterSize) {
      // Min cluster size not reached so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount === this.minClusterSize) {
      // Hide the markers that were showing.
      for (var _i = 0, _b = this.markers; _i < _b.length; _i++) {
        var markerElement = _b[_i];
        markerElement.setMap(null);
      }
    } else {
      marker.setMap(null);
    }
    return true;
  };
  Cluster.prototype.isMarkerInClusterBounds = function (marker) {
    if (this.bounds !== null) {
      var position = marker.getPosition();
      if (position) {
        return this.bounds.contains(position);
      }
    }
    return false;
  };
  Cluster.prototype.calculateBounds = function () {
    this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
  };
  Cluster.prototype.updateIcon = function () {
    var _a;
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();
    var zoom = (_a = this.map) === null || _a === void 0 ? void 0 : _a.getZoom();
    if (maxZoom !== null && typeof zoom !== 'undefined' && zoom > maxZoom) {
      this.clusterIcon.hide();
      return;
    }
    if (mCount < this.minClusterSize) {
      // Min cluster size not yet reached.
      this.clusterIcon.hide();
      return;
    }
    if (this.center) {
      this.clusterIcon.setCenter(this.center);
    }
    this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
    this.clusterIcon.show();
  };
  Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
    if (this.markers.includes) {
      return this.markers.includes(marker);
    }
    for (var i = 0; i < this.markers.length; i++) {
      if (marker === this.markers[i]) {
        return true;
      }
    }
    return false;
  };
  return Cluster;
}();

/* global google */
/* eslint-disable filenames/match-regex */
/**
 * Supports up to 9007199254740991 (Number.MAX_SAFE_INTEGER) markers
 * which is not a problem as max array length is 4294967296 (2**32)
 */
function CALCULATOR(markers, numStyles) {
  var count = markers.length;
  var numberOfDigits = count.toString().length;
  var index = Math.min(numberOfDigits, numStyles);
  return {
    text: count.toString(),
    index: index,
    title: ''
  };
}
var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer = /** @class */function () {
  function Clusterer(map, optMarkers, optOptions) {
    if (optMarkers === void 0) {
      optMarkers = [];
    }
    if (optOptions === void 0) {
      optOptions = {};
    }
    this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this);
    this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this);
    this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this);
    this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this);
    this.addToClosestCluster = this.addToClosestCluster.bind(this);
    this.getImageExtension = this.getImageExtension.bind(this);
    this.setImageExtension = this.setImageExtension.bind(this);
    this.getExtendedBounds = this.getExtendedBounds.bind(this);
    this.getAverageCenter = this.getAverageCenter.bind(this);
    this.setAverageCenter = this.setAverageCenter.bind(this);
    this.getTotalClusters = this.getTotalClusters.bind(this);
    this.fitMapToMarkers = this.fitMapToMarkers.bind(this);
    this.getIgnoreHidden = this.getIgnoreHidden.bind(this);
    this.setIgnoreHidden = this.setIgnoreHidden.bind(this);
    this.getClusterClass = this.getClusterClass.bind(this);
    this.setClusterClass = this.setClusterClass.bind(this);
    this.getTotalMarkers = this.getTotalMarkers.bind(this);
    this.getZoomOnClick = this.getZoomOnClick.bind(this);
    this.setZoomOnClick = this.setZoomOnClick.bind(this);
    this.getBatchSizeIE = this.getBatchSizeIE.bind(this);
    this.setBatchSizeIE = this.setBatchSizeIE.bind(this);
    this.createClusters = this.createClusters.bind(this);
    this.onZoomChanged = this.onZoomChanged.bind(this);
    this.getImageSizes = this.getImageSizes.bind(this);
    this.setImageSizes = this.setImageSizes.bind(this);
    this.getCalculator = this.getCalculator.bind(this);
    this.setCalculator = this.setCalculator.bind(this);
    this.removeMarkers = this.removeMarkers.bind(this);
    this.resetViewport = this.resetViewport.bind(this);
    this.getImagePath = this.getImagePath.bind(this);
    this.setImagePath = this.setImagePath.bind(this);
    this.pushMarkerTo = this.pushMarkerTo.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
    this.clearMarkers = this.clearMarkers.bind(this);
    this.setupStyles = this.setupStyles.bind(this);
    this.getGridSize = this.getGridSize.bind(this);
    this.setGridSize = this.setGridSize.bind(this);
    this.getClusters = this.getClusters.bind(this);
    this.getMaxZoom = this.getMaxZoom.bind(this);
    this.setMaxZoom = this.setMaxZoom.bind(this);
    this.getMarkers = this.getMarkers.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.setStyles = this.setStyles.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.repaint = this.repaint.bind(this);
    this.onIdle = this.onIdle.bind(this);
    this.redraw = this.redraw.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.draw = this.draw.bind(this);
    this.extend = this.extend.bind(this);
    this.extend(Clusterer, google.maps.OverlayView);
    this.markers = [];
    this.clusters = [];
    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
    this.gridSize = optOptions.gridSize || 60;
    this.minClusterSize = optOptions.minimumClusterSize || 2;
    this.maxZoom = optOptions.maxZoom || null;
    this.styles = optOptions.styles || [];
    this.title = optOptions.title || '';
    this.zoomOnClick = true;
    if (optOptions.zoomOnClick !== undefined) {
      this.zoomOnClick = optOptions.zoomOnClick;
    }
    this.averageCenter = false;
    if (optOptions.averageCenter !== undefined) {
      this.averageCenter = optOptions.averageCenter;
    }
    this.ignoreHidden = false;
    if (optOptions.ignoreHidden !== undefined) {
      this.ignoreHidden = optOptions.ignoreHidden;
    }
    this.enableRetinaIcons = false;
    if (optOptions.enableRetinaIcons !== undefined) {
      this.enableRetinaIcons = optOptions.enableRetinaIcons;
    }
    this.imagePath = optOptions.imagePath || IMAGE_PATH;
    this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
    this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
    this.calculator = optOptions.calculator || CALCULATOR;
    this.batchSize = optOptions.batchSize || BATCH_SIZE;
    this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
    this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;
    if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
      // Try to avoid IE timeout when processing a huge number of markers:
      this.batchSize = this.batchSizeIE;
    }
    this.timerRefStatic = null;
    this.setupStyles();
    this.addMarkers(optMarkers, true);
    this.setMap(map); // Note: this causes onAdd to be called
  }
  Clusterer.prototype.onZoomChanged = function () {
    var _a, _b;
    this.resetViewport(false);
    // Workaround for this Google bug: when map is at level 0 and "-" of
    // zoom slider is clicked, a "zoom_changed" event is fired even though
    // the map doesn't zoom out any further. In this situation, no "idle"
    // event is triggered so the cluster markers that have been removed
    // do not get redrawn. Same goes for a zoom in at maxZoom.
    if (((_a = this.getMap()) === null || _a === void 0 ? void 0 : _a.getZoom()) === (this.get('minZoom') || 0) || ((_b = this.getMap()) === null || _b === void 0 ? void 0 : _b.getZoom()) === this.get('maxZoom')) {
      google.maps.event.trigger(this, 'idle');
    }
  };
  Clusterer.prototype.onIdle = function () {
    this.redraw();
  };
  Clusterer.prototype.onAdd = function () {
    var map = this.getMap();
    this.activeMap = map;
    this.ready = true;
    this.repaint();
    if (map !== null) {
      // Add the map event listeners
      this.listeners = [google.maps.event.addListener(map, 'zoom_changed', this.onZoomChanged), google.maps.event.addListener(map, 'idle', this.onIdle)];
    }
  };
  Clusterer.prototype.onRemove = function () {
    // Put all the managed markers back on the map:
    for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
      var marker = _a[_i];
      if (marker.getMap() !== this.activeMap) {
        marker.setMap(this.activeMap);
      }
    }
    // Remove all clusters:
    for (var _b = 0, _c = this.clusters; _b < _c.length; _b++) {
      var cluster = _c[_b];
      cluster.remove();
    }
    this.clusters = [];
    // Remove map event listeners:
    for (var _d = 0, _e = this.listeners; _d < _e.length; _d++) {
      var listener = _e[_d];
      google.maps.event.removeListener(listener);
    }
    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
  };
  Clusterer.prototype.draw = function () {
    return;
  };
  Clusterer.prototype.getMap = function () {
    return null;
  };
  Clusterer.prototype.getPanes = function () {
    return null;
  };
  Clusterer.prototype.getProjection = function () {
    return {
      fromContainerPixelToLatLng: function fromContainerPixelToLatLng() {
        return null;
      },
      fromDivPixelToLatLng: function fromDivPixelToLatLng() {
        return null;
      },
      fromLatLngToContainerPixel: function fromLatLngToContainerPixel() {
        return null;
      },
      fromLatLngToDivPixel: function fromLatLngToDivPixel() {
        return null;
      },
      getVisibleRegion: function getVisibleRegion() {
        return null;
      },
      getWorldWidth: function getWorldWidth() {
        return 0;
      }
    };
  };
  Clusterer.prototype.setMap = function () {
    return;
  };
  Clusterer.prototype.addListener = function () {
    return {
      remove: function remove() {
        return;
      }
    };
  };
  Clusterer.prototype.bindTo = function () {
    return;
  };
  Clusterer.prototype.get = function () {
    return;
  };
  Clusterer.prototype.notify = function () {
    return;
  };
  Clusterer.prototype.set = function () {
    return;
  };
  Clusterer.prototype.setValues = function () {
    return;
  };
  Clusterer.prototype.unbind = function () {
    return;
  };
  Clusterer.prototype.unbindAll = function () {
    return;
  };
  Clusterer.prototype.setupStyles = function () {
    if (this.styles.length > 0) {
      return;
    }
    for (var i = 0; i < this.imageSizes.length; i++) {
      this.styles.push({
        url: "".concat(this.imagePath + (i + 1), ".").concat(this.imageExtension),
        height: this.imageSizes[i] || 0,
        width: this.imageSizes[i] || 0
      });
    }
  };
  Clusterer.prototype.fitMapToMarkers = function () {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();
    for (var _i = 0, markers_1 = markers; _i < markers_1.length; _i++) {
      var marker = markers_1[_i];
      var position = marker.getPosition();
      if (position) {
        bounds.extend(position);
      }
    }
    var map = this.getMap();
    if (map !== null && 'fitBounds' in map) {
      map.fitBounds(bounds);
    }
  };
  Clusterer.prototype.getGridSize = function () {
    return this.gridSize;
  };
  Clusterer.prototype.setGridSize = function (gridSize) {
    this.gridSize = gridSize;
  };
  Clusterer.prototype.getMinimumClusterSize = function () {
    return this.minClusterSize;
  };
  Clusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
    this.minClusterSize = minimumClusterSize;
  };
  Clusterer.prototype.getMaxZoom = function () {
    return this.maxZoom;
  };
  Clusterer.prototype.setMaxZoom = function (maxZoom) {
    this.maxZoom = maxZoom;
  };
  Clusterer.prototype.getStyles = function () {
    return this.styles;
  };
  Clusterer.prototype.setStyles = function (styles) {
    this.styles = styles;
  };
  Clusterer.prototype.getTitle = function () {
    return this.title;
  };
  Clusterer.prototype.setTitle = function (title) {
    this.title = title;
  };
  Clusterer.prototype.getZoomOnClick = function () {
    return this.zoomOnClick;
  };
  Clusterer.prototype.setZoomOnClick = function (zoomOnClick) {
    this.zoomOnClick = zoomOnClick;
  };
  Clusterer.prototype.getAverageCenter = function () {
    return this.averageCenter;
  };
  Clusterer.prototype.setAverageCenter = function (averageCenter) {
    this.averageCenter = averageCenter;
  };
  Clusterer.prototype.getIgnoreHidden = function () {
    return this.ignoreHidden;
  };
  Clusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
    this.ignoreHidden = ignoreHidden;
  };
  Clusterer.prototype.getEnableRetinaIcons = function () {
    return this.enableRetinaIcons;
  };
  Clusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
    this.enableRetinaIcons = enableRetinaIcons;
  };
  Clusterer.prototype.getImageExtension = function () {
    return this.imageExtension;
  };
  Clusterer.prototype.setImageExtension = function (imageExtension) {
    this.imageExtension = imageExtension;
  };
  Clusterer.prototype.getImagePath = function () {
    return this.imagePath;
  };
  Clusterer.prototype.setImagePath = function (imagePath) {
    this.imagePath = imagePath;
  };
  Clusterer.prototype.getImageSizes = function () {
    return this.imageSizes;
  };
  Clusterer.prototype.setImageSizes = function (imageSizes) {
    this.imageSizes = imageSizes;
  };
  Clusterer.prototype.getCalculator = function () {
    return this.calculator;
  };
  Clusterer.prototype.setCalculator = function (calculator) {
    this.calculator = calculator;
  };
  Clusterer.prototype.getBatchSizeIE = function () {
    return this.batchSizeIE;
  };
  Clusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
    this.batchSizeIE = batchSizeIE;
  };
  Clusterer.prototype.getClusterClass = function () {
    return this.clusterClass;
  };
  Clusterer.prototype.setClusterClass = function (clusterClass) {
    this.clusterClass = clusterClass;
  };
  Clusterer.prototype.getMarkers = function () {
    return this.markers;
  };
  Clusterer.prototype.getTotalMarkers = function () {
    return this.markers.length;
  };
  Clusterer.prototype.getClusters = function () {
    return this.clusters;
  };
  Clusterer.prototype.getTotalClusters = function () {
    return this.clusters.length;
  };
  Clusterer.prototype.addMarker = function (marker, optNoDraw) {
    this.pushMarkerTo(marker);
    if (!optNoDraw) {
      this.redraw();
    }
  };
  Clusterer.prototype.addMarkers = function (markers, optNoDraw) {
    for (var key in markers) {
      if (Object.prototype.hasOwnProperty.call(markers, key)) {
        var marker = markers[key];
        if (marker) {
          this.pushMarkerTo(marker);
        }
      }
    }
    if (!optNoDraw) {
      this.redraw();
    }
  };
  Clusterer.prototype.pushMarkerTo = function (marker) {
    var _this = this;
    // If the marker is draggable add a listener so we can update the clusters on the dragend:
    if (marker.getDraggable()) {
      google.maps.event.addListener(marker, 'dragend', function () {
        if (_this.ready) {
          marker.isAdded = false;
          _this.repaint();
        }
      });
    }
    marker.isAdded = false;
    this.markers.push(marker);
  };
  Clusterer.prototype.removeMarker_ = function (marker) {
    var index = -1;
    if (this.markers.indexOf) {
      index = this.markers.indexOf(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          index = i;
          break;
        }
      }
    }
    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }
    marker.setMap(null);
    this.markers.splice(index, 1); // Remove the marker from the list of managed markers
    return true;
  };
  Clusterer.prototype.removeMarker = function (marker, optNoDraw) {
    var removed = this.removeMarker_(marker);
    if (!optNoDraw && removed) {
      this.repaint();
    }
    return removed;
  };
  Clusterer.prototype.removeMarkers = function (markers, optNoDraw) {
    var removed = false;
    for (var _i = 0, markers_2 = markers; _i < markers_2.length; _i++) {
      var marker = markers_2[_i];
      removed = removed || this.removeMarker_(marker);
    }
    if (!optNoDraw && removed) {
      this.repaint();
    }
    return removed;
  };
  Clusterer.prototype.clearMarkers = function () {
    this.resetViewport(true);
    this.markers = [];
  };
  Clusterer.prototype.repaint = function () {
    var oldClusters = this.clusters.slice();
    this.clusters = [];
    this.resetViewport(false);
    this.redraw();
    // Remove the old clusters.
    // Do it in a timeout to prevent blinking effect.
    setTimeout(function timeout() {
      for (var _i = 0, oldClusters_1 = oldClusters; _i < oldClusters_1.length; _i++) {
        var oldCluster = oldClusters_1[_i];
        oldCluster.remove();
      }
    }, 0);
  };
  Clusterer.prototype.getExtendedBounds = function (bounds) {
    var projection = this.getProjection();
    // Convert the points to pixels and the extend out by the grid size.
    var trPix = projection.fromLatLngToDivPixel(
    // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
    if (trPix !== null) {
      trPix.x += this.gridSize;
      trPix.y -= this.gridSize;
    }
    var blPix = projection.fromLatLngToDivPixel(
    // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
    if (blPix !== null) {
      blPix.x -= this.gridSize;
      blPix.y += this.gridSize;
    }
    // Extend the bounds to contain the new bounds.
    if (trPix !== null) {
      // Convert the pixel points back to LatLng nw
      var point1 = projection.fromDivPixelToLatLng(trPix);
      if (point1 !== null) {
        bounds.extend(point1);
      }
    }
    if (blPix !== null) {
      // Convert the pixel points back to LatLng sw
      var point2 = projection.fromDivPixelToLatLng(blPix);
      if (point2 !== null) {
        bounds.extend(point2);
      }
    }
    return bounds;
  };
  Clusterer.prototype.redraw = function () {
    // Redraws all the clusters.
    this.createClusters(0);
  };
  Clusterer.prototype.resetViewport = function (optHide) {
    // Remove all the clusters
    for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
      var cluster = _a[_i];
      cluster.remove();
    }
    this.clusters = [];
    // Reset the markers to not be added and to be removed from the map.
    for (var _b = 0, _c = this.markers; _b < _c.length; _b++) {
      var marker = _c[_b];
      marker.isAdded = false;
      if (optHide) {
        marker.setMap(null);
      }
    }
  };
  Clusterer.prototype.distanceBetweenPoints = function (p1, p2) {
    var R = 6371; // Radius of the Earth in km
    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };
  Clusterer.prototype.isMarkerInBounds = function (marker, bounds) {
    var position = marker.getPosition();
    if (position) {
      return bounds.contains(position);
    }
    return false;
  };
  Clusterer.prototype.addToClosestCluster = function (marker) {
    var cluster;
    var distance = 40000; // Some large number
    var clusterToAddTo = null;
    for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
      var clusterElement = _a[_i];
      cluster = clusterElement;
      var center = cluster.getCenter();
      var position = marker.getPosition();
      if (center && position) {
        var d = this.distanceBetweenPoints(center, position);
        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }
    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      cluster = new Cluster$1(this);
      cluster.addMarker(marker);
      this.clusters.push(cluster);
    }
  };
  Clusterer.prototype.createClusters = function (iFirst) {
    var _this = this;
    if (!this.ready) {
      return;
    }
    // Cancel previous batch processing if we're working on the first batch:
    if (iFirst === 0) {
      /**
       * This event is fired when the <code>Clusterer</code> begins
       *  clustering markers.
       * @name Clusterer#clusteringbegin
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */
      google.maps.event.trigger(this, 'clusteringbegin', this);
      if (this.timerRefStatic !== null) {
        window.clearTimeout(this.timerRefStatic);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete this.timerRefStatic;
      }
    }
    var map = this.getMap();
    var bounds = map !== null && 'getBounds' in map ? map.getBounds() : null;
    var zoom = (map === null || map === void 0 ? void 0 : map.getZoom()) || 0;
    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    //
    // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
    var mapBounds = zoom > 3 ? new google.maps.LatLngBounds(bounds === null || bounds === void 0 ? void 0 : bounds.getSouthWest(), bounds === null || bounds === void 0 ? void 0 : bounds.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    var extendedMapBounds = this.getExtendedBounds(mapBounds);
    var iLast = Math.min(iFirst + this.batchSize, this.markers.length);
    for (var i = iFirst; i < iLast; i++) {
      var marker = this.markers[i];
      if (marker && !marker.isAdded && this.isMarkerInBounds(marker, extendedMapBounds) && (!this.ignoreHidden || this.ignoreHidden && marker.getVisible())) {
        this.addToClosestCluster(marker);
      }
    }
    if (iLast < this.markers.length) {
      this.timerRefStatic = window.setTimeout(function () {
        _this.createClusters(iLast);
      }, 0);
    } else {
      this.timerRefStatic = null;
      /**
       * This event is fired when the <code>Clusterer</code> stops
       *  clustering markers.
       * @name Clusterer#clusteringend
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */
      google.maps.event.trigger(this, 'clusteringend', this);
      for (var _i = 0, _a = this.clusters; _i < _a.length; _i++) {
        var cluster = _a[_i];
        cluster.updateIcon();
      }
    }
  };
  Clusterer.prototype.extend = function (obj1, obj2) {
    return function applyExtend(object) {
      for (var property in object.prototype) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        var prop = property;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.prototype[prop] = object.prototype[prop];
      }
      return this;
    }.apply(obj1, [obj2]);
  };
  return Clusterer;
}();

function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$e = {
  onClick: 'click',
  onClusteringBegin: 'clusteringbegin',
  onClusteringEnd: 'clusteringend',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover'
};
var updaterMap$e = {
  averageCenter(instance, averageCenter) {
    instance.setAverageCenter(averageCenter);
  },
  batchSizeIE(instance, batchSizeIE) {
    instance.setBatchSizeIE(batchSizeIE);
  },
  calculator(instance, calculator) {
    instance.setCalculator(calculator);
  },
  clusterClass(instance, clusterClass) {
    instance.setClusterClass(clusterClass);
  },
  enableRetinaIcons(instance, enableRetinaIcons) {
    instance.setEnableRetinaIcons(enableRetinaIcons);
  },
  gridSize(instance, gridSize) {
    instance.setGridSize(gridSize);
  },
  ignoreHidden(instance, ignoreHidden) {
    instance.setIgnoreHidden(ignoreHidden);
  },
  imageExtension(instance, imageExtension) {
    instance.setImageExtension(imageExtension);
  },
  imagePath(instance, imagePath) {
    instance.setImagePath(imagePath);
  },
  imageSizes(instance, imageSizes) {
    instance.setImageSizes(imageSizes);
  },
  maxZoom(instance, maxZoom) {
    instance.setMaxZoom(maxZoom);
  },
  minimumClusterSize(instance, minimumClusterSize) {
    instance.setMinimumClusterSize(minimumClusterSize);
  },
  styles(instance, styles) {
    instance.setStyles(styles);
  },
  title(instance, title) {
    instance.setTitle(title);
  },
  zoomOnClick(instance, zoomOnClick) {
    instance.setZoomOnClick(zoomOnClick);
  }
};
var defaultOptions$4 = {};
function MarkerClustererFunctional(props) {
  var {
    children,
    options,
    averageCenter,
    batchSizeIE,
    calculator,
    clusterClass,
    enableRetinaIcons,
    gridSize,
    ignoreHidden,
    imageExtension,
    imagePath,
    imageSizes,
    maxZoom,
    minimumClusterSize,
    styles,
    title,
    zoomOnClick,
    onClick,
    onClusteringBegin,
    onClusteringEnd,
    onMouseOver,
    onMouseOut,
    onLoad,
    onUnmount
  } = props;
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clusteringBeginListener, setClusteringBeginListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clusteringEndListener, setClusteringEndListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, eventMap$e.onMouseOut, onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, eventMap$e.onMouseOver, onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, eventMap$e.onClick, onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClusteringBegin) {
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
  }, [onClusteringBegin]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClusteringEnd) {
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      setClusteringBeginListener(google.maps.event.addListener(instance, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
  }, [onClusteringEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof averageCenter !== 'undefined' && instance !== null) {
      updaterMap$e.averageCenter(instance, averageCenter);
    }
  }, [instance, averageCenter]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof batchSizeIE !== 'undefined' && instance !== null) {
      updaterMap$e.batchSizeIE(instance, batchSizeIE);
    }
  }, [instance, batchSizeIE]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof calculator !== 'undefined' && instance !== null) {
      updaterMap$e.calculator(instance, calculator);
    }
  }, [instance, calculator]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof clusterClass !== 'undefined' && instance !== null) {
      updaterMap$e.clusterClass(instance, clusterClass);
    }
  }, [instance, clusterClass]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof enableRetinaIcons !== 'undefined' && instance !== null) {
      updaterMap$e.enableRetinaIcons(instance, enableRetinaIcons);
    }
  }, [instance, enableRetinaIcons]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof gridSize !== 'undefined' && instance !== null) {
      updaterMap$e.gridSize(instance, gridSize);
    }
  }, [instance, gridSize]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof ignoreHidden !== 'undefined' && instance !== null) {
      updaterMap$e.ignoreHidden(instance, ignoreHidden);
    }
  }, [instance, ignoreHidden]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof imageExtension !== 'undefined' && instance !== null) {
      updaterMap$e.imageExtension(instance, imageExtension);
    }
  }, [instance, imageExtension]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof imagePath !== 'undefined' && instance !== null) {
      updaterMap$e.imagePath(instance, imagePath);
    }
  }, [instance, imagePath]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof imageSizes !== 'undefined' && instance !== null) {
      updaterMap$e.imageSizes(instance, imageSizes);
    }
  }, [instance, imageSizes]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof maxZoom !== 'undefined' && instance !== null) {
      updaterMap$e.maxZoom(instance, maxZoom);
    }
  }, [instance, maxZoom]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof minimumClusterSize !== 'undefined' && instance !== null) {
      updaterMap$e.minimumClusterSize(instance, minimumClusterSize);
    }
  }, [instance, minimumClusterSize]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof styles !== 'undefined' && instance !== null) {
      updaterMap$e.styles(instance, styles);
    }
  }, [instance, styles]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof title !== 'undefined' && instance !== null) {
      updaterMap$e.title(instance, title);
    }
  }, [instance, title]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof zoomOnClick !== 'undefined' && instance !== null) {
      updaterMap$e.zoomOnClick(instance, zoomOnClick);
    }
  }, [instance, zoomOnClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!map) return;
    var clustererOptions = _objectSpread$c({}, options || defaultOptions$4);
    var clusterer = new Clusterer(map, [], clustererOptions);
    if (averageCenter) {
      updaterMap$e.averageCenter(clusterer, averageCenter);
    }
    if (batchSizeIE) {
      updaterMap$e.batchSizeIE(clusterer, batchSizeIE);
    }
    if (calculator) {
      updaterMap$e.calculator(clusterer, calculator);
    }
    if (clusterClass) {
      updaterMap$e.clusterClass(clusterer, clusterClass);
    }
    if (enableRetinaIcons) {
      updaterMap$e.enableRetinaIcons(clusterer, enableRetinaIcons);
    }
    if (gridSize) {
      updaterMap$e.gridSize(clusterer, gridSize);
    }
    if (ignoreHidden) {
      updaterMap$e.ignoreHidden(clusterer, ignoreHidden);
    }
    if (imageExtension) {
      updaterMap$e.imageExtension(clusterer, imageExtension);
    }
    if (imagePath) {
      updaterMap$e.imagePath(clusterer, imagePath);
    }
    if (imageSizes) {
      updaterMap$e.imageSizes(clusterer, imageSizes);
    }
    if (maxZoom) {
      updaterMap$e.maxZoom(clusterer, maxZoom);
    }
    if (minimumClusterSize) {
      updaterMap$e.minimumClusterSize(clusterer, minimumClusterSize);
    }
    if (styles) {
      updaterMap$e.styles(clusterer, styles);
    }
    if (title) {
      updaterMap$e.title(clusterer, title);
    }
    if (zoomOnClick) {
      updaterMap$e.zoomOnClick(clusterer, zoomOnClick);
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOut, onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(clusterer, eventMap$e.onMouseOver, onMouseOver));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(clusterer, eventMap$e.onClick, onClick));
    }
    if (onClusteringBegin) {
      setClusteringBeginListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringBegin, onClusteringBegin));
    }
    if (onClusteringEnd) {
      setClusteringEndListener(google.maps.event.addListener(clusterer, eventMap$e.onClusteringEnd, onClusteringEnd));
    }
    setInstance(clusterer);
    if (onLoad) {
      onLoad(clusterer);
    }
    return () => {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (clusteringBeginListener !== null) {
        google.maps.event.removeListener(clusteringBeginListener);
      }
      if (clusteringEndListener !== null) {
        google.maps.event.removeListener(clusteringEndListener);
      }
      if (onUnmount) {
        onUnmount(clusterer);
      }
    };
  }, []);
  return instance !== null ? children(instance) || null : null;
}
var MarkerClustererF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MarkerClustererFunctional);
class ClustererComponent extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      markerClusterer: null
    });
    _defineProperty(this, "setClustererCallback", () => {
      if (this.state.markerClusterer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.markerClusterer);
      }
    });
  }
  componentDidMount() {
    if (this.context) {
      var markerClusterer = new Clusterer(this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer
      });
      this.setState(() => {
        return {
          markerClusterer
        };
      }, this.setClustererCallback);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$e,
        eventMap: eventMap$e,
        prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }
      unregisterEvents(this.registeredEvents);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.state.markerClusterer.setMap(null);
    }
  }
  render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  }
}
_defineProperty(ClustererComponent, "contextType", MapContext);

// This handler prevents an event in the InfoBox from being passed on to the map.
function cancelHandler(event) {
  event.cancelBubble = true;
  if (event.stopPropagation) {
    event.stopPropagation();
  }
}
var InfoBox = /** @class */function () {
  function InfoBox(options) {
    if (options === void 0) {
      options = {};
    }
    this.getCloseClickHandler = this.getCloseClickHandler.bind(this);
    this.closeClickHandler = this.closeClickHandler.bind(this);
    this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
    this.getCloseBoxImg = this.getCloseBoxImg.bind(this);
    this.getBoxWidths = this.getBoxWidths.bind(this);
    this.setBoxStyle = this.setBoxStyle.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.setContent = this.setContent.bind(this);
    this.setVisible = this.setVisible.bind(this);
    this.getContent = this.getContent.bind(this);
    this.getVisible = this.getVisible.bind(this);
    this.setZIndex = this.setZIndex.bind(this);
    this.getZIndex = this.getZIndex.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.panBox = this.panBox.bind(this);
    this.extend = this.extend.bind(this);
    this.close = this.close.bind(this);
    this.draw = this.draw.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.open = this.open.bind(this);
    this.extend(InfoBox, google.maps.OverlayView);
    // Standard options (in common with google.maps.InfoWindow):
    this.content = options.content || '';
    this.disableAutoPan = options.disableAutoPan || false;
    this.maxWidth = options.maxWidth || 0;
    this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
    this.position = options.position || new google.maps.LatLng(0, 0);
    this.zIndex = options.zIndex || null;
    // Additional options (unique to InfoBox):
    this.boxClass = options.boxClass || 'infoBox';
    this.boxStyle = options.boxStyle || {};
    this.closeBoxMargin = options.closeBoxMargin || '2px';
    this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
    if (options.closeBoxURL === '') {
      this.closeBoxURL = '';
    }
    this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);
    if (typeof options.visible === 'undefined') {
      if (typeof options.isHidden === 'undefined') {
        options.visible = true;
      } else {
        options.visible = !options.isHidden;
      }
    }
    this.isHidden = !options.visible;
    this.alignBottom = options.alignBottom || false;
    this.pane = options.pane || 'floatPane';
    this.enableEventPropagation = options.enableEventPropagation || false;
    this.div = null;
    this.closeListener = null;
    this.moveListener = null;
    this.mapListener = null;
    this.contextListener = null;
    this.eventListeners = null;
    this.fixedWidthSet = null;
  }
  InfoBox.prototype.createInfoBoxDiv = function () {
    var _this = this;
    // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    var ignoreHandler = function ignoreHandler(event) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
      if (!_this.enableEventPropagation) {
        cancelHandler(event);
      }
    };
    if (!this.div) {
      this.div = document.createElement('div');
      this.setBoxStyle();
      if (typeof this.content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + this.content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(this.content);
      }
      var panes = this.getPanes();
      if (panes !== null) {
        panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM
      }
      this.addClickHandler();
      if (this.div.style.width) {
        this.fixedWidthSet = true;
      } else {
        if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
          this.div.style.width = this.maxWidth + 'px';
          this.fixedWidthSet = true;
        } else {
          // The following code is needed to overcome problems with MSIE
          var bw = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
          this.fixedWidthSet = false;
        }
      }
      this.panBox(this.disableAutoPan);
      if (!this.enableEventPropagation) {
        this.eventListeners = [];
        // Cancel event propagation.
        // Note: mousemove not included (to resolve Issue 152)
        var events = ['mousedown', 'mouseover', 'mouseout', 'mouseup', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'];
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
          var event_1 = events_1[_i];
          this.eventListeners.push(google.maps.event.addListener(this.div, event_1, cancelHandler));
        }
        // Workaround for Google bug that causes the cursor to change to a pointer
        // when the mouse moves over a marker underneath InfoBox.
        this.eventListeners.push(google.maps.event.addListener(this.div, 'mouseover', function () {
          if (_this.div) {
            _this.div.style.cursor = 'default';
          }
        }));
      }
      this.contextListener = google.maps.event.addListener(this.div, 'contextmenu', ignoreHandler);
      /**
       * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
       * @name InfoBox#domready
       * @event
       */
      google.maps.event.trigger(this, 'domready');
    }
  };
  InfoBox.prototype.getCloseBoxImg = function () {
    var img = '';
    if (this.closeBoxURL !== '') {
      img = '<img alt=""';
      img += ' aria-hidden="true"';
      img += " src='" + this.closeBoxURL + "'";
      img += ' align=right'; // Do this because Opera chokes on style='float: right;'
      img += " style='";
      img += ' position: relative;'; // Required by MSIE
      img += ' cursor: pointer;';
      img += ' margin: ' + this.closeBoxMargin + ';';
      img += "'>";
    }
    return img;
  };
  InfoBox.prototype.addClickHandler = function () {
    this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== '' ? google.maps.event.addListener(this.div.firstChild, 'click', this.getCloseClickHandler()) : null;
  };
  InfoBox.prototype.closeClickHandler = function (event) {
    // 1.0.3 fix: Always prevent propagation of a close box click to the map:
    event.cancelBubble = true;
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    /**
     * This event is fired when the InfoBox's close box is clicked.
     * @name InfoBox#closeclick
     * @event
     */
    google.maps.event.trigger(this, 'closeclick');
    this.close();
  };
  InfoBox.prototype.getCloseClickHandler = function () {
    return this.closeClickHandler;
  };
  InfoBox.prototype.panBox = function (disablePan) {
    if (this.div && !disablePan) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      var map = this.getMap();
      // Only pan if attached to map, not panorama
      if (map instanceof google.maps.Map) {
        var xOffset = 0;
        var yOffset = 0;
        var bounds = map.getBounds();
        if (bounds && !bounds.contains(this.position)) {
          // Marker not in visible area of map, so set center
          // of map to the marker position first.
          map.setCenter(this.position);
        }
        var mapDiv = map.getDiv();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var mapWidth = mapDiv.offsetWidth;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var mapHeight = mapDiv.offsetHeight;
        var iwOffsetX = this.pixelOffset.width;
        var iwOffsetY = this.pixelOffset.height;
        var iwWidth = this.div.offsetWidth;
        var iwHeight = this.div.offsetHeight;
        var padX = this.infoBoxClearance.width;
        var padY = this.infoBoxClearance.height;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToContainerPixel(this.position);
        if (pixPosition !== null) {
          if (pixPosition.x < -iwOffsetX + padX) {
            xOffset = pixPosition.x + iwOffsetX - padX;
          } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
            xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
          }
          if (this.alignBottom) {
            if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
              yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
            } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
              yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
            }
          } else {
            if (pixPosition.y < -iwOffsetY + padY) {
              yOffset = pixPosition.y + iwOffsetY - padY;
            } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
              yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
            }
          }
        }
        if (!(xOffset === 0 && yOffset === 0)) {
          // Move the map to the shifted center.
          map.panBy(xOffset, yOffset);
        }
      }
    }
  };
  InfoBox.prototype.setBoxStyle = function () {
    if (this.div) {
      // Apply style values from the style sheet defined in the boxClass parameter:
      this.div.className = this.boxClass;
      // Clear existing inline style values:
      this.div.style.cssText = '';
      // Apply style values defined in the boxStyle parameter:
      var boxStyle = this.boxStyle;
      for (var i in boxStyle) {
        if (Object.prototype.hasOwnProperty.call(boxStyle, i)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this.div.style[i] = boxStyle[i];
        }
      }
      // Fix for iOS disappearing InfoBox problem
      // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad
      this.div.style.webkitTransform = 'translateZ(0)';
      // Fix up opacity style for benefit of MSIE
      if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
        // See http://www.quirksmode.org/css/opacity.html
        var opacity = parseFloat(this.div.style.opacity || '');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
        this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      }
      // Apply required styles
      this.div.style.position = 'absolute';
      this.div.style.visibility = 'hidden';
      if (this.zIndex !== null) {
        this.div.style.zIndex = this.zIndex + '';
      }
      if (!this.div.style.overflow) {
        this.div.style.overflow = 'auto';
      }
    }
  };
  InfoBox.prototype.getBoxWidths = function () {
    var bw = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
    if (!this.div) {
      return bw;
    }
    if (document.defaultView) {
      var ownerDocument = this.div.ownerDocument;
      var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, '') : null;
      if (computedStyle) {
        // The computed styles are always in pixel units (good!)
        bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
        bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
        bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
        bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
      }
    } else if (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.documentElement.currentStyle // MSIE
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      var currentStyle = this.div.currentStyle;
      if (currentStyle) {
        // The current styles may not be in pixel units, but assume they are (bad!)
        bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
        bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
        bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
        bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
      }
    }
    return bw;
  };
  InfoBox.prototype.onRemove = function () {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };
  InfoBox.prototype.draw = function () {
    this.createInfoBoxDiv();
    if (this.div) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      var projection = this.getProjection();
      var pixPosition = projection.fromLatLngToDivPixel(this.position);
      if (pixPosition !== null) {
        this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';
        if (this.alignBottom) {
          this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
        } else {
          this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
        }
      }
      if (this.isHidden) {
        this.div.style.visibility = 'hidden';
      } else {
        this.div.style.visibility = 'visible';
      }
    }
  };
  InfoBox.prototype.setOptions = function (options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof options.boxClass !== 'undefined') {
      // Must be first
      this.boxClass = options.boxClass;
      this.setBoxStyle();
    }
    if (typeof options.boxStyle !== 'undefined') {
      // Must be second
      this.boxStyle = options.boxStyle;
      this.setBoxStyle();
    }
    if (typeof options.content !== 'undefined') {
      this.setContent(options.content);
    }
    if (typeof options.disableAutoPan !== 'undefined') {
      this.disableAutoPan = options.disableAutoPan;
    }
    if (typeof options.maxWidth !== 'undefined') {
      this.maxWidth = options.maxWidth;
    }
    if (typeof options.pixelOffset !== 'undefined') {
      this.pixelOffset = options.pixelOffset;
    }
    if (typeof options.alignBottom !== 'undefined') {
      this.alignBottom = options.alignBottom;
    }
    if (typeof options.position !== 'undefined') {
      this.setPosition(options.position);
    }
    if (typeof options.zIndex !== 'undefined') {
      this.setZIndex(options.zIndex);
    }
    if (typeof options.closeBoxMargin !== 'undefined') {
      this.closeBoxMargin = options.closeBoxMargin;
    }
    if (typeof options.closeBoxURL !== 'undefined') {
      this.closeBoxURL = options.closeBoxURL;
    }
    if (typeof options.infoBoxClearance !== 'undefined') {
      this.infoBoxClearance = options.infoBoxClearance;
    }
    if (typeof options.isHidden !== 'undefined') {
      this.isHidden = options.isHidden;
    }
    if (typeof options.visible !== 'undefined') {
      this.isHidden = !options.visible;
    }
    if (typeof options.enableEventPropagation !== 'undefined') {
      this.enableEventPropagation = options.enableEventPropagation;
    }
    if (this.div) {
      this.draw();
    }
  };
  InfoBox.prototype.setContent = function (content) {
    this.content = content;
    if (this.div) {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      }
      // Odd code required to make things work with MSIE.
      if (!this.fixedWidthSet) {
        this.div.style.width = '';
      }
      if (typeof content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(content);
      }
      // Perverse code required to make things work with MSIE.
      // (Ensures the close box does, in fact, float to the right.)
      if (!this.fixedWidthSet) {
        this.div.style.width = this.div.offsetWidth + 'px';
        if (typeof content === 'string') {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
      }
      this.addClickHandler();
    }
    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */
    google.maps.event.trigger(this, 'content_changed');
  };
  InfoBox.prototype.setPosition = function (latLng) {
    this.position = latLng;
    if (this.div) {
      this.draw();
    }
    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */
    google.maps.event.trigger(this, 'position_changed');
  };
  InfoBox.prototype.setVisible = function (isVisible) {
    this.isHidden = !isVisible;
    if (this.div) {
      this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
    }
  };
  InfoBox.prototype.setZIndex = function (index) {
    this.zIndex = index;
    if (this.div) {
      this.div.style.zIndex = index + '';
    }
    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */
    google.maps.event.trigger(this, 'zindex_changed');
  };
  InfoBox.prototype.getContent = function () {
    return this.content;
  };
  InfoBox.prototype.getPosition = function () {
    return this.position;
  };
  InfoBox.prototype.getZIndex = function () {
    return this.zIndex;
  };
  InfoBox.prototype.getVisible = function () {
    var map = this.getMap();
    return typeof map === 'undefined' || map === null ? false : !this.isHidden;
  };
  InfoBox.prototype.show = function () {
    this.isHidden = false;
    if (this.div) {
      this.div.style.visibility = 'visible';
    }
  };
  InfoBox.prototype.hide = function () {
    this.isHidden = true;
    if (this.div) {
      this.div.style.visibility = 'hidden';
    }
  };
  InfoBox.prototype.open = function (map, anchor) {
    var _this = this;
    if (anchor) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.position = anchor.getPosition();
      this.moveListener = google.maps.event.addListener(anchor, 'position_changed', function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var position = anchor.getPosition();
        _this.setPosition(position);
      });
      this.mapListener = google.maps.event.addListener(anchor, 'map_changed', function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        _this.setMap(anchor.map);
      });
    }
    this.setMap(map);
    if (this.div) {
      this.panBox();
    }
  };
  InfoBox.prototype.close = function () {
    if (this.closeListener) {
      google.maps.event.removeListener(this.closeListener);
      this.closeListener = null;
    }
    if (this.eventListeners) {
      for (var _i = 0, _a = this.eventListeners; _i < _a.length; _i++) {
        var eventListener = _a[_i];
        google.maps.event.removeListener(eventListener);
      }
      this.eventListeners = null;
    }
    if (this.moveListener) {
      google.maps.event.removeListener(this.moveListener);
      this.moveListener = null;
    }
    if (this.mapListener) {
      google.maps.event.removeListener(this.mapListener);
      this.mapListener = null;
    }
    if (this.contextListener) {
      google.maps.event.removeListener(this.contextListener);
      this.contextListener = null;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.setMap(null);
  };
  InfoBox.prototype.extend = function (obj1, obj2) {
    return function applyExtend(object) {
      for (var property in object.prototype) {
        if (!Object.prototype.hasOwnProperty.call(this, property)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this.prototype[property] = object.prototype[property];
        }
      }
      return this;
    }.apply(obj1, [obj2]);
  };
  return InfoBox;
}();

var _excluded = ["position"],
  _excluded2 = ["position"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$d = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$d = {
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    if (position instanceof google.maps.LatLng) {
      instance.setPosition(position);
    } else {
      instance.setPosition(new google.maps.LatLng(position.lat, position.lng));
    }
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
var defaultOptions$3 = {};
function InfoBoxFunctional(_ref) {
  var {
    children,
    anchor,
    options,
    position,
    zIndex,
    onCloseClick,
    onDomReady,
    onContentChanged,
    onPositionChanged,
    onZindexChanged,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [closeClickListener, setCloseClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [domReadyClickListener, setDomReadyClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [contentChangedClickListener, setContentChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [positionChangedClickListener, setPositionChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [zIndexChangedClickListener, setZindexChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var containerElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (position && instance !== null) {
      var positionLatLng = position instanceof google.maps.LatLng ? position :
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      new google.maps.LatLng(position.lat, position.lng);
      instance.setPosition(positionLatLng);
    }
  }, [position]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof zIndex === 'number' && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onCloseClick) {
      if (closeClickListener !== null) {
        google.maps.event.removeListener(closeClickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
    }
  }, [onCloseClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDomReady) {
      if (domReadyClickListener !== null) {
        google.maps.event.removeListener(domReadyClickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
    }
  }, [onDomReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onContentChanged) {
      if (contentChangedClickListener !== null) {
        google.maps.event.removeListener(contentChangedClickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
    }
  }, [onContentChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionChangedClickListener !== null) {
        google.maps.event.removeListener(positionChangedClickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
    }
  }, [onPositionChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zIndexChangedClickListener !== null) {
        google.maps.event.removeListener(zIndexChangedClickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
    }
  }, [onZindexChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map) {
      var _ref2 = options || defaultOptions$3,
        {
          position: _position
        } = _ref2,
        infoBoxOptions = _objectWithoutProperties(_ref2, _excluded);
      var positionLatLng;
      if (_position && !(_position instanceof google.maps.LatLng)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        positionLatLng = new google.maps.LatLng(_position.lat, _position.lng);
      }
      var infoBox = new InfoBox(_objectSpread$b(_objectSpread$b({}, infoBoxOptions), positionLatLng ? {
        position: positionLatLng
      } : {}));
      containerElementRef.current = document.createElement('div');
      setInstance(infoBox);
      if (onCloseClick) {
        setCloseClickListener(google.maps.event.addListener(infoBox, 'closeclick', onCloseClick));
      }
      if (onDomReady) {
        setDomReadyClickListener(google.maps.event.addListener(infoBox, 'domready', onDomReady));
      }
      if (onContentChanged) {
        setContentChangedClickListener(google.maps.event.addListener(infoBox, 'content_changed', onContentChanged));
      }
      if (onPositionChanged) {
        setPositionChangedClickListener(google.maps.event.addListener(infoBox, 'position_changed', onPositionChanged));
      }
      if (onZindexChanged) {
        setZindexChangedClickListener(google.maps.event.addListener(infoBox, 'zindex_changed', onZindexChanged));
      }
      infoBox.setContent(containerElementRef.current);
      if (anchor) {
        infoBox.open(map, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(map);
      } else {
        invariant(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
      }
      if (onLoad) {
        onLoad(infoBox);
      }
    }
    return () => {
      if (instance !== null) {
        if (closeClickListener) {
          google.maps.event.removeListener(closeClickListener);
        }
        if (contentChangedClickListener) {
          google.maps.event.removeListener(contentChangedClickListener);
        }
        if (domReadyClickListener) {
          google.maps.event.removeListener(domReadyClickListener);
        }
        if (positionChangedClickListener) {
          google.maps.event.removeListener(positionChangedClickListener);
        }
        if (zIndexChangedClickListener) {
          google.maps.event.removeListener(zIndexChangedClickListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.close();
      }
    };
  }, []);
  return containerElementRef.current ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children), containerElementRef.current) : null;
}
var InfoBoxF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InfoBoxFunctional);
class InfoBoxComponent extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "containerElement", null);
    _defineProperty(this, "state", {
      infoBox: null
    });
    _defineProperty(this, "open", (infoBox, anchor) => {
      if (anchor) {
        if (this.context !== null) {
          infoBox.open(this.context, anchor);
        }
      } else if (infoBox.getPosition()) {
        if (this.context !== null) {
          infoBox.open(this.context);
        }
      } else {
        invariant(false, 'You must provide either an anchor or a position prop for <InfoBox>.');
      }
    });
    _defineProperty(this, "setInfoBoxCallback", () => {
      if (this.state.infoBox !== null && this.containerElement !== null) {
        this.state.infoBox.setContent(this.containerElement);
        this.open(this.state.infoBox, this.props.anchor);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.infoBox);
        }
      }
    });
  }
  componentDidMount() {
    var _ref3 = this.props.options || {},
      {
        position
      } = _ref3,
      infoBoxOptions = _objectWithoutProperties(_ref3, _excluded2);
    var positionLatLng;
    if (position && !(position instanceof google.maps.LatLng)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }
    var infoBox = new InfoBox(_objectSpread$b(_objectSpread$b({}, infoBoxOptions), positionLatLng ? {
      position: positionLatLng
    } : {}));
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({
      infoBox
    }, this.setInfoBoxCallback);
  }
  componentDidUpdate(prevProps) {
    var {
      infoBox
    } = this.state;
    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  }
  componentWillUnmount() {
    var {
      onUnmount
    } = this.props;
    var {
      infoBox
    } = this.state;
    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }
      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  }
  render() {
    return this.containerElement ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children), this.containerElement) : null;
  }
}
_defineProperty(InfoBoxComponent, "contextType", MapContext);

var fastDeepEqual;
var hasRequiredFastDeepEqual;
function requireFastDeepEqual() {
  if (hasRequiredFastDeepEqual) return fastDeepEqual;
  hasRequiredFastDeepEqual = 1;

  // do not edit .js files directly - edit src/index.jst

  fastDeepEqual = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;
      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0;) {
        var key = keys[i];
        if (!equal(a[key], b[key])) return false;
      }
      return true;
    }

    // true if both NaN, false otherwise
    return a !== a && b !== b;
  };
  return fastDeepEqual;
}

var fastDeepEqualExports = requireFastDeepEqual();
var equal = /*@__PURE__*/getDefaultExportFromCjs$1(fastDeepEqualExports);

var ARRAY_TYPES = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */

var VERSION = 1; // serialized format version
var HEADER_SIZE = 8;
class KDBush {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(data) {
    if (!(data instanceof ArrayBuffer)) {
      throw new Error('Data must be an instance of ArrayBuffer.');
    }
    var [magic, versionAndType] = new Uint8Array(data, 0, 2);
    if (magic !== 0xdb) {
      throw new Error('Data does not appear to be in a KDBush format.');
    }
    var version = versionAndType >> 4;
    if (version !== VERSION) {
      throw new Error("Got v".concat(version, " data when expected v").concat(VERSION, "."));
    }
    var ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
    if (!ArrayType) {
      throw new Error('Unrecognized array type.');
    }
    var [nodeSize] = new Uint16Array(data, 2, 1);
    var [numItems] = new Uint32Array(data, 4, 1);
    return new KDBush(numItems, nodeSize, ArrayType, data);
  }

  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(numItems) {
    var nodeSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
    var ArrayType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Float64Array;
    var data = arguments.length > 3 ? arguments[3] : undefined;
    if (isNaN(numItems) || numItems < 0) throw new Error("Unpexpected numItems value: ".concat(numItems, "."));
    this.numItems = +numItems;
    this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
    this.ArrayType = ArrayType;
    this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
    var arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
    var coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
    var idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
    var padCoords = (8 - idsByteSize % 8) % 8;
    if (arrayTypeIndex < 0) {
      throw new Error("Unexpected typed array class: ".concat(ArrayType, "."));
    }
    if (data && data instanceof ArrayBuffer) {
      // reconstruct an index from a buffer
      this.data = data;
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = numItems * 2;
      this._finished = true;
    } else {
      // initialize a new index
      this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
      this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
      this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
      this._pos = 0;
      this._finished = false;

      // set header
      new Uint8Array(this.data, 0, 2).set([0xdb, (VERSION << 4) + arrayTypeIndex]);
      new Uint16Array(this.data, 2, 1)[0] = nodeSize;
      new Uint32Array(this.data, 4, 1)[0] = numItems;
    }
  }

  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(x, y) {
    var index = this._pos >> 1;
    this.ids[index] = index;
    this.coords[this._pos++] = x;
    this.coords[this._pos++] = y;
    return index;
  }

  /**
   * Perform indexing of the added points.
   */
  finish() {
    var numAdded = this._pos >> 1;
    if (numAdded !== this.numItems) {
      throw new Error("Added ".concat(numAdded, " items when expected ").concat(this.numItems, "."));
    }
    // kd-sort both arrays for efficient search
    sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
    this._finished = true;
    return this;
  }

  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(minX, minY, maxX, maxY) {
    if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
    var {
      ids,
      coords,
      nodeSize
    } = this;
    var stack = [0, ids.length - 1, 0];
    var result = [];

    // recursively search for items in range in the kd-sorted arrays
    while (stack.length) {
      var axis = stack.pop() || 0;
      var right = stack.pop() || 0;
      var left = stack.pop() || 0;

      // if we reached "tree node", search linearly
      if (right - left <= nodeSize) {
        for (var i = left; i <= right; i++) {
          var _x = coords[2 * i];
          var _y = coords[2 * i + 1];
          if (_x >= minX && _x <= maxX && _y >= minY && _y <= maxY) result.push(ids[i]);
        }
        continue;
      }

      // otherwise find the middle index
      var m = left + right >> 1;

      // include the middle item if it's in range
      var x = coords[2 * m];
      var y = coords[2 * m + 1];
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

      // queue search in halves that intersect the query
      if (axis === 0 ? minX <= x : minY <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? maxX >= x : maxY >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }

  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(qx, qy, r) {
    if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
    var {
      ids,
      coords,
      nodeSize
    } = this;
    var stack = [0, ids.length - 1, 0];
    var result = [];
    var r2 = r * r;

    // recursively search for items within radius in the kd-sorted arrays
    while (stack.length) {
      var axis = stack.pop() || 0;
      var right = stack.pop() || 0;
      var left = stack.pop() || 0;

      // if we reached "tree node", search linearly
      if (right - left <= nodeSize) {
        for (var i = left; i <= right; i++) {
          if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
        }
        continue;
      }

      // otherwise find the middle index
      var m = left + right >> 1;

      // include the middle item if it's in range
      var x = coords[2 * m];
      var y = coords[2 * m + 1];
      if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

      // queue search in halves that intersect the query
      if (axis === 0 ? qx - r <= x : qy - r <= y) {
        stack.push(left);
        stack.push(m - 1);
        stack.push(1 - axis);
      }
      if (axis === 0 ? qx + r >= x : qy + r >= y) {
        stack.push(m + 1);
        stack.push(right);
        stack.push(1 - axis);
      }
    }
    return result;
  }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} nodeSize
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function sort(ids, coords, nodeSize, left, right, axis) {
  if (right - left <= nodeSize) return;
  var m = left + right >> 1; // middle index

  // sort ids and coords around the middle index so that the halves lie
  // either left/right or top/bottom correspondingly (taking turns)
  select(ids, coords, m, left, right, axis);

  // recursively kd-sort first half and second half on the opposite axis
  sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
  sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}

/**
 * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
 * [left..k-1] items are smaller than k-th item (on either x or y axis)
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} k
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */
function select(ids, coords, k, left, right, axis) {
  while (right > left) {
    if (right - left > 600) {
      var n = right - left + 1;
      var m = k - left + 1;
      var z = Math.log(n);
      var s = 0.5 * Math.exp(2 * z / 3);
      var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      select(ids, coords, k, newLeft, newRight, axis);
    }
    var t = coords[2 * k + axis];
    var i = left;
    var j = right;
    swapItem(ids, coords, left, k);
    if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);
    while (i < j) {
      swapItem(ids, coords, i, j);
      i++;
      j--;
      while (coords[2 * i + axis] < t) i++;
      while (coords[2 * j + axis] > t) j--;
    }
    if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);else {
      j++;
      swapItem(ids, coords, j, right);
    }
    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
}

/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} i
 * @param {number} j
 */
function swapItem(ids, coords, i, j) {
  swap(ids, i, j);
  swap(coords, 2 * i, 2 * j);
  swap(coords, 2 * i + 1, 2 * j + 1);
}

/**
 * @param {InstanceType<TypedArrayConstructor>} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * @param {number} ax
 * @param {number} ay
 * @param {number} bx
 * @param {number} by
 */
function sqDist(ax, ay, bx, by) {
  var dx = ax - bx;
  var dy = ay - by;
  return dx * dx + dy * dy;
}

var defaultOptions$2 = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: false,
  // whether to log timing info

  // whether to generate numeric ids for input features (in vector tiles)
  generateId: false,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }

  // properties to use for individual points when running the reducer
  map: props => props // props => ({sum: props.my_value})
};
var fround = Math.fround || (tmp => x => {
  tmp[0] = +x;
  return tmp[0];
})(new Float32Array(1));
var OFFSET_ZOOM = 2;
var OFFSET_ID = 3;
var OFFSET_PARENT = 4;
var OFFSET_NUM = 5;
var OFFSET_PROP = 6;
class Supercluster {
  constructor(options) {
    this.options = Object.assign(Object.create(defaultOptions$2), options);
    this.trees = new Array(this.options.maxZoom + 1);
    this.stride = this.options.reduce ? 7 : 6;
    this.clusterProps = [];
  }
  load(points) {
    var {
      log,
      minZoom,
      maxZoom
    } = this.options;
    if (log) console.time('total time');
    var timerId = "prepare ".concat(points.length, " points");
    if (log) console.time(timerId);
    this.points = points;

    // generate a cluster object for each point and index input points into a KD-tree
    var data = [];
    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      if (!p.geometry) continue;
      var [lng, lat] = p.geometry.coordinates;
      var x = fround(lngX(lng));
      var y = fround(latY(lat));
      // store internal point/cluster data in flat numeric arrays for performance
      data.push(x, y,
      // projected point coordinates
      Infinity,
      // the last zoom the point was processed at
      i,
      // index of the source feature in the original input array
      -1,
      // parent cluster id
      1 // number of points in a cluster
      );
      if (this.options.reduce) data.push(0); // noop
    }
    var tree = this.trees[maxZoom + 1] = this._createTree(data);
    if (log) console.timeEnd(timerId);

    // cluster points on max zoom, then cluster the results on previous zoom, etc.;
    // results in a cluster hierarchy across zoom levels
    for (var z = maxZoom; z >= minZoom; z--) {
      var now = +Date.now();

      // create a new set of clusters for the zoom and index them with a KD-tree
      tree = this.trees[z] = this._createTree(this._cluster(tree, z));
      if (log) console.log('z%d: %d clusters in %dms', z, tree.numItems, +Date.now() - now);
    }
    if (log) console.timeEnd('total time');
    return this;
  }
  getClusters(bbox, zoom) {
    var minLng = ((bbox[0] + 180) % 360 + 360) % 360 - 180;
    var minLat = Math.max(-90, Math.min(90, bbox[1]));
    var maxLng = bbox[2] === 180 ? 180 : ((bbox[2] + 180) % 360 + 360) % 360 - 180;
    var maxLat = Math.max(-90, Math.min(90, bbox[3]));
    if (bbox[2] - bbox[0] >= 360) {
      minLng = -180;
      maxLng = 180;
    } else if (minLng > maxLng) {
      var easternHem = this.getClusters([minLng, minLat, 180, maxLat], zoom);
      var westernHem = this.getClusters([-180, minLat, maxLng, maxLat], zoom);
      return easternHem.concat(westernHem);
    }
    var tree = this.trees[this._limitZoom(zoom)];
    var ids = tree.range(lngX(minLng), latY(maxLat), lngX(maxLng), latY(minLat));
    var data = tree.data;
    var clusters = [];
    for (var id of ids) {
      var k = this.stride * id;
      clusters.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
    }
    return clusters;
  }
  getChildren(clusterId) {
    var originId = this._getOriginId(clusterId);
    var originZoom = this._getOriginZoom(clusterId);
    var errorMsg = 'No cluster with the specified id.';
    var tree = this.trees[originZoom];
    if (!tree) throw new Error(errorMsg);
    var data = tree.data;
    if (originId * this.stride >= data.length) throw new Error(errorMsg);
    var r = this.options.radius / (this.options.extent * Math.pow(2, originZoom - 1));
    var x = data[originId * this.stride];
    var y = data[originId * this.stride + 1];
    var ids = tree.within(x, y, r);
    var children = [];
    for (var id of ids) {
      var k = id * this.stride;
      if (data[k + OFFSET_PARENT] === clusterId) {
        children.push(data[k + OFFSET_NUM] > 1 ? getClusterJSON(data, k, this.clusterProps) : this.points[data[k + OFFSET_ID]]);
      }
    }
    if (children.length === 0) throw new Error(errorMsg);
    return children;
  }
  getLeaves(clusterId, limit, offset) {
    limit = limit || 10;
    offset = offset || 0;
    var leaves = [];
    this._appendLeaves(leaves, clusterId, limit, offset, 0);
    return leaves;
  }
  getTile(z, x, y) {
    var tree = this.trees[this._limitZoom(z)];
    var z2 = Math.pow(2, z);
    var {
      extent,
      radius
    } = this.options;
    var p = radius / extent;
    var top = (y - p) / z2;
    var bottom = (y + 1 + p) / z2;
    var tile = {
      features: []
    };
    this._addTileFeatures(tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom), tree.data, x, y, z2, tile);
    if (x === 0) {
      this._addTileFeatures(tree.range(1 - p / z2, top, 1, bottom), tree.data, z2, y, z2, tile);
    }
    if (x === z2 - 1) {
      this._addTileFeatures(tree.range(0, top, p / z2, bottom), tree.data, -1, y, z2, tile);
    }
    return tile.features.length ? tile : null;
  }
  getClusterExpansionZoom(clusterId) {
    var expansionZoom = this._getOriginZoom(clusterId) - 1;
    while (expansionZoom <= this.options.maxZoom) {
      var children = this.getChildren(clusterId);
      expansionZoom++;
      if (children.length !== 1) break;
      clusterId = children[0].properties.cluster_id;
    }
    return expansionZoom;
  }
  _appendLeaves(result, clusterId, limit, offset, skipped) {
    var children = this.getChildren(clusterId);
    for (var child of children) {
      var props = child.properties;
      if (props && props.cluster) {
        if (skipped + props.point_count <= offset) {
          // skip the whole cluster
          skipped += props.point_count;
        } else {
          // enter the cluster
          skipped = this._appendLeaves(result, props.cluster_id, limit, offset, skipped);
          // exit the cluster
        }
      } else if (skipped < offset) {
        // skip a single point
        skipped++;
      } else {
        // add a single point
        result.push(child);
      }
      if (result.length === limit) break;
    }
    return skipped;
  }
  _createTree(data) {
    var tree = new KDBush(data.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (var i = 0; i < data.length; i += this.stride) tree.add(data[i], data[i + 1]);
    tree.finish();
    tree.data = data;
    return tree;
  }
  _addTileFeatures(ids, data, x, y, z2, tile) {
    for (var i of ids) {
      var k = i * this.stride;
      var isCluster = data[k + OFFSET_NUM] > 1;
      var tags = void 0,
        px = void 0,
        py = void 0;
      if (isCluster) {
        tags = getClusterProperties(data, k, this.clusterProps);
        px = data[k];
        py = data[k + 1];
      } else {
        var p = this.points[data[k + OFFSET_ID]];
        tags = p.properties;
        var [lng, lat] = p.geometry.coordinates;
        px = lngX(lng);
        py = latY(lat);
      }
      var f = {
        type: 1,
        geometry: [[Math.round(this.options.extent * (px * z2 - x)), Math.round(this.options.extent * (py * z2 - y))]],
        tags
      };

      // assign id
      var id = void 0;
      if (isCluster || this.options.generateId) {
        // optionally generate id for points
        id = data[k + OFFSET_ID];
      } else {
        // keep id if already assigned
        id = this.points[data[k + OFFSET_ID]].id;
      }
      if (id !== undefined) f.id = id;
      tile.features.push(f);
    }
  }
  _limitZoom(z) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+z), this.options.maxZoom + 1));
  }
  _cluster(tree, zoom) {
    var {
      radius,
      extent,
      reduce,
      minPoints
    } = this.options;
    var r = radius / (extent * Math.pow(2, zoom));
    var data = tree.data;
    var nextData = [];
    var stride = this.stride;

    // loop through each point
    for (var i = 0; i < data.length; i += stride) {
      // if we've already visited the point at this zoom level, skip it
      if (data[i + OFFSET_ZOOM] <= zoom) continue;
      data[i + OFFSET_ZOOM] = zoom;

      // find all nearby points
      var x = data[i];
      var y = data[i + 1];
      var neighborIds = tree.within(data[i], data[i + 1], r);
      var numPointsOrigin = data[i + OFFSET_NUM];
      var numPoints = numPointsOrigin;

      // count the number of points in a potential cluster
      for (var neighborId of neighborIds) {
        var k = neighborId * stride;
        // filter out neighbors that are already processed
        if (data[k + OFFSET_ZOOM] > zoom) numPoints += data[k + OFFSET_NUM];
      }

      // if there were neighbors to merge, and there are enough points to form a cluster
      if (numPoints > numPointsOrigin && numPoints >= minPoints) {
        var wx = x * numPointsOrigin;
        var wy = y * numPointsOrigin;
        var clusterProperties = void 0;
        var clusterPropIndex = -1;

        // encode both zoom and point index on which the cluster originated -- offset by total length of features
        var id = ((i / stride | 0) << 5) + (zoom + 1) + this.points.length;
        for (var _neighborId of neighborIds) {
          var _k = _neighborId * stride;
          if (data[_k + OFFSET_ZOOM] <= zoom) continue;
          data[_k + OFFSET_ZOOM] = zoom; // save the zoom (so it doesn't get processed twice)

          var numPoints2 = data[_k + OFFSET_NUM];
          wx += data[_k] * numPoints2; // accumulate coordinates for calculating weighted center
          wy += data[_k + 1] * numPoints2;
          data[_k + OFFSET_PARENT] = id;
          if (reduce) {
            if (!clusterProperties) {
              clusterProperties = this._map(data, i, true);
              clusterPropIndex = this.clusterProps.length;
              this.clusterProps.push(clusterProperties);
            }
            reduce(clusterProperties, this._map(data, _k));
          }
        }
        data[i + OFFSET_PARENT] = id;
        nextData.push(wx / numPoints, wy / numPoints, Infinity, id, -1, numPoints);
        if (reduce) nextData.push(clusterPropIndex);
      } else {
        // left points as unclustered
        for (var j = 0; j < stride; j++) nextData.push(data[i + j]);
        if (numPoints > 1) {
          for (var _neighborId2 of neighborIds) {
            var _k2 = _neighborId2 * stride;
            if (data[_k2 + OFFSET_ZOOM] <= zoom) continue;
            data[_k2 + OFFSET_ZOOM] = zoom;
            for (var _j = 0; _j < stride; _j++) nextData.push(data[_k2 + _j]);
          }
        }
      }
    }
    return nextData;
  }

  // get index of the point from which the cluster originated
  _getOriginId(clusterId) {
    return clusterId - this.points.length >> 5;
  }

  // get zoom of the point from which the cluster originated
  _getOriginZoom(clusterId) {
    return (clusterId - this.points.length) % 32;
  }
  _map(data, i, clone) {
    if (data[i + OFFSET_NUM] > 1) {
      var props = this.clusterProps[data[i + OFFSET_PROP]];
      return clone ? Object.assign({}, props) : props;
    }
    var original = this.points[data[i + OFFSET_ID]].properties;
    var result = this.options.map(original);
    return clone && result === original ? Object.assign({}, result) : result;
  }
}
function getClusterJSON(data, i, clusterProps) {
  return {
    type: 'Feature',
    id: data[i + OFFSET_ID],
    properties: getClusterProperties(data, i, clusterProps),
    geometry: {
      type: 'Point',
      coordinates: [xLng(data[i]), yLat(data[i + 1])]
    }
  };
}
function getClusterProperties(data, i, clusterProps) {
  var count = data[i + OFFSET_NUM];
  var abbrev = count >= 10000 ? "".concat(Math.round(count / 1000), "k") : count >= 1000 ? "".concat(Math.round(count / 100) / 10, "k") : count;
  var propIndex = data[i + OFFSET_PROP];
  var properties = propIndex === -1 ? {} : Object.assign({}, clusterProps[propIndex]);
  return Object.assign(properties, {
    cluster: true,
    cluster_id: data[i + OFFSET_ID],
    point_count: count,
    point_count_abbreviated: abbrev
  });
}

// longitude/latitude to spherical mercator in [0..1] range
function lngX(lng) {
  return lng / 360 + 0.5;
}
function latY(lat) {
  var sin = Math.sin(lat * Math.PI / 180);
  var y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;
  return y < 0 ? 0 : y > 1 ? 1 : y;
}

// spherical mercator to longitude/latitude
function xLng(x) {
  return (x - 0.5) * 360;
}
function yLat(y) {
  var y2 = (180 - y * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * util class that creates a common set of convenience functions to wrap
 * shared behavior of Advanced Markers and Markers.
 */
class MarkerUtils {
  static isAdvancedMarkerAvailable(map) {
    return google.maps.marker && map.getMapCapabilities().isAdvancedMarkersAvailable === true;
  }
  static isAdvancedMarker(marker) {
    return google.maps.marker && marker instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(marker, map) {
    if (this.isAdvancedMarker(marker)) {
      marker.map = map;
    } else {
      marker.setMap(map);
    }
  }
  static getPosition(marker) {
    // SuperClusterAlgorithm.calculate expects a LatLng instance so we fake it for Adv Markers
    if (this.isAdvancedMarker(marker)) {
      if (marker.position) {
        if (marker.position instanceof google.maps.LatLng) {
          return marker.position;
        }
        // since we can't cast to LatLngLiteral for reasons =(
        if (marker.position.lat && marker.position.lng) {
          return new google.maps.LatLng(marker.position.lat, marker.position.lng);
        }
      }
      return new google.maps.LatLng(null);
    }
    return marker.getPosition();
  }
  static getVisible(marker) {
    if (this.isAdvancedMarker(marker)) {
      /**
       * Always return true for Advanced Markers because the clusterer
       * uses getVisible as a way to count legacy markers not as an actual
       * indicator of visibility for some reason. Even when markers are hidden
       * Marker.getVisible returns `true` and this is used to set the marker count
       * on the cluster. See the behavior of Cluster.count
       */
      return true;
    }
    return marker.getVisible();
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cluster {
  constructor(_ref) {
    var {
      markers,
      position
    } = _ref;
    this.markers = markers;
    if (position) {
      if (position instanceof google.maps.LatLng) {
        this._position = position;
      } else {
        this._position = new google.maps.LatLng(position);
      }
    }
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position) {
      return;
    }
    var bounds = new google.maps.LatLngBounds(this._position, this._position);
    for (var marker of this.markers) {
      bounds.extend(MarkerUtils.getPosition(marker));
    }
    return bounds;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter(m => MarkerUtils.getVisible(m)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(marker) {
    this.markers.push(marker);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    if (this.marker) {
      MarkerUtils.setMap(this.marker, null);
      this.marker = undefined;
    }
    this.markers.length = 0;
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the markers visible in a padded map viewport
 *
 * @param map
 * @param mapCanvasProjection
 * @param markers The list of marker to filter
 * @param viewportPaddingPixels The padding in pixel
 * @returns The list of markers in the padded viewport
 */
var filterMarkersToPaddedViewport = (map, mapCanvasProjection, markers, viewportPaddingPixels) => {
  var extendedMapBounds = extendBoundsToPaddedViewport(map.getBounds(), mapCanvasProjection, viewportPaddingPixels);
  return markers.filter(marker => extendedMapBounds.contains(MarkerUtils.getPosition(marker)));
};
/**
 * Extends a bounds by a number of pixels in each direction
 */
var extendBoundsToPaddedViewport = (bounds, projection, numPixels) => {
  var {
    northEast,
    southWest
  } = latLngBoundsToPixelBounds(bounds, projection);
  var extendedPixelBounds = extendPixelBounds({
    northEast,
    southWest
  }, numPixels);
  return pixelBoundsToLatLngBounds(extendedPixelBounds, projection);
};
/**
 * Gets the extended bounds as a bbox [westLng, southLat, eastLng, northLat]
 */
var getPaddedViewport = (bounds, projection, pixels) => {
  var extended = extendBoundsToPaddedViewport(bounds, projection, pixels);
  var ne = extended.getNorthEast();
  var sw = extended.getSouthWest();
  return [sw.lng(), sw.lat(), ne.lng(), ne.lat()];
};
/**
 * Returns the distance between 2 positions.
 *
 * @hidden
 */
var distanceBetweenPoints = (p1, p2) => {
  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat - p1.lat) * Math.PI / 180;
  var dLon = (p2.lng - p1.lng) * Math.PI / 180;
  var sinDLat = Math.sin(dLat / 2);
  var sinDLon = Math.sin(dLon / 2);
  var a = sinDLat * sinDLat + Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) * sinDLon * sinDLon;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};
/**
 * Converts a LatLng bound to pixels.
 *
 * @hidden
 */
var latLngBoundsToPixelBounds = (bounds, projection) => {
  return {
    northEast: projection.fromLatLngToDivPixel(bounds.getNorthEast()),
    southWest: projection.fromLatLngToDivPixel(bounds.getSouthWest())
  };
};
/**
 * Extends a pixel bounds by numPixels in all directions.
 *
 * @hidden
 */
var extendPixelBounds = (_ref2, numPixels) => {
  var {
    northEast,
    southWest
  } = _ref2;
  northEast.x += numPixels;
  northEast.y -= numPixels;
  southWest.x -= numPixels;
  southWest.y += numPixels;
  return {
    northEast,
    southWest
  };
};
/**
 * @hidden
 */
var pixelBoundsToLatLngBounds = (_ref3, projection) => {
  var {
    northEast,
    southWest
  } = _ref3;
  var sw = projection.fromDivPixelToLatLng(southWest);
  var ne = projection.fromDivPixelToLatLng(northEast);
  return new google.maps.LatLngBounds(sw, ne);
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @hidden
 */
class AbstractAlgorithm {
  constructor(_ref4) {
    var {
      maxZoom = 16
    } = _ref4;
    this.maxZoom = maxZoom;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop(_ref5) {
    var {
      markers
    } = _ref5;
    return noop$1(markers);
  }
}
/**
 * Abstract viewport algorithm proves a class to filter markers by a padded
 * viewport. This is a common optimization.
 *
 * @hidden
 */
class AbstractViewportAlgorithm extends AbstractAlgorithm {
  constructor(_a) {
    var {
        viewportPadding = 60
      } = _a,
      options = __rest(_a, ["viewportPadding"]);
    super(options);
    this.viewportPadding = 60;
    this.viewportPadding = viewportPadding;
  }
  calculate(_ref6) {
    var {
      markers,
      map,
      mapCanvasProjection
    } = _ref6;
    if (map.getZoom() >= this.maxZoom) {
      return {
        clusters: this.noop({
          markers
        }),
        changed: false
      };
    }
    return {
      clusters: this.cluster({
        markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
        map,
        mapCanvasProjection
      })
    };
  }
}
/**
 * @hidden
 */
var noop$1 = markers => {
  var clusters = markers.map(marker => new Cluster({
    position: MarkerUtils.getPosition(marker),
    markers: [marker]
  }));
  return clusters;
};

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default Grid algorithm historically used in Google Maps marker
 * clustering.
 *
 * The Grid algorithm does not implement caching and markers may flash as the
 * viewport changes. Instead use {@link SuperClusterAlgorithm}.
 */
class GridAlgorithm extends AbstractViewportAlgorithm {
  constructor(_a) {
    var {
        maxDistance = 40000,
        gridSize = 40
      } = _a,
      options = __rest(_a, ["maxDistance", "gridSize"]);
    super(options);
    this.clusters = [];
    this.state = {
      zoom: -1
    };
    this.maxDistance = maxDistance;
    this.gridSize = gridSize;
  }
  calculate(_ref7) {
    var {
      markers,
      map,
      mapCanvasProjection
    } = _ref7;
    var state = {
      zoom: map.getZoom()
    };
    var changed = false;
    if (this.state.zoom >= this.maxZoom && state.zoom >= this.maxZoom) ;else {
      changed = !equal(this.state, state);
    }
    this.state = state;
    if (map.getZoom() >= this.maxZoom) {
      return {
        clusters: this.noop({
          markers
        }),
        changed
      };
    }
    return {
      clusters: this.cluster({
        markers: filterMarkersToPaddedViewport(map, mapCanvasProjection, markers, this.viewportPadding),
        map,
        mapCanvasProjection
      })
    };
  }
  cluster(_ref8) {
    var {
      markers,
      map,
      mapCanvasProjection
    } = _ref8;
    this.clusters = [];
    markers.forEach(marker => {
      this.addToClosestCluster(marker, map, mapCanvasProjection);
    });
    return this.clusters;
  }
  addToClosestCluster(marker, map, projection) {
    var maxDistance = this.maxDistance; // Some large number
    var cluster = null;
    for (var i = 0; i < this.clusters.length; i++) {
      var candidate = this.clusters[i];
      var distance = distanceBetweenPoints(candidate.bounds.getCenter().toJSON(), MarkerUtils.getPosition(marker).toJSON());
      if (distance < maxDistance) {
        maxDistance = distance;
        cluster = candidate;
      }
    }
    if (cluster && extendBoundsToPaddedViewport(cluster.bounds, projection, this.gridSize).contains(MarkerUtils.getPosition(marker))) {
      cluster.push(marker);
    } else {
      var _cluster = new Cluster({
        markers: [marker]
      });
      this.clusters.push(_cluster);
    }
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Noop algorithm does not generate any clusters or filter markers by the an extended viewport.
 */
class NoopAlgorithm extends AbstractAlgorithm {
  constructor(_a) {
    var options = __rest(_a, []);
    super(options);
  }
  calculate(_ref9) {
    var {
      markers,
      map,
      mapCanvasProjection
    } = _ref9;
    return {
      clusters: this.cluster({
        markers,
        map,
        mapCanvasProjection
      }),
      changed: false
    };
  }
  cluster(input) {
    return this.noop(input);
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterAlgorithm extends AbstractAlgorithm {
  constructor(_a) {
    var {
        maxZoom,
        radius = 60
      } = _a,
      options = __rest(_a, ["maxZoom", "radius"]);
    super({
      maxZoom
    });
    this.state = {
      zoom: -1
    };
    this.superCluster = new Supercluster(Object.assign({
      maxZoom: this.maxZoom,
      radius
    }, options));
  }
  calculate(input) {
    var changed = false;
    var state = {
      zoom: input.map.getZoom()
    };
    if (!equal(input.markers, this.markers)) {
      changed = true;
      // TODO use proxy to avoid copy?
      this.markers = [...input.markers];
      var points = this.markers.map(marker => {
        var position = MarkerUtils.getPosition(marker);
        var coordinates = [position.lng(), position.lat()];
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates
          },
          properties: {
            marker
          }
        };
      });
      this.superCluster.load(points);
    }
    if (!changed) {
      if (this.state.zoom <= this.maxZoom || state.zoom <= this.maxZoom) {
        changed = !equal(this.state, state);
      }
    }
    this.state = state;
    if (changed) {
      this.clusters = this.cluster(input);
    }
    return {
      clusters: this.clusters,
      changed
    };
  }
  cluster(_ref10) {
    var {
      map
    } = _ref10;
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(map.getZoom())).map(feature => this.transformCluster(feature));
  }
  transformCluster(_ref11) {
    var {
      geometry: {
        coordinates: [lng, lat]
      },
      properties
    } = _ref11;
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map(leaf => leaf.properties.marker),
        position: {
          lat,
          lng
        }
      });
    }
    var marker = properties.marker;
    return new Cluster({
      markers: [marker],
      position: MarkerUtils.getPosition(marker)
    });
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A very fast JavaScript algorithm for geospatial point clustering using KD trees.
 *
 * @see https://www.npmjs.com/package/supercluster for more information on options.
 */
class SuperClusterViewportAlgorithm extends AbstractViewportAlgorithm {
  constructor(_a) {
    var {
        maxZoom,
        radius = 60,
        viewportPadding = 60
      } = _a,
      options = __rest(_a, ["maxZoom", "radius", "viewportPadding"]);
    super({
      maxZoom,
      viewportPadding
    });
    this.superCluster = new Supercluster(Object.assign({
      maxZoom: this.maxZoom,
      radius
    }, options));
    this.state = {
      zoom: -1,
      view: [0, 0, 0, 0]
    };
  }
  calculate(input) {
    var state = {
      zoom: Math.round(input.map.getZoom()),
      view: getPaddedViewport(input.map.getBounds(), input.mapCanvasProjection, this.viewportPadding)
    };
    var changed = !equal(this.state, state);
    if (!equal(input.markers, this.markers)) {
      changed = true;
      // TODO use proxy to avoid copy?
      this.markers = [...input.markers];
      var points = this.markers.map(marker => {
        var position = MarkerUtils.getPosition(marker);
        var coordinates = [position.lng(), position.lat()];
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates
          },
          properties: {
            marker
          }
        };
      });
      this.superCluster.load(points);
    }
    if (changed) {
      this.clusters = this.cluster(input);
      this.state = state;
    }
    return {
      clusters: this.clusters,
      changed
    };
  }
  cluster(_ref12) {
    var {
      map,
      mapCanvasProjection
    } = _ref12;
    /* recalculate new state because we can't use the cached version. */
    var state = {
      zoom: Math.round(map.getZoom()),
      view: getPaddedViewport(map.getBounds(), mapCanvasProjection, this.viewportPadding)
    };
    return this.superCluster.getClusters(state.view, state.zoom).map(feature => this.transformCluster(feature));
  }
  transformCluster(_ref13) {
    var {
      geometry: {
        coordinates: [lng, lat]
      },
      properties
    } = _ref13;
    if (properties.cluster) {
      return new Cluster({
        markers: this.superCluster.getLeaves(properties.cluster_id, Infinity).map(leaf => leaf.properties.marker),
        position: {
          lat,
          lng
        }
      });
    }
    var marker = properties.marker;
    return new Cluster({
      markers: [marker],
      position: MarkerUtils.getPosition(marker)
    });
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides statistics on all clusters in the current render cycle for use in {@link Renderer.render}.
 */
class ClusterStats {
  constructor(markers, clusters) {
    this.markers = {
      sum: markers.length
    };
    var clusterMarkerCounts = clusters.map(a => a.count);
    var clusterMarkerSum = clusterMarkerCounts.reduce((a, b) => a + b, 0);
    this.clusters = {
      count: clusters.length,
      markers: {
        mean: clusterMarkerSum / clusters.length,
        sum: clusterMarkerSum,
        min: Math.min(...clusterMarkerCounts),
        max: Math.max(...clusterMarkerCounts)
      }
    };
  }
}
class DefaultRenderer {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render(_ref14, stats, map) {
    var {
      count,
      position
    } = _ref14;
    // change color if this cluster has more markers than the mean cluster
    var color = count > Math.max(10, stats.clusters.markers.mean) ? "#ff0000" : "#0000ff";
    // create svg literal with fill color
    var svg = "<svg fill=\"".concat(color, "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" width=\"50\" height=\"50\">\n<circle cx=\"120\" cy=\"120\" opacity=\".6\" r=\"70\" />\n<circle cx=\"120\" cy=\"120\" opacity=\".3\" r=\"90\" />\n<circle cx=\"120\" cy=\"120\" opacity=\".2\" r=\"110\" />\n<text x=\"50%\" y=\"50%\" style=\"fill:#fff\" text-anchor=\"middle\" font-size=\"50\" dominant-baseline=\"middle\" font-family=\"roboto,arial,sans-serif\">").concat(count, "</text>\n</svg>");
    var title = "Cluster of ".concat(count, " markers"),
      // adjust zIndex to be above other markers
      zIndex = Number(google.maps.Marker.MAX_ZINDEX) + count;
    if (MarkerUtils.isAdvancedMarkerAvailable(map)) {
      // create cluster SVG element
      var parser = new DOMParser();
      var svgEl = parser.parseFromString(svg, "image/svg+xml").documentElement;
      svgEl.setAttribute("transform", "translate(0 25)");
      var _clusterOptions = {
        map,
        position,
        zIndex,
        title,
        content: svgEl
      };
      return new google.maps.marker.AdvancedMarkerElement(_clusterOptions);
    }
    var clusterOptions = {
      position,
      zIndex,
      title,
      icon: {
        url: "data:image/svg+xml;base64,".concat(btoa(svg)),
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(clusterOptions);
  }
}

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Extends an object's prototype by another's.
 *
 * @param type1 The Type to be extended.
 * @param type2 The Type to extend with.
 * @ignore
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend(type1, type2) {
  /* istanbul ignore next */
  // eslint-disable-next-line prefer-const
  for (var property in type2.prototype) {
    type1.prototype[property] = type2.prototype[property];
  }
}
/**
 * @ignore
 */
class OverlayViewSafe {
  constructor() {
    // MarkerClusterer implements google.maps.OverlayView interface. We use the
    // extend function to extend MarkerClusterer with google.maps.OverlayView
    // because it might not always be available when the code is defined so we
    // look for it at the last possible moment. If it doesn't exist now then
    // there is no point going ahead :)
    extend(OverlayViewSafe, google.maps.OverlayView);
  }
}

/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MarkerClustererEvents;
(function (MarkerClustererEvents) {
  MarkerClustererEvents["CLUSTERING_BEGIN"] = "clusteringbegin";
  MarkerClustererEvents["CLUSTERING_END"] = "clusteringend";
  MarkerClustererEvents["CLUSTER_CLICK"] = "click";
})(MarkerClustererEvents || (MarkerClustererEvents = {}));
var defaultOnClusterClickHandler = (_, cluster, map) => {
  map.fitBounds(cluster.bounds);
};
/**
 * MarkerClusterer creates and manages per-zoom-level clusters for large amounts
 * of markers. See {@link MarkerClustererOptions} for more details.
 *
 */
class MarkerClusterer extends OverlayViewSafe {
  constructor(_ref15) {
    var {
      map,
      markers = [],
      algorithmOptions = {},
      algorithm = new SuperClusterAlgorithm(algorithmOptions),
      renderer = new DefaultRenderer(),
      onClusterClick = defaultOnClusterClickHandler
    } = _ref15;
    super();
    this.markers = [...markers];
    this.clusters = [];
    this.algorithm = algorithm;
    this.renderer = renderer;
    this.onClusterClick = onClusterClick;
    if (map) {
      this.setMap(map);
    }
  }
  addMarker(marker, noDraw) {
    if (this.markers.includes(marker)) {
      return;
    }
    this.markers.push(marker);
    if (!noDraw) {
      this.render();
    }
  }
  addMarkers(markers, noDraw) {
    markers.forEach(marker => {
      this.addMarker(marker, true);
    });
    if (!noDraw) {
      this.render();
    }
  }
  removeMarker(marker, noDraw) {
    var index = this.markers.indexOf(marker);
    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }
    MarkerUtils.setMap(marker, null);
    this.markers.splice(index, 1); // Remove the marker from the list of managed markers
    if (!noDraw) {
      this.render();
    }
    return true;
  }
  removeMarkers(markers, noDraw) {
    var removed = false;
    markers.forEach(marker => {
      removed = this.removeMarker(marker, true) || removed;
    });
    if (removed && !noDraw) {
      this.render();
    }
    return removed;
  }
  clearMarkers(noDraw) {
    this.markers.length = 0;
    if (!noDraw) {
      this.render();
    }
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    var map = this.getMap();
    if (map instanceof google.maps.Map && map.getProjection()) {
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_BEGIN, this);
      var {
        clusters,
        changed
      } = this.algorithm.calculate({
        markers: this.markers,
        map,
        mapCanvasProjection: this.getProjection()
      });
      // Allow algorithms to return flag on whether the clusters/markers have changed.
      if (changed || changed == undefined) {
        // Accumulate the markers of the clusters composed of a single marker.
        // Those clusters directly use the marker.
        // Clusters with more than one markers use a group marker generated by a renderer.
        var singleMarker = new Set();
        for (var cluster of clusters) {
          if (cluster.markers.length == 1) {
            singleMarker.add(cluster.markers[0]);
          }
        }
        var groupMarkers = [];
        // Iterate the clusters that are currently rendered.
        for (var _cluster2 of this.clusters) {
          if (_cluster2.marker == null) {
            continue;
          }
          if (_cluster2.markers.length == 1) {
            if (!singleMarker.has(_cluster2.marker)) {
              // The marker:
              // - was previously rendered because it is from a cluster with 1 marker,
              // - should no more be rendered as it is not in singleMarker.
              MarkerUtils.setMap(_cluster2.marker, null);
            }
          } else {
            // Delay the removal of old group markers to avoid flickering.
            groupMarkers.push(_cluster2.marker);
          }
        }
        this.clusters = clusters;
        this.renderClusters();
        // Delayed removal of the markers of the former groups.
        requestAnimationFrame(() => groupMarkers.forEach(marker => MarkerUtils.setMap(marker, null)));
      }
      google.maps.event.trigger(this, MarkerClustererEvents.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this));
    this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener);
    this.reset();
  }
  reset() {
    this.markers.forEach(marker => MarkerUtils.setMap(marker, null));
    this.clusters.forEach(cluster => cluster.delete());
    this.clusters = [];
  }
  renderClusters() {
    // Generate stats to pass to renderers.
    var stats = new ClusterStats(this.markers, this.clusters);
    var map = this.getMap();
    this.clusters.forEach(cluster => {
      if (cluster.markers.length === 1) {
        cluster.marker = cluster.markers[0];
      } else {
        // Generate the marker to represent the group.
        cluster.marker = this.renderer.render(cluster, stats, map);
        // Make sure all individual markers are removed from the map.
        cluster.markers.forEach(marker => MarkerUtils.setMap(marker, null));
        if (this.onClusterClick) {
          cluster.marker.addListener("click", /* istanbul ignore next */
          event => {
            google.maps.event.trigger(this, MarkerClustererEvents.CLUSTER_CLICK, cluster);
            this.onClusterClick(event, cluster, map);
          });
        }
      }
      MarkerUtils.setMap(cluster.marker, map);
    });
  }
}

var index_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AbstractAlgorithm: AbstractAlgorithm,
  AbstractViewportAlgorithm: AbstractViewportAlgorithm,
  Cluster: Cluster,
  ClusterStats: ClusterStats,
  DefaultRenderer: DefaultRenderer,
  GridAlgorithm: GridAlgorithm,
  MarkerClusterer: MarkerClusterer,
  get MarkerClustererEvents () { return MarkerClustererEvents; },
  MarkerUtils: MarkerUtils,
  NoopAlgorithm: NoopAlgorithm,
  SuperClusterAlgorithm: SuperClusterAlgorithm,
  SuperClusterViewportAlgorithm: SuperClusterViewportAlgorithm,
  defaultOnClusterClickHandler: defaultOnClusterClickHandler,
  distanceBetweenPoints: distanceBetweenPoints,
  extendBoundsToPaddedViewport: extendBoundsToPaddedViewport,
  extendPixelBounds: extendPixelBounds,
  filterMarkersToPaddedViewport: filterMarkersToPaddedViewport,
  getPaddedViewport: getPaddedViewport,
  noop: noop$1,
  pixelBoundsToLatLngBounds: pixelBoundsToLatLngBounds
});

function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useGoogleMarkerClusterer(options) {
  var map = useGoogleMap();
  var [markerClusterer, setMarkerClusterer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map && markerClusterer === null) {
      var markerCluster = new MarkerClusterer(_objectSpread$a(_objectSpread$a({}, options), {}, {
        map
      }));
      setMarkerClusterer(markerCluster);
    }
  }, [map]);
  return markerClusterer;
}
/** Wrapper around [@googlemaps/markerclusterer](https://github.com/googlemaps/js-markerclusterer)
 *
 * Accepts {@link  MarkerClustererOptionsSubset} which is a subset of  {@link MarkerClustererOptions}
 */
function GoogleMarkerClusterer(_ref) {
  var {
    children,
    options
  } = _ref;
  var markerClusterer = useGoogleMarkerClusterer(options);
  return markerClusterer !== null ? children(markerClusterer) : null;
}
var GoogleMarkerClusterer$1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(GoogleMarkerClusterer);

var eventMap$c = {
  onCloseClick: 'closeclick',
  onContentChanged: 'content_changed',
  onDomReady: 'domready',
  onPositionChanged: 'position_changed',
  onZindexChanged: 'zindex_changed'
};
var updaterMap$c = {
  options(instance, options) {
    instance.setOptions(options);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
function InfoWindowFunctional(_ref) {
  var {
    children,
    anchor,
    options,
    position,
    zIndex,
    onCloseClick,
    onDomReady,
    onContentChanged,
    onPositionChanged,
    onZindexChanged,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [closeclickListener, setCloseClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [domreadyclickListener, setDomReadyClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [contentchangedclickListener, setContentChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [positionchangedclickListener, setPositionChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [zindexchangedclickListener, setZindexChangedClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var containerElementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.close();
      if (anchor) {
        instance.open(map, anchor);
      } else if (instance.getPosition()) {
        instance.open(map);
      }
    }
  }, [map, instance, anchor]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (position && instance !== null) {
      instance.setPosition(position);
    }
  }, [position]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof zIndex === 'number' && instance !== null) {
      instance.setZIndex(zIndex);
    }
  }, [zIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onCloseClick) {
      if (closeclickListener !== null) {
        google.maps.event.removeListener(closeclickListener);
      }
      setCloseClickListener(google.maps.event.addListener(instance, 'closeclick', onCloseClick));
    }
  }, [onCloseClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDomReady) {
      if (domreadyclickListener !== null) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      setDomReadyClickListener(google.maps.event.addListener(instance, 'domready', onDomReady));
    }
  }, [onDomReady]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onContentChanged) {
      if (contentchangedclickListener !== null) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      setContentChangedClickListener(google.maps.event.addListener(instance, 'content_changed', onContentChanged));
    }
  }, [onContentChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onPositionChanged) {
      if (positionchangedclickListener !== null) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      setPositionChangedClickListener(google.maps.event.addListener(instance, 'position_changed', onPositionChanged));
    }
  }, [onPositionChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onZindexChanged) {
      if (zindexchangedclickListener !== null) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      setZindexChangedClickListener(google.maps.event.addListener(instance, 'zindex_changed', onZindexChanged));
    }
  }, [onZindexChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var infoWindow = new google.maps.InfoWindow(options);
    setInstance(infoWindow);
    containerElementRef.current = document.createElement('div');
    if (onCloseClick) {
      setCloseClickListener(google.maps.event.addListener(infoWindow, 'closeclick', onCloseClick));
    }
    if (onDomReady) {
      setDomReadyClickListener(google.maps.event.addListener(infoWindow, 'domready', onDomReady));
    }
    if (onContentChanged) {
      setContentChangedClickListener(google.maps.event.addListener(infoWindow, 'content_changed', onContentChanged));
    }
    if (onPositionChanged) {
      setPositionChangedClickListener(google.maps.event.addListener(infoWindow, 'position_changed', onPositionChanged));
    }
    if (onZindexChanged) {
      setZindexChangedClickListener(google.maps.event.addListener(infoWindow, 'zindex_changed', onZindexChanged));
    }
    infoWindow.setContent(containerElementRef.current);
    if (position) {
      infoWindow.setPosition(position);
    }
    if (zIndex) {
      infoWindow.setZIndex(zIndex);
    }
    if (anchor) {
      infoWindow.open(map, anchor);
    } else if (infoWindow.getPosition()) {
      infoWindow.open(map);
    } else {
      invariant(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
    }
    if (onLoad) {
      onLoad(infoWindow);
    }
    return () => {
      if (closeclickListener) {
        google.maps.event.removeListener(closeclickListener);
      }
      if (contentchangedclickListener) {
        google.maps.event.removeListener(contentchangedclickListener);
      }
      if (domreadyclickListener) {
        google.maps.event.removeListener(domreadyclickListener);
      }
      if (positionchangedclickListener) {
        google.maps.event.removeListener(positionchangedclickListener);
      }
      if (zindexchangedclickListener) {
        google.maps.event.removeListener(zindexchangedclickListener);
      }
      if (onUnmount) {
        onUnmount(infoWindow);
      }
      infoWindow.close();
    };
  }, []);
  return containerElementRef.current ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children), containerElementRef.current) : null;
}
var InfoWindowF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(InfoWindowFunctional);
class InfoWindow extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "containerElement", null);
    _defineProperty(this, "state", {
      infoWindow: null
    });
    _defineProperty(this, "open", (infoWindow, anchor) => {
      if (anchor) {
        infoWindow.open(this.context, anchor);
      } else if (infoWindow.getPosition()) {
        infoWindow.open(this.context);
      } else {
        invariant(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
      }
    });
    _defineProperty(this, "setInfoWindowCallback", () => {
      if (this.state.infoWindow !== null && this.containerElement !== null) {
        this.state.infoWindow.setContent(this.containerElement);
        this.open(this.state.infoWindow, this.props.anchor);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.infoWindow);
        }
      }
    });
  }
  componentDidMount() {
    var infoWindow = new google.maps.InfoWindow(this.props.options);
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$c,
      eventMap: eventMap$c,
      prevProps: {},
      nextProps: this.props,
      instance: infoWindow
    });
    this.setState(() => {
      return {
        infoWindow
      };
    }, this.setInfoWindowCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps,
        nextProps: this.props,
        instance: this.state.infoWindow
      });
    }
  }
  componentWillUnmount() {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.infoWindow);
      }
      this.state.infoWindow.close();
    }
  }
  render() {
    return this.containerElement ? (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children), this.containerElement) : null;
  }
}
_defineProperty(InfoWindow, "contextType", MapContext);

function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$b = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$b = {
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  path(instance, path) {
    instance.setPath(path);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions$1 = {};
function PolylineFunctional(_ref) {
  var {
    options,
    draggable,
    editable,
    visible,
    path,
    onDblClick,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
    onClick,
    onDrag,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof options !== 'undefined' && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof draggable !== 'undefined' && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof editable !== 'undefined' && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof path !== 'undefined' && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var polyline = new google.maps.Polyline(_objectSpread$9(_objectSpread$9({}, options || defaultOptions$1), {}, {
      map
    }));
    if (path) {
      polyline.setPath(path);
    }
    if (typeof visible !== 'undefined') {
      polyline.setVisible(visible);
    }
    if (typeof editable !== 'undefined') {
      polyline.setEditable(editable);
    }
    if (typeof draggable !== 'undefined') {
      polyline.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polyline, 'dblclick', onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polyline, 'dragend', onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polyline, 'dragstart', onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polyline, 'mousedown', onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polyline, 'mousemove', onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polyline, 'mouseout', onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polyline, 'mouseover', onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polyline, 'mouseup', onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polyline, 'rightclick', onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polyline, 'click', onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polyline, 'drag', onDrag));
    }
    setInstance(polyline);
    if (onLoad) {
      onLoad(polyline);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polyline);
      }
      polyline.setMap(null);
    };
  }, []);
  return null;
}
var PolylineF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PolylineFunctional);
class Polyline extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      polyline: null
    });
    _defineProperty(this, "setPolylineCallback", () => {
      if (this.state.polyline !== null && this.props.onLoad) {
        this.props.onLoad(this.state.polyline);
      }
    });
  }
  componentDidMount() {
    var polyline = new google.maps.Polyline(_objectSpread$9(_objectSpread$9({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });
    this.setState(function setPolyline() {
      return {
        polyline
      };
    }, this.setPolylineCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  }
  componentWillUnmount() {
    if (this.state.polyline === null) {
      return;
    }
    if (this.props.onUnmount) {
      this.props.onUnmount(this.state.polyline);
    }
    unregisterEvents(this.registeredEvents);
    this.state.polyline.setMap(null);
  }
  render() {
    return null;
  }
}
_defineProperty(Polyline, "contextType", MapContext);

function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$a = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$a = {
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  path(instance, path) {
    instance.setPath(path);
  },
  paths(instance, paths) {
    instance.setPaths(paths);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
function PolygonFunctional(_ref) {
  var {
    options,
    draggable,
    editable,
    visible,
    path,
    paths,
    onDblClick,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
    onClick,
    onDrag,
    onLoad,
    onUnmount,
    onEdit
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof options !== 'undefined' && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof draggable !== 'undefined' && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof editable !== 'undefined' && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof path !== 'undefined' && instance !== null) {
      instance.setPath(path);
    }
  }, [instance, path]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof paths !== 'undefined' && instance !== null) {
      instance.setPaths(paths);
    }
  }, [instance, paths]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onDblClick === 'function') {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!instance) {
      return;
    }
    google.maps.event.addListener(instance.getPath(), 'insert_at', () => {
      onEdit === null || onEdit === void 0 || onEdit(instance);
    });
    google.maps.event.addListener(instance.getPath(), 'set_at', () => {
      onEdit === null || onEdit === void 0 || onEdit(instance);
    });
    google.maps.event.addListener(instance.getPath(), 'remove_at', () => {
      onEdit === null || onEdit === void 0 || onEdit(instance);
    });
  }, [instance, onEdit]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onDragEnd === 'function') {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onDragStart === 'function') {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onMouseDown === 'function') {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onMouseMove === 'function') {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onMouseOut === 'function') {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onMouseOver === 'function') {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onMouseUp === 'function') {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onRightClick === 'function') {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onClick === 'function') {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && typeof onDrag === 'function') {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var polygon = new google.maps.Polygon(_objectSpread$8(_objectSpread$8({}, options), {}, {
      map
    }));
    if (path) {
      polygon.setPath(path);
    }
    if (paths) {
      polygon.setPaths(paths);
    }
    if (typeof visible !== 'undefined') {
      polygon.setVisible(visible);
    }
    if (typeof editable !== 'undefined') {
      polygon.setEditable(editable);
    }
    if (typeof draggable !== 'undefined') {
      polygon.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(polygon, 'dblclick', onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(polygon, 'dragend', onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(polygon, 'dragstart', onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(polygon, 'mousedown', onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(polygon, 'mousemove', onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(polygon, 'mouseout', onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(polygon, 'mouseover', onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(polygon, 'mouseup', onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(polygon, 'rightclick', onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(polygon, 'click', onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(polygon, 'drag', onDrag));
    }
    setInstance(polygon);
    if (onLoad) {
      onLoad(polygon);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (onUnmount) {
        onUnmount(polygon);
      }
      polygon.setMap(null);
    };
  }, []);
  return null;
}
var PolygonF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(PolygonFunctional);
class Polygon extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
  }
  componentDidMount() {
    var polygonOptions = this.props.options || {};
    this.polygon = new google.maps.Polygon(polygonOptions);
    this.polygon.setMap(this.context);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: this.polygon
    });
    if (this.props.onLoad) {
      this.props.onLoad(this.polygon);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.polygon) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps,
        nextProps: this.props,
        instance: this.polygon
      });
    }
  }
  componentWillUnmount() {
    if (this.polygon) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.polygon);
      }
      unregisterEvents(this.registeredEvents);
      if (this.polygon) {
        this.polygon.setMap(null);
      }
    }
  }
  render() {
    return null;
  }
}
_defineProperty(Polygon, "contextType", MapContext);

function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$9 = {
  onBoundsChanged: 'bounds_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$9 = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
function RectangleFunctional(_ref) {
  var {
    options,
    bounds,
    draggable,
    editable,
    visible,
    onDblClick,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
    onClick,
    onDrag,
    onBoundsChanged,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightClickListener, setRightClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [boundsChangedListener, setBoundsChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof options !== 'undefined' && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof draggable !== 'undefined' && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof editable !== 'undefined' && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof bounds !== 'undefined' && instance !== null) {
      instance.setBounds(bounds);
    }
  }, [instance, bounds]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightClickListener !== null) {
        google.maps.event.removeListener(rightClickListener);
      }
      setRightClickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onBoundsChanged) {
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      setBoundsChangedListener(google.maps.event.addListener(instance, 'bounds_changed', onBoundsChanged));
    }
  }, [onBoundsChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var rectangle = new google.maps.Rectangle(_objectSpread$7(_objectSpread$7({}, options), {}, {
      map
    }));
    if (typeof visible !== 'undefined') {
      rectangle.setVisible(visible);
    }
    if (typeof editable !== 'undefined') {
      rectangle.setEditable(editable);
    }
    if (typeof draggable !== 'undefined') {
      rectangle.setDraggable(draggable);
    }
    if (typeof bounds !== 'undefined') {
      rectangle.setBounds(bounds);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(rectangle, 'dblclick', onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(rectangle, 'dragend', onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(rectangle, 'dragstart', onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(rectangle, 'mousedown', onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(rectangle, 'mousemove', onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(rectangle, 'mouseout', onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(rectangle, 'mouseover', onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(rectangle, 'mouseup', onMouseUp));
    }
    if (onRightClick) {
      setRightClickListener(google.maps.event.addListener(rectangle, 'rightclick', onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(rectangle, 'click', onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(rectangle, 'drag', onDrag));
    }
    if (onBoundsChanged) {
      setBoundsChangedListener(google.maps.event.addListener(rectangle, 'bounds_changed', onBoundsChanged));
    }
    setInstance(rectangle);
    if (onLoad) {
      onLoad(rectangle);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightClickListener !== null) {
        google.maps.event.removeListener(rightClickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      if (boundsChangedListener !== null) {
        google.maps.event.removeListener(boundsChangedListener);
      }
      if (onUnmount) {
        onUnmount(rectangle);
      }
      rectangle.setMap(null);
    };
  }, []);
  return null;
}
var RectangleF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(RectangleFunctional);
class Rectangle extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      rectangle: null
    });
    _defineProperty(this, "setRectangleCallback", () => {
      if (this.state.rectangle !== null && this.props.onLoad) {
        this.props.onLoad(this.state.rectangle);
      }
    });
  }
  componentDidMount() {
    var rectangle = new google.maps.Rectangle(_objectSpread$7(_objectSpread$7({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });
    this.setState(function setRectangle() {
      return {
        rectangle
      };
    }, this.setRectangleCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  }
  componentWillUnmount() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }
      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(Rectangle, "contextType", MapContext);

function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$8 = {
  onCenterChanged: 'center_changed',
  onRadiusChanged: 'radius_changed',
  onClick: 'click',
  onDblClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragStart: 'dragstart',
  onMouseDown: 'mousedown',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick'
};
var updaterMap$8 = {
  center(instance, center) {
    instance.setCenter(center);
  },
  draggable(instance, draggable) {
    instance.setDraggable(draggable);
  },
  editable(instance, editable) {
    instance.setEditable(editable);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  radius(instance, radius) {
    instance.setRadius(radius);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  }
};
var defaultOptions = {};
function CircleFunctional(_ref) {
  var {
    options,
    center,
    radius,
    draggable,
    editable,
    visible,
    onDblClick,
    onDragEnd,
    onDragStart,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
    onClick,
    onDrag,
    onCenterChanged,
    onRadiusChanged,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragendListener, setDragendListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragstartListener, setDragstartListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dragListener, setDragListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [centerChangedListener, setCenterChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [radiusChangedListener, setRadiusChangedListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof options !== 'undefined' && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof draggable !== 'undefined' && instance !== null) {
      instance.setDraggable(draggable);
    }
  }, [instance, draggable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof editable !== 'undefined' && instance !== null) {
      instance.setEditable(editable);
    }
  }, [instance, editable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && instance !== null) {
      instance.setVisible(visible);
    }
  }, [instance, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof radius === 'number' && instance !== null) {
      instance.setRadius(radius);
    }
  }, [instance, radius]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof center !== 'undefined' && instance !== null) {
      instance.setCenter(center);
    }
  }, [instance, center]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragEnd) {
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      setDragendListener(google.maps.event.addListener(instance, 'dragend', onDragEnd));
    }
  }, [onDragEnd]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDragStart) {
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      setDragstartListener(google.maps.event.addListener(instance, 'dragstart', onDragStart));
    }
  }, [onDragStart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDrag) {
      if (dragListener !== null) {
        google.maps.event.removeListener(dragListener);
      }
      setDragListener(google.maps.event.addListener(instance, 'drag', onDrag));
    }
  }, [onDrag]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onCenterChanged) {
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      setCenterChangedListener(google.maps.event.addListener(instance, 'center_changed', onCenterChanged));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRadiusChanged) {
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      setRadiusChangedListener(google.maps.event.addListener(instance, 'radius_changed', onRadiusChanged));
    }
  }, [onRadiusChanged]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var circle = new google.maps.Circle(_objectSpread$6(_objectSpread$6({}, options || defaultOptions), {}, {
      map
    }));
    if (typeof radius === 'number') {
      circle.setRadius(radius);
    }
    if (typeof center !== 'undefined') {
      circle.setCenter(center);
    }
    if (typeof radius === 'number') {
      circle.setRadius(radius);
    }
    if (typeof visible !== 'undefined') {
      circle.setVisible(visible);
    }
    if (typeof editable !== 'undefined') {
      circle.setEditable(editable);
    }
    if (typeof draggable !== 'undefined') {
      circle.setDraggable(draggable);
    }
    if (onDblClick) {
      setDblclickListener(google.maps.event.addListener(circle, 'dblclick', onDblClick));
    }
    if (onDragEnd) {
      setDragendListener(google.maps.event.addListener(circle, 'dragend', onDragEnd));
    }
    if (onDragStart) {
      setDragstartListener(google.maps.event.addListener(circle, 'dragstart', onDragStart));
    }
    if (onMouseDown) {
      setMousedownListener(google.maps.event.addListener(circle, 'mousedown', onMouseDown));
    }
    if (onMouseMove) {
      setMousemoveListener(google.maps.event.addListener(circle, 'mousemove', onMouseMove));
    }
    if (onMouseOut) {
      setMouseoutListener(google.maps.event.addListener(circle, 'mouseout', onMouseOut));
    }
    if (onMouseOver) {
      setMouseoverListener(google.maps.event.addListener(circle, 'mouseover', onMouseOver));
    }
    if (onMouseUp) {
      setMouseupListener(google.maps.event.addListener(circle, 'mouseup', onMouseUp));
    }
    if (onRightClick) {
      setRightclickListener(google.maps.event.addListener(circle, 'rightclick', onRightClick));
    }
    if (onClick) {
      setClickListener(google.maps.event.addListener(circle, 'click', onClick));
    }
    if (onDrag) {
      setDragListener(google.maps.event.addListener(circle, 'drag', onDrag));
    }
    if (onCenterChanged) {
      setCenterChangedListener(google.maps.event.addListener(circle, 'center_changed', onCenterChanged));
    }
    if (onRadiusChanged) {
      setRadiusChangedListener(google.maps.event.addListener(circle, 'radius_changed', onRadiusChanged));
    }
    setInstance(circle);
    if (onLoad) {
      onLoad(circle);
    }
    return () => {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      if (dragendListener !== null) {
        google.maps.event.removeListener(dragendListener);
      }
      if (dragstartListener !== null) {
        google.maps.event.removeListener(dragstartListener);
      }
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      if (centerChangedListener !== null) {
        google.maps.event.removeListener(centerChangedListener);
      }
      if (radiusChangedListener !== null) {
        google.maps.event.removeListener(radiusChangedListener);
      }
      if (onUnmount) {
        onUnmount(circle);
      }
      circle.setMap(null);
    };
  }, []);
  return null;
}
var CircleF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(CircleFunctional);
class Circle extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      circle: null
    });
    _defineProperty(this, "setCircleCallback", () => {
      if (this.state.circle !== null && this.props.onLoad) {
        this.props.onLoad(this.state.circle);
      }
    });
  }
  componentDidMount() {
    var circle = new google.maps.Circle(_objectSpread$6(_objectSpread$6({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });
    this.setState(function setCircle() {
      return {
        circle
      };
    }, this.setCircleCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  }
  componentWillUnmount() {
    if (this.state.circle !== null) {
      var _this$state$circle;
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }
      unregisterEvents(this.registeredEvents);
      (_this$state$circle = this.state.circle) === null || _this$state$circle === void 0 || _this$state$circle.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(Circle, "contextType", MapContext);

function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$7 = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onRightClick: 'rightclick',
  onAddFeature: 'addfeature',
  onRemoveFeature: 'removefeature',
  onRemoveProperty: 'removeproperty',
  onSetGeometry: 'setgeometry',
  onSetProperty: 'setproperty'
};
var updaterMap$7 = {
  add(instance, feature) {
    instance.add(feature);
  },
  addgeojson(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains(instance, feature) {
    instance.contains(feature);
  },
  foreach(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove(instance, feature) {
    instance.remove(feature);
  },
  revertstyle(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition(instance, controlPosition) {
    instance.setControlPosition(controlPosition);
  },
  controls(instance, controls) {
    instance.setControls(controls);
  },
  drawingmode(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  style(instance, style) {
    instance.setStyle(style);
  },
  togeojson(instance, callback) {
    instance.toGeoJson(callback);
  }
};
function DataFunctional(_ref) {
  var {
    options,
    onClick,
    onDblClick,
    onMouseDown,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    onRightClick,
    onAddFeature,
    onRemoveFeature,
    onRemoveProperty,
    onSetGeometry,
    onSetProperty,
    onLoad,
    onUnmount
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [dblclickListener, setDblclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousedownListener, setMousedownListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mousemoveListener, setMousemoveListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoutListener, setMouseoutListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseoverListener, setMouseoverListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [mouseupListener, setMouseupListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [rightclickListener, setRightclickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [clickListener, setClickListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [addFeatureListener, setAddFeatureListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [removeFeatureListener, setRemoveFeatureListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [removePropertyListener, setRemovePropertyListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [setGeometryListener, setSetGeometryListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  var [setPropertyListener, setSetPropertyListener] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onDblClick) {
      if (dblclickListener !== null) {
        google.maps.event.removeListener(dblclickListener);
      }
      setDblclickListener(google.maps.event.addListener(instance, 'dblclick', onDblClick));
    }
  }, [onDblClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseDown) {
      if (mousedownListener !== null) {
        google.maps.event.removeListener(mousedownListener);
      }
      setMousedownListener(google.maps.event.addListener(instance, 'mousedown', onMouseDown));
    }
  }, [onMouseDown]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseMove) {
      if (mousemoveListener !== null) {
        google.maps.event.removeListener(mousemoveListener);
      }
      setMousemoveListener(google.maps.event.addListener(instance, 'mousemove', onMouseMove));
    }
  }, [onMouseMove]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOut) {
      if (mouseoutListener !== null) {
        google.maps.event.removeListener(mouseoutListener);
      }
      setMouseoutListener(google.maps.event.addListener(instance, 'mouseout', onMouseOut));
    }
  }, [onMouseOut]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseOver) {
      if (mouseoverListener !== null) {
        google.maps.event.removeListener(mouseoverListener);
      }
      setMouseoverListener(google.maps.event.addListener(instance, 'mouseover', onMouseOver));
    }
  }, [onMouseOver]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onMouseUp) {
      if (mouseupListener !== null) {
        google.maps.event.removeListener(mouseupListener);
      }
      setMouseupListener(google.maps.event.addListener(instance, 'mouseup', onMouseUp));
    }
  }, [onMouseUp]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRightClick) {
      if (rightclickListener !== null) {
        google.maps.event.removeListener(rightclickListener);
      }
      setRightclickListener(google.maps.event.addListener(instance, 'rightclick', onRightClick));
    }
  }, [onRightClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onClick) {
      if (clickListener !== null) {
        google.maps.event.removeListener(clickListener);
      }
      setClickListener(google.maps.event.addListener(instance, 'click', onClick));
    }
  }, [onClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onAddFeature) {
      if (addFeatureListener !== null) {
        google.maps.event.removeListener(addFeatureListener);
      }
      setAddFeatureListener(google.maps.event.addListener(instance, 'addfeature', onAddFeature));
    }
  }, [onAddFeature]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRemoveFeature) {
      if (removeFeatureListener !== null) {
        google.maps.event.removeListener(removeFeatureListener);
      }
      setRemoveFeatureListener(google.maps.event.addListener(instance, 'removefeature', onRemoveFeature));
    }
  }, [onRemoveFeature]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onRemoveProperty) {
      if (removePropertyListener !== null) {
        google.maps.event.removeListener(removePropertyListener);
      }
      setRemovePropertyListener(google.maps.event.addListener(instance, 'removeproperty', onRemoveProperty));
    }
  }, [onRemoveProperty]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onSetGeometry) {
      if (setGeometryListener !== null) {
        google.maps.event.removeListener(setGeometryListener);
      }
      setSetGeometryListener(google.maps.event.addListener(instance, 'setgeometry', onSetGeometry));
    }
  }, [onSetGeometry]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance && onSetProperty) {
      if (setPropertyListener !== null) {
        google.maps.event.removeListener(setPropertyListener);
      }
      setSetPropertyListener(google.maps.event.addListener(instance, 'setproperty', onSetProperty));
    }
  }, [onSetProperty]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (map !== null) {
      var data = new google.maps.Data(_objectSpread$5(_objectSpread$5({}, options), {}, {
        map
      }));
      if (onDblClick) {
        setDblclickListener(google.maps.event.addListener(data, 'dblclick', onDblClick));
      }
      if (onMouseDown) {
        setMousedownListener(google.maps.event.addListener(data, 'mousedown', onMouseDown));
      }
      if (onMouseMove) {
        setMousemoveListener(google.maps.event.addListener(data, 'mousemove', onMouseMove));
      }
      if (onMouseOut) {
        setMouseoutListener(google.maps.event.addListener(data, 'mouseout', onMouseOut));
      }
      if (onMouseOver) {
        setMouseoverListener(google.maps.event.addListener(data, 'mouseover', onMouseOver));
      }
      if (onMouseUp) {
        setMouseupListener(google.maps.event.addListener(data, 'mouseup', onMouseUp));
      }
      if (onRightClick) {
        setRightclickListener(google.maps.event.addListener(data, 'rightclick', onRightClick));
      }
      if (onClick) {
        setClickListener(google.maps.event.addListener(data, 'click', onClick));
      }
      if (onAddFeature) {
        setAddFeatureListener(google.maps.event.addListener(data, 'addfeature', onAddFeature));
      }
      if (onRemoveFeature) {
        setRemoveFeatureListener(google.maps.event.addListener(data, 'removefeature', onRemoveFeature));
      }
      if (onRemoveProperty) {
        setRemovePropertyListener(google.maps.event.addListener(data, 'removeproperty', onRemoveProperty));
      }
      if (onSetGeometry) {
        setSetGeometryListener(google.maps.event.addListener(data, 'setgeometry', onSetGeometry));
      }
      if (onSetProperty) {
        setSetPropertyListener(google.maps.event.addListener(data, 'setproperty', onSetProperty));
      }
      setInstance(data);
      if (onLoad) {
        onLoad(data);
      }
    }
    return () => {
      if (instance) {
        if (dblclickListener !== null) {
          google.maps.event.removeListener(dblclickListener);
        }
        if (mousedownListener !== null) {
          google.maps.event.removeListener(mousedownListener);
        }
        if (mousemoveListener !== null) {
          google.maps.event.removeListener(mousemoveListener);
        }
        if (mouseoutListener !== null) {
          google.maps.event.removeListener(mouseoutListener);
        }
        if (mouseoverListener !== null) {
          google.maps.event.removeListener(mouseoverListener);
        }
        if (mouseupListener !== null) {
          google.maps.event.removeListener(mouseupListener);
        }
        if (rightclickListener !== null) {
          google.maps.event.removeListener(rightclickListener);
        }
        if (clickListener !== null) {
          google.maps.event.removeListener(clickListener);
        }
        if (addFeatureListener !== null) {
          google.maps.event.removeListener(addFeatureListener);
        }
        if (removeFeatureListener !== null) {
          google.maps.event.removeListener(removeFeatureListener);
        }
        if (removePropertyListener !== null) {
          google.maps.event.removeListener(removePropertyListener);
        }
        if (setGeometryListener !== null) {
          google.maps.event.removeListener(setGeometryListener);
        }
        if (setPropertyListener !== null) {
          google.maps.event.removeListener(setPropertyListener);
        }
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var DataF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(DataFunctional);
class Data extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      data: null
    });
    _defineProperty(this, "setDataCallback", () => {
      if (this.state.data !== null && this.props.onLoad) {
        this.props.onLoad(this.state.data);
      }
    });
  }
  componentDidMount() {
    if (this.context !== null) {
      var data = new google.maps.Data(_objectSpread$5(_objectSpread$5({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: {},
        nextProps: this.props,
        instance: data
      });
      this.setState(() => {
        return {
          data
        };
      }, this.setDataCallback);
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  }
  componentWillUnmount() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  }
  render() {
    return null;
  }
}
_defineProperty(Data, "contextType", MapContext);

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$6 = {
  onClick: 'click',
  onDefaultViewportChanged: 'defaultviewport_changed',
  onStatusChanged: 'status_changed'
};
var updaterMap$6 = {
  options(instance, options) {
    instance.setOptions(options);
  },
  url(instance, url) {
    instance.setUrl(url);
  },
  zIndex(instance, zIndex) {
    instance.setZIndex(zIndex);
  }
};
class KmlLayer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      kmlLayer: null
    });
    _defineProperty(this, "setKmlLayerCallback", () => {
      if (this.state.kmlLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.kmlLayer);
      }
    });
  }
  componentDidMount() {
    var kmlLayer = new google.maps.KmlLayer(_objectSpread$4(_objectSpread$4({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });
    this.setState(function setLmlLayer() {
      return {
        kmlLayer
      };
    }, this.setKmlLayerCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(KmlLayer, "contextType", MapContext);

function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === 'function' ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {
    x: 0,
    y: 0
  };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ensureOfType(inst,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  return inst instanceof type ? inst : factory(inst, type);
}
function ensureOfTypeBounds(inst,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
factory
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  return inst instanceof type ? inst : factory(inst, type);
}
function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());
  if (ne && sw) {
    return {
      left: "".concat(sw.x + offset.x, "px"),
      top: "".concat(ne.y + offset.y, "px"),
      width: "".concat(ne.x - sw.x - offset.x, "px"),
      height: "".concat(sw.y - ne.y - offset.y, "px")
    };
  }
  return {
    left: '-9999px',
    top: '-9999px'
  };
}
function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection && mapCanvasProjection.fromLatLngToDivPixel(position);
  if (point) {
    var {
      x,
      y
    } = point;
    return {
      left: "".concat(x + offset.x, "px"),
      top: "".concat(y + offset.y, "px")
    };
  }
  return {
    left: '-9999px',
    top: '-9999px'
  };
}
function getLayoutStyles(mapCanvasProjection, offset, bounds, position) {
  return bounds !== undefined ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfTypeBounds(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
}
function arePositionsEqual(currentPosition, previousPosition) {
  return currentPosition.left === previousPosition.left && currentPosition.top === previousPosition.top && currentPosition.width === previousPosition.height && currentPosition.height === previousPosition.height;
}

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function createOverlay(container, pane, position, bounds, getPixelPositionOffset) {
  class Overlay extends google.maps.OverlayView {
    constructor(container, pane, position, bounds) {
      super();
      this.container = container;
      this.pane = pane;
      this.position = position;
      this.bounds = bounds;
    }
    onAdd() {
      var _this$getPanes;
      var pane = (_this$getPanes = this.getPanes()) === null || _this$getPanes === void 0 ? void 0 : _this$getPanes[this.pane];
      pane === null || pane === void 0 || pane.appendChild(this.container);
    }
    draw() {
      var projection = this.getProjection();
      var offset = _objectSpread$3({}, this.container ? getOffsetOverride(this.container, getPixelPositionOffset) : {
        x: 0,
        y: 0
      });
      var layoutStyles = getLayoutStyles(projection, offset, this.bounds, this.position);
      for (var [key, value] of Object.entries(layoutStyles)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.container.style[key] = value;
      }
    }
    onRemove() {
      if (this.container.parentNode !== null) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }
  return new Overlay(container, pane, position, bounds);
}

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function convertToLatLngString(latLngLike) {
  if (!latLngLike) {
    return '';
  }
  var latLng = latLngLike instanceof google.maps.LatLng ? latLngLike : new google.maps.LatLng(latLngLike.lat, latLngLike.lng);
  return latLng + '';
}
function convertToLatLngBoundsString(latLngBoundsLike) {
  if (!latLngBoundsLike) {
    return '';
  }
  var latLngBounds = latLngBoundsLike instanceof google.maps.LatLngBounds ? latLngBoundsLike : new google.maps.LatLngBounds(new google.maps.LatLng(latLngBoundsLike.south, latLngBoundsLike.east), new google.maps.LatLng(latLngBoundsLike.north, latLngBoundsLike.west));
  return latLngBounds + '';
}
var FLOAT_PANE = "floatPane";
var MAP_PANE = "mapPane";
var MARKER_LAYER = "markerLayer";
var OVERLAY_LAYER = "overlayLayer";
var OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
function OverlayViewFunctional(_ref) {
  var {
    position,
    bounds,
    mapPaneName,
    zIndex,
    onLoad,
    onUnmount,
    getPixelPositionOffset,
    children
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    return div;
  }, []);
  var overlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return createOverlay(container, mapPaneName, position, bounds, getPixelPositionOffset);
  }, [container, mapPaneName, position, bounds]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    onLoad === null || onLoad === void 0 || onLoad(overlay);
    overlay === null || overlay === void 0 || overlay.setMap(map);
    return () => {
      onUnmount === null || onUnmount === void 0 || onUnmount(overlay);
      overlay === null || overlay === void 0 || overlay.setMap(null);
    };
  }, [map, overlay]);
  // to move the container to the foreground and background
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    container.style.zIndex = "".concat(zIndex);
  }, [zIndex, container]);
  return react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(children, container);
}
var OverlayViewF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(OverlayViewFunctional);
class OverlayView extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    _defineProperty(this, "state", {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: 'absolute'
      }
    });
    _defineProperty(this, "updatePane", () => {
      var mapPaneName = this.props.mapPaneName;
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
      var mapPanes = this.overlayView.getPanes();
      invariant(!!mapPaneName, "OverlayView requires props.mapPaneName but got %s", mapPaneName);
      if (mapPanes) {
        this.setState({
          paneEl: mapPanes[mapPaneName]
        });
      } else {
        this.setState({
          paneEl: null
        });
      }
    });
    _defineProperty(this, "onAdd", () => {
      var _this$props$onLoad, _this$props;
      this.updatePane();
      (_this$props$onLoad = (_this$props = this.props).onLoad) === null || _this$props$onLoad === void 0 || _this$props$onLoad.call(_this$props, this.overlayView);
    });
    _defineProperty(this, "onPositionElement", () => {
      var mapCanvasProjection = this.overlayView.getProjection();
      var offset = _objectSpread$2({
        x: 0,
        y: 0
      }, this.containerRef.current ? getOffsetOverride(this.containerRef.current, this.props.getPixelPositionOffset) : {});
      var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, this.props.bounds, this.props.position);
      if (!arePositionsEqual(layoutStyles, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        left: this.state.containerStyle.left,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        top: this.state.containerStyle.top,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        width: this.state.containerStyle.width,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        height: this.state.containerStyle.height
      })) {
        var _layoutStyles$top, _layoutStyles$left, _layoutStyles$width, _layoutStyles$height;
        this.setState({
          containerStyle: {
            top: (_layoutStyles$top = layoutStyles.top) !== null && _layoutStyles$top !== void 0 ? _layoutStyles$top : 0,
            left: (_layoutStyles$left = layoutStyles.left) !== null && _layoutStyles$left !== void 0 ? _layoutStyles$left : 0,
            width: (_layoutStyles$width = layoutStyles.width) !== null && _layoutStyles$width !== void 0 ? _layoutStyles$width : 0,
            height: (_layoutStyles$height = layoutStyles.height) !== null && _layoutStyles$height !== void 0 ? _layoutStyles$height : 0,
            position: 'absolute'
          }
        });
      }
    });
    _defineProperty(this, "draw", () => {
      this.onPositionElement();
    });
    _defineProperty(this, "onRemove", () => {
      var _this$props$onUnmount, _this$props2;
      this.setState(() => ({
        paneEl: null
      }));
      (_this$props$onUnmount = (_this$props2 = this.props).onUnmount) === null || _this$props$onUnmount === void 0 || _this$props$onUnmount.call(_this$props2, this.overlayView);
    });
    this.containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    // You must implement three methods: onAdd(), draw(), and onRemove().
    var overlayView = new google.maps.OverlayView();
    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    this.overlayView = overlayView;
  }
  componentDidMount() {
    this.overlayView.setMap(this.context);
  }
  componentDidUpdate(prevProps) {
    var prevPositionString = convertToLatLngString(prevProps.position);
    var positionString = convertToLatLngString(this.props.position);
    var prevBoundsString = convertToLatLngBoundsString(prevProps.bounds);
    var boundsString = convertToLatLngBoundsString(this.props.bounds);
    if (prevPositionString !== positionString || prevBoundsString !== boundsString) {
      this.overlayView.draw();
    }
    if (prevProps.mapPaneName !== this.props.mapPaneName) {
      this.updatePane();
    }
  }
  componentWillUnmount() {
    this.overlayView.setMap(null);
  }
  render() {
    var paneEl = this.state.paneEl;
    if (paneEl) {
      return react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: this.containerRef,
        style: this.state.containerStyle,
        children: react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children)
      }), paneEl);
    } else {
      return null;
    }
  }
}
_defineProperty(OverlayView, "FLOAT_PANE", "floatPane");
_defineProperty(OverlayView, "MAP_PANE", "mapPane");
_defineProperty(OverlayView, "MARKER_LAYER", "markerLayer");
_defineProperty(OverlayView, "OVERLAY_LAYER", "overlayLayer");
_defineProperty(OverlayView, "OVERLAY_MOUSE_TARGET", "overlayMouseTarget");
_defineProperty(OverlayView, "contextType", MapContext);

function noop() {
  return;
}

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$5 = {
  onDblClick: 'dblclick',
  onClick: 'click'
};
var updaterMap$5 = {
  opacity(instance, opacity) {
    instance.setOpacity(opacity);
  }
};
function GroundOverlayFunctional(_ref) {
  var {
    url,
    bounds,
    options,
    visible
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var imageBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
  var groundOverlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return new google.maps.GroundOverlay(url, imageBounds, options);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (groundOverlay !== null) {
      groundOverlay.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof url !== 'undefined' && groundOverlay !== null) {
      groundOverlay.set('url', url);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, url]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (typeof visible !== 'undefined' && groundOverlay !== null) {
      groundOverlay.setOpacity(visible ? 1 : 0);
    }
  }, [groundOverlay, visible]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var newBounds = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.south, bounds.west), new google.maps.LatLng(bounds.north, bounds.east));
    if (typeof bounds !== 'undefined' && groundOverlay !== null) {
      groundOverlay.set('bounds', newBounds);
      groundOverlay.setMap(map);
    }
  }, [groundOverlay, bounds]);
  return null;
}
var GroundOverlayF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(GroundOverlayFunctional);
class GroundOverlay extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      groundOverlay: null
    });
    _defineProperty(this, "setGroundOverlayCallback", () => {
      if (this.state.groundOverlay !== null && this.props.onLoad) {
        this.props.onLoad(this.state.groundOverlay);
      }
    });
  }
  componentDidMount() {
    invariant(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
    var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, _objectSpread$1(_objectSpread$1({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });
    this.setState(function setGroundOverlay() {
      return {
        groundOverlay
      };
    }, this.setGroundOverlayCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  }
  componentWillUnmount() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }
      this.state.groundOverlay.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(GroundOverlay, "defaultProps", {
  onLoad: noop
});
_defineProperty(GroundOverlay, "contextType", MapContext);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var eventMap$4 = {};
var updaterMap$4 = {
  data(instance, data) {
    instance.setData(data);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  }
};
function HeatmapLayerFunctional(_ref) {
  var {
    data,
    onLoad,
    onUnmount,
    options
  } = _ref;
  var map = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MapContext);
  var [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!google.maps.visualization) {
      invariant(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    invariant(!!data, 'data property is required in HeatmapLayer %s', data);
  }, [data]);
  // Order does matter
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (instance !== null) {
      instance.setMap(map);
    }
  }, [map]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (options && instance !== null) {
      instance.setOptions(options);
    }
  }, [instance, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(_objectSpread(_objectSpread({}, options), {}, {
      data,
      map
    }));
    setInstance(heatmapLayer);
    if (onLoad) {
      onLoad(heatmapLayer);
    }
    return () => {
      if (instance !== null) {
        if (onUnmount) {
          onUnmount(instance);
        }
        instance.setMap(null);
      }
    };
  }, []);
  return null;
}
var HeatmapLayerF = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(HeatmapLayerFunctional);
class HeatmapLayer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      heatmapLayer: null
    });
    _defineProperty(this, "setHeatmapLayerCallback", () => {
      if (this.state.heatmapLayer !== null && this.props.onLoad) {
        this.props.onLoad(this.state.heatmapLayer);
      }
    });
  }
  componentDidMount() {
    invariant(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization);
    invariant(!!this.props.data, 'data property is required in HeatmapLayer %s', this.props.data);
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(_objectSpread(_objectSpread({}, this.props.options), {}, {
      data: this.props.data,
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });
    this.setState(function setHeatmapLayer() {
      return {
        heatmapLayer
      };
    }, this.setHeatmapLayerCallback);
  }
  componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$4,
      eventMap: eventMap$4,
      prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  }
  componentWillUnmount() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }
      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(HeatmapLayer, "contextType", MapContext);

var eventMap$3 = {
  onCloseClick: 'closeclick',
  onPanoChanged: 'pano_changed',
  onPositionChanged: 'position_changed',
  onPovChanged: 'pov_changed',
  onResize: 'resize',
  onStatusChanged: 'status_changed',
  onVisibleChanged: 'visible_changed',
  onZoomChanged: 'zoom_changed'
};
var updaterMap$3 = {
  register(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links(instance, links) {
    instance.setLinks(links);
  },
  motionTracking(instance, motionTracking) {
    instance.setMotionTracking(motionTracking);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  pano(instance, pano) {
    instance.setPano(pano);
  },
  position(instance, position) {
    instance.setPosition(position);
  },
  pov(instance, pov) {
    instance.setPov(pov);
  },
  visible(instance, visible) {
    instance.setVisible(visible);
  },
  zoom(instance, zoom) {
    instance.setZoom(zoom);
  }
};
class StreetViewPanorama extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      streetViewPanorama: null
    });
    _defineProperty(this, "setStreetViewPanoramaCallback", () => {
      if (this.state.streetViewPanorama !== null && this.props.onLoad) {
        this.props.onLoad(this.state.streetViewPanorama);
      }
    });
  }
  componentDidMount() {
    var _this$context$getStre, _this$context;
    var streetViewPanorama = (_this$context$getStre = (_this$context = this.context) === null || _this$context === void 0 ? void 0 : _this$context.getStreetView()) !== null && _this$context$getStre !== void 0 ? _this$context$getStre : null;
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });
    this.setState(() => {
      return {
        streetViewPanorama
      };
    }, this.setStreetViewPanoramaCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  }
  componentWillUnmount() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }
      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(StreetViewPanorama, "contextType", MapContext);

class StreetViewService extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      streetViewService: null
    });
    _defineProperty(this, "setStreetViewServiceCallback", () => {
      if (this.state.streetViewService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.streetViewService);
      }
    });
  }
  componentDidMount() {
    var streetViewService = new google.maps.StreetViewService();
    this.setState(function setStreetViewService() {
      return {
        streetViewService
      };
    }, this.setStreetViewServiceCallback);
  }
  componentWillUnmount() {
    if (this.state.streetViewService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.streetViewService);
    }
  }
  render() {
    return null;
  }
}
_defineProperty(StreetViewService, "contextType", MapContext);

class DirectionsService extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      directionsService: null
    });
    _defineProperty(this, "setDirectionsServiceCallback", () => {
      if (this.state.directionsService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.directionsService);
      }
    });
  }
  componentDidMount() {
    invariant(!!this.props.options, 'DirectionsService expected options object as parameter, but got %s', this.props.options);
    var directionsService = new google.maps.DirectionsService();
    this.setState(function setDirectionsService() {
      return {
        directionsService
      };
    }, this.setDirectionsServiceCallback);
  }
  componentDidUpdate() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  }
  componentWillUnmount() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  }
  render() {
    return null;
  }
}

var eventMap$2 = {
  onDirectionsChanged: 'directions_changed'
};
var updaterMap$2 = {
  directions(instance, directions) {
    instance.setDirections(directions);
  },
  map(instance, map) {
    instance.setMap(map);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  panel(instance, panel) {
    instance.setPanel(panel);
  },
  routeIndex(instance, routeIndex) {
    instance.setRouteIndex(routeIndex);
  }
};
class DirectionsRenderer extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "state", {
      directionsRenderer: null
    });
    _defineProperty(this, "setDirectionsRendererCallback", () => {
      if (this.state.directionsRenderer !== null) {
        this.state.directionsRenderer.setMap(this.context);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.directionsRenderer);
        }
      }
    });
  }
  componentDidMount() {
    var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  }
  componentDidUpdate(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  }
  componentWillUnmount() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }
      unregisterEvents(this.registeredEvents);
      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  }
  render() {
    return null;
  }
}
_defineProperty(DirectionsRenderer, "contextType", MapContext);

class DistanceMatrixService extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      distanceMatrixService: null
    });
    _defineProperty(this, "setDistanceMatrixServiceCallback", () => {
      if (this.state.distanceMatrixService !== null && this.props.onLoad) {
        this.props.onLoad(this.state.distanceMatrixService);
      }
    });
  }
  componentDidMount() {
    invariant(!!this.props.options, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options);
    var distanceMatrixService = new google.maps.DistanceMatrixService();
    this.setState(function setDistanceMatrixService() {
      return {
        distanceMatrixService
      };
    }, this.setDistanceMatrixServiceCallback);
  }
  componentDidUpdate() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  }
  componentWillUnmount() {
    if (this.state.distanceMatrixService !== null && this.props.onUnmount) {
      this.props.onUnmount(this.state.distanceMatrixService);
    }
  }
  render() {
    return null;
  }
}

var eventMap$1 = {
  onPlacesChanged: 'places_changed'
};
var updaterMap$1 = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  }
};
class StandaloneSearchBox extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "containerElement", (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)());
    _defineProperty(this, "state", {
      searchBox: null
    });
    _defineProperty(this, "setSearchBoxCallback", () => {
      if (this.state.searchBox !== null && this.props.onLoad) {
        this.props.onLoad(this.state.searchBox);
      }
    });
  }
  componentDidMount() {
    invariant(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    if (this.containerElement !== null && this.containerElement.current !== null) {
      var input = this.containerElement.current.querySelector('input');
      if (input !== null) {
        var searchBox = new google.maps.places.SearchBox(input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$1,
          eventMap: eventMap$1,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox
        });
        this.setState(function setSearchBox() {
          return {
            searchBox
          };
        }, this.setSearchBoxCallback);
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  }
  componentWillUnmount() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      ref: this.containerElement,
      children: react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children)
    });
  }
}
_defineProperty(StandaloneSearchBox, "contextType", MapContext);

var eventMap = {
  onPlaceChanged: 'place_changed'
};
var updaterMap = {
  bounds(instance, bounds) {
    instance.setBounds(bounds);
  },
  restrictions(instance, restrictions) {
    instance.setComponentRestrictions(restrictions);
  },
  fields(instance, fields) {
    instance.setFields(fields);
  },
  options(instance, options) {
    instance.setOptions(options);
  },
  types(instance, types) {
    instance.setTypes(types);
  }
};
class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "registeredEvents", []);
    _defineProperty(this, "containerElement", (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)());
    _defineProperty(this, "state", {
      autocomplete: null
    });
    _defineProperty(this, "setAutocompleteCallback", () => {
      if (this.state.autocomplete !== null && this.props.onLoad) {
        this.props.onLoad(this.state.autocomplete);
      }
    });
  }
  componentDidMount() {
    var _this$containerElemen;
    invariant(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    // TODO: why current could be equal null?
    var input = (_this$containerElemen = this.containerElement.current) === null || _this$containerElemen === void 0 ? void 0 : _this$containerElemen.querySelector('input');
    if (input) {
      var autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap,
        eventMap,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete
      });
      this.setState(() => {
        return {
          autocomplete
        };
      }, this.setAutocompleteCallback);
    }
  }
  componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap,
      eventMap,
      prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  }
  componentWillUnmount() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  }
  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      ref: this.containerElement,
      className: this.props.className,
      children: react__WEBPACK_IMPORTED_MODULE_1__.Children.only(this.props.children)
    });
  }
}
_defineProperty(Autocomplete, "defaultProps", {
  className: ''
});
_defineProperty(Autocomplete, "contextType", MapContext);


//# sourceMappingURL=esm.js.map


/***/ }),

/***/ "./node_modules/css-box-model/dist/css-box-model.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBox: () => (/* binding */ calculateBox),
/* harmony export */   createBox: () => (/* binding */ createBox),
/* harmony export */   expand: () => (/* binding */ expand),
/* harmony export */   getBox: () => (/* binding */ getBox),
/* harmony export */   getRect: () => (/* binding */ getRect),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   shrink: () => (/* binding */ shrink),
/* harmony export */   withScroll: () => (/* binding */ withScroll)
/* harmony export */ });
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js");


var getRect = function getRect(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};

var shift = function shift(target, shiftBy) {
  return {
    top: target.top + shiftBy.y,
    left: target.left + shiftBy.x,
    bottom: target.bottom + shiftBy.y,
    right: target.right + shiftBy.x
  };
};

var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox(_ref2) {
  var borderBox = _ref2.borderBox,
      _ref2$margin = _ref2.margin,
      margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin,
      _ref2$border = _ref2.border,
      border = _ref2$border === void 0 ? noSpacing : _ref2$border,
      _ref2$padding = _ref2.padding,
      padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox: marginBox,
    borderBox: getRect(borderBox),
    paddingBox: paddingBox,
    contentBox: contentBox,
    margin: margin,
    border: border,
    padding: padding
  };
};

var parse = function parse(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);

  if (suffix !== 'px') {
    return 0;
  }

  var result = Number(value);
  !!isNaN(result) ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : 0 : void 0;
  return result;
};

var getWindowScroll = function getWindowScroll() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
};

var offset = function offset(original, change) {
  var borderBox = original.borderBox,
      border = original.border,
      margin = original.margin,
      padding = original.padding;
  var shifted = shift(borderBox, change);
  return createBox({
    borderBox: shifted,
    border: border,
    margin: margin,
    padding: padding
  });
};
var withScroll = function withScroll(original, scroll) {
  if (scroll === void 0) {
    scroll = getWindowScroll();
  }

  return offset(original, scroll);
};
var calculateBox = function calculateBox(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox: borderBox,
    margin: margin,
    padding: padding,
    border: border
  });
};
var getBox = function getBox(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/raf-schd/dist/raf-schd.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var rafSchd = function rafSchd(fn) {
  var lastArgs = [];
  var frameId = null;

  var wrapperFn = function wrapperFn() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    lastArgs = args;

    if (frameId) {
      return;
    }

    frameId = requestAnimationFrame(function () {
      frameId = null;
      fn.apply(void 0, lastArgs);
    });
  };

  wrapperFn.cancel = function () {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
  };

  return wrapperFn;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rafSchd);


/***/ }),

/***/ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDropContext: () => (/* binding */ DragDropContext),
/* harmony export */   Draggable: () => (/* binding */ PublicDraggable),
/* harmony export */   Droppable: () => (/* binding */ ConnectedDroppable),
/* harmony export */   resetServerContext: () => (/* binding */ resetServerContext),
/* harmony export */   useKeyboardSensor: () => (/* binding */ useKeyboardSensor),
/* harmony export */   useMouseSensor: () => (/* binding */ useMouseSensor),
/* harmony export */   useTouchSensor: () => (/* binding */ useTouchSensor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/react-beautiful-dnd/node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-memo-one */ "./node_modules/use-memo-one/dist/use-memo-one.esm.js");
/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-box-model */ "./node_modules/css-box-model/dist/css-box-model.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raf-schd */ "./node_modules/raf-schd/dist/raf-schd.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);











var isProduction = "development" === 'production';
var spacesAndTabs = /[ \t]{2,}/g;
var lineStartWithSpaces = /^[ \t]*/gm;

var clean = function clean(value) {
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
};

var getDevMessage = function getDevMessage(message) {
  return clean("\n  %creact-beautiful-dnd\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n");
};

var getFormattedMessage = function getFormattedMessage(message) {
  return [getDevMessage(message), 'color: #00C584; font-size: 1.2em; font-weight: bold;', 'line-height: 1.5', 'color: #723874;'];
};
var isDisabledFlag = '__react-beautiful-dnd-disable-dev-warnings';
function log(type, message) {
  var _console;

  if (isProduction) {
    return;
  }

  if (typeof window !== 'undefined' && window[isDisabledFlag]) {
    return;
  }

  (_console = console)[type].apply(_console, getFormattedMessage(message));
}
var warning = log.bind(null, 'warn');
var error = log.bind(null, 'error');

function noop() {}

function getOptions(shared, fromBinding) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, shared, {}, fromBinding);
}

function bindEvents(el, bindings, sharedOptions) {
  var unbindings = bindings.map(function (binding) {
    var options = getOptions(sharedOptions, binding.options);
    el.addEventListener(binding.eventName, binding.fn, options);
    return function unbind() {
      el.removeEventListener(binding.eventName, binding.fn, options);
    };
  });
  return function unbindAll() {
    unbindings.forEach(function (unbind) {
      unbind();
    });
  };
}

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';
function RbdInvariant(message) {
  this.message = message;
}

RbdInvariant.prototype.toString = function toString() {
  return this.message;
};

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new RbdInvariant(prefix);
  } else {
    throw new RbdInvariant(prefix + ": " + (message || ''));
  }
}

var ErrorBoundary = function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.callbacks = null;
    _this.unbind = noop;

    _this.onWindowError = function (event) {
      var callbacks = _this.getCallbacks();

      if (callbacks.isDragging()) {
        callbacks.tryAbort();
         true ? warning("\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      ") : 0;
      }

      var err = event.error;

      if (err instanceof RbdInvariant) {
        event.preventDefault();

        if (true) {
          error(err.message);
        }
      }
    };

    _this.getCallbacks = function () {
      if (!_this.callbacks) {
        throw new Error('Unable to find AppCallbacks in <ErrorBoundary/>');
      }

      return _this.callbacks;
    };

    _this.setCallbacks = function (callbacks) {
      _this.callbacks = callbacks;
    };

    return _this;
  }

  var _proto = ErrorBoundary.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unbind = bindEvents(window, [{
      eventName: 'error',
      fn: this.onWindowError
    }]);
  };

  _proto.componentDidCatch = function componentDidCatch(err) {
    if (err instanceof RbdInvariant) {
      if (true) {
        error(err.message);
      }

      this.setState({});
      return;
    }

    throw err;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unbind();
  };

  _proto.render = function render() {
    return this.props.children(this.setCallbacks);
  };

  return ErrorBoundary;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var dragHandleUsageInstructions = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n";

var position = function position(index) {
  return index + 1;
};

var onDragStart = function onDragStart(start) {
  return "\n  You have lifted an item in position " + position(start.source.index) + "\n";
};

var withLocation = function withLocation(source, destination) {
  var isInHomeList = source.droppableId === destination.droppableId;
  var startPosition = position(source.index);
  var endPosition = position(destination.index);

  if (isInHomeList) {
    return "\n      You have moved the item from position " + startPosition + "\n      to position " + endPosition + "\n    ";
  }

  return "\n    You have moved the item from position " + startPosition + "\n    in list " + source.droppableId + "\n    to list " + destination.droppableId + "\n    in position " + endPosition + "\n  ";
};

var withCombine = function withCombine(id, source, combine) {
  var inHomeList = source.droppableId === combine.droppableId;

  if (inHomeList) {
    return "\n      The item " + id + "\n      has been combined with " + combine.draggableId;
  }

  return "\n      The item " + id + "\n      in list " + source.droppableId + "\n      has been combined with " + combine.draggableId + "\n      in list " + combine.droppableId + "\n    ";
};

var onDragUpdate = function onDragUpdate(update) {
  var location = update.destination;

  if (location) {
    return withLocation(update.source, location);
  }

  var combine = update.combine;

  if (combine) {
    return withCombine(update.draggableId, update.source, combine);
  }

  return 'You are over an area that cannot be dropped on';
};

var returnedToStart = function returnedToStart(source) {
  return "\n  The item has returned to its starting position\n  of " + position(source.index) + "\n";
};

var onDragEnd = function onDragEnd(result) {
  if (result.reason === 'CANCEL') {
    return "\n      Movement cancelled.\n      " + returnedToStart(result.source) + "\n    ";
  }

  var location = result.destination;
  var combine = result.combine;

  if (location) {
    return "\n      You have dropped the item.\n      " + withLocation(result.source, location) + "\n    ";
  }

  if (combine) {
    return "\n      You have dropped the item.\n      " + withCombine(result.draggableId, result.source, combine) + "\n    ";
  }

  return "\n    The item has been dropped while not over a drop area.\n    " + returnedToStart(result.source) + "\n  ";
};

var preset = {
  dragHandleUsageInstructions: dragHandleUsageInstructions,
  onDragStart: onDragStart,
  onDragUpdate: onDragUpdate,
  onDragEnd: onDragEnd
};

var origin = {
  x: 0,
  y: 0
};
var add = function add(point1, point2) {
  return {
    x: point1.x + point2.x,
    y: point1.y + point2.y
  };
};
var subtract = function subtract(point1, point2) {
  return {
    x: point1.x - point2.x,
    y: point1.y - point2.y
  };
};
var isEqual = function isEqual(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};
var negate = function negate(point) {
  return {
    x: point.x !== 0 ? -point.x : 0,
    y: point.y !== 0 ? -point.y : 0
  };
};
var patch = function patch(line, value, otherValue) {
  var _ref;

  if (otherValue === void 0) {
    otherValue = 0;
  }

  return _ref = {}, _ref[line] = value, _ref[line === 'x' ? 'y' : 'x'] = otherValue, _ref;
};
var distance = function distance(point1, point2) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
};
var closest = function closest(target, points) {
  return Math.min.apply(Math, points.map(function (point) {
    return distance(target, point);
  }));
};
var apply = function apply(fn) {
  return function (point) {
    return {
      x: fn(point.x),
      y: fn(point.y)
    };
  };
};

var executeClip = (function (frame, subject) {
  var result = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: Math.max(subject.top, frame.top),
    right: Math.min(subject.right, frame.right),
    bottom: Math.min(subject.bottom, frame.bottom),
    left: Math.max(subject.left, frame.left)
  });

  if (result.width <= 0 || result.height <= 0) {
    return null;
  }

  return result;
});

var offsetByPosition = function offsetByPosition(spacing, point) {
  return {
    top: spacing.top + point.y,
    left: spacing.left + point.x,
    bottom: spacing.bottom + point.y,
    right: spacing.right + point.x
  };
};
var getCorners = function getCorners(spacing) {
  return [{
    x: spacing.left,
    y: spacing.top
  }, {
    x: spacing.right,
    y: spacing.top
  }, {
    x: spacing.left,
    y: spacing.bottom
  }, {
    x: spacing.right,
    y: spacing.bottom
  }];
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var scroll = function scroll(target, frame) {
  if (!frame) {
    return target;
  }

  return offsetByPosition(target, frame.scroll.diff.displacement);
};

var increase = function increase(target, axis, withPlaceholder) {
  if (withPlaceholder && withPlaceholder.increasedBy) {
    var _extends2;

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, target, (_extends2 = {}, _extends2[axis.end] = target[axis.end] + withPlaceholder.increasedBy[axis.line], _extends2));
  }

  return target;
};

var clip = function clip(target, frame) {
  if (frame && frame.shouldClipSubject) {
    return executeClip(frame.pageMarginBox, target);
  }

  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(target);
};

var getSubject = (function (_ref) {
  var page = _ref.page,
      withPlaceholder = _ref.withPlaceholder,
      axis = _ref.axis,
      frame = _ref.frame;
  var scrolled = scroll(page.marginBox, frame);
  var increased = increase(scrolled, axis, withPlaceholder);
  var clipped = clip(increased, frame);
  return {
    page: page,
    withPlaceholder: withPlaceholder,
    active: clipped
  };
});

var scrollDroppable = (function (droppable, newScroll) {
  !droppable.frame ?  true ? invariant(false) : 0 : void 0;
  var scrollable = droppable.frame;
  var scrollDiff = subtract(newScroll, scrollable.scroll.initial);
  var scrollDisplacement = negate(scrollDiff);

  var frame = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, scrollable, {
    scroll: {
      initial: scrollable.scroll.initial,
      current: newScroll,
      diff: {
        value: scrollDiff,
        displacement: scrollDisplacement
      },
      max: scrollable.scroll.max
    }
  });

  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: droppable.subject.withPlaceholder,
    axis: droppable.axis,
    frame: frame
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    frame: frame,
    subject: subject
  });

  return result;
});

function isInteger(value) {
  if (Number.isInteger) {
    return Number.isInteger(value);
  }

  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function values(map) {
  if (Object.values) {
    return Object.values(map);
  }

  return Object.keys(map).map(function (key) {
    return map[key];
  });
}
function findIndex(list, predicate) {
  if (list.findIndex) {
    return list.findIndex(predicate);
  }

  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i])) {
      return i;
    }
  }

  return -1;
}
function find(list, predicate) {
  if (list.find) {
    return list.find(predicate);
  }

  var index = findIndex(list, predicate);

  if (index !== -1) {
    return list[index];
  }

  return undefined;
}
function toArray(list) {
  return Array.prototype.slice.call(list);
}

var toDroppableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return droppables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDraggableMap = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return draggables.reduce(function (previous, current) {
    previous[current.descriptor.id] = current;
    return previous;
  }, {});
});
var toDroppableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return values(droppables);
});
var toDraggableList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (draggables) {
  return values(draggables);
});

var getDraggablesInsideDroppable = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppableId, draggables) {
  var result = toDraggableList(draggables).filter(function (draggable) {
    return droppableId === draggable.descriptor.droppableId;
  }).sort(function (a, b) {
    return a.descriptor.index - b.descriptor.index;
  });
  return result;
});

function tryGetDestination(impact) {
  if (impact.at && impact.at.type === 'REORDER') {
    return impact.at.destination;
  }

  return null;
}
function tryGetCombine(impact) {
  if (impact.at && impact.at.type === 'COMBINE') {
    return impact.at.combine;
  }

  return null;
}

var removeDraggableFromList = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (remove, list) {
  return list.filter(function (item) {
    return item.descriptor.id !== remove.descriptor.id;
  });
});

var moveToNextCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var location = tryGetDestination(previousImpact);

  if (!location) {
    return null;
  }

  function getImpact(target) {
    var at = {
      type: 'COMBINE',
      combine: {
        draggableId: target,
        droppableId: destination.descriptor.id
      }
    };
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, previousImpact, {
      at: at
    });
  }

  var all = previousImpact.displaced.all;
  var closestId = all.length ? all[0] : null;

  if (isMovingForward) {
    return closestId ? getImpact(closestId) : null;
  }

  var withoutDraggable = removeDraggableFromList(draggable, insideDestination);

  if (!closestId) {
    if (!withoutDraggable.length) {
      return null;
    }

    var last = withoutDraggable[withoutDraggable.length - 1];
    return getImpact(last.descriptor.id);
  }

  var indexOfClosest = findIndex(withoutDraggable, function (d) {
    return d.descriptor.id === closestId;
  });
  !(indexOfClosest !== -1) ?  true ? invariant(false, 'Could not find displaced item in set') : 0 : void 0;
  var proposedIndex = indexOfClosest - 1;

  if (proposedIndex < 0) {
    return null;
  }

  var before = withoutDraggable[proposedIndex];
  return getImpact(before.descriptor.id);
});

var isHomeOf = (function (draggable, destination) {
  return draggable.descriptor.droppableId === destination.descriptor.id;
});

var noDisplacedBy = {
  point: origin,
  value: 0
};
var emptyGroups = {
  invisible: {},
  visible: {},
  all: []
};
var noImpact = {
  displaced: emptyGroups,
  displacedBy: noDisplacedBy,
  at: null
};

var isWithin = (function (lowerBound, upperBound) {
  return function (value) {
    return lowerBound <= value && value <= upperBound;
  };
});

var isPartiallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);

    if (isContained) {
      return true;
    }

    var isPartiallyVisibleVertically = isWithinVertical(subject.top) || isWithinVertical(subject.bottom);
    var isPartiallyVisibleHorizontally = isWithinHorizontal(subject.left) || isWithinHorizontal(subject.right);
    var isPartiallyContained = isPartiallyVisibleVertically && isPartiallyVisibleHorizontally;

    if (isPartiallyContained) {
      return true;
    }

    var isBiggerVertically = subject.top < frame.top && subject.bottom > frame.bottom;
    var isBiggerHorizontally = subject.left < frame.left && subject.right > frame.right;
    var isTargetBiggerThanFrame = isBiggerVertically && isBiggerHorizontally;

    if (isTargetBiggerThanFrame) {
      return true;
    }

    var isTargetBiggerOnOneAxis = isBiggerVertically && isPartiallyVisibleHorizontally || isBiggerHorizontally && isPartiallyVisibleVertically;
    return isTargetBiggerOnOneAxis;
  };
});

var isTotallyVisibleThroughFrame = (function (frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function (subject) {
    var isContained = isWithinVertical(subject.top) && isWithinVertical(subject.bottom) && isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    return isContained;
  };
});

var vertical = {
  direction: 'vertical',
  line: 'y',
  crossAxisLine: 'x',
  start: 'top',
  end: 'bottom',
  size: 'height',
  crossAxisStart: 'left',
  crossAxisEnd: 'right',
  crossAxisSize: 'width'
};
var horizontal = {
  direction: 'horizontal',
  line: 'x',
  crossAxisLine: 'y',
  start: 'left',
  end: 'right',
  size: 'width',
  crossAxisStart: 'top',
  crossAxisEnd: 'bottom',
  crossAxisSize: 'height'
};

var isTotallyVisibleThroughFrameOnAxis = (function (axis) {
  return function (frame) {
    var isWithinVertical = isWithin(frame.top, frame.bottom);
    var isWithinHorizontal = isWithin(frame.left, frame.right);
    return function (subject) {
      if (axis === vertical) {
        return isWithinVertical(subject.top) && isWithinVertical(subject.bottom);
      }

      return isWithinHorizontal(subject.left) && isWithinHorizontal(subject.right);
    };
  };
});

var getDroppableDisplaced = function getDroppableDisplaced(target, destination) {
  var displacement = destination.frame ? destination.frame.scroll.diff.displacement : origin;
  return offsetByPosition(target, displacement);
};

var isVisibleInDroppable = function isVisibleInDroppable(target, destination, isVisibleThroughFrameFn) {
  if (!destination.subject.active) {
    return false;
  }

  return isVisibleThroughFrameFn(destination.subject.active)(target);
};

var isVisibleInViewport = function isVisibleInViewport(target, viewport, isVisibleThroughFrameFn) {
  return isVisibleThroughFrameFn(viewport)(target);
};

var isVisible = function isVisible(_ref) {
  var toBeDisplaced = _ref.target,
      destination = _ref.destination,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
  var displacedTarget = withDroppableDisplacement ? getDroppableDisplaced(toBeDisplaced, destination) : toBeDisplaced;
  return isVisibleInDroppable(displacedTarget, destination, isVisibleThroughFrameFn) && isVisibleInViewport(displacedTarget, viewport, isVisibleThroughFrameFn);
};

var isPartiallyVisible = function isPartiallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isPartiallyVisibleThroughFrame
  }));
};
var isTotallyVisible = function isTotallyVisible(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrame
  }));
};
var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(args) {
  return isVisible((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, args, {
    isVisibleThroughFrameFn: isTotallyVisibleThroughFrameOnAxis(args.destination.axis)
  }));
};

var getShouldAnimate = function getShouldAnimate(id, last, forceShouldAnimate) {
  if (typeof forceShouldAnimate === 'boolean') {
    return forceShouldAnimate;
  }

  if (!last) {
    return true;
  }

  var invisible = last.invisible,
      visible = last.visible;

  if (invisible[id]) {
    return false;
  }

  var previous = visible[id];
  return previous ? previous.shouldAnimate : true;
};

function getTarget(draggable, displacedBy) {
  var marginBox = draggable.page.marginBox;
  var expandBy = {
    top: displacedBy.point.y,
    right: 0,
    bottom: 0,
    left: displacedBy.point.x
  };
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)((0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(marginBox, expandBy));
}

function getDisplacementGroups(_ref) {
  var afterDragging = _ref.afterDragging,
      destination = _ref.destination,
      displacedBy = _ref.displacedBy,
      viewport = _ref.viewport,
      forceShouldAnimate = _ref.forceShouldAnimate,
      last = _ref.last;
  return afterDragging.reduce(function process(groups, draggable) {
    var target = getTarget(draggable, displacedBy);
    var id = draggable.descriptor.id;
    groups.all.push(id);
    var isVisible = isPartiallyVisible({
      target: target,
      destination: destination,
      viewport: viewport,
      withDroppableDisplacement: true
    });

    if (!isVisible) {
      groups.invisible[draggable.descriptor.id] = true;
      return groups;
    }

    var shouldAnimate = getShouldAnimate(id, last, forceShouldAnimate);
    var displacement = {
      draggableId: id,
      shouldAnimate: shouldAnimate
    };
    groups.visible[id] = displacement;
    return groups;
  }, {
    all: [],
    visible: {},
    invisible: {}
  });
}

function getIndexOfLastItem(draggables, options) {
  if (!draggables.length) {
    return 0;
  }

  var indexOfLastItem = draggables[draggables.length - 1].descriptor.index;
  return options.inHomeList ? indexOfLastItem : indexOfLastItem + 1;
}

function goAtEnd(_ref) {
  var insideDestination = _ref.insideDestination,
      inHomeList = _ref.inHomeList,
      displacedBy = _ref.displacedBy,
      destination = _ref.destination;
  var newIndex = getIndexOfLastItem(insideDestination, {
    inHomeList: inHomeList
  });
  return {
    displaced: emptyGroups,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: newIndex
      }
    }
  };
}

function calculateReorderImpact(_ref2) {
  var draggable = _ref2.draggable,
      insideDestination = _ref2.insideDestination,
      destination = _ref2.destination,
      viewport = _ref2.viewport,
      displacedBy = _ref2.displacedBy,
      last = _ref2.last,
      index = _ref2.index,
      forceShouldAnimate = _ref2.forceShouldAnimate;
  var inHomeList = isHomeOf(draggable, destination);

  if (index == null) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var match = find(insideDestination, function (item) {
    return item.descriptor.index === index;
  });

  if (!match) {
    return goAtEnd({
      insideDestination: insideDestination,
      inHomeList: inHomeList,
      displacedBy: displacedBy,
      destination: destination
    });
  }

  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var sliceFrom = insideDestination.indexOf(match);
  var impacted = withoutDragging.slice(sliceFrom);
  var displaced = getDisplacementGroups({
    afterDragging: impacted,
    destination: destination,
    displacedBy: displacedBy,
    last: last,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate
  });
  return {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: {
        droppableId: destination.descriptor.id,
        index: index
      }
    }
  };
}

function didStartAfterCritical(draggableId, afterCritical) {
  return Boolean(afterCritical.effected[draggableId]);
}

var fromCombine = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      destination = _ref.destination,
      draggables = _ref.draggables,
      combine = _ref.combine,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var combineId = combine.draggableId;
  var combineWith = draggables[combineId];
  var combineWithIndex = combineWith.descriptor.index;
  var didCombineWithStartAfterCritical = didStartAfterCritical(combineId, afterCritical);

  if (didCombineWithStartAfterCritical) {
    if (isMovingForward) {
      return combineWithIndex;
    }

    return combineWithIndex - 1;
  }

  if (isMovingForward) {
    return combineWithIndex + 1;
  }

  return combineWithIndex;
});

var fromReorder = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      insideDestination = _ref.insideDestination,
      location = _ref.location;

  if (!insideDestination.length) {
    return null;
  }

  var currentIndex = location.index;
  var proposedIndex = isMovingForward ? currentIndex + 1 : currentIndex - 1;
  var firstIndex = insideDestination[0].descriptor.index;
  var lastIndex = insideDestination[insideDestination.length - 1].descriptor.index;
  var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

  if (proposedIndex < firstIndex) {
    return null;
  }

  if (proposedIndex > upperBound) {
    return null;
  }

  return proposedIndex;
});

var moveToNextIndex = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      isInHomeList = _ref.isInHomeList,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var wasAt = previousImpact.at;
  !wasAt ?  true ? invariant(false, 'Cannot move in direction without previous impact location') : 0 : void 0;

  if (wasAt.type === 'REORDER') {
    var _newIndex = fromReorder({
      isMovingForward: isMovingForward,
      isInHomeList: isInHomeList,
      location: wasAt.destination,
      insideDestination: insideDestination
    });

    if (_newIndex == null) {
      return null;
    }

    return calculateReorderImpact({
      draggable: draggable,
      insideDestination: insideDestination,
      destination: destination,
      viewport: viewport,
      last: previousImpact.displaced,
      displacedBy: previousImpact.displacedBy,
      index: _newIndex
    });
  }

  var newIndex = fromCombine({
    isMovingForward: isMovingForward,
    destination: destination,
    displaced: previousImpact.displaced,
    draggables: draggables,
    combine: wasAt.combine,
    afterCritical: afterCritical
  });

  if (newIndex == null) {
    return null;
  }

  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: previousImpact.displaced,
    displacedBy: previousImpact.displacedBy,
    index: newIndex
  });
});

var getCombinedItemDisplacement = (function (_ref) {
  var displaced = _ref.displaced,
      afterCritical = _ref.afterCritical,
      combineWith = _ref.combineWith,
      displacedBy = _ref.displacedBy;
  var isDisplaced = Boolean(displaced.visible[combineWith] || displaced.invisible[combineWith]);

  if (didStartAfterCritical(combineWith, afterCritical)) {
    return isDisplaced ? origin : negate(displacedBy.point);
  }

  return isDisplaced ? displacedBy.point : origin;
});

var whenCombining = (function (_ref) {
  var afterCritical = _ref.afterCritical,
      impact = _ref.impact,
      draggables = _ref.draggables;
  var combine = tryGetCombine(impact);
  !combine ?  true ? invariant(false) : 0 : void 0;
  var combineWith = combine.draggableId;
  var center = draggables[combineWith].page.borderBox.center;
  var displaceBy = getCombinedItemDisplacement({
    displaced: impact.displaced,
    afterCritical: afterCritical,
    combineWith: combineWith,
    displacedBy: impact.displacedBy
  });
  return add(center, displaceBy);
});

var distanceFromStartToBorderBoxCenter = function distanceFromStartToBorderBoxCenter(axis, box) {
  return box.margin[axis.start] + box.borderBox[axis.size] / 2;
};

var distanceFromEndToBorderBoxCenter = function distanceFromEndToBorderBoxCenter(axis, box) {
  return box.margin[axis.end] + box.borderBox[axis.size] / 2;
};

var getCrossAxisBorderBoxCenter = function getCrossAxisBorderBoxCenter(axis, target, isMoving) {
  return target[axis.crossAxisStart] + isMoving.margin[axis.crossAxisStart] + isMoving.borderBox[axis.crossAxisSize] / 2;
};

var goAfter = function goAfter(_ref) {
  var axis = _ref.axis,
      moveRelativeTo = _ref.moveRelativeTo,
      isMoving = _ref.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.end] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goBefore = function goBefore(_ref2) {
  var axis = _ref2.axis,
      moveRelativeTo = _ref2.moveRelativeTo,
      isMoving = _ref2.isMoving;
  return patch(axis.line, moveRelativeTo.marginBox[axis.start] - distanceFromEndToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveRelativeTo.marginBox, isMoving));
};
var goIntoStart = function goIntoStart(_ref3) {
  var axis = _ref3.axis,
      moveInto = _ref3.moveInto,
      isMoving = _ref3.isMoving;
  return patch(axis.line, moveInto.contentBox[axis.start] + distanceFromStartToBorderBoxCenter(axis, isMoving), getCrossAxisBorderBoxCenter(axis, moveInto.contentBox, isMoving));
};

var whenReordering = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppable = _ref.droppable,
      afterCritical = _ref.afterCritical;
  var insideDestination = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var draggablePage = draggable.page;
  var axis = droppable.axis;

  if (!insideDestination.length) {
    return goIntoStart({
      axis: axis,
      moveInto: droppable.page,
      isMoving: draggablePage
    });
  }

  var displaced = impact.displaced,
      displacedBy = impact.displacedBy;
  var closestAfter = displaced.all[0];

  if (closestAfter) {
    var closest = draggables[closestAfter];

    if (didStartAfterCritical(closestAfter, afterCritical)) {
      return goBefore({
        axis: axis,
        moveRelativeTo: closest.page,
        isMoving: draggablePage
      });
    }

    var withDisplacement = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(closest.page, displacedBy.point);
    return goBefore({
      axis: axis,
      moveRelativeTo: withDisplacement,
      isMoving: draggablePage
    });
  }

  var last = insideDestination[insideDestination.length - 1];

  if (last.descriptor.id === draggable.descriptor.id) {
    return draggablePage.borderBox.center;
  }

  if (didStartAfterCritical(last.descriptor.id, afterCritical)) {
    var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(last.page, negate(afterCritical.displacedBy.point));
    return goAfter({
      axis: axis,
      moveRelativeTo: page,
      isMoving: draggablePage
    });
  }

  return goAfter({
    axis: axis,
    moveRelativeTo: last.page,
    isMoving: draggablePage
  });
});

var withDroppableDisplacement = (function (droppable, point) {
  var frame = droppable.frame;

  if (!frame) {
    return point;
  }

  return add(point, frame.scroll.diff.displacement);
});

var getResultWithoutDroppableDisplacement = function getResultWithoutDroppableDisplacement(_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      afterCritical = _ref.afterCritical;
  var original = draggable.page.borderBox.center;
  var at = impact.at;

  if (!droppable) {
    return original;
  }

  if (!at) {
    return original;
  }

  if (at.type === 'REORDER') {
    return whenReordering({
      impact: impact,
      draggable: draggable,
      draggables: draggables,
      droppable: droppable,
      afterCritical: afterCritical
    });
  }

  return whenCombining({
    impact: impact,
    draggables: draggables,
    afterCritical: afterCritical
  });
};

var getPageBorderBoxCenterFromImpact = (function (args) {
  var withoutDisplacement = getResultWithoutDroppableDisplacement(args);
  var droppable = args.droppable;
  var withDisplacement = droppable ? withDroppableDisplacement(droppable, withoutDisplacement) : withoutDisplacement;
  return withDisplacement;
});

var scrollViewport = (function (viewport, newScroll) {
  var diff = subtract(newScroll, viewport.scroll.initial);
  var displacement = negate(diff);
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: newScroll.y,
    bottom: newScroll.y + viewport.frame.height,
    left: newScroll.x,
    right: newScroll.x + viewport.frame.width
  });
  var updated = {
    frame: frame,
    scroll: {
      initial: viewport.scroll.initial,
      max: viewport.scroll.max,
      current: newScroll,
      diff: {
        value: diff,
        displacement: displacement
      }
    }
  };
  return updated;
});

function getDraggables(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

function tryGetVisible(id, groups) {
  for (var i = 0; i < groups.length; i++) {
    var displacement = groups[i].visible[id];

    if (displacement) {
      return displacement;
    }
  }

  return null;
}

var speculativelyIncrease = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      destination = _ref.destination,
      draggables = _ref.draggables,
      maxScrollChange = _ref.maxScrollChange;
  var scrolledViewport = scrollViewport(viewport, add(viewport.scroll.current, maxScrollChange));
  var scrolledDroppable = destination.frame ? scrollDroppable(destination, add(destination.frame.scroll.current, maxScrollChange)) : destination;
  var last = impact.displaced;
  var withViewportScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: scrolledViewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var withDroppableScroll = getDisplacementGroups({
    afterDragging: getDraggables(last.all, draggables),
    destination: scrolledDroppable,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    last: last,
    forceShouldAnimate: false
  });
  var invisible = {};
  var visible = {};
  var groups = [last, withViewportScroll, withDroppableScroll];
  last.all.forEach(function (id) {
    var displacement = tryGetVisible(id, groups);

    if (displacement) {
      visible[id] = displacement;
      return;
    }

    invisible[id] = true;
  });

  var newImpact = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: {
      all: last.all,
      invisible: invisible,
      visible: visible
    }
  });

  return newImpact;
});

var withViewportDisplacement = (function (viewport, point) {
  return add(viewport.scroll.diff.displacement, point);
});

var getClientFromPageBorderBoxCenter = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      draggable = _ref.draggable,
      viewport = _ref.viewport;
  var withoutPageScrollChange = withViewportDisplacement(viewport, pageBorderBoxCenter);
  var offset = subtract(withoutPageScrollChange, draggable.page.borderBox.center);
  return add(draggable.client.borderBox.center, offset);
});

var isTotallyVisibleInNewLocation = (function (_ref) {
  var draggable = _ref.draggable,
      destination = _ref.destination,
      newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
      viewport = _ref.viewport,
      withDroppableDisplacement = _ref.withDroppableDisplacement,
      _ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
      onlyOnMainAxis = _ref$onlyOnMainAxis === void 0 ? false : _ref$onlyOnMainAxis;
  var changeNeeded = subtract(newPageBorderBoxCenter, draggable.page.borderBox.center);
  var shifted = offsetByPosition(draggable.page.borderBox, changeNeeded);
  var args = {
    target: shifted,
    destination: destination,
    withDroppableDisplacement: withDroppableDisplacement,
    viewport: viewport
  };
  return onlyOnMainAxis ? isTotallyVisibleOnAxis(args) : isTotallyVisible(args);
});

var moveToNextPlace = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      draggable = _ref.draggable,
      destination = _ref.destination,
      draggables = _ref.draggables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      previousClientSelection = _ref.previousClientSelection,
      afterCritical = _ref.afterCritical;

  if (!destination.isEnabled) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var isInHomeList = isHomeOf(draggable, destination);
  var impact = moveToNextCombine({
    isMovingForward: isMovingForward,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact
  }) || moveToNextIndex({
    isMovingForward: isMovingForward,
    isInHomeList: isInHomeList,
    draggable: draggable,
    draggables: draggables,
    destination: destination,
    insideDestination: insideDestination,
    previousImpact: previousImpact,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
    draggable: draggable,
    destination: destination,
    newPageBorderBoxCenter: pageBorderBoxCenter,
    viewport: viewport.frame,
    withDroppableDisplacement: false,
    onlyOnMainAxis: true
  });

  if (isVisibleInNewLocation) {
    var clientSelection = getClientFromPageBorderBoxCenter({
      pageBorderBoxCenter: pageBorderBoxCenter,
      draggable: draggable,
      viewport: viewport
    });
    return {
      clientSelection: clientSelection,
      impact: impact,
      scrollJumpRequest: null
    };
  }

  var distance = subtract(pageBorderBoxCenter, previousPageBorderBoxCenter);
  var cautious = speculativelyIncrease({
    impact: impact,
    viewport: viewport,
    destination: destination,
    draggables: draggables,
    maxScrollChange: distance
  });
  return {
    clientSelection: previousClientSelection,
    impact: cautious,
    scrollJumpRequest: distance
  };
});

var getKnownActive = function getKnownActive(droppable) {
  var rect = droppable.subject.active;
  !rect ?  true ? invariant(false, 'Cannot get clipped area from droppable') : 0 : void 0;
  return rect;
};

var getBestCrossAxisDroppable = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      source = _ref.source,
      droppables = _ref.droppables,
      viewport = _ref.viewport;
  var active = source.subject.active;

  if (!active) {
    return null;
  }

  var axis = source.axis;
  var isBetweenSourceClipped = isWithin(active[axis.start], active[axis.end]);
  var candidates = toDroppableList(droppables).filter(function (droppable) {
    return droppable !== source;
  }).filter(function (droppable) {
    return droppable.isEnabled;
  }).filter(function (droppable) {
    return Boolean(droppable.subject.active);
  }).filter(function (droppable) {
    return isPartiallyVisibleThroughFrame(viewport.frame)(getKnownActive(droppable));
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);

    if (isMovingForward) {
      return active[axis.crossAxisEnd] < activeOfTarget[axis.crossAxisEnd];
    }

    return activeOfTarget[axis.crossAxisStart] < active[axis.crossAxisStart];
  }).filter(function (droppable) {
    var activeOfTarget = getKnownActive(droppable);
    var isBetweenDestinationClipped = isWithin(activeOfTarget[axis.start], activeOfTarget[axis.end]);
    return isBetweenSourceClipped(activeOfTarget[axis.start]) || isBetweenSourceClipped(activeOfTarget[axis.end]) || isBetweenDestinationClipped(active[axis.start]) || isBetweenDestinationClipped(active[axis.end]);
  }).sort(function (a, b) {
    var first = getKnownActive(a)[axis.crossAxisStart];
    var second = getKnownActive(b)[axis.crossAxisStart];

    if (isMovingForward) {
      return first - second;
    }

    return second - first;
  }).filter(function (droppable, index, array) {
    return getKnownActive(droppable)[axis.crossAxisStart] === getKnownActive(array[0])[axis.crossAxisStart];
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0];
  }

  var contains = candidates.filter(function (droppable) {
    var isWithinDroppable = isWithin(getKnownActive(droppable)[axis.start], getKnownActive(droppable)[axis.end]);
    return isWithinDroppable(pageBorderBoxCenter[axis.line]);
  });

  if (contains.length === 1) {
    return contains[0];
  }

  if (contains.length > 1) {
    return contains.sort(function (a, b) {
      return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
    })[0];
  }

  return candidates.sort(function (a, b) {
    var first = closest(pageBorderBoxCenter, getCorners(getKnownActive(a)));
    var second = closest(pageBorderBoxCenter, getCorners(getKnownActive(b)));

    if (first !== second) {
      return first - second;
    }

    return getKnownActive(a)[axis.start] - getKnownActive(b)[axis.start];
  })[0];
});

var getCurrentPageBorderBoxCenter = function getCurrentPageBorderBoxCenter(draggable, afterCritical) {
  var original = draggable.page.borderBox.center;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? subtract(original, afterCritical.displacedBy.point) : original;
};
var getCurrentPageBorderBox = function getCurrentPageBorderBox(draggable, afterCritical) {
  var original = draggable.page.borderBox;
  return didStartAfterCritical(draggable.descriptor.id, afterCritical) ? offsetByPosition(original, negate(afterCritical.displacedBy.point)) : original;
};

var getClosestDraggable = (function (_ref) {
  var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
      viewport = _ref.viewport,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;
  var sorted = insideDestination.filter(function (draggable) {
    return isTotallyVisible({
      target: getCurrentPageBorderBox(draggable, afterCritical),
      destination: destination,
      viewport: viewport.frame,
      withDroppableDisplacement: true
    });
  }).sort(function (a, b) {
    var distanceToA = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(a, afterCritical)));
    var distanceToB = distance(pageBorderBoxCenter, withDroppableDisplacement(destination, getCurrentPageBorderBoxCenter(b, afterCritical)));

    if (distanceToA < distanceToB) {
      return -1;
    }

    if (distanceToB < distanceToA) {
      return 1;
    }

    return a.descriptor.index - b.descriptor.index;
  });
  return sorted[0] || null;
});

var getDisplacedBy = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function getDisplacedBy(axis, displaceBy) {
  var displacement = displaceBy[axis.line];
  return {
    value: displacement,
    point: patch(axis.line, displacement)
  };
});

var getRequiredGrowthForPlaceholder = function getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables) {
  var axis = droppable.axis;

  if (droppable.descriptor.mode === 'virtual') {
    return patch(axis.line, placeholderSize[axis.line]);
  }

  var availableSpace = droppable.subject.page.contentBox[axis.size];
  var insideDroppable = getDraggablesInsideDroppable(droppable.descriptor.id, draggables);
  var spaceUsed = insideDroppable.reduce(function (sum, dimension) {
    return sum + dimension.client.marginBox[axis.size];
  }, 0);
  var requiredSpace = spaceUsed + placeholderSize[axis.line];
  var needsToGrowBy = requiredSpace - availableSpace;

  if (needsToGrowBy <= 0) {
    return null;
  }

  return patch(axis.line, needsToGrowBy);
};

var withMaxScroll = function withMaxScroll(frame, max) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame, {
    scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, frame.scroll, {
      max: max
    })
  });
};

var addPlaceholder = function addPlaceholder(droppable, draggable, draggables) {
  var frame = droppable.frame;
  !!isHomeOf(draggable, droppable) ?  true ? invariant(false, 'Should not add placeholder space to home list') : 0 : void 0;
  !!droppable.subject.withPlaceholder ?  true ? invariant(false, 'Cannot add placeholder size to a subject when it already has one') : 0 : void 0;
  var placeholderSize = getDisplacedBy(droppable.axis, draggable.displaceBy).point;
  var requiredGrowth = getRequiredGrowthForPlaceholder(droppable, placeholderSize, draggables);
  var added = {
    placeholderSize: placeholderSize,
    increasedBy: requiredGrowth,
    oldFrameMaxScroll: droppable.frame ? droppable.frame.scroll.max : null
  };

  if (!frame) {
    var _subject = getSubject({
      page: droppable.subject.page,
      withPlaceholder: added,
      axis: droppable.axis,
      frame: droppable.frame
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject
    });
  }

  var maxScroll = requiredGrowth ? add(frame.scroll.max, requiredGrowth) : frame.scroll.max;
  var newFrame = withMaxScroll(frame, maxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    withPlaceholder: added,
    axis: droppable.axis,
    frame: newFrame
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};
var removePlaceholder = function removePlaceholder(droppable) {
  var added = droppable.subject.withPlaceholder;
  !added ?  true ? invariant(false, 'Cannot remove placeholder form subject when there was none') : 0 : void 0;
  var frame = droppable.frame;

  if (!frame) {
    var _subject2 = getSubject({
      page: droppable.subject.page,
      axis: droppable.axis,
      frame: null,
      withPlaceholder: null
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
      subject: _subject2
    });
  }

  var oldMaxScroll = added.oldFrameMaxScroll;
  !oldMaxScroll ?  true ? invariant(false, 'Expected droppable with frame to have old max frame scroll when removing placeholder') : 0 : void 0;
  var newFrame = withMaxScroll(frame, oldMaxScroll);
  var subject = getSubject({
    page: droppable.subject.page,
    axis: droppable.axis,
    frame: newFrame,
    withPlaceholder: null
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppable, {
    subject: subject,
    frame: newFrame
  });
};

var moveToNewDroppable = (function (_ref) {
  var previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      moveRelativeTo = _ref.moveRelativeTo,
      insideDestination = _ref.insideDestination,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      destination = _ref.destination,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;

  if (!moveRelativeTo) {
    if (insideDestination.length) {
      return null;
    }

    var proposed = {
      displaced: emptyGroups,
      displacedBy: noDisplacedBy,
      at: {
        type: 'REORDER',
        destination: {
          droppableId: destination.descriptor.id,
          index: 0
        }
      }
    };
    var proposedPageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
      impact: proposed,
      draggable: draggable,
      droppable: destination,
      draggables: draggables,
      afterCritical: afterCritical
    });
    var withPlaceholder = isHomeOf(draggable, destination) ? destination : addPlaceholder(destination, draggable, draggables);
    var isVisibleInNewLocation = isTotallyVisibleInNewLocation({
      draggable: draggable,
      destination: withPlaceholder,
      newPageBorderBoxCenter: proposedPageBorderBoxCenter,
      viewport: viewport.frame,
      withDroppableDisplacement: false,
      onlyOnMainAxis: true
    });
    return isVisibleInNewLocation ? proposed : null;
  }

  var isGoingBeforeTarget = Boolean(previousPageBorderBoxCenter[destination.axis.line] <= moveRelativeTo.page.borderBox.center[destination.axis.line]);

  var proposedIndex = function () {
    var relativeTo = moveRelativeTo.descriptor.index;

    if (moveRelativeTo.descriptor.id === draggable.descriptor.id) {
      return relativeTo;
    }

    if (isGoingBeforeTarget) {
      return relativeTo;
    }

    return relativeTo + 1;
  }();

  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    displacedBy: displacedBy,
    last: emptyGroups,
    index: proposedIndex
  });
});

var moveCrossAxis = (function (_ref) {
  var isMovingForward = _ref.isMovingForward,
      previousPageBorderBoxCenter = _ref.previousPageBorderBoxCenter,
      draggable = _ref.draggable,
      isOver = _ref.isOver,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var destination = getBestCrossAxisDroppable({
    isMovingForward: isMovingForward,
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    source: isOver,
    droppables: droppables,
    viewport: viewport
  });

  if (!destination) {
    return null;
  }

  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var moveRelativeTo = getClosestDraggable({
    pageBorderBoxCenter: previousPageBorderBoxCenter,
    viewport: viewport,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  });
  var impact = moveToNewDroppable({
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    destination: destination,
    draggable: draggable,
    draggables: draggables,
    moveRelativeTo: moveRelativeTo,
    insideDestination: insideDestination,
    viewport: viewport,
    afterCritical: afterCritical
  });

  if (!impact) {
    return null;
  }

  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    afterCritical: afterCritical
  });
  var clientSelection = getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
  return {
    clientSelection: clientSelection,
    impact: impact,
    scrollJumpRequest: null
  };
});

var whatIsDraggedOver = (function (impact) {
  var at = impact.at;

  if (!at) {
    return null;
  }

  if (at.type === 'REORDER') {
    return at.destination.droppableId;
  }

  return at.combine.droppableId;
});

var getDroppableOver = function getDroppableOver(impact, droppables) {
  var id = whatIsDraggedOver(impact);
  return id ? droppables[id] : null;
};

var moveInDirection = (function (_ref) {
  var state = _ref.state,
      type = _ref.type;
  var isActuallyOver = getDroppableOver(state.impact, state.dimensions.droppables);
  var isMainAxisMovementAllowed = Boolean(isActuallyOver);
  var home = state.dimensions.droppables[state.critical.droppable.id];
  var isOver = isActuallyOver || home;
  var direction = isOver.axis.direction;
  var isMovingOnMainAxis = direction === 'vertical' && (type === 'MOVE_UP' || type === 'MOVE_DOWN') || direction === 'horizontal' && (type === 'MOVE_LEFT' || type === 'MOVE_RIGHT');

  if (isMovingOnMainAxis && !isMainAxisMovementAllowed) {
    return null;
  }

  var isMovingForward = type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var previousPageBorderBoxCenter = state.current.page.borderBoxCenter;
  var _state$dimensions = state.dimensions,
      draggables = _state$dimensions.draggables,
      droppables = _state$dimensions.droppables;
  return isMovingOnMainAxis ? moveToNextPlace({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    destination: isOver,
    draggables: draggables,
    viewport: state.viewport,
    previousClientSelection: state.current.client.selection,
    previousImpact: state.impact,
    afterCritical: state.afterCritical
  }) : moveCrossAxis({
    isMovingForward: isMovingForward,
    previousPageBorderBoxCenter: previousPageBorderBoxCenter,
    draggable: draggable,
    isOver: isOver,
    draggables: draggables,
    droppables: droppables,
    viewport: state.viewport,
    afterCritical: state.afterCritical
  });
});

function isMovementAllowed(state) {
  return state.phase === 'DRAGGING' || state.phase === 'COLLECTING';
}

function isPositionInFrame(frame) {
  var isWithinVertical = isWithin(frame.top, frame.bottom);
  var isWithinHorizontal = isWithin(frame.left, frame.right);
  return function run(point) {
    return isWithinVertical(point.y) && isWithinHorizontal(point.x);
  };
}

function getHasOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}

function getFurthestAway(_ref) {
  var pageBorderBox = _ref.pageBorderBox,
      draggable = _ref.draggable,
      candidates = _ref.candidates;
  var startCenter = draggable.page.borderBox.center;
  var sorted = candidates.map(function (candidate) {
    var axis = candidate.axis;
    var target = patch(candidate.axis.line, pageBorderBox.center[axis.line], candidate.page.borderBox.center[axis.crossAxisLine]);
    return {
      id: candidate.descriptor.id,
      distance: distance(startCenter, target)
    };
  }).sort(function (a, b) {
    return b.distance - a.distance;
  });
  return sorted[0] ? sorted[0].id : null;
}

function getDroppableOver$1(_ref2) {
  var pageBorderBox = _ref2.pageBorderBox,
      draggable = _ref2.draggable,
      droppables = _ref2.droppables;
  var candidates = toDroppableList(droppables).filter(function (item) {
    if (!item.isEnabled) {
      return false;
    }

    var active = item.subject.active;

    if (!active) {
      return false;
    }

    if (!getHasOverlap(pageBorderBox, active)) {
      return false;
    }

    if (isPositionInFrame(active)(pageBorderBox.center)) {
      return true;
    }

    var axis = item.axis;
    var childCenter = active.center[axis.crossAxisLine];
    var crossAxisStart = pageBorderBox[axis.crossAxisStart];
    var crossAxisEnd = pageBorderBox[axis.crossAxisEnd];
    var isContained = isWithin(active[axis.crossAxisStart], active[axis.crossAxisEnd]);
    var isStartContained = isContained(crossAxisStart);
    var isEndContained = isContained(crossAxisEnd);

    if (!isStartContained && !isEndContained) {
      return true;
    }

    if (isStartContained) {
      return crossAxisStart < childCenter;
    }

    return crossAxisEnd > childCenter;
  });

  if (!candidates.length) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].descriptor.id;
  }

  return getFurthestAway({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    candidates: candidates
  });
}

var offsetRectByPosition = function offsetRectByPosition(rect, point) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(offsetByPosition(rect, point));
};

var withDroppableScroll = (function (droppable, area) {
  var frame = droppable.frame;

  if (!frame) {
    return area;
  }

  return offsetRectByPosition(area, frame.scroll.diff.value);
});

function getIsDisplaced(_ref) {
  var displaced = _ref.displaced,
      id = _ref.id;
  return Boolean(displaced.visible[id] || displaced.invisible[id]);
}

function atIndex(_ref) {
  var draggable = _ref.draggable,
      closest = _ref.closest,
      inHomeList = _ref.inHomeList;

  if (!closest) {
    return null;
  }

  if (!inHomeList) {
    return closest.descriptor.index;
  }

  if (closest.descriptor.index > draggable.descriptor.index) {
    return closest.descriptor.index - 1;
  }

  return closest.descriptor.index;
}

var getReorderImpact = (function (_ref2) {
  var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
      draggable = _ref2.draggable,
      destination = _ref2.destination,
      insideDestination = _ref2.insideDestination,
      last = _ref2.last,
      viewport = _ref2.viewport,
      afterCritical = _ref2.afterCritical;
  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var closest = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childCenter = child.page.borderBox.center[axis.line];
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: last,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd <= childCenter;
      }

      return targetStart < childCenter - displacement;
    }

    if (isDisplaced) {
      return targetEnd <= childCenter + displacement;
    }

    return targetStart < childCenter;
  });
  var newIndex = atIndex({
    draggable: draggable,
    closest: closest,
    inHomeList: isHomeOf(draggable, destination)
  });
  return calculateReorderImpact({
    draggable: draggable,
    insideDestination: insideDestination,
    destination: destination,
    viewport: viewport,
    last: last,
    displacedBy: displacedBy,
    index: newIndex
  });
});

var combineThresholdDivisor = 4;
var getCombineImpact = (function (_ref) {
  var draggable = _ref.draggable,
      targetRect = _ref.pageBorderBoxWithDroppableScroll,
      previousImpact = _ref.previousImpact,
      destination = _ref.destination,
      insideDestination = _ref.insideDestination,
      afterCritical = _ref.afterCritical;

  if (!destination.isCombineEnabled) {
    return null;
  }

  var axis = destination.axis;
  var displacedBy = getDisplacedBy(destination.axis, draggable.displaceBy);
  var displacement = displacedBy.value;
  var targetStart = targetRect[axis.start];
  var targetEnd = targetRect[axis.end];
  var withoutDragging = removeDraggableFromList(draggable, insideDestination);
  var combineWith = find(withoutDragging, function (child) {
    var id = child.descriptor.id;
    var childRect = child.page.borderBox;
    var childSize = childRect[axis.size];
    var threshold = childSize / combineThresholdDivisor;
    var didStartAfterCritical$1 = didStartAfterCritical(id, afterCritical);
    var isDisplaced = getIsDisplaced({
      displaced: previousImpact.displaced,
      id: id
    });

    if (didStartAfterCritical$1) {
      if (isDisplaced) {
        return targetEnd > childRect[axis.start] + threshold && targetEnd < childRect[axis.end] - threshold;
      }

      return targetStart > childRect[axis.start] - displacement + threshold && targetStart < childRect[axis.end] - displacement - threshold;
    }

    if (isDisplaced) {
      return targetEnd > childRect[axis.start] + displacement + threshold && targetEnd < childRect[axis.end] + displacement - threshold;
    }

    return targetStart > childRect[axis.start] + threshold && targetStart < childRect[axis.end] - threshold;
  });

  if (!combineWith) {
    return null;
  }

  var impact = {
    displacedBy: displacedBy,
    displaced: previousImpact.displaced,
    at: {
      type: 'COMBINE',
      combine: {
        draggableId: combineWith.descriptor.id,
        droppableId: destination.descriptor.id
      }
    }
  };
  return impact;
});

var getDragImpact = (function (_ref) {
  var pageOffset = _ref.pageOffset,
      draggable = _ref.draggable,
      draggables = _ref.draggables,
      droppables = _ref.droppables,
      previousImpact = _ref.previousImpact,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBox = offsetRectByPosition(draggable.page.borderBox, pageOffset);
  var destinationId = getDroppableOver$1({
    pageBorderBox: pageBorderBox,
    draggable: draggable,
    droppables: droppables
  });

  if (!destinationId) {
    return noImpact;
  }

  var destination = droppables[destinationId];
  var insideDestination = getDraggablesInsideDroppable(destination.descriptor.id, draggables);
  var pageBorderBoxWithDroppableScroll = withDroppableScroll(destination, pageBorderBox);
  return getCombineImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    previousImpact: previousImpact,
    destination: destination,
    insideDestination: insideDestination,
    afterCritical: afterCritical
  }) || getReorderImpact({
    pageBorderBoxWithDroppableScroll: pageBorderBoxWithDroppableScroll,
    draggable: draggable,
    destination: destination,
    insideDestination: insideDestination,
    last: previousImpact.displaced,
    viewport: viewport,
    afterCritical: afterCritical
  });
});

var patchDroppableMap = (function (droppables, updated) {
  var _extends2;

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, droppables, (_extends2 = {}, _extends2[updated.descriptor.id] = updated, _extends2));
});

var clearUnusedPlaceholder = function clearUnusedPlaceholder(_ref) {
  var previousImpact = _ref.previousImpact,
      impact = _ref.impact,
      droppables = _ref.droppables;
  var last = whatIsDraggedOver(previousImpact);
  var now = whatIsDraggedOver(impact);

  if (!last) {
    return droppables;
  }

  if (last === now) {
    return droppables;
  }

  var lastDroppable = droppables[last];

  if (!lastDroppable.subject.withPlaceholder) {
    return droppables;
  }

  var updated = removePlaceholder(lastDroppable);
  return patchDroppableMap(droppables, updated);
};

var recomputePlaceholders = (function (_ref2) {
  var draggable = _ref2.draggable,
      draggables = _ref2.draggables,
      droppables = _ref2.droppables,
      previousImpact = _ref2.previousImpact,
      impact = _ref2.impact;
  var cleaned = clearUnusedPlaceholder({
    previousImpact: previousImpact,
    impact: impact,
    droppables: droppables
  });
  var isOver = whatIsDraggedOver(impact);

  if (!isOver) {
    return cleaned;
  }

  var droppable = droppables[isOver];

  if (isHomeOf(draggable, droppable)) {
    return cleaned;
  }

  if (droppable.subject.withPlaceholder) {
    return cleaned;
  }

  var patched = addPlaceholder(droppable, draggable, draggables);
  return patchDroppableMap(cleaned, patched);
});

var update = (function (_ref) {
  var state = _ref.state,
      forcedClientSelection = _ref.clientSelection,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport,
      forcedImpact = _ref.impact,
      scrollJumpRequest = _ref.scrollJumpRequest;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var clientSelection = forcedClientSelection || state.current.client.selection;
  var offset = subtract(clientSelection, state.initial.client.selection);
  var client = {
    offset: offset,
    selection: clientSelection,
    borderBoxCenter: add(state.initial.client.borderBoxCenter, offset)
  };
  var page = {
    selection: add(client.selection, viewport.scroll.current),
    borderBoxCenter: add(client.borderBoxCenter, viewport.scroll.current),
    offset: add(client.offset, viewport.scroll.diff.value)
  };
  var current = {
    client: client,
    page: page
  };

  if (state.phase === 'COLLECTING') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      dimensions: dimensions,
      viewport: viewport,
      current: current
    });
  }

  var draggable = dimensions.draggables[state.critical.draggable.id];
  var newImpact = forcedImpact || getDragImpact({
    pageOffset: page.offset,
    draggable: draggable,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: state.impact,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  var withUpdatedPlaceholders = recomputePlaceholders({
    draggable: draggable,
    impact: newImpact,
    previousImpact: state.impact,
    draggables: dimensions.draggables,
    droppables: dimensions.droppables
  });

  var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
    current: current,
    dimensions: {
      draggables: dimensions.draggables,
      droppables: withUpdatedPlaceholders
    },
    impact: newImpact,
    viewport: viewport,
    scrollJumpRequest: scrollJumpRequest || null,
    forceShouldAnimate: scrollJumpRequest ? false : null
  });

  return result;
});

function getDraggables$1(ids, draggables) {
  return ids.map(function (id) {
    return draggables[id];
  });
}

var recompute = (function (_ref) {
  var impact = _ref.impact,
      viewport = _ref.viewport,
      draggables = _ref.draggables,
      destination = _ref.destination,
      forceShouldAnimate = _ref.forceShouldAnimate;
  var last = impact.displaced;
  var afterDragging = getDraggables$1(last.all, draggables);
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: destination,
    displacedBy: impact.displacedBy,
    viewport: viewport.frame,
    forceShouldAnimate: forceShouldAnimate,
    last: last
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, impact, {
    displaced: displaced
  });
});

var getClientBorderBoxCenter = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      droppable = _ref.droppable,
      draggables = _ref.draggables,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    droppable: droppable,
    afterCritical: afterCritical
  });
  return getClientFromPageBorderBoxCenter({
    pageBorderBoxCenter: pageBorderBoxCenter,
    draggable: draggable,
    viewport: viewport
  });
});

var refreshSnap = (function (_ref) {
  var state = _ref.state,
      forcedDimensions = _ref.dimensions,
      forcedViewport = _ref.viewport;
  !(state.movementMode === 'SNAP') ?  true ? invariant(false) : 0 : void 0;
  var needsVisibilityCheck = state.impact;
  var viewport = forcedViewport || state.viewport;
  var dimensions = forcedDimensions || state.dimensions;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var draggable = draggables[state.critical.draggable.id];
  var isOver = whatIsDraggedOver(needsVisibilityCheck);
  !isOver ?  true ? invariant(false, 'Must be over a destination in SNAP movement mode') : 0 : void 0;
  var destination = droppables[isOver];
  var impact = recompute({
    impact: needsVisibilityCheck,
    viewport: viewport,
    destination: destination,
    draggables: draggables
  });
  var clientSelection = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    droppable: destination,
    draggables: draggables,
    viewport: viewport,
    afterCritical: state.afterCritical
  });
  return update({
    impact: impact,
    clientSelection: clientSelection,
    state: state,
    dimensions: dimensions,
    viewport: viewport
  });
});

var getHomeLocation = (function (descriptor) {
  return {
    index: descriptor.index,
    droppableId: descriptor.droppableId
  };
});

var getLiftEffect = (function (_ref) {
  var draggable = _ref.draggable,
      home = _ref.home,
      draggables = _ref.draggables,
      viewport = _ref.viewport;
  var displacedBy = getDisplacedBy(home.axis, draggable.displaceBy);
  var insideHome = getDraggablesInsideDroppable(home.descriptor.id, draggables);
  var rawIndex = insideHome.indexOf(draggable);
  !(rawIndex !== -1) ?  true ? invariant(false, 'Expected draggable to be inside home list') : 0 : void 0;
  var afterDragging = insideHome.slice(rawIndex + 1);
  var effected = afterDragging.reduce(function (previous, item) {
    previous[item.descriptor.id] = true;
    return previous;
  }, {});
  var afterCritical = {
    inVirtualList: home.descriptor.mode === 'virtual',
    displacedBy: displacedBy,
    effected: effected
  };
  var displaced = getDisplacementGroups({
    afterDragging: afterDragging,
    destination: home,
    displacedBy: displacedBy,
    last: null,
    viewport: viewport.frame,
    forceShouldAnimate: false
  });
  var impact = {
    displaced: displaced,
    displacedBy: displacedBy,
    at: {
      type: 'REORDER',
      destination: getHomeLocation(draggable.descriptor)
    }
  };
  return {
    impact: impact,
    afterCritical: afterCritical
  };
});

var patchDimensionMap = (function (dimensions, updated) {
  return {
    draggables: dimensions.draggables,
    droppables: patchDroppableMap(dimensions.droppables, updated)
  };
});

var start = function start(key) {
  if (true) {
    {
      return;
    }
  }
};
var finish = function finish(key) {
  if (true) {
    {
      return;
    }
  }
};

var offsetDraggable = (function (_ref) {
  var draggable = _ref.draggable,
      offset$1 = _ref.offset,
      initialWindowScroll = _ref.initialWindowScroll;
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset)(draggable.client, offset$1);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, initialWindowScroll);

  var moved = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable, {
    placeholder: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, draggable.placeholder, {
      client: client
    }),
    client: client,
    page: page
  });

  return moved;
});

var getFrame = (function (droppable) {
  var frame = droppable.frame;
  !frame ?  true ? invariant(false, 'Expected Droppable to have a frame') : 0 : void 0;
  return frame;
});

var adjustAdditionsForScrollChanges = (function (_ref) {
  var additions = _ref.additions,
      updatedDroppables = _ref.updatedDroppables,
      viewport = _ref.viewport;
  var windowScrollChange = viewport.scroll.diff.value;
  return additions.map(function (draggable) {
    var droppableId = draggable.descriptor.droppableId;
    var modified = updatedDroppables[droppableId];
    var frame = getFrame(modified);
    var droppableScrollChange = frame.scroll.diff.value;
    var totalChange = add(windowScrollChange, droppableScrollChange);
    var moved = offsetDraggable({
      draggable: draggable,
      offset: totalChange,
      initialWindowScroll: viewport.scroll.initial
    });
    return moved;
  });
});

var publishWhileDraggingInVirtual = (function (_ref) {
  var state = _ref.state,
      published = _ref.published;
  start();
  var withScrollChange = published.modified.map(function (update) {
    var existing = state.dimensions.droppables[update.droppableId];
    var scrolled = scrollDroppable(existing, update.scroll);
    return scrolled;
  });

  var droppables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.droppables, {}, toDroppableMap(withScrollChange));

  var updatedAdditions = toDraggableMap(adjustAdditionsForScrollChanges({
    additions: published.additions,
    updatedDroppables: droppables,
    viewport: state.viewport
  }));

  var draggables = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.dimensions.draggables, {}, updatedAdditions);

  published.removals.forEach(function (id) {
    delete draggables[id];
  });
  var dimensions = {
    droppables: droppables,
    draggables: draggables
  };
  var wasOverId = whatIsDraggedOver(state.impact);
  var wasOver = wasOverId ? dimensions.droppables[wasOverId] : null;
  var draggable = dimensions.draggables[state.critical.draggable.id];
  var home = dimensions.droppables[state.critical.droppable.id];

  var _getLiftEffect = getLiftEffect({
    draggable: draggable,
    home: home,
    draggables: draggables,
    viewport: state.viewport
  }),
      onLiftImpact = _getLiftEffect.impact,
      afterCritical = _getLiftEffect.afterCritical;

  var previousImpact = wasOver && wasOver.isCombineEnabled ? state.impact : onLiftImpact;
  var impact = getDragImpact({
    pageOffset: state.current.page.offset,
    draggable: dimensions.draggables[state.critical.draggable.id],
    draggables: dimensions.draggables,
    droppables: dimensions.droppables,
    previousImpact: previousImpact,
    viewport: state.viewport,
    afterCritical: afterCritical
  });
  finish();

  var draggingState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DRAGGING'
  }, state, {
    phase: 'DRAGGING',
    impact: impact,
    onLiftImpact: onLiftImpact,
    dimensions: dimensions,
    afterCritical: afterCritical,
    forceShouldAnimate: false
  });

  if (state.phase === 'COLLECTING') {
    return draggingState;
  }

  var dropPending = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    phase: 'DROP_PENDING'
  }, draggingState, {
    phase: 'DROP_PENDING',
    reason: state.reason,
    isWaiting: false
  });

  return dropPending;
});

var isSnapping = function isSnapping(state) {
  return state.movementMode === 'SNAP';
};

var postDroppableChange = function postDroppableChange(state, updated, isEnabledChanging) {
  var dimensions = patchDimensionMap(state.dimensions, updated);

  if (!isSnapping(state) || isEnabledChanging) {
    return update({
      state: state,
      dimensions: dimensions
    });
  }

  return refreshSnap({
    state: state,
    dimensions: dimensions
  });
};

function removeScrollJumpRequest(state) {
  if (state.isDragging && state.movementMode === 'SNAP') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      scrollJumpRequest: null
    });
  }

  return state;
}

var idle = {
  phase: 'IDLE',
  completed: null,
  shouldFlush: false
};
var reducer = (function (state, action) {
  if (state === void 0) {
    state = idle;
  }

  if (action.type === 'FLUSH') {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idle, {
      shouldFlush: true
    });
  }

  if (action.type === 'INITIAL_PUBLISH') {
    !(state.phase === 'IDLE') ?  true ? invariant(false, 'INITIAL_PUBLISH must come after a IDLE phase') : 0 : void 0;
    var _action$payload = action.payload,
        critical = _action$payload.critical,
        clientSelection = _action$payload.clientSelection,
        viewport = _action$payload.viewport,
        dimensions = _action$payload.dimensions,
        movementMode = _action$payload.movementMode;
    var draggable = dimensions.draggables[critical.draggable.id];
    var home = dimensions.droppables[critical.droppable.id];
    var client = {
      selection: clientSelection,
      borderBoxCenter: draggable.client.borderBox.center,
      offset: origin
    };
    var initial = {
      client: client,
      page: {
        selection: add(client.selection, viewport.scroll.initial),
        borderBoxCenter: add(client.selection, viewport.scroll.initial),
        offset: add(client.selection, viewport.scroll.diff.value)
      }
    };
    var isWindowScrollAllowed = toDroppableList(dimensions.droppables).every(function (item) {
      return !item.isFixedOnPage;
    });

    var _getLiftEffect = getLiftEffect({
      draggable: draggable,
      home: home,
      draggables: dimensions.draggables,
      viewport: viewport
    }),
        impact = _getLiftEffect.impact,
        afterCritical = _getLiftEffect.afterCritical;

    var result = {
      phase: 'DRAGGING',
      isDragging: true,
      critical: critical,
      movementMode: movementMode,
      dimensions: dimensions,
      initial: initial,
      current: initial,
      isWindowScrollAllowed: isWindowScrollAllowed,
      impact: impact,
      afterCritical: afterCritical,
      onLiftImpact: impact,
      viewport: viewport,
      scrollJumpRequest: null,
      forceShouldAnimate: null
    };
    return result;
  }

  if (action.type === 'COLLECTION_STARTING') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, "Collection cannot start from phase " + state.phase) : 0 : void 0;

    var _result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'COLLECTING'
    }, state, {
      phase: 'COLLECTING'
    });

    return _result;
  }

  if (action.type === 'PUBLISH_WHILE_DRAGGING') {
    !(state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Unexpected " + action.type + " received in phase " + state.phase) : 0 : void 0;
    return publishWhileDraggingInVirtual({
      state: state,
      published: action.payload
    });
  }

  if (action.type === 'MOVE') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _clientSelection = action.payload.client;

    if (isEqual(_clientSelection, state.current.client.selection)) {
      return state;
    }

    return update({
      state: state,
      clientSelection: _clientSelection,
      impact: isSnapping(state) ? state.impact : null
    });
  }

  if (action.type === 'UPDATE_DROPPABLE_SCROLL') {
    if (state.phase === 'DROP_PENDING') {
      return removeScrollJumpRequest(state);
    }

    if (state.phase === 'COLLECTING') {
      return removeScrollJumpRequest(state);
    }

    !isMovementAllowed(state) ?  true ? invariant(false, action.type + " not permitted in phase " + state.phase) : 0 : void 0;
    var _action$payload2 = action.payload,
        id = _action$payload2.id,
        newScroll = _action$payload2.newScroll;
    var target = state.dimensions.droppables[id];

    if (!target) {
      return state;
    }

    var scrolled = scrollDroppable(target, newScroll);
    return postDroppableChange(state, scrolled, false);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload3 = action.payload,
        _id = _action$payload3.id,
        isEnabled = _action$payload3.isEnabled;
    var _target = state.dimensions.droppables[_id];
    !_target ?  true ? invariant(false, "Cannot find Droppable[id: " + _id + "] to toggle its enabled state") : 0 : void 0;
    !(_target.isEnabled !== isEnabled) ?  true ? invariant(false, "Trying to set droppable isEnabled to " + String(isEnabled) + "\n      but it is already " + String(_target.isEnabled)) : 0 : void 0;

    var updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target, {
      isEnabled: isEnabled
    });

    return postDroppableChange(state, updated, true);
  }

  if (action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED') {
    if (state.phase === 'DROP_PENDING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Attempting to move in an unsupported phase " + state.phase) : 0 : void 0;
    var _action$payload4 = action.payload,
        _id2 = _action$payload4.id,
        isCombineEnabled = _action$payload4.isCombineEnabled;
    var _target2 = state.dimensions.droppables[_id2];
    !_target2 ?  true ? invariant(false, "Cannot find Droppable[id: " + _id2 + "] to toggle its isCombineEnabled state") : 0 : void 0;
    !(_target2.isCombineEnabled !== isCombineEnabled) ?  true ? invariant(false, "Trying to set droppable isCombineEnabled to " + String(isCombineEnabled) + "\n      but it is already " + String(_target2.isCombineEnabled)) : 0 : void 0;

    var _updated = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _target2, {
      isCombineEnabled: isCombineEnabled
    });

    return postDroppableChange(state, _updated, true);
  }

  if (action.type === 'MOVE_BY_WINDOW_SCROLL') {
    if (state.phase === 'DROP_PENDING' || state.phase === 'DROP_ANIMATING') {
      return state;
    }

    !isMovementAllowed(state) ?  true ? invariant(false, "Cannot move by window in phase " + state.phase) : 0 : void 0;
    !state.isWindowScrollAllowed ?  true ? invariant(false, 'Window scrolling is currently not supported for fixed lists') : 0 : void 0;
    var _newScroll = action.payload.newScroll;

    if (isEqual(state.viewport.scroll.current, _newScroll)) {
      return removeScrollJumpRequest(state);
    }

    var _viewport = scrollViewport(state.viewport, _newScroll);

    if (isSnapping(state)) {
      return refreshSnap({
        state: state,
        viewport: _viewport
      });
    }

    return update({
      state: state,
      viewport: _viewport
    });
  }

  if (action.type === 'UPDATE_VIEWPORT_MAX_SCROLL') {
    if (!isMovementAllowed(state)) {
      return state;
    }

    var maxScroll = action.payload.maxScroll;

    if (isEqual(maxScroll, state.viewport.scroll.max)) {
      return state;
    }

    var withMaxScroll = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport, {
      scroll: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state.viewport.scroll, {
        max: maxScroll
      })
    });

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DRAGGING'
    }, state, {
      viewport: withMaxScroll
    });
  }

  if (action.type === 'MOVE_UP' || action.type === 'MOVE_DOWN' || action.type === 'MOVE_LEFT' || action.type === 'MOVE_RIGHT') {
    if (state.phase === 'COLLECTING' || state.phase === 'DROP_PENDING') {
      return state;
    }

    !(state.phase === 'DRAGGING') ?  true ? invariant(false, action.type + " received while not in DRAGGING phase") : 0 : void 0;

    var _result2 = moveInDirection({
      state: state,
      type: action.type
    });

    if (!_result2) {
      return state;
    }

    return update({
      state: state,
      impact: _result2.impact,
      clientSelection: _result2.clientSelection,
      scrollJumpRequest: _result2.scrollJumpRequest
    });
  }

  if (action.type === 'DROP_PENDING') {
    var reason = action.payload.reason;
    !(state.phase === 'COLLECTING') ?  true ? invariant(false, 'Can only move into the DROP_PENDING phase from the COLLECTING phase') : 0 : void 0;

    var newState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      phase: 'DROP_PENDING'
    }, state, {
      phase: 'DROP_PENDING',
      isWaiting: true,
      reason: reason
    });

    return newState;
  }

  if (action.type === 'DROP_ANIMATE') {
    var _action$payload5 = action.payload,
        completed = _action$payload5.completed,
        dropDuration = _action$payload5.dropDuration,
        newHomeClientOffset = _action$payload5.newHomeClientOffset;
    !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot animate drop from phase " + state.phase) : 0 : void 0;
    var _result3 = {
      phase: 'DROP_ANIMATING',
      completed: completed,
      dropDuration: dropDuration,
      newHomeClientOffset: newHomeClientOffset,
      dimensions: state.dimensions
    };
    return _result3;
  }

  if (action.type === 'DROP_COMPLETE') {
    var _completed = action.payload.completed;
    return {
      phase: 'IDLE',
      completed: _completed,
      shouldFlush: false
    };
  }

  return state;
});

var beforeInitialCapture = function beforeInitialCapture(args) {
  return {
    type: 'BEFORE_INITIAL_CAPTURE',
    payload: args
  };
};
var lift = function lift(args) {
  return {
    type: 'LIFT',
    payload: args
  };
};
var initialPublish = function initialPublish(args) {
  return {
    type: 'INITIAL_PUBLISH',
    payload: args
  };
};
var publishWhileDragging = function publishWhileDragging(args) {
  return {
    type: 'PUBLISH_WHILE_DRAGGING',
    payload: args
  };
};
var collectionStarting = function collectionStarting() {
  return {
    type: 'COLLECTION_STARTING',
    payload: null
  };
};
var updateDroppableScroll = function updateDroppableScroll(args) {
  return {
    type: 'UPDATE_DROPPABLE_SCROLL',
    payload: args
  };
};
var updateDroppableIsEnabled = function updateDroppableIsEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_ENABLED',
    payload: args
  };
};
var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(args) {
  return {
    type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
    payload: args
  };
};
var move = function move(args) {
  return {
    type: 'MOVE',
    payload: args
  };
};
var moveByWindowScroll = function moveByWindowScroll(args) {
  return {
    type: 'MOVE_BY_WINDOW_SCROLL',
    payload: args
  };
};
var updateViewportMaxScroll = function updateViewportMaxScroll(args) {
  return {
    type: 'UPDATE_VIEWPORT_MAX_SCROLL',
    payload: args
  };
};
var moveUp = function moveUp() {
  return {
    type: 'MOVE_UP',
    payload: null
  };
};
var moveDown = function moveDown() {
  return {
    type: 'MOVE_DOWN',
    payload: null
  };
};
var moveRight = function moveRight() {
  return {
    type: 'MOVE_RIGHT',
    payload: null
  };
};
var moveLeft = function moveLeft() {
  return {
    type: 'MOVE_LEFT',
    payload: null
  };
};
var flush = function flush() {
  return {
    type: 'FLUSH',
    payload: null
  };
};
var animateDrop = function animateDrop(args) {
  return {
    type: 'DROP_ANIMATE',
    payload: args
  };
};
var completeDrop = function completeDrop(args) {
  return {
    type: 'DROP_COMPLETE',
    payload: args
  };
};
var drop = function drop(args) {
  return {
    type: 'DROP',
    payload: args
  };
};
var dropPending = function dropPending(args) {
  return {
    type: 'DROP_PENDING',
    payload: args
  };
};
var dropAnimationFinished = function dropAnimationFinished() {
  return {
    type: 'DROP_ANIMATION_FINISHED',
    payload: null
  };
};

function checkIndexes(insideDestination) {
  if (insideDestination.length <= 1) {
    return;
  }

  var indexes = insideDestination.map(function (d) {
    return d.descriptor.index;
  });
  var errors = {};

  for (var i = 1; i < indexes.length; i++) {
    var current = indexes[i];
    var previous = indexes[i - 1];

    if (current !== previous + 1) {
      errors[current] = true;
    }
  }

  if (!Object.keys(errors).length) {
    return;
  }

  var formatted = indexes.map(function (index) {
    var hasError = Boolean(errors[index]);
    return hasError ? "[\uD83D\uDD25" + index + "]" : "" + index;
  }).join(', ');
   true ? warning("\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    " + formatted + "\n  ") : 0;
}

function validateDimensions(critical, dimensions) {
  if (true) {
    var insideDestination = getDraggablesInsideDroppable(critical.droppable.id, dimensions.draggables);
    checkIndexes(insideDestination);
  }
}

var lift$1 = (function (marshal) {
  return function (_ref) {
    var getState = _ref.getState,
        dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type !== 'LIFT') {
          next(action);
          return;
        }

        var _action$payload = action.payload,
            id = _action$payload.id,
            clientSelection = _action$payload.clientSelection,
            movementMode = _action$payload.movementMode;
        var initial = getState();

        if (initial.phase === 'DROP_ANIMATING') {
          dispatch(completeDrop({
            completed: initial.completed
          }));
        }

        !(getState().phase === 'IDLE') ?  true ? invariant(false, 'Unexpected phase to start a drag') : 0 : void 0;
        dispatch(flush());
        dispatch(beforeInitialCapture({
          draggableId: id,
          movementMode: movementMode
        }));
        var scrollOptions = {
          shouldPublishImmediately: movementMode === 'SNAP'
        };
        var request = {
          draggableId: id,
          scrollOptions: scrollOptions
        };

        var _marshal$startPublish = marshal.startPublishing(request),
            critical = _marshal$startPublish.critical,
            dimensions = _marshal$startPublish.dimensions,
            viewport = _marshal$startPublish.viewport;

        validateDimensions(critical, dimensions);
        dispatch(initialPublish({
          critical: critical,
          dimensions: dimensions,
          clientSelection: clientSelection,
          movementMode: movementMode,
          viewport: viewport
        }));
      };
    };
  };
});

var style = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          marshal.dragging();
        }

        if (action.type === 'DROP_ANIMATE') {
          marshal.dropping(action.payload.completed.result.reason);
        }

        if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE') {
          marshal.resting();
        }

        next(action);
      };
    };
  };
});

var curves = {
  outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
  drop: 'cubic-bezier(.2,1,.1,1)'
};
var combine = {
  opacity: {
    drop: 0,
    combining: 0.7
  },
  scale: {
    drop: 0.75
  }
};
var timings = {
  outOfTheWay: 0.2,
  minDropTime: 0.33,
  maxDropTime: 0.55
};
var outOfTheWayTiming = timings.outOfTheWay + "s " + curves.outOfTheWay;
var transitions = {
  fluid: "opacity " + outOfTheWayTiming,
  snap: "transform " + outOfTheWayTiming + ", opacity " + outOfTheWayTiming,
  drop: function drop(duration) {
    var timing = duration + "s " + curves.drop;
    return "transform " + timing + ", opacity " + timing;
  },
  outOfTheWay: "transform " + outOfTheWayTiming,
  placeholder: "height " + outOfTheWayTiming + ", width " + outOfTheWayTiming + ", margin " + outOfTheWayTiming
};

var moveTo = function moveTo(offset) {
  return isEqual(offset, origin) ? null : "translate(" + offset.x + "px, " + offset.y + "px)";
};

var transforms = {
  moveTo: moveTo,
  drop: function drop(offset, isCombining) {
    var translate = moveTo(offset);

    if (!translate) {
      return null;
    }

    if (!isCombining) {
      return translate;
    }

    return translate + " scale(" + combine.scale.drop + ")";
  }
};

var minDropTime = timings.minDropTime,
    maxDropTime = timings.maxDropTime;
var dropTimeRange = maxDropTime - minDropTime;
var maxDropTimeAtDistance = 1500;
var cancelDropModifier = 0.6;
var getDropDuration = (function (_ref) {
  var current = _ref.current,
      destination = _ref.destination,
      reason = _ref.reason;
  var distance$1 = distance(current, destination);

  if (distance$1 <= 0) {
    return minDropTime;
  }

  if (distance$1 >= maxDropTimeAtDistance) {
    return maxDropTime;
  }

  var percentage = distance$1 / maxDropTimeAtDistance;
  var duration = minDropTime + dropTimeRange * percentage;
  var withDuration = reason === 'CANCEL' ? duration * cancelDropModifier : duration;
  return Number(withDuration.toFixed(2));
});

var getNewHomeClientOffset = (function (_ref) {
  var impact = _ref.impact,
      draggable = _ref.draggable,
      dimensions = _ref.dimensions,
      viewport = _ref.viewport,
      afterCritical = _ref.afterCritical;
  var draggables = dimensions.draggables,
      droppables = dimensions.droppables;
  var droppableId = whatIsDraggedOver(impact);
  var destination = droppableId ? droppables[droppableId] : null;
  var home = droppables[draggable.descriptor.droppableId];
  var newClientCenter = getClientBorderBoxCenter({
    impact: impact,
    draggable: draggable,
    draggables: draggables,
    afterCritical: afterCritical,
    droppable: destination || home,
    viewport: viewport
  });
  var offset = subtract(newClientCenter, draggable.client.borderBox.center);
  return offset;
});

var getDropImpact = (function (_ref) {
  var draggables = _ref.draggables,
      reason = _ref.reason,
      lastImpact = _ref.lastImpact,
      home = _ref.home,
      viewport = _ref.viewport,
      onLiftImpact = _ref.onLiftImpact;

  if (!lastImpact.at || reason !== 'DROP') {
    var recomputedHomeImpact = recompute({
      draggables: draggables,
      impact: onLiftImpact,
      destination: home,
      viewport: viewport,
      forceShouldAnimate: true
    });
    return {
      impact: recomputedHomeImpact,
      didDropInsideDroppable: false
    };
  }

  if (lastImpact.at.type === 'REORDER') {
    return {
      impact: lastImpact,
      didDropInsideDroppable: true
    };
  }

  var withoutMovement = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, lastImpact, {
    displaced: emptyGroups
  });

  return {
    impact: withoutMovement,
    didDropInsideDroppable: true
  };
});

var drop$1 = (function (_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP') {
        next(action);
        return;
      }

      var state = getState();
      var reason = action.payload.reason;

      if (state.phase === 'COLLECTING') {
        dispatch(dropPending({
          reason: reason
        }));
        return;
      }

      if (state.phase === 'IDLE') {
        return;
      }

      var isWaitingForDrop = state.phase === 'DROP_PENDING' && state.isWaiting;
      !!isWaitingForDrop ?  true ? invariant(false, 'A DROP action occurred while DROP_PENDING and still waiting') : 0 : void 0;
      !(state.phase === 'DRAGGING' || state.phase === 'DROP_PENDING') ?  true ? invariant(false, "Cannot drop in phase: " + state.phase) : 0 : void 0;
      var critical = state.critical;
      var dimensions = state.dimensions;
      var draggable = dimensions.draggables[state.critical.draggable.id];

      var _getDropImpact = getDropImpact({
        reason: reason,
        lastImpact: state.impact,
        afterCritical: state.afterCritical,
        onLiftImpact: state.onLiftImpact,
        home: state.dimensions.droppables[state.critical.droppable.id],
        viewport: state.viewport,
        draggables: state.dimensions.draggables
      }),
          impact = _getDropImpact.impact,
          didDropInsideDroppable = _getDropImpact.didDropInsideDroppable;

      var destination = didDropInsideDroppable ? tryGetDestination(impact) : null;
      var combine = didDropInsideDroppable ? tryGetCombine(impact) : null;
      var source = {
        index: critical.draggable.index,
        droppableId: critical.droppable.id
      };
      var result = {
        draggableId: draggable.descriptor.id,
        type: draggable.descriptor.type,
        source: source,
        reason: reason,
        mode: state.movementMode,
        destination: destination,
        combine: combine
      };
      var newHomeClientOffset = getNewHomeClientOffset({
        impact: impact,
        draggable: draggable,
        dimensions: dimensions,
        viewport: state.viewport,
        afterCritical: state.afterCritical
      });
      var completed = {
        critical: state.critical,
        afterCritical: state.afterCritical,
        result: result,
        impact: impact
      };
      var isAnimationRequired = !isEqual(state.current.client.offset, newHomeClientOffset) || Boolean(result.combine);

      if (!isAnimationRequired) {
        dispatch(completeDrop({
          completed: completed
        }));
        return;
      }

      var dropDuration = getDropDuration({
        current: state.current.client.offset,
        destination: newHomeClientOffset,
        reason: reason
      });
      var args = {
        newHomeClientOffset: newHomeClientOffset,
        dropDuration: dropDuration,
        completed: completed
      };
      dispatch(animateDrop(args));
    };
  };
});

var getWindowScroll = (function () {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
});

function getWindowScrollBinding(update) {
  return {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn(event) {
      if (event.target !== window && event.target !== window.document) {
        return;
      }

      update();
    }
  };
}

function getScrollListener(_ref) {
  var onWindowScroll = _ref.onWindowScroll;

  function updateScroll() {
    onWindowScroll(getWindowScroll());
  }

  var scheduled = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  var binding = getWindowScrollBinding(scheduled);
  var unbind = noop;

  function isActive() {
    return unbind !== noop;
  }

  function start() {
    !!isActive() ?  true ? invariant(false, 'Cannot start scroll listener when already active') : 0 : void 0;
    unbind = bindEvents(window, [binding]);
  }

  function stop() {
    !isActive() ?  true ? invariant(false, 'Cannot stop scroll listener when not active') : 0 : void 0;
    scheduled.cancel();
    unbind();
    unbind = noop;
  }

  return {
    start: start,
    stop: stop,
    isActive: isActive
  };
}

var shouldEnd = function shouldEnd(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var scrollListener = (function (store) {
  var listener = getScrollListener({
    onWindowScroll: function onWindowScroll(newScroll) {
      store.dispatch(moveByWindowScroll({
        newScroll: newScroll
      }));
    }
  });
  return function (next) {
    return function (action) {
      if (!listener.isActive() && action.type === 'INITIAL_PUBLISH') {
        listener.start();
      }

      if (listener.isActive() && shouldEnd(action)) {
        listener.stop();
      }

      next(action);
    };
  };
});

var getExpiringAnnounce = (function (announce) {
  var wasCalled = false;
  var isExpired = false;
  var timeoutId = setTimeout(function () {
    isExpired = true;
  });

  var result = function result(message) {
    if (wasCalled) {
       true ? warning('Announcement already made. Not making a second announcement') : 0;
      return;
    }

    if (isExpired) {
       true ? warning("\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      ") : 0;
      return;
    }

    wasCalled = true;
    announce(message);
    clearTimeout(timeoutId);
  };

  result.wasCalled = function () {
    return wasCalled;
  };

  return result;
});

var getAsyncMarshal = (function () {
  var entries = [];

  var execute = function execute(timerId) {
    var index = findIndex(entries, function (item) {
      return item.timerId === timerId;
    });
    !(index !== -1) ?  true ? invariant(false, 'Could not find timer') : 0 : void 0;

    var _entries$splice = entries.splice(index, 1),
        entry = _entries$splice[0];

    entry.callback();
  };

  var add = function add(fn) {
    var timerId = setTimeout(function () {
      return execute(timerId);
    });
    var entry = {
      timerId: timerId,
      callback: fn
    };
    entries.push(entry);
  };

  var flush = function flush() {
    if (!entries.length) {
      return;
    }

    var shallow = [].concat(entries);
    entries.length = 0;
    shallow.forEach(function (entry) {
      clearTimeout(entry.timerId);
      entry.callback();
    });
  };

  return {
    add: add,
    flush: flush
  };
});

var areLocationsEqual = function areLocationsEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.droppableId === second.droppableId && first.index === second.index;
};
var isCombineEqual = function isCombineEqual(first, second) {
  if (first == null && second == null) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  return first.draggableId === second.draggableId && first.droppableId === second.droppableId;
};
var isCriticalEqual = function isCriticalEqual(first, second) {
  if (first === second) {
    return true;
  }

  var isDraggableEqual = first.draggable.id === second.draggable.id && first.draggable.droppableId === second.draggable.droppableId && first.draggable.type === second.draggable.type && first.draggable.index === second.draggable.index;
  var isDroppableEqual = first.droppable.id === second.droppable.id && first.droppable.type === second.droppable.type;
  return isDraggableEqual && isDroppableEqual;
};

var withTimings = function withTimings(key, fn) {
  start();
  fn();
  finish();
};

var getDragStart = function getDragStart(critical, mode) {
  return {
    draggableId: critical.draggable.id,
    type: critical.droppable.type,
    source: {
      droppableId: critical.droppable.id,
      index: critical.draggable.index
    },
    mode: mode
  };
};

var execute = function execute(responder, data, announce, getDefaultMessage) {
  if (!responder) {
    announce(getDefaultMessage(data));
    return;
  }

  var willExpire = getExpiringAnnounce(announce);
  var provided = {
    announce: willExpire
  };
  responder(data, provided);

  if (!willExpire.wasCalled()) {
    announce(getDefaultMessage(data));
  }
};

var getPublisher = (function (getResponders, announce) {
  var asyncMarshal = getAsyncMarshal();
  var dragging = null;

  var beforeCapture = function beforeCapture(draggableId, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeCapture as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeCapture', function () {
      var fn = getResponders().onBeforeCapture;

      if (fn) {
        var before = {
          draggableId: draggableId,
          mode: mode
        };
        fn(before);
      }
    });
  };

  var beforeStart = function beforeStart(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    withTimings('onBeforeDragStart', function () {
      var fn = getResponders().onBeforeDragStart;

      if (fn) {
        fn(getDragStart(critical, mode));
      }
    });
  };

  var start = function start(critical, mode) {
    !!dragging ?  true ? invariant(false, 'Cannot fire onBeforeDragStart as a drag start has already been published') : 0 : void 0;
    var data = getDragStart(critical, mode);
    dragging = {
      mode: mode,
      lastCritical: critical,
      lastLocation: data.source,
      lastCombine: null
    };
    asyncMarshal.add(function () {
      withTimings('onDragStart', function () {
        return execute(getResponders().onDragStart, data, announce, preset.onDragStart);
      });
    });
  };

  var update = function update(critical, impact) {
    var location = tryGetDestination(impact);
    var combine = tryGetCombine(impact);
    !dragging ?  true ? invariant(false, 'Cannot fire onDragMove when onDragStart has not been called') : 0 : void 0;
    var hasCriticalChanged = !isCriticalEqual(critical, dragging.lastCritical);

    if (hasCriticalChanged) {
      dragging.lastCritical = critical;
    }

    var hasLocationChanged = !areLocationsEqual(dragging.lastLocation, location);

    if (hasLocationChanged) {
      dragging.lastLocation = location;
    }

    var hasGroupingChanged = !isCombineEqual(dragging.lastCombine, combine);

    if (hasGroupingChanged) {
      dragging.lastCombine = combine;
    }

    if (!hasCriticalChanged && !hasLocationChanged && !hasGroupingChanged) {
      return;
    }

    var data = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(critical, dragging.mode), {
      combine: combine,
      destination: location
    });

    asyncMarshal.add(function () {
      withTimings('onDragUpdate', function () {
        return execute(getResponders().onDragUpdate, data, announce, preset.onDragUpdate);
      });
    });
  };

  var flush = function flush() {
    !dragging ?  true ? invariant(false, 'Can only flush responders while dragging') : 0 : void 0;
    asyncMarshal.flush();
  };

  var drop = function drop(result) {
    !dragging ?  true ? invariant(false, 'Cannot fire onDragEnd when there is no matching onDragStart') : 0 : void 0;
    dragging = null;
    withTimings('onDragEnd', function () {
      return execute(getResponders().onDragEnd, result, announce, preset.onDragEnd);
    });
  };

  var abort = function abort() {
    if (!dragging) {
      return;
    }

    var result = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getDragStart(dragging.lastCritical, dragging.mode), {
      combine: null,
      destination: null,
      reason: 'CANCEL'
    });

    drop(result);
  };

  return {
    beforeCapture: beforeCapture,
    beforeStart: beforeStart,
    start: start,
    update: update,
    flush: flush,
    drop: drop,
    abort: abort
  };
});

var responders = (function (getResponders, announce) {
  var publisher = getPublisher(getResponders, announce);
  return function (store) {
    return function (next) {
      return function (action) {
        if (action.type === 'BEFORE_INITIAL_CAPTURE') {
          publisher.beforeCapture(action.payload.draggableId, action.payload.movementMode);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          var critical = action.payload.critical;
          publisher.beforeStart(critical, action.payload.movementMode);
          next(action);
          publisher.start(critical, action.payload.movementMode);
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          var result = action.payload.completed.result;
          publisher.flush();
          next(action);
          publisher.drop(result);
          return;
        }

        next(action);

        if (action.type === 'FLUSH') {
          publisher.abort();
          return;
        }

        var state = store.getState();

        if (state.phase === 'DRAGGING') {
          publisher.update(state.critical, state.impact);
        }
      };
    };
  };
});

var dropAnimationFinish = (function (store) {
  return function (next) {
    return function (action) {
      if (action.type !== 'DROP_ANIMATION_FINISHED') {
        next(action);
        return;
      }

      var state = store.getState();
      !(state.phase === 'DROP_ANIMATING') ?  true ? invariant(false, 'Cannot finish a drop animating when no drop is occurring') : 0 : void 0;
      store.dispatch(completeDrop({
        completed: state.completed
      }));
    };
  };
});

var dropAnimationFlushOnScroll = (function (store) {
  var unbind = null;
  var frameId = null;

  function clear() {
    if (frameId) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    if (unbind) {
      unbind();
      unbind = null;
    }
  }

  return function (next) {
    return function (action) {
      if (action.type === 'FLUSH' || action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATION_FINISHED') {
        clear();
      }

      next(action);

      if (action.type !== 'DROP_ANIMATE') {
        return;
      }

      var binding = {
        eventName: 'scroll',
        options: {
          capture: true,
          passive: false,
          once: true
        },
        fn: function flushDropAnimation() {
          var state = store.getState();

          if (state.phase === 'DROP_ANIMATING') {
            store.dispatch(dropAnimationFinished());
          }
        }
      };
      frameId = requestAnimationFrame(function () {
        frameId = null;
        unbind = bindEvents(window, [binding]);
      });
    };
  };
});

var dimensionMarshalStopper = (function (marshal) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'DROP_COMPLETE' || action.type === 'FLUSH' || action.type === 'DROP_ANIMATE') {
          marshal.stopPublishing();
        }

        next(action);
      };
    };
  };
});

var focus = (function (marshal) {
  var isWatching = false;
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === 'INITIAL_PUBLISH') {
          isWatching = true;
          marshal.tryRecordFocus(action.payload.critical.draggable.id);
          next(action);
          marshal.tryRestoreFocusRecorded();
          return;
        }

        next(action);

        if (!isWatching) {
          return;
        }

        if (action.type === 'FLUSH') {
          isWatching = false;
          marshal.tryRestoreFocusRecorded();
          return;
        }

        if (action.type === 'DROP_COMPLETE') {
          isWatching = false;
          var result = action.payload.completed.result;

          if (result.combine) {
            marshal.tryShiftRecord(result.draggableId, result.combine.draggableId);
          }

          marshal.tryRestoreFocusRecorded();
        }
      };
    };
  };
});

var shouldStop = function shouldStop(action) {
  return action.type === 'DROP_COMPLETE' || action.type === 'DROP_ANIMATE' || action.type === 'FLUSH';
};

var autoScroll = (function (autoScroller) {
  return function (store) {
    return function (next) {
      return function (action) {
        if (shouldStop(action)) {
          autoScroller.stop();
          next(action);
          return;
        }

        if (action.type === 'INITIAL_PUBLISH') {
          next(action);
          var state = store.getState();
          !(state.phase === 'DRAGGING') ?  true ? invariant(false, 'Expected phase to be DRAGGING after INITIAL_PUBLISH') : 0 : void 0;
          autoScroller.start(state);
          return;
        }

        next(action);
        autoScroller.scroll(store.getState());
      };
    };
  };
});

var pendingDrop = (function (store) {
  return function (next) {
    return function (action) {
      next(action);

      if (action.type !== 'PUBLISH_WHILE_DRAGGING') {
        return;
      }

      var postActionState = store.getState();

      if (postActionState.phase !== 'DROP_PENDING') {
        return;
      }

      if (postActionState.isWaiting) {
        return;
      }

      store.dispatch(drop({
        reason: postActionState.reason
      }));
    };
  };
});

var composeEnhancers =  true && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  name: 'react-beautiful-dnd'
}) : redux__WEBPACK_IMPORTED_MODULE_8__.compose;
var createStore = (function (_ref) {
  var dimensionMarshal = _ref.dimensionMarshal,
      focusMarshal = _ref.focusMarshal,
      styleMarshal = _ref.styleMarshal,
      getResponders = _ref.getResponders,
      announce = _ref.announce,
      autoScroller = _ref.autoScroller;
  return (0,redux__WEBPACK_IMPORTED_MODULE_8__.createStore)(reducer, composeEnhancers((0,redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware)(style(styleMarshal), dimensionMarshalStopper(dimensionMarshal), lift$1(dimensionMarshal), drop$1, dropAnimationFinish, dropAnimationFlushOnScroll, pendingDrop, autoScroll(autoScroller), scrollListener, focus(focusMarshal), responders(getResponders, announce))));
});

var clean$1 = function clean() {
  return {
    additions: {},
    removals: {},
    modified: {}
  };
};
function createPublisher(_ref) {
  var registry = _ref.registry,
      callbacks = _ref.callbacks;
  var staging = clean$1();
  var frameId = null;

  var collect = function collect() {
    if (frameId) {
      return;
    }

    callbacks.collectionStarting();
    frameId = requestAnimationFrame(function () {
      frameId = null;
      start();
      var _staging = staging,
          additions = _staging.additions,
          removals = _staging.removals,
          modified = _staging.modified;
      var added = Object.keys(additions).map(function (id) {
        return registry.draggable.getById(id).getDimension(origin);
      }).sort(function (a, b) {
        return a.descriptor.index - b.descriptor.index;
      });
      var updated = Object.keys(modified).map(function (id) {
        var entry = registry.droppable.getById(id);
        var scroll = entry.callbacks.getScrollWhileDragging();
        return {
          droppableId: id,
          scroll: scroll
        };
      });
      var result = {
        additions: added,
        removals: Object.keys(removals),
        modified: updated
      };
      staging = clean$1();
      finish();
      callbacks.publish(result);
    });
  };

  var add = function add(entry) {
    var id = entry.descriptor.id;
    staging.additions[id] = entry;
    staging.modified[entry.descriptor.droppableId] = true;

    if (staging.removals[id]) {
      delete staging.removals[id];
    }

    collect();
  };

  var remove = function remove(entry) {
    var descriptor = entry.descriptor;
    staging.removals[descriptor.id] = true;
    staging.modified[descriptor.droppableId] = true;

    if (staging.additions[descriptor.id]) {
      delete staging.additions[descriptor.id];
    }

    collect();
  };

  var stop = function stop() {
    if (!frameId) {
      return;
    }

    cancelAnimationFrame(frameId);
    frameId = null;
    staging = clean$1();
  };

  return {
    add: add,
    remove: remove,
    stop: stop
  };
}

var getMaxScroll = (function (_ref) {
  var scrollHeight = _ref.scrollHeight,
      scrollWidth = _ref.scrollWidth,
      height = _ref.height,
      width = _ref.width;
  var maxScroll = subtract({
    x: scrollWidth,
    y: scrollHeight
  }, {
    x: width,
    y: height
  });
  var adjustedMaxScroll = {
    x: Math.max(0, maxScroll.x),
    y: Math.max(0, maxScroll.y)
  };
  return adjustedMaxScroll;
});

var getDocumentElement = (function () {
  var doc = document.documentElement;
  !doc ?  true ? invariant(false, 'Cannot find document.documentElement') : 0 : void 0;
  return doc;
});

var getMaxWindowScroll = (function () {
  var doc = getDocumentElement();
  var maxScroll = getMaxScroll({
    scrollHeight: doc.scrollHeight,
    scrollWidth: doc.scrollWidth,
    width: doc.clientWidth,
    height: doc.clientHeight
  });
  return maxScroll;
});

var getViewport = (function () {
  var scroll = getWindowScroll();
  var maxScroll = getMaxWindowScroll();
  var top = scroll.y;
  var left = scroll.x;
  var doc = getDocumentElement();
  var width = doc.clientWidth;
  var height = doc.clientHeight;
  var right = left + width;
  var bottom = top + height;
  var frame = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)({
    top: top,
    left: left,
    right: right,
    bottom: bottom
  });
  var viewport = {
    frame: frame,
    scroll: {
      initial: scroll,
      current: scroll,
      max: maxScroll,
      diff: {
        value: origin,
        displacement: origin
      }
    }
  };
  return viewport;
});

var getInitialPublish = (function (_ref) {
  var critical = _ref.critical,
      scrollOptions = _ref.scrollOptions,
      registry = _ref.registry;
  start();
  var viewport = getViewport();
  var windowScroll = viewport.scroll.current;
  var home = critical.droppable;
  var droppables = registry.droppable.getAllByType(home.type).map(function (entry) {
    return entry.callbacks.getDimensionAndWatchScroll(windowScroll, scrollOptions);
  });
  var draggables = registry.draggable.getAllByType(critical.draggable.type).map(function (entry) {
    return entry.getDimension(windowScroll);
  });
  var dimensions = {
    draggables: toDraggableMap(draggables),
    droppables: toDroppableMap(droppables)
  };
  finish();
  var result = {
    dimensions: dimensions,
    critical: critical,
    viewport: viewport
  };
  return result;
});

function shouldPublishUpdate(registry, dragging, entry) {
  if (entry.descriptor.id === dragging.id) {
    return false;
  }

  if (entry.descriptor.type !== dragging.type) {
    return false;
  }

  var home = registry.droppable.getById(entry.descriptor.droppableId);

  if (home.descriptor.mode !== 'virtual') {
     true ? warning("\n      You are attempting to add or remove a Draggable [id: " + entry.descriptor.id + "]\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    ") : 0;
    return false;
  }

  return true;
}

var createDimensionMarshal = (function (registry, callbacks) {
  var collection = null;
  var publisher = createPublisher({
    callbacks: {
      publish: callbacks.publishWhileDragging,
      collectionStarting: callbacks.collectionStarting
    },
    registry: registry
  });

  var updateDroppableIsEnabled = function updateDroppableIsEnabled(id, isEnabled) {
    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update is enabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;

    if (!collection) {
      return;
    }

    callbacks.updateDroppableIsEnabled({
      id: id,
      isEnabled: isEnabled
    });
  };

  var updateDroppableIsCombineEnabled = function updateDroppableIsCombineEnabled(id, isCombineEnabled) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update isCombineEnabled flag of Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableIsCombineEnabled({
      id: id,
      isCombineEnabled: isCombineEnabled
    });
  };

  var updateDroppableScroll = function updateDroppableScroll(id, newScroll) {
    if (!collection) {
      return;
    }

    !registry.droppable.exists(id) ?  true ? invariant(false, "Cannot update the scroll on Droppable " + id + " as it is not registered") : 0 : void 0;
    callbacks.updateDroppableScroll({
      id: id,
      newScroll: newScroll
    });
  };

  var scrollDroppable = function scrollDroppable(id, change) {
    if (!collection) {
      return;
    }

    registry.droppable.getById(id).callbacks.scroll(change);
  };

  var stopPublishing = function stopPublishing() {
    if (!collection) {
      return;
    }

    publisher.stop();
    var home = collection.critical.droppable;
    registry.droppable.getAllByType(home.type).forEach(function (entry) {
      return entry.callbacks.dragStopped();
    });
    collection.unsubscribe();
    collection = null;
  };

  var subscriber = function subscriber(event) {
    !collection ?  true ? invariant(false, 'Should only be subscribed when a collection is occurring') : 0 : void 0;
    var dragging = collection.critical.draggable;

    if (event.type === 'ADDITION') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.add(event.value);
      }
    }

    if (event.type === 'REMOVAL') {
      if (shouldPublishUpdate(registry, dragging, event.value)) {
        publisher.remove(event.value);
      }
    }
  };

  var startPublishing = function startPublishing(request) {
    !!collection ?  true ? invariant(false, 'Cannot start capturing critical dimensions as there is already a collection') : 0 : void 0;
    var entry = registry.draggable.getById(request.draggableId);
    var home = registry.droppable.getById(entry.descriptor.droppableId);
    var critical = {
      draggable: entry.descriptor,
      droppable: home.descriptor
    };
    var unsubscribe = registry.subscribe(subscriber);
    collection = {
      critical: critical,
      unsubscribe: unsubscribe
    };
    return getInitialPublish({
      critical: critical,
      registry: registry,
      scrollOptions: request.scrollOptions
    });
  };

  var marshal = {
    updateDroppableIsEnabled: updateDroppableIsEnabled,
    updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
    scrollDroppable: scrollDroppable,
    updateDroppableScroll: updateDroppableScroll,
    startPublishing: startPublishing,
    stopPublishing: stopPublishing
  };
  return marshal;
});

var canStartDrag = (function (state, id) {
  if (state.phase === 'IDLE') {
    return true;
  }

  if (state.phase !== 'DROP_ANIMATING') {
    return false;
  }

  if (state.completed.result.draggableId === id) {
    return false;
  }

  return state.completed.result.reason === 'DROP';
});

var scrollWindow = (function (change) {
  window.scrollBy(change.x, change.y);
});

var getScrollableDroppables = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (droppables) {
  return toDroppableList(droppables).filter(function (droppable) {
    if (!droppable.isEnabled) {
      return false;
    }

    if (!droppable.frame) {
      return false;
    }

    return true;
  });
});

var getScrollableDroppableOver = function getScrollableDroppableOver(target, droppables) {
  var maybe = find(getScrollableDroppables(droppables), function (droppable) {
    !droppable.frame ?  true ? invariant(false, 'Invalid result') : 0 : void 0;
    return isPositionInFrame(droppable.frame.pageMarginBox)(target);
  });
  return maybe;
};

var getBestScrollableDroppable = (function (_ref) {
  var center = _ref.center,
      destination = _ref.destination,
      droppables = _ref.droppables;

  if (destination) {
    var _dimension = droppables[destination];

    if (!_dimension.frame) {
      return null;
    }

    return _dimension;
  }

  var dimension = getScrollableDroppableOver(center, droppables);
  return dimension;
});

var config = {
  startFromPercentage: 0.25,
  maxScrollAtPercentage: 0.05,
  maxPixelScroll: 28,
  ease: function ease(percentage) {
    return Math.pow(percentage, 2);
  },
  durationDampening: {
    stopDampeningAt: 1200,
    accelerateAt: 360
  }
};

var getDistanceThresholds = (function (container, axis) {
  var startScrollingFrom = container[axis.size] * config.startFromPercentage;
  var maxScrollValueAt = container[axis.size] * config.maxScrollAtPercentage;
  var thresholds = {
    startScrollingFrom: startScrollingFrom,
    maxScrollValueAt: maxScrollValueAt
  };
  return thresholds;
});

var getPercentage = (function (_ref) {
  var startOfRange = _ref.startOfRange,
      endOfRange = _ref.endOfRange,
      current = _ref.current;
  var range = endOfRange - startOfRange;

  if (range === 0) {
     true ? warning("\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    ") : 0;
    return 0;
  }

  var currentInRange = current - startOfRange;
  var percentage = currentInRange / range;
  return percentage;
});

var minScroll = 1;

var getValueFromDistance = (function (distanceToEdge, thresholds) {
  if (distanceToEdge > thresholds.startScrollingFrom) {
    return 0;
  }

  if (distanceToEdge <= thresholds.maxScrollValueAt) {
    return config.maxPixelScroll;
  }

  if (distanceToEdge === thresholds.startScrollingFrom) {
    return minScroll;
  }

  var percentageFromMaxScrollValueAt = getPercentage({
    startOfRange: thresholds.maxScrollValueAt,
    endOfRange: thresholds.startScrollingFrom,
    current: distanceToEdge
  });
  var percentageFromStartScrollingFrom = 1 - percentageFromMaxScrollValueAt;
  var scroll = config.maxPixelScroll * config.ease(percentageFromStartScrollingFrom);
  return Math.ceil(scroll);
});

var accelerateAt = config.durationDampening.accelerateAt;
var stopAt = config.durationDampening.stopDampeningAt;
var dampenValueByTime = (function (proposedScroll, dragStartTime) {
  var startOfRange = dragStartTime;
  var endOfRange = stopAt;
  var now = Date.now();
  var runTime = now - startOfRange;

  if (runTime >= stopAt) {
    return proposedScroll;
  }

  if (runTime < accelerateAt) {
    return minScroll;
  }

  var betweenAccelerateAtAndStopAtPercentage = getPercentage({
    startOfRange: accelerateAt,
    endOfRange: endOfRange,
    current: runTime
  });
  var scroll = proposedScroll * config.ease(betweenAccelerateAtAndStopAtPercentage);
  return Math.ceil(scroll);
});

var getValue = (function (_ref) {
  var distanceToEdge = _ref.distanceToEdge,
      thresholds = _ref.thresholds,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getValueFromDistance(distanceToEdge, thresholds);

  if (scroll === 0) {
    return 0;
  }

  if (!shouldUseTimeDampening) {
    return scroll;
  }

  return Math.max(dampenValueByTime(scroll, dragStartTime), minScroll);
});

var getScrollOnAxis = (function (_ref) {
  var container = _ref.container,
      distanceToEdges = _ref.distanceToEdges,
      dragStartTime = _ref.dragStartTime,
      axis = _ref.axis,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var thresholds = getDistanceThresholds(container, axis);
  var isCloserToEnd = distanceToEdges[axis.end] < distanceToEdges[axis.start];

  if (isCloserToEnd) {
    return getValue({
      distanceToEdge: distanceToEdges[axis.end],
      thresholds: thresholds,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  }

  return -1 * getValue({
    distanceToEdge: distanceToEdges[axis.start],
    thresholds: thresholds,
    dragStartTime: dragStartTime,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
});

var adjustForSizeLimits = (function (_ref) {
  var container = _ref.container,
      subject = _ref.subject,
      proposedScroll = _ref.proposedScroll;
  var isTooBigVertically = subject.height > container.height;
  var isTooBigHorizontally = subject.width > container.width;

  if (!isTooBigHorizontally && !isTooBigVertically) {
    return proposedScroll;
  }

  if (isTooBigHorizontally && isTooBigVertically) {
    return null;
  }

  return {
    x: isTooBigHorizontally ? 0 : proposedScroll.x,
    y: isTooBigVertically ? 0 : proposedScroll.y
  };
});

var clean$2 = apply(function (value) {
  return value === 0 ? 0 : value;
});
var getScroll = (function (_ref) {
  var dragStartTime = _ref.dragStartTime,
      container = _ref.container,
      subject = _ref.subject,
      center = _ref.center,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var distanceToEdges = {
    top: center.y - container.top,
    right: container.right - center.x,
    bottom: container.bottom - center.y,
    left: center.x - container.left
  };
  var y = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: vertical,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var x = getScrollOnAxis({
    container: container,
    distanceToEdges: distanceToEdges,
    dragStartTime: dragStartTime,
    axis: horizontal,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  var required = clean$2({
    x: x,
    y: y
  });

  if (isEqual(required, origin)) {
    return null;
  }

  var limited = adjustForSizeLimits({
    container: container,
    subject: subject,
    proposedScroll: required
  });

  if (!limited) {
    return null;
  }

  return isEqual(limited, origin) ? null : limited;
});

var smallestSigned = apply(function (value) {
  if (value === 0) {
    return 0;
  }

  return value > 0 ? 1 : -1;
});
var getOverlap = function () {
  var getRemainder = function getRemainder(target, max) {
    if (target < 0) {
      return target;
    }

    if (target > max) {
      return target - max;
    }

    return 0;
  };

  return function (_ref) {
    var current = _ref.current,
        max = _ref.max,
        change = _ref.change;
    var targetScroll = add(current, change);
    var overlap = {
      x: getRemainder(targetScroll.x, max.x),
      y: getRemainder(targetScroll.y, max.y)
    };

    if (isEqual(overlap, origin)) {
      return null;
    }

    return overlap;
  };
}();
var canPartiallyScroll = function canPartiallyScroll(_ref2) {
  var rawMax = _ref2.max,
      current = _ref2.current,
      change = _ref2.change;
  var max = {
    x: Math.max(current.x, rawMax.x),
    y: Math.max(current.y, rawMax.y)
  };
  var smallestChange = smallestSigned(change);
  var overlap = getOverlap({
    max: max,
    current: current,
    change: smallestChange
  });

  if (!overlap) {
    return true;
  }

  if (smallestChange.x !== 0 && overlap.x === 0) {
    return true;
  }

  if (smallestChange.y !== 0 && overlap.y === 0) {
    return true;
  }

  return false;
};
var canScrollWindow = function canScrollWindow(viewport, change) {
  return canPartiallyScroll({
    current: viewport.scroll.current,
    max: viewport.scroll.max,
    change: change
  });
};
var getWindowOverlap = function getWindowOverlap(viewport, change) {
  if (!canScrollWindow(viewport, change)) {
    return null;
  }

  var max = viewport.scroll.max;
  var current = viewport.scroll.current;
  return getOverlap({
    current: current,
    max: max,
    change: change
  });
};
var canScrollDroppable = function canScrollDroppable(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return false;
  }

  return canPartiallyScroll({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};
var getDroppableOverlap = function getDroppableOverlap(droppable, change) {
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  if (!canScrollDroppable(droppable, change)) {
    return null;
  }

  return getOverlap({
    current: frame.scroll.current,
    max: frame.scroll.max,
    change: change
  });
};

var getWindowScrollChange = (function (_ref) {
  var viewport = _ref.viewport,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: viewport.frame,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollWindow(viewport, scroll) ? scroll : null;
});

var getDroppableScrollChange = (function (_ref) {
  var droppable = _ref.droppable,
      subject = _ref.subject,
      center = _ref.center,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening;
  var frame = droppable.frame;

  if (!frame) {
    return null;
  }

  var scroll = getScroll({
    dragStartTime: dragStartTime,
    container: frame.pageMarginBox,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });
  return scroll && canScrollDroppable(droppable, scroll) ? scroll : null;
});

var scroll$1 = (function (_ref) {
  var state = _ref.state,
      dragStartTime = _ref.dragStartTime,
      shouldUseTimeDampening = _ref.shouldUseTimeDampening,
      scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var center = state.current.page.borderBoxCenter;
  var draggable = state.dimensions.draggables[state.critical.draggable.id];
  var subject = draggable.page.marginBox;

  if (state.isWindowScrollAllowed) {
    var viewport = state.viewport;

    var _change = getWindowScrollChange({
      dragStartTime: dragStartTime,
      viewport: viewport,
      subject: subject,
      center: center,
      shouldUseTimeDampening: shouldUseTimeDampening
    });

    if (_change) {
      scrollWindow(_change);
      return;
    }
  }

  var droppable = getBestScrollableDroppable({
    center: center,
    destination: whatIsDraggedOver(state.impact),
    droppables: state.dimensions.droppables
  });

  if (!droppable) {
    return;
  }

  var change = getDroppableScrollChange({
    dragStartTime: dragStartTime,
    droppable: droppable,
    subject: subject,
    center: center,
    shouldUseTimeDampening: shouldUseTimeDampening
  });

  if (change) {
    scrollDroppable(droppable.descriptor.id, change);
  }
});

var createFluidScroller = (function (_ref) {
  var scrollWindow = _ref.scrollWindow,
      scrollDroppable = _ref.scrollDroppable;
  var scheduleWindowScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollWindow);
  var scheduleDroppableScroll = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(scrollDroppable);
  var dragging = null;

  var tryScroll = function tryScroll(state) {
    !dragging ?  true ? invariant(false, 'Cannot fluid scroll if not dragging') : 0 : void 0;
    var _dragging = dragging,
        shouldUseTimeDampening = _dragging.shouldUseTimeDampening,
        dragStartTime = _dragging.dragStartTime;
    scroll$1({
      state: state,
      scrollWindow: scheduleWindowScroll,
      scrollDroppable: scheduleDroppableScroll,
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: shouldUseTimeDampening
    });
  };

  var start$1 = function start$1(state) {
    start();
    !!dragging ?  true ? invariant(false, 'Cannot start auto scrolling when already started') : 0 : void 0;
    var dragStartTime = Date.now();
    var wasScrollNeeded = false;

    var fakeScrollCallback = function fakeScrollCallback() {
      wasScrollNeeded = true;
    };

    scroll$1({
      state: state,
      dragStartTime: 0,
      shouldUseTimeDampening: false,
      scrollWindow: fakeScrollCallback,
      scrollDroppable: fakeScrollCallback
    });
    dragging = {
      dragStartTime: dragStartTime,
      shouldUseTimeDampening: wasScrollNeeded
    };
    finish();

    if (wasScrollNeeded) {
      tryScroll(state);
    }
  };

  var stop = function stop() {
    if (!dragging) {
      return;
    }

    scheduleWindowScroll.cancel();
    scheduleDroppableScroll.cancel();
    dragging = null;
  };

  return {
    start: start$1,
    stop: stop,
    scroll: tryScroll
  };
});

var createJumpScroller = (function (_ref) {
  var move = _ref.move,
      scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow;

  var moveByOffset = function moveByOffset(state, offset) {
    var client = add(state.current.client.selection, offset);
    move({
      client: client
    });
  };

  var scrollDroppableAsMuchAsItCan = function scrollDroppableAsMuchAsItCan(droppable, change) {
    if (!canScrollDroppable(droppable, change)) {
      return change;
    }

    var overlap = getDroppableOverlap(droppable, change);

    if (!overlap) {
      scrollDroppable(droppable.descriptor.id, change);
      return null;
    }

    var whatTheDroppableCanScroll = subtract(change, overlap);
    scrollDroppable(droppable.descriptor.id, whatTheDroppableCanScroll);
    var remainder = subtract(change, whatTheDroppableCanScroll);
    return remainder;
  };

  var scrollWindowAsMuchAsItCan = function scrollWindowAsMuchAsItCan(isWindowScrollAllowed, viewport, change) {
    if (!isWindowScrollAllowed) {
      return change;
    }

    if (!canScrollWindow(viewport, change)) {
      return change;
    }

    var overlap = getWindowOverlap(viewport, change);

    if (!overlap) {
      scrollWindow(change);
      return null;
    }

    var whatTheWindowCanScroll = subtract(change, overlap);
    scrollWindow(whatTheWindowCanScroll);
    var remainder = subtract(change, whatTheWindowCanScroll);
    return remainder;
  };

  var jumpScroller = function jumpScroller(state) {
    var request = state.scrollJumpRequest;

    if (!request) {
      return;
    }

    var destination = whatIsDraggedOver(state.impact);
    !destination ?  true ? invariant(false, 'Cannot perform a jump scroll when there is no destination') : 0 : void 0;
    var droppableRemainder = scrollDroppableAsMuchAsItCan(state.dimensions.droppables[destination], request);

    if (!droppableRemainder) {
      return;
    }

    var viewport = state.viewport;
    var windowRemainder = scrollWindowAsMuchAsItCan(state.isWindowScrollAllowed, viewport, droppableRemainder);

    if (!windowRemainder) {
      return;
    }

    moveByOffset(state, windowRemainder);
  };

  return jumpScroller;
});

var createAutoScroller = (function (_ref) {
  var scrollDroppable = _ref.scrollDroppable,
      scrollWindow = _ref.scrollWindow,
      move = _ref.move;
  var fluidScroller = createFluidScroller({
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });
  var jumpScroll = createJumpScroller({
    move: move,
    scrollWindow: scrollWindow,
    scrollDroppable: scrollDroppable
  });

  var scroll = function scroll(state) {
    if (state.phase !== 'DRAGGING') {
      return;
    }

    if (state.movementMode === 'FLUID') {
      fluidScroller.scroll(state);
      return;
    }

    if (!state.scrollJumpRequest) {
      return;
    }

    jumpScroll(state);
  };

  var scroller = {
    scroll: scroll,
    start: fluidScroller.start,
    stop: fluidScroller.stop
  };
  return scroller;
});

var prefix$1 = 'data-rbd';
var dragHandle = function () {
  var base = prefix$1 + "-drag-handle";
  return {
    base: base,
    draggableId: base + "-draggable-id",
    contextId: base + "-context-id"
  };
}();
var draggable = function () {
  var base = prefix$1 + "-draggable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var droppable = function () {
  var base = prefix$1 + "-droppable";
  return {
    base: base,
    contextId: base + "-context-id",
    id: base + "-id"
  };
}();
var scrollContainer = {
  contextId: prefix$1 + "-scroll-container-context-id"
};

var makeGetSelector = function makeGetSelector(context) {
  return function (attribute) {
    return "[" + attribute + "=\"" + context + "\"]";
  };
};

var getStyles = function getStyles(rules, property) {
  return rules.map(function (rule) {
    var value = rule.styles[property];

    if (!value) {
      return '';
    }

    return rule.selector + " { " + value + " }";
  }).join(' ');
};

var noPointerEvents = 'pointer-events: none;';
var getStyles$1 = (function (contextId) {
  var getSelector = makeGetSelector(contextId);

  var dragHandle$1 = function () {
    var grabCursor = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
    return {
      selector: getSelector(dragHandle.contextId),
      styles: {
        always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
        resting: grabCursor,
        dragging: noPointerEvents,
        dropAnimating: grabCursor
      }
    };
  }();

  var draggable$1 = function () {
    var transition = "\n      transition: " + transitions.outOfTheWay + ";\n    ";
    return {
      selector: getSelector(draggable.contextId),
      styles: {
        dragging: transition,
        dropAnimating: transition,
        userCancel: transition
      }
    };
  }();

  var droppable$1 = {
    selector: getSelector(droppable.contextId),
    styles: {
      always: "overflow-anchor: none;"
    }
  };
  var body = {
    selector: 'body',
    styles: {
      dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
    }
  };
  var rules = [draggable$1, dragHandle$1, droppable$1, body];
  return {
    always: getStyles(rules, 'always'),
    resting: getStyles(rules, 'resting'),
    dragging: getStyles(rules, 'dragging'),
    dropAnimating: getStyles(rules, 'dropAnimating'),
    userCancel: getStyles(rules, 'userCancel')
  };
});

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var getHead = function getHead() {
  var head = document.querySelector('head');
  !head ?  true ? invariant(false, 'Cannot find the head to append a style to') : 0 : void 0;
  return head;
};

var createStyleEl = function createStyleEl(nonce) {
  var el = document.createElement('style');

  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  el.type = 'text/css';
  return el;
};

function useStyleMarshal(contextId, nonce) {
  var styles = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getStyles$1(contextId);
  }, [contextId]);
  var alwaysRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dynamicRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setDynamicStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)((0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (proposed) {
    var el = dynamicRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }), []);
  var setAlwaysStyle = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (proposed) {
    var el = alwaysRef.current;
    !el ?  true ? invariant(false, 'Cannot set dynamic style element if it is not set') : 0 : void 0;
    el.textContent = proposed;
  }, []);
  useIsomorphicLayoutEffect(function () {
    !(!alwaysRef.current && !dynamicRef.current) ?  true ? invariant(false, 'style elements already mounted') : 0 : void 0;
    var always = createStyleEl(nonce);
    var dynamic = createStyleEl(nonce);
    alwaysRef.current = always;
    dynamicRef.current = dynamic;
    always.setAttribute(prefix$1 + "-always", contextId);
    dynamic.setAttribute(prefix$1 + "-dynamic", contextId);
    getHead().appendChild(always);
    getHead().appendChild(dynamic);
    setAlwaysStyle(styles.always);
    setDynamicStyle(styles.resting);
    return function () {
      var remove = function remove(ref) {
        var current = ref.current;
        !current ?  true ? invariant(false, 'Cannot unmount ref as it is not set') : 0 : void 0;
        getHead().removeChild(current);
        ref.current = null;
      };

      remove(alwaysRef);
      remove(dynamicRef);
    };
  }, [nonce, setAlwaysStyle, setDynamicStyle, styles.always, styles.resting, contextId]);
  var dragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return setDynamicStyle(styles.dragging);
  }, [setDynamicStyle, styles.dragging]);
  var dropping = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (reason) {
    if (reason === 'DROP') {
      setDynamicStyle(styles.dropAnimating);
      return;
    }

    setDynamicStyle(styles.userCancel);
  }, [setDynamicStyle, styles.dropAnimating, styles.userCancel]);
  var resting = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!dynamicRef.current) {
      return;
    }

    setDynamicStyle(styles.resting);
  }, [setDynamicStyle, styles.resting]);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      dragging: dragging,
      dropping: dropping,
      resting: resting
    };
  }, [dragging, dropping, resting]);
  return marshal;
}

var getWindowFromEl = (function (el) {
  return el && el.ownerDocument ? el.ownerDocument.defaultView : window;
});

function isHtmlElement(el) {
  return el instanceof getWindowFromEl(el).HTMLElement;
}

function findDragHandle(contextId, draggableId) {
  var selector = "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));

  if (!possible.length) {
     true ? warning("Unable to find any drag handles in the context \"" + contextId + "\"") : 0;
    return null;
  }

  var handle = find(possible, function (el) {
    return el.getAttribute(dragHandle.draggableId) === draggableId;
  });

  if (!handle) {
     true ? warning("Unable to find drag handle with id \"" + draggableId + "\" as no handle with a matching id was found") : 0;
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle needs to be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function useFocusMarshal(contextId) {
  var entriesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var recordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var restoreFocusFrameRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var register = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function register(id, focus) {
    var entry = {
      id: id,
      focus: focus
    };
    entriesRef.current[id] = entry;
    return function unregister() {
      var entries = entriesRef.current;
      var current = entries[id];

      if (current !== entry) {
        delete entries[id];
      }
    };
  }, []);
  var tryGiveFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryGiveFocus(tryGiveFocusTo) {
    var handle = findDragHandle(contextId, tryGiveFocusTo);

    if (handle && handle !== document.activeElement) {
      handle.focus();
    }
  }, [contextId]);
  var tryShiftRecord = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryShiftRecord(previous, redirectTo) {
    if (recordRef.current === previous) {
      recordRef.current = redirectTo;
    }
  }, []);
  var tryRestoreFocusRecorded = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRestoreFocusRecorded() {
    if (restoreFocusFrameRef.current) {
      return;
    }

    if (!isMountedRef.current) {
      return;
    }

    restoreFocusFrameRef.current = requestAnimationFrame(function () {
      restoreFocusFrameRef.current = null;
      var record = recordRef.current;

      if (record) {
        tryGiveFocus(record);
      }
    });
  }, [tryGiveFocus]);
  var tryRecordFocus = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryRecordFocus(id) {
    recordRef.current = null;
    var focused = document.activeElement;

    if (!focused) {
      return;
    }

    if (focused.getAttribute(dragHandle.draggableId) !== id) {
      return;
    }

    recordRef.current = id;
  }, []);
  useIsomorphicLayoutEffect(function () {
    isMountedRef.current = true;
    return function clearFrameOnUnmount() {
      isMountedRef.current = false;
      var frameId = restoreFocusFrameRef.current;

      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);
  var marshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      register: register,
      tryRecordFocus: tryRecordFocus,
      tryRestoreFocusRecorded: tryRestoreFocusRecorded,
      tryShiftRecord: tryShiftRecord
    };
  }, [register, tryRecordFocus, tryRestoreFocusRecorded, tryShiftRecord]);
  return marshal;
}

function createRegistry() {
  var entries = {
    draggables: {},
    droppables: {}
  };
  var subscribers = [];

  function subscribe(cb) {
    subscribers.push(cb);
    return function unsubscribe() {
      var index = subscribers.indexOf(cb);

      if (index === -1) {
        return;
      }

      subscribers.splice(index, 1);
    };
  }

  function notify(event) {
    if (subscribers.length) {
      subscribers.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function findDraggableById(id) {
    return entries.draggables[id] || null;
  }

  function getDraggableById(id) {
    var entry = findDraggableById(id);
    !entry ?  true ? invariant(false, "Cannot find draggable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var draggableAPI = {
    register: function register(entry) {
      entries.draggables[entry.descriptor.id] = entry;
      notify({
        type: 'ADDITION',
        value: entry
      });
    },
    update: function update(entry, last) {
      var current = entries.draggables[last.descriptor.id];

      if (!current) {
        return;
      }

      if (current.uniqueId !== entry.uniqueId) {
        return;
      }

      delete entries.draggables[last.descriptor.id];
      entries.draggables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var draggableId = entry.descriptor.id;
      var current = findDraggableById(draggableId);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.draggables[draggableId];
      notify({
        type: 'REMOVAL',
        value: entry
      });
    },
    getById: getDraggableById,
    findById: findDraggableById,
    exists: function exists(id) {
      return Boolean(findDraggableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.draggables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function findDroppableById(id) {
    return entries.droppables[id] || null;
  }

  function getDroppableById(id) {
    var entry = findDroppableById(id);
    !entry ?  true ? invariant(false, "Cannot find droppable entry with id [" + id + "]") : 0 : void 0;
    return entry;
  }

  var droppableAPI = {
    register: function register(entry) {
      entries.droppables[entry.descriptor.id] = entry;
    },
    unregister: function unregister(entry) {
      var current = findDroppableById(entry.descriptor.id);

      if (!current) {
        return;
      }

      if (entry.uniqueId !== current.uniqueId) {
        return;
      }

      delete entries.droppables[entry.descriptor.id];
    },
    getById: getDroppableById,
    findById: findDroppableById,
    exists: function exists(id) {
      return Boolean(findDroppableById(id));
    },
    getAllByType: function getAllByType(type) {
      return values(entries.droppables).filter(function (entry) {
        return entry.descriptor.type === type;
      });
    }
  };

  function clean() {
    entries.draggables = {};
    entries.droppables = {};
    subscribers.length = 0;
  }

  return {
    draggable: draggableAPI,
    droppable: droppableAPI,
    subscribe: subscribe,
    clean: clean
  };
}

function useRegistry() {
  var registry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(createRegistry, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function unmount() {
      requestAnimationFrame(registry.clean);
    };
  }, [registry]);
  return registry;
}

var StoreContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

var getBodyElement = (function () {
  var body = document.body;
  !body ?  true ? invariant(false, 'Cannot find document.body') : 0 : void 0;
  return body;
});

var visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  'clip-path': 'inset(100%)'
};

var getId = function getId(contextId) {
  return "rbd-announcement-" + contextId;
};
function useAnnouncer(contextId) {
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getId(contextId);
  }, [contextId]);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function setup() {
    var el = document.createElement('div');
    ref.current = el;
    el.id = id;
    el.setAttribute('aria-live', 'assertive');
    el.setAttribute('aria-atomic', 'true');

    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])(el.style, visuallyHidden);

    getBodyElement().appendChild(el);
    return function cleanup() {
      setTimeout(function remove() {
        var body = getBodyElement();

        if (body.contains(el)) {
          body.removeChild(el);
        }

        if (el === ref.current) {
          ref.current = null;
        }
      });
    };
  }, [id]);
  var announce = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (message) {
    var el = ref.current;

    if (el) {
      el.textContent = message;
      return;
    }

     true ? warning("\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      \"" + message + "\"\n    ") : 0;
  }, []);
  return announce;
}

var count = 0;
var defaults = {
  separator: '::'
};
function reset() {
  count = 0;
}
function useUniqueId(prefix, options) {
  if (options === void 0) {
    options = defaults;
  }

  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + prefix + options.separator + count++;
  }, [options.separator, prefix]);
}

function getElementId(_ref) {
  var contextId = _ref.contextId,
      uniqueId = _ref.uniqueId;
  return "rbd-hidden-text-" + contextId + "-" + uniqueId;
}
function useHiddenTextElement(_ref2) {
  var contextId = _ref2.contextId,
      text = _ref2.text;
  var uniqueId = useUniqueId('hidden-text', {
    separator: '-'
  });
  var id = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return getElementId({
      contextId: contextId,
      uniqueId: uniqueId
    });
  }, [uniqueId, contextId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function mount() {
    var el = document.createElement('div');
    el.id = id;
    el.textContent = text;
    el.style.display = 'none';
    getBodyElement().appendChild(el);
    return function unmount() {
      var body = getBodyElement();

      if (body.contains(el)) {
        body.removeChild(el);
      }
    };
  }, [id, text]);
  return id;
}

var AppContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

var peerDependencies = {
	react: "^16.8.5 || ^17.0.0 || ^18.0.0",
	"react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0"
};

var semver = /(\d+)\.(\d+)\.(\d+)/;

var getVersion = function getVersion(value) {
  var result = semver.exec(value);
  !(result != null) ?  true ? invariant(false, "Unable to parse React version " + value) : 0 : void 0;
  var major = Number(result[1]);
  var minor = Number(result[2]);
  var patch = Number(result[3]);
  return {
    major: major,
    minor: minor,
    patch: patch,
    raw: value
  };
};

var isSatisfied = function isSatisfied(expected, actual) {
  if (actual.major > expected.major) {
    return true;
  }

  if (actual.major < expected.major) {
    return false;
  }

  if (actual.minor > expected.minor) {
    return true;
  }

  if (actual.minor < expected.minor) {
    return false;
  }

  return actual.patch >= expected.patch;
};

var checkReactVersion = (function (peerDepValue, actualValue) {
  var peerDep = getVersion(peerDepValue);
  var actual = getVersion(actualValue);

  if (isSatisfied(peerDep, actual)) {
    return;
  }

   true ? warning("\n    React version: [" + actual.raw + "]\n    does not satisfy expected peer dependency version: [" + peerDep.raw + "]\n\n    This can result in run time bugs, and even fatal crashes\n  ") : 0;
});

var suffix = "\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n";
var checkDoctype = (function (doc) {
  var doctype = doc.doctype;

  if (!doctype) {
     true ? warning("\n      No <!doctype html> found.\n\n      " + suffix + "\n    ") : 0;
    return;
  }

  if (doctype.name.toLowerCase() !== 'html') {
     true ? warning("\n      Unexpected <!doctype> found: (" + doctype.name + ")\n\n      " + suffix + "\n    ") : 0;
  }

  if (doctype.publicId !== '') {
     true ? warning("\n      Unexpected <!doctype> publicId found: (" + doctype.publicId + ")\n      A html5 doctype does not have a publicId\n\n      " + suffix + "\n    ") : 0;
  }
});

function useDev(useHook) {
  if (true) {
    useHook();
  }
}

function useDevSetupWarning(fn, inputs) {
  useDev(function () {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      try {
        fn();
      } catch (e) {
        error("\n          A setup problem was encountered.\n\n          > " + e.message + "\n        ");
      }
    }, inputs);
  });
}

function useStartupValidation() {
  useDevSetupWarning(function () {
    checkReactVersion(peerDependencies.react, (react__WEBPACK_IMPORTED_MODULE_0___default().version));
    checkDoctype(document);
  }, []);
}

function usePrevious(current) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = current;
  });
  return ref;
}

function create() {
  var lock = null;

  function isClaimed() {
    return Boolean(lock);
  }

  function isActive(value) {
    return value === lock;
  }

  function claim(abandon) {
    !!lock ?  true ? invariant(false, 'Cannot claim lock as it is already claimed') : 0 : void 0;
    var newLock = {
      abandon: abandon
    };
    lock = newLock;
    return newLock;
  }

  function release() {
    !lock ?  true ? invariant(false, 'Cannot release lock when there is no lock') : 0 : void 0;
    lock = null;
  }

  function tryAbandon() {
    if (lock) {
      lock.abandon();
      release();
    }
  }

  return {
    isClaimed: isClaimed,
    isActive: isActive,
    claim: claim,
    release: release,
    tryAbandon: tryAbandon
  };
}

var tab = 9;
var enter = 13;
var escape = 27;
var space = 32;
var pageUp = 33;
var pageDown = 34;
var end = 35;
var home = 36;
var arrowLeft = 37;
var arrowUp = 38;
var arrowRight = 39;
var arrowDown = 40;

var _preventedKeys;
var preventedKeys = (_preventedKeys = {}, _preventedKeys[enter] = true, _preventedKeys[tab] = true, _preventedKeys);
var preventStandardKeyEvents = (function (event) {
  if (preventedKeys[event.keyCode]) {
    event.preventDefault();
  }
});

var supportedEventName = function () {
  var base = 'visibilitychange';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, "ms" + base, "webkit" + base, "moz" + base, "o" + base];
  var supported = find(candidates, function (eventName) {
    return "on" + eventName in document;
  });
  return supported || base;
}();

var primaryButton = 0;
var sloppyClickThreshold = 5;

function isSloppyClickThresholdExceeded(original, current) {
  return Math.abs(current.x - original.x) >= sloppyClickThreshold || Math.abs(current.y - original.y) >= sloppyClickThreshold;
}

var idle$1 = {
  type: 'IDLE'
};

function getCaptureBindings(_ref) {
  var cancel = _ref.cancel,
      completed = _ref.completed,
      getPhase = _ref.getPhase,
      setPhase = _ref.setPhase;
  return [{
    eventName: 'mousemove',
    fn: function fn(event) {
      var button = event.button,
          clientX = event.clientX,
          clientY = event.clientY;

      if (button !== primaryButton) {
        return;
      }

      var point = {
        x: clientX,
        y: clientY
      };
      var phase = getPhase();

      if (phase.type === 'DRAGGING') {
        event.preventDefault();
        phase.actions.move(point);
        return;
      }

      !(phase.type === 'PENDING') ?  true ? invariant(false, 'Cannot be IDLE') : 0 : void 0;
      var pending = phase.point;

      if (!isSloppyClickThresholdExceeded(pending, point)) {
        return;
      }

      event.preventDefault();
      var actions = phase.actions.fluidLift(point);
      setPhase({
        type: 'DRAGGING',
        actions: actions
      });
    }
  }, {
    eventName: 'mouseup',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'mousedown',
    fn: function fn(event) {
      if (getPhase().type === 'DRAGGING') {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'scroll',
    options: {
      passive: true,
      capture: false
    },
    fn: function fn() {
      if (getPhase().type === 'PENDING') {
        cancel();
      }
    }
  }, {
    eventName: 'webkitmouseforcedown',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false, 'Unexpected phase') : 0 : void 0;

      if (phase.actions.shouldRespectForcePress()) {
        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useMouseSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$1);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'mousedown',
      fn: function onMouseDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.button !== primaryButton) {
          return;
        }

        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        event.preventDefault();
        var point = {
          x: event.clientX,
          y: event.clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var preventForcePressBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'webkitmouseforcewillbegin',
      fn: function fn(event) {
        if (event.defaultPrevented) {
          return;
        }

        var id = api.findClosestDraggableId(event);

        if (!id) {
          return;
        }

        var options = api.findOptionsForDraggable(id);

        if (!options) {
          return;
        }

        if (options.shouldRespectForcePress) {
          return;
        }

        if (!api.canGetLock(id)) {
          return;
        }

        event.preventDefault();
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [preventForcePressBinding, startCaptureBinding], options);
  }, [preventForcePressBinding, startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    phaseRef.current = idle$1;
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var bindings = getCaptureBindings({
      cancel: cancel,
      completed: stop,
      getPhase: function getPhase() {
        return phaseRef.current;
      },
      setPhase: function setPhase(phase) {
        phaseRef.current = phase;
      }
    });
    unbindEventsRef.current = bindEvents(window, bindings, options);
  }, [cancel, stop]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(phaseRef.current.type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    phaseRef.current = {
      type: 'PENDING',
      point: point,
      actions: actions
    };
    bindCapturingEvents();
  }, [bindCapturingEvents]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var _scrollJumpKeys;

function noop$1() {}

var scrollJumpKeys = (_scrollJumpKeys = {}, _scrollJumpKeys[pageDown] = true, _scrollJumpKeys[pageUp] = true, _scrollJumpKeys[home] = true, _scrollJumpKeys[end] = true, _scrollJumpKeys);

function getDraggingBindings(actions, stop) {
  function cancel() {
    stop();
    actions.cancel();
  }

  function drop() {
    stop();
    actions.drop();
  }

  return [{
    eventName: 'keydown',
    fn: function fn(event) {
      if (event.keyCode === escape) {
        event.preventDefault();
        cancel();
        return;
      }

      if (event.keyCode === space) {
        event.preventDefault();
        drop();
        return;
      }

      if (event.keyCode === arrowDown) {
        event.preventDefault();
        actions.moveDown();
        return;
      }

      if (event.keyCode === arrowUp) {
        event.preventDefault();
        actions.moveUp();
        return;
      }

      if (event.keyCode === arrowRight) {
        event.preventDefault();
        actions.moveRight();
        return;
      }

      if (event.keyCode === arrowLeft) {
        event.preventDefault();
        actions.moveLeft();
        return;
      }

      if (scrollJumpKeys[event.keyCode]) {
        event.preventDefault();
        return;
      }

      preventStandardKeyEvents(event);
    }
  }, {
    eventName: 'mousedown',
    fn: cancel
  }, {
    eventName: 'mouseup',
    fn: cancel
  }, {
    eventName: 'click',
    fn: cancel
  }, {
    eventName: 'touchstart',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'wheel',
    fn: cancel,
    options: {
      passive: true
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useKeyboardSensor(api) {
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop$1);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'keydown',
      fn: function onKeyDown(event) {
        if (event.defaultPrevented) {
          return;
        }

        if (event.keyCode !== space) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var preDrag = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!preDrag) {
          return;
        }

        event.preventDefault();
        var isCapturing = true;
        var actions = preDrag.snapLift();
        unbindEventsRef.current();

        function stop() {
          !isCapturing ?  true ? invariant(false, 'Cannot stop capturing a keyboard drag when not capturing') : 0 : void 0;
          isCapturing = false;
          unbindEventsRef.current();
          listenForCapture();
        }

        unbindEventsRef.current = bindEvents(window, getDraggingBindings(actions, stop), {
          capture: true,
          passive: false
        });
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryStartCapture() {
    var options = {
      passive: false,
      capture: true
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
    };
  }, [listenForCapture]);
}

var idle$2 = {
  type: 'IDLE'
};
var timeForLongPress = 120;
var forcePressThreshold = 0.15;

function getWindowBindings(_ref) {
  var cancel = _ref.cancel,
      getPhase = _ref.getPhase;
  return [{
    eventName: 'orientationchange',
    fn: cancel
  }, {
    eventName: 'resize',
    fn: cancel
  }, {
    eventName: 'contextmenu',
    fn: function fn(event) {
      event.preventDefault();
    }
  }, {
    eventName: 'keydown',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      if (event.keyCode === escape) {
        event.preventDefault();
      }

      cancel();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function getHandleBindings(_ref2) {
  var cancel = _ref2.cancel,
      completed = _ref2.completed,
      getPhase = _ref2.getPhase;
  return [{
    eventName: 'touchmove',
    options: {
      capture: false
    },
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      phase.hasMoved = true;
      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      var point = {
        x: clientX,
        y: clientY
      };
      event.preventDefault();
      phase.actions.move(point);
    }
  }, {
    eventName: 'touchend',
    fn: function fn(event) {
      var phase = getPhase();

      if (phase.type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      phase.actions.drop({
        shouldBlockNextClick: true
      });
      completed();
    }
  }, {
    eventName: 'touchcancel',
    fn: function fn(event) {
      if (getPhase().type !== 'DRAGGING') {
        cancel();
        return;
      }

      event.preventDefault();
      cancel();
    }
  }, {
    eventName: 'touchforcechange',
    fn: function fn(event) {
      var phase = getPhase();
      !(phase.type !== 'IDLE') ?  true ? invariant(false) : 0 : void 0;
      var touch = event.touches[0];

      if (!touch) {
        return;
      }

      var isForcePress = touch.force >= forcePressThreshold;

      if (!isForcePress) {
        return;
      }

      var shouldRespect = phase.actions.shouldRespectForcePress();

      if (phase.type === 'PENDING') {
        if (shouldRespect) {
          cancel();
        }

        return;
      }

      if (shouldRespect) {
        if (phase.hasMoved) {
          event.preventDefault();
          return;
        }

        cancel();
        return;
      }

      event.preventDefault();
    }
  }, {
    eventName: supportedEventName,
    fn: cancel
  }];
}

function useTouchSensor(api) {
  var phaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(idle$2);
  var unbindEventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(noop);
  var getPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function getPhase() {
    return phaseRef.current;
  }, []);
  var setPhase = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function setPhase(phase) {
    phaseRef.current = phase;
  }, []);
  var startCaptureBinding = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      eventName: 'touchstart',
      fn: function onTouchStart(event) {
        if (event.defaultPrevented) {
          return;
        }

        var draggableId = api.findClosestDraggableId(event);

        if (!draggableId) {
          return;
        }

        var actions = api.tryGetLock(draggableId, stop, {
          sourceEvent: event
        });

        if (!actions) {
          return;
        }

        var touch = event.touches[0];
        var clientX = touch.clientX,
            clientY = touch.clientY;
        var point = {
          x: clientX,
          y: clientY
        };
        unbindEventsRef.current();
        startPendingDrag(actions, point);
      }
    };
  }, [api]);
  var listenForCapture = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function listenForCapture() {
    var options = {
      capture: true,
      passive: false
    };
    unbindEventsRef.current = bindEvents(window, [startCaptureBinding], options);
  }, [startCaptureBinding]);
  var stop = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = phaseRef.current;

    if (current.type === 'IDLE') {
      return;
    }

    if (current.type === 'PENDING') {
      clearTimeout(current.longPressTimerId);
    }

    setPhase(idle$2);
    unbindEventsRef.current();
    listenForCapture();
  }, [listenForCapture, setPhase]);
  var cancel = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var phase = phaseRef.current;
    stop();

    if (phase.type === 'DRAGGING') {
      phase.actions.cancel({
        shouldBlockNextClick: true
      });
    }

    if (phase.type === 'PENDING') {
      phase.actions.abort();
    }
  }, [stop]);
  var bindCapturingEvents = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function bindCapturingEvents() {
    var options = {
      capture: true,
      passive: false
    };
    var args = {
      cancel: cancel,
      completed: stop,
      getPhase: getPhase
    };
    var unbindTarget = bindEvents(window, getHandleBindings(args), options);
    var unbindWindow = bindEvents(window, getWindowBindings(args), options);

    unbindEventsRef.current = function unbindAll() {
      unbindTarget();
      unbindWindow();
    };
  }, [cancel, getPhase, stop]);
  var startDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startDragging() {
    var phase = getPhase();
    !(phase.type === 'PENDING') ?  true ? invariant(false, "Cannot start dragging from phase " + phase.type) : 0 : void 0;
    var actions = phase.actions.fluidLift(phase.point);
    setPhase({
      type: 'DRAGGING',
      actions: actions,
      hasMoved: false
    });
  }, [getPhase, setPhase]);
  var startPendingDrag = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function startPendingDrag(actions, point) {
    !(getPhase().type === 'IDLE') ?  true ? invariant(false, 'Expected to move from IDLE to PENDING drag') : 0 : void 0;
    var longPressTimerId = setTimeout(startDragging, timeForLongPress);
    setPhase({
      type: 'PENDING',
      point: point,
      actions: actions,
      longPressTimerId: longPressTimerId
    });
    bindCapturingEvents();
  }, [bindCapturingEvents, getPhase, setPhase, startDragging]);
  useIsomorphicLayoutEffect(function mount() {
    listenForCapture();
    return function unmount() {
      unbindEventsRef.current();
      var phase = getPhase();

      if (phase.type === 'PENDING') {
        clearTimeout(phase.longPressTimerId);
        setPhase(idle$2);
      }
    };
  }, [getPhase, listenForCapture, setPhase]);
  useIsomorphicLayoutEffect(function webkitHack() {
    var unbind = bindEvents(window, [{
      eventName: 'touchmove',
      fn: function fn() {},
      options: {
        capture: false,
        passive: false
      }
    }]);
    return unbind;
  }, []);
}

function useValidateSensorHooks(sensorHooks) {
  useDev(function () {
    var previousRef = usePrevious(sensorHooks);
    useDevSetupWarning(function () {
      !(previousRef.current.length === sensorHooks.length) ?  true ? invariant(false, 'Cannot change the amount of sensor hooks after mounting') : 0 : void 0;
    });
  });
}

var interactiveTagNames = {
  input: true,
  button: true,
  textarea: true,
  select: true,
  option: true,
  optgroup: true,
  video: true,
  audio: true
};

function isAnInteractiveElement(parent, current) {
  if (current == null) {
    return false;
  }

  var hasAnInteractiveTag = Boolean(interactiveTagNames[current.tagName.toLowerCase()]);

  if (hasAnInteractiveTag) {
    return true;
  }

  var attribute = current.getAttribute('contenteditable');

  if (attribute === 'true' || attribute === '') {
    return true;
  }

  if (current === parent) {
    return false;
  }

  return isAnInteractiveElement(parent, current.parentElement);
}

function isEventInInteractiveElement(draggable, event) {
  var target = event.target;

  if (!isHtmlElement(target)) {
    return false;
  }

  return isAnInteractiveElement(draggable, target);
}

var getBorderBoxCenterPosition = (function (el) {
  return (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect)(el.getBoundingClientRect()).center;
});

function isElement(el) {
  return el instanceof getWindowFromEl(el).Element;
}

var supportedMatchesName = function () {
  var base = 'matches';

  if (typeof document === 'undefined') {
    return base;
  }

  var candidates = [base, 'msMatchesSelector', 'webkitMatchesSelector'];
  var value = find(candidates, function (name) {
    return name in Element.prototype;
  });
  return value || base;
}();

function closestPonyfill(el, selector) {
  if (el == null) {
    return null;
  }

  if (el[supportedMatchesName](selector)) {
    return el;
  }

  return closestPonyfill(el.parentElement, selector);
}

function closest$1(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }

  return closestPonyfill(el, selector);
}

function getSelector(contextId) {
  return "[" + dragHandle.contextId + "=\"" + contextId + "\"]";
}

function findClosestDragHandleFromEvent(contextId, event) {
  var target = event.target;

  if (!isElement(target)) {
     true ? warning('event.target must be a Element') : 0;
    return null;
  }

  var selector = getSelector(contextId);
  var handle = closest$1(target, selector);

  if (!handle) {
    return null;
  }

  if (!isHtmlElement(handle)) {
     true ? warning('drag handle must be a HTMLElement') : 0;
    return null;
  }

  return handle;
}

function tryGetClosestDraggableIdFromEvent(contextId, event) {
  var handle = findClosestDragHandleFromEvent(contextId, event);

  if (!handle) {
    return null;
  }

  return handle.getAttribute(dragHandle.draggableId);
}

function findDraggable(contextId, draggableId) {
  var selector = "[" + draggable.contextId + "=\"" + contextId + "\"]";
  var possible = toArray(document.querySelectorAll(selector));
  var draggable$1 = find(possible, function (el) {
    return el.getAttribute(draggable.id) === draggableId;
  });

  if (!draggable$1) {
    return null;
  }

  if (!isHtmlElement(draggable$1)) {
     true ? warning('Draggable element is not a HTMLElement') : 0;
    return null;
  }

  return draggable$1;
}

function preventDefault(event) {
  event.preventDefault();
}

function _isActive(_ref) {
  var expected = _ref.expected,
      phase = _ref.phase,
      isLockActive = _ref.isLockActive,
      shouldWarn = _ref.shouldWarn;

  if (!isLockActive()) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      ") : 0;
    }

    return false;
  }

  if (expected !== phase) {
    if (shouldWarn) {
       true ? warning("\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: " + expected + "\n        You called an action from outdated phase: " + phase + "\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      ") : 0;
    }

    return false;
  }

  return true;
}

function canStart(_ref2) {
  var lockAPI = _ref2.lockAPI,
      store = _ref2.store,
      registry = _ref2.registry,
      draggableId = _ref2.draggableId;

  if (lockAPI.isClaimed()) {
    return false;
  }

  var entry = registry.draggable.findById(draggableId);

  if (!entry) {
     true ? warning("Unable to find draggable with id: " + draggableId) : 0;
    return false;
  }

  if (!entry.options.isEnabled) {
    return false;
  }

  if (!canStartDrag(store.getState(), draggableId)) {
    return false;
  }

  return true;
}

function tryStart(_ref3) {
  var lockAPI = _ref3.lockAPI,
      contextId = _ref3.contextId,
      store = _ref3.store,
      registry = _ref3.registry,
      draggableId = _ref3.draggableId,
      forceSensorStop = _ref3.forceSensorStop,
      sourceEvent = _ref3.sourceEvent;
  var shouldStart = canStart({
    lockAPI: lockAPI,
    store: store,
    registry: registry,
    draggableId: draggableId
  });

  if (!shouldStart) {
    return null;
  }

  var entry = registry.draggable.getById(draggableId);
  var el = findDraggable(contextId, entry.descriptor.id);

  if (!el) {
     true ? warning("Unable to find draggable element with id: " + draggableId) : 0;
    return null;
  }

  if (sourceEvent && !entry.options.canDragInteractiveElements && isEventInInteractiveElement(el, sourceEvent)) {
    return null;
  }

  var lock = lockAPI.claim(forceSensorStop || noop);
  var phase = 'PRE_DRAG';

  function getShouldRespectForcePress() {
    return entry.options.shouldRespectForcePress;
  }

  function isLockActive() {
    return lockAPI.isActive(lock);
  }

  function tryDispatch(expected, getAction) {
    if (_isActive({
      expected: expected,
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    })) {
      store.dispatch(getAction());
    }
  }

  var tryDispatchWhenDragging = tryDispatch.bind(null, 'DRAGGING');

  function lift$1(args) {
    function completed() {
      lockAPI.release();
      phase = 'COMPLETED';
    }

    if (phase !== 'PRE_DRAG') {
      completed();
      !(phase === 'PRE_DRAG') ?  true ? invariant(false, "Cannot lift in phase " + phase) : 0 : void 0;
    }

    store.dispatch(lift(args.liftActionArgs));
    phase = 'DRAGGING';

    function finish(reason, options) {
      if (options === void 0) {
        options = {
          shouldBlockNextClick: false
        };
      }

      args.cleanup();

      if (options.shouldBlockNextClick) {
        var unbind = bindEvents(window, [{
          eventName: 'click',
          fn: preventDefault,
          options: {
            once: true,
            passive: false,
            capture: true
          }
        }]);
        setTimeout(unbind);
      }

      completed();
      store.dispatch(drop({
        reason: reason
      }));
    }

    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      isActive: function isActive() {
        return _isActive({
          expected: 'DRAGGING',
          phase: phase,
          isLockActive: isLockActive,
          shouldWarn: false
        });
      },
      shouldRespectForcePress: getShouldRespectForcePress,
      drop: function drop(options) {
        return finish('DROP', options);
      },
      cancel: function cancel(options) {
        return finish('CANCEL', options);
      }
    }, args.actions);
  }

  function fluidLift(clientSelection) {
    var move$1 = (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(function (client) {
      tryDispatchWhenDragging(function () {
        return move({
          client: client
        });
      });
    });
    var api = lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: clientSelection,
        movementMode: 'FLUID'
      },
      cleanup: function cleanup() {
        return move$1.cancel();
      },
      actions: {
        move: move$1
      }
    });
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, api, {
      move: move$1
    });
  }

  function snapLift() {
    var actions = {
      moveUp: function moveUp$1() {
        return tryDispatchWhenDragging(moveUp);
      },
      moveRight: function moveRight$1() {
        return tryDispatchWhenDragging(moveRight);
      },
      moveDown: function moveDown$1() {
        return tryDispatchWhenDragging(moveDown);
      },
      moveLeft: function moveLeft$1() {
        return tryDispatchWhenDragging(moveLeft);
      }
    };
    return lift$1({
      liftActionArgs: {
        id: draggableId,
        clientSelection: getBorderBoxCenterPosition(el),
        movementMode: 'SNAP'
      },
      cleanup: noop,
      actions: actions
    });
  }

  function abortPreDrag() {
    var shouldRelease = _isActive({
      expected: 'PRE_DRAG',
      phase: phase,
      isLockActive: isLockActive,
      shouldWarn: true
    });

    if (shouldRelease) {
      lockAPI.release();
    }
  }

  var preDrag = {
    isActive: function isActive() {
      return _isActive({
        expected: 'PRE_DRAG',
        phase: phase,
        isLockActive: isLockActive,
        shouldWarn: false
      });
    },
    shouldRespectForcePress: getShouldRespectForcePress,
    fluidLift: fluidLift,
    snapLift: snapLift,
    abort: abortPreDrag
  };
  return preDrag;
}

var defaultSensors = [useMouseSensor, useKeyboardSensor, useTouchSensor];
function useSensorMarshal(_ref4) {
  var contextId = _ref4.contextId,
      store = _ref4.store,
      registry = _ref4.registry,
      customSensors = _ref4.customSensors,
      enableDefaultSensors = _ref4.enableDefaultSensors;
  var useSensors = [].concat(enableDefaultSensors ? defaultSensors : [], customSensors || []);
  var lockAPI = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return create();
  })[0];
  var tryAbandonLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryAbandonLock(previous, current) {
    if (previous.isDragging && !current.isDragging) {
      lockAPI.tryAbandon();
    }
  }, [lockAPI]);
  useIsomorphicLayoutEffect(function listenToStore() {
    var previous = store.getState();
    var unsubscribe = store.subscribe(function () {
      var current = store.getState();
      tryAbandonLock(previous, current);
      previous = current;
    });
    return unsubscribe;
  }, [lockAPI, store, tryAbandonLock]);
  useIsomorphicLayoutEffect(function () {
    return lockAPI.tryAbandon;
  }, [lockAPI.tryAbandon]);
  var canGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId) {
    return canStart({
      lockAPI: lockAPI,
      registry: registry,
      store: store,
      draggableId: draggableId
    });
  }, [lockAPI, registry, store]);
  var tryGetLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (draggableId, forceStop, options) {
    return tryStart({
      lockAPI: lockAPI,
      registry: registry,
      contextId: contextId,
      store: store,
      draggableId: draggableId,
      forceSensorStop: forceStop,
      sourceEvent: options && options.sourceEvent ? options.sourceEvent : null
    });
  }, [contextId, lockAPI, registry, store]);
  var findClosestDraggableId = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    return tryGetClosestDraggableIdFromEvent(contextId, event);
  }, [contextId]);
  var findOptionsForDraggable = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    var entry = registry.draggable.findById(id);
    return entry ? entry.options : null;
  }, [registry.draggable]);
  var tryReleaseLock = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function tryReleaseLock() {
    if (!lockAPI.isClaimed()) {
      return;
    }

    lockAPI.tryAbandon();

    if (store.getState().phase !== 'IDLE') {
      store.dispatch(flush());
    }
  }, [lockAPI, store]);
  var isLockClaimed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(lockAPI.isClaimed, [lockAPI]);
  var api = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canGetLock: canGetLock,
      tryGetLock: tryGetLock,
      findClosestDraggableId: findClosestDraggableId,
      findOptionsForDraggable: findOptionsForDraggable,
      tryReleaseLock: tryReleaseLock,
      isLockClaimed: isLockClaimed
    };
  }, [canGetLock, tryGetLock, findClosestDraggableId, findOptionsForDraggable, tryReleaseLock, isLockClaimed]);
  useValidateSensorHooks(useSensors);

  for (var i = 0; i < useSensors.length; i++) {
    useSensors[i](api);
  }
}

var createResponders = function createResponders(props) {
  return {
    onBeforeCapture: props.onBeforeCapture,
    onBeforeDragStart: props.onBeforeDragStart,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd,
    onDragUpdate: props.onDragUpdate
  };
};

function getStore(lazyRef) {
  !lazyRef.current ?  true ? invariant(false, 'Could not find store from lazy ref') : 0 : void 0;
  return lazyRef.current;
}

function App(props) {
  var contextId = props.contextId,
      setCallbacks = props.setCallbacks,
      sensors = props.sensors,
      nonce = props.nonce,
      dragHandleUsageInstructions = props.dragHandleUsageInstructions;
  var lazyStoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  useStartupValidation();
  var lastPropsRef = usePrevious(props);
  var getResponders = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return createResponders(lastPropsRef.current);
  }, [lastPropsRef]);
  var announce = useAnnouncer(contextId);
  var dragHandleUsageInstructionsId = useHiddenTextElement({
    contextId: contextId,
    text: dragHandleUsageInstructions
  });
  var styleMarshal = useStyleMarshal(contextId, nonce);
  var lazyDispatch = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (action) {
    getStore(lazyStoreRef).dispatch(action);
  }, []);
  var marshalCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      publishWhileDragging: publishWhileDragging,
      updateDroppableScroll: updateDroppableScroll,
      updateDroppableIsEnabled: updateDroppableIsEnabled,
      updateDroppableIsCombineEnabled: updateDroppableIsCombineEnabled,
      collectionStarting: collectionStarting
    }, lazyDispatch);
  }, [lazyDispatch]);
  var registry = useRegistry();
  var dimensionMarshal = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createDimensionMarshal(registry, marshalCallbacks);
  }, [registry, marshalCallbacks]);
  var autoScroller = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createAutoScroller((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      scrollWindow: scrollWindow,
      scrollDroppable: dimensionMarshal.scrollDroppable
    }, (0,redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators)({
      move: move
    }, lazyDispatch)));
  }, [dimensionMarshal.scrollDroppable, lazyDispatch]);
  var focusMarshal = useFocusMarshal(contextId);
  var store = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return createStore({
      announce: announce,
      autoScroller: autoScroller,
      dimensionMarshal: dimensionMarshal,
      focusMarshal: focusMarshal,
      getResponders: getResponders,
      styleMarshal: styleMarshal
    });
  }, [announce, autoScroller, dimensionMarshal, focusMarshal, getResponders, styleMarshal]);

  if (true) {
    if (lazyStoreRef.current && lazyStoreRef.current !== store) {
       true ? warning('unexpected store change') : 0;
    }
  }

  lazyStoreRef.current = store;
  var tryResetStore = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var current = getStore(lazyStoreRef);
    var state = current.getState();

    if (state.phase !== 'IDLE') {
      current.dispatch(flush());
    }
  }, []);
  var isDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var state = getStore(lazyStoreRef).getState();
    return state.isDragging || state.phase === 'DROP_ANIMATING';
  }, []);
  var appCallbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      isDragging: isDragging,
      tryAbort: tryResetStore
    };
  }, [isDragging, tryResetStore]);
  setCallbacks(appCallbacks);
  var getCanLift = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (id) {
    return canStartDrag(getStore(lazyStoreRef).getState(), id);
  }, []);
  var getIsMovementAllowed = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return isMovementAllowed(getStore(lazyStoreRef).getState());
  }, []);
  var appContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      marshal: dimensionMarshal,
      focus: focusMarshal,
      contextId: contextId,
      canLift: getCanLift,
      isMovementAllowed: getIsMovementAllowed,
      dragHandleUsageInstructionsId: dragHandleUsageInstructionsId,
      registry: registry
    };
  }, [contextId, dimensionMarshal, dragHandleUsageInstructionsId, focusMarshal, getCanLift, getIsMovementAllowed, registry]);
  useSensorMarshal({
    contextId: contextId,
    store: store,
    registry: registry,
    customSensors: sensors,
    enableDefaultSensors: props.enableDefaultSensors !== false
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return tryResetStore;
  }, [tryResetStore]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContext.Provider, {
    value: appContext
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    context: StoreContext,
    store: store
  }, props.children));
}

var count$1 = 0;
function reset$1() {
  count$1 = 0;
}
function useInstanceCount() {
  return (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return "" + count$1++;
  }, []);
}

function resetServerContext() {
  reset$1();
  reset();
}
function DragDropContext(props) {
  var contextId = useInstanceCount();
  var dragHandleUsageInstructions = props.dragHandleUsageInstructions || preset.dragHandleUsageInstructions;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, null, function (setCallbacks) {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, {
      nonce: props.nonce,
      contextId: contextId,
      setCallbacks: setCallbacks,
      dragHandleUsageInstructions: dragHandleUsageInstructions,
      enableDefaultSensors: props.enableDefaultSensors,
      sensors: props.sensors,
      onBeforeCapture: props.onBeforeCapture,
      onBeforeDragStart: props.onBeforeDragStart,
      onDragStart: props.onDragStart,
      onDragUpdate: props.onDragUpdate,
      onDragEnd: props.onDragEnd
    }, props.children);
  });
}

var isEqual$1 = function isEqual(base) {
  return function (value) {
    return base === value;
  };
};

var isScroll = isEqual$1('scroll');
var isAuto = isEqual$1('auto');
var isVisible$1 = isEqual$1('visible');

var isEither = function isEither(overflow, fn) {
  return fn(overflow.overflowX) || fn(overflow.overflowY);
};

var isBoth = function isBoth(overflow, fn) {
  return fn(overflow.overflowX) && fn(overflow.overflowY);
};

var isElementScrollable = function isElementScrollable(el) {
  var style = window.getComputedStyle(el);
  var overflow = {
    overflowX: style.overflowX,
    overflowY: style.overflowY
  };
  return isEither(overflow, isScroll) || isEither(overflow, isAuto);
};

var isBodyScrollable = function isBodyScrollable() {
  if (false) {}

  var body = getBodyElement();
  var html = document.documentElement;
  !html ?  true ? invariant(false) : 0 : void 0;

  if (!isElementScrollable(body)) {
    return false;
  }

  var htmlStyle = window.getComputedStyle(html);
  var htmlOverflow = {
    overflowX: htmlStyle.overflowX,
    overflowY: htmlStyle.overflowY
  };

  if (isBoth(htmlOverflow, isVisible$1)) {
    return false;
  }

   true ? warning("\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  ") : 0;
  return false;
};

var getClosestScrollable = function getClosestScrollable(el) {
  if (el == null) {
    return null;
  }

  if (el === document.body) {
    return isBodyScrollable() ? el : null;
  }

  if (el === document.documentElement) {
    return null;
  }

  if (!isElementScrollable(el)) {
    return getClosestScrollable(el.parentElement);
  }

  return el;
};

var checkForNestedScrollContainers = (function (scrollable) {
  if (!scrollable) {
    return;
  }

  var anotherScrollParent = getClosestScrollable(scrollable.parentElement);

  if (!anotherScrollParent) {
    return;
  }

   true ? warning("\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  ") : 0;
});

var getScroll$1 = (function (el) {
  return {
    x: el.scrollLeft,
    y: el.scrollTop
  };
});

var getIsFixed = function getIsFixed(el) {
  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);

  if (style.position === 'fixed') {
    return true;
  }

  return getIsFixed(el.parentElement);
};

var getEnv = (function (start) {
  var closestScrollable = getClosestScrollable(start);
  var isFixedOnPage = getIsFixed(start);
  return {
    closestScrollable: closestScrollable,
    isFixedOnPage: isFixedOnPage
  };
});

var getDroppableDimension = (function (_ref) {
  var descriptor = _ref.descriptor,
      isEnabled = _ref.isEnabled,
      isCombineEnabled = _ref.isCombineEnabled,
      isFixedOnPage = _ref.isFixedOnPage,
      direction = _ref.direction,
      client = _ref.client,
      page = _ref.page,
      closest = _ref.closest;

  var frame = function () {
    if (!closest) {
      return null;
    }

    var scrollSize = closest.scrollSize,
        frameClient = closest.client;
    var maxScroll = getMaxScroll({
      scrollHeight: scrollSize.scrollHeight,
      scrollWidth: scrollSize.scrollWidth,
      height: frameClient.paddingBox.height,
      width: frameClient.paddingBox.width
    });
    return {
      pageMarginBox: closest.page.marginBox,
      frameClient: frameClient,
      scrollSize: scrollSize,
      shouldClipSubject: closest.shouldClipSubject,
      scroll: {
        initial: closest.scroll,
        current: closest.scroll,
        max: maxScroll,
        diff: {
          value: origin,
          displacement: origin
        }
      }
    };
  }();

  var axis = direction === 'vertical' ? vertical : horizontal;
  var subject = getSubject({
    page: page,
    withPlaceholder: null,
    axis: axis,
    frame: frame
  });
  var dimension = {
    descriptor: descriptor,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: isFixedOnPage,
    axis: axis,
    isEnabled: isEnabled,
    client: client,
    page: page,
    frame: frame,
    subject: subject
  };
  return dimension;
});

var getClient = function getClient(targetRef, closestScrollable) {
  var base = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(targetRef);

  if (!closestScrollable) {
    return base;
  }

  if (targetRef !== closestScrollable) {
    return base;
  }

  var top = base.paddingBox.top - closestScrollable.scrollTop;
  var left = base.paddingBox.left - closestScrollable.scrollLeft;
  var bottom = top + closestScrollable.scrollHeight;
  var right = left + closestScrollable.scrollWidth;
  var paddingBox = {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
  var borderBox = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand)(paddingBox, base.border);
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.createBox)({
    borderBox: borderBox,
    margin: base.margin,
    border: base.border,
    padding: base.padding
  });
  return client;
};

var getDimension = (function (_ref) {
  var ref = _ref.ref,
      descriptor = _ref.descriptor,
      env = _ref.env,
      windowScroll = _ref.windowScroll,
      direction = _ref.direction,
      isDropDisabled = _ref.isDropDisabled,
      isCombineEnabled = _ref.isCombineEnabled,
      shouldClipSubject = _ref.shouldClipSubject;
  var closestScrollable = env.closestScrollable;
  var client = getClient(ref, closestScrollable);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);

  var closest = function () {
    if (!closestScrollable) {
      return null;
    }

    var frameClient = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox)(closestScrollable);
    var scrollSize = {
      scrollHeight: closestScrollable.scrollHeight,
      scrollWidth: closestScrollable.scrollWidth
    };
    return {
      client: frameClient,
      page: (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(frameClient, windowScroll),
      scroll: getScroll$1(closestScrollable),
      scrollSize: scrollSize,
      shouldClipSubject: shouldClipSubject
    };
  }();

  var dimension = getDroppableDimension({
    descriptor: descriptor,
    isEnabled: !isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    isFixedOnPage: env.isFixedOnPage,
    direction: direction,
    client: client,
    page: page,
    closest: closest
  });
  return dimension;
});

var immediate = {
  passive: false
};
var delayed = {
  passive: true
};
var getListenerOptions = (function (options) {
  return options.shouldPublishImmediately ? immediate : delayed;
});

function useRequiredContext(Context) {
  var result = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  !result ?  true ? invariant(false, 'Could not find required context') : 0 : void 0;
  return result;
}

var getClosestScrollableFromDrag = function getClosestScrollableFromDrag(dragging) {
  return dragging && dragging.env.closestScrollable || null;
};

function useDroppablePublisher(args) {
  var whileDraggingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var appContext = useRequiredContext(AppContext);
  var uniqueId = useUniqueId('droppable');
  var registry = appContext.registry,
      marshal = appContext.marshal;
  var previousRef = usePrevious(args);
  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: args.droppableId,
      type: args.type,
      mode: args.mode
    };
  }, [args.droppableId, args.mode, args.type]);
  var publishedDescriptorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(descriptor);
  var memoizedUpdateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
      !whileDraggingRef.current ?  true ? invariant(false, 'Can only update scroll when dragging') : 0 : void 0;
      var scroll = {
        x: x,
        y: y
      };
      marshal.updateDroppableScroll(descriptor.id, scroll);
    });
  }, [descriptor.id, marshal]);
  var getClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;

    if (!dragging || !dragging.env.closestScrollable) {
      return origin;
    }

    return getScroll$1(dragging.env.closestScrollable);
  }, []);
  var updateScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var scroll = getClosestScroll();
    memoizedUpdateScroll(scroll.x, scroll.y);
  }, [getClosestScroll, memoizedUpdateScroll]);
  var scheduleScrollUpdate = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return (0,raf_schd__WEBPACK_IMPORTED_MODULE_7__["default"])(updateScroll);
  }, [updateScroll]);
  var onClosestScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Could not find scroll options while scrolling') : 0 : void 0;
    var options = dragging.scrollOptions;

    if (options.shouldPublishImmediately) {
      updateScroll();
      return;
    }

    scheduleScrollUpdate();
  }, [scheduleScrollUpdate, updateScroll]);
  var getDimensionAndWatchScroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll, options) {
    !!whileDraggingRef.current ?  true ? invariant(false, 'Cannot collect a droppable while a drag is occurring') : 0 : void 0;
    var previous = previousRef.current;
    var ref = previous.getDroppableRef();
    !ref ?  true ? invariant(false, 'Cannot collect without a droppable ref') : 0 : void 0;
    var env = getEnv(ref);
    var dragging = {
      ref: ref,
      descriptor: descriptor,
      env: env,
      scrollOptions: options
    };
    whileDraggingRef.current = dragging;
    var dimension = getDimension({
      ref: ref,
      descriptor: descriptor,
      env: env,
      windowScroll: windowScroll,
      direction: previous.direction,
      isDropDisabled: previous.isDropDisabled,
      isCombineEnabled: previous.isCombineEnabled,
      shouldClipSubject: !previous.ignoreContainerClipping
    });
    var scrollable = env.closestScrollable;

    if (scrollable) {
      scrollable.setAttribute(scrollContainer.contextId, appContext.contextId);
      scrollable.addEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));

      if (true) {
        checkForNestedScrollContainers(scrollable);
      }
    }

    return dimension;
  }, [appContext.contextId, descriptor, onClosestScroll, previousRef]);
  var getScrollWhileDragging = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    var closest = getClosestScrollableFromDrag(dragging);
    !(dragging && closest) ?  true ? invariant(false, 'Can only recollect Droppable client for Droppables that have a scroll container') : 0 : void 0;
    return getScroll$1(closest);
  }, []);
  var dragStopped = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot stop drag when no active drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    whileDraggingRef.current = null;

    if (!closest) {
      return;
    }

    scheduleScrollUpdate.cancel();
    closest.removeAttribute(scrollContainer.contextId);
    closest.removeEventListener('scroll', onClosestScroll, getListenerOptions(dragging.scrollOptions));
  }, [onClosestScroll, scheduleScrollUpdate]);
  var scroll = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (change) {
    var dragging = whileDraggingRef.current;
    !dragging ?  true ? invariant(false, 'Cannot scroll when there is no drag') : 0 : void 0;
    var closest = getClosestScrollableFromDrag(dragging);
    !closest ?  true ? invariant(false, 'Cannot scroll a droppable with no closest scrollable') : 0 : void 0;
    closest.scrollTop += change.y;
    closest.scrollLeft += change.x;
  }, []);
  var callbacks = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      getDimensionAndWatchScroll: getDimensionAndWatchScroll,
      getScrollWhileDragging: getScrollWhileDragging,
      dragStopped: dragStopped,
      scroll: scroll
    };
  }, [dragStopped, getDimensionAndWatchScroll, getScrollWhileDragging, scroll]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      callbacks: callbacks
    };
  }, [callbacks, descriptor, uniqueId]);
  useIsomorphicLayoutEffect(function () {
    publishedDescriptorRef.current = entry.descriptor;
    registry.droppable.register(entry);
    return function () {
      if (whileDraggingRef.current) {
         true ? warning('Unsupported: changing the droppableId or type of a Droppable during a drag') : 0;
        dragStopped();
      }

      registry.droppable.unregister(entry);
    };
  }, [callbacks, descriptor, dragStopped, entry, marshal, registry.droppable]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsEnabled(publishedDescriptorRef.current.id, !args.isDropDisabled);
  }, [args.isDropDisabled, marshal]);
  useIsomorphicLayoutEffect(function () {
    if (!whileDraggingRef.current) {
      return;
    }

    marshal.updateDroppableIsCombineEnabled(publishedDescriptorRef.current.id, args.isCombineEnabled);
  }, [args.isCombineEnabled, marshal]);
}

function noop$2() {}

var empty = {
  width: 0,
  height: 0,
  margin: noSpacing
};

var getSize = function getSize(_ref) {
  var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
      placeholder = _ref.placeholder,
      animate = _ref.animate;

  if (isAnimatingOpenOnMount) {
    return empty;
  }

  if (animate === 'close') {
    return empty;
  }

  return {
    height: placeholder.client.borderBox.height,
    width: placeholder.client.borderBox.width,
    margin: placeholder.client.margin
  };
};

var getStyle = function getStyle(_ref2) {
  var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
      placeholder = _ref2.placeholder,
      animate = _ref2.animate;
  var size = getSize({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    placeholder: placeholder,
    animate: animate
  });
  return {
    display: placeholder.display,
    boxSizing: 'border-box',
    width: size.width,
    height: size.height,
    marginTop: size.margin.top,
    marginRight: size.margin.right,
    marginBottom: size.margin.bottom,
    marginLeft: size.margin.left,
    flexShrink: '0',
    flexGrow: '0',
    pointerEvents: 'none',
    transition: animate !== 'none' ? transitions.placeholder : null
  };
};

function Placeholder(props) {
  var animateOpenTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tryClearAnimateOpenTimer = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (!animateOpenTimerRef.current) {
      return;
    }

    clearTimeout(animateOpenTimerRef.current);
    animateOpenTimerRef.current = null;
  }, []);
  var animate = props.animate,
      onTransitionEnd = props.onTransitionEnd,
      onClose = props.onClose,
      contextId = props.contextId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.animate === 'open'),
      isAnimatingOpenOnMount = _useState[0],
      setIsAnimatingOpenOnMount = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isAnimatingOpenOnMount) {
      return noop$2;
    }

    if (animate !== 'open') {
      tryClearAnimateOpenTimer();
      setIsAnimatingOpenOnMount(false);
      return noop$2;
    }

    if (animateOpenTimerRef.current) {
      return noop$2;
    }

    animateOpenTimerRef.current = setTimeout(function () {
      animateOpenTimerRef.current = null;
      setIsAnimatingOpenOnMount(false);
    });
    return tryClearAnimateOpenTimer;
  }, [animate, isAnimatingOpenOnMount, tryClearAnimateOpenTimer]);
  var onSizeChangeEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (event.propertyName !== 'height') {
      return;
    }

    onTransitionEnd();

    if (animate === 'close') {
      onClose();
    }
  }, [animate, onClose, onTransitionEnd]);
  var style = getStyle({
    isAnimatingOpenOnMount: isAnimatingOpenOnMount,
    animate: props.animate,
    placeholder: props.placeholder
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(props.placeholder.tagName, {
    style: style,
    'data-rbd-placeholder-context-id': contextId,
    onTransitionEnd: onSizeChangeEnd,
    ref: props.innerRef
  });
}

var Placeholder$1 = react__WEBPACK_IMPORTED_MODULE_0___default().memo(Placeholder);

var DroppableContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

function checkIsValidInnerRef(el) {
  !(el && isHtmlElement(el)) ?  true ? invariant(false, "\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  ") : 0 : void 0;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function runChecks(args, checks) {
  checks.forEach(function (check) {
    return check(args);
  });
}

var shared = [function required(_ref) {
  var props = _ref.props;
  !props.droppableId ?  true ? invariant(false, 'A Droppable requires a droppableId prop') : 0 : void 0;
  !(typeof props.droppableId === 'string') ?  true ? invariant(false, "A Droppable requires a [string] droppableId. Provided: [" + typeof props.droppableId + "]") : 0 : void 0;
}, function _boolean(_ref2) {
  var props = _ref2.props;
  !isBoolean(props.isDropDisabled) ?  true ? invariant(false, 'isDropDisabled must be a boolean') : 0 : void 0;
  !isBoolean(props.isCombineEnabled) ?  true ? invariant(false, 'isCombineEnabled must be a boolean') : 0 : void 0;
  !isBoolean(props.ignoreContainerClipping) ?  true ? invariant(false, 'ignoreContainerClipping must be a boolean') : 0 : void 0;
}, function ref(_ref3) {
  var getDroppableRef = _ref3.getDroppableRef;
  checkIsValidInnerRef(getDroppableRef());
}];
var standard = [function placeholder(_ref4) {
  var props = _ref4.props,
      getPlaceholderRef = _ref4.getPlaceholderRef;

  if (!props.placeholder) {
    return;
  }

  var ref = getPlaceholderRef();

  if (ref) {
    return;
  }

   true ? warning("\n      Droppable setup issue [droppableId: \"" + props.droppableId + "\"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    ") : 0;
}];
var virtual = [function hasClone(_ref5) {
  var props = _ref5.props;
  !props.renderClone ?  true ? invariant(false, 'Must provide a clone render function (renderClone) for virtual lists') : 0 : void 0;
}, function hasNoPlaceholder(_ref6) {
  var getPlaceholderRef = _ref6.getPlaceholderRef;
  !!getPlaceholderRef() ?  true ? invariant(false, 'Expected virtual list to not have a placeholder') : 0 : void 0;
}];
function useValidation(args) {
  useDevSetupWarning(function () {
    runChecks(args, shared);

    if (args.props.mode === 'standard') {
      runChecks(args, standard);
    }

    if (args.props.mode === 'virtual') {
      runChecks(args, virtual);
    }
  });
}

var AnimateInOut = function (_React$PureComponent) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(AnimateInOut, _React$PureComponent);

  function AnimateInOut() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.state = {
      isVisible: Boolean(_this.props.on),
      data: _this.props.on,
      animate: _this.props.shouldAnimate && _this.props.on ? 'open' : 'none'
    };

    _this.onClose = function () {
      if (_this.state.animate !== 'close') {
        return;
      }

      _this.setState({
        isVisible: false
      });
    };

    return _this;
  }

  AnimateInOut.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (!props.shouldAnimate) {
      return {
        isVisible: Boolean(props.on),
        data: props.on,
        animate: 'none'
      };
    }

    if (props.on) {
      return {
        isVisible: true,
        data: props.on,
        animate: 'open'
      };
    }

    if (state.isVisible) {
      return {
        isVisible: true,
        data: state.data,
        animate: 'close'
      };
    }

    return {
      isVisible: false,
      animate: 'close',
      data: null
    };
  };

  var _proto = AnimateInOut.prototype;

  _proto.render = function render() {
    if (!this.state.isVisible) {
      return null;
    }

    var provided = {
      onClose: this.onClose,
      data: this.state.data,
      animate: this.state.animate
    };
    return this.props.children(provided);
  };

  return AnimateInOut;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

var zIndexOptions = {
  dragging: 5000,
  dropAnimating: 4500
};

var getDraggingTransition = function getDraggingTransition(shouldAnimateDragMovement, dropping) {
  if (dropping) {
    return transitions.drop(dropping.duration);
  }

  if (shouldAnimateDragMovement) {
    return transitions.snap;
  }

  return transitions.fluid;
};

var getDraggingOpacity = function getDraggingOpacity(isCombining, isDropAnimating) {
  if (!isCombining) {
    return null;
  }

  return isDropAnimating ? combine.opacity.drop : combine.opacity.combining;
};

var getShouldDraggingAnimate = function getShouldDraggingAnimate(dragging) {
  if (dragging.forceShouldAnimate != null) {
    return dragging.forceShouldAnimate;
  }

  return dragging.mode === 'SNAP';
};

function getDraggingStyle(dragging) {
  var dimension = dragging.dimension;
  var box = dimension.client;
  var offset = dragging.offset,
      combineWith = dragging.combineWith,
      dropping = dragging.dropping;
  var isCombining = Boolean(combineWith);
  var shouldAnimate = getShouldDraggingAnimate(dragging);
  var isDropAnimating = Boolean(dropping);
  var transform = isDropAnimating ? transforms.drop(offset, isCombining) : transforms.moveTo(offset);
  var style = {
    position: 'fixed',
    top: box.marginBox.top,
    left: box.marginBox.left,
    boxSizing: 'border-box',
    width: box.borderBox.width,
    height: box.borderBox.height,
    transition: getDraggingTransition(shouldAnimate, dropping),
    transform: transform,
    opacity: getDraggingOpacity(isCombining, isDropAnimating),
    zIndex: isDropAnimating ? zIndexOptions.dropAnimating : zIndexOptions.dragging,
    pointerEvents: 'none'
  };
  return style;
}

function getSecondaryStyle(secondary) {
  return {
    transform: transforms.moveTo(secondary.offset),
    transition: secondary.shouldAnimateDisplacement ? null : 'none'
  };
}

function getStyle$1(mapped) {
  return mapped.type === 'DRAGGING' ? getDraggingStyle(mapped) : getSecondaryStyle(mapped);
}

function getDimension$1(descriptor, el, windowScroll) {
  if (windowScroll === void 0) {
    windowScroll = origin;
  }

  var computedStyles = window.getComputedStyle(el);
  var borderBox = el.getBoundingClientRect();
  var client = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.calculateBox)(borderBox, computedStyles);
  var page = (0,css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll)(client, windowScroll);
  var placeholder = {
    client: client,
    tagName: el.tagName.toLowerCase(),
    display: computedStyles.display
  };
  var displaceBy = {
    x: client.marginBox.width,
    y: client.marginBox.height
  };
  var dimension = {
    descriptor: descriptor,
    placeholder: placeholder,
    displaceBy: displaceBy,
    client: client,
    page: page
  };
  return dimension;
}

function useDraggablePublisher(args) {
  var uniqueId = useUniqueId('draggable');
  var descriptor = args.descriptor,
      registry = args.registry,
      getDraggableRef = args.getDraggableRef,
      canDragInteractiveElements = args.canDragInteractiveElements,
      shouldRespectForcePress = args.shouldRespectForcePress,
      isEnabled = args.isEnabled;
  var options = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      canDragInteractiveElements: canDragInteractiveElements,
      shouldRespectForcePress: shouldRespectForcePress,
      isEnabled: isEnabled
    };
  }, [canDragInteractiveElements, isEnabled, shouldRespectForcePress]);
  var getDimension = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (windowScroll) {
    var el = getDraggableRef();
    !el ?  true ? invariant(false, 'Cannot get dimension when no ref is set') : 0 : void 0;
    return getDimension$1(descriptor, el, windowScroll);
  }, [descriptor, getDraggableRef]);
  var entry = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      uniqueId: uniqueId,
      descriptor: descriptor,
      options: options,
      getDimension: getDimension
    };
  }, [descriptor, getDimension, options, uniqueId]);
  var publishedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(entry);
  var isFirstPublishRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  useIsomorphicLayoutEffect(function () {
    registry.draggable.register(publishedRef.current);
    return function () {
      return registry.draggable.unregister(publishedRef.current);
    };
  }, [registry.draggable]);
  useIsomorphicLayoutEffect(function () {
    if (isFirstPublishRef.current) {
      isFirstPublishRef.current = false;
      return;
    }

    var last = publishedRef.current;
    publishedRef.current = entry;
    registry.draggable.update(entry, last);
  }, [entry, registry.draggable]);
}

function useValidation$1(props, contextId, getRef) {
  useDevSetupWarning(function () {
    function prefix(id) {
      return "Draggable[id: " + id + "]: ";
    }

    var id = props.draggableId;
    !id ?  true ? invariant(false, 'Draggable requires a draggableId') : 0 : void 0;
    !(typeof id === 'string') ?  true ? invariant(false, "Draggable requires a [string] draggableId.\n      Provided: [type: " + typeof id + "] (value: " + id + ")") : 0 : void 0;
    !isInteger(props.index) ?  true ? invariant(false, prefix(id) + " requires an integer index prop") : 0 : void 0;

    if (props.mapped.type === 'DRAGGING') {
      return;
    }

    checkIsValidInnerRef(getRef());

    if (props.isEnabled) {
      !findDragHandle(contextId, id) ?  true ? invariant(false, prefix(id) + " Unable to find drag handle") : 0 : void 0;
    }
  });
}
function useClonePropValidation(isClone) {
  useDev(function () {
    var initialRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isClone);
    useDevSetupWarning(function () {
      !(isClone === initialRef.current) ?  true ? invariant(false, 'Draggable isClone prop value changed during component life') : 0 : void 0;
    }, [isClone]);
  });
}

function preventHtml5Dnd(event) {
  event.preventDefault();
}

function Draggable(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var setRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (el) {
    ref.current = el;
  }, []);
  var getRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return ref.current;
  }, []);

  var _useRequiredContext = useRequiredContext(AppContext),
      contextId = _useRequiredContext.contextId,
      dragHandleUsageInstructionsId = _useRequiredContext.dragHandleUsageInstructionsId,
      registry = _useRequiredContext.registry;

  var _useRequiredContext2 = useRequiredContext(DroppableContext),
      type = _useRequiredContext2.type,
      droppableId = _useRequiredContext2.droppableId;

  var descriptor = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      id: props.draggableId,
      index: props.index,
      type: type,
      droppableId: droppableId
    };
  }, [props.draggableId, props.index, type, droppableId]);
  var children = props.children,
      draggableId = props.draggableId,
      isEnabled = props.isEnabled,
      shouldRespectForcePress = props.shouldRespectForcePress,
      canDragInteractiveElements = props.canDragInteractiveElements,
      isClone = props.isClone,
      mapped = props.mapped,
      dropAnimationFinishedAction = props.dropAnimationFinished;
  useValidation$1(props, contextId, getRef);
  useClonePropValidation(isClone);

  if (!isClone) {
    var forPublisher = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
      return {
        descriptor: descriptor,
        registry: registry,
        getDraggableRef: getRef,
        canDragInteractiveElements: canDragInteractiveElements,
        shouldRespectForcePress: shouldRespectForcePress,
        isEnabled: isEnabled
      };
    }, [descriptor, registry, getRef, canDragInteractiveElements, shouldRespectForcePress, isEnabled]);
    useDraggablePublisher(forPublisher);
  }

  var dragHandleProps = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return isEnabled ? {
      tabIndex: 0,
      role: 'button',
      'aria-describedby': dragHandleUsageInstructionsId,
      'data-rbd-drag-handle-draggable-id': draggableId,
      'data-rbd-drag-handle-context-id': contextId,
      draggable: false,
      onDragStart: preventHtml5Dnd
    } : null;
  }, [contextId, dragHandleUsageInstructionsId, draggableId, isEnabled]);
  var onMoveEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (event) {
    if (mapped.type !== 'DRAGGING') {
      return;
    }

    if (!mapped.dropping) {
      return;
    }

    if (event.propertyName !== 'transform') {
      return;
    }

    dropAnimationFinishedAction();
  }, [dropAnimationFinishedAction, mapped]);
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    var style = getStyle$1(mapped);
    var onTransitionEnd = mapped.type === 'DRAGGING' && mapped.dropping ? onMoveEnd : null;
    var result = {
      innerRef: setRef,
      draggableProps: {
        'data-rbd-draggable-context-id': contextId,
        'data-rbd-draggable-id': draggableId,
        style: style,
        onTransitionEnd: onTransitionEnd
      },
      dragHandleProps: dragHandleProps
    };
    return result;
  }, [contextId, dragHandleProps, draggableId, mapped, onMoveEnd, setRef]);
  var rubric = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  }, [descriptor.droppableId, descriptor.id, descriptor.index, descriptor.type]);
  return children(provided, mapped.snapshot, rubric);
}

var isStrictEqual = (function (a, b) {
  return a === b;
});

var whatIsDraggedOverFromResult = (function (result) {
  var combine = result.combine,
      destination = result.destination;

  if (destination) {
    return destination.droppableId;
  }

  if (combine) {
    return combine.droppableId;
  }

  return null;
});

var getCombineWithFromResult = function getCombineWithFromResult(result) {
  return result.combine ? result.combine.draggableId : null;
};

var getCombineWithFromImpact = function getCombineWithFromImpact(impact) {
  return impact.at && impact.at.type === 'COMBINE' ? impact.at.combine.draggableId : null;
};

function getDraggableSelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (mode, isClone, draggingOver, combineWith, dropping) {
    return {
      isDragging: true,
      isClone: isClone,
      isDropAnimating: Boolean(dropping),
      dropAnimation: dropping,
      mode: mode,
      draggingOver: draggingOver,
      combineWith: combineWith,
      combineTargetFor: null
    };
  });
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, mode, dimension, isClone, draggingOver, combineWith, forceShouldAnimate) {
    return {
      mapped: {
        type: 'DRAGGING',
        dropping: null,
        draggingOver: draggingOver,
        combineWith: combineWith,
        mode: mode,
        offset: offset,
        dimension: dimension,
        forceShouldAnimate: forceShouldAnimate,
        snapshot: getMemoizedSnapshot(mode, isClone, draggingOver, combineWith, null)
      }
    };
  });

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id !== ownProps.draggableId) {
        return null;
      }

      var offset = state.current.client.offset;
      var dimension = state.dimensions.draggables[ownProps.draggableId];
      var draggingOver = whatIsDraggedOver(state.impact);
      var combineWith = getCombineWithFromImpact(state.impact);
      var forceShouldAnimate = state.forceShouldAnimate;
      return getMemoizedProps(memoizedOffset(offset.x, offset.y), state.movementMode, dimension, ownProps.isClone, draggingOver, combineWith, forceShouldAnimate);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId !== ownProps.draggableId) {
        return null;
      }

      var isClone = ownProps.isClone;
      var _dimension = state.dimensions.draggables[ownProps.draggableId];
      var result = completed.result;
      var mode = result.mode;

      var _draggingOver = whatIsDraggedOverFromResult(result);

      var _combineWith = getCombineWithFromResult(result);

      var duration = state.dropDuration;
      var dropping = {
        duration: duration,
        curve: curves.drop,
        moveTo: state.newHomeClientOffset,
        opacity: _combineWith ? combine.opacity.drop : null,
        scale: _combineWith ? combine.scale.drop : null
      };
      return {
        mapped: {
          type: 'DRAGGING',
          offset: state.newHomeClientOffset,
          dimension: _dimension,
          dropping: dropping,
          draggingOver: _draggingOver,
          combineWith: _combineWith,
          mode: mode,
          forceShouldAnimate: null,
          snapshot: getMemoizedSnapshot(mode, isClone, _draggingOver, _combineWith, dropping)
        }
      };
    }

    return null;
  };

  return selector;
}

function getSecondarySnapshot(combineTargetFor) {
  return {
    isDragging: false,
    isDropAnimating: false,
    isClone: false,
    dropAnimation: null,
    mode: null,
    draggingOver: null,
    combineTargetFor: combineTargetFor,
    combineWith: null
  };
}

var atRest = {
  mapped: {
    type: 'SECONDARY',
    offset: origin,
    combineTargetFor: null,
    shouldAnimateDisplacement: true,
    snapshot: getSecondarySnapshot(null)
  }
};

function getSecondarySelector() {
  var memoizedOffset = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (x, y) {
    return {
      x: x,
      y: y
    };
  });
  var getMemoizedSnapshot = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(getSecondarySnapshot);
  var getMemoizedProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (offset, combineTargetFor, shouldAnimateDisplacement) {
    if (combineTargetFor === void 0) {
      combineTargetFor = null;
    }

    return {
      mapped: {
        type: 'SECONDARY',
        offset: offset,
        combineTargetFor: combineTargetFor,
        shouldAnimateDisplacement: shouldAnimateDisplacement,
        snapshot: getMemoizedSnapshot(combineTargetFor)
      }
    };
  });

  var getFallback = function getFallback(combineTargetFor) {
    return combineTargetFor ? getMemoizedProps(origin, combineTargetFor, true) : null;
  };

  var getProps = function getProps(ownId, draggingId, impact, afterCritical) {
    var visualDisplacement = impact.displaced.visible[ownId];
    var isAfterCriticalInVirtualList = Boolean(afterCritical.inVirtualList && afterCritical.effected[ownId]);
    var combine = tryGetCombine(impact);
    var combineTargetFor = combine && combine.draggableId === ownId ? draggingId : null;

    if (!visualDisplacement) {
      if (!isAfterCriticalInVirtualList) {
        return getFallback(combineTargetFor);
      }

      if (impact.displaced.invisible[ownId]) {
        return null;
      }

      var change = negate(afterCritical.displacedBy.point);

      var _offset = memoizedOffset(change.x, change.y);

      return getMemoizedProps(_offset, combineTargetFor, true);
    }

    if (isAfterCriticalInVirtualList) {
      return getFallback(combineTargetFor);
    }

    var displaceBy = impact.displacedBy.point;
    var offset = memoizedOffset(displaceBy.x, displaceBy.y);
    return getMemoizedProps(offset, combineTargetFor, visualDisplacement.shouldAnimate);
  };

  var selector = function selector(state, ownProps) {
    if (state.isDragging) {
      if (state.critical.draggable.id === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, state.critical.draggable.id, state.impact, state.afterCritical);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (completed.result.draggableId === ownProps.draggableId) {
        return null;
      }

      return getProps(ownProps.draggableId, completed.result.draggableId, completed.impact, completed.afterCritical);
    }

    return null;
  };

  return selector;
}

var makeMapStateToProps = function makeMapStateToProps() {
  var draggingSelector = getDraggableSelector();
  var secondarySelector = getSecondarySelector();

  var selector = function selector(state, ownProps) {
    return draggingSelector(state, ownProps) || secondarySelector(state, ownProps) || atRest;
  };

  return selector;
};
var mapDispatchToProps = {
  dropAnimationFinished: dropAnimationFinished
};
var ConnectedDraggable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps, mapDispatchToProps, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Draggable);

function PrivateDraggable(props) {
  var droppableContext = useRequiredContext(DroppableContext);
  var isUsingCloneFor = droppableContext.isUsingCloneFor;

  if (isUsingCloneFor === props.draggableId && !props.isClone) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConnectedDraggable, props);
}
function PublicDraggable(props) {
  var isEnabled = typeof props.isDragDisabled === 'boolean' ? !props.isDragDisabled : true;
  var canDragInteractiveElements = Boolean(props.disableInteractiveElementBlocking);
  var shouldRespectForcePress = Boolean(props.shouldRespectForcePress);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivateDraggable, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    isClone: false,
    isEnabled: isEnabled,
    canDragInteractiveElements: canDragInteractiveElements,
    shouldRespectForcePress: shouldRespectForcePress
  }));
}

function Droppable(props) {
  var appContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AppContext);
  !appContext ?  true ? invariant(false, 'Could not find app context') : 0 : void 0;
  var contextId = appContext.contextId,
      isMovementAllowed = appContext.isMovementAllowed;
  var droppableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var children = props.children,
      droppableId = props.droppableId,
      type = props.type,
      mode = props.mode,
      direction = props.direction,
      ignoreContainerClipping = props.ignoreContainerClipping,
      isDropDisabled = props.isDropDisabled,
      isCombineEnabled = props.isCombineEnabled,
      snapshot = props.snapshot,
      useClone = props.useClone,
      updateViewportMaxScroll = props.updateViewportMaxScroll,
      getContainerForClone = props.getContainerForClone;
  var getDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return droppableRef.current;
  }, []);
  var setDroppableRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    droppableRef.current = value;
  }, []);
  var getPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    return placeholderRef.current;
  }, []);
  var setPlaceholderRef = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function (value) {
    placeholderRef.current = value;
  }, []);
  useValidation({
    props: props,
    getDroppableRef: getDroppableRef,
    getPlaceholderRef: getPlaceholderRef
  });
  var onPlaceholderTransitionEnd = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback)(function () {
    if (isMovementAllowed()) {
      updateViewportMaxScroll({
        maxScroll: getMaxWindowScroll()
      });
    }
  }, [isMovementAllowed, updateViewportMaxScroll]);
  useDroppablePublisher({
    droppableId: droppableId,
    type: type,
    mode: mode,
    direction: direction,
    isDropDisabled: isDropDisabled,
    isCombineEnabled: isCombineEnabled,
    ignoreContainerClipping: ignoreContainerClipping,
    getDroppableRef: getDroppableRef
  });
  var placeholder = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AnimateInOut, {
    on: props.placeholder,
    shouldAnimate: props.shouldAnimatePlaceholder
  }, function (_ref) {
    var onClose = _ref.onClose,
        data = _ref.data,
        animate = _ref.animate;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Placeholder$1, {
      placeholder: data,
      onClose: onClose,
      innerRef: setPlaceholderRef,
      animate: animate,
      contextId: contextId,
      onTransitionEnd: onPlaceholderTransitionEnd
    });
  });
  var provided = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      innerRef: setDroppableRef,
      placeholder: placeholder,
      droppableProps: {
        'data-rbd-droppable-id': droppableId,
        'data-rbd-droppable-context-id': contextId
      }
    };
  }, [contextId, droppableId, placeholder, setDroppableRef]);
  var isUsingCloneFor = useClone ? useClone.dragging.draggableId : null;
  var droppableContext = (0,use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo)(function () {
    return {
      droppableId: droppableId,
      type: type,
      isUsingCloneFor: isUsingCloneFor
    };
  }, [droppableId, isUsingCloneFor, type]);

  function getClone() {
    if (!useClone) {
      return null;
    }

    var dragging = useClone.dragging,
        render = useClone.render;
    var node = react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrivateDraggable, {
      draggableId: dragging.draggableId,
      index: dragging.source.index,
      isClone: true,
      isEnabled: true,
      shouldRespectForcePress: false,
      canDragInteractiveElements: true
    }, function (draggableProvided, draggableSnapshot) {
      return render(draggableProvided, draggableSnapshot, dragging);
    });
    return react_dom__WEBPACK_IMPORTED_MODULE_4___default().createPortal(node, getContainerForClone());
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DroppableContext.Provider, {
    value: droppableContext
  }, children(provided, snapshot), getClone());
}

var isMatchingType = function isMatchingType(type, critical) {
  return type === critical.droppable.type;
};

var getDraggable = function getDraggable(critical, dimensions) {
  return dimensions.draggables[critical.draggable.id];
};

var makeMapStateToProps$1 = function makeMapStateToProps() {
  var idleWithAnimation = {
    placeholder: null,
    shouldAnimatePlaceholder: true,
    snapshot: {
      isDraggingOver: false,
      draggingOverWith: null,
      draggingFromThisWith: null,
      isUsingPlaceholder: false
    },
    useClone: null
  };

  var idleWithoutAnimation = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, idleWithAnimation, {
    shouldAnimatePlaceholder: false
  });

  var getDraggableRubric = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (descriptor) {
    return {
      draggableId: descriptor.id,
      type: descriptor.type,
      source: {
        index: descriptor.index,
        droppableId: descriptor.droppableId
      }
    };
  });
  var getMapProps = (0,memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (id, isEnabled, isDraggingOverForConsumer, isDraggingOverForImpact, dragging, renderClone) {
    var draggableId = dragging.descriptor.id;
    var isHome = dragging.descriptor.droppableId === id;

    if (isHome) {
      var useClone = renderClone ? {
        render: renderClone,
        dragging: getDraggableRubric(dragging.descriptor)
      } : null;
      var _snapshot = {
        isDraggingOver: isDraggingOverForConsumer,
        draggingOverWith: isDraggingOverForConsumer ? draggableId : null,
        draggingFromThisWith: draggableId,
        isUsingPlaceholder: true
      };
      return {
        placeholder: dragging.placeholder,
        shouldAnimatePlaceholder: false,
        snapshot: _snapshot,
        useClone: useClone
      };
    }

    if (!isEnabled) {
      return idleWithoutAnimation;
    }

    if (!isDraggingOverForImpact) {
      return idleWithAnimation;
    }

    var snapshot = {
      isDraggingOver: isDraggingOverForConsumer,
      draggingOverWith: draggableId,
      draggingFromThisWith: null,
      isUsingPlaceholder: true
    };
    return {
      placeholder: dragging.placeholder,
      shouldAnimatePlaceholder: true,
      snapshot: snapshot,
      useClone: null
    };
  });

  var selector = function selector(state, ownProps) {
    var id = ownProps.droppableId;
    var type = ownProps.type;
    var isEnabled = !ownProps.isDropDisabled;
    var renderClone = ownProps.renderClone;

    if (state.isDragging) {
      var critical = state.critical;

      if (!isMatchingType(type, critical)) {
        return idleWithoutAnimation;
      }

      var dragging = getDraggable(critical, state.dimensions);
      var isDraggingOver = whatIsDraggedOver(state.impact) === id;
      return getMapProps(id, isEnabled, isDraggingOver, isDraggingOver, dragging, renderClone);
    }

    if (state.phase === 'DROP_ANIMATING') {
      var completed = state.completed;

      if (!isMatchingType(type, completed.critical)) {
        return idleWithoutAnimation;
      }

      var _dragging = getDraggable(completed.critical, state.dimensions);

      return getMapProps(id, isEnabled, whatIsDraggedOverFromResult(completed.result) === id, whatIsDraggedOver(completed.impact) === id, _dragging, renderClone);
    }

    if (state.phase === 'IDLE' && state.completed && !state.shouldFlush) {
      var _completed = state.completed;

      if (!isMatchingType(type, _completed.critical)) {
        return idleWithoutAnimation;
      }

      var wasOver = whatIsDraggedOver(_completed.impact) === id;
      var wasCombining = Boolean(_completed.impact.at && _completed.impact.at.type === 'COMBINE');
      var isHome = _completed.critical.droppable.id === id;

      if (wasOver) {
        return wasCombining ? idleWithAnimation : idleWithoutAnimation;
      }

      if (isHome) {
        return idleWithAnimation;
      }

      return idleWithoutAnimation;
    }

    return idleWithoutAnimation;
  };

  return selector;
};
var mapDispatchToProps$1 = {
  updateViewportMaxScroll: updateViewportMaxScroll
};

function getBody() {
  !document.body ?  true ? invariant(false, 'document.body is not ready') : 0 : void 0;
  return document.body;
}

var defaultProps = {
  mode: 'standard',
  type: 'DEFAULT',
  direction: 'vertical',
  isDropDisabled: false,
  isCombineEnabled: false,
  ignoreContainerClipping: false,
  renderClone: null,
  getContainerForClone: getBody
};
var ConnectedDroppable = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(makeMapStateToProps$1, mapDispatchToProps$1, null, {
  context: StoreContext,
  pure: true,
  areStatePropsEqual: isStrictEqual
})(Droppable);
ConnectedDroppable.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-beautiful-dnd/node_modules/redux/es/redux.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/node_modules/redux/es/redux.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DO_NOT_USE__ActionTypes: () => (/* binding */ ActionTypes),
/* harmony export */   applyMiddleware: () => (/* binding */ applyMiddleware),
/* harmony export */   bindActionCreators: () => (/* binding */ bindActionCreators),
/* harmony export */   combineReducers: () => (/* binding */ combineReducers),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   legacy_createStore: () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactReduxContext: () => (/* binding */ ReactReduxContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReactReduxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

if (true) {
  ReactReduxContext.displayName = 'ReactRedux';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactReduxContext);

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");






function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store);
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return store.getState();
  }, [store]);
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    var subscription = contextValue.subscription;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, {
    value: contextValue
  }, children);
}

if (true) {
  Provider.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
      subscribe: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
      dispatch: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired,
      getState: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired
    }),
    context: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Provider);

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ connectAdvanced)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-redux/node_modules/react-is/index.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context */ "./node_modules/react-redux/es/components/Context.js");


var _excluded = ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"],
    _excluded2 = ["reactReduxForwardedRef"];





 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect)(function () {
    return effectFunc.apply(void 0, effectArgs);
  }, dependencies);
}

function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  lastChildProps.current = actualChildProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
}

function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

  var didUnsubscribe = false;
  var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  var checkForUpdates = function checkForUpdates() {
    if (didUnsubscribe) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    }

    var latestStoreState = store.getState();
    var newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

      forceComponentUpdateDispatch({
        type: 'STORE_UPDATED',
        payload: {
          error: error
        }
      });
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  var unsubscribeWrapper = function unsubscribeWrapper() {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext : _ref2$context,
      connectOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);

  if (true) {
    if (renderCountProp !== undefined) {
      throw new Error("renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
    }

    if (withRef) {
      throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');
    }

    var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';

    if (storeKey !== 'store') {
      throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
    }
  }

  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if ( true && !(0,react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType)(WrappedComponent)) {
      throw new Error("You must pass a component to the function returned by " + (methodName + ". Instead received " + stringifyComponent(WrappedComponent)));
    }

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_3__.useMemo : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var reactReduxForwardedRef = props.reactReduxForwardedRef,
            wrapperProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded2);

        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          reactReduxForwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && (0,react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {
        throw new Error("Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options."));
      } // Based on the previous check, one of these must be true


      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var subscription = (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.createSubscription)(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.
        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useReducer)(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var lastWrapperProps = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(wrapperProps);
      var childPropsFromStoreUpdate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
      var renderIsScheduled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, actualChildProps, {
          ref: reactReduxForwardedRef
        }));
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_3___default().memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      var forwarded = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(function forwardConnectRef(props, ref) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Connect, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          reactReduxForwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConnect: () => (/* binding */ createConnect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");
/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ "./node_modules/react-redux/es/connect/mapDispatchToProps.js");
/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ "./node_modules/react-redux/es/connect/mapStateToProps.js");
/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ "./node_modules/react-redux/es/connect/mergeProps.js");
/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ "./node_modules/react-redux/es/connect/selectorFactory.js");


var _excluded = ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"];






/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__["default"] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__["default"] : _ref3$areMergedPropsE,
        extraOptions = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, _excluded);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/createConnect());

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapDispatchToPropsIsFunction: () => (/* binding */ whenMapDispatchToPropsIsFunction),
/* harmony export */   whenMapDispatchToPropsIsMissing: () => (/* binding */ whenMapDispatchToPropsIsMissing),
/* harmony export */   whenMapDispatchToPropsIsObject: () => (/* binding */ whenMapDispatchToPropsIsObject)
/* harmony export */ });
/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/bindActionCreators */ "./node_modules/react-redux/es/utils/bindActionCreators.js");
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant)(function (dispatch) {
    return (0,_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__["default"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   whenMapStateToPropsIsFunction: () => (/* binding */ whenMapStateToPropsIsFunction),
/* harmony export */   whenMapStateToPropsIsMissing: () => (/* binding */ whenMapStateToPropsIsMissing)
/* harmony export */ });
/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ "./node_modules/react-redux/es/connect/wrapMapToProps.js");

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0,_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultMergeProps: () => (/* binding */ defaultMergeProps),
/* harmony export */   whenMergePropsIsFunction: () => (/* binding */ whenMergePropsIsFunction),
/* harmony export */   whenMergePropsIsOmitted: () => (/* binding */ whenMergePropsIsOmitted),
/* harmony export */   wrapMergePropsFunc: () => (/* binding */ wrapMergePropsFunc)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ownProps, stateProps, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ finalPropsSelectorFactory),
/* harmony export */   impureFinalPropsSelectorFactory: () => (/* binding */ impureFinalPropsSelectorFactory),
/* harmony export */   pureFinalPropsSelectorFactory: () => (/* binding */ pureFinalPropsSelectorFactory)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ "./node_modules/react-redux/es/connect/verifySubselectors.js");

var _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, _excluded);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    (0,_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__["default"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifySubselectors)
/* harmony export */ });
/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ "./node_modules/react-redux/es/utils/warning.js");


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0,_utils_warning__WEBPACK_IMPORTED_MODULE_0__["default"])("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDependsOnOwnProps: () => (/* binding */ getDependsOnOwnProps),
/* harmony export */   wrapMapToPropsConstant: () => (/* binding */ wrapMapToPropsConstant),
/* harmony export */   wrapMapToPropsFunc: () => (/* binding */ wrapMapToPropsFunc)
/* harmony export */ });
/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ "./node_modules/react-redux/es/utils/verifyPlainObject.js");

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) (0,_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(props, displayName, methodName);
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ "./node_modules/react-redux/es/exports.js":
/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext),
/* harmony export */   connect: () => (/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useDispatch: () => (/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore)
/* harmony export */ });
/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ "./node_modules/react-redux/es/components/Provider.js");
/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ "./node_modules/react-redux/es/components/connectAdvanced.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ "./node_modules/react-redux/es/connect/connect.js");
/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ "./node_modules/react-redux/es/hooks/useDispatch.js");
/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ "./node_modules/react-redux/es/hooks/useSelector.js");
/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ "./node_modules/react-redux/es/hooks/useStore.js");
/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/shallowEqual */ "./node_modules/react-redux/es/utils/shallowEqual.js");










/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDispatchHook: () => (/* binding */ createDispatchHook),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch)
/* harmony export */ });
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ "./node_modules/react-redux/es/hooks/useStore.js");


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
  }

  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext ? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore : (0,_useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook)(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = /*#__PURE__*/createDispatchHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useReduxContext: () => (/* binding */ useReduxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");


/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext() {
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext);

  if ( true && !contextValue) {
    throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  }

  return contextValue;
}

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSelectorHook: () => (/* binding */ createSelectorHook),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");
/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Subscription */ "./node_modules/react-redux/es/utils/Subscription.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js");
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");






var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription)(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelector = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestStoreState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var latestSelectedState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var storeState = store.getState();
  var selectedState;

  try {
    if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {
      var newSelectedState = selector(storeState); // ensure latest selected state is reused so that a custom equality function can result in identical references

      if (latestSelectedState.current === undefined || !equalityFn(newSelectedState, latestSelectedState.current)) {
        selectedState = newSelectedState;
      } else {
        selectedState = latestSelectedState.current;
      }
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    if (latestSubscriptionCallbackError.current) {
      err.message += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\n";
    }

    throw err;
  }

  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    latestSelector.current = selector;
    latestStoreState.current = storeState;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  (0,_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function () {
    function checkForUpdates() {
      try {
        var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed

        if (newStoreState === latestStoreState.current) {
          return;
        }

        var _newSelectedState = latestSelector.current(newStoreState);

        if (equalityFn(_newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = _newSelectedState;
        latestStoreState.current = newStoreState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender();
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    if (true) {
      if (!selector) {
        throw new Error("You must pass a selector to useSelector");
      }

      if (typeof selector !== 'function') {
        throw new Error("You must pass a function as a selector to useSelector");
      }

      if (typeof equalityFn !== 'function') {
        throw new Error("You must pass a function as an equality function to useSelector");
      }
    }

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector = /*#__PURE__*/createSelectorHook();

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStoreHook: () => (/* binding */ createStoreHook),
/* harmony export */   useStore: () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ "./node_modules/react-redux/es/components/Context.js");
/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ "./node_modules/react-redux/es/hooks/useReduxContext.js");



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
  }

  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext : function () {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore = /*#__PURE__*/createStoreHook();

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Provider),
/* harmony export */   ReactReduxContext: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext),
/* harmony export */   batch: () => (/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates),
/* harmony export */   connect: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connect),
/* harmony export */   connectAdvanced: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connectAdvanced),
/* harmony export */   createDispatchHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createDispatchHook),
/* harmony export */   createSelectorHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createSelectorHook),
/* harmony export */   createStoreHook: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createStoreHook),
/* harmony export */   shallowEqual: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.shallowEqual),
/* harmony export */   useDispatch: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useDispatch),
/* harmony export */   useSelector: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useSelector),
/* harmony export */   useStore: () => (/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useStore)
/* harmony export */ });
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports */ "./node_modules/react-redux/es/exports.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/batch */ "./node_modules/react-redux/es/utils/batch.js");


 // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0,_utils_batch__WEBPACK_IMPORTED_MODULE_2__.setBatch)(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates);


/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSubscription: () => (/* binding */ createSubscription)
/* harmony export */ });
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ "./node_modules/react-redux/es/utils/batch.js");
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

function createListenerCollection() {
  var batch = (0,_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch)();
  var first = null;
  var last = null;
  return {
    clear: function clear() {
      first = null;
      last = null;
    },
    notify: function notify() {
      batch(function () {
        var listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get: function get() {
      var listeners = [];
      var listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },
    subscribe: function subscribe(callback) {
      var isSubscribed = true;
      var listener = last = {
        callback: callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}

var nullListeners = {
  notify: function notify() {},
  get: function get() {
    return [];
  }
};
function createSubscription(store, parentSub) {
  var unsubscribe;
  var listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  var subscription = {
    addNestedSub: addNestedSub,
    notifyNestedSubs: notifyNestedSubs,
    handleChangeWrapper: handleChangeWrapper,
    isSubscribed: isSubscribed,
    trySubscribe: trySubscribe,
    tryUnsubscribe: tryUnsubscribe,
    getListeners: function getListeners() {
      return listeners;
    }
  };
  return subscription;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBatch: () => (/* binding */ getBatch),
/* harmony export */   setBatch: () => (/* binding */ setBatch)
/* harmony export */ });
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch;
};

/***/ }),

/***/ "./node_modules/react-redux/es/utils/bindActionCreators.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bindActionCreators)
/* harmony export */ });
function bindActionCreators(actionCreators, dispatch) {
  var boundActionCreators = {};

  var _loop = function _loop(key) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = function () {
        return dispatch(actionCreator.apply(void 0, arguments));
      };
    }
  };

  for (var key in actionCreators) {
    _loop(key);
  }

  return boundActionCreators;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPlainObject)
/* harmony export */ });
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable import/no-unresolved */


/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shallowEqual)
/* harmony export */ });
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ verifyPlainObject)
/* harmony export */ });
/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPlainObject */ "./node_modules/react-redux/es/utils/isPlainObject.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warning */ "./node_modules/react-redux/es/utils/warning.js");


function verifyPlainObject(value, displayName, methodName) {
  if (!(0,_isPlainObject__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    (0,_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ warning)
/* harmony export */ });
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-redux/node_modules/react-is/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/esm/tiny-invariant.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ invariant)
/* harmony export */ });
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}




/***/ }),

/***/ "./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ useCallback),
/* harmony export */   useCallbackOne: () => (/* binding */ useCallbackOne),
/* harmony export */   useMemo: () => (/* binding */ useMemo),
/* harmony export */   useMemoOne: () => (/* binding */ useMemoOne)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}
var useMemo = useMemoOne;
var useCallback = useCallbackOne;




/***/ }),

/***/ "./src/assets/js/blocks-components/TextareaWithFormatting.js":
/*!*******************************************************************!*\
  !*** ./src/assets/js/blocks-components/TextareaWithFormatting.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextareaWithFormatting: () => (/* binding */ TextareaWithFormatting)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const TextareaWithFormatting = ({
  item,
  index,
  updateItem
}) => {
  const [selection, setSelection] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    start: 0,
    end: 0
  });
  const textareaRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const handleSelectionChange = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      setSelection({
        start,
        end
      });
    }
  };
  const wrapSelection = tag => {
    const text = item.description || '';
    const {
      start,
      end
    } = selection;
    if (start === end) return;
    const before = text.slice(0, start);
    const selected = text.slice(start, end);
    const after = text.slice(end);
    let wrapped;
    if (tag === 'a') {
      wrapped = `<a target="_blank" href="#">${selected}</a>`;
    } else {
      wrapped = `<${tag}>${selected}</${tag}>`;
    }
    const newText = before + wrapped + after;
    updateItem(index, {
      pinDescription: newText
    });
    setSelection({
      start: 0,
      end: 0
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: "Description",
    value: item.pinDescription,
    onChange: value => updateItem(index, {
      pinDescription: value
    }),
    onKeyUp: handleSelectionChange,
    onMouseUp: handleSelectionChange,
    ref: textareaRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "components-button is-secondary fw-bold",
    disabled: selection.start === selection.end,
    onClick: () => wrapSelection('strong')
  }, "b"), ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "components-button is-secondary fst-italic",
    disabled: selection.start === selection.end,
    onClick: () => wrapSelection('i')
  }, "i"), ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "components-button is-secondary",
    disabled: selection.start === selection.end,
    onClick: () => wrapSelection('a')
  }, "link"));
};

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*******************************************!*\
  !*** ./src/blocks/m-007-maps-v1/index.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_js_blocks_components_TextareaWithFormatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/js/blocks-components/TextareaWithFormatting */ "./src/assets/js/blocks-components/TextareaWithFormatting.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/esm.js");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)('semdesign/m-007-maps-v1', {
  attributes: {
    image: {
      type: 'object',
      default: {
        url: '',
        alt: ''
      }
    },
    imageLink: {
      type: 'string',
      default: ''
    },
    pins: {
      type: 'array',
      default: []
    },
    customAttributes: {
      type: 'string',
      default: ''
    },
    size: {
      type: 'string',
      default: 'medium'
    },
    zoom: {
      type: 'string',
      default: '2'
    },
    coordinatesCenter: {
      type: 'string',
      default: '0,0'
    },
    topOverlap: {
      type: 'boolean',
      default: false
    },
    textColor: {
      type: 'string',
      default: 'ho-text-color-default'
    },
    bgColor: {
      type: 'string',
      default: 'ho-bg-color-default'
    }
  },
  edit: props => {
    const {
      attributes: {
        image,
        imageLink = '',
        pins = [],
        customAttributes = '',
        size = 'medium',
        coordinatesCenter = '0,0',
        textColor = 'ho-text-color-default',
        bgColor = 'ho-bg-color-default',
        zoom = '2'
      },
      setAttributes,
      clientId
    } = props;
    const [activeSlideIndex, setActiveSlideIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [selectedMarker, setSelectedMarker] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [lockMap, setLockMap] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const toggleLockMap = () => {
      setLockMap(prev => !prev);
    };

    // Wyliczamy początkowe położenie mapy:
    const initialCenter = coordinatesCenter !== '0,0' ? {
      lat: parseFloat(coordinatesCenter.split(',')[0]),
      lng: parseFloat(coordinatesCenter.split(',')[1])
    } : {
      lat: 0,
      lng: 0
    };

    // Lokalny stan: obiekt mapy + bieżące centrum i zoom
    const [mapInstance, setMapInstance] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [currentCenter, setCurrentCenter] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(initialCenter);
    const [currentZoom, setCurrentZoom] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(parseInt(zoom));
    const handleSlideToggle = (index, move) => {
      if (move) {
        setActiveSlideIndex(null);
      } else {
        setActiveSlideIndex(activeSlideIndex === index ? null : index);
      }
    };
    const onDragEnd = result => {
      if (!result.destination) return;
      const newPins = Array.from(pins);
      const [movedItem] = newPins.splice(result.source.index, 1);
      newPins.splice(result.destination.index, 0, movedItem);
      setAttributes({
        pins: newPins
      });
    };
    const sizeOptions = [{
      label: 'Small (h: 250px)',
      value: 'small'
    }, {
      label: 'Medium (h: 360px)',
      value: 'medium'
    }, {
      label: 'Large (h: 500px)',
      value: 'large'
    }, {
      label: 'Half full (h: 50vh)',
      value: 'half-full'
    }, {
      label: 'Full (h: 100vh)',
      value: 'full'
    }, {
      label: 'Aspect ratio 3:2',
      value: 'aspect-ratio-3-2'
    }, {
      label: 'Aspect ratio 2:1',
      value: 'aspect-ratio-2-1'
    }, {
      label: 'Aspect ratio 16:9 (laptops 15.6")',
      value: 'aspect-ratio-16-9'
    }, {
      label: 'Aspect ratio 16:10 (laptops 16")',
      value: 'aspect-ratio-16-10'
    }, {
      label: 'Aspect ratio 21:9 (Panorama screen)',
      value: 'aspect-ratio-panorama'
    }, {
      label: 'Aspect ratio 2.39:1 (Cinema screen)',
      value: 'aspect-ratio-cinema'
    }];

    // Funkcja dodająca pinezkę
    const addPin = (lat, lng) => {
      const newPin = {
        pinCustomAttributes: '',
        coordinatesPin: lat && lng ? `${lat},${lng}` : '',
        pinLink: false,
        pinTitle: '',
        link: '',
        pinDescription: '',
        textColor: textColor,
        bgColor: bgColor
      };
      setAttributes({
        pins: [...pins, newPin]
      });
    };
    const removePin = index => {
      const newPins = pins.filter((_, i) => i !== index);
      setAttributes({
        pins: newPins
      });
    };
    const updatePin = (index, data) => {
      const newPins = pins.map((pin, i) => {
        if (i === index) {
          return {
            ...pin,
            ...data
          };
        }
        return pin;
      });
      setAttributes({
        pins: newPins
      });
    };
    const togglePinLink = index => {
      const currentValue = pins[index].pinLink;
      updatePin(index, {
        pinLink: !currentValue
      });
    };
    const handleMarkerClick = markerIndex => {
      setSelectedMarker(markerIndex);
    };
    const handleMouseEnter = () => {
      // zaznacz blok w edytorze
      wp.data.dispatch('core/block-editor').selectBlock(clientId);
    };

    // Funkcje obsługi mapy (onLoad, onIdle)
    const onMapLoad = map => {
      setMapInstance(map);
      const center = map.getCenter();
      setCurrentCenter({
        lat: center.lat(),
        lng: center.lng()
      });
      if (map.getZoom() !== parseInt(zoom)) {
        map.setZoom(parseInt(zoom));
      }
    };
    const onMapIdle = () => {
      if (mapInstance) {
        const center = mapInstance.getCenter();
        setCurrentCenter({
          lat: center.lat(),
          lng: center.lng()
        });
        setCurrentZoom(mapInstance.getZoom());
      }
    };
    const {
      isLoaded,
      loadError
    } = (0,_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.useJsApiLoader)({
      googleMapsApiKey: 'AIzaSyD3w8OGWy7QNGq8Eb60GrKw3giU7uKrWbA'
    });
    if (loadError) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Błąd ładowania Google Maps.', 'semdesign'));
    }
    if (!isLoaded) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)()
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ładowanie mapy...', 'semdesign'));
    }
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
      className: `ho-module-m-007-maps-v1 ho-module-m-007-maps-v1--${size}`
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      onClick: handleMouseEnter
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: "Settings Map"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: "Size",
      value: size,
      options: sizeOptions,
      onChange: value => setAttributes({
        size: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Coordinates for Center Map",
      value: coordinatesCenter,
      onChange: value => setAttributes({
        coordinatesCenter: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
      label: "Zoom",
      value: parseInt(zoom),
      onChange: value => setAttributes({
        zoom: value.toString()
      }),
      min: 0,
      max: 22,
      step: 1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Custom Attributes",
      value: customAttributes,
      onChange: value => setAttributes({
        customAttributes: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: "Pins"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__.DragDropContext, {
      onDragEnd: onDragEnd
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__.Droppable, {
      droppableId: "items-list-droppable"
    }, provided => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "items-list-droppable",
      ...provided.droppableProps,
      ref: provided.innerRef
    }, pins.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_8__.Draggable, {
      key: `items-${index}`,
      draggableId: `items-${index}`,
      index: index
    }, provided => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ref: provided.innerRef,
      ...provided.draggableProps,
      style: {
        ...provided.draggableProps.style
      },
      className: `slide-settings ho-item-settings ${activeSlideIndex === index ? 'ho-item-settings--show' : ''}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-settings-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-settings-header__btn-open-options",
      onClick: () => handleSlideToggle(index)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "icon-down-open"
    }), " Pin ", index + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ho-settings-header__move",
      ...provided.dragHandleProps,
      onMouseDown: () => handleSlideToggle(index, true)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "icon-drag"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-settings-options"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Coordinates pin",
      value: item.coordinatesPin,
      onChange: value => updatePin(index, {
        coordinatesPin: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
      label: "Pin link to Google Maps or Custom Link",
      checked: item.pinLink,
      onChange: () => togglePinLink(index)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Custom Link",
      value: item.link,
      onChange: value => updatePin(index, {
        link: value
      })
    }), !item.pinLink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Title",
      value: item.pinTitle,
      onChange: value => updatePin(index, {
        pinTitle: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_assets_js_blocks_components_TextareaWithFormatting__WEBPACK_IMPORTED_MODULE_6__.TextareaWithFormatting, {
      item: item,
      index: index,
      updateItem: updatePin
    })) : '', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'semdesign'),
      initialOpen: true,
      className: "ps-0 pe-0 pt-3 pb-3",
      colorSettings: [{
        value: item.textColor,
        onChange: newColor => updatePin(index, {
          textColor: newColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'semdesign')
      }, {
        value: item.bgColor,
        onChange: newColor => updatePin(index, {
          bgColor: newColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'semdesign')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      onClick: () => removePin(index),
      className: "components-button is-secondary",
      isDestructive: true
    }, "Remove item"))))), provided.placeholder))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
      onClick: () => addPin(),
      isPrimary: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "icon-location"
    }), " Add pin")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: "Placeholder",
      initialOpen: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
      onSelect: media => setAttributes({
        image: {
          url: media.url,
          alt: media.alt
        }
      }),
      allowedTypes: ['image'],
      value: image.url,
      render: ({
        open
      }) => image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        className: "mb-2",
        src: image.url,
        alt: image.alt,
        style: {
          maxWidth: '100%'
        }
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "d-flex w-100 mb-2 justify-content-between"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: () => setAttributes({
          image: {
            url: '',
            alt: ''
          }
        }),
        isSecondary: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove image', 'semdesign')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: open,
        isPrimary: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change image', 'semdesign')))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: "mb-2",
        onClick: open,
        isPrimary: true
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add image', 'semdesign'))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Alt text', 'semdesign'),
      value: image.alt,
      onChange: value => setAttributes({
        image: {
          ...image,
          alt: value
        }
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
      label: "Link",
      value: imageLink,
      onChange: value => setAttributes({
        imageLink: value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-module-m-007-maps-v1__map w-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-module-m-007-maps-v1__map-buttons d-flex w-100 gap-2 p-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => addPin(currentCenter.lat.toFixed(4), currentCenter.lng.toFixed(4)),
      disabled: lockMap,
      className: "components-button is-primary"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "icon-location"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Pin', 'semdesign')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: () => setAttributes({
        coordinatesCenter: `${currentCenter.lat},${currentCenter.lng}`,
        zoom: currentZoom.toString()
      }),
      disabled: lockMap,
      className: "components-button is-primary"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "icon-floppy"
    }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Set current Center coordinate and Zoom', 'semdesign')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: toggleLockMap,
      className: "ms-auto components-button is-primary"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: lockMap ? 'icon-lock-2' : 'icon-lock-open'
    }), " ", lockMap ? 'Unlock Map' : 'Lock Map')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ho-module-m-007-maps-v1__map-init ${lockMap ? 'ho-module-m-007-maps-v1__map-init--lock' : ''} ho-module-m-007-maps-v1__map-init--${size}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "ho-module-m-007-maps-v1__map-init-info-set m-0 p-2"
    }, "Current center coordinates: lat: ", currentCenter.lat.toFixed(4), ", lng: ", currentCenter.lng.toFixed(4), ", zoom: ", currentZoom), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.GoogleMap, {
      center: currentCenter,
      zoom: parseInt(zoom) ? parseInt(zoom) : 2,
      onLoad: onMapLoad,
      onIdle: onMapIdle,
      mapContainerClassName: `w-100 h-100`
    }, pins.map((pin, index) => {
      const coords = pin.coordinatesPin.split(',');
      if (coords.length !== 2) return null;
      const [latitude, longitude] = coords.map(Number);
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.Marker, {
        position: {
          lat: latitude,
          lng: longitude
        },
        label: {
          text: `${Number(index + 1)}`,
          color: "white",
          fontSize: "16px",
          fontWeight: "bold"
        },
        onClick: () => {
          if (pin.pinTitle || pin.pinDescription) {
            handleMarkerClick(index);
          } else {
            if (pin.pinLink) {
              if (pin.link) {
                window.open(pin.link, '_blank');
              } else {
                window.open(`https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},${zoom}z?hl=en`, '_blank');
              }
            }
          }
        }
      }), selectedMarker === index && (pin.pinTitle || pin.pinDescription) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_7__.InfoWindow, {
        position: {
          lat: latitude,
          lng: longitude
        },
        onCloseClick: () => setSelectedMarker(null),
        options: typeof window !== 'undefined' && window.google && window.google.maps ? {
          pixelOffset: new window.google.maps.Size(0, -30)
        } : {}
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ho-module-m-007-maps-v1__map-cloud"
      }, pin.pinTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
        className: "h6"
      }, pin.pinTitle) : '', pin.pinDescription ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, pin.pinDescription) : '', pin.link ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        target: "_blank",
        rel: "noreferrer",
        href: pin.link
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "icon-link"
      }), " More...") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        target: "_blank",
        rel: "noreferrer",
        href: `https://www.google.com/maps/place/${latitude},${longitude}/@${latitude},${longitude},${zoom}z?hl=en`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        className: "icon-link"
      }), " Check on the Google Maps page..."))));
    })))));
  },
  save: props => {
    const {
      attributes: {
        image,
        imageLink,
        pins,
        size,
        zoom,
        coordinatesCenter
      }
    } = props;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: 'ho-module-m-007-maps-v1'
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-module-m-007-maps-v1__map w-100"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "data-zoom": zoom,
      "data-center-coordinate": coordinatesCenter,
      "data-pin-titles": pins.map((pin, index) => index === 0 ? pin.pinTitle : `|${pin.pinTitle}`).join(''),
      "data-pin-descriptions": pins.map((pin, index) => index === 0 ? pin.pinDescription : `|${pin.pinDescription}`).join(''),
      "data-pin-links": pins.map((pin, index) => index === 0 ? pin.link : `|${pin.link}`).join(''),
      "data-pin-links-boolean": pins.map((pin, index) => index === 0 ? pin.pinLink : `|${pin.pinLink}`).join(''),
      "data-pin-coordinates": pins.map((pin, index) => index === 0 ? pin.coordinatesPin : `|${pin.coordinatesPin}`).join(''),
      className: `ho-module-m-007-maps-v1__map-init ho-module-m-007-maps-v1__map-init--${size}`
    }), image && image.url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-module-m-007-maps-v1__image-init d-none"
    }, (() => {
      if (image && image.url) {
        const imgElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: `d-block w-100 object-fit-cover ho-module-m-007-maps-v1__placeholder ho-module-m-007-maps-v1__map-init--${size}`,
          src: image.url,
          alt: image.alt
        });
        return imageLink ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: imageLink,
          target: "_blank",
          rel: "noreferrer"
        }, imgElement) : imgElement;
      }
    })()) : ''));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map