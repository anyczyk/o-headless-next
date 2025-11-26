/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************************!*\
  !*** ./src/blocks/d-003-tile-links-dynamic-v1/index.js ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('semdesign/d-003-tile-links-dynamic-v1', {
  edit: props => {
    const {
      attributes: {
        selectedCPT = 'post',
        postsLimit = null,
        ids = '',
        tagName = 'h3',
        textColor = '',
        bgColor = '',
        animateTiles = false
      },
      setAttributes,
      clientId
    } = props;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'ho-module-d-003-tile-links-dynamic-v1 pt-5 pb-5'
    });
    const [postTypes, setPostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const tagOptions = [{
      label: 'Heading 2 [h2]',
      value: 'h2'
    }, {
      label: 'Heading 3 [h3]',
      value: 'h3'
    }, {
      label: 'Heading 4 [h4]',
      value: 'h4'
    }, {
      label: 'Heading 5 [h5]',
      value: 'h5'
    }, {
      label: 'Heading 6 [h6]',
      value: 'h6'
    }, {
      label: 'Paragraph [p]',
      value: 'p'
    }, {
      label: 'Div [div]',
      value: 'div'
    }];
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_6___default()({
        path: '/wp/v2/types'
      }).then(types => {
        const typesArray = Object.values(types);
        const filteredTypes = typesArray.filter(postType => {
          return postType.slug !== 'attachment' && postType.slug !== 'wp_block' && postType.slug !== 'wp_template' && postType.slug !== 'wp_template_part' && postType.slug !== 'wp_navigation' && postType.slug !== 'wp_global_styles' && postType.slug !== 'wp_font_family' && postType.slug !== 'wp_font_face' && postType.slug !== 'nav_menu_item';
        });
        setPostTypes(filteredTypes);
      });
    }, []);
    const perPage = postsLimit && postsLimit <= 100 ? postsLimit : 100;
    const idsArray = ids ? ids.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id)) : [];
    const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
      if (idsArray.length > 0) {
        return select('core').getEntityRecords('postType', selectedCPT, {
          include: idsArray,
          orderby: 'include',
          per_page: idsArray.length,
          _embed: true
        });
      } else {
        return select('core').getEntityRecords('postType', selectedCPT, {
          per_page: perPage,
          _embed: true
        });
      }
    }, [selectedCPT, perPage, ids]);
    const Tag = tagName;
    const toggleAnimateTiles = () => {
      setAttributes({
        animateTiles: !animateTiles
      });
    };
    const handleMouseEnter = () => {
      wp.data.dispatch('core/block-editor').selectBlock(clientId);
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      onClick: handleMouseEnter,
      style: {
        backgroundColor: bgColor,
        color: textColor
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: "Ustawienia Slidera"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Title Tag",
      value: tagName,
      options: tagOptions,
      onChange: value => setAttributes({
        tagName: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Color', 'semdesign'),
      initialOpen: true,
      className: "ps-0 pe-0 pt-3 pb-3",
      colorSettings: [{
        value: textColor,
        onChange: newColor => setAttributes({
          textColor: newColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Text Color', 'semdesign')
      }, {
        value: bgColor,
        onChange: newColor => setAttributes({
          bgColor: newColor
        }),
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Background Color', 'semdesign')
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: "Animate tiles",
      checked: animateTiles,
      onChange: toggleAnimateTiles
    }), postTypes.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: "Select entry type",
      value: selectedCPT,
      options: postTypes.map(postType => ({
        label: postType.name,
        value: postType.slug
      })),
      onChange: value => setAttributes({
        selectedCPT: value
      }),
      disabled: ids.trim() !== ''
    }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u0141adowanie typ\xF3w wpis\xF3w..."), ids.trim() === '' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "Entry limit",
      type: "number",
      value: postsLimit,
      min: 1,
      max: 100,
      onChange: value => {
        const limit = parseInt(value, 10);
        setAttributes({
          postsLimit: limit > 0 ? limit : null
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: "IDs (after the comma)",
      value: ids,
      onChange: value => {
        setAttributes({
          ids: value
        });
      },
      help: "Enter post IDs separated by commas to display only posts from the selected post type."
    }))), posts === undefined && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "\u0141adowanie wpis\xF3w..."), posts && posts.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "list-unstyled ho-module-m-005-tiles-with-slider-modals-v1__list"
    }, posts.map((post, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title pt-3 pb-3 ps-3 pe-3"
    }, post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: post._embedded['wp:featuredmedia'][0].source_url,
      alt: post.title.rendered
    }) : 'Brak obrazu', post.title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tag, {
      className: "h4 ho-module-d-003-tile-links-dynamic-v1__tile-image-and-title-t pt-3 pb-3 ps-3 pe-3",
      dangerouslySetInnerHTML: {
        __html: post.title.rendered
      }
    }))))))) : posts && posts.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Brak wpis\xF3w do wy\u015Bwietlenia.") : null);
  },
  save: () => {
    return null;
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map