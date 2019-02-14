/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./1-build/300x250/Ad.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./1-build/300x250/Ad.js":
/*!*******************************!*\
  !*** ./1-build/300x250/Ad.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Ad = undefined;

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

var _Preflight = __webpack_require__(/*! @common/js/Preflight.js */ "./1-build/common/js/Preflight.js");

var _Build = __webpack_require__(/*! @common/js/Build.js */ "./1-build/common/js/Build.js");

var _Animation = __webpack_require__(/*! @common/js/Animation.js */ "./1-build/common/js/Animation.js");

var _Control = __webpack_require__(/*! @common/js/Control.js */ "./1-build/common/js/Control.js");

var _adExternal = __webpack_require__(/*! ad-external */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ad = exports.Ad = function () {
	function Ad() {
		_classCallCheck(this, Ad);
	}

	// called from index.html onImpression()
	Ad.launch = function launch(fbaContent) {
		console.log('Ad.launch()');
		_adControl.Core.init(fbaContent).then(function () {
			return _Preflight.Preflight.init();
		}).then(function () {
			return _adControl.Core.loadDynamic();
		}).then(function () {
			return Ad.prepare();
		}).catch(function (err) {
			throw err;
		});
	};

	Ad.prepare = function prepare() {
		console.log('Ad.prepare()');
		_Control.Control.preMarkup();

		View.main = new _Build.Main();
		View.endFrame = new _Build.EndFrame({ target: View.main });

		View.mainBorder = new _Build.MainBorder();
	};

	Ad.initMonet = function initMonet(element) {
		console.log('Ad.initMonet()');
		_Control.Control.handleMonetLoadComplete(element);
	};

	return Ad;
}();

window.Ad = Ad;

/***/ }),

/***/ "./1-build/300x250/images/keyart.jpg":
/*!*******************************************!*\
  !*** ./1-build/300x250/images/keyart.jpg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 'keyart'

/***/ }),

/***/ "./1-build/common/js/AdData.js":
/*!*************************************!*\
  !*** ./1-build/common/js/AdData.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = AdData;

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

function AdData() {
	var self = this;

	/**
 	EXTRACT JSON DATA
 	Prepare dynamic data here.
  */

	/**
 	DYNAMIC IMAGES
 	Dynamically loaded images need to be in their own directory, like "dynamic_images/".
 		Then, you need to add your dynamic image-paths to the load-queue, so that when
 	the secondary preload happens, these assets will get loaded. For example:
 		self.theImageName = ImageManager.addToLoad(adParams.imagesPath + 'sample.jpg');
  */

	self.fonts = {
		primary: 'template_font'
	};

	self.colors = {
		white: '#F5F5F1',
		grey: '#221F1F',
		red: '#E50914',
		black: '#000000'

		// Store svg markup for use in all UISvg instances, reduces duplicate code across builds.  See UISvg.
	};self.svg = {};
}

/***/ }),

/***/ "./1-build/common/js/Animation.js":
/*!****************************************!*\
  !*** ./1-build/common/js/Animation.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.Animation = undefined;

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = exports.Animation = function () {
	function Animation() {
		_classCallCheck(this, Animation);
	}

	Animation.start = function start() {
		console.log('Animation.start()');
		// show the main container
		global.removePreloader();
		_adView.Styles.setCss(View.main, { opacity: 1 });
		Animation.playIntro();
	};

	// IMPORTANT!!! Call this function when your animation is complete!


	Animation.complete = function complete() {
		console.log('Animation.complete()');
	};

	Animation.playIntro = function playIntro() {
		Animation.showEndFrame();
	};

	Animation.showEndFrame = function showEndFrame() {
		console.log('Animation.showEndFrame()');

		if (View.intro) View.intro.hide();
		View.endFrame.show();

		var creative = new Creative();
		creative.play();
	};

	return Animation;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/common/js/Build.js":
/*!************************************!*\
  !*** ./1-build/common/js/Build.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Main = Main;
exports.EndFrame = EndFrame;
exports.MainBorder = MainBorder;

__webpack_require__(/*! @netflixadseng/wc-netflix-brand-logo */ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/main.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-cta */ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/main.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-text */ "./1-build/node_modules/@netflixadseng/wc-netflix-text/main.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-img */ "./1-build/node_modules/@netflixadseng/wc-netflix-img/main.js");

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

__webpack_require__(/*! @size/images/keyart.jpg */ "./1-build/300x250/images/keyart.jpg");

var _Animation = __webpack_require__(/*! @common/js/Animation.js */ "./1-build/common/js/Animation.js");

var _Control = __webpack_require__(/*! @common/js/Control.js */ "./1-build/common/js/Control.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-flushed-ribbon */ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/main.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-video */ "./1-build/node_modules/@netflixadseng/wc-netflix-video/main.js");

var _adUi = __webpack_require__(/*! ad-ui */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/index.js");

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

function Main() {
	var T = _adView.Markup.get('main');
	_adView.Styles.setCss(T, {
		position: 'absolute',
		width: adParams.adWidth,
		height: adParams.adHeight,
		opacity: 0,
		left: '0px',
		top: '0px',
		overflow: 'hidden',
		userSelect: 'none'
	});
	_adView.Styles.setCss(T, { backgroundColor: '#000000' });

	return T;
}

// ==============================================================================================================
function EndFrame(arg) {
	var base = {
		id: 'end-frame-container',
		css: {
			width: 'inherit',
			height: 'inherit'
		}
	};
	var T = new _adUi.UIComponent(_adUtils.ObjectUtils.defaults(arg, base, true));

	T.keyart = new _adUi.UIImage({
		id: 'keyart',
		target: T,
		source: 'keyart'
	});

	T.pedigree = new _adUi.UITextField({
		target: T,
		id: 'pedigree',
		css: {
			width: 200,
			height: 50
		},
		fontSize: 16,
		fontFamily: 'Netflix Sans',
		format: _adUi.TextFormat.INLINE_FIT_CLAMP,
		alignText: _adView.Align.CENTER,
		spacing: -0.2,
		text: 'A NETFLIX FILM'
	});

	// title treatment
	T.tt = document.createElement('netflix-img');
	T.tt.setAttribute('data-dynamic-key', 'Title_Treatment');
	T.tt.setAttribute('width', 300);
	T.appendChild(T.tt);

	// free trial messaging
	T.ftm = document.createElement('netflix-text');
	T.ftm.setAttribute('data-dynamic-key', 'FTM');
	T.appendChild(T.ftm);

	// tune-in
	T.tuneIn = document.createElement('netflix-text');
	T.tuneIn.setAttribute('data-dynamic-key', 'Tune_In');
	T.appendChild(T.tuneIn);

	// logo
	T.netflixLogo = document.createElement('netflix-brand-logo');
	T.netflixLogo.setAttribute('width', 90);
	T.appendChild(T.netflixLogo);

	// cta
	T.cta = document.createElement('netflix-cta');
	T.cta.setAttribute('data-dynamic-key', 'CTA');
	T.cta.setAttribute('arrow', '');
	T.cta.setAttribute('border', '');
	T.cta.setAttribute('width', 90);
	T.cta.setAttribute('height', 24);
	T.appendChild(T.cta);

	// ratings bug
	T.ratingsBug = document.createElement('netflix-img');
	T.ratingsBug.setAttribute('data-dynamic-key', 'Ratings_Bug_20x20');
	T.ratingsBug.setAttribute('id', 'ratings_bug');
	T.ratingsBug.setAttribute('width', 20);
	T.appendChild(T.ratingsBug);

	T.postMarkupStyling = function () {
		var T = View.endFrame;

		// title treatment
		_adView.Align.set(T.tt, {
			x: _adView.Align.CENTER,
			y: _adView.Align.CENTER
		});

		_adView.Align.set(T.pedigree, {
			x: {
				type: _adView.Align.CENTER,
				against: T.tt
			},
			y: {
				type: _adView.Align.CENTER,
				against: 55
			}
		});

		if (adData.hasFTM) {
			// free trial messaging
			_adView.Styles.setCss(T.ftm, {
				color: '#fff',
				fontSize: 14,
				letterSpacing: 1,
				textAlign: 'center'
			});
			_adView.Align.set(T.ftm, {
				x: _adView.Align.CENTER,
				y: {
					type: _adView.Align.BOTTOM,
					offset: -48
				}
			});
			T.removeChild(T.tuneIn);
		} else {
			// tune-in
			_adView.Styles.setCss(T.tuneIn, {
				color: '#fff',
				fontSize: 16,
				letterSpacing: 1,
				textAlign: 'center'
			});
			_adView.Align.set(T.tuneIn, {
				x: _adView.Align.CENTER,
				y: {
					type: _adView.Align.BOTTOM,
					offset: -48
				}
			});
			T.removeChild(T.ftm);
		}

		// logo
		_adView.Align.set(T.netflixLogo, {
			x: {
				type: _adView.Align.LEFT,
				offset: 44
			},
			y: {
				type: _adView.Align.TOP,
				offset: 210
			}
		});

		// cta
		T.cta.resize();
		_adView.Align.set(T.cta, {
			x: {
				type: _adView.Align.LEFT,
				offset: 166
			},
			y: {
				type: _adView.Align.TOP,
				offset: 210
			}
		});

		// ratings bug
		if (adData.hasRatings) {
			_adView.Align.set(T.ratingsBug, {
				x: {
					type: _adView.Align.RIGHT,
					offset: -5
				},
				y: {
					type: _adView.Align.BOTTOM,
					offset: -5
				}
			});
		} else {
			T.removeChild(T.ratingsBug);
		}
	};

	return T;
}

function MainBorder() {
	new _adUi.UIBorder({
		target: View.main,
		size: 1,
		color: '#000000'
	});
}

/***/ }),

/***/ "./1-build/common/js/Control.js":
/*!**************************************!*\
  !*** ./1-build/common/js/Control.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.Control = undefined;

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

var _Animation = __webpack_require__(/*! @common/js/Animation.js */ "./1-build/common/js/Animation.js");

__webpack_require__(/*! @netflixadseng/wc-netflix-fonts */ "./1-build/node_modules/@netflixadseng/wc-netflix-fonts/main.js");

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Control = exports.Control = function () {
	function Control() {
		_classCallCheck(this, Control);
	}

	Control.preMarkup = function preMarkup() {
		console.log('Control.preMarkup()');
		View.netflixFonts = document.createElement('netflix-fonts');
		_adView.Markup.get('main').appendChild(View.netflixFonts);
	};

	Control.postMarkup = function postMarkup() {
		console.log('Control.postMarkup()');
		// listen for default exit
		_adEvents.Gesture.add(View.endFrame, _adEvents.GestureEvent.CLICK, Control.handleClick);

		View.endFrame.hide();

		_adEvents.Gesture.add(View.endFrame, _adEvents.GestureEvent.OVER, function () {
			View.endFrame.cta.mouseover();
		});
		_adEvents.Gesture.add(View.endFrame, _adEvents.GestureEvent.OUT, function () {
			View.endFrame.cta.mouseout();
		});
	};

	Control.handleClick = function handleClick(event) {
		Network.exit(overridePlatformExit, _adUtils.MonetUtils.getDataByKey('Exit_URL'));
	};

	Control.handleMonetLoadComplete = function handleMonetLoadComplete(element) {
		console.log('Control.handleMonetLoadComplete()');
		_adUtils.MonetUtils.setData(element).then(function (data) {
			console.log('	-> All Netflix web components ready');
			// monet data is now assigned to MonetUtils
			adData.hasFTM = _adUtils.MonetUtils.getDataByKey('FTM');
			adData.hasTuneIn = _adUtils.MonetUtils.getDataByKey('Tune_In');

			// Ratings Bug
			adData.hasRatings = _adUtils.MonetUtils.getDataByKey('Ratings_Bug_20x20');

			// if any Dynamic images must be loaded from monet
			// but referenced outside a monet component (CanvasImage, UIImage), follow this pattern
			//
			// adData.ratingsSrc = ImageManager.addToLoad(MonetUtils.getDataByKey('Ratings_Bug_20x20'), { forCanvas: false })
			//

			// proceed with ad AFTER the setData() Promise has been fulfilled
			_adControl.ImageManager.load(function () {
				View.endFrame.postMarkupStyling();
				Control.postMarkup();
				_Animation.Animation.start();
			});
		}).catch(function (err) {
			console.log(err);
			global.failAd();
		});
	};

	return Control;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/common/js/Preflight.js":
/*!****************************************!*\
  !*** ./1-build/common/js/Preflight.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.Preflight = undefined;

var _AdData = __webpack_require__(/*! @common/js/AdData.js */ "./1-build/common/js/AdData.js");

var _AdData2 = _interopRequireDefault(_AdData);

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*-- Red.Imports.head.start --*/
/*-- Red.Imports.head.end --*/

/**
	PRE-FLIGHT		

	Resources that are shared by all the sizes should be loaded here. Boilerplate components 
	like {@link Velvet} & {@link DateManager} can be configured. Runtime JS loads. Etc.

	Once resolved, control moves to AdData.
*/
var Preflight = exports.Preflight = function () {
	function Preflight() {
		_classCallCheck(this, Preflight);
	}

	Preflight.init = function init() {
		var _this = this;

		console.log('Preflight.init()');
		return new Promise(function (resolve, reject) {
			var promises = [
			// this.loadDynamicJS('define-your-case-id')
			_this.loadCreativeJs()];

			Promise.all(promises).then(function () {
				_this.addPreloadedImages();
				_this.prepareAdData();
			}).then(function () {
				resolve();
			}).catch(function (err) {
				reject(err);
			});
		});
	};

	Preflight.addPreloadedImages = function addPreloadedImages() {
		console.log('Preflight.addPreloadedImages()');
		_adControl.ImageManager.addToDictionary(assets.preloadedImages);
	};

	Preflight.prepareAdData = function prepareAdData() {
		console.log('Preflight.prepareAdData()');

		global.adData = new _AdData2.default();
	};

	Preflight.loadCreativeJs = function loadCreativeJs() {
		console.log('Preflight.loadCreativeJs()');
		return new Promise(function (resolve, reject) {
			new Loader('creative.js', {
				onFail: function onFail() {
					reject(new Error('Unable to load creative.js'));
				},
				onComplete: function onComplete() {
					resolve();
				}
			}).load();
		});
	};

	/**
 	Method for loading dynamic, compiled ES6 modules at runtime. This should be threaded into 
 	Preflight.init()'s promise chain, as needed.
 		You must:
 		- define THIS_CASE__ID
 		- replace THIS_CASE__ASSET_PATH with a string
 		- handle the implementation of the loaded module.
 */


	Preflight.loadDynamicJS = function loadDynamicJS(id) {
		return new Promise(function (resolve, reject) {
			switch (id) {
				/*
    case THIS_CASE__ID: // ex: '300x250_Endframe'
    	import('THIS_CASE__ASSET_PATH') // ex: '@common/dynamic_js/300x250_Endframe.js'
    		.then(module => {
    			// example implementation of loaded ES6 module
    			global[module.default.name] = module.default
    			resolve()
    		})
    		.catch(err => reject(err))
    	break
    */
				default:
					console.log('Common.loadDynamicJS() has no import case for: ' + id);
					resolve();
			}
		});
	};

	return Preflight;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js":
/*!******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SheetManager = exports.ImageManager = exports.Expandable = exports.Core = exports.ExpandableDcs = exports.CssManager = undefined;

var _CssManager = __webpack_require__(/*! ./lib/CssManager.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/CssManager.js");

Object.defineProperty(exports, 'CssManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CssManager).default;
  }
});

var _ExpandableDcs = __webpack_require__(/*! ./lib/ExpandableDcs.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ExpandableDcs.js");

Object.defineProperty(exports, 'ExpandableDcs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpandableDcs).default;
  }
});

var _Core = __webpack_require__(/*! ./lib/Core.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js");

var Core = _interopRequireWildcard(_Core);

var _Expandable = __webpack_require__(/*! ./lib/Expandable.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Expandable.js");

var Expandable = _interopRequireWildcard(_Expandable);

var _ImageManager = __webpack_require__(/*! ./lib/ImageManager.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js");

var ImageManager = _interopRequireWildcard(_ImageManager);

var _SheetManager = __webpack_require__(/*! ./lib/SheetManager.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/SheetManager.js");

var SheetManager = _interopRequireWildcard(_SheetManager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Core = Core;
exports.Expandable = Expandable;
exports.ImageManager = ImageManager;
exports.SheetManager = SheetManager;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js":
/*!*********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Core.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.init = init;
exports.loadDynamic = loadDynamic;

var _adExternal = __webpack_require__(/*! ad-external */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js");

var _CssManager = __webpack_require__(/*! ./CssManager */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/CssManager.js");

var _CssManager2 = _interopRequireDefault(_CssManager);

var _ImageManager = __webpack_require__(/*! ./ImageManager */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js");

var ImageManager = _interopRequireWildcard(_ImageManager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
	@memberOf Core
	@method init
	@param {Loader} fbaLoader
		Optionally passed in Loader when compiled
	@desc
		This is the first step in the build file. The init() returns a Promise, which allows for chaining of .then() methods.
		For synchronous actions, such as declaring AdData or FtData, simply wrap it in an anonymous function. For asynchronous
		actions, such a inititalizing something with a created callback, this will need to be wrapped in a returned callback.
		This will ensure that the chain will wait for the previous .then() to be fulfilled before moving on. 

	@example
		Core.init(fbaContent)
			.then(function() {
				global.adData = new AdData();
			})
			.then(function() {
				return new Promise((resolve, reject) => {
					// pass the resolve as the completed callback
					SomeCustomClass.init(resolve)
				})
			})
			.then(Core.loadDynamic)
			.then(Control.prepareBuild)
*/
function init(fbaContent) {
	console.log('Core.init()');
	return new Promise(function (resolve, reject) {
		var promises = [];

		// device
		_adExternal.Device.init();

		// css
		_CssManager2.default.init();

		// fba payload
		ImageManager.addFbaImages(fbaContent);

		// async
		Promise.all(promises).then(function () {
			resolve();
		}).catch(function (err) {
			reject(err);
		});
	});
}

/** 
	@memberOf Core
	@method loadDynamic
	@desc
		This is the last step before preparing the build. The loadDynamic() loads all of the images that have been added
		to the ImageLoader. After this method is called from the .then() promise chain, Control.prepareBuild can be 
		called as the entire prepare process is now complete when its Promise is fulfilled.

	@example
		Core.init(fbaContent)
			.then(function() {
				global.adData = new AdData();
			})
			.then(Core.loadDynamic)
			.then(Control.prepareBuild)
*/
/**
	@npmpackage
	@class Core
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-control">ad-control</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Core } from 'ad-control'
		</codeblock>
		<br><br>
		
		Boilerplate logic that is attempted for all ad templates happens here. The build of an ad should not need to affect this scope. 
*/
function loadDynamic() {
	console.log('Core.loadDynamic()');
	return new Promise(function (resolve, reject) {
		console.log('\t Core load Image Queue');
		ImageManager.load(resolve, global.failAd);
	});
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/CssManager.js":
/*!***************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/CssManager.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _adExternal = __webpack_require__(/*! ad-external */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js");

var _adGeom = __webpack_require__(/*! ad-geom */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class CssManager
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-control">ad-control</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { CssManager } from 'ad-control'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a css-interface class, which is intended to proxy all css applications. The goal is to accept css in any format( see below ), 
                                                                                                                                                          		standardize the keys, conform the values, and rapidly apply the style to the target, specific to the {@link Device} running the ad.<br><br> 
                                                                                                                                                          
                                                                                                                                                          		Generally, you should not need to use this class directly. {@link Styles.setCss} will handle it for you.<br><br>
                                                                                                                                                          
                                                                                                                                                          		However, if your css is not being correctly managed, the first step in debugging is to use {@link CssManager.setDebugFilter}. Pass the id, 
                                                                                                                                                          		as a string, of the misbehaving element to see the exact format of the css being applied to it. You can then locate the problem style, try 
                                                                                                                                                          		applying it in the browser inspector. Using this approach you should be able to determine what the correction/exception needs to be.<br><br>
                                                                                                                                                          
                                                                                                                                                          		Additional debugging output can be switched on using {@link CssManager.setDebugLevel}. Pass a level( 0 is off, 1 is less, 2 is more ). There will be 
                                                                                                                                                          		a lot of output, but it is organized and consistent. You should be able to see exactly what is happening to your declarations. <br><br>
                                                                                                                                                          
                                                                                                                                                          		<b>Types:</b><br>
                                                                                                                                                          		<table>
                                                                                                                                                          			<tr><td>CssObject</td>	<td>the literal "css" object that is passed to {@link Markup} as containerData.css on the creation of the element</td></tr>
                                                                                                                                                          			<tr><td>CssStyleString</td>	<td>a literal string of any number of css styles, passed to {@link Markup} as containerData.styles on the creation of the element</td></tr>
                                                                                                                                                          			<tr><td>CssDeclaration</td>	<td>either an object like "{ position: 'absolute' }" or a string like "background-color: #ff0000;"</td></tr>
                                                                                                                                                          
                                                                                                                                                          			<tr><td>CssKey</td>	<td>ex: in "position: absolute;" the css-key would be "position"</td></tr>
                                                                                                                                                          			<tr><td>CssValue</td>	<td>ex: in "position: absolute;" the css-value would be "absolute"</td></tr>
                                                                                                                                                          			<tr><td>CssList</td>	<td>a standardized list of objects with Device-specific keys and corresponding values</td></tr>
                                                                                                                                                          		</table>
                                                                                                                                                          		<br>
                                                                                                                                                          
                                                                                                                                                          		<b>Formats:</b><br>
                                                                                                                                                          		<table>
                                                                                                                                                          			<tr><td>Hyphen</td>	<td>ex: 'border-left', '-webkit-clip-path', '-moz-filter'</td></tr>
                                                                                                                                                          			<tr><td>Camel</td>	<td>ex: 'borderLeft', 'webkitClipPath', 'moxFilter'</td></tr>
                                                                                                                                                          			<tr><td>Alt</td>	<td>this is to handle arbitrary exceptions, like the "bgImage" key on container-data css objects</td></tr>
                                                                                                                                                          		</table>
                                                                                                                                                          		<br>
                                                                                                                                                          
                                                                                                                                                          		<b>Key Prefixes:</b><br>
                                                                                                                                                          		<table>
                                                                                                                                                          			<tr><td>Browser</td>	<td>ex: "-webkit-clip-path" or "webkitClipPath"</td></tr>
                                                                                                                                                          			<tr><td>Standard</td>	<td>ex: "clip-path" or "clipPath"</td></tr>
                                                                                                                                                          		</table>
                                                                                                                                                          */


var CssManager = function CssManager() {
	_classCallCheck(this, CssManager);
};

CssManager.debug_level1 = false;
CssManager.debug_level2 = false;
CssManager.filter = undefined;
CssManager.debug_element = undefined;
CssManager.debug_css_list = undefined;

CssManager.init = function () {
	console.log('CssManager.init()');
	this.generateBrowserKeyDictionary();
};

CssManager.setDebugLevel = function (level) {
	var C = this;
	switch (parseInt(level)) {
		case 1:
			C.debug_level1 = true;
			C.debug_level2 = false;
			break;
		case 2:
			C.debug_level1 = true;
			C.debug_level2 = true;
			break;
		default:
			C.debug_level1 = false;
			C.debug_level2 = false;
			break;
	}
};

CssManager.setDebugFilter = function (filter) {
	var C = this;
	console.log('CssManager.setDebugFilter(),', filter);
	C.filter = filter;
	C.debug_level1 = true;
};

CssManager.ifDebug = function (debugLevel) {
	var C = this;
	if (!C.filter) return C[debugLevel];else if (C.passDebugFilter() && C[debugLevel]) return true;
};

CssManager.passDebugFilter = function () {
	var C = this;
	if (C.debug_element) if (C.debug_element.id.indexOf(C.filter) > -1) return true;
	if (C.debug_css_list) for (var i in C.debug_css_list) {
		if (i.indexOf(C.filter) > -1) return true;else if (String(C.debug_css_list[i]).indexOf(C.filter) > -1) return true;
	}
	return false;
};

CssManager.generateBrowserKeyDictionary = function () {
	var C = this;
	console.log('CssManager.generateBrowserKeyDictionary()');
	C.deviceKeyDict = {};

	var styles = document.createElement('div').style;

	for (var key in styles) {
		// get prefix
		var prefix = C.getPrefix(key);

		// key without prefix
		var standardKey = C.standardizeKey(key);
		//console.log( 'Device.element.style:', key );
		//console.log( ' - standard key:', standardKey );

		// handle exceptions per browser
		switch (_adExternal.Device.browser) {
			case 'safari':
				// use "webkit" prefix, if that's what was returned
				if (prefix == 'webkit') {
					C.deviceKeyDict[standardKey] = C.prependPrefix('webkit', standardKey);
				} else {
					// standard
					// exclude keys that have a "webkit"-equivalent
					if (!(C.prependPrefix('webkit', standardKey) in styles)) {
						C.deviceKeyDict[standardKey] = standardKey;
					}
				}
				break;
			case 'firefox':
				var mozKey = C.prependPrefix('Moz', standardKey);
				var webkitKey = C.prependPrefix('Webkit', standardKey);

				// use the no-prefix version, if it exists
				if (standardKey in styles) {
					C.deviceKeyDict[standardKey] = standardKey;
				} else if (prefix == 'moz') {
					// use "Moz" if a "webkit"-equivalent exists
					if (C.camelateKey('webkit-' + standardKey) in styles) {
						C.deviceKeyDict[standardKey] = mozKey;
					}
				} else if (prefix == 'webkit') {
					// note: in FF, there seem to be equivalents for all "webkit" vs. "Webkit" properites, so we use "Webkit" to match "Moz" convention....yah, nevermind.
					// use "webkit" if no "Moz"-equivalent exists
					if (!(mozKey in styles)) {
						C.deviceKeyDict[standardKey] = webkitKey;
					}
				}
				break;
			case 'chrome':
			case 'ie':
			default:
				// use the no-prefix version, if it exists
				if (standardKey in styles) {
					C.deviceKeyDict[standardKey] = standardKey;
				} else if (prefix) {
					// otherwise it's a "prefix"-only type of property
					C.deviceKeyDict[standardKey] = C.prependPrefix(prefix, standardKey);
				}
				break;
		}
	}
	console.log(' KEY DICTIONARY:', C.deviceKeyDict);
};

CssManager.apply = function (element, cssList) {
	var C = this;
	C.debug_element = element;
	C.debug_css_list = cssList;
	if (C.ifDebug('debug_level1')) console.log('  CssManager.apply()', element.id);

	// creates a collection of only the transforms
	var transformList = {};

	for (var key in cssList) {
		// has a non-destructive transform update, as generated by keyFormatExceptions()
		if (key.match(/^transform\(/)) transformList[key] = cssList[key];else {
			// standard css-key
			if (C.ifDebug('debug_level1')) console.log('   ' + key + ': ' + cssList[key] + ';');
			element.style[C.getDeviceKey(key)] = cssList[key];
		}
	}

	// will apply all transforms at once for correct calculation
	C.applyTransforms(element, transformList);

	if (C.ifDebug('debug_level1')) console.log('\n\n');
	C.debug_element = null;
	C.debug_css_list = null;
};

CssManager.conformCssObject = function (cssObject, debugElement) {
	var C = this;
	C.debug_element = debugElement;
	if (C.ifDebug('debug_level1')) console.log('CssManager.conformCssObject()', cssObject);
	var cssList = {};
	if (cssObject) {
		for (var key in cssObject) {
			if (C.ifDebug('debug_level2')) console.log('  PARSE( key: ' + key + ', value: ' + cssObject[key] + ' )');
			var declarations = C.conformKeyValue(key, cssObject[key]);
			for (var i in declarations) {
				if (C.ifDebug('debug_level2')) console.log('    CONFORMED DECLARATION:', declarations[i]);
				cssList[declarations[i][0]] = declarations[i][1];
			}
		}
	}
	C.debug_element = null;
	return cssList;
};

CssManager.conformCssString = function (cssString, debugElement) {
	var C = this;
	C.debug_element = debugElement;
	if (C.ifDebug('debug_level1')) console.log(' CssManager.conformCssString()');
	var cssList = {};
	if (cssString) {
		var declarations = cssString.split(/\s*;\s*/);
		for (var key in declarations) {
			if (declarations[key]) {
				var declarationParts = declarations[key].split(/:(.+)?/);
				if (C.ifDebug('debug_level2')) console.log('  PARSE( key: ' + declarationParts[0] + ', value: ' + declarationParts[1] + ' )');
				var conformedDeclarations = C.conformKeyValue(declarationParts[0], declarationParts[1]);
				for (var i in conformedDeclarations) {
					if (C.ifDebug('debug_level2')) console.log('    CONFORMED DECLARATION:', conformedDeclarations[i]);
					cssList[conformedDeclarations[i][0]] = conformedDeclarations[i][1];
				}
			}
		}
	}
	C.debug_element = null;
	return cssList;
};

CssManager.conformCssKeyValue = function (key, value) {
	var C = this;
	if (C.ifDebug('debug_level1')) console.log(' CssManager.conformCssKeyValue()');
	var cssObject = {};
	cssObject[key] = value;
	return C.conformCssObject(cssObject);
};

CssManager.applyTransforms = function (element, value) {
	var C = this;
	if (C.ifDebug('debug_level1')) console.log('    - CssManager.applyTransforms(), ', value);
	var matrix2D = new _adGeom.Matrix2D();

	// existing transform
	var existingTransform = element.style[C.getDeviceKey('transform')];
	var matrixMatch = existingTransform.match(/matrix[^\)]+\)/);
	if (matrixMatch) {
		matrix2D.setFromCss(matrixMatch[0]);
		if (C.ifDebug('debug_level2')) console.log('       existing matrix:', matrix2D.data);
	}

	if ('transforms' in element) var transforms = element.transforms;else {
		var transforms = {
			tx: 0,
			ty: 0,
			rz: 0,
			sx: 1,
			sy: 1
		};
	}

	var changed = {};
	for (var key in value) {
		var transformMethod = key.match(/\(\s([^\s]+)/)[1];
		changed[transformMethod] = value[key];
	}

	// Order matters: rotate, scale, translate

	// first translate the x and y back to zero
	if (changed.tx != undefined) {
		matrix2D.data[2] = 0;
	}
	if (changed.ty != undefined) {
		matrix2D.data[5] = 0;
	}
	if (changed.rz != undefined) {
		var reverse = -transforms.rz;
		matrix2D.rotate(reverse * (Math.PI / 180));
		matrix2D.rotate(changed.rz * (Math.PI / 180));
		transforms.rz = changed.rz;
	}
	if (changed.sx != undefined) {
		var reverse = 1 / transforms.sx;
		matrix2D.scale(reverse, 1);
		matrix2D.scale(changed.sx, 1);
		transforms.sx = changed.sx;
	}
	if (changed.sy != undefined) {
		var reverse = 1 / transforms.sy;
		matrix2D.scale(1, reverse);
		matrix2D.scale(1, changed.sy);
		transforms.sy = changed.sy;
	}

	if (changed.tx != undefined) {
		matrix2D.translate(changed.tx, 0);
		transforms.tx = changed.tx;
	}
	if (changed.ty != undefined) {
		matrix2D.translate(0, changed.ty);
		transforms.ty = changed.ty;
	}

	// store transforms
	element.transforms = transforms;
	if (C.ifDebug('debug_level2')) console.log('       updated matrix:', matrix2D.data);

	// apply css matrix
	element.style[C.getDeviceKey('transform')] = matrix2D.getCss();
};

CssManager.conformKeyValue = function (key, value) {
	var C = this;
	key = String(key).trim();
	value = String(value).trim();
	var keyAsStandard = C.standardizeKey(key);
	return C.conformValue(keyAsStandard, value);
};

CssManager.hasPrefix = function (key) {
	var C = this;
	return key.search(C.matchPrefixRegex()) > -1;
};

CssManager.getPrefix = function (key) {
	var C = this;
	var match = key.match(C.matchPrefixRegex());
	return match ? match[1].replace(/-/g, '').toLowerCase() : null;
};

CssManager.stripPrefix = function (key) {
	var C = this;
	var keyless = key.replace(C.matchPrefixRegex(), '');
	return keyless.charAt(0).toLowerCase() + keyless.slice(1);
};

CssManager.getDeviceKey = function (key) {
	var C = this;
	return key in C.deviceKeyDict ? C.deviceKeyDict[key] : key;
};

CssManager.prependPrefix = function (prefix, key) {
	return prefix + key.replace(/^(.)/, function (str) {
		return str.charAt(0).toUpperCase();
	});
};

CssManager.standardizeKey = function (key) {
	var C = this;
	key = C.stripPrefix(key);

	// check if key is an exception
	if (key in C.keyFormatExceptions()) key = C.keyFormatExceptions()[key];else
		// or procedurally convert to camel
		key = C.camelateKey(key);

	if (C.ifDebug('debug_level2')) console.log('    - result: "' + key + '"');
	return key;
};

CssManager.camelateKey = function (key) {
	key = key.replace(/-(.)/g, function (str) {
		return str.charAt(1).toUpperCase();
	});
	return key;
};

CssManager.keyFormatExceptions = function () {
	return {
		x: 'transform( tx )',
		translateX: 'transform( tx )',
		y: 'transform( ty )',
		translateY: 'transform( ty )',
		rotate: 'transform( rz )',
		rotation: 'transform( rz )',
		scaleX: 'transform( sx )',
		scaleY: 'transform( sy )',
		scale: 'transform( sx ),transform( sy )'
	};
};

CssManager.conformValue = function (key, value) {
	var C = this;
	var conformedValues = [];
	var conformedValue;

	// look for numeric values
	var hasMultipleValues = value.match(/\s/);
	var numericValue = value.match(C.matchNumberRegex());
	if (!hasMultipleValues && numericValue) {
		if (C.ifDebug('debug_level2')) console.log('   conform value as number');
		conformedValue = Number(numericValue[0]);
		/* get existing unit */
		var unitMatch = value.match(/[^0-9\.]+$/);
		if (unitMatch) conformedValue += unitMatch[0];else
			/* assume default unit */
			switch (key) {
				case 'top':
				case 'right':
				case 'bottom':
				case 'left':
				case 'width':
				case 'height':
				case 'fontSize':
				case 'lineHeight':
				case 'padding':
				case 'margin':
				case 'marginRight':
				case 'marginLeft':
				case 'marginTop':
				case 'marginBottom':
				case 'borderRadius':
				case 'borderWidth':
				case 'letterSpacing':
					conformedValue += 'px';
					break;
			}
	} else if (key == 'backgroundImage') {
		// background images - allows for either a stand-alone URL, or proper css like 'url( "http://example.com/image.jpg" );'
		if (C.ifDebug('debug_level2')) console.log('   conform value as background image');
		value = value.replace(/^url\(\s*['"]*/, '').replace(/['"]*\s*\)$/, '');
		conformedValue = 'url( "' + value + '" )';
	} else if (key == 'transform') {
		// transform-functions - should be split apart so a single matrix function can be written
		//	faster to just specify the transform exactly via css-object keys: x, y, rotate, scaleX, scaleY
		// && Device.browser == 'ie') {
		if (C.ifDebug('debug_level2')) console.log('   convert "transform" functions to individual transforms');
		var functionRegex = /([a-z0-9]+)\(([^\)]+)\)/gi;
		while (params = functionRegex.exec(value)) {
			var args = params[2].replace(/\s/g, '').split(',').map(function (value, index, array) {
				return Number(value.match(C.matchNumberRegex())[0]);
			});
			switch (params[1]) {
				case 'translate':
					conformedValues.push(['transform( tx )', args[0]]);
					conformedValues.push(['transform( ty )', args[1]]);
					break;
				case 'translateX':
					conformedValues.push(['transform( tx )', args[0]]);
					break;
				case 'translateY':
					conformedValues.push(['transform( ty )', args[0]]);
					break;
				case 'rotate':
					conformedValues.push(['transform( rz )', args[0]]);
					break;
				case 'scale':
					conformedValues.push(['transform( sx )', args[0]]);
					conformedValues.push(['transform( sy )', args[1]]);
					break;
				case 'scaleX':
					conformedValues.push(['transform( sx )', args[0]]);
					break;
				case 'scaleY':
					conformedValues.push(['transform( sy )', args[0]]);
					break;
			}
		}
	} else {
		// pass through
		if (C.ifDebug('debug_level2')) console.log('   conform value as string');
		conformedValue = value;
	}

	// create style pair
	if (conformedValue != undefined) {
		if (C.ifDebug('debug_level2')) console.log('    - result: "' + conformedValue + '"');

		// split the key will alyways have 1 value, except for scale which has to split to scaleX and scaleY
		var splitKeys = key.split(/\,/);

		for (var i = 0; i < splitKeys.length; i++) {
			conformedValues.push([splitKeys[i], conformedValue]);
		}
	}

	return conformedValues;
};

CssManager.matchNumberRegex = function () {
	return (/^[+-]?[0-9]*\.?[0-9]+/
	);
};

CssManager.matchPrefixRegex = function () {
	return (/^-*(moz-*|webkit-*|ms-*|o-)/i
	);
};

exports.default = CssManager;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Expandable.js":
/*!***************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/Expandable.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.init = init;
exports.collapse = collapse;
exports.expand = expand;
exports.hasUserInteracted = hasUserInteracted;

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

var _arg = void 0; /**
                   	@npmpackage
                   	@class Expandable
                   	@description
                   		Import from <a href="https://github.com/ff0000-ad-tech/ad-control">ad-control</a>
                   		<br>
                   		<codeblock>
                   			// importing into an ES6 class
                   			import { Expandable } from 'ad-control'
                   		</codeblock>
                   		<br><br>
                   		
                   		This class controls the expanding and collapsing of expandable units. The animation relys on the properties
                   		set in the index. Therefore, the animation has be removed from the build file and handled internally. 
                   		This class can be extended with {@link ExpandableDcs} when units are used in DoubleClick.
                    */

var _afterInitExpanded = true;
var _hasUserInteracted = false;

var extend = {
	init: function init() {},
	collapse: function collapse(gestureEvent) {
		handle.collapseStart();
	},
	expand: function expand(gestureEvent) {
		handle.expandStart();
	},
	collapseComplete: function collapseComplete() {
		handle.collapseComplete();
	},
	expandComplete: function expandComplete() {
		handle.expandComplete();
	}
};

var handle = {
	expandStart: function expandStart(event) {
		fireCallback('expandStart');
		animateExpand();
	},
	expandComplete: function expandComplete(event) {
		fireCallback('expandComplete');
		_hasUserInteracted = _afterInitExpanded;
		_afterInitExpanded = true;
	},
	collapseStart: function collapseStart(event) {
		animateCollapse();
		fireCallback('collapseStart');
		_hasUserInteracted = true;
	},
	collapseComplete: function collapseComplete(event) {
		fireCallback('collapseComplete');
		_hasUserInteracted = true;
	}

	/**
 	@memberOf Expandable
 	@method init
 	@desc
 		This method initializes the class, linking all callbacks and the target being set. This should 
 		be called Control.postMarkup
 	@example
 		Expandable.init ({
 
 			// required
 			target: View.expanded,
 
 			// optional methods called when that event happens
 			expandStart: Control.handleExpandStart,
 			expandComplete: Control.handleExpandComplete,
 			collapseStart: Control.handleCollapseStart,
 			collapseComplete: Control.handleCollapseFinish,
 
 			// optionally you can add time values for expanding/collapsing
 			expandTime: 0.3,
 			collapseTime: 0.3
 		});
 */
};function init(arg) {
	_arg = arg || {};
	defaultFalsey(_arg, 'expandTime');
	defaultFalsey(_arg, 'collapseTime');

	if (_arg.extend) {
		extend = _arg.extend;
		extend.init(handle);
	}

	if (adParams.expandable.expanded) {
		_afterInitExpanded = false;
		expand();
	} else {
		animateCollapse(true);
	}
}

function defaultFalsey(obj, key) {
	obj[key] = obj[key] >= 0 ? obj[key] : 0.5;
}

/**
	@memberOf Expandable
	@method collapse
	@desc
		Collapses the View.expand container.
	@example
		Expandable.collapse();
*/
function collapse(gestureEvent) {
	_adEvents.GestureEvent.stop(gestureEvent);
	extend.collapse(gestureEvent);
}

/**
	@memberOf Expandable
	@method expand
	@desc
		Expands the View.expand container.
	@example
		Expandable.expand();
*/
function expand(gestureEvent) {
	_adEvents.GestureEvent.stop(gestureEvent);
	extend.expand(gestureEvent);
}

/**
	@memberOf Expandable
	@method {boolean} hasUserInteracted
		Indicates if the ad has been interacted by the user
	@example
		console.log( Expandable.hasUserInteracted() )
*/
function hasUserInteracted() {
	return _hasUserInteracted;
}

function animateExpand() {
	var param = adParams.expandable;
	TweenLite.to(_arg.target, _arg.expandTime, {
		x: param.expandedX,
		y: param.expandedY,
		width: adParams.adWidth,
		height: adParams.adHeight,
		onComplete: extend.expandComplete
	});
}

function animateCollapse(isInit) {
	var time = isInit ? 0 : _arg.collapseTime;
	var param = adParams.expandable;
	TweenLite.to(_arg.target, time, {
		x: param.collapsedX,
		y: param.collapsedY,
		width: param.collapsedWidth,
		height: param.collapsedHeight,
		onComplete: isInit ? undefined : extend.collapseComplete
	});
}

function fireCallback(name) {
	;(_arg[name] || function () {}).call();
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ExpandableDcs.js":
/*!******************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ExpandableDcs.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class ExpandableDcs
	@description
		Import from <a href="https://github.com/ff0000-ad-tech/ad-control">ad-control</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ExpandableDcs } from 'ad-control'
		</codeblock>
		<br><br>
		
		This is and extension of {@link Expandable} when units are used in DoubleClick. The only difference in the 
		init() method is to pass in this class to the Expandable.init()
		<codeblock>
			Expandable.init ({
				target : View.expanded,
				expandStart: Control.handleExpandStart,
				expandComplete: Control.handleExpandComplete,
				collapseStart: Control.handleCollapseStart,
				collapseComplete: Control.handleCollapseFinish,

				extend: ExpandableDcs
			});
		</codeblock>
 */

exports.default = {
	init: function init(handle) {
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, handle.expandStart);
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, handle.expandComplete);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, handle.collapseStart);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, handle.collapseComplete);

		if (adParams.expandable.expanded) {
			Enabler.setStartExpanded(true);
		}
	},
	collapse: function collapse(gestureEvent) {
		console.log('DCS > collapse()');
		Enabler.requestCollapse();
		if (gestureEvent) Enabler.reportManualClose();
	},
	expand: function expand(gestureEvent) {
		console.log('DCS > expand()');
		Enabler.requestExpand();
	},
	collapseComplete: function collapseComplete() {
		console.log('DCS > collapseComplete()');
		Enabler.finishCollapse();
	},
	expandComplete: function expandComplete() {
		console.log('DCS > expandComplete()');
		Enabler.finishExpand();
	}
};

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js":
/*!*****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/ImageManager.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.addToLoad = addToLoad;
exports.addLoader = addLoader;
exports.get = get;
exports.available = available;
exports.load = load;
exports.addFbaImages = addFbaImages;
exports.addToDictionary = addToDictionary;

var _adLoad = __webpack_require__(/*! ad-load */ "ad-load");

var _adLoad2 = _interopRequireDefault(_adLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _pendingImages = []; /**
                         	@class ImageManager
                         	@desc
                         		<a href="https://github.com/ff0000-ad-tech/ad-control">Github repo</a>
                         		<br><br>
                         
                         		This module is used to add/load/manage all Images.
                         
                         */

var _pendingCanvasImages = [];
var _pendingLoaders = [];
var _nextLoadCallback = [];
var _imageManagerLoader = void 0;
var _dict = {};
var _isLoading = false;
var _loaderCount = 0;
var _onComplete = function _onComplete() {};
var _onFail = function _onFail() {};

/* ------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
	@memberOf ImageManager
	@method addToLoad
	@param {string} file
		A filename or path
	@param {object} arg
		Optional. Determines if the image should be loaded with a crossOrigin:'anonymous' for images used in a canvas. An object with one boolean key: forCanvas
	@desc
		Add an image file-path to be loaded.

	@example
		// Add an image from the "images/" folder
		ImageManager.addToLoad( adParams.imagesPath + 'sample.png' );

		// Add an image full path, and get the result key back
		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png' );

		// Add an image for use with CanvasDrawer, and get the result key back
		// NOTE: The object must be there or images will error when used in Canvas
		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png', { forCanvas:true });

	@returns
		An "imageId" which can be used to get an image by its id, see: {@link ImageManager.get}
*/
function addToLoad(file, arg) {
	var id = _adLoad.LoaderUtils.getFileName(file);

	if (!available(id, true)) {
		var forCanvas = arg && arg.forCanvas == true;
		//console.log( 'ImageManager.addToLoad(', id, ') forCanvas:', forCanvas )
		forCanvas ? _pendingCanvasImages.push(file) : _pendingImages.push(file);
	}

	return id;
}

/**
	@memberOf ImageManager
	@method addLoader
	@param {Loader} loader
		A {@link Loader}.
	@desc
		Add a Loader to loaded along with any other queued image requests.

	@example
		ImageManager.addLoader( new Loader(
			assets.images, {
				name: 'imageLocalLoader',
				prepend: adParams.imagesPath
		}));
*/
function addLoader(loader) {
	_pendingLoaders.push(loader);
}

/**
	@memberOf ImageManager
	@method get
	@param {string} imageId
		A String id of an Image
	@desc
		Returns the <<b></b>img> that was created when the requested image was loaded in.

	@example
		ImageManager.get( 'sample' );
*/
function get(imageId) {
	if (_dict[imageId]) return _dict[imageId];else throw new Error("ImageManager : No image named '" + imageId + "' has been loaded");
}

/**
	@memberOf ImageManager
	@method available
	@param {string} imageId
		A String id of an Image
	@desc
		Returns a boolean stating if an image by the given imageID has been loaded

	@example
		ImageManager.available( 'sample' );
*/
function available(imageId, internal) {
	var exists = _dict[imageId] != undefined;

	// if the image we are trying to load already exists
	if (exists) {
		// if this is an internal use - as in, called from I.addToLoad() or addToDictionary()
		if (internal) console.log('ImageManager.available() -->', true, ': Duplicate Image Id "' + imageId + '". One or more images loading in have the same name. Each Image needs a unique file name.');
	} else {
		// if the image doesn't already exist, we only want to know that if it is not from an internal ImageManager method
		// for example: checking to see if an image exists from build.js
		if (!internal) console.log('ImageManager.available() -->', false, ": No image named '" + imageId + "' has been loaded");
	}

	return exists;
}

/**
	@memberOf ImageManager
	@method load
	@param {function} callback
		Callback to execute when all images are loaded.
	@param {function} onFail
		Optional onFail callback - if not specified a failed load will cause the ad to failover.

	@desc
		Executes load queue, which, on success, will yield all of the requested images available with {@link ImageManager.get}
*/

function load(callback, onFail) {
	_onFail = onFail || global.failAd;

	if (_isLoading) {
		// set up a wait for the first one to finish
		_nextLoadCallback.push(callback);
	} else {
		_imageManagerLoader = new _adLoad2.default({
			name: 'imageManagerLoader',
			onComplete: function onComplete(event) {
				_isLoading = false;
				addToDictionary(event.getAllContentRaw());
			},
			onFail: function onFail(event) {
				_isLoading = false;
				_onFail.call();
			}
		});

		_onComplete = [].concat(callback);
		_nextLoadCallback = [];

		// extract out the images getting loaded, leaving I._pendingImages able to take more while loading
		var currentPendingImages = _pendingImages.slice();
		_pendingImages = [];
		_imageManagerLoader.add(new _adLoad2.default(currentPendingImages, {
			name: 'dynamicImages-' + _loaderCount++,
			fileType: 'jpg'
		}));

		var currentPendingCanvasImages = _pendingCanvasImages.slice();
		_pendingCanvasImages = [];
		_imageManagerLoader.add(new _adLoad2.default(currentPendingCanvasImages, {
			name: 'dynamicCanvasImages-' + _loaderCount++,
			fileType: 'jpg',
			crossOrigin: 'anonymous'
		}));

		var currentPendingLoaders = _pendingLoaders.slice();
		_pendingLoaders = [];
		for (var i = 0; i < currentPendingLoaders.length; i++) {
			_imageManagerLoader.add(currentPendingLoaders[i]);
		}

		_isLoading = true;
		_imageManagerLoader.load();
	}
}

function addFbaImages(target) {
	if (target) addToDictionary(target.getAllContentRaw());
}

/**
	@memberOf ImageManager
	@method addToDictionary
	@desc
		Allows images to be added to the ImageManager's dictionary from external classes. <b>This is not part of the load process, and can only add <i>loaded</i> image content.</b>
*/
function addToDictionary(content) {
	for (var i = 0; i < content.length; i++) {
		if (content[i] instanceof Image || content[i] instanceof SVGElement) {
			var img = content[i];
			if (!available(content[i].id, true)) _dict[img.id] = img;
		}
	}

	console.log('ImageManager:', _dict);

	for (var i = 0; i < _onComplete.length; i++) {
		_onComplete[i].call();
	}

	if (_nextLoadCallback.length > 0) {
		load(_nextLoadCallback);
	}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/SheetManager.js":
/*!*****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-control/lib/SheetManager.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createGlobalNode = createGlobalNode;
exports.addClass = addClass;
exports.removeClass = removeClass;

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

/**
	@memberOf SheetManager
	@method createGlobalNode
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string} styles
		selector/CSS string pair as separate parameters, following 'selector', 'css string' pattern,
		or a self-contained CSS style string including selectors, like '.myClass{ color: blue; }'
	@desc
		Create a new CSS node (class, tag, etc) DEFINITION with submitted styles with selector/CSS string
		pair or a self-contained CSS string including selectors. 

	@example
		// selector/CSS string pair
		SheetManager.createGlobalNode ( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// or add multiple class declarations to the same node
		SheetManager.createGlobalNode ( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// or have mulitple classes share the same logic
		SheetManager.createGlobalNode ( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// add style to a tag globally
		SheetManager.createGlobalNode ( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)
		
		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		SheetManager.createGlobalNode( 'myFifthStyle', myCssString );
*/
function createGlobalNode(nodeId, styles) {
	if (document.getElementById(nodeId)) {
		return;
	}

	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = nodeId;

	// if only two parameters, assuming styles is CSS string
	// else process as selector/style pair
	var str = arguments.length === 2 ? styles : '';

	if (arguments.length > 2) {
		for (var i = 0; i < arguments.length - 1; i += 2) {
			// strip out all the white space
			var names = arguments[i + 1].replace(/\s*/g, '');

			str += names;
			str += ' { ' + (arguments[i + 2] || '') + ' }\n';
		}
	}

	style.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(style);
}

/**
	@memberOf SheetManager
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/
/**
	@npmpackage
	@class SheetManager
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-control">ad-control</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { SheetManager } from 'ad-control'
		</codeblock>
		<br><br>
		
		Class manages the creation of &lt;style> tags and the addition/removal of classes.
*/
function addClass(target, className) {
	var element = _adView.Markup.getElement(target);

	// IE does not support multiple classes being added as arguments, so must loop
	for (var i = 0; i < arguments.length - 1; i++) {
		element.classList.add(arguments[i + 1]);
	}
}

/**
	@memberOf SheetManager
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/
function removeClass(target, className) {
	var element = _adView.Markup.getElement(target);
	element.classList.remove(className);
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js":
/*!*****************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.GestureEvent = exports.FrameRateBase = exports.FrameRate = exports.UIEvent = exports.GestureBase = exports.Gesture = undefined;

var _Gesture = __webpack_require__(/*! ./lib/Gesture */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/Gesture.js");

Object.defineProperty(exports, 'Gesture', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_Gesture).default;
	}
});

var _GestureBase = __webpack_require__(/*! ./lib/GestureBase */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureBase.js");

Object.defineProperty(exports, 'GestureBase', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_GestureBase).default;
	}
});

var _UIEvent = __webpack_require__(/*! ./lib/UIEvent */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/UIEvent.js");

Object.defineProperty(exports, 'UIEvent', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_UIEvent).default;
	}
});

var _FrameRate = __webpack_require__(/*! ./lib/FrameRate */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRate.js");

Object.defineProperty(exports, 'FrameRate', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_FrameRate).default;
	}
});

var _FrameRateBase = __webpack_require__(/*! ./lib/FrameRateBase */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRateBase.js");

Object.defineProperty(exports, 'FrameRateBase', {
	enumerable: true,
	get: function get() {
		return _interopRequireDefault(_FrameRateBase).default;
	}
});

var _GestureEvent = __webpack_require__(/*! ./lib/GestureEvent */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureEvent.js");

var GestureEvent = _interopRequireWildcard(_GestureEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GestureEvent = GestureEvent;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRate.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRate.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _FrameRateBase = __webpack_require__(/*! ./FrameRateBase */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRateBase.js");

var _FrameRateBase2 = _interopRequireDefault(_FrameRateBase);

__webpack_require__(/*! ad-polyfills/lib/request-animation-frame */ "./1-build/node_modules/@ff0000-ad-tech/ad-polyfills/lib/request-animation-frame.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class FrameRate
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { FrameRate } from 'ad-events'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This module is used for constant consistent updates, akin to ENTER_FRAME in AS3, utilizing requestAnimationFrame at its core. Register a function
                                                                                                                                                          		and it will be called on every tick. Optionally, you can register a function with a frame rate value for specific frequency calls.  This is useful
                                                                                                                                                          		when working with multiple animation sequences at once.	
                                                                                                                                                          	
                                                                                                                                                          	@example
                                                                                                                                                          		// have any methods			
                                                                                                                                                          		function myFunctionA () {
                                                                                                                                                          			console.log( 'myFunctionA' );
                                                                                                                                                          		}
                                                                                                                                                          
                                                                                                                                                          		function myFunctionB() {
                                                                                                                                                          			console.log( 'myFunctionB' );
                                                                                                                                                          		}
                                                                                                                                                          
                                                                                                                                                          		function myFunctionC() {
                                                                                                                                                          			console.log( 'myFunctionC' );
                                                                                                                                                          		}
                                                                                                                                                          
                                                                                                                                                          		// Register any method, anywhere
                                                                                                                                                          		FrameRate.register ( this, myFunctionA );
                                                                                                                                                          		FrameRate.register ( this, myFunctionB );
                                                                                                                                                          
                                                                                                                                                          		// Register with custom time, say only 7 calls per second
                                                                                                                                                          		FrameRate.register ( this, myFunctionC, 7 );
                                                                                                                                                          
                                                                                                                                                          		// Pause the whole engine so no methods are called
                                                                                                                                                          		FrameRate.pause();
                                                                                                                                                          
                                                                                                                                                          		// Then start is back up
                                                                                                                                                          		FrameRate.resume();
                                                                                                                                                          
                                                                                                                                                          		// or remove a method later
                                                                                                                                                          		FrameRate.unregister ( this, myFunctionA );
                                                                                                                                                          
                                                                                                                                                          		// or pause all methods at a specific frame rate
                                                                                                                                                          		FrameRate.pause ( 7 ) // this pauses only myFunctionC, but myFunctionB will continue to be called
                                                                                                                                                          */


var FrameRate = function FrameRate() {
	_classCallCheck(this, FrameRate);
};

FrameRate._isPaused = true;
FrameRate._isActive = true;
FrameRate._sets = {};
FrameRate._RAF = undefined;

FrameRate.register = function (from, handler, fps) {
	var F = FrameRate;
	fps = fps || 30;
	if (!F._sets[fps]) {
		F._sets[fps] = new _FrameRateBase2.default(fps);
	}

	var pool = F._sets[fps].pool;
	for (var i = 0; i < pool.length; i++) {
		if (pool[i].from === from && pool[i].handler === handler) {
			return;
		}
	}
	pool.push({
		handler: handler,
		from: from
	});
	console.log('pool is now:', pool);

	if (F._isActive) F.resume();
};

FrameRate.unregister = function (from, handler, fps) {
	var F = FrameRate;
	//var handlerString = handler.toString();

	for (var key in F._sets) {
		// if fps is provided, only look in that FrameRateBase for handlers
		if (fps && key != fps) {
			continue;
		}
		// otherwise, remove all references to that handler

		var pool = F._sets[key].pool;
		for (var i = 0; i < pool.length; i++) {
			//if ( h[i].toString() === handlerString ){
			if (pool[i].from === from && pool[i].handler === handler) {
				pool.splice(i, 1);
				break;
			}
		}

		// removes the FrameRateBase object with no handlers
		if (pool.length == 0) {
			delete F._sets[key];
		}
	}

	if (Object.keys(F._sets).length === 0) {
		F.pause();
		F._isActive = true;
	}
};

FrameRate.pause = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var F = FrameRate;
	if (args.length > 0) {
		for (var i = 0; i < args.length; i++) {
			var fpsTarget = args[i];
			if (F._sets[fpsTarget]) {
				F._sets[fpsTarget]._paused = true;
				F._isPaused = true;
			}
		}
		for (var d in F._sets) {
			if (!F._sets[d]._paused) {
				F._isPaused = false;
				break;
			}
		}
	} else {
		for (var d in F._sets) {
			F._sets[d]._paused = true;
		}F._isPaused = true;
	}

	if (F._isPaused) {
		F._isActive = false;
		window.cancelAnimationFrame(F._RAF);
	}
};

FrameRate.resume = function () {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	var F = FrameRate;
	var _currentlyRunning = !F._isPaused;
	if (args.length > 0) {
		for (var i = 0; i < args.length; i++) {
			var fpsTarget = args[i];
			if (F._sets[fpsTarget]) {
				F._sets[fpsTarget]._paused = false;
				F._isPaused = false;
			}
		}
	} else {
		for (var d in F._sets) {
			F._sets[d]._paused = false;
		}F._isPaused = false;
	}

	if (!_currentlyRunning) {
		F._isActive = true;
		F._RAF = window.requestAnimationFrame(F.tick);
	}
};

FrameRate.secondsAsFrames = function (sec) {
	return 1 / sec;
};

FrameRate.tick = function () {
	var F = FrameRate;
	//console.log( 'tick' )
	if (!F._isPaused) {
		for (var h in F._sets) {
			F._sets[h].tick();
		}

		// call tick again
		window.requestAnimationFrame(F.tick);
	}
};

exports.default = FrameRate;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRateBase.js":
/*!*****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/FrameRateBase.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Description:
		-- INTERNAL MODULE --
		This module is used exclusively by FrameRate.  When a method is registered, it instantiaties an instance of this module to hold all methods at a 
		specified frames per second.  Every fps gets a new FrameRateBase instance.
	
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
function FrameRateBase(fps) {
	var F = this;
	F.pool = [];
	F.fps = fps;

	F._frameTime = Math.floor(1000 / F.fps);
	F._prevTime = 0;
	F._startTime = 0;
	F._nextTime = 0;
	F._maxLag = 400;
	F._shiftLag = 30;
	F._paused = false;
	F._prevCallTime = Date.now();

	F.diffTime = 0;
}

FrameRateBase.prototype = {
	resume: function resume() {
		var F = this;
		if (F._isPaused) {
			F._startTime = Date.now();
			F._prevCallTime = F._startTime;
			F._prevTime = F._startTime;
			F._nextTime = 0;
			F._isPaused = false;
		}
	},

	tick: function tick() {
		var F = this;
		if (!F._paused) {
			var call = false;
			var now = Date.now();
			var diffTime = now - F._prevTime;

			if (diffTime > F._maxLag) {
				console.log('...lag');
				F._startTime += diffTime - F._shiftLag;
			}
			F._prevTime = now; //+= F.diffTime;

			var elapsedTime = F._prevTime - F._startTime;
			var future = elapsedTime - F._nextTime;

			if (future > 0) {
				F._nextTime += future >= F._frameTime ? future : F._frameTime;
				call = true;

				// calculates the difference only from last call, not last tick
				F.diffTime = now - F._prevCallTime;
				F._prevCallTime = now;
			}

			// handle the callbacks
			if (call) F.dispatch();
		}
	},

	dispatch: function dispatch() {
		var F = this;
		for (var i = 0; i < F.pool.length; i++) {
			var obj = F.pool[i];
			obj.handler.call(obj.from, this);
		}
	}
};

exports.default = FrameRateBase;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/Gesture.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/Gesture.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _GestureBase = __webpack_require__(/*! ./GestureBase */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureBase.js");

var _GestureBase2 = _interopRequireDefault(_GestureBase);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - ? remove gestureBase if no events added
// 		- ? total distance

/**
	@npmpackage
	@class Gesture
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Gesture } from 'ad-events'
		</codeblock>
		<br><br>
		
		This module is used for seamless use of Mouse / Touch Events, such as click vs tap, mousedown vs touch down, etc.  
		This class figures which to use and reports custom events.<br><br>
	
		See {@link GestureEvent} for available events.
*/
var Gesture = new function () {
	var G = this;

	var _targets = [];
	var _disableList = [];
	var _eventPass = document.createEventObject != undefined;
	var _eventLooping = false;

	G._kills = {};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf Gesture
 	@method add | addEventListener
 	@param {element} target
 		The DOM element
 	@param {string} name
 		The event's name as a String or GestureEvent constant
 	@param {function} handler
 		The function to be called on event trigger
 	@desc
 		Registers an event so that the listener receives notification of an event.
 		
 	@example
 		Gesture.addEventListener( myDiv, GestureEvent.CLICK, handleClick );
 		function handleClick( event ) {
 			console.log( 'Click heard' );
 		}					
 */
	G.add = G.addEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target);
		_gestureBase.register(name, handler);
		_adView.Styles.setCss(target, 'cursor', 'pointer');

		// OVERWRITES mouseChildren(false) of parent
		_adView.Styles.setCss(target, 'pointer-events', 'auto');
	};

	/**
 	@memberOf Gesture
 	@method remove | removeEventListener
 	@param {element} target
 		The DOM element
 	@param {string} name
 		The event's name as a String or GestureEvent constant
 	@param {function} handler
 		The function registered for call on event trigger
 	@desc
 		Unregisters an event of notifications.
 		@example
 		Gesture.removeEventListener ( myDiv, GestureEvent.CLICK, handleClick );					
 */
	G.remove = G.removeEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target);
		if (_gestureBase) {
			_gestureBase.unregister(name, handler);
			if (_gestureBase.eventList.length <= 0) {
				_adView.Styles.setCss(target, 'cursor', 'auto');
			}
		}
	};

	/**
 	@memberOf Gesture
 	@method disable
 	@param {element} target
 		The DOM element
 	@desc
 		Disables a DOM element from responding the mouse/touch/gesture events. For bubbling events, such as click, this will disable its children as well.
 	
 	@example	
 		Gesture.disable( myDiv );
 */
	G.disable = function (target) {
		var gestureBase = getGestureBase(target);
		_disableList.push(gestureBase);

		if (_eventPass) {
			gestureBase.register(GestureEvent.CLICK, handlePassThroughClick);
			_adView.Styles.setCss(target, 'cursor', 'auto');
		} else {
			_adView.Styles.setCss(target, 'pointer-events', 'none');
		}
	};

	/**
 	@memberOf Gesture
 	@method disableChildren
 	@param {element} target
 		The DOM element
 	@desc
 		Disables all child DOM elements from responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
 		@example
 		Gesture.disableChildren ( myDiv );
 */
	G.disableChildren = function (target) {
		setActiveChildren(target, false);
	};

	/**
 	@memberOf Gesture
 	@method enable
 	@param {element} target
 		The DOM element
 	@desc
 		Enables all a DOM element to responding the mouse/touch/gesture events. For bubbling events, such as click, this will enable its children as well.
 		@example
 		Gesture.disable ( myDiv );
 */

	G.enable = function (target) {
		var gestureBase = getGestureBase(target);

		for (var i = 0; i < _disableList.length; i++) {
			if (gestureBase == _disableList[i]) {
				if (_eventPass) {
					gestureBase.unregister(GestureEvent.CLICK, handlePassThroughClick);
				} else {
					_adView.Styles.setCss(target, 'pointer-events', 'auto');
					_adView.Styles.setCss(target, 'cursor', 'pointer');
				}
				break;
			}
		}
	};

	/**
 	@memberOf Gesture
 	@method enableChildren
 	@param {element} target
 		The DOM element
 	@desc
 		Enables all child DOM elements to responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
 		@example
 		Gesture.enableChildren ( myDiv );
 */
	G.enableChildren = function (target) {
		setActiveChildren(target, true);
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function getGestureBase(target) {
		var _gestureBase = null;
		for (var i = 0; i < _targets.length; i++) {
			if (_targets[i].elem === target) {
				_gestureBase = _targets[i];
				break;
			}
		}
		if (!_gestureBase) {
			_gestureBase = createGestureBase(target);
		}
		return _gestureBase;
	}

	function createGestureBase(target) {
		var _gestureBase = new _GestureBase2.default(target);
		_targets.push(_gestureBase);
		return _gestureBase;
	}

	function setActiveChildren(target, active) {
		var gestureBase = getGestureBase(target);
		if (gestureBase.hasActiveChildren != active) {
			gestureBase.hasActiveChildren = active;
			var children = gestureBase.elem.getElementsByTagName('*');
			for (var i = 0; i < children.length; i++) {
				//console.log( typeof children[i], ' ; ', children[i].id )
				// gets only the children, not grand-children
				if (children[i].parentNode == target) {
					active ? G.enable(children[i]) : G.disable(children[i]);
				}
			}
		}
	}

	function getNextLayerElement(target, x, y, list) {
		target.style.visibility = 'hidden';
		list.push(target);

		var elem = document.elementFromPoint(x, y);
		//console.log( 'elementFromPoint() : ', elem.id );

		for (var i = 0; i < _disableList.length; i++) {
			//console.log( ' => disable list: ', i, ' : ', _disableList[i].elem.id )
			if (_disableList[i].elem == elem) {
				//console.log( '  -^ match so go again')
				return getNextLayerElement(elem, x, y, list);
			}
		}

		return elem;
	}

	function getForwardedTarget(event) {
		var hiddenList = [];

		var el = getNextLayerElement(event.target, event.clientX, event.clientY, hiddenList);
		//console.log( ' returned element: (', event.clientX, ', ', event.clientY, ') ', el.id )

		//console.log( 'hidden list:')
		for (var i = 0; i < hiddenList.length; i++) {
			//console.log( '  -> ', i, ' ', hiddenList[i].id )
			hiddenList[i].style.visibility = 'visible';
		}
		hiddenList = [];

		event.stopImmediatePropagation();
		//console.log( ' - STOP - ')

		return el;
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS

	// IE 9 & 10 needs to have events captured and passed to the next layer dom element
	function handlePassThroughClick(event) {
		//console.log( 'pass through:', event )
		var el = getForwardedTarget(event);

		// IE 9+
		var evt = document.createEvent('HTMLEvents');
		evt.initEvent(event.type, true, false);
		//console.log( '     # ', el.id, ' is dispatching ' )
		el.dispatchEvent(evt);
	}
}();

exports.default = Gesture;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureBase.js":
/*!***************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureBase.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _adExternal = __webpack_require__(/*! ad-external */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js");

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _GestureEvent = __webpack_require__(/*! ./GestureEvent */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureEvent.js");

var GestureEvent = _interopRequireWildcard(_GestureEvent);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class GestureBase
                                                                                                                                                          
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { GestureBase } from 'ad-events'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		-- INTERNAL MODULE --
                                                                                                                                                          		This module is used exclusively by Gesture.  When a dom element has an event listener registered, it creates an instance of this module 
                                                                                                                                                          		to hold all the event handlers for the dom element.  Every dom element gets a new GestureBase instance. {@link Gesture}
                                                                                                                                                          	
                                                                                                                                                          */


var GestureBase = function () {
	function GestureBase(elem) {
		_classCallCheck(this, GestureBase);

		var G = this;
		G.elem = elem;
		G.hasActiveChildren = true;
		G.debug = false;
		G.eventList = [];

		G._isDragEnabled = false;
		// isDragging also used for swipe event check
		G._isDragging = false;
		G._give = 2;

		// offset coordinate for element
		G._oX = 0;
		G._oY = 0;

		// previous coordinates for drag/swipe
		G._p1X = 0;
		G._p1Y = 0;
		G._p2X = 0;
		G._p2Y = 0;

		// start coordinate
		G._sX = 0;
		G._sY = 0;

		// velocity
		G._vX = 0;
		G._vY = 0;

		G._cursor = 'mouse';
		G._start = 'down';
		G._end = 'up';

		G.init();
	}

	GestureBase.prototype.init = function init() {
		var G = this;
		if (G.debug) console.log('GestureBase.init()');

		G._handleTouchStart = G._handleTouchStart.bind(G);
		G._handleDown = G._handleDown.bind(G);
		G._handleDrag = G._handleDrag.bind(G);
		G._handleUp = G._handleUp.bind(G);

		G._elemAdd = G.elem.addEventListener.bind(G.elem);
		G._elemRemove = G.elem.removeEventListener.bind(G.elem);

		G._reset();
	};

	// replace addEventListener so can flag the event type


	GestureBase.prototype.register = function register(name, handler) {
		var G = this;
		if (G.debug) console.log('GestureBase.register(', name, ')');

		G.eventList.push(name);
		G._checkDragEnabled();

		// then actually add the listener
		G._elemAdd(name, handler);
	};

	GestureBase.prototype.unregister = function unregister(name, handler) {
		var G = this;
		if (G.debug) console.log('GestureBase.unregister(', name, ')');

		var index = G.eventList.indexOf(name);
		if (index >= 0) {
			G.eventList.splice(index, 1);
		}
		G._checkDragEnabled();

		G._elemRemove(name, handler);
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// UTILITY


	GestureBase.prototype._reset = function _reset() {
		var G = this;
		G._cursor = 'mouse';
		G._start = 'down';
		G._end = 'up';
		G.elem.addEventListener('touchstart', G._handleTouchStart);

		// listen for both touch and mouse, except on iOS devices
		if (_adExternal.Device.os != 'ios') G.elem.addEventListener('mousedown', G._handleDown);
	};

	GestureBase.prototype._checkDragEnabled = function _checkDragEnabled() {
		var G = this;
		var hasDragEventIndex = G.eventList.join('').indexOf('onDrag');

		// check if it is a drag, therefore enabling dragability
		G._isDragEnabled = hasDragEventIndex > -1;
	};

	// Android stores things like pageX in an array. This scopes the internally used event properly


	GestureBase.prototype._getEventScope = function _getEventScope(event) {
		//if( this.debug ) console.log( 'GestureBase._getEventScope(), event:', event );
		// check for existence of changedTouches instead
		//return ( Device.os == 'android' && event instanceof TouchEvent ) ? event.changedTouches[0] : event ;
		return event.changedTouches ? event.changedTouches[0] : event;
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// WINDOW EVENT ENABLE


	GestureBase.prototype._add = function _add(type, handler) {
		window.addEventListener(this._cursor + type, handler);
	};

	GestureBase.prototype._remove = function _remove(type, handler) {
		window.removeEventListener(this._cursor + type, handler);
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// HANLDERS


	GestureBase.prototype._handleDown = function _handleDown(event) {
		var G = this;
		if (G.debug) console.log('GestureBase._handleDown()');

		GestureEvent.startPoint();

		G.elem.removeEventListener('touchstart', G._handleTouchStart);
		if (_adExternal.Device.os != 'ios') G.elem.removeEventListener('mousedown', G._handleDown);

		G._isDragging = false;

		G._add(G._end, G._handleUp);
		G._add('move', G._handleDrag);

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		var localX = G.elem.x || _adView.Styles.getCss(G.elem, 'x');
		var localY = G.elem.y || _adView.Styles.getCss(G.elem, 'y');
		var globalOffsetX = elemRect.left - localX;
		var globalOffsetY = elemRect.top - localY;

		G._oX = globalOffsetX + localOffsetX;
		G._oY = globalOffsetY + localOffsetY;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		// reset the dragging vars
		G._sX = G._p1X = G._p2X = mouseX;
		G._sY = G._p1Y = G._p2Y = mouseY;

		/*console.log( 
  	'\n\t_handleDown()',
  	'| mouse:', mouseX, mouseY, 
  	'| localOffset:', localOffsetX, localOffsetY,
  	'| local:', localX, localY,
  	'| globalOffset:', globalOffsetX, globalOffsetY,
  	'| totalOffset:', G._oX, G._oY,
  	'| elemPosition:', elemPositionX, elemPositionY,
  	'\n\n'
  )*/

		localCreateEvent('onPress');

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return;
			var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY);
			if (G.debug) console.log(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}
	};

	GestureBase.prototype._handleUp = function _handleUp(event, bypass) {
		var G = this;
		if (G.debug) console.log('GestureBase._handleUp()');

		G._remove(G._end, G._handleUp);
		G._remove('move', G._handleDrag);

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		var eventName;

		if (bypass !== true) {
			localCreateEvent('onRelease');
		}

		var offsetTop = elemRect.top + window.pageYOffset;
		var offsetBottom = offsetTop + elemRect.height;
		var offsetLeft = elemRect.left + window.pageXOffset;
		var offsetRight = offsetLeft + elemRect.width;

		if (G._isDragging) {
			if (G._isDragEnabled) {
				G._dragEndOrSwipe('onDragStop');
			}
			console.log('  -> No CLICK Fired, was dragging');
		} else {
			if (mouseX > offsetLeft && mouseX < offsetRight && mouseY > offsetTop && mouseY < offsetBottom) {
				localCreateEvent('onSelect');
			}
		}

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return;
			var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, 0, 0, G._vX, G._vY);
			if (G.debug) console.log(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}

		if (G._isDragging) {
			G._dragEndOrSwipe('onSwipe');
		}

		G._reset();

		// this prevents the second mouse down on Android
		event.preventDefault();

		GestureEvent.endPoint();
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// TOUCH BYPASSING
	// This will stop from both touch and mouse events firing, thus doubling every Gesture Event fired.


	GestureBase.prototype._handleTouchStart = function _handleTouchStart(event) {
		var G = this;
		if (G.debug) console.log('GestureBase._handleTouchStart()');

		// Change the native events to listen for the rest of the system
		G._cursor = 'touch';
		G._start = 'start';
		G._end = 'end';

		G._handleDown(event);
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG


	GestureBase.prototype._handleDrag = function _handleDrag(event) {
		var G = this;
		if (G.debug) console.log('GestureBase._handleDrag()');

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var diffx1 = mouseX - G._p1X;
		var diffx2 = mouseX - G._p2X;
		G._vX = (diffx2 - diffx1) / 2 + diffx1;

		var diffy1 = mouseY - G._p1Y;
		var diffy2 = mouseY - G._p2Y;
		G._vY = (diffy2 - diffy1) / 2 + diffy1;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		/*console.log( 
  	'\t_handleDrag()',
  	'| mouse:', mouseX, mouseY, 
  	'| totalOffset:', G._oX, G._oY,
  	'| elemPosition:', elemPositionX, elemPositionY,
  	'| velocity:', G._vX, G._vY,
  	'| distance:', G._p1X - G._sX, G._p1Y - G._sY
  )*/

		var eventName;

		if (G._isDragging) {
			if (G._isDragEnabled) {
				localCreateEvent('onDrag');
			}
		} else {
			// check the inital movement to register as dragging or just a click
			if (Math.abs(G._sX - mouseX) > G._give || Math.abs(G._sY - mouseY) > G._give) {
				G._isDragging = true;

				if (G._isDragEnabled) {
					// dispatch when offset distance is exceeded
					localCreateEvent('onDragStart');
				}
			}
		}

		function localCreateEvent(name) {
			if (GestureEvent.stopped(name)) return;
			var newEvent = new GestureEvent.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, G._p1X - G._sX, G._p1Y - G._sY, G._vX, G._vY);
			if (G.debug) console.log(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}

		G._p2X = G._p1X;
		G._p1X = mouseX;

		G._p2Y = G._p1Y;
		G._p1Y = mouseY;
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG END | SWIPE


	GestureBase.prototype._dragEndOrSwipe = function _dragEndOrSwipe(type) {
		var G = this;
		if (G.debug) console.log('GestureBase._dragEndOrSwipe()', type);

		if (GestureEvent.stopped(name)) return;

		var elemRect = G.elem.getBoundingClientRect();
		var evt = new GestureEvent.Event(type, G._p1X, G._p1Y, G._p1X - elemRect.left, G._p1Y - elemRect.top, G._p1X - G._oX, G._p1Y - G._oY,
		// since _xp is assigned after moving, must use _p2X
		G._p2X - G._sX, G._p2Y - G._sY, G._vX, G._vY);
		if (G.debug) console.log(' -> dispatch', type);
		G.elem.dispatchEvent(evt);
	};

	return GestureBase;
}();

exports.default = GestureBase;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureEvent.js":
/*!****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/GestureEvent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.startPoint = startPoint;
exports.endPoint = endPoint;
/**
	@npmpackage
	@class GestureEvent
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { GestureEvent } from 'ad-events'
		</codeblock>
		<br><br>
		
		This module has custom events to be used with the Gesture module. {@link Gesture}
*/

var _kills = {};
var _eventLooping = false;

/**
			@memberOf GestureEvent
			@class GestureEvent.Event
			@param {string} name
				The event type name
			@param {number} mouseGlobalX
				The mouse x on the page
			@param {number} mouseGlobalY
				The mouse y on the page
			@param {number} mouseLocalX
				The mouse x relative to the element position
			@param {number} mouseLocalY
				The mouse y relative to the element position
			@param {number} elementX
				The element x position
			@param {number} elementY
				The element y position
			@param {number} distanceX
				The distance moved on the x, only used for drags and swipes
			@param {number} distanceY
				The distance moved on the y, only used for drags and swipes
			@param {number} velocityX
				The distance moved on the x since previous event fired, essentially the speed
			@param {number} velocityY
				The distance moved on the y since previous event fired, essentially the speed
			@desc
				Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler
				
			@example
				Gesture.add ( myDiv, GestureEvent.CLICK, handleClick );
				function handleClick( event ) {
					console.log( event )
					console.log( 'global mouse:', event.mouse.global.x, event.mouse.global.y )
					console.log( 'local mouse:', event.mouse.local.x, event.mouse.local.y )
					console.log( 'element:', event.element.x, event.element.y )
				}	
				Gesture.add ( dragDiv, GestureEvent.DRAG, handleDrag );
				function handleDrag( event ) {
					console.log( event )
					console.log( 'element:', event.element.x, event.element.y )
					console.log( 'distance:', event.distance.x, event.distance.y )
					console.log( 'velocity:', event.velocity.x, event.velocity.y )
				}					
		*/
function createEvent(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY) {
	var E = new CustomEvent(name);
	E.mouse = {
		global: {
			x: mouseGlobalX,
			y: mouseGlobalY
		},
		local: {
			x: mouseLocalX,
			y: mouseLocalY
		}
	};
	E.element = {
		x: elementX || 0,
		y: elementY || 0
	};
	E.distance = {
		x: distanceX || 0,
		y: distanceY || 0
	};
	E.velocity = {
		x: velocityX || 0,
		y: velocityY || 0
	};
	E.direction = {
		x: velocityX > 0 ? 'right' : velocityX < 0 ? 'left' : null,
		y: velocityY > 0 ? 'down' : velocityY < 0 ? 'up' : null
	};

	return E;
}

var Event = exports.Event = createEvent;

function stopBubble(event) {
	if (event) {
		// For IE, it bubbles custom events
		event.stopImmediatePropagation();
		// for all other browsers that do not do that
		_kills[event.type] = true;
		//console.log( '\n\tGestureEvent.stop() of type:', event.type )
	}
}

/**
		@memberOf GestureEvent
		@method stop
		@param {event} event
			The event parameter from the event handler
		@desc
			Stops all future events of the type during the event loop, is a native equivilent to event.stopImmediatePropogation().
			It does NOT remove any listeners, simply stops the event from bubbling up through the chain.
			
		@example
			Gesture.add ( parentDiv, GestureEvent.CLICK, handleParentClick );
			function handleParentClick( event ) {
				// This will not be heard
				console.log( 'parent click heard' )
			}
			
			Gesture.add ( childDiv, GestureEvent.CLICK, handleChildClick );
			function handleChildClick( event ) {
				GestureEvent.stop ( event )
				console.log( 'child click heard' )
			}					
	*/
var stop = exports.stop = stopBubble;

function isStopped(type) {
	return _kills[type] != undefined;
}

var stopped = exports.stopped = isStopped;

// A flag for the start of the event loop through all bases
function startPoint() {
	if (!_eventLooping) {
		// the end of event loop has been reached, so reset things
		_eventLooping = true;
		_kills = {};
	}
}
// A flag to reset any bubble killing
function endPoint() {
	_eventLooping = false;
}

/**	
	@memberOf GestureEvent	
	@const {string} OVER
	@desc
		Represents a 'mouseover', fired on desktop cursor roll over
	@example
		GestureEvent.OVER
*/
var OVER = exports.OVER = 'mouseover';

/**	
	@memberOf GestureEvent	
	@const {string} OUT
	@desc
		Represents a 'mouseout', fired on desktop cursor roll out
	@example
		GestureEvent.OUT
*/
var OUT = exports.OUT = 'mouseout';

/**	
	@memberOf GestureEvent	
	@const {string} MOVE
	@desc
		Represents a 'mousemove', fired on desktop cursor move
	@example
		GestureEvent.MOVE
*/
var MOVE = exports.MOVE = 'mousemove';

/**	
	@memberOf GestureEvent	
	@const {string} PRESS
	@desc
		Represents an 'onPress', fired on mousedown / touch start
	@example
		GestureEvent.PRESS
*/
var PRESS = exports.PRESS = 'onPress';

/**	
	@memberOf GestureEvent	
	@const {string} RELEASE
	@desc
		Represents an 'onRelease', fired on mouseup / touch end
	@example
		GestureEvent.RELEASE
*/
var RELEASE = exports.RELEASE = 'onRelease';

/**	
	@memberOf GestureEvent	
	@const {string} CLICK
	@desc
		Represents a 'click', fired on click / touch end
	@example
		GestureEvent.CLICK
*/
var CLICK = exports.CLICK = 'onSelect';

/**	
	@memberOf GestureEvent	
	@const {string} DRAG
	@desc
		Represents an 'onDrag', fired after an element is selected and before released. <br>
		Element data objects included: selection position, element position, velocity of move	
	@example
		GestureEvent.DRAG
*/
var DRAG = exports.DRAG = 'onDrag';

/**	
	@memberOf GestureEvent	
	@const {string} DRAG_START
	@desc
		Represents an 'onDragStart', fired after an element is selected, when first moved and before released. <br>
		Element data objects included: selection position, element position
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_START, handleDragStart );
		//
		function handleDragStart ( event ){
			// coordinate position of mouse/touch
			console.log( event.position );

			// coordinate position of target element
			console.log( event.element );
		}
*/
var DRAG_START = exports.DRAG_START = 'onDragStart';

/**	
	@memberOf GestureEvent	
	@const {string} DRAG_STOP
	@desc
		Represents an 'onDragStop', fired after an element is selected, moved, then released. <br>
		Element data objects included: selection position, velocity of last move
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_STOP, handleDragStop );
		//
		function handleDragStop ( event ){
			// coordinate position of mouse/touch
			console.log( event.position );

			// velocity, ie change in distance, of target element
			console.log( event.velocity );
		}
*/
var DRAG_STOP = exports.DRAG_STOP = 'onDragStop';

/**	
	@memberOf GestureEvent	
	@const {string} SWIPE
	@desc
		Represents an 'onSwipe', fired just after a DRAG_STOP, but different event properties available. <br>
		Element data objects included: direction, distance, velocity
	@example
		Gesture.addEventListener ( myDiv, GestureEvent.SWIPE, handleSwipe );
		//
		function handleSwipe ( event ){
			// direction of swipe, as strings 
			console.log( event.direction );

			// distance covered from down to release
			console.log( event.distance );

			// velocity, aka speed of swipe
			console.log( event.velocity );
		}
*/
var SWIPE = exports.SWIPE = 'onSwipe';

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/UIEvent.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-events/lib/UIEvent.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class UIEvent
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { UIEvent } from 'ad-events'
		</codeblock>
		<br><br>
		
		This module has custom events to be used with the <UIComponents>
*/
var _componentEnabled, _sliderUpdate;
var UIEvent = {
	/**	
 	@memberOf UIEvent	
 	@const {string} ENABLED
 	@desc
 		Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
 	@example
 		UIEvent.ENABLED
 */
	ENABLED: 'uiComponentEnabled',

	/**	
 	@memberOf UIEvent	
 	@const {string} RESIZE
 	@desc
 		Description needed_________.
 	@example
 		UIEvent.RESIZE
 */
	RESIZE: 'uiResize',

	/**	
 	@memberOf UIEvent	
 	@const {string} SLIDER_UPDATE
 	@desc
 		Represents an 'uiSliderUpdate', fired when a <UISlider> changes its value.
 	@example
 		UIEvent.SLIDER_UPDATE
 */
	SLIDER_UPDATE: 'uiSliderUpdate',

	get componentEnabled() {
		if (!_componentEnabled) {
			_componentEnabled = new CustomEvent('uiComponentEnabled');
		}
		return _componentEnabled;
	},
	get sliderUpdate() {
		if (!_sliderUpdate) {
			_sliderUpdate = new CustomEvent('uiSliderUpdate');
		}
		return _sliderUpdate;
	}
};

exports.default = UIEvent;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Device = __webpack_require__(/*! ./lib/Device.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/lib/Device.js");

Object.defineProperty(exports, 'Device', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Device).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-external/lib/Device.js":
/*!************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-external/lib/Device.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
	@npmpackage
	@class Device
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-external">ad-external</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Device } from 'ad-external'
		</codeblock>
		<br><br>
		
		Global constant that provide information about the Device on which the code is currently executing
*/

var Device = function () {
	function Device() {
		_classCallCheck(this, Device);
	}

	_createClass(Device, null, [{
		key: 'orientation',


		/**	
  	@memberOf Device	
  	@var {string} agentString
  	@desc
  		Current user agent of browser. */

		/**	
  	@memberOf Device	
  	@var {string} brand
  	@desc
  		Brand of device, possible values are: 
  		<code>microsoft</code>, 
  		<code>apple</code>, 
  		<code>android</code>, 
  		<code>rim</code>, 
  		<code>unknown</code>. 
  */

		/**	
  	@memberOf Device	
  	@var {string} product
  	@desc
  		Brand subtype, possible values are: 
  		<code>windows phone</code>, 
  		<code>windows</code>, 
  		<code>iphone</code>, 
  		<code>ipad</code>, 
  		<code>ipod</code>, 
  		<code>mac</code>, 
  		<code>android</code>, 
  		<code>pixel 2</code>, 
  		<code>blackberry</code>. 
  	*/

		/**	
  	@memberOf Device	
  	@var {string} type
  	@desc
  		Device type, possible values are: 
  		<code>mobile</code>, 
  		<code>tablet</code>, 
  		<code>desktop</code>. 
  		<br><br>
  		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. */

		/**	
  	@memberOf Device	
  	@var {string} os
  	@desc
  		Operating system of device. */

		/**	
  	@memberOf Device	
  	@var {string} osVersion
  	@desc
  		Version of operating system of device. */

		/** 	
  	@memberOf Device	
  	@var {string} browser
  	@desc
  		Brand of browser. */

		/**	
  	@memberOf Device	
  	@var {string} browserVersion
  	@desc
  		Version of browser. 
  */

		/**	
  	@memberOf Device	
  	@var {string} pixelRatio
  	@desc
  		Pixel ratio of device viewport. 
  */

		/** ------------------------------------------------------------------------------------------------------------- */
		// GETTERS

		/**	
  	@memberOf Device	
  	@var {string} orientation
  	@desc
  		Orientaion of device viewport: landscape or portrait. 
  */
		get: function get() {
			return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
		}

		/**	
  	@memberOf Device	
  	@var {object} dimensions
  	@property {number} width
  		window inner-width
  	@property {number} height
  		window inner-height
  	@desc
  		The current dimensions of the device's viewport, returns an object with a width and height 
  		value that are direct returns of windowWidth and windowHeight.
  */

	}, {
		key: 'dimensions',
		get: function get() {
			return {
				width: window.innerWidth,
				height: window.innerHeight
			};
		}

		/** ------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS

		/**	
  	@memberOf Device	
  	@method init
  	@desc
  		Initializes the module, which is called from within the pipeline.
  */


		/** ------------------------------------------------------------------------------------------------------------- */
		// PRIVATE METHODS

	}]);

	return Device;
}();

Device.pixelRatio = window.devicePixelRatio || 'unknown';

Device.init = function () {
	console.log('Device.init()');
	var D = this;
	D.agentString = navigator.userAgent;

	D._getType();
	D._getBrandAndOS();
	D._getBrowser();

	if (D.type !== 'desktop' && D.os === 'windows' && D.osVersion <= 8 && D.browser === 'ie' && D.browserVersion < 12) {
		console.log("You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. You also appear to be on a touchscreen device. We will assume you're actually on a desktop, since it's extremely unlikely you're on a tablet or mobile device using this specific operating system and browser.");
		D.type = 'desktop';
	}

	var line = Array(70).join('-');
	var str = '\n' + line;
	// str += '\n AGENT:\n\n\t' + D.agentString + '\n'
	// str += '\n  Brand:\t\t\t' + D.brand
	// str += '\n  Product:\t\t\t' + D.product
	// str += '\n  Type:\t\t\t\t' + D.type
	// str += '\n  Os:\t\t\t\t' + D.os + ' - ' + D.osVersion
	// str += '\n  Browser:\t\t\t' + D.browser + ' - ' + D.browserVersion
	// str += '\n  Dimensions: \t\t' + D.dimensions.width + 'x' + D.dimensions.height
	// str += '\n  Orientation:\t\t' + D.orientation
	// str += '\n  Pixel Ratio:\t\t' + D.pixelRatio
	for (var property in D) {
		if (D.hasOwnProperty(property) && typeof D[property] !== 'function') {
			str += '\n' + property + ': ' + D[property];
		}
	}
	str += '\n' + line;
	console.log(str);
};

Device._getType = function () {
	var D = this;
	var hasMobile = /(android|mobile)/gi.exec(D.agentString);
	var hasTablet = /(tablet|touch)/gi.exec(D.agentString);
	var hasIPad = /(ipad)/gi.exec(D.agentString);
	D.type = 'desktop';
	if (hasMobile) D.type = 'mobile';
	if (hasTablet) D.type = 'tablet';
	if (hasIPad) D.type = 'tablet';
};

Device._getBrandAndOS = function () {
	var D = this;
	var apple = D.agentString.match(/ip(hone|od|ad)|mac/gi);
	if (apple) {
		D.brand = 'apple';
		D.product = apple[0].toLowerCase();
		var appleOS = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(D.agentString);
		D.os = appleOS[2] == '' ? 'ios' : 'osx';
		D.osVersion = appleOS[3].replace(/\_/g, '.');
		return;
	}

	var android = /(android)\/?\s*([0-9\.]+)/gi.exec(D.agentString);
	if (android) {
		D.brand = D.product = D.os = android[1].toLowerCase();
		D._checkForSpecial('product', ['pixel 2'], D.agentString.split('(')[1].split(')')[0]);
		D.osVersion = android[2];
		return;
	}

	var microsoft = /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(D.agentString);
	if (microsoft) {
		D.brand = 'microsoft';
		D.os = 'windows';

		switch (microsoft[2]) {
			case '5.2':
				D.osVersion = 'xp';
				break;
			case '6.0':
				D.osVersion = 'vista';
				break;
			case '6.1':
				D.osVersion = '7';
				break;
			case '6.2':
				D.osVersion = '8';
				break;
			case '6.3':
				D.osVersion = '8.1';
				break;
			case '10.0':
				D.osVersion = '10';
				break;
			default:
				D.osVersion = microsoft[2];
		}

		D.product = microsoft[1].toLowerCase();
		if (D.product.match(/\snt/i)) {
			D.product = 'pc';
		}
		return;
	}

	// blackberry
	var blackberry = D.agentString.match(/(blackberry|bb10|playbook)/i);
	if (blackberry) {
		D.brand = D.product = D.os = 'blackberry';
		D.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(D.agentString)[2];
	}
};

Device._getBrowser = function () {
	var D = this;
	var browserMatches = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(D.agentString); // check for edge first

	// if it's not edge, check for other common browsers
	if (!browserMatches) {
		browserMatches = D.agentString.match(/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*([0-9\.]+)/i);
	}

	// if we checked for common browsers and got NOTHING in return, let's just use the device's default browser
	if (!browserMatches || browserMatches.length < 3) {
		console.log('we received no browser data, so we are setting it to the default of the device');
		switch (D.os) {
			case 'ios':
				D.browser = 'safari';
				break;
			case 'windows':
				D.browser = 'trident';
				break;
			default:
				D.browser = 'chrome';
				break;
		}
		D.browserVersion = 'os-default';
		return;
	}

	console.log('we received browser data');
	D.browser = browserMatches[1].toLowerCase();
	D.browserVersion = browserMatches[2];

	switch (D.browser) {
		case 'trident':
			// Check for desktop IE 10
			var versionMatch = /\brv:+(\d+)/g.exec(D.agentString);
			if (versionMatch) D.browserVersion = versionMatch[1];
		case 'msie':
			D.browser = 'ie';
			break;
		case 'crios':
			D.browser = 'chrome';
			break;
		case 'safari':
			var versionMatch = D.agentString.match(/\sversion\/([0-9\.]+)\s/i);
			if (versionMatch) D.browserVersion = versionMatch[1];
			break;
		case 'chrome':
			// check for Opera
			var versionMatch = D.agentString.match(/\b(OPR)\/([0-9\.]+)/i);
			if (versionMatch) {
				D.browser = 'opera';
				D.browserVersion = versionMatch[2];
			}
			break;
	}
};

Device._checkForSpecial = function (targetParam, array, focus) {
	var D = this;
	var param;
	for (var i = 0; i < array.length; i++) {
		param = array[i].toLowerCase();
		if (focus.match(new RegExp(param, 'i'))) {
			D[targetParam] = param;
			break;
		}
	}
};

exports.default = Device;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/index.js":
/*!***************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Matrix2D = __webpack_require__(/*! ./lib/Matrix2D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix2D.js");

Object.defineProperty(exports, 'Matrix2D', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Matrix2D).default;
  }
});

var _Matrix3D = __webpack_require__(/*! ./lib/Matrix3D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix3D.js");

Object.defineProperty(exports, 'Matrix3D', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Matrix3D).default;
  }
});

var _ParentTransform = __webpack_require__(/*! ./lib/ParentTransform */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/ParentTransform.js");

Object.defineProperty(exports, 'ParentTransform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ParentTransform).default;
  }
});

var _SimpleNoise2D = __webpack_require__(/*! ./lib/SimpleNoise2D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/SimpleNoise2D.js");

Object.defineProperty(exports, 'SimpleNoise2D', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SimpleNoise2D).default;
  }
});

var _Vector2D = __webpack_require__(/*! ./lib/Vector2D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Vector2D.js");

Object.defineProperty(exports, 'Vector2D', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Vector2D).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix2D.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix2D.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class Matrix2D
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Matrix2D } from 'ad-geom'
		</codeblock>
		<br><br>
*/

// Version : Mar 17, 2015 2:15 PM
/*
 * TODO - write Documentation
 *		- convert to  a, c, b, d, tx, ty ?
 *		- inverse?
 */

var Matrix2D = function Matrix2D() {
	var M = this;
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 1, 0]);
	M.data = new Float32Array(M.identity);
};

Matrix2D.prototype = {
	clear: function clear() {
		var M = this;
		//console.log( M.data instanceof Float32Array )
		//M.data.set ( M.identity );
		M.data = new Float32Array(M.identity);
	},

	rotate: function rotate(radians) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		_m[0] = c;
		_m[1] = s;
		_m[3] = -s;
		_m[4] = c;
		//  cos(rad),  sin(rad), 0,
		//  -sin(rad), cos(rad), 0,
		//  0,         0,        1

		M.multiply(_m, false);
		return M;
	},

	scale: function scale(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[0] = x;
		_m[4] = y;
		//  x, 0, 0,
		//  0, y, 0,
		//  0, 0, 1

		M.multiply(_m, false);
		return M;
	},

	skew: function skew(ax, ay) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[1] = Math.tan(ax);
		_m[3] = Math.tan(ay);
		//  1,       tan(ax), 0,
		//  tan(ay), 1,       0,
		//  0,       0,       1

		M.multiply(_m);
		return M;
	},

	translate: function translate(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[2] = x || 0;
		_m[5] = y || 0;
		//  1, 0, x,
		//  0, 1, y,
		//  0, 0, 1

		M.multiply(_m, true);
		return M;
	},

	multiply: function multiply(m, invert) {
		var M = this;
		// copy the current matrix data into '_c'
		var _copy = new Float32Array(M.data);

		// translate multiply needs to be inverted, where others do not
		var a = invert ? m : _copy;
		var b = invert ? _copy : m;

		for (var i = 0; i < 6; i++) {
			var k = Math.floor(i / 3) * 3;
			var q = i % 3;
			//console.log( i, '-', a[_a], b[_b], a[_a+1], b[_b+3], a[_a+2], b[_b+6] )
			M.data[i] = a[k] * b[q] + a[k + 1] * b[q + 3];
		}
		M.data[2] += a[2];
		M.data[5] += a[5];

		// a[0] * b[0] + a[1] * b[3] + a[2] * 0
		// a[0] * b[1] + a[1] * b[4] + a[2] * 0
		// a[0] * b[2] + a[1] * b[5] + a[2] * 1
		// a[3] * b[0] + a[4] * b[3] + a[2] * 0
		// a[3] * b[1] + a[4] * b[4] + a[2] * 0
		// a[3] * b[2] + a[4] * b[5] + a[5] * 1
		// 0
		// 0
		// 1
	},

	setFromCss: function setFromCss(matrixString) {
		var cssMatrix = matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
		this.data = [cssMatrix[0], cssMatrix[1], cssMatrix[4], cssMatrix[2], cssMatrix[3], cssMatrix[5]];
	},

	getCss: function getCss() {
		// a, c, tx
		// b, d, ty
		// 0, 0, 1
		// matrix(a, c, b, d, tx, ty)
		var M = this;
		return 'matrix(' + M.data[0] + ',' + M.data[1] + ',' + M.data[3] + ',' + M.data[4] + ',' + M.data[2] + ',' + M.data[5] + ')';
	}

	//http://www.wikihow.com/Inverse-a-3X3-Matrix
	/*function getMatrixInverse (m){	
 	var t = [
 		m[0], m[3], m[6], 
 		m[1], m[4], m[7],
 		m[2], m[5], m[8]
 	];
 
 	// 0,  1,  2,
 	// 3,  4,  5,
 	// 6,  7,  8
 
 	// a,  b,  0 
 	// c,  d,  0
 	// tx, ty, 1
 	console.log( m );
 	console.log( t );
 	
 	[
 		m[4],	-m[1],	m[1] * m[5] - m[4] * m[2],
 		-m[3],	m[0],	(m[0] * m[5] - m[3] * m[2]) * -1,
 		0,		0,		m[0] * m[4] - m[3] * m[1]
 	]
 
 	var d11 = m[4]
 	var d12 = - m[1]
 	var d13 = m[1] * m[5] - m[4] * m[2]
 	var d21 = - m[3]
 	var d22 = m[0]
 	var d23 = (m[0] * m[5] - m[3] * m[2]) * -1
 	var d31 = 0 
 	var d32 = 0
 	var d33 = m[0] * m[4] - m[3] * m[1]
 
 	var d11 = t[4]
 	var d12 = - t[3]
 	var d13 = t[3] * t[7] - t[4] * t[6]
 	var d21 = - t[1]
 	var d22 = t[0]
 	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
 	var d31 = 0 
 	var d32 = 0
 	var d33 = t[0] * t[4] - t[1] * t[3]
 
 	var d11 = t[4] * t[8] - t[5] * t[7]
 	var d12 = (t[3] * t[8] - t[5] * t[6]) * -1
 	var d13 = t[3] * t[7] - t[4] * t[6]
 	var d21 = (t[1] * t[8] - t[2] * t[7]) * -1
 	var d22 = t[0] * t[8] - t[2] * t[6]
 	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
 	var d31 = t[1] * t[5] - t[2] * t[4]
 	var d32 = (t[0] * t[5] - t[2] * t[3]) * -1
 	var d33 = t[0] * t[4] - t[1] * t[3]
 
 
 
 	return [ d11, d12, d13, d21, d22, d23, d31, d32, d33 ];
 }*/

};exports.default = Matrix2D;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix3D.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix3D.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class Matrix3D
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Matrix3D } from 'ad-geom'
		</codeblock>
		<br><br>
*/
var Matrix3D = function Matrix3D() {
	var M = this;
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	M.data = new Float32Array(M.identity);
};

Matrix3D.prototype = {
	clear: function clear() {
		var M = this;
		M.data.set(M.identity);
	},

	rotateX: function rotateX(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[5] = c;
		_m[6] = s;
		_m[9] = -s;
		_m[10] = c;
		//  1, 0,        0,         0,
		//  0, cos(rad), sin(rad), 0,
		//  0, -sin(rad), cos(rad),  0,
		//  0, 0,        0,         1

		M.multiply(_m);
		return M;
	},

	rotateY: function rotateY(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = c;
		_m[2] = -s;
		_m[8] = s;
		_m[10] = c;
		//  cos(rad),  0, -sin(rad), 0,
		//  0,         1, 0,        0,
		//  sin(rad), 0, cos(rad), 0,
		//  0,         0, 0,        1

		M.multiply(_m);
		return M;
	},

	rotateZ: function rotateZ(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = c;
		_m[1] = s;
		_m[4] = -s;
		_m[5] = c;
		//  cos(rad),  sin(rad), 0, 0,
		//  -sin(rad), cos(rad), 0, 0,
		//  0,         0,        1, 0,
		//  0,         0,        0, 1

		M.multiply(_m);
		return M;
	},

	scale: function scale(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = x;
		_m[5] = y;
		//  x, 0, 0, 0,
		//  0, y, 0, 0,
		//  0, 0, 1, 0,
		//  0, 0, 0, 1

		M.multiply(_m);
		return M;
	},

	skew: function skew(ax, ay) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[1] = Math.tan(ay) || 0;
		_m[4] = Math.tan(ax) || 0;
		//  1,       tan(ay), 0, 0,
		//  tan(ax), 1,       0, 0,
		//  0,       0,       1, 0,
		//  0,       0,       0, 1
		console.log(_m[1], _m[4]);
		M.multiply(_m);
		return M;
	},

	translate: function translate(x, y, z) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[12] = x || 0;
		_m[13] = y || 0;
		_m[14] = z || 0;
		//  1, 0, 0, 0,
		//  0, 1, 0, 0,
		//  0, 0, 1, 0,
		//  x, y, z, 1

		M.multiply(_m);
		return this;
	},

	multiply: function multiply(m) {
		var M = this;
		// copy the current matrix data into '_c'
		var _c = new Float32Array(M.data);

		M.data[0] = _c[0] * m[0] + _c[1] * m[4] + _c[2] * m[8];
		M.data[1] = _c[0] * m[1] + _c[1] * m[5] + _c[2] * m[9];
		M.data[2] = _c[0] * m[2] + _c[1] * m[6] + _c[2] * m[10];
		M.data[3] = 0;
		M.data[4] = _c[4] * m[0] + _c[5] * m[4] + _c[6] * m[8];
		M.data[5] = _c[4] * m[1] + _c[5] * m[5] + _c[6] * m[9];
		M.data[6] = _c[4] * m[2] + _c[5] * m[6] + _c[6] * m[10];
		M.data[7] = 0;
		M.data[8] = _c[8] * m[0] + _c[9] * m[4] + _c[10] * m[8];
		M.data[9] = _c[8] * m[1] + _c[9] * m[5] + _c[10] * m[9];
		M.data[10] = _c[8] * m[2] + _c[9] * m[6] + _c[10] * m[10];
		M.data[11] = 0;
		M.data[12] = _c[12] * m[0] + _c[13] * m[4] + _c[14] * m[8] + m[12];
		M.data[13] = _c[12] * m[1] + _c[13] * m[5] + _c[14] * m[9] + m[13];
		M.data[14] = _c[12] * m[2] + _c[13] * m[6] + _c[14] * m[10] + m[14];
		M.data[15] = 1;
	},

	getCss: function getCss() {
		var M = this;
		return 'matrix3d(' + M.data[0] + ',' + M.data[1] + ',' + M.data[2] + ', 0,' + M.data[4] + ',' + M.data[5] + ',' + M.data[6] + ', 0,' + M.data[8] + ',' + M.data[9] + ',' + M.data[10] + ', 0,' + M.data[12] + ',' + M.data[13] + ',' + M.data[14] + ', 1)';
	}
};

Matrix3D.cssToData = function (matrixString) {
	return matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
};

exports.default = Matrix3D;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/ParentTransform.js":
/*!*****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/ParentTransform.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Matrix2D = __webpack_require__(/*! ./Matrix2D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Matrix2D.js");

var _Matrix2D2 = _interopRequireDefault(_Matrix2D);

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@npmpackage
	@class ParentTransform
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ParentTransform } from 'ad-geom'
		</codeblock>
		<br><br>
*/

// pseudo?
// TODO - change order of translations, possible seperate methods that have indexes which can be a re-orderable aray
//		- convert to prototype pattern for multiple instances?
var ParentTransform = function ParentTransform(arg) {
	var self = this;

	arg = arg || {}
	/* --------------------------------------------------------------------------- */
	// PUBLIC / PASSED-IN VARIABLES
	;self.rotation = arg.rotation || 0, // in degrees, gets converted to radians before passing to Matrix2D
	self.x = arg.x || 0, self.y = arg.y || 0, self.scaleX = arg.scaleX || 1, self.scaleY = arg.scaleY || 1, self.originX = arg.originX || 0, self.originY = arg.originY || 0;
	self.points = arg.points || [];

	/* --------------------------------------------------------------------------- */
	// PUBLIC
	self.calculatedPoints = [];

	/* --------------------------------------------------------------------------- */
	// PRIVATE VARIABLES
	var _matrix = new _Matrix2D2.default();
	console.log(_matrix);

	/* --------------------------------------------------------------------------- */
	// PUBLIC METHODS
	self.addPoint = function (toAdd) {
		self.points.push(toAdd);
	};

	self.addPoints = function (toAdd) {
		self.points = self.points.concate(toAdd);
	};

	self.update = function (callback) {
		_matrix.clear();
		_matrix.translate(self.x, self.y);
		_matrix.scale(self.scaleX, self.scaleY);
		_matrix.rotate(_adUtils.MathUtils.toRadians(self.rotation));

		self.calculatedPoints = [];
		for (var i = 0; i < this.points.length; i++) {
			var newPt = transformPoint(self.points[i]);
			self.calculatedPoints.push(newPt);
		}
		if (callback) callback(self.calculatedPoints);
		return self.calculatedPoints;
	};

	/* --------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function transformPoint(point) {
		/*console.log( "x:", x, "y:", y )
  console.log( "------------------------")
  console.log( mtx[0], mtx[1], mtx[2] );
  console.log( mtx[3], mtx[4], mtx[5] );
  console.log( 0, 0, 1 );
  console.log( "------------------------")
  */

		var _offSetX = point[0] - self.originX;
		var _offSetY = point[1] - self.originY;

		var _newX = _offSetX * _matrix.data[0] + _offSetY * _matrix.data[3] + _matrix.data[2];
		var _newY = _offSetX * _matrix.data[1] + _offSetY * _matrix.data[4] + _matrix.data[5];
		_newX += self.originX;
		_newY += self.originY;

		return [_newX, _newY];
	}
};

exports.default = ParentTransform;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/SimpleNoise2D.js":
/*!***************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/SimpleNoise2D.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Vector2D = __webpack_require__(/*! ./Vector2D */ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Vector2D.js");

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                              @npmpackage
                                                                                                                                                              @class SimpleNoise2D
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
                                                                                                                                                                  <br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { SimpleNoise2D } from 'ad-geom'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                                  
                                                                                                                                                                  SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
                                                                                                                                                                  It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
                                                                                                                                                                  For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
                                                                                                                                                          */


var SimpleNoise2D = function SimpleNoise2D() {
	_classCallCheck(this, SimpleNoise2D);
};

SimpleNoise2D.rx = [];
SimpleNoise2D.ry = [];
SimpleNoise2D.MAX_VERTICES = 256;
SimpleNoise2D.MAX_VERTICES_MASK = 255;

SimpleNoise2D.get = function (x, y) {
	return new _Vector2D2.default(SimpleNoise2D._getVal('x', x), SimpleNoise2D._getVal('y', y));
};

SimpleNoise2D._init = function () {
	for (var i = 0; i < SimpleNoise2D.MAX_VERTICES; ++i) {
		if (i === SimpleNoise2D.MAX_VERTICES - 1) {
			SimpleNoise2D.rx.push(SimpleNoise2D.rx[0]);
			SimpleNoise2D.ry.push(SimpleNoise2D.ry[0]);
		}
		SimpleNoise2D.rx.push(Math.random() - 0.5);
		SimpleNoise2D.ry.push(Math.random() - 0.5);
	}
};

SimpleNoise2D._lerp = function (a, b, t) {
	return a * (1 - t) + b * t;
};

SimpleNoise2D._getVal = function (axis, index) {
	if (SimpleNoise2D.rx.length == 0) SimpleNoise2D._init();

	var vals = axis === 'x' ? SimpleNoise2D.rx : SimpleNoise2D.ry;

	index = index % SimpleNoise2D.MAX_VERTICES;
	var t = index - ~~index;
	var step = t * t * (3 - 2 * t);

	var min = ~~index & SimpleNoise2D.MAX_VERTICES_MASK;
	var max = min + 1 & SimpleNoise2D.MAX_VERTICES_MASK;

	return SimpleNoise2D._lerp(vals[min], vals[max], step);
};

exports.default = SimpleNoise2D;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Vector2D.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-geom/lib/Vector2D.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class Vector2D
                                                                                                                                                          	@param {number} x
                                                                                                                                                          	@param {number} y
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-geom">ad-geom</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { Vector2D } from 'ad-geom'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		A simple 2D Vector classs 
                                                                                                                                                          	@example
                                                                                                                                                          		var myVector1 = new Vector2D( 0, 320 );
                                                                                                                                                          		var myVector2 = new Vector2D( -3, 5.5 );
                                                                                                                                                          */


var Vector2D = function () {
	function Vector2D(x, y) {
		_classCallCheck(this, Vector2D);

		this.x = x || 0;
		this.y = y || 0;
	}

	/** 
 	@memberOf Vector2D
 	@method add
 	@param {Vector2D} v
 	@returns {Vector2D}
 	@desc
 		Adds another vector to itself
 	@example
         	myVector1.add( myVector2 );
 */


	Vector2D.prototype.add = function add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	};

	/** 
 	@memberOf Vector2D
 	@method sub
 	@param {Vector2D} v
 	@returns {Vector2D}
 	@desc
 		Subtracts another vector from itself
 		@example
         	myVector1.sub( myVector2 );
    */


	Vector2D.prototype.sub = function sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	};

	/** 
 	@memberOf Vector2D
 	@method dist
 	@param {Vector2D} v
 	@returns {number} The distance between two vectors as locations
 	@example
         	var distance = myVector.dist( myVector2 );
    */


	Vector2D.prototype.dist = function dist(v) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		return Math.sqrt(x * x + y * y);
	};

	/** 
 	@memberOf Vector2D
 	@method mult
 	@param {number} s 
 	@desc
 		Multiplies X and Y of the vector by s
 	@example
         	myVector.mult( 10.3 );
    */


	Vector2D.prototype.mult = function mult(s) {
		this.x *= s;
		this.y *= s;
		return this;
	};

	/** 
 	@memberOf Vector2D
 	@method div
 	@param {number} s
 	@returns {Vector2D}
 	@desc
 		Divides X and Y of the vector by s
 	@example
         	myVector.div( 2 );
    */


	Vector2D.prototype.div = function div(s) {
		this.x /= s;
		this.y /= s;
		return this;
	};

	/** 
 	@memberOf Vector2D
 	@method limit
 	@param {number} s
 	@returns {Vector2D}
 	@desc
 		Limits the length of the vector if it's longer than s
 	@example
         	myVector.limit( 18.2 );
    */


	Vector2D.prototype.limit = function limit(s) {
		var m = this.length();
		if (m > s) {
			this.mult(s / m);
		}
		return this;
	};

	/** 
 	@memberOf Vector2D
 	@method length
 	@returns {number} The length of the vector.
 	@example
         	var length = myVector.length();
    */


	Vector2D.prototype.length = function length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	/** 
 	@memberOf Vector2D
 	@method normalize
 	@returns {Vector2D}
 	@desc
 		Normalizes the vector( ie scale the vector to length of 1 )
 	@example
         	myVector.normalize();
    */


	Vector2D.prototype.normalize = function normalize() {
		var ratio = 1 / this.length();
		return this.mult(ratio);
	};

	/** 
 	@memberOf Vector2D
 	@method clone
 	@returns {Vector2D}
 	@desc
 		Creates a new Vector2D with and same x and y
 	@example
         	var newVecotor = myVector.clone();
    */


	Vector2D.prototype.clone = function clone() {
		return new Vector2D(this.x, this.y);
	};

	/** 
 	@memberOf Vector2D
 	@method degreeToVector
 	@returns {Vector2D}
 	@desc
 		Converts a degree 0 - 360 to a normalized vector
 	@example
 	    	var myVecotor = Vector2D.degreeToVector( 45 );
 */


	Vector2D.degreeToVector = function degreeToVector(d) {
		var theta = _adUtils.MathUtils.toRadians(d);
		return new Vector2D(Math.cos(theta), Math.sin(theta));
	};

	/** 
 	@memberOf Vector2D
 	@method random
 	@param {number} degreeIncrement
 		Optional, the degree increment of the random vector, defaults to 0.01
 	@returns {Vector2D}
 	@desc
 		Returns a random normalized vector 
 	@example
 		var myVecotor1 = Vector2D.random();
 		var myVecotor2 = Vector2D.random( 1 );
 */


	Vector2D.random = function random(degreeIncrement) {
		var inc = degreeIncrement || 0.01;
		return Vector2D.degreeToVector(_adUtils.MathUtils.random(0, 360, inc));
	};

	return Vector2D;
}();

exports.default = Vector2D;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-polyfills/lib/request-animation-frame.js":
/*!******************************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-polyfills/lib/request-animation-frame.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// POLYFILL : check for and/or replace window.requestAnimationFrame

// there is a bug in iOS6 for RAF, so just detect being on it and fall back
var _isiOS6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent);

var _prefix = ['webkit', 'moz'];
for (var i = 0; !window.requestAnimationFrame && i < _prefix.length; i++) {
	window.requestAnimationFrame = window[_prefix[i] + 'RequestAnimationFrame'];
	window.cancelAnimationFrame = window[_prefix[i] + 'CancelAnimationFrame'] || window[_prefix[i] + 'CancelRequestAnimationFrame'];
}

if (!window.requestAnimationFrame || !window.cancelAnimationFrame || _isiOS6) {
	console.log('PolyFill -> FrameRate');
	window.requestAnimationFrame = function (callback) {
		return setTimeout(callback, 17);
	};
	window.cancelAnimationFrame = clearTimeout;
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/index.js":
/*!*************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.UITextField = exports.UISvg = exports.UISplitText = exports.UISlider = exports.UIImage = exports.UIGroup = exports.UIFlex = exports.UIDiv = exports.UIComponent = exports.UICanvas = exports.UIButton = exports.UIBorder = exports.TextSplitType = exports.TextFormat = undefined;

var _UIBorder = __webpack_require__(/*! ./lib/UIBorder */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIBorder.js");

Object.defineProperty(exports, 'UIBorder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIBorder).default;
  }
});

var _UIButton = __webpack_require__(/*! ./lib/UIButton */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIButton.js");

Object.defineProperty(exports, 'UIButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIButton).default;
  }
});

var _UICanvas = __webpack_require__(/*! ./lib/UICanvas */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UICanvas.js");

Object.defineProperty(exports, 'UICanvas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UICanvas).default;
  }
});

var _UIComponent = __webpack_require__(/*! ./lib/UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

Object.defineProperty(exports, 'UIComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIComponent).default;
  }
});

var _UIDiv = __webpack_require__(/*! ./lib/UIDiv */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIDiv.js");

Object.defineProperty(exports, 'UIDiv', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIDiv).default;
  }
});

var _UIFlex = __webpack_require__(/*! ./lib/UIFlex */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIFlex.js");

Object.defineProperty(exports, 'UIFlex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIFlex).default;
  }
});

var _UIGroup = __webpack_require__(/*! ./lib/UIGroup */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIGroup.js");

Object.defineProperty(exports, 'UIGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIGroup).default;
  }
});

var _UIImage = __webpack_require__(/*! ./lib/UIImage */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIImage.js");

Object.defineProperty(exports, 'UIImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UIImage).default;
  }
});

var _UISlider = __webpack_require__(/*! ./lib/UISlider */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISlider.js");

Object.defineProperty(exports, 'UISlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UISlider).default;
  }
});

var _UISplitText = __webpack_require__(/*! ./lib/UISplitText */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISplitText.js");

Object.defineProperty(exports, 'UISplitText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UISplitText).default;
  }
});

var _UISvg = __webpack_require__(/*! ./lib/UISvg */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISvg.js");

Object.defineProperty(exports, 'UISvg', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UISvg).default;
  }
});

var _UITextField = __webpack_require__(/*! ./lib/UITextField */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UITextField.js");

Object.defineProperty(exports, 'UITextField', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UITextField).default;
  }
});

var _TextFormat = __webpack_require__(/*! ./lib/TextFormat */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextFormat.js");

var TextFormat = _interopRequireWildcard(_TextFormat);

var _TextSplitType = __webpack_require__(/*! ./lib/TextSplitType */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextSplitType.js");

var TextSplitType = _interopRequireWildcard(_TextSplitType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TextFormat = TextFormat;
exports.TextSplitType = TextSplitType;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextFormat.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextFormat.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class TextFormat
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { TextFormat } from 'ad-ui'
		</codeblock>
		<br><br>
		
		Custom constants to identify the layout type for a <UITextField>.  Each type changes the format of how the text content
		is displayed and will run an internal auto size if applicable to the type.
*/

/**
	@memberOf TextFormat
	@const {string} INLINE
	@desc
		UITextField lays out the words inline with no word wrapping, which does not necessarily mean only 1 line.  
		If html &lt;br> tags are used, they will be honored, but no autmatic line breaking happens. 
		This does NOT auto size and will overflow horizontally and vertically depending on the width and height.
		<br>
		<img src="../docs_images/textformat/inline.png" />
	@example
		TextFormat.INLINE
*/
var INLINE = exports.INLINE = 'inline';

/**
	@memberOf TextFormat
	@const {string} INLINE_CLAMP
		UITextField lays out the words inline with no word wrapping, which does not necessarily mean only 1 line.  
		If html &lt;br> tags are used, they will be honored, but no autmatic line breaking happens. 
		This does NOT auto size, however it changes the width AND height of the UITextField to clamp to the size of the content.
		<br>
		<img src="../docs_images/textformat/inline_clamp.png" />
	@example
		TextFormat.INLINE_CLAMP
*/
var INLINE_CLAMP = exports.INLINE_CLAMP = 'inlineClamp';

/**
	@memberOf TextFormat
	@const {string} INLINE_FIT
		UITextField lays out the words inline with no word wrapping, which does not necessarily mean only 1 line.  
		If html &lt;br> tags are used, they will be honored, but no autmatic line breaking happens. 
		This DOES auto size and will shrink horizontally and vertically to fit inside the width and height.
		<br>
		<img src="../docs_images/textformat/inline_fit.png" />
	@example
		TextFormat.INLINE_FIT
*/
var INLINE_FIT = exports.INLINE_FIT = 'inlineFit';

/**
	@memberOf TextFormat
	@const {string} INLINE_FIT_CLAMP
		This is a combination that applies TextFormat.INLINE_FIT followed by TextFormat.INLINE_CLAMP
		<br>
		<img src="../docs_images/textformat/inline_fit.png" />
		<br>
		<b>would then become</b>
		<br>
		<img src="../docs_images/textformat/inline_fit_clamp.png" />
	@example
		TextFormat.INLINE_FIT_CLAMP
*/
var INLINE_FIT_CLAMP = exports.INLINE_FIT_CLAMP = 'inlineFitClamp';

/**
	@memberOf TextFormat
	@const {string} PARAGRAPH
		UITextField uses word wrapping to automatically break lines creating a paragraph layout.
		This does NOT auto size and will overflow vertically, just like a webpage.
		<br>
		<img src="../docs_images/textformat/paragraph.png" />
	@example
		TextFormat.PARAGRAPH
*/
var PARAGRAPH = exports.PARAGRAPH = 'paragraph';

/**
	@memberOf TextFormat
	@const {string} PARAGRAPH_CLAMP
		UITextField uses word wrapping to automatically break lines creating a paragraph layout.
		This does NOT auto size and will overflow vertically, just like a webpage. 
		However, while maintaining the defined width, it changes the height of the UITextField to clamp to the size of the content.
		<br>
		<img src="../docs_images/textformat/paragraph_clamp.png" />
	@example
		TextFormat.PARAGRAPH_CLAMP
*/
var PARAGRAPH_CLAMP = exports.PARAGRAPH_CLAMP = 'paragraphClamp';

/**
	@memberOf TextFormat
	@const {string} PARAGRAPH_FIT
		UITextField uses word wrapping to automatically break lines creating a paragraph layout.
		This DOES auto size and will shrink the entire chunk to fit inside the width and height.
		<br>
		<img src="../docs_images/textformat/paragraph_fit.png" />
	@example
		TextFormat.PARAGRAPH_FIT
*/
var PARAGRAPH_FIT = exports.PARAGRAPH_FIT = 'paragraphFit';

/**
	@memberOf TextFormat
	@const {string} PARAGRAPH_FIT_CLAMP
		This is a combination that applies TextFormat.PARAGRAPH_FIT followed by TextFormat.PARAGRAPH_CLAMP
		<br>
		<img src="../docs_images/textformat/paragraph_fit.png" />
		<br>
		<b>would then become</b>
		<br>
		<img src="../docs_images/textformat/paragraph_fit_clamp.png" />
	@example
		TextFormat.PARAGRAPH_FIT_CLAMP
*/
var PARAGRAPH_FIT_CLAMP = exports.PARAGRAPH_FIT_CLAMP = 'paragraphFitClamp';

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextSplitType.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextSplitType.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class TextSplitType
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { TextSplitType } from 'ad-ui'
		</codeblock>
		<br><br>
		
		Constants defining how a {@link UISplitText} should break apart the textfields
		*/

/**
	@memberof TextSplitType
	@const {string} LINES
		Limits the splitting of a {@link UISplitText} to line and words only
		<br><br>
		Functionally identical to TextSplitType.WORDS
	@example
		TextSplitType.LINES
		*/
var LINES = exports.LINES = 'lines';

/**
	@memberof TextSplitType
	@const {string} WORDS 
		Limits the splitting of a {@link UISplitText} to line and words only
		<br><br>
		Functionally identical to TextSplitType.LINES
	@example
		TextSplitType.WORDS
		*/
var WORDS = exports.WORDS = 'words';

/**
	@memberof TextSplitType
	@const {string} CHARACTERS
		Limits the splitting of a {@link UISplitText} to lines, words, and also characters
	@example
		TextSplitType.CHARACTERS
		*/
var CHARACTERS = exports.CHARACTERS = 'characters';

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIBorder.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIBorder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIDiv = __webpack_require__(/*! ./UIDiv */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIDiv.js");

var _UIDiv2 = _interopRequireDefault(_UIDiv);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UIBorder
                                                                                                                                                          	@param {object} arg
                                                                                                                                                          	@property {string} id
                                                                                                                                                          		Element id.
                                                                                                                                                          	@property {element} target
                                                                                                                                                          		DOM Element in which to create this border.
                                                                                                                                                          	@property {number} size
                                                                                                                                                          		Border thickness.
                                                                                                                                                          	@property {string} color
                                                                                                                                                          		Hex code representing border color.
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UIBorder } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending UIDiv which adds a border to a div.
                                                                                                                                                          	@example
                                                                                                                                                          		// simple button that passes in an image to the bg and 2 images as the icons for the different states of the button.  Notice no width or height is set.
                                                                                                                                                          		var myBorder = new UIBorder({
                                                                                                                                                          			id : 'my-border',
                                                                                                                                                          			target : View.main,
                                                                                                                                                          			size : 1,
                                                                                                                                                          			color : '#ff0000'
                                                                                                                                                          		})
                                                                                                                                                          */


var UIBorder = function UIBorder(arg) {
	_classCallCheck(this, UIBorder);

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _size;
	var _color;

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP
	var U = new _UIDiv2.default(arg);

	_adView.Styles.addClass(U, 'ui-border');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTER | SETTTER
	Object.defineProperties(U, {
		/**
  	@memberOf UIBorder
  	@var size
  	@desc
  		Getter|Setter : A Number representing the size of the border in pixels.
  	@example
  		// SET
  		myBorder.size = 4;
  			// GET
  		console.log( myBorder.size )
  */
		size: {
			get: function get() {
				return _size;
			},
			set: function set(value) {
				//console.log( 'UIBorder :: SET -> size =', value );
				if (value != undefined && _size != value) {
					_size = value;

					_adView.Styles.setCss(U, {
						borderWidth: _size
					});
				}
			}
		},

		/**
  	@memberOf UIBorder
  	@var color
  	@desc
  		Getter|Setter : A String representing the color of the border.
  	@example
  		// SET
  		myBorder.color = '#fff000';
  			// GET
  		console.log( myBorder.color )
  */
		color: {
			get: function get() {
				return _color;
			},
			set: function set(value) {
				//console.log( 'UIBorder :: SET -> color =', value )
				if (value && _color != value) {
					_color = value;

					_adView.Styles.setCss(U, {
						borderColor: _color
					});
				}
			}
		}
	});
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	U.toString = function () {
		return '[object UIBorder]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// INIT
	_adEvents.Gesture.disable(U);
	U.color = arg.color;
	U.size = arg.size;

	return U;
};

exports.default = UIBorder;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIButton.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIButton.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _UIImage = __webpack_require__(/*! ./UIImage */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIImage.js");

var _UIImage2 = _interopRequireDefault(_UIImage);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UIButton
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UIButton } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending UIComponent.  It is a DOM element that has a child handling system for toggling the active state.
                                                                                                                                                          		By extending UIComponent this has all of its native properties and methods.  See {@link UIComponent} for more info.
                                                                                                                                                          		<br><br>
                                                                                                                                                          		<b>Note:</b><br>
                                                                                                                                                          		When adding a bg element or icons, there is no need to set the width and height at the css level. The UIButton will inherit the dimensions
                                                                                                                                                          		of the children.  However, if either the width or height is set, that will be the size of the UIButton.  The hit state is the UIButton itself
                                                                                                                                                          		so keep in mind that even if the content is very large, if the css sets the width and height to a smaller amount, there will be a small hit area
                                                                                                                                                          		for clicks, rollovers and rollouts.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1:</b>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// Create a simple button on the Main container that passes in an image to the bg and 2 images 
                                                                                                                                                          			// as the icons for the different states of the button.  Notice no width or height is set.
                                                                                                                                                          			T.myButton = new UIButton({
                                                                                                                                                          				id : 'my-btn',
                                                                                                                                                          				target : T,
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 30,
                                                                                                                                                          					y : 10
                                                                                                                                                          				},
                                                                                                                                                          				bg : 'btnBg',
                                                                                                                                                          				icon : [ 
                                                                                                                                                          					'btnPlay',
                                                                                                                                                          					'btnPause'
                                                                                                                                                          				],
                                                                                                                                                          				onClick : handleMyButtonClick
                                                                                                                                                          			});
                                                                                                                                                          
                                                                                                                                                          			function handleMyButtonClick ( event ){
                                                                                                                                                          				console.log( event.target, 'clicked' )
                                                                                                                                                          			}
                                                                                                                                                          
                                                                                                                                                          			// referenced later anywhere outside the class by
                                                                                                                                                          			View.main.myButton			
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 2:</b>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create the same button as above, but more customized images 
                                                                                                                                                          			// for the bg and the different states
                                                                                                                                                          			T.myButton = new UIButton({
                                                                                                                                                          				id : 'my-btn',
                                                                                                                                                          				target : T,
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 30,
                                                                                                                                                          					y : 10
                                                                                                                                                          				},
                                                                                                                                                          				bg : new UIImage({
                                                                                                                                                          					source : 'btnBg',
                                                                                                                                                          					css : {
                                                                                                                                                          						width : 120,
                                                                                                                                                          						height : 40,
                                                                                                                                                          					}
                                                                                                                                                          				}),
                                                                                                                                                          				icon : [ 
                                                                                                                                                          					new UIImage({
                                                                                                                                                          						source : 'btnPause',
                                                                                                                                                          						css : {
                                                                                                                                                          							x : 20,
                                                                                                                                                          							y : 10,
                                                                                                                                                          							width : 80,
                                                                                                                                                          							height : 20,
                                                                                                                                                          							backgroundColor : 'rgba(0,100,100,.5)'
                                                                                                                                                          						}
                                                                                                                                                          					}),
                                                                                                                                                          					new UIImage({
                                                                                                                                                          						source : 'btnPause',
                                                                                                                                                          						css : {
                                                                                                                                                          							x : 20,
                                                                                                                                                          							y : 10,
                                                                                                                                                          							width : 80,
                                                                                                                                                          							height : 20,
                                                                                                                                                          							backgroundColor : 'rgba(0,100,100,.5)'
                                                                                                                                                          						}
                                                                                                                                                          					}) 
                                                                                                                                                          				],
                                                                                                                                                          				onClick : handleMyButtonClick
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 3:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create a button with a textfield passed in as the icon state of the button
                                                                                                                                                          			// also it is aligned inline rather than with Align.set()
                                                                                                                                                          			T.myButton = new UIButton({
                                                                                                                                                          				id : 'my-btn',
                                                                                                                                                          				target : T,
                                                                                                                                                          				css : {
                                                                                                                                                          					width : 100,
                                                                                                                                                          					height : 40,
                                                                                                                                                          					backgroundColor : '#ff0000'
                                                                                                                                                          				},
                                                                                                                                                          				bg : 'btnBg',
                                                                                                                                                          				icon: [
                                                                                                                                                          					new UITextField ({
                                                                                                                                                          						css : {
                                                                                                                                                          							width : 150,
                                                                                                                                                          							height : 40,
                                                                                                                                                          							color : '#ffffff'
                                                                                                                                                          						},
                                                                                                                                                          						fontSize : 12,
                                                                                                                                                          						fontFamily : 'template_font',
                                                                                                                                                          						format : TextFormat.INLINE_FIT,
                                                                                                                                                          						alignText : Align.CENTER,
                                                                                                                                                          						text : 'CLICK FOR MORE'
                                                                                                                                                          					})
                                                                                                                                                          				],
                                                                                                                                                          				align : {
                                                                                                                                                          					x : Align.CENTER,
                                                                                                                                                          					y : {
                                                                                                                                                          						type : Align.BOTTOM,
                                                                                                                                                          						offset : -30
                                                                                                                                                          					}
                                                                                                                                                          				}
                                                                                                                                                          				onClick : handleMyButtonClick
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample Extension:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// When needing to make a custom button, use this template then add code accordingly
                                                                                                                                                          			function UIButtonExtend( arg ){
                                                                                                                                                          
                                                                                                                                                          				var U = new UIButton ( arg );
                                                                                                                                                          
                                                                                                                                                          				U._onClick = function ( event ){
                                                                                                                                                          					// extended click method
                                                                                                                                                          				}
                                                                                                                                                          
                                                                                                                                                          				function handleBaseEnabled ( event ){
                                                                                                                                                          					var listener = U.enabled ? 'addEventListener' : 'removeEventListener' ;
                                                                                                                                                          					// handle other listeners
                                                                                                                                                          				}
                                                                                                                                                          
                                                                                                                                                          				U.addEventListener ( UIEvent.ENABLED, handleBaseEnabled )
                                                                                                                                                          
                                                                                                                                                          				U.enabled = true;
                                                                                                                                                          
                                                                                                                                                          				return U;
                                                                                                                                                          			}
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          */


var UIButton = function UIButton(arg) {
	_classCallCheck(this, UIButton);

	arg = arg || {};
	arg.css = arg.css || {};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// BASE CSS
	_adView.Styles.injectStylesheet('RED_uiButton', '.ui-button', 'position:absolute', '.ui-button-state', 'position: absolute; width:inherit; height:inherit;');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _state = 0;
	var _icon = [];
	var _bg;
	// this is used by the video components so the icons will force fit inside buttons
	var _containChild = !!arg.containChild;

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP
	var U = new _UIComponent2.default(arg);
	_adView.Styles.addClass(U, 'ui-button');

	if (arg.bg) {
		createChild(arg.bg, false);
	}
	// called after bg is set to define a width/height for icon align calls
	clampContainer();

	arg.icon = arg.icon || [];
	for (var i = 0; i < arg.icon.length; i++) {
		createChild(arg.icon[i], true);
	}
	// call again to account for icons
	clampContainer();

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC PROPERTIES
	/**
 	@memberOf UIButton
 	@var {boolean} togglable
 		A Boolean to set whether or not the button will toggle between the different states of the button, which switches the 
 		visiblity of the child elements
 */
	U.togglable = arg.icon.length > 1;

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTER | SETTTER
	Object.defineProperties(U, {
		/**
  	@memberOf UIButton
  	@var {element} bg
  	@desc
  		Getter : The bottom most element of a UIButton.  This allows for a background image to be set with a UIImage, or any other 
  		UIComponent natively. It is set in the constructor as the bg: param.  This allows public access to that element to that 
  		element as a getter, without allowing to overwrite the content.
  		<br><br>
  			<b>Example 1</b><br>
  		Internally create a UIImage as the background:<br> 
  		<codeblock>
  			var myButton = new UIButton({
  				bg : 'btnBg'
  			});
  		</codeblock>
  		<br><br>
  		<b>Example 2</b><br>
  	Pass in a UIImage to add custom css to the elements:<br>
  	<codeblock>
  		var myButton = new UIButton({
  			bg : new UIImage({
  				source : 'btnBg',
  				css : {
  					width : 80,
  					height : 20,
  					backgroundColor : 'rgba(0,100,100,.5)'
  				}
  			})
  		});
  	</codeblock>
  	<br><br>
  */
		bg: {
			get: function get() {
				return _bg;
			}
		},

		/**
  	@memberOf UIButton
  	@var {array} icon
  	@desc
  		Getter : An Array of the icons, which are set as an array in the constructor as the icon:[] param.  This allows public access to 
  		those icons as getters, without allowing to overwrite the array content.  When clicking the button, it will auto toggle 
  		between 0 and 1, however this can be set to any other state that is avaiable. When instantiating, pass in the elements as either 
  		strings for the name of images to create UIImages or use other dom elements such as UIComponents to create custom style.
  		<br><br>
  			<b>Example 1</b><br>
  		Internally creates 2 UIImages as the icons, aka states, of the button:<br>
  		<codeblock>
  			var myButton = new UIButton({
  				icon : [ 
  					'btnPlay',
  					'btnPause'
  				]
  			});
  		</codeblock>
  		<br><br>
  			<b>Example 2</b><br>
  		Pass in 2 UIImages as the icons of the button, to add custom css to the elements:<br>
  		<codeblock>
  			var myButton = new UIButton({
  				icon : [ 
  					new UIImage({
  						source : 'btnPause',
  						css : {
  							x : 20,
  							y : 10,
  							width : 80,
  							height : 20,
  							backgroundColor : 'rgba(0,100,100,.5)'
  						}
  					}),
  					new UIImage({
  						source : 'btnPause',
  						css : {
  							x : 20,
  							y : 10,
  							width : 80,
  							height : 20,
  							backgroundColor : 'rgba(0,100,100,.5)'
  						}
  					}) 
  				]
  			});
  		</codeblock>
  		<br><br>
  */
		icon: {
			get: function get() {
				return _icon;
			}
		},

		/**
  	@memberOf UIButton
  	@var {element} state
  	@desc
  		Getter|Setter : A Number representing the index of which icon is being displayed, aka the state of the button.  These are set as an array in 
  		the constructor as the icon:[] param.  When clicking the button, it will auto toggle between 0 and 1, however this can be set to any other state that is avaiable.
  		<br><br>
  	
  		<b>Example</b><br>
  		Internally creates 3 UIImages as the icons of the button, which will toggle between 'btnPlay' and 'btnPause', but can manually set 
  		to show 'btnAlt' by setting state to 2:<br>	
  		<codeblock>
  			var myButton = new UIButton({
  				icon : [ 
  					'btnPlay',
  					'btnPause',
  					'btnAlt'
  				]
  			});
  			myButton.state = 2 	// sets the button to 'btnAlt'
  		</codeblock>
  		<br>
  */
		state: {
			get: function get() {
				return _state;
			},
			set: function set(value) {
				_state = value;
				if (value >= _icon.length) {
					_state = 0;
				}
				for (var i = 0; i < _icon.length; i++) {
					_icon[i].style.visibility = i == _state ? 'visible' : 'hidden';
				}
			}
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf UIButton
 	@method onClick
 	@desc
 		A Method that will be called on click of the button.  This is set in the constructor or can be manually assigned.
 		It is a shorthand for calling <code>Gesture.addEventListener( myButton, GestureEvent.CLICK, handleClick );</code>
 */
	U.onClick = arg.onClick || function (event) {}
	//console.log( 'UIButton.onClick()' )


	/**
 	@memberOf UIButton
 	@method onOver
 	@desc
 		A Method that will be called on roll over of the button.  This is set in the constructor or can be manually assigned.
 		It is a shorthand for calling <code>Gesture.addEventListener( myButton, GestureEvent.OVER, handleRollOver );</code>
 */
	;U.onOver = arg.onOver || function (event) {}
	//console.log( 'UIButton.onOver()' )


	/**
 	@memberOf UIButton
 	@method onOut
 	@desc
 		A Method that will be called on roll out of the button.  This is set in the constructor or can be manually assigned.
 		It is a shorthand for calling <code>Gesture.addEventListener( myButton, GestureEvent.OUT, handleRollOut );</code>
 */
	;U.onOut = arg.onOut || function (event) {}
	//console.log( 'UIButton.onOut()' )


	/**
 	@memberOf UIButton
 	@method toString
 	@returns {string} [object UIButton]
 	@desc
 		A String representing the object type.
 */
	;U.toString = function () {
		return '[object UIButton]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PROTECTED METHODS

	/**	Method: _onClick()
 		Protected Method for INTERNAL use when extending the class. Assign a handler directly to the button instance.
 */
	U._onClick = function (event) {};

	/**	Method: _onOver()
 		Protected Method for INTERNAL use when extending the class. Assign a handler directly to the button instance.
 */
	U._onOver = function (event) {};

	/**	Method: _onOut()
 		Protected Method for INTERNAL use when extending the class. Assign a handler directly to the button instance.
 */
	U._onOut = function (event) {};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createChild(name, isIcon) {
		var elem;
		var id = arg.id + (isIcon ? '-state-' + _icon.length : '-bg');

		if (typeof name == 'string') {
			elem = new _UIImage2.default({
				target: U,
				id: id,
				source: name,
				css: _containChild ? {
					width: 'inherit',
					height: 'inherit'
				} : {}
			});
		} else {
			elem = name;
			elem.id = id;
			U.addChild(elem);
			if (/(UITextField)/gi.exec(elem.toString())) {
				elem.resetToDefault();
			}
			elem._initAlign(true);
		}

		if (isIcon) {
			_icon.push(elem);
			_adView.Styles.addClass(elem, 'ui-button-state');
		} else {
			_bg = elem;
		}

		_adEvents.Gesture.disable(elem);
	}

	function clampContainer() {
		_adView.Clamp.set(U, 'clamp' + (!arg.css.width ? 'X' : '') + (!arg.css.height ? 'Y' : ''), {}, false);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleClick(event) {
		_adEvents.GestureEvent.stop(event);
		if (U.togglable) U.state = Number(!_state);

		U._onClick.call(U, event);
		U.onClick.call(U, event);
	}

	function handleOver(event) {
		U._onOver.call(U, event);
		U.onOver.call(U, event);
	}

	function handleOut(event) {
		U._onOut.call(U, event);
		U.onOut.call(U, event);
	}

	function handleBaseEnabled(event) {
		var listener = U.enabled ? 'addEventListener' : 'removeEventListener';
		_adEvents.Gesture[listener](U, _adEvents.GestureEvent.CLICK, handleClick);
		_adEvents.Gesture[listener](U, _adEvents.GestureEvent.OVER, handleOver);
		_adEvents.Gesture[listener](U, _adEvents.GestureEvent.OUT, handleOut);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// INIT
	U.addEventListener(_adEvents.UIEvent.ENABLED, handleBaseEnabled);

	U.enabled = true;
	U.state = arg.state || 0;

	U._initAlign();

	return U;
};

exports.default = UIButton;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UICanvas.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UICanvas.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UICanvas
                                                                                                                                                          	@param {string} id
                                                                                                                                                          	@param {element} target
                                                                                                                                                          	@param {object} css
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UICanvas } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending {@link UIComponent}.  Unlike other UI elements, this creates a DOM &lt;canvas>.
                                                                                                                                                          		By extending {@link UIComponent} this has all of its native properties and methods.  See {@link UIComponent} for more info.
                                                                                                                                                          	@example
                                                                                                                                                          		var myCanvas = new UICanvas({
                                                                                                                                                          			id : 'my-btn',
                                                                                                                                                          			target : View.main,
                                                                                                                                                          			css : {
                                                                                                                                                          				x : 15,
                                                                                                                                                          				y : 18,
                                                                                                                                                          				width : 50,
                                                                                                                                                          				height : 20,
                                                                                                                                                          				backgroundColor : '#ff0000'
                                                                                                                                                          			}
                                                                                                                                                          		});
                                                                                                                                                          */


var UICanvas = function UICanvas(arg) {
	_classCallCheck(this, UICanvas);

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP
	arg = arg || {};

	var width = arg.css.width;
	var height = arg.css.height;

	delete arg.css.width;
	delete arg.css.height;

	var U = new _UIComponent2.default(arg, 'canvas');
	U.setAttribute('width', width);
	U.setAttribute('height', height);

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _ctx2d = U.getContext('2d');
	var _ctx3d = U.getContext('webgl');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTER | SETTTER

	Object.defineProperties(U, {
		/**
  	@memberOf UICanvas
  	@var {canvas} context2d
  	@desc
  		Getter : Returns direct access to the canvas context of '2d'.
  	@example
  		console.log( myCanvas.context2d );
  */
		context2d: {
			get: function get() {
				return _ctx2d;
			}
		},

		/**
  	@memberOf UICanvas
  	@var {canvas} context3d
  	@desc
  		Getter : Returns direct access to the canvas context of 'webgl'.
  	@example
  		console.log( myCanvas.context3d );
  */
		context3d: {
			get: function get() {
				return _ctx3d;
			}
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	/**
 	@memberOf UICanvas
 	@method toString
 	@returns {string} [object UICanvas]
 	@desc
 		A String representing the object type.
 */
	U.toString = function () {
		return '[object UICanvas]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// INIT
	U._initAlign(true);

	return U;
};

exports.default = UICanvas;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIDiv2 = __webpack_require__(/*! ./UIDiv */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIDiv.js");

var _UIDiv3 = _interopRequireDefault(_UIDiv2);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@npmpackage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@class UIComponent
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// importing into an ES6 class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			import { UIComponent } from 'ad-ui'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		This is a display object class, which is an extension of a DOM element &lt;div> with extra base functionality.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		There are inherited properties and methods for enabling, show, hide, etc. It is a base class that can be 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		extended for custom UI elements. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 1:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// bare minimum creation - can be added to anything and named later.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			var myBase = new UIComponent();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 2:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// simple creation - no style
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			var myBase = new UIComponent({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : View.main,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-component'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 3:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// create with assigned styles
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			var myBase = new UIComponent({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : View.main,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-component',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				css : {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					x : 36,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					y : 14,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					width : 120,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					height: 140
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 4:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// create and align the image inline
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			var myImage = new UIComponent({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : View.main,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-component',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				align : { 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					x:{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						type : Align.RIGHT,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						offset : -10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					y: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						type : Align.TOP,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						offset : 10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					}	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var UIComponent = function (_UIDiv) {
	_inherits(UIComponent, _UIDiv);

	function UIComponent(arg, type) {
		var _ret;

		_classCallCheck(this, UIComponent);

		var _enabled = true;
		var _showing = true;
		var _typeDef = type || 'div';

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// MARKUP
		arg = arg || {};
		type = _typeDef == 'svg' ? 'div' : type;

		var _this = _possibleConstructorReturn(this, _UIDiv.call(this, arg, type));

		var U = _this;

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PROTECTED PROPERTIES
		U._align = arg.align;

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// GETTER | SETTTER

		Object.defineProperties(U, {
			/**
   	@memberOf UIComponent
   	@var {number} x
   		Getter|Setter : A Number representing the x position.  Directly gets/sets the css transform x. 
   	@example
   		// get
   		console.log( myComponent.x );
   				// set
   		myComponent.x = 7;
   */
			x: {
				get: function get() {
					//return +getTransformMatrix()[4]
					return _adView.Styles.getCss(U, 'x');
				},
				set: function set(value) {
					_adView.Styles.setCss(U, {
						x: value
					});
				}
			},

			/**
   	@memberOf UIComponent
   	@var {number} y
   		Getter|Setter : A Number representing the y position.  Directly gets/sets the css transform y.
   	@example
   		// get
   		console.log( myComponent.y );
   				// set
   		myComponent.y = 14;
   */
			y: {
				get: function get() {
					//return +getTransformMatrix()[5]
					return _adView.Styles.getCss(U, 'y');
				},
				set: function set(value) {
					_adView.Styles.setCss(U, {
						y: value
					});
				}
			},

			/**
   	@memberOf UIComponent
   	@var {boolean} enabled
   		Getter|Setter : A Boolean to toggle if the Gesture events are active.
   	@example
   		// get
   		console.log( myComponent.enabled );
   				// set
   		myComponent.enabled = true;
   */
			enabled: {
				get: function get() {
					return _enabled;
				},
				set: function set(state) {
					_enabled = state;
					//U.dispatchEvent ( new CustomEvent( 'uiComponentEnabled' ))
					U.dispatchEvent(_adEvents.UIEvent.componentEnabled);
				}
			},

			/**
   	@memberOf UIComponent
   	@var {boolean} showing
   		Getter|Setter : A Boolean to check if the component is currently showing. Can NOT be set.
   	@example
   		// get
   		console.log( myComponent.showing );
   */
			showing: {
				get: function get() {
					return _showing;
				},
				set: function set() {
					console.log(':: WARNING ::\n\n\tUIComponent.showing cannot be set.\n\n');
				}
			}
		});

		if (_typeDef != 'canvas' && _typeDef != 'svg') {
			Object.defineProperties(U, {
				/**
    	@memberOf UIComponent
    	@var {number} width
    		Getter|Setter : A Number representing the width of the div.  Directly gets/sets the style css width. 
    	@example
    		// get
    		console.log( myComponent.width );
    				// set
    		myComponent.width = 140;
    */
				width: {
					get: function get() {
						return U.offsetWidth;
					},
					set: function set(value) {
						_adView.Styles.setCss(U, {
							width: value
						});

						var evt = new CustomEvent(_adEvents.UIEvent.RESIZE);
						evt.direction = 'width';
						U.dispatchEvent(evt);
					}
				},

				/**
    	@memberOf UIComponent
    	@var {number} height
    		Getter|Setter : A Number representing the height of the div.  Directly gets/sets the style css height.
    	@example
    		// get
    		console.log( myComponent.height );
    				// set
    		myComponent.height = 140;
    */
				height: {
					get: function get() {
						return U.offsetHeight;
					},
					set: function set(value) {
						_adView.Styles.setCss(U, {
							height: value
						});

						var evt = new CustomEvent(_adEvents.UIEvent.RESIZE);
						evt.direction = 'height';
						U.dispatchEvent(evt);
					}
				}
			});
		}

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS

		/**
  	@memberOf UIComponent
  	@method hide
  	@desc
  		Visually removes the component from the DOM by setting its display property to none
  	@example
  		myComponent.hide();
  */
		U.hide = function () {
			U.style.display = 'none';
			_showing = false;
		};

		/**
  	@memberOf UIComponent
  	@method show
  	@desc
  		Visually displays the component in the DOM
  	@example
  		myComponent.show();
  */
		U.show = function () {
			try {
				//console.log( '    try removeProperty()')
				U.style.removeProperty('display');
			} catch (e) {
				//console.log( '    catch display = null' )
				U.style.display = null;
			}
			_showing = true;
		};

		/**
  	@memberOf UIComponent
  	@method setCss
  	@desc
  		Set any of the style properites of the component.  A direct link to Styles.setCss() for convience.
  	@example
  		myComponent.setCss({ 
  			width : 300,
  			height : 150
  		});
  */
		U.setCss = function (args) {
			_adView.Styles.setCss(U, args);
		};

		/**
  	@memberOf UIComponent
  	@method addChild
  	@desc
  		Add a DOM element to the component.
  	@example
  		myComponent.addChild( myChild );
  */
		U.addChild = function (elem) {
			var child = _adView.Markup.get(elem);
			U.appendChild(child);

			if (elem._align) _adView.Align.set(elem, elem._align);
		};

		/**
  	@memberOf UIComponent
  	@method inspect
  	@desc
  		Traces out an object of all the public properties and methods of the component.
  	@example
  		myComponent.inspect();
  */
		U.inspect = function () {
			var o = {};
			var props = Object.getOwnPropertyNames(U);
			for (var i = 0; i < props.length; i++) {
				var val = U[props[i]];
				o[props[i]] = val;
			}
			console.log('\n\t', U.toString(), '\t', U.id, '\n\t', o);
		};

		/**
  	@memberOf UIComponent
  	@method toString
  	@desc
  		A String to represet the object type.
  	@example
  		myComponent.toString();
  */
		U.toString = function () {
			return '[object UIComponent]';
		};

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PRIVATE METHODS
		U._initAlign = function (parentTriggered) {
			var fire = parentTriggered ? parentTriggered == true : arg.target != undefined;

			if (arg.align && fire) {
				_adView.Align.set(U, arg.align);
			}
		};

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// INIT
		U.enabled = true;

		U._initAlign();

		return _ret = U, _possibleConstructorReturn(_this, _ret);
	}

	return UIComponent;
}(_UIDiv3.default);

exports.default = UIComponent;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIDiv.js":
/*!*****************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIDiv.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UIDiv
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UIDiv } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, which is a DOM element <div>, that internally handles assigning the passed in parameters.
                                                                                                                                                          		<br><br>  
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// bare minimum creation - can be added to anything and named later.
                                                                                                                                                          			var myBase = new UIDiv();
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// simple creation - no style
                                                                                                                                                          			// Added to a container, such as Main
                                                                                                                                                          			T.myBase = new UIDiv({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-div'
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 2:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create with assigned styles
                                                                                                                                                          			var myBase = new UIDiv({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-div',
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 36,
                                                                                                                                                          					y : 14,
                                                                                                                                                          					width : 120,
                                                                                                                                                          					height: 140
                                                                                                                                                          				}
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          */


var UIDiv = function UIDiv(arg, type) {
	_classCallCheck(this, UIDiv);

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// BASE CSS
	_adView.Styles.injectStylesheet('RED_uiElement', '.ui-elem', 'position:absolute;');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP

	// internal pass in other type of element, such as <canvas>
	type = type || 'div';
	var U = document.createElement(type);
	_adView.Styles.addClass(U, 'ui-elem');

	arg = arg || {};
	if (arg.id) U.id = arg.id;
	_adView.Styles.setCss(U, arg.css);
	if (arg.target) {
		var target = _adView.Markup.get(arg.target);
		target.appendChild(U);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTER | SETTTER

	/**
 		@memberOf UIDiv
 		@var {element} parent
 			Getter : Returns the parent, ie the DOM element this <div> is inside of.
 		@example
 			// get
 			console.log( myImage.source );
 
 			// set
 			myImage.source = 'template_image';
 	*/
	Object.defineProperty(U, 'parent', {
		get: function get() {
			return U.parentNode;
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf UIDiv
 	@method toString
 	@desc
 		A String to represet the object type.
 	@example
 		myDiv.toString();
 */
	U.toString = function () {
		return '[object UIDiv]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */

	return U;
};

exports.default = UIDiv;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIFlex.js":
/*!******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIFlex.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _adUi = __webpack_require__(/*! ad-ui */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/index.js");

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@npmpackage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@class UIFlex
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// importing into an ES6 class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			import { UIFlex } from 'ad-ui'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		This is a display object class, extending {@link UIComponent}.  It is a DOM element that has default values for css flexbox. All children's position
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		is set to relative, to allow the flexbox to work. The default setup of UIFlex is to make a row, with the content evenly spread with no buffers on 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		the outside, aka space-around. There are setters for the primary orientation css keys. They can be passed in to the constructor or using the seeters.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		They can still be overwritten by simply changing them with {@link Styles.setCss}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		By default, UIFlex has these styles set:<br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			display: flex; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			flex-wrap: nowrap; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			justify-content: space-around;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		By extending UIComponent this has all of its native properties and methods.  See {@link UIComponent} for more info.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		For all flexbox options, see https://www.w3schools.com/css/css3_flexbox.asp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 1:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>			
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			var myFlexContainer = new UIFlex({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target: T,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				css: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					width: 350,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					height: 100,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					backgroundColor: 'rgba(255,0,0,0.3)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				// optional
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				flexDirection: 'column',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				justifyContent: 'space-between',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				flexWrap: 'wrap'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 2:</b>Replace EndFrame UIComponent with a UIFlex<br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			function EndFrame() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				var T = new UIFlex({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					id: 'endframe-container',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					target: View.main,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					css: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						width: 'inherit',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               						height: 'inherit'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				return T
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

var UIFlex = function (_UIComponent) {
	_inherits(UIFlex, _UIComponent);

	function UIFlex(arg) {
		var _ret;

		_classCallCheck(this, UIFlex);

		var _this = _possibleConstructorReturn(this, _UIComponent.call(this, arg));

		var T = _this;

		_adView.Styles.injectStylesheet('RED_flex', '.flex-container', 'display: flex; flex-wrap: nowrap; justify-content: space-around;', '.flex-container > div', 'position: relative;');
		_adView.Styles.addClass(T, 'flex-container');

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// GETTER | SETTTER
		Object.defineProperties(T, {
			/**
   	@memberOf UIFlex
   	@var {string} flexDirection
   	@desc
   		Setter : Changes the direction of the flexbox. Options: 'row', 'column'. Default: 'row'
   	@example		
   		// set
   		myFlexContainer.flexDirection = 'column'
   */
			flexDirection: {
				set: function set(value) {
					_adView.Styles.setCss(T, { 'flex-direction': value });
				}
			},

			/**
   	@memberOf UIFlex
   	@var {string} justifyContent
   	@desc
   		Setter : Changes the justify layout of the flexbox. Options: 'center', 'flex-start', 'flex-end', 'space-around', 'space-between'. Default: 'space-around'
   	@example		
   		// set
   		myFlexContainer.justifyContent = 'space-between'
   */
			justifyContent: {
				set: function set(value) {
					_adView.Styles.setCss(T, { 'justify-content': value });
				}
			},

			/**
   	@memberOf UIFlex
   	@var {string} flexWrap
   	@desc
   		Setter : Changes the justify layout of the flexbox. Options: 'nowrap', 'wrap'. Default: 'nowrap'
   	@example		
   		// set
   		myFlexContainer.flexWrap = 'wrap'
   */
			flexWrap: {
				set: function set(value) {
					_adView.Styles.setCss(T, { 'flex-wrap': value });
				}
			},

			/**
   	@memberOf UIFlex
   	@var {string} alignItems
   	@desc
   		Setter : Changes the item alignment of the flexbox. Options: 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'.
   	@example		
   		// set
   		myFlexContainer.alignItems = 'flex-end'
   */
			alignItems: {
				set: function set(value) {
					_adView.Styles.setCss(T, { 'align-items': value });
				}
			}
		});

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// INIT
		var _arr = ['flexDirection', 'flexWrap', 'justifyContent', 'alignItems'];
		for (var _i = 0; _i < _arr.length; _i++) {
			var key = _arr[_i];
			if (arg[key]) T[key] = arg[key];
		}

		return _ret = T, _possibleConstructorReturn(_this, _ret);
	}

	return UIFlex;
}(_adUi.UIComponent);

exports.default = UIFlex;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIGroup.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIGroup.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@class UIGroup
                                                                                                                                                          
                                                                                                                                                          	@param {object} arg
                                                                                                                                                          		an object containing the arguments for defining / orienting the UIGroup, see Properties for more info:
                                                                                                                                                          
                                                                                                                                                          	@property {element} target
                                                                                                                                                          		the DOM element in which to add the UIGroup
                                                                                                                                                          
                                                                                                                                                          	@property {array} children
                                                                                                                                                          		an array of DOM elements which will be added
                                                                                                                                                          
                                                                                                                                                          	@property {object} css
                                                                                                                                                          		CSS properties to apply to the UIGroup parent container - <b>width and height will be ignored!</b>
                                                                                                                                                          
                                                                                                                                                          	@property {Align} align
                                                                                                                                                          		the alignment of the UIGroup parent container
                                                                                                                                                          
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">Github repo</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UIGroup } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending {@link UIComponent} and therefor contains all of the native properties and methods of extending {@link UIComponent}.
                                                                                                                                                          		<br>It relocates an array of DOM elements into a newly created {@link UIComponent}, allowing for easy creation of lockups.
                                                                                                                                                          		<br>Returns a UIComponent
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          		// basic creation - add children to a UIGroup.
                                                                                                                                                          		let _myLockup = new UIGroup({
                                                                                                                                                          			target: View.main,
                                                                                                                                                          			children: [myDIV, myTextField, myImage],
                                                                                                                                                          		});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 2:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          		// align the UIGroup after creation.
                                                                                                                                                          		let _myLockup = new UIGroup({
                                                                                                                                                          			target: View.main,
                                                                                                                                                          			children: [myDIV, myTextField, myImage],
                                                                                                                                                          			align: Align.CENTER,
                                                                                                                                                          		});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 3:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          		// give the parent UIGroup a background color - handy for debugging!
                                                                                                                                                          		let _myLockup = new UIGroup({
                                                                                                                                                          			target: View.main,
                                                                                                                                                          			children: [myDIV, myTextField, myImage],
                                                                                                                                                          			css:{
                                                                                                                                                          				backgroundColor: '#ff0000'
                                                                                                                                                          			}
                                                                                                                                                          		});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          */


var UIGroup = function UIGroup(arg) {
	_classCallCheck(this, UIGroup);

	// make a parent container to house our incoming children
	var U = new _UIComponent2.default(arg);

	// add the children
	var _children = arg.children.slice();
	while (_children.length > 0) {
		var _child = _children.shift();
		if (_child) U.appendChild(_child);
	}

	// if width or height values were passed in via arg.css, they will get overwritten here
	_adView.Clamp.set(U, _adView.Clamp.XY);

	if (arg.align) _adView.Align.set(U, arg.align);

	_adEvents.Gesture.disable(U);

	return U;
};

exports.default = UIGroup;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIImage.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIImage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UIImage
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UIImage } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending {@link UIComponent}.  It is a DOM element that has default values for the background image styles.
                                                                                                                                                          		They can still be overwritten by simply changing them with {@link Styles.setCss} or the native {@link UIComponent.setCss} method directly on the UIImage instance.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		By default, UIImage has these styles set:<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			background-repeat : no-repeat; 
                                                                                                                                                          			background-size : contain;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		By extending UIComponent this has all of its native properties and methods.  See {@link UIComponent} for more info.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// bare minimum creation - image source is required, but can be added to anything and named later.
                                                                                                                                                          			var myImage = new UIImage({
                                                                                                                                                          				source : 'template_image'
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 2:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// simple creation - no style
                                                                                                                                                          			// Added to a container, such as Main
                                                                                                                                                          			T.myImage = new UIImage({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-image',
                                                                                                                                                          				source : 'template_image'
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 3:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// simple creation using a double sized source image
                                                                                                                                                          			var myImage = new UIImage({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-image',
                                                                                                                                                          				source : 'template_image',
                                                                                                                                                          				retina : true
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 4:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create with assigned styles
                                                                                                                                                          			var myImage = new UIImage({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-image',
                                                                                                                                                          				source : 'template_image',
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 36,
                                                                                                                                                          					y : 14,
                                                                                                                                                          					width : 120,
                                                                                                                                                          					height: 140
                                                                                                                                                          				}
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 5:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create with only a known height, but maintain the aspect ratio
                                                                                                                                                          			var myImage = new UIImage({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-image',
                                                                                                                                                          				source : 'template_image',
                                                                                                                                                          				css : {
                                                                                                                                                          					width : 120
                                                                                                                                                          				},
                                                                                                                                                          				aspectRatio : true
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 6:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// create and align the image inline
                                                                                                                                                          			var myImage = new UIImage({
                                                                                                                                                          				target : T,
                                                                                                                                                          				id : 'my-image',
                                                                                                                                                          				source : 'template_image',
                                                                                                                                                          				align : { 
                                                                                                                                                          					x:{
                                                                                                                                                          						type : Align.RIGHT,
                                                                                                                                                          						offset : -10
                                                                                                                                                          					},
                                                                                                                                                          					y: {
                                                                                                                                                          						type : Align.TOP,
                                                                                                                                                          						offset : 10
                                                                                                                                                          					}	
                                                                                                                                                          				},
                                                                                                                                                          				aspectRatio : true
                                                                                                                                                          			});
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          	---------------------------------------------------------------------------------------------------------------------------------------------------------- */


var UIImage = function UIImage(arg) {
	_classCallCheck(this, UIImage);

	/* TODO
 		- lock aspect ratio (booleam?)
 */
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// BASE CSS
	_adView.Styles.injectStylesheet('RED_uiImage', '.ui-image', 'background-repeat:no-repeat; background-size:contain;');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _init = true;
	var _source = null;
	var _retina = false;
	var _ratio = 'contain';
	var _aspectRatio = !!arg.aspectRatio;
	var _css = arg.css || {};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP
	if (!arg.source) throw new Error("UIImage : No image source set on '" + arg.id + "'");

	arg.css = arg.css || {};

	var U = new _UIComponent2.default(arg);
	_adView.Styles.addClass(U, 'ui-image');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTER | SETTTER
	Object.defineProperties(U, {
		/**
  	@memberOf UIImage
  	@var {string} source
  	@desc
  		Getter|Setter : The Image element id, via {@link ImageManager}, can be changed if need be but best to just make a new UIImage if a new source is needed.
  		Also, use this if you need to access the image for things like getting the original width or height.  
  	@example
  		// get
  		console.log( myImage.source );
  				// set
  		myImage.source = 'template_image';
  */
		source: {
			get: function get() {
				return _source;
			},
			set: function set(value) {
				_source = _adControl.ImageManager.get(value);
				U.style.backgroundImage = 'url(' + _source.src + ')';
			}
		},

		/**
  	@memberOf UIImage
  	@var {boolean} retina
  	@desc
  		Getter|Setter : A Boolean to determine if the image source is double the size of the desired width & height. This is only relevant
  		if when creating a new UIImage, you do not proved a width or height value.  If you do, the UIImage will simply be
  		the size provided. 
  	@example
  		// get
  		console.log( myImage.retina );
  				// set
  		myImage.retina = false;
  */
		retina: {
			get: function get() {
				return _retina;
			},
			set: function set(value) {
				_retina = value;
				resize();
			}
		},

		/**
  	@memberOf UIImage
  	@var {string} ratio
  		Getter|Setter : A String to set the background-size property.  Use the {@link Ratio} class for constants that are easier
  		to understand: {@link Ratio.EXACT}, {@link Ratio.FIT}, {@link Ratio.FILL}, {@link Ratio.STRETCH}
  	@example
  		// get
  		console.log( myImage.ratio );
  				// set
  		myImage.ratio = Ratio.FILL;
  */
		ratio: {
			get: function get() {
				return _ratio;
			},
			set: function set(value) {
				_ratio = value;
				U.style.backgroundSize = value;
			}
		},

		/**
  	@memberOf UIImage
  	@var {boolean} aspectRatio
  	@desc
  		Getter|Setter : A Boolean to allow for the size of the element to maintain aspect ratio when either the width or height
  		are changed by directly setting them on the element, ie UIImage.width or UIImage.height.  If using Styles.setCss() this will NOT work.
  	@example
  		// get
  		console.log( myImage.aspectRatio );
  				// set
  		myImage.aspectRatio = true;
  */
		aspectRatio: {
			get: function get() {
				return _aspectRatio;
			},
			set: function set(value) {
				_aspectRatio = value;
				resize();
			}
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	U.toString = function () {
		return '[object UIImage]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function resize(direction) {
		var denominator = _retina ? 2 : 1;
		var ratio = _source.width / _source.height;

		var sourceWidth = arg.css.width || _source.width;
		var sourceHeight = arg.css.height || _source.height;

		var updateWidth = arg.css.width == undefined;
		var updateHeight = arg.css.height == undefined;

		if (!_init) {
			updateWidth = direction == 'height';
			updateHeight = direction == 'width';
			sourceWidth = U.width;
			sourceHeight = U.height;
		}

		if (updateWidth) {
			var width;
			if (_aspectRatio && !updateHeight) {
				width = sourceHeight * ratio;
			} else {
				width = sourceWidth / denominator;
			}
			U.style.width = Math.round(width) + 'px';
		}

		if (updateHeight) {
			var height;

			if (_aspectRatio && !updateWidth) {
				height = sourceWidth / ratio;
			} else {
				height = sourceHeight / denominator;
			}
			U.style.height = Math.round(height) + 'px';
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleResize(event) {
		console.log('handleResize()', event, event.direction);
		resize(event.direction);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// INIT
	U.addEventListener(_adEvents.UIEvent.RESIZE, handleResize);

	U.source = arg.source;
	U.retina = !!arg.retina;

	if (arg.ratio) U.ratio = arg.ratio;

	U._initAlign();
	_init = false;

	return U;
};

exports.default = UIImage;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISlider.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISlider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

var _adEvents = __webpack_require__(/*! ad-events */ "./1-build/node_modules/@ff0000-ad-tech/ad-events/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UISlider
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UISlider } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending {@link UIComponent}.  It is a DOM element that has built-in 
                                                                                                                                                          		child &lt;div>s to make up a slider, which are all publicly accessible.  The list of child divs are:<br>
                                                                                                                                                          		<ul>
                                                                                                                                                          		 <li>.bg</li>
                                                                                                                                                          		 <li>.loaded</li>
                                                                                                                                                          		 <li>.track</li>
                                                                                                                                                          		 <li>.handle</li>
                                                                                                                                                          		 <li>.hitState</li>
                                                                                                                                                          		</ul>
                                                                                                                                                          		By extending {@link UIComponent} this has all of its native properties and methods.  See {@link UIComponent} 
                                                                                                                                                          		for more info.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		<b>Sample 1</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			var mySlider = new UISlider({
                                                                                                                                                          				id : 'my-slider',
                                                                                                                                                          				target : View.main,
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 0,
                                                                                                                                                          					y : 0,
                                                                                                                                                          					width : 250,
                                                                                                                                                          					height : 20
                                                                                                                                                          				},
                                                                                                                                                          				bg : {
                                                                                                                                                          					height:'30%',
                                                                                                                                                          					top:'35%'
                                                                                                                                                          				},
                                                                                                                                                          				track : {
                                                                                                                                                          					height:'30%',
                                                                                                                                                          					top:'35%'
                                                                                                                                                          				},
                                                                                                                                                          				handle : {
                                                                                                                                                          					height:'70%',
                                                                                                                                                          					top:'15%'
                                                                                                                                                          				},
                                                                                                                                                          
                                                                                                                                                          				onUpdate : handleSliderUpdate
                                                                                                                                                          			});
                                                                                                                                                          
                                                                                                                                                          			// OR assign it after the fact
                                                                                                                                                          			mySlider.onUpdate = handleSliderUpdate
                                                                                                                                                          
                                                                                                                                                          			// OR listen for the event
                                                                                                                                                          			mySlider.addEventListener ( UIEvent.SLIDER_UPDATE, handleSliderUpdate );
                                                                                                                                                          			function handleSliderUpdate ( event ){
                                                                                                                                                          				console.log( mySlider.percent );
                                                                                                                                                          			}
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          
                                                                                                                                                          		<b>Sample Extension:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			function UICustomSlider( arg ) {
                                                                                                                                                          				var U = new UISlider( arg );
                                                                                                                                                          				
                                                                                                                                                          				function handleBaseSliderUpdate ( event ){
                                                                                                                                                          					console.log( U.percent );
                                                                                                                                                          				}
                                                                                                                                                          
                                                                                                                                                          				function handleBaseEnabled ( event ){
                                                                                                                                                          					var listener = U.enabled ? 'addEventListener' : 'removeEventListener' ;
                                                                                                                                                          					U [ listener ] ( UIEvent.SLIDER_UPDATE, handleBaseSliderUpdate );
                                                                                                                                                          				}
                                                                                                                                                          
                                                                                                                                                          				U.addEventListener ( UIEvent.ENABLED, handleBaseEnabled )
                                                                                                                                                          				U.enabled = true;
                                                                                                                                                          
                                                                                                                                                          				return U;
                                                                                                                                                          			}
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          */


var UISlider = function UISlider(arg) {
	_classCallCheck(this, UISlider);

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// BASE CSS
	_adView.Styles.injectStylesheet('RED_uiSlider', '.ui-slider', 'position:absolute; width:100%; height:100%;', '.ui-slider-bg, .ui-slider-track, .ui-slider-loaded, .ui-slider-handle, .ui-slider-hitState', 'position:absolute; width:100%; height:inherit;', '.ui-slider-bg', 'background-color: #666666;', '.ui-slider-loaded', 'background-color: #560000; width:0%;', '.ui-slider-track', 'background-color: #cc0000; width:0%;', '.ui-slider-handle', 'background-color: #ffffff; width:5%; left:0%;');

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _percent = 0;
	var _dragging = false;
	var _startX = 0;

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// MARKUP
	arg = arg || {};
	var U = new _UIComponent2.default(arg);
	_adView.Styles.addClass(U, 'ui-slider');

	var children = ['bg', 'loaded', 'track', 'handle', 'hitState'];
	U.elements = [];
	for (var i = 0; i < children.length; i++) {
		createChild(children[i]);
	} /**
   	@memberOf UISlider
   	@var {element} bg
   		A &lt;div> at the bottom most layer, simply the background. 
   	@example
   		// access
   		mySlider.bg
   			// change style:
   		Styles.setCss( mySlider.bg, { backgroundColor: '#ff0000' });
   */

	/**
 	@memberOf UISlider
 	@var {element} loaded
 		A &lt;div> right above the bg element, represents the loaded value when used with loaders such as with progress bars. 
 	@example
 		// access
 		mySlider.loaded
 			// change style:
 		Styles.setCss( mySlider.loaded, { backgroundColor: '#ff0000' });
 */

	/**
 	@memberOf UISlider
 	@var {element} track
 		A &lt;div> right above the loaded element, represents the percentage of the slider.
 	@example
 		// access
 		mySlider.track
 			// change style:
 		Styles.setCss( mySlider.track, { backgroundColor: '#ff0000' });
 */

	/**
 	@memberOf UISlider
 	@var {element} handle
 		A &lt;div> right above the track element, represents the handle at the placement of the percentage of the slider.  Will line up with the track size.
 	@example
 		// access
 		mySlider.handle
 			// change style:
 		Styles.setCss( mySlider.handle, { backgroundColor: '#ff0000' });
 */

	/**
 	@memberOf UISlider
 	@var {element} hitState
 		A &lt;div> at the top most level, represents the hit area for the slider.  Ot is not a graphical element and generally this should not be manipulated.
 	@example
 		mySlider.handle
 */

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// GETTERS | SETTERS

	Object.defineProperties(U, {
		/**
  	@memberOf UISlider
  	@var {number} percent
  		Getter|Setter : A Number 0-1 representing the percent position. 
  	@example
  		// get
  		mySlider.addEventListener( UIEvent.SLIDER_UPDATE, handleSliderUpdate );
  			function handleSliderUpdate( event ){
  			console.log( mySlider.percent );
  		}
  			// set
  		mySlider.percent = .65;
  */
		percent: {
			get: function get() {
				return _percent;
			},
			set: function set(value) {
				_percent = _adUtils.MathUtils.restrict(value, 0, 1);
				U.track.style.width = _percent * 100 + '%';
				U.handle.style.left = getHandlePercent() + '%';
			}
		},

		/**
  	@memberOf UISlider
  	@var {boolean} dragging
  		Getter : A Boolean representing whether or not the slider head is currently dragging. 
  */
		dragging: {
			get: function get() {
				return _dragging;
			}
		}
	});

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf UISlider
 	@method: onUpdate
 	@desc
 		A Method that will be called on the update of the slider.  This is set in the constructor or can be manually assigned.
 */
	U.onUpdate = arg.onUpdate || function (event) {};

	/**
 	@memberOf UISlider
 	@method: toString
 	@desc
 		A String representing the object type: [object UISlider]
 */
	U.toString = function () {
		return '[object UISlider]';
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PROTECTED METHODS

	/**	Method: _onUpdateslider()
 		Protected Method for INTERNAL use when extending the class. Assign a handler directly to the component instance.
 */
	U._onUpdate = function (event) {};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createChild(name) {
		U[name] = document.createElement('div');
		_adView.Styles.addClass(U[name], 'ui-slider-' + name);
		U[name].id = arg.id + '-' + name;
		if (arg[name]) _adView.Styles.setCss(U[name], arg[name]);
		if (arg[name] == false) U[name].style.display = 'none';
		U.appendChild(U[name]);
		U.elements.push(U[name]);
	}

	function positionToPercent(newX) {
		U.percent = newX / U.offsetWidth;
	}

	function getHandlePercent() {
		var thumbHalf = U.handle.offsetWidth / U.offsetWidth / 2;
		var perc = _adUtils.MathUtils.restrict(_percent, thumbHalf, 1 - thumbHalf) - thumbHalf;

		return perc * 100;
	}

	function dispatch() {
		// dispatching upward for extended classes such as UIProgress
		U.dispatchEvent(_adEvents.UIEvent.sliderUpdate);
		U.onUpdate.call(U, _adEvents.UIEvent.sliderUpdate);
		U._onUpdate.call(U, _adEvents.UIEvent.sliderUpdate);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleDown(event) {
		_dragging = true;

		_startX = event.mouse.global.x - event.mouse.local.x;

		positionToPercent(event.mouse.local.x);

		dispatch();
	}

	function handleUp(event) {
		_dragging = false;
	}

	function handleDrag(event) {
		var pos = event.mouse.local.x;

		if (event.mouse.global.x <= _startX) {
			pos = 0;
		}

		positionToPercent(pos);
		dispatch();
	}

	function handleClick(event) {
		// stops a click event from bubbling up
		//event.stopImmediatePropagation();
		_adEvents.GestureEvent.stop(event);
	}

	function handleBaseEnabled(event) {
		var listener = U.enabled ? 'addEventListener' : 'removeEventListener';
		_adEvents.Gesture[listener](U.hitState, _adEvents.GestureEvent.PRESS, handleDown);
		_adEvents.Gesture[listener](U.hitState, _adEvents.GestureEvent.RELEASE, handleUp);
		_adEvents.Gesture[listener](U.hitState, _adEvents.GestureEvent.DRAG, handleDrag);
		_adEvents.Gesture[listener](U.hitState, _adEvents.GestureEvent.CLICK, handleClick);
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// INIT
	U.addEventListener(_adEvents.UIEvent.ENABLED, handleBaseEnabled);

	U.enabled = true;

	return U;
};

exports.default = UISlider;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISplitText.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISplitText.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UITextField = __webpack_require__(/*! ./UITextField.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UITextField.js");

var _UITextField2 = _interopRequireDefault(_UITextField);

var _UIComponent = __webpack_require__(/*! ./UIComponent.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _UIGroup = __webpack_require__(/*! ./UIGroup.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIGroup.js");

var _UIGroup2 = _interopRequireDefault(_UIGroup);

var _TextFormat = __webpack_require__(/*! ./TextFormat.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextFormat.js");

var TextFormat = _interopRequireWildcard(_TextFormat);

var _TextSplitType = __webpack_require__(/*! ./TextSplitType.js */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/TextSplitType.js");

var TextSplitType = _interopRequireWildcard(_TextSplitType);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UISplitText
                                                                                                                                                          
                                                                                                                                                          	@param {arg} arg
                                                                                                                                                          		The OBJECT containing all of your UITextField and UISplitText arguments
                                                                                                                                                          
                                                                                                                                                          		@property {TextSplitType|string} arg.splitType
                                                                                                                                                          			STRING determing if the UISplitText should break a UITextField into individuals words or characters; defaults to TextSplitType.WORDS.
                                                                                                                                                          
                                                                                                                                                          		@property {boolean} arg.allowSpaceOnBreaks
                                                                                                                                                          			BOOLEAN determining if a line break should include a space following non-punctuational characters. For example: "word " rather than "word"; defaults to false.
                                                                                                                                                          			<br>
                                                                                                                                                          			<img src="../docs_images/uisplittext/breakSpace_true.jpg" />
                                                                                                                                                          			<br>
                                                                                                                                                          			<br>
                                                                                                                                                          			<img src="../docs_images/uisplittext/breakSpace_false.jpg" /> 
                                                                                                                                                          			<br>
                                                                                                                                                          
                                                                                                                                                          		@property {string} arg.spaceBreakIncludes
                                                                                                                                                          			STRING determining what specific characters should be included as part of any line breaks if arg.allowSpaceOnBreaks is set to true; defaults to a-z, A-Z, and 0-9 represented as '[a-z0-9].'
                                                                                                                                                          	
                                                                                                                                                          		@property {number} arg.splitWordSpacing
                                                                                                                                                          			NUMBER by which to multiply the default empty space size used between each word; defaults to a multiple of 1, which is 100% of the default word spacing. <i>Do not confuse this with letter-spacing, which is defined in the <b>spacing</b> property.</i>
                                                                                                                                                          		
                                                                                                                                                          		@property {number} arg.splitLeading
                                                                                                                                                          			NUMBER by which to multiply the default line space value used between each line; defaults to a multiple of 1, which is 100% of the default line spacing. <i>Do not confuse this with line-spacing, which is defined in the <b>leading</b> property.</i>
                                                                                                                                                          
                                                                                                                                                          		@property {boolean} arg.debug
                                                                                                                                                          			BOOLEAN for if you want a debug version featuring a background color and an unadulterated and un-split UITextField to compare your UISplitText instance to; defaults to false.
                                                                                                                                                          
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UISplitText } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, utilizing {@link UISplitText} and {@link UIComponent}.  By extending {@link UIComponent} this has all of its native properties and methods.  
                                                                                                                                                          		See {@link UISplitText} and {@link UIComponent} for more info.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		It is a DOM {@link UIComponent} element that contains text and handles its styling, layout, and formatting in all the same ways as {@link UITextField}. The difference, however, is the it returns a container with each line, word, or character of text broken into individual {@link UITextField}s.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		By default, a UISplitText will convert a {@link UITextField} into individual words or letters, and group them into {@link UIComponent}s.
                                                                                                                                                          		<br><br>
                                                                                                                                                          		<b>For Example:</b>
                                                                                                                                                          		<br>setting the splitType to TextSplitType.WORDS will create a {@link UIComponent} per line and a {@link UITextField} per word.
                                                                                                                                                          		<br>setting the splitType to TextSplitType.CHARACTERS will create a {@link UIComponent} per line, a {@link UIComponent} per word, and a {@link UITextField} per character.
                                                                                                                                                          		<br><br>
                                                                                                                                                          		UISplitText returns a {@link UIComponent}, representing the main container of the lines, words, and possibly characters.
                                                                                                                                                          		<br>
                                                                                                                                                          		This container contains arrays:
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// an array of every line of text; each line is a UIComponent
                                                                                                                                                          			_mySplitText.lines;
                                                                                                                                                          
                                                                                                                                                          			// an array of every word of text. If arg.splitType === TextSplitType.CHARACTERS, these will be UIComponents, otherwise they are UITextFields
                                                                                                                                                          			_mySplitText.words;
                                                                                                                                                          
                                                                                                                                                          			// an array of every character of text; each character is a {@link UITextField}
                                                                                                                                                          			_mySplitText.characters;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		<b>Sample:</b><br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// creates a {@link UITextField} that breaks each character of the text value into its own {@link UITextField}
                                                                                                                                                          			T.mySplitText = new UISplitText({
                                                                                                                                                          				target : View.main,
                                                                                                                                                          				id : 'my-textfield',
                                                                                                                                                          				css : {
                                                                                                                                                          					x : 50,
                                                                                                                                                          					y : 200,
                                                                                                                                                          					width : 300,
                                                                                                                                                          					height : 90
                                                                                                                                                          				},
                                                                                                                                                          				fontSize : 30,
                                                                                                                                                          				fontFamily : 'template_font',
                                                                                                                                                          				format : TextFormat.INLINE,
                                                                                                                                                          				alignText : Align.CENTER,
                                                                                                                                                          				bufferText : {
                                                                                                                                                          					top : 1,
                                                                                                                                                          					bottom : 1,
                                                                                                                                                          					left : 5,
                                                                                                                                                          					right : 5
                                                                                                                                                          				},
                                                                                                                                                          				leading : .8,
                                                                                                                                                          				spacing : 2,
                                                                                                                                                          				text : 'This is my awesome sentence!',
                                                                                                                                                          				splitType: TextSplitType.CHARACTERS
                                                                                                                                                          			});
                                                                                                                                                          
                                                                                                                                                          			// tweens the main container for the lines, words, and characters
                                                                                                                                                          			TweenLite.from ( View.main.mySplitText.lines[l], 1, {scale: 0 });
                                                                                                                                                          
                                                                                                                                                          			// tweens each LINE of text from an alpha of 0
                                                                                                                                                          			for (let l = 0; l < View.main.mySplitText.lines.length; l++){
                                                                                                                                                          				TweenLite.from ( View.main.mySplitText.lines[l], 1, {alpha: 0 });
                                                                                                                                                          			}
                                                                                                                                                          
                                                                                                                                                          			// tweens each WORD of text from a rotation of 180
                                                                                                                                                          			for (let w = 0; w < View.main.mySplitText.words.length; w++){
                                                                                                                                                          				TweenLite.from ( View.main.mySplitText.words[w], 1, {rotation: 180 });
                                                                                                                                                          			}
                                                                                                                                                          
                                                                                                                                                          			// tweens each CHARACTER of text from a scale of of 2
                                                                                                                                                          			for (let c = 0; c < View.main.mySplitText.characters.length; c++){
                                                                                                                                                          				TweenLite.from ( View.main.mySplitText.characters[c], 1, {scale: 2 });
                                                                                                                                                          			}
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		*/


var UISplitText = function UISplitText(arg) {
	_classCallCheck(this, UISplitText);

	// let _buffer = arg.bufferText;
	delete arg.bufferText;

	var _mySplitText = void 0;
	arg.text = _mySplitText = arg.text.replace(/<br>/gi, ' <br>');

	var _stringArray = [];
	var _spanEnd = '</span>';
	var _spanIndexStart = _mySplitText.indexOf('<span');
	var _spanIndexEnd = _mySplitText.indexOf(_spanEnd);
	while (_spanIndexStart >= 0) {
		// push anything BEFORE the span into the array
		var _removeStr = _mySplitText.substring(0, _spanIndexStart);
		_stringArray.push(_removeStr);

		// strip the SPAN out of the text
		_mySplitText = _mySplitText.replace(_removeStr, '');
		_removeStr = _mySplitText.substring(0, _mySplitText.indexOf('>') + 1);

		// push the text into the array
		_stringArray.push(_removeStr);

		_mySplitText = _mySplitText.replace(_removeStr, '');
		_spanIndexStart = _mySplitText.indexOf('<span');
	}

	_stringArray.push(_mySplitText);

	var _finalArray = [];
	for (var t = 0; t < _stringArray.length; t++) {
		var _temp = _stringArray[t].split(_spanEnd);
		_finalArray.push(_temp[0]);

		if (_temp.length > 1) {
			_finalArray.push(_spanEnd);
			_finalArray.push(_temp[1]);
		}
	}

	// Now that we have looked at the entire string, make the primary reference UITextField out of it
	// arg.css.backgroundColor = 'blue'
	arg.format = arg.format || TextFormat.INLINE_CLAMP;
	arg.id = arg.id || 'text';
	if (arg.format.indexOf('Clamp') < 0) arg.format += 'Clamp';
	var _mainTF = new _UITextField2.default(arg);
	// delete arg.css.backgroundColor

	if (!arg.text || !arg.text.length) {
		_mainTF.lines = [];
		_mainTF.words = [];
		_mainTF.characters = [];
		return _mainTF;
	}

	var _parsedWords = [];
	for (var _t = 0; _t < _finalArray.length; _t++) {
		var _temp2 = _finalArray[_t].indexOf('span') >= 0 ? [_finalArray[_t]] : _finalArray[_t].split(' ');

		for (var i = 0; i < _temp2.length; i++) {
			if (_temp2[i]) _parsedWords.push(_temp2[i]);
		}
	}

	var _textContainer = new _UIComponent2.default({
		target: arg.target,
		id: arg.id + '_container',
		css: _adUtils.ObjectUtils.defaults({
			x: _mainTF.x,
			y: _mainTF.y,
			width: _mainTF.width,
			height: _mainTF.height,
			opacity: 1,
			backgroundColor: arg.debug ? 'purple' : arg.css.backgroundColor || null
		}, arg.css, true)
	});

	_textContainer.appendChild(_mainTF);

	var _prevText = void 0;
	var _x = 0;
	var _y = 0;
	var _textLines = {
		line1: {
			width: 0,
			children: []
		}
	};
	var _lineNum = 1;

	// this creates a placeholder which effectively mimics the sizing of a space
	// a space in UITextField - " " - is equal to null, and renders no sizing information
	arg.text = '|';
	var _spaceTextSingle = new _UITextField2.default(arg);
	arg.text = '| |';
	var _spaceTextDouble = new _UITextField2.default(arg);
	var _spacing = (_spaceTextDouble.width - _spaceTextSingle.width * 2) * (arg.splitWordSpacing || 1); //Math.ceil(_mainTF.fontSize / (3.7 / (arg.padding || arg.spacing || 1)));

	_spaceTextSingle.parent.removeChild(_spaceTextSingle);
	_spaceTextSingle = null;
	_spaceTextDouble.parent.removeChild(_spaceTextDouble);
	_spaceTextDouble = null;

	// define the arguments for each individual thing we will make
	delete arg.css.overflow;
	var _textArgs = {
		target: _textContainer,
		css: _adUtils.ObjectUtils.clone(arg.css),
		format: TextFormat.INLINE_CLAMP,
		fontSize: _mainTF.fontSize,
		fontFamily: _mainTF.fontFamily,
		alignText: _mainTF.alignText,
		leading: _mainTF.leading,
		spacing: _mainTF.spacing,
		smoothing: _mainTF.smoothing
	};

	if (arg.debug && _textArgs.css.color) {
		_adView.Styles.setCss(_mainTF, {
			color: _adUtils.ColorUtils.invert({
				color: _textArgs.css.color
			})
		});
	}

	var _span = void 0;
	var _appendBreakToNext = void 0;
	for (var _i = 0; _i < _parsedWords.length; _i++) {
		var _word = _parsedWords[_i];
		var _wordHasBreak = _word.indexOf('<br>') >= 0;
		if (_word === '<br>') {
			_appendBreakToNext = true;
		}
		_word = _word.replace(/<br>/gi, '');

		// SOMETHING ABOUT STRIPPING AND REPLACING [LARGE] REMOVES A LINE BREAK;

		if (_word.indexOf('<span') >= 0) {
			_span = _word;
			continue;
		} else if (_word.indexOf('span>') >= 0) {
			_span = null;
			continue;
		}

		if (_word) {
			if (_appendBreakToNext) _wordHasBreak = true;
			_appendBreakToNext = false;

			// if (_span) _word = _span + _word + _spanEnd;

			var _clone = _adUtils.ObjectUtils.clone(_textArgs);

			_clone.css.x = _x;
			_clone.css.y = _y;
			_clone.text = _word;
			_clone.id = 'word_' + _word;

			if (_span) _clone.text = _span + _word + _spanEnd;

			var _newWord = new _UITextField2.default(_clone);
			// _newWord.format = TextFormat.INLINE_CLAMP;
			_newWord.copy = _word;
			_newWord.span = _span;

			// if our text is a paragraph, we want some line breaks. Do that here.
			if (_wordHasBreak || _mainTF.format.indexOf('paragraph') >= 0 && _newWord.width + _newWord.x > _mainTF.width) {
				_lineNum++;
				_textLines['line' + _lineNum] = {
					width: 0,
					children: []
				};
				_newWord.x = _x = 0;
				_y += _newWord.height;
				_newWord.y = _y;
				_textLines['line' + _lineNum].width = 0;
			} else if (_prevText) {
				_adView.Align.set(_newWord, {
					y: {
						type: _adView.Align.CENTER,
						against: _prevText
					}
				});
			}

			_x += _newWord.width + _spacing;

			_textLines['line' + _lineNum].width = _newWord.x + _newWord.width;
			_textLines['line' + _lineNum].children.push(_newWord);

			_prevText = _newWord;
		}
	}

	var _newLine = void 0;
	var _offset = void 0;
	var _prevGroup = void 0;
	_textContainer.words = [];
	_textContainer.lines = [];
	for (var line in _textLines) {
		_newLine = _textLines[line];
		for (var _l = 0; _l < _newLine.children.length; _l++) {
			var _child = _newLine.children[_l];
			_textContainer.words.push(_child);

			if (_mainTF.alignText !== _adView.Align.LEFT) {
				_offset = _mainTF.width - _newLine.width;
				if (_mainTF.alignText === _adView.Align.CENTER) _offset /= 2;
				_child.x += _offset;
			}
		}

		var _group = new _UIGroup2.default({
			id: 'line_' + (_textContainer.lines.length + 1),
			children: _newLine.children,
			target: _textContainer
		});

		if (_prevGroup) _group.y = _prevGroup.y + _prevGroup.height * (arg.splitLeading || 1);

		var _lastChar = _group.childNodes[_group.childNodes.length - 1];
		_lastChar = _lastChar.text.substring(_lastChar.text.length - 1, _lastChar.text.length);

		// TO-DO
		// make this work on center, left, and right justification - currently only works on right
		// although if it's left, do we really care about empty spaces? To be continued...
		if (arg.allowSpaceOnBreaks && _lastChar.match(new RegExp(arg.spaceBreakIncludes || 'a-z0-9]', 'gi'))) _group.x -= _spacing;
		_textContainer.lines.push(_group);
		_prevGroup = _group;
	}

	var _splitType = arg.splitType || TextSplitType.WORDS;
	if (_splitType === TextSplitType.CHARACTERS) {
		_textContainer.characters = [];
		for (var w = 0; w < _textContainer.words.length; w++) {
			var _word2 = _textContainer.words[w];
			var _copy = _word2.copy;
			while (_word2.childNodes.length > 0) {
				_word2.removeChild(_word2.childNodes[0]);
			}var _x2 = 0;
			var _newLetter = void 0;
			var _originalW = _word2.width;
			for (var l = 0; l < _copy.length; l++) {
				_textArgs.css.x = _x2;
				_textArgs.css.y = 0;

				_textArgs.target = _word2;
				_textArgs.text = _word2.span ? _word2.span + _copy[l] + _spanEnd : _copy[l];
				_textArgs.id = 'letter_' + _copy[l];

				_newLetter = new _UITextField2.default(_textArgs);
				_x2 += _newLetter.width;
				_textContainer.characters.push(_newLetter);
			}
			_adView.Clamp.set(_word2, _adView.Clamp.XY);
			_adView.Styles.setCss(_word2, {
				overflow: 'inherit',
				backgroundColor: null
			});

			if (_originalW < _word2.width && _word2.childNodes.length) {
				var _offset2 = (_word2.width - _originalW) / (_word2.childNodes.length - 1);
				for (l = 1; l < _word2.childNodes.length; l++) {
					_newLetter = _word2.childNodes[l];
					_newLetter.x -= Math.abs(_offset2 * l);
				}
			}
		}

		if (arg.allowSpaceOnBreaks) for (var _l2 = 0; _l2 < _textContainer.lines.length; _l2++) {
			_adView.Clamp.set(_textContainer.lines[_l2], _adView.Clamp.XY);
		}
	}

	if (arg.debug) {
		_mainTF.x = _mainTF.y = 0;
	} else {
		_textContainer.removeChild(_mainTF);
		_mainTF = null;
	}

	_adView.Clamp.set(_textContainer, _adView.Clamp.XY);

	return _textContainer;
};

exports.default = UISplitText;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISvg.js":
/*!*****************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UISvg.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent2 = _interopRequireDefault(_UIComponent);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /** 
                                                                                                                                                          	@npmpackage
                                                                                                                                                          	@class UISvg
                                                                                                                                                          	@desc
                                                                                                                                                          		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                          		<br>
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// importing into an ES6 class
                                                                                                                                                          			import { UISvg } from 'ad-ui'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		This is a display object class, extending {@link UIComponent}.  It is a DOM element that contains a markup &lt;svg&gt; element
                                                                                                                                                          		which allows for vector display, manipulation and animation.  This allows for smaller file sizes with crisp visual aesthetics.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		By extending UIComponent this has all of its native properties and methods.  See {@link UIComponent} for more info.
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		<b>&lt;svg&gt; formatting</b><br>
                                                                                                                                                          		Original code from Illustrator:
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			&lt;?xml version="1.0" encoding="utf-8"?&gt;
                                                                                                                                                          			&lt;!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --&gt;
                                                                                                                                                          			&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                                                                                                          				 viewBox="0 0 130 200" style="enable-background:new 0 0 130 200;" xml:space="preserve"&gt;
                                                                                                                                                          				&lt;style type="text/css"&gt;
                                                                                                                                                          					.st0{fill:#00AEEF;stroke:#000000;stroke-miterlimit:10;}
                                                                                                                                                          				&lt;/style&gt;
                                                                                                                                                          				&lt;path id="XMLID_1" class="st0" d="M104.4,149.8L6,194.5l5.1-105.3l66.4,13.1L10.6,6.7l63.6,37.6l24.4-30.4
                                                                                                                                                          					c26.7,5.8,38.5,90.3-10.1,54.8L104.4,149.8z"/&gt;
                                                                                                                                                          			&lt;/svg&gt;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		Things that are unnecessary:
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			&lt;?xml version="1.0" encoding="utf-8"?&gt;
                                                                                                                                                          			&lt;!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --&gt;
                                                                                                                                                          			&lt;svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                                                                                                          				 style="enable-background:new 0 0 130 200;" xml:space="preserve"&gt;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          				
                                                                                                                                                          		The only thing that IS necessary in the &lt;svg&gt; node is:
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			&lt;svg viewBox="0 0 130 200"&gt;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          		
                                                                                                                                                          		Trimmed down for source:	
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			&lt;svg viewBox="0 0 130 200"&gt;
                                                                                                                                                          				&lt;style type="text/css"&gt;
                                                                                                                                                          					.st0{fill:#00AEEF;stroke:#000000;stroke-miterlimit:10;}
                                                                                                                                                          				&lt;/style&gt;
                                                                                                                                                          				&lt;path id="XMLID_1" class="st0" d="M104.4,149.8L6,194.5l5.1-105.3l66.4,13.1L10.6,6.7l63.6,37.6l24.4-30.4
                                                                                                                                                          					c26.7,5.8,38.5,90.3-10.1,54.8L104.4,149.8z"/&gt;
                                                                                                                                                          			&lt;/svg&gt;
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>	
                                                                                                                                                          
                                                                                                                                                          		NOTE: Sometimes there will be a width and/or height attribute.  This will overwrite the viewBox and cause display issues. This should be removed
                                                                                                                                                          		
                                                                                                                                                          		<br><br>
                                                                                                                                                          		Convert to string for javascript.  This can be done inline with the UISvg instance, but since vector is scalable and reusable 
                                                                                                                                                          		across all sizes, it is a good idea to place this in AdData so that it can be accessed by all builds, classes and instances.
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			// In AdData
                                                                                                                                                          			this.svgSrc = '&lt;svg viewBox="0 0 130 200"&gt;'
                                                                                                                                                          						+ '&lt;style type="text/css"&gt;.st0{fill:#00AEEF;stroke:#000000;stroke-miterlimit:10;}&lt;/style&gt;'
                                                                                                                                                          						+ '&lt;path id="XMLID_1" class="st0" d="M104.4,149.8L6,194.5l5.1-105.3l66.4,13.1L10.6,6.7l63.6,37.6l24.4-30.4c26.7,5.8,38.5,90.3-10.1,54.8L104.4,149.8z"/&gt;'
                                                                                                                                                          						+ '&lt;/svg&gt;'
                                                                                                                                                          		</codeblock>
                                                                                                                                                          		<br><br>
                                                                                                                                                          
                                                                                                                                                          		Create a UISvg:
                                                                                                                                                          		<codeblock>
                                                                                                                                                          			var mySvg = new UISvg ({
                                                                                                                                                          				id : 'my-svg',
                                                                                                                                                          				target : View.main,
                                                                                                                                                          				source : adData.svgSrc,
                                                                                                                                                          				css : {
                                                                                                                                                          					width : 75
                                                                                                                                                          				}
                                                                                                                                                          			})
                                                                                                                                                          		</codeblock>
                                                                                                                                                          */


var UISvg = function UISvg(arg) {
	_classCallCheck(this, UISvg);

	arg.css = arg.css || {};

	var _source = null;
	var _css = arg.css || {};
	var _ratio = 1;

	var _noWidth = _css.width == undefined;
	var _noHeight = _css.height == undefined;
	if (_noWidth && _noHeight) {
		_css.width = _css.height = 'inherit';
	}

	if (!arg.source) throw new Error("UISvg : No markup source set on '" + arg.id + "'");

	var U = new _UIComponent2.default(arg, 'svg');

	Object.defineProperties(U, {
		/**
  	@memberOf UISvg
  	@var {string} source
  	@desc
  		Getter|Setter : A string markup of an svg code: which is in an html/xml style format.  Note that when exporting from Illustrator or other
  		programs there is extra bloat code that is not necessary.
  	@example
  		// get
  		console.log(mySvg.source)
  			// set
  		mySvg.source = '<svg viewBox="0 0 130 200">'
  						+ '<style type="text/css">.st0{fill:#00AEEF;stroke:#000000;stroke-miterlimit:10;}</style>'
  						+ '<path id="XMLID_1_" class="st0" d="M104.4,149.8L6,194.5l5.1-105.3l66.4,13.1L10.6,6.7l63.6,37.6l24.4-30.4c26.7,5.8,38.5,90.3-10.1,54.8L104.4,149.8z"/>'
  						+ '</svg>'						
  */
		source: {
			get: function get() {
				return _source;
			},
			set: function set(value) {
				_source = value;
				U.innerHTML = value;
				var svg = U.getElementsByTagName('svg')[0];
				var viewBox = svg.getAttribute('viewBox').split(/\s/g);
				_ratio = +viewBox[2] / +viewBox[3];
			}
		},

		/**
  	@memberOf UISvg
  	@var {number} width
  		Getter|Setter : A Number representing the width of the div.  Directly gets/sets the style css width.
  		<br><span style="color:#ff0000;">WARN:</span> This will change the height as well to maintain aspect ratio of the source 
  	@example
  		// get
  		console.log(mySvg.width)
  			// set
  		mySvg.width = 140
  */
		width: {
			get: function get() {
				return U.offsetWidth;
			},
			set: function set(value) {
				var newHeight = value / _ratio;
				_adView.Styles.setCss(U, {
					width: value,
					height: newHeight
				});
			}
		},

		/**
  	@memberOf UISvg
  	@var {number} height
  		Getter|Setter : A Number representing the height of the div.  Directly gets/sets the style css height.
  		<br><span style="color:#ff0000;">WARN:</span> This will change the width as well to maintain aspect ratio of the source 
  	@example
  		// get
  		console.log(mySvg.height)
  			// set
  		mySvg.height = 140
  */
		height: {
			get: function get() {
				return U.offsetHeight;
			},
			set: function set(value) {
				var newWidth = value * _ratio;
				_adView.Styles.setCss(U, {
					width: newWidth,
					height: value
				});
			}
		}
	});

	U.toString = function () {
		return '[object UISvg]';
	};

	U.source = arg.source;

	if (_noWidth && _noHeight) {} else if (_noWidth) {
		U.height = _css.height;
	} else if (_noHeight) {
		U.width = _css.width;
	}

	U._initAlign();

	return U;
};

exports.default = UISvg;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UITextField.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UITextField.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _UIComponent2 = __webpack_require__(/*! ./UIComponent */ "./1-build/node_modules/@ff0000-ad-tech/ad-ui/lib/UIComponent.js");

var _UIComponent3 = _interopRequireDefault(_UIComponent2);

var _adView = __webpack_require__(/*! ad-view */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js");

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

var _adExternal = __webpack_require__(/*! ad-external */ "./1-build/node_modules/@ff0000-ad-tech/ad-external/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@npmpackage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@class UITextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               	@desc
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		Import from <a href="https://github.com/ff0000-ad-tech/ad-ui">ad-ui</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// importing into an ES6 class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			import { UITextField } from 'ad-ui'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		This is a display object class, extending {@link UIComponent}.  By extending {@link UIComponent} this has all of its native properties and methods.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		See {@link UIComponent} for more info.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		It is a DOM element that contains text and handles its styling, layout, and formatting.  There are multiple format types, which allow for different 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		use cases, whether it be an auto word wrapping paragraph style or rigid lines.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		Auto-sizing of font is built into the types, so there is no longer a need to run a secondary method.  Just set that type and it does it automatically.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		See {@link TextFormat} for more info on each type. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		UITextfield works by utilizing native css properties to accomplish things like vertical and horizontal alignment, leading (line spacing),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		and padding. There are getter/setters for display properties so generally speaking, there should not be a need to manually manipulate the css of the content.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		Rather than having multiple nested divs that all must using their width and height to accomplish these, using the native css allows for greater control.  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		So, UITextField is simply a &lt;div> and a child &lt;span> element that holds the content. That &lt;span> element is relativly placed which is how all the css 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		works, so it is advised against targeting that &lt;span> for any reason.  Use the top level for animation.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 1:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// creates a textfield on Main container that displays text in a line
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			T.myTextField = new UITextField({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : T,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-textfield',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				css : {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					x : 50,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					y : 200,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					width : 300,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					height : 90
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontSize : 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontFamily : 'template_font',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				format : TextFormat.INLINE,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				alignText : Align.CENTER,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				bufferText : {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					top : 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					bottom : 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					left : 5,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					right : 5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				leading : .8,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				spacing : 2,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				text : 'This is my awesome sentence!'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// referenced later anywhere outside the class by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			View.main.myTextField
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 2:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// creates a textfield that displays text as a paragraph, but resizes to fit the container
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			T.myTextField = new UITextField ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : T,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-textfield',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				css : {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					x : 50,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					y : 200,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					width : 200,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					height : 90
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontSize : 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontFamily : 'template_font',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				format : TextFormat.PARAGRAPH_FIT,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				alignText : Align.LEFT,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				leading : .8,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				text : 'This is my awesome sentence!'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<b>Sample 3:</b><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			// creates a textfield and resizes the container to fit the text
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			View.main.myTextField = new UITextField ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				target : View.main,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				id : 'my-textfield',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				css : {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					x : 50,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					y : 200,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					width : 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               					height : 10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontSize : 30,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				fontFamily : 'template_font',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				format : TextFormat.INLINE_CLAMP,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				alignText : Align.LEFT,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				leading : .8,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               				text : 'This is my awesome sentence!'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               			});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		</codeblock>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               		<br><br>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var UITextField = function (_UIComponent) {
	_inherits(UITextField, _UIComponent);

	function UITextField(arg) {
		var _ret;

		_classCallCheck(this, UITextField);

		/* 
  	TODO 
  	- debug - use class
     
     BUGS
  	- 
  		CODE NOTE
  		div {
  			width: 250px;
  			height: 100px;
  			text-align: center;
  			border: 1px solid #123456;
  			font-size: 24px;
  			display: inline-block;
  		}
  			span {
  			display: table-cell;
  			vertical-align: center;
  			height: 100px;
  			width: 250px;
  			line-height: 130%;
  			background-color: rgba(200,0,0,.5);
  		}
  */

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// BASE CSS
		_adView.Styles.injectStylesheet('RED_uiTextfield', '.ui-textfield', 'position:absolute; white-space:nowrap;', '.smooth-text', '-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;', '.ui-textfield .content', 'position:relative; display:table-cell; cursor:default; pointer-events:none; line-height:100%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;');

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PRIVATE PROPERTIES
		var _alignText;
		var _fontSize = 0;
		var _minFontSize = 1;
		var _fontFamily;
		var _format = '';
		var _leading;
		var _spacing;
		var _bufferText = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};
		var _text = '';
		var _init = true;

		var _verticalAlign;
		var _smoothing;

		var _defaults = {};

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// MARKUP
		arg = arg || {};

		var _this = _possibleConstructorReturn(this, _UIComponent.call(this, arg));

		var U = _this;
		_adView.Styles.addClass(U, 'ui-textfield');

		var _content = document.createElement('span');
		_adView.Styles.addClass(_content, 'content');
		U.appendChild(_content);

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// GETTER | SETTTER

		Object.defineProperties(U, {
			/**
   	@memberOf UITextField
   	@var {string|Align} alignText
   		Getter|Setter : A String, or {@link Align} constant, representing the alignment of the text content inside the UITextField.
   	@example
   		// change the size of the font
   		View.main.myTextField.alignText = Align.BOTTOM_RIGHT;
   			// get the current size of the font
   		console.log( View.main.myTextField.alignText );
   */
			alignText: {
				get: function get() {
					return _alignText;
				},
				set: function set(value) {
					//console.log( 'UITextfield :: SET -> alignText =', value )
					if (value && _alignText != value) {
						_alignText = value;

						var ta = (_alignText.match(/(left|right)/gi) || ['center'])[0].toLowerCase();
						_adView.Styles.setCss(U, {
							lineHeight: U.height,
							textAlign: ta
						});

						_verticalAlign = (_alignText.match(/(bottom|top)/gi) || ['middle'])[0].toLowerCase();
						_adView.Styles.setCss(_content, {
							verticalAlign: _verticalAlign
						});
					}
				}
			},
			/**
   	@memberOf UITextField
   	@var {number} fontSize
   		Getter|Setter : A Number representing the current size of the text font. 
   	@example
   		// change the size of the font
   		View.main.myTextField.fontSize = 14
   			// get the current size of the font
   		console.log( View.main.myTextField.fontSize )
   */
			fontSize: {
				get: function get() {
					return _fontSize;
				},
				set: function set(value) {
					if (!isNaN(value) && value > 0) {
						_fontSize = value;
						U.style.fontSize = ~~value + 'px';

						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {number} minFontSize
   		Getter|Setter : A Number representing the minimum size of the text font to avoid resozing down to 0. Default is 1. 
   	@example
   		// change the minimum size of the font
   		View.main.myTextField.minFontSize = 5
   			// get the current minimum size of the font
   		console.log( View.main.myTextField.minFontSize )
   */
			minFontSize: {
				get: function get() {
					return _minFontSize;
				},
				set: function set(value) {
					if (value != undefined && _minFontSize != value) {
						if (value < 1) value = 1;
						_minFontSize = value;
						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {string} fontFamily
   		Getter|Setter : A String representing the current font family being assigned to the text. 
   	@example
   		// change the font 
   		View.main.myTextField.fontFamily = 'Arial'
   			// get the current font
   		console.log( View.main.myTextField.fontFamily )
   */
			fontFamily: {
				get: function get() {
					return _fontFamily;
				},
				set: function set(value) {
					_fontFamily = value;
					U.style.fontFamily = value;
					update();
				}
			},

			/**
   	@memberOf UITextField
   	@var {string|TextFormat} format
   		Getter|Setter : A String, or {@link TextFormat} constant, representing the layout type for the text within the UITextField.  
   		<br><br>
   			This is what defines if the text is either in a line, word wrapped like a paragraph, has auto sizing to the font soze or if the 
   		UITextField is resized to the content.  See {@link TextFormat} for more info.
   	@example
   		View.main.myTextField = new UITextField({
   			target : View.main,
   			id : 'my-textfield',
   			css : {
   				width : 200,
   				height : 90
   			},
   			fontSize : 30,
   			format : TextFormat.INLINE,
   			text : 'This is my awesome sentence!'
   		});
   			// change from an inline to a word warping paragraph style
   		View.main.myTextField.format = TextFormat.PARAGRAPH;
   			// change back to inline with autosizing
   		View.main.myTextField.format = TextFormat.INLINE_FIT;
   			// change back to a word warpping paragraph style that auto sizes the font to fit perfectly
   		View.main.myTextField.format = TextFormat.PARAGRAPH_FIT;
   			// resize the UITextField to fit the size of all the text as inline
   		View.main.myTextField.format = TextFormat.INLINE_CLAMP;
   			// resize the UITextField to fit the size of all the text as a paragraph
   		View.main.myTextField.format = TextFormat.PARAGRAPH_CLAMP;
   */
			format: {
				get: function get() {
					return _format;
				},
				set: function set(value) {
					//console.log( 'UITextfield :: SET -> format =', value )
					if (_format != value) {
						_format = value;
						// any inline type uses 'nowrap' / any paragraph uses 'normal'
						_adView.Styles.setCss(U, {
							whiteSpace: /inline/g.exec(_format) != null ? 'nowrap' : 'normal'
						});
						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {number} leading
   		Getter|Setter : A Number representing the percentage of spacing between each line relative to the font size.
   		<br><br>
   			By default, a value of 1 is equal to a default line-height value similar to Photoshop. A value of 0 will have each line on top of each other, 
   		as if it was written over the previous line.  So to create a look that is slightly tighter than default, you would use something like a value of .8 to bring
   		the lines a little closer together. 
   		<br><br>
   			The use of a percentage allows for the font size to change without having to redefine the line-height spacing.
   	@example
   		// change the percentage of spacing between lines relative to the font size
   		View.main.myTextField.leading = .8;
   			// get the current percentage of spacing between lines relative to the font size
   		console.log( View.main.myTextField.leading );
   */
			leading: {
				get: function get() {
					return _leading;
				},
				set: function set(value) {
					//console.log( 'UITextfield :: SET -> leading =', value )
					if (value && _leading != value) {
						_leading = value;

						_adView.Styles.setCss(_content, {
							lineHeight: _leading * 100 + '%'
						});

						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {number} spacing
   		Getter|Setter : A Number representing the spacing between each letter.
   	@example
   		// change the spacing between each letter
   		View.main.myTextField.spacing = 3;
   			// get the current letter spacing
   		console.log( View.main.myTextField.spacing );
   */
			spacing: {
				get: function get() {
					return _adView.Styles.getCss(U, 'letter-spacing') || _spacing;
				},
				set: function set(value) {
					if (value && _spacing != value) {
						_spacing = value;

						_adView.Styles.setCss(U, {
							letterSpacing: value
						});

						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {number|array} bufferText
   		Getter|Setter : A Number or Array of Numbers representing the amount of spacing from the edges of the UITextField and the 
   		text content.
   		<br><br>
   			This sets the css margin, but also is used for calculations for auto sized formats.  Setting the margin 
   		manually will cause layout issues as the class does not have those numbers to calculate against.
   	@example
   		// set the padding on all 4 sides uniformly
   		View.main.myTextField.bufferText = 5;
   			// set the padding on top & bottom = 7 and left & right = 5
   		View.main.myTextField.bufferText = [7,5];
   			// set the top = 7, right = 3, bottom = 5, left = 6
   		View.main.myTextField.bufferText = [7,3,5,6];
   			// get the current padding
   		console.log( View.main.myTextField.bufferText );
   */
			bufferText: {
				get: function get() {
					return _bufferText;
				},
				set: function set(value) {
					//console.log( 'UITextfield :: SET -> bufferText =', value )
					if (value && _bufferText != value) {
						var style = '';
						var order = ['top', 'right', 'bottom', 'left'];

						for (var i = 0; i < 4; i++) {
							var prop = order[i];
							var propValue = isNaN(value) ? value[prop] || 0 : value;
							//console.log( i, prop, propValue, value[prop] )
							_bufferText[prop] = propValue;
							style += propValue + 'px ';
						}

						_adView.Styles.setCss(_content, {
							padding: style
						});

						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {string} text
   		Getter|Setter : A String representing the current String text content. 
   	@example
   		// change the display text
   		View.main.myTextField.text = "Change my text to say this.";
   			// get the current display text
   		console.log( View.main.myTextField.text );
   */
			text: {
				get: function get() {
					return _text;
				},
				set: function set(value) {
					//console.log( 'UITextfield :: SET -> text =', value )
					if (value != undefined && value != '') {
						_text = value;
						U.setDefault('text', value);
						_content.innerHTML = value;
						update();
					}
				}
			},

			/**
   	@memberOf UITextField
   	@var {boolean} smoothing
   		Getter|Setter : A Boolean to add or remove the css smoothing: <code>-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;</code>
   	@example
   		View.main.myTextField.smoothing = false;
   		//
   		// get the current smoothing
   		console.log( View.main.myTextField.smoothing );
   */
			smoothing: {
				get: function get() {
					return _smoothing;
				},
				set: function set(value) {
					_smoothing = value;
					_adView.Styles[_smoothing ? 'addClass' : 'removeClass'](_content, 'smooth-text');
				}

				/**
    	@memberOf UITextField
    	@var {boolean} shrinkOnEmpty
    		A Boolean applicable only on instantiation. If set to true, will force the UITextField to a width and height of 0 if the text property is empty or null.
    		This is useful if you're passing in dynamic text values and aligning UITextFields against each other or grouping them into UIGroups.
    		The result is a UITextField that doesn't take up space if it is given no text value.
    	@example
    		// create a UITextField that might be empty, and thus shrink
    		T.myTextField = new UITextField({
    			target : T,
    			id : 'my-textfield',
    			css : {
    				x : 50,
    				y : 200,
    				width : 300,
    				height : 90
    			},
    			fontSize : 30,
    			fontFamily : 'template_font',
    			format : TextFormat.INLINE,
    			alignText : Align.CENTER,
    			bufferText : {
    				top : 1,
    				bottom : 1,
    				left : 5,
    				right : 5
    			},
    			leading : .8,
    			spacing : 2,
    			text : Math.random() < 0.5 ? '' : 'This text is not empty!',
    			shrinkOnEmpty: true
    		});
    			// change the text after the fact
    		T.myTextField.text = 'My UITextField is no longer empty or blank!';
    		T.myTextField.resetToDefault();
    */
			} });

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS

		/**
  	@memberOf UITextField
  	@method resetToDefault
  	@param {args} arguments
  	@desc
  		Change specific properties, or all properties (by passing nothing in) back to their default values, which are initally set to the values passed in upon instantiation
  		of a UITextField. This is useful when reusing a UITextField for multiple inputs, such as with carousels where the content is
  		constantly updating and the carousel scrolls.
  	@example
  		// reset all properties to their default values by passing in no parameters
  		myTextField.resetToDefault();
  		
  		// reset only these two specific properties to their default values by passing in Strings
  		myTextField.resetToDefault( 'leading', 'fontSize' );
  			
  */
		U.resetToDefault = function () {
			_init = true;
			if (arguments.length > 0) {
				for (var i = 0; i < arguments.length; i++) {
					U[arguments[i]] = _defaults[arguments[i]];
				}
			} else {
				//			console.log( Array(100).join('*') )
				//			console.log( _defaults )
				for (var param in _defaults) {
					// check for the param first, only errors in IE11/Win7
					// also check for undefined becusue only checking the key will be false with a 0 value
					if (U[param] != undefined && param !== 'align') {
						U[param] = _defaults[param];
					}
				}
			}
			_init = false;
			update();
		};

		/**
  	@memberOf UITextField
  	@method setDefault
  	@desc
  		Assign a default value, so that when resetToDefault() is called, it will include this value.
  	@example
  		myTextField.setDefault( 'fontSize', 16 );
  */
		U.setDefault = function (key, value) {
			_defaults[key] = value;
		};

		U.toString = function () {
			return '[object UITextfield]';
		};

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PRIVATE METHODS
		function initDefaults() {
			for (var a in arg) {
				if (a == 'css') {
					for (var b in arg.css) {
						switch (b) {
							case 'x':
							case 'y':
							case 'width':
							case 'height':
								_defaults[b] = arg.css[b];
								break;
						}
					}
				} else if (a == 'bufferText') {
					_defaults[a] = {};
					for (var prop in _bufferText) {
						_defaults[a][prop] = arg[a][prop] || 0;
					}
				} else {
					_defaults[a] = arg[a];
				}
			}
			//console.log( 'defaults:', _defaults )
			delete _defaults.target;
			delete _defaults.id;
		}

		function update() {
			if (_init) return;

			switch (_format) {
				case 'paragraphClamp':
				case 'inlineClamp':
					resizeToContent();
					break;

				// FitClamp types are 2 phases, easiest to temp change it, run update twice, and set it back
				case 'inlineFitClamp':
					_format = 'inlineFit';
					autoSizeContent();
					_format = 'inlineClamp';
					resizeToContent();
					_format = 'inlineFitClamp';
					break;
				case 'paragraphFitClamp':
					_format = 'paragraphFit';
					autoSizeContent();
					_format = 'paragraphClamp';
					resizeToContent();
					_format = 'paragraphFitClamp';

				default:
					autoSizeContent();
			}
		}

		function autoSizeContent() {
			//temp set it to default for resizing
			_adView.Styles.setCss(_content, {
				verticalAlign: 'auto',
				height: 'auto',
				width: 'auto'
			});

			if (_format == 'paragraphFit') {
				var tempFontSize = _fontSize;

				// check the height first to allow for word wrap to fit vertically first
				while (U.scrollHeight > U.offsetHeight) {
					if (tempFontSize <= _minFontSize) break;
					tempFontSize--;
					U.style.fontSize = tempFontSize + 'px';
				}

				// then, if it is still overspraying horizontally, shrink again to fit
				while (U.scrollWidth > U.offsetWidth) {
					if (tempFontSize <= _minFontSize) break;
					tempFontSize--;
					U.style.fontSize = tempFontSize + 'px';
				}

				_fontSize = tempFontSize;
				U.style.fontSize = _fontSize + 'px';
			} else if (_format == 'inlineFit') {
				// NOTE - IE wont return correct width/height if the font is smaller than the parent, so using large numbers for ratios
				//		- reset the innerHTML after each fontSize change to force a redraw for correct heights on iOS browser
				var parentWidth = U.offsetWidth;
				var parentHeight = U.offsetHeight;

				var large = 243;
				var small = _adExternal.Device.browser == 'ie' ? 182 : 1;

				U.style.fontSize = large + 'px';
				_content.innerHTML = _text;
				var largeWidth = _content.offsetWidth;
				var largeHeight = _content.offsetHeight;

				U.style.fontSize = small + 'px';
				_content.innerHTML = _text;
				var smallWidth = _content.offsetWidth;
				var smallHeight = _content.offsetHeight;

				var fontSizeWidth = _adUtils.MathUtils.rel(large, small, largeWidth, smallWidth, parentWidth);
				var fontSizeHeight = _adUtils.MathUtils.rel(large, small, largeHeight, smallHeight, parentHeight);

				_fontSize = Math.max(_minFontSize, ~~Math.min(_fontSize, Math.min(fontSizeWidth, fontSizeHeight)));

				U.style.fontSize = _fontSize + 'px';
			}

			if (_verticalAlign) {
				_adView.Styles.setCss(_content, {
					verticalAlign: _verticalAlign,
					height: U.offsetHeight - _bufferText.top - _bufferText.bottom,
					width: U.offsetWidth - _bufferText.left - _bufferText.right
				});
			}
		}

		function resizeToContent() {
			// must add 1 for safari & firefox when using paragraph formats
			var offset = /para/g.exec(_format) != null ? 1 : 0;
			U.width = U.width - offset;

			// set the content width/height for assigning clamp after created with fit
			_adView.Styles.setCss(_content, {
				height: 'auto',
				width: 'auto',
				overflowWarp: 'normal'
			});

			U.width = _content.offsetWidth + offset;
			U.height = _content.offsetHeight;
		}

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// INIT
		U.enabled = true;

		initDefaults();

		U.format = arg.format;
		if (arg.shrinkOnEmpty === true && !arg.text) U.width = U.height = 0;
		U.fontSize = arg.fontSize;
		U.minFontSize = arg.minFontSize;
		U.fontFamily = arg.fontFamily || 'Arial';
		U.alignText = arg.alignText;
		U.bufferText = arg.bufferText;
		U.leading = arg.leading;
		U.spacing = arg.spacing;
		U.smoothing = arg.smoothing != false;

		_init = false;
		U.text = arg.text;

		U._initAlign();

		return _ret = U, _possibleConstructorReturn(_this, _ret);
	}

	return UITextField;
}(_UIComponent3.default);

exports.default = UITextField;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js":
/*!****************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TextUtils = exports.ObjectUtils = exports.MonetUtils = exports.MathUtils = exports.ImageUtils = exports.DcsUtils = exports.ColorUtils = exports.ArrayUtils = exports.MotionUtils = exports.LocationUtils = undefined;

var _LocationUtils = __webpack_require__(/*! ./lib/LocationUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/LocationUtils.js");

Object.defineProperty(exports, 'LocationUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LocationUtils).default;
  }
});

var _MotionUtils = __webpack_require__(/*! ./lib/MotionUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MotionUtils.js");

Object.defineProperty(exports, 'MotionUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MotionUtils).default;
  }
});

var _ArrayUtils = __webpack_require__(/*! ./lib/ArrayUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ArrayUtils.js");

var ArrayUtils = _interopRequireWildcard(_ArrayUtils);

var _ColorUtils = __webpack_require__(/*! ./lib/ColorUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ColorUtils.js");

var ColorUtils = _interopRequireWildcard(_ColorUtils);

var _DcsUtils = __webpack_require__(/*! ./lib/DcsUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/DcsUtils.js");

var DcsUtils = _interopRequireWildcard(_DcsUtils);

var _ImageUtils = __webpack_require__(/*! ./lib/ImageUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ImageUtils.js");

var ImageUtils = _interopRequireWildcard(_ImageUtils);

var _MathUtils = __webpack_require__(/*! ./lib/MathUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MathUtils.js");

var MathUtils = _interopRequireWildcard(_MathUtils);

var _MonetUtils = __webpack_require__(/*! ./lib/MonetUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MonetUtils.js");

var MonetUtils = _interopRequireWildcard(_MonetUtils);

var _ObjectUtils = __webpack_require__(/*! ./lib/ObjectUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ObjectUtils.js");

var ObjectUtils = _interopRequireWildcard(_ObjectUtils);

var _TextUtils = __webpack_require__(/*! ./lib/TextUtils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/TextUtils.js");

var TextUtils = _interopRequireWildcard(_TextUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* NOTE: DON'T import only "default" from ObjectUtils since the default
function is a reserved keyword. Importing into scope will likely cause
issues w/ code using the "default" keyword */


exports.ArrayUtils = ArrayUtils;
exports.ColorUtils = ColorUtils;
exports.DcsUtils = DcsUtils;
exports.ImageUtils = ImageUtils;
exports.MathUtils = MathUtils;
exports.MonetUtils = MonetUtils;
exports.ObjectUtils = ObjectUtils;
exports.TextUtils = TextUtils;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ArrayUtils.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ArrayUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.combine = combine;
exports.copy = copy;
exports.insertAt = insertAt;
exports.removeAt = removeAt;
exports.remove = remove;
exports.shuffle = shuffle;
exports.contains = contains;
/**
	@npmpackage
	@class ArrayUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ArrayUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This object contains additional methods for manipulating arrays.
*/

/** 
	@memberOf ArrayUtils
	@method combine
	@param {array} arr1
		first array
	@param {array} arr2
		second array appended to the first
	@desc
		A 'more friendly' concat function.
*/
function combine(arr1, arr2) {
	return arr1.concat(arr2);
}

/** 
	@memberOf ArrayUtils
	@method copy
	@param {array} array
		the array to duplicate
	@desc
		Creates a unique duplicate of the given array.
*/
function copy(array) {
	return array.slice();
}

/** 
	@memberOf ArrayUtils
	@method insertAt
	@param {array} array
		the array to modify
	@param {number} index
		the index to insert elements
	@param {arguments} arguments
		the elements to insert
	@desc
		Adds elements at a provided index. Returns a new array.
*/
function insertAt(array, index) {
	var a = array.slice(0, index);
	var b = array.slice(index, array.length);
	var args = Array.prototype.slice.call(arguments);
	var values = args.slice(2, args.length);
	return a.concat(values).concat(b);
}

/**
	@memberOf ArrayUtils
	@method removeAt
	@param {array} array
		the array to modify
	@param {number} index
		the index of the element to remove
	@desc
		Removes an element at a provided index. Returns a new array.
*/
function removeAt(array, index) {
	var a = copy(array);
	a.splice(index, 1);
	return a;
}

/**
	@memberOf ArrayUtils
	@method remove
	@param {array} array
		the array to modify
	@param {number|string} item
		the item to remove from the array
	@desc
		Removes all instances of an element from the given array. Returns a new array.
*/
function remove(array, item) {
	var _returnArray = array.slice();
	while (_returnArray.indexOf(item) >= 0) {
		_returnArray = removeAt(_returnArray, _returnArray.indexOf(item));
	}return _returnArray;
}

/**
	@memberOf ArrayUtils
	@method shuffle
	@param {array} array
		the array to modify
	@desc
		Shuffles the array into a random order.
*/
function shuffle(array) {
	return array.sort(function () {
		return Math.random() < 0.5 ? 1 : -1;
	});
}

/**
	@memberOf ArrayUtils
	@method contains
	@param {array} array
		the array to check
	@param {number|string} item
		the item to check for in the array
	@desc
		Determines if a given array contains a given element. Returns a boolean.
*/
function contains(array, item) {
	return array.indexOf(item) >= 0;
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ColorUtils.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ColorUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toRgba = toRgba;
exports.toRgbaString = toRgbaString;
exports.hue = hue;
exports.saturation = saturation;
exports.contrast = contrast;
exports.tint = tint;
exports.transform = transform;
exports.invert = invert;
/**
	@npmpackage
	@class ColorUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ColorUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This class contains methods for manipulating color.
*/

/**	
	@memberOf ColorUtils
	@method toRgba
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. 
		If undefined, will default to the alpha value of the color.
	@desc
		Returns an object containing r, g, b, a properties 
*/
function toRgba(color, alpha) {
	switch (typeof color === 'undefined' ? 'undefined' : _typeof(color)) {
		case 'object':
			color = color || {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			};
			break;
		default:
			// convert from rgb() or rgba() string
			if (color.indexOf('rgb') >= 0) {
				color = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
				color = {
					r: parseInt(color[0]),
					g: parseInt(color[1]),
					b: parseInt(color[2]),
					a: Number(color[3])
				};
			} else if (color.indexOf('#') >= 0) {
				// convert from HEX
				var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(color);
				color = result ? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
					a: result[4] ? Number(result[4], 16) : 1
				} : null;
			} else {
				// given a color name like 'red' or 'green'
				console.log('');
				console.log("ERROR: ColorUtils.toRgba does not accept color names such as '" + color + "'. Use HEX or an RGB/A string or object per documentation");
				console.log("Returning the color '" + color + "' without any alpha");
				console.log('');
				return color;
			}
			break;
	}
	if (!color.a) color.a = 1;
	if (alpha >= 0) color.a = alpha;

	return color;
}

/**	
	@memberOf ColorUtils
	@method toRgbaString
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. If undefined, will default to the alpha value of the color.
	@desc
		Returns the rgba() string representing a given color and optional alpha
*/
function toRgbaString(color, alpha) {
	var color = toRgba(color, alpha);
	return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
}

/**	
	@memberOf ColorUtils
	@method hue
	@param {object} obj
		an object with paramaters for overall hue shift, see Properties for more info
	@property {string|object} from
		the source color to hue shift, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		amount to shift the colors in a range of 0-360
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Apply a hue shift to a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// convert to full grayscale
		ColorUtils.hue({
			from: '#99aa33',
			amount: 66,
			format: 'object'
		});
		// returns {r: 51, g: 170, b: 79, a: 1}
*/
function hue(obj) {
	obj = _convert(obj);
	var hsl = rgbToHSL(obj.from);
	hsl.h = (hsl.h + obj.amount) % 360;
	if (hsl.h < 0) hsl.h += 360;
	var returnColors = _hslToRGB(hsl);

	if (obj.from.a >= 0) returnColors.a = obj.from.a;
	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method saturation
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to saturate, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the total saturation of the from. 0 = grayscale, 1 = full, original color
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the color saturation of a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// convert to full grayscale
		ColorUtils.saturation({
			from: '#99aa33',
			amount: 0,
			format: 'object'
		});
		// returns {r: 86, g: 86, b: 86, a: 1}
*/
function saturation(obj) {
	delete obj.to;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		var _fromVal = parseInt(obj.from[val]);
		if (val === 'a') {
			returnColors[val] = _fromVal;
		} else {
			// this prevents the entire color from turning a middling gray - rgb(128, 128, 128)
			// doing this check on only the red values is sufficient - we skip this calculation for the other two colors
			if (val === 'r') {
				var _high = 0;
				var _low = 255;
				for (var sub in obj.from) {
					if (parseInt(obj.from[sub]) > _high) _high = parseInt(obj.from[sub]);
					if (parseInt(obj.from[sub]) < _low) _low = parseInt(obj.from[sub]);
				}
			}
			returnColors[val] = Math.round(_fromVal * obj.amount + (1 - obj.amount) * ((_high + _low) / 2));
		}
	}

	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method contrast
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.,
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond!
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the contrast of the target; returns either an 'rgba()' string or an rgba{} object
	@example
		// get your whites whiter and brights brighter
		ColorUtils.contrast({
			from: '#aa0011'
			amount: 1.3,
			format: 'object'
		});
		// returns {r: 221, g: 0, b: 22, a: 1}
*/
function contrast(obj) {
	delete obj.to;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		var _fromVal = parseInt(obj.from[val]);
		returnColors[val] = val === 'a' ? _fromVal : Math.round(_fromVal * obj.amount);
	}

	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method tint
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to tint to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string, 
		or an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Tint a color uniformly to a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// tint to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };
		(end)

		(start code)
		// tint 50% to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 0.5
		});
		// returns 'rgba(128, 128, 0, 1)'
*/
function tint(obj) {
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		var _fromVal = parseInt(obj.from[val]);
		returnColors[val] = val === 'a' ? _fromVal : Math.round(_fromVal + (parseInt(obj.to[val]) - _fromVal) * obj.amount);
	}

	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method transform
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to transform to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color transform
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@returns {string|object} 
		either an 'rgba()' string or an rgba{} object
	@desc
		Color Transforms a color to another color by pulling colors out of original source; 
	@example
		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };


		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1
		});
		// returns 'rgba(0, 255, 0, 1)'
*/
function transform(obj) {
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		var _fromVal = parseInt(obj.from[val]);
		returnColors[val] = val === 'a' ? _fromVal : Math.round(_fromVal - (255 - parseInt(obj.to[val])) * obj.amount);
	}

	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method invert
	@param {object} obj
		an object with parameters for overall inversion, see Properties for more info
	@property {string|object} from
		the color to invert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Invert the color; returns either an 'rgba()' string or an rgba{} object
	@example
		// invert and return result as object
		ColorUtils.invert({
			color: '#ff0000',
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 255, a: 1 };

		// invert and return result as string
		ColorUtils.invert({
			color: '#ff0000'
		});
		// returns 'rgba(0, 255, 255, 1)'
*/
function invert(obj) {
	delete obj.to;
	delete obj.amount;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		var _fromVal = parseInt(obj.from[val]);
		returnColors[val] = val === 'a' ? _fromVal : 255 - _fromVal;
	}

	return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

// PRIVATE FUNCTIONS
// ------------------------------------------------------------------
//
function _convert(obj) {
	// if the provided color information is not already in the {r:, g:, b:, a:} object format, we must convert it to that
	obj.from = obj.from || obj.color;
	if (obj.from && _typeof(obj.from) !== 'object') obj.from = toRgba(obj.from);
	if (obj.to && _typeof(obj.to) !== 'object') obj.to = toRgba(obj.to);
	//
	obj.amount = obj.amount === undefined ? 1 : obj.amount;

	return obj;
}

function rgbToHSL(rgb) {
	var r = rgb.r / 255;
	var g = rgb.g / 255;
	var b = rgb.b / 255;
	var cMax = Math.max(r, g, b);
	var cMin = Math.min(r, g, b);
	var delta = cMax - cMin;
	var l = (cMax + cMin) / 2;
	var h = 0;
	var s = 0;

	if (delta == 0) {
		h = 0;
	} else if (cMax == r) {
		h = 60 * ((g - b) / delta % 6);
	} else if (cMax == g) {
		h = 60 * ((b - r) / delta + 2);
	} else {
		h = 60 * ((r - g) / delta + 4);
	}

	s = delta ? delta / (1 - Math.abs(2 * l - 1)) : 0;

	return {
		h: h,
		s: s,
		l: l
	};
}

function _hslToRGB(hsl) {
	var h = hsl.h / 60;
	var s = hsl.s;
	var l = hsl.l;
	var c = (1 - Math.abs(2 * l - 1)) * s;
	var x = c * (1 - Math.abs(h % 2 - 1));
	var m = l - c / 2;
	var r = void 0;
	var g = void 0;
	var b = void 0;

	h = Math.floor(h);

	switch (h) {
		case 0:
			r = c;
			g = x;
			b = 0;
			break;
		case 1:
			r = x;
			g = c;
			b = 0;
			break;
		case 2:
			r = 0;
			g = c;
			b = x;
			break;
		case 3:
			r = 0;
			g = x;
			b = c;
			break;
		case 4:
			r = x;
			g = 0;
			b = c;
			break;
		case 5:
			r = c;
			g = 0;
			b = x;
	}

	return {
		r: _normalizeRgbValue(r, m),
		g: _normalizeRgbValue(g, m),
		b: _normalizeRgbValue(b, m)
	};
}

function _normalizeRgbValue(color, m) {
	color = Math.floor((color + m) * 255);
	if (color < 0) color = 0;
	return color;
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/DcsUtils.js":
/*!***********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/DcsUtils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.counterWithVars = counterWithVars;
exports.addVideoMetrics = addVideoMetrics;
exports.addYouTubeVideoMetrics = addYouTubeVideoMetrics;
/**
	@npmpackage
	@class DcsUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { DscUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		Doubleclick Studio utilities.
*/

function counterWithVars(str, impression) {
	if (impression) Enabler.reportCustomVariableCount1(str);else Enabler.reportCustomVariableCount2(str);
}

/**
	@memberOf DcsUtils
	@method addVideoMetrics
	@param {VideoPlayer} player 
		The video player instance to track
	@param {string} message
		The message passed as the metric, defaults to 'Video Report 1'
	@desc
		Adds DoubleClick Tracking metrics to a video player.
	@example
		DcsUtils.addVideoMetrics( View.main.videoPlayer, 'Intro Video' );
*/
function addVideoMetrics(player, message) {
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
		studio.video.Reporter.attach(message || 'Video Report 1', player.screen != undefined ? player.screen : player);
	});
}

/**
	@memberOf DcsUtils
	@method addYouTubeVideoMetrics
	@param {VideoPlayer} player 		- The YouTubePlayer instance to track
	@desc
		Adds DoubleClick Tracking metrics to a YouTube video player.  The Enabler counter calls are added to the index when
		a YouTubePlayer is added through Ad App.
		<br><br>

		If manually adding a YouTubePlayer/tracking, the required global vars are:<br>
		<codeblock>
			var trackVideoPlay = function() {
				Enabler.counter( 'YTP Video Play', true )
			}
			var trackVideoReplay = function() {
				Enabler.counter( 'YTP Video Replay', true )
			}
			var trackVideoPause = function() {
				Enabler.counter( 'YTP Video Pause', true )
			}
			var trackVideoComplete = function() {
				Enabler.counter( 'YTP Video Complete', true )
			}
		</codeblock>
		<br><br>

	@example
		DcsUtils.addYouTubeVideoMetrics( View.main.mainYouTubePlayer );
*/
function addYouTubeVideoMetrics(player) {
	var p = player.screen;

	p.addEventListener('play', function () {
		player.isReplay ? trackVideoReplay.call() : trackVideoPlay.call();
	});

	p.addEventListener('pause', function () {
		if (!player.complete) {
			trackVideoPause.call();
		}
	});

	p.addEventListener('complete', function () {
		trackVideoComplete.call();
	});
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ImageUtils.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ImageUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.fitImageAtCoordinate = fitImageAtCoordinate;
/**
	@npmpackage
	@class ImageUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ImageUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This object contains methods necessary for manipulating images.
*/

/**
	@memberOf ImageUtils
	@method fitImageAtCoordinate
	@param {element} target
		The div with a background image
	@param {number} originX
		The x position to center on
	@param {number} originY
		The y position to center on
	@param {img} source
		Optional pass in a source img tag to skip the need to load to get source data
	@desc
		Positions a background image to fit the div size while centering around a point.  If the point is beyond the size bounds, it will align to that side.
*/
function fitImageAtCoordinate(target, originX, originY, source) {
	var child;
	if (originX === undefined && originY === undefined) {
		target.style.backgroundPosition = '50% 50%';
	} else {
		if (source) {
			child = source;
			placement();
		} else {
			child = new Image();
			child.onload = placement;
			child.src = target.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
		}
	}
	target.style.backgroundSize = 'cover';
	target.style.backgroundRepeat = 'no-repeat';

	function placement() {
		var parent = {
			width: target.offsetWidth,
			height: target.offsetHeight
		};
		var parentAspectRatio = parent.width / parent.height;
		var childAspectRatio = child.width / child.height;

		if (parentAspectRatio > childAspectRatio) {
			// child max fits in horizontal, move y
			fit('width', 'height');
		} else if (parentAspectRatio < childAspectRatio) {
			//  child max fits in vertical, move x
			fit('height', 'width');
		}

		function fit(a, b) {
			// child width is parent height times ratio of child width over child height
			// child height is parent width times ratio of child height over child width
			var childSize = parent[a] * (child[b] / child[a]);

			// parent to child scale ratio
			var scalePercent = parent[a] / child[a];

			var coord = {
				width: originX || 0,
				height: originY || 0
				// parent size, halfed then subtract the scaled coordinate point
			};var childMove = parent[b] / 2 - coord[b] * scalePercent;

			// make sure the image doesn't exceed the bounds
			var maxMove = parent[b] - childSize;
			if (childMove > 0) childMove = 0;else if (childMove < maxMove) childMove = maxMove;

			target.style.backgroundPosition = a === 'height' ? childMove + 'px 0px' : '0px ' + childMove + 'px';
		}
	}
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/LocationUtils.js":
/*!****************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/LocationUtils.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class LocationUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { LocationUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This object contains utilities for interfacing with the device's GPS.
*/
var LocationUtils = new function () {
	this.gpsSuccessCallback;
	this.gpsFailCallback;

	/**
 	@memberOf LocationUtils
 	@method getGPSData
 	@param {function} callbackSuccess
 		upon successful acquisition of device location, this funciton is called with global coordinates.
 	@param {function} callbackFail
 		called if the query fails
 	@desc
 		Queries the device for current location. Asyncronous and dependent on user permission, 
 		so callback functions must be used.
 */

	this.getGPSData = function (callbackSuccess, callbackFail) {
		if (navigator.geolocation) {
			LocationUtils.gpsSuccessCallback = callbackSuccess;
			LocationUtils.gpsFailCallback = callbackFail;
			navigator.geolocation.getCurrentPosition(LocationUtils.onLocationRetrieved, LocationUtils.onLocationFailed);
		} else console.log('geolocation not available');
	};

	this.onLocationRetrieved = function (position) {
		LocationUtils.gpsSuccessCallback(position.coords);
	};

	this.onLocationFailed = function (error) {
		console.log('Error retrieving location data');

		switch (error.code) {
			case 0:
				console.log('0 - unknown error');
				break;

			case 1:
				console.log('1 - permission denied');
				break;

			case 2:
				console.log('2 - position unavailable (error response from locaton');
				break;

			case 3:
				console.log('3 - timed out');
				break;
		}

		if (LocationUtils.gpsFailCallback) LocationUtils.gpsFailCallback(error);
	};
}();

exports.default = LocationUtils;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MathUtils.js":
/*!************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MathUtils.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.random = random;
exports.randomBoolean = randomBoolean;
exports.randomWeightedKey = randomWeightedKey;
exports.rel = rel;
exports.inRange = inRange;
exports.isNumber = isNumber;
exports.toNumber = toNumber;
exports.restrict = restrict;
exports.getAnglePoint = getAnglePoint;
exports.getAngle = getAngle;
exports.getDistance = getDistance;
/**
    @npmpackage
    @class MathUtils
    @desc
				Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
				<br>
				<codeblock>
					// importing into an ES6 class
					import { MathUtils } from 'ad-utils'
				</codeblock>
				<br><br>
				
        Common math utilities.
*/

/**
		@memberOf MathUtils
		@method toRadians
		@param {number} degree
				An angle value as a degree
		@desc
				Converts an angle value from Degrees to Radians.
*/
function toRadians(degree) {
		return Math.PI / 180.0 * degree;
}

/**
		@memberOf MathUtils
		@method toDegrees
		@param {number} radian
				An angle value as a radian
		@desc
				Converts an angle value from Radians to Degrees.
*/
function toDegrees(radian) {
		return 180.0 / Math.PI * radian;
}

/**
		@memberOf MathUtils
		@method random
		@param {number} a
				the first value to find between
		@param {number} b
				the second value to find between 
		@param {number} increment
				optionaly set the increment of the random number. Defaults to 1
		@desc
				Get a random number between a range of two values, with an option to return to a decimal place. ( Note that
				 due to the inprecision of decimal number calculation in Javascript, you may not get a perfect result when 
				 your increment value is decimal, but the value will be close. A classic Javascript inpreciosn calculation example: 
				 0.1 + 0.2 = 0.30000000000000004 ) 
		@example
				MathUtils.random ( 1, 3, 1 );   // returns 1 or 2 or 3
				MathUtils.random ( 1, 3, 0.5 )  // returns 1, 1.5, 2, 2.5 or 3
*/
function random(a, b, increment) {
		b = b || 0;
		increment = increment != undefined && increment > 0 ? increment : 1;

		var min = Math.min(a, b);
		var max = Math.max(a, b);

		min = Math.ceil(min / increment) * increment;
		max = Math.floor(max / increment) * increment;

		var _num = min + Math.floor(Math.random() * ((max - min + increment) / increment)) / (1 / increment);
		return _num;
}

/**
		@memberOf MathUtils
		@method randomBoolean
		@param {number} weight
				change the outcome probabilty. Greater than .5 more likely true. Defaults to .5
		@desc
				Randomly returns a true or false;
*/
function randomBoolean(weight) {
		weight = weight || 0.5;
		return Math.random() < weight;
}

function randomWeightedKey(obj) {
		var keys = [];
		var vals = [0];
		for (var param in obj) {
				keys.push(param);
				vals.push(obj[param] + (vals[vals.length - 1] || 0));
		}
		//console.log(keys)
		//console.log(vals)

		var rand = Math.random().toFixed(2) * 100;
		for (var k = 0; k < vals.length - 1; k++) {
				var isIn = inRange(rand, vals[k], vals[k + 1]);
				//console.log('\t', k, rand, vals[k], vals[k+1], isIn)
				if (isIn) {
						//  console.log('\t\t', keys[k])
						return keys[k];
				}
		}
}

/**
		@memberOf MathUtils
		@method rel
		@param {number} a0
				the first value to find between
		@param {number} a1
				the second value to find between
		@param {number} b0
				the first value to use as relative to a0
		@param {number} b1
				the second value to use as relative to a1
		@param {number} bX
				the value between b0 and b1
		@desc
				Calculates a value between two numbers relative to a value between 2 other numbers.
				Returns The proportion between a0 and a1 relative to the bX proportion between b0 and b1
		@example
				MathUtils.rel ( 0, 1, 10, 20, 15 ); // 0.5
				MathUtils.rel ( 100, 300, 3, 5, 3.5 ); // 150
*/
function rel(a0, a1, b0, b1, bX) {
		return (bX - b0) / (b1 - b0) * (a1 - a0) + a0;
}

/**
		@memberOf MathUtils
		@method inRange
		@param {number} val
				the number to check
		@param {number} a
				the first value of the range
		@param {number} b
				the second value of the range
		@returns {boolean}
		@desc
				Checks if a value is in the range of two numbers.
		@example
				MathUtils.inRange ( 5, 1, 10 ); // true
				MathUtils.inRange ( -5, 1, 10 ); // false
*/
function inRange(val, a, b) {
		var min = Math.min(a, b);
		var max = Math.max(a, b);
		return val <= max && val >= min;
}

/**
		@memberOf MathUtils
		@method isNumber
		@param {number} num
				the variable to check
		@desc
				Returns true if the passed var is a number.
*/
function isNumber(num) {
		return !isNaN(num);
}

/**
		@memberOf MathUtils
		@method toNumber
		@param {string} str
				the variable to convert
		@desc
				Takes a numerical string and converts it to number type.
*/
function toNumber(str) {
		return +str;
}

/* --------------------------------------------------------------------------------- */
// DEV
/**
		@memberOf MathUtils
		@method restrict
		@desc
				Restricts a value to with a range.
*/
function restrict(num, min, max) {
		return Math.max(min, Math.min(max, num));
}

/**
		@memberOf MathUtils
		@method getAnglePoint
		@returns {array}
				containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
				and angle (in *radians*) which the new point should be from the starting coordinate
		@desc
				Assumes original coordinate rotation is 0 radians
*/
function getAnglePoint(x, y, distance, angle) {
		var x = x + Math.cos(angle) * distance;
		var y = y + Math.sin(angle) * distance;

		return [x, y];
}

/**
		@memberOf MathUtils
		@method getAngle
		@retuns {number}
				The angle (in *radians*) between two points given x1, y1, x2, y2
*/
function getAngle(x1, y1, x2, y2) {
		x2 = x2 || 0;
		y2 = y2 || 0;
		return Math.atan2(y2 - y1, x2 - x1);
}

/**
		@memberOf MathUtils
		@method getDistance
		@returns {number}
				The distance between two points given x1, y1, x2, y2
*/
function getDistance(x1, y1, x2, y2) {
		x2 = x2 || 0;
		y2 = y2 || 0;
		return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MonetUtils.js":
/*!*************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MonetUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setData = setData;
exports.getDataByKey = getDataByKey;
/**
	@npmpackage
	@class MonetUtils
	@desc
		Monet utilities.
		<br>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { MonetUtils } from 'ad-utils'
		</codeblock>
		<br><br>
*/

var _data = void 0;

// prettier-ignore
var _monetTypes = {
	'text': 'text',
	'number': 'value',
	'image': 'url',
	'video': 'url',
	'url': 'url',
	'bool': 'value'
};

function setData(integrator) {
	var promise = integrator.getMonetData();
	promise.then(function (data) {
		_data = data;
	});
	return promise;
}

function getDataByKey(key) {
	var output;
	var outputType;
	for (var type in _monetTypes) {
		if (_data.rootAssets[type + '.' + key]) {
			outputType = type;
			output = _data.rootAssets[type + '.' + key];
			break;
		}
	}
	return output[_monetTypes[outputType]];
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MotionUtils.js":
/*!**************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/MotionUtils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
	@npmpackage
	@class MotionUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { MotionUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		This object is for accessing the mobile/tablet's accelerometer for tilt shifting values
*/
var MotionUtils = function () {
	var ax = 0,
	    ay = 0;

	var _zeroX = 0,
	    _zeroY = 0,
	    _isInit = true,
	    _negX,
	    _posX,
	    _negY,
	    _posY,
	    _multi = 1,
	    _callback;

	/* ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf MotionUtils
 	@method setSpeedLimits
 	@param {number} negX
 		minimum value returned when tilting left ( will be a negative number )
 	@param {number} posX
 		maximum value returned when tilting right ( will be a positive number )
 	@param {number} negY
 		minimum value returned when tilting backward ( will be a negative number )
 	@param {number} posY
 		maximum value returned when tilting forward ( will be a positive number )
 	@desc
 		Set the minimum and maximum values that can be returned
 */
	function setSpeedLimits(negX, posX, negY, posY) {
		_negX = negX;
		_posX = posX;
		_negY = negY;
		_posY = posY;
	}

	/**
 	@memberOf MotionUtils
 	@method setSpeedMultiplier
 	@param {number} multi
 		a number to multiply the returned value by. Defaults to 1.
 	@desc
 		Set a percentage multiplier to amplify or minimize the returned value.
 */
	function setSpeedMultiplier(multi) {
		_multi = multi <= 0 ? 1 : multi;
	}

	/**
 	@memberOf MotionUtils
 	@method activate
 	@param {function} callback
 		a passed in method that will be called every time a device movement is detected.
 	@desc
 		Starts the listening for a move of the device
 */
	function activate(callback) {
		_callback = callback;
		window.addEventListener('deviceorientation', onOrientation, false);
	}

	/**
 	@memberOf MotionUtils
 	@method deactivate
 	@desc
 		Stops the listening for a move of the device.
  */
	function deactivate() {
		window.removeEventListener('deviceorientation', onOrientation, false);
	}

	/**
 	@memberOf MotionUtils
 	@method callibrate
 	@desc
 		Sets the relative zero position to the current orientation of the device.
  */
	function callibrate() {
		_isInit = true;
	}

	/* ----------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function onOrientation(e) {
		switch (window.orientation) {
			case -90:
				// Landscape, right-side down
				ay = e.gamma;
				ax = -e.beta;
				break;
			case 90:
				// Landscape, left-side down
				ay = -e.gamma;
				ax = e.beta;
				break;
			case 180:
				// Upside-down portrait
				ay = -e.beta;
				ax = -e.gamma;
				break;
			default:
				// Portrait
				ay = e.beta;
				ax = e.gamma;
		}

		if (_isInit) {
			_zeroX = ax;
			_zeroY = ay;
			_isInit = false;
		}

		ax -= _zeroX;
		ay -= _zeroY;

		ax *= _multi;
		ay *= _multi;

		if (_negX && ax < _negX) ax = _negX;
		if (_posX && ax > _posX) ax = _posX;
		if (_negY && ay < _negY) ay = _negY;
		if (_posY && ay > _posY) ay = _posY;

		_callback(ax, ay);
	}

	/* ----------------------------------------------------------------------------------------------- */
	// PUBLIC ACCESS
	return {
		ax: ax,
		ay: ay,
		callibrate: callibrate,
		setSpeedLimits: setSpeedLimits,
		setSpeedMultiplier: setSpeedMultiplier,
		activate: activate,
		deactivate: deactivate
	};
}();

exports.default = MotionUtils;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ObjectUtils.js":
/*!**************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/ObjectUtils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.clone = clone;
/**
	@npmpackage
	@class ObjectUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { ObjectUtils } from 'ad-utils'
		</codeblock>
		<br><br>
		
		Utilities for affecting objects.
*/

/**
	@memberOf ObjectUtils
	@name objectifier
	@property {function} objectifier.get
		{@link ObjectUtils.get}
	@property {function} objectifier.set
		{@link ObjectUtils.set}
	@desc
		This object is parent to a number of utility funcitons
*/
var objectifier = {};

/**
	@memberOf ObjectUtils
	@method get
	@param {string} str
		a data string representing the key of desire property splited by dot. 
		Array index is represented by number. For example, 'myObj.property1.0' means 
		I'm pointing to the [0] element in my propperty1 array inside of myObj. 
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Gets a property with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!

	@example
		//
		let myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2',
				func: function() {
					alert( '!!' );
				}
			}
		};

		let val = ObjectUtils.objectifier.get( 'prop1.0', myObj );
		// your val should be 'a'

		val = ObjectUtils.objectifier.get( 'prop2.string', myObj );
		// your val should be 'I am prop2'
*/
objectifier.get = function (str) {
	var ctxObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

	var splits = objectifier._getSplits(str).splits;
	return objectifier._getProperty(splits, ctxObj);
};

/**
	@memberOf ObjectUtils
	@method set
	@param {string} str
		a data string representing the key of desire property splited by dot.
		Array index is represented by number. For example, 'myObj.property1.0' means
		I'm pointing to the [0] element in my propperty1 array inside of myObj.
	@param {any} val
		the value to set for th property
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Sets a property value with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!
		
	@example
		//
		let myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2'
			}
		};

		ObjectUtils.objectifier.set( 'prop1.0', 123, myObj );
		// myObj.prop1[0] is now 123

		ObjectUtils.objectifier.set( 'prop2.string', 'hello', myObj );
		// myObj.prop2.string is now 'hello'
*/
objectifier.set = function (str, val) {
	var ctxObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

	var splitData = objectifier._getSplits(str, true);
	var result = objectifier._getProperty(splitData.splits, ctxObj);
	result[splitData.lastKey] = val;
};

// objectifier._getSplits and objectifier._getProperty  are used internally for objectifier.get and objectifier.set
objectifier._getSplits = function (str, popLast) {
	var splits = str.split('.');
	var lastKey = popLast ? splits.pop() : null;

	return {
		splits: splits,
		lastKey: lastKey
	};
};

objectifier._getProperty = function (splits) {
	var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var result = obj;
	var s = void 0;
	for (var i = 0; result && (s = splits[i]); i++) {
		result = s in result ? result[s] : undefined;
	}
	return result;
};

/**
	@memberOf ObjectUtils
	@method clone
	@param {object} obj
		object to clone
	@returns {object}
		cloned object
	@desc
		Get a clone of an object without reference.
	@example
		//
		let oldObj = {
			a: 1,
			b: 2
		};

		let newObj = ObjectUtils.clone( oldObj );
		
		newObj.a = 'xyz';

		// oldObj.a is still 1
*/
function clone(obj) {
	if (Object.prototype.toString.call(obj) !== '[object Object]') {
		return obj;
	}

	var result = obj.constructor();
	for (var key in obj) {
		result[key] = clone(obj[key]);
	}

	return result;
}

/**
	@memberOf ObjectUtils
	@method defaults
	@param {object} obj
		an object contains custom properties to overide default properties
	@param {object} defaultObj
		an object contains properties to default to
	@param {boolean} recursive
		flag for if the property check should be executed recursively
		otherwise it will just be one level
	@desc
		Get an object using an object as a default, when a property doesn't in the object,
		it takes it from the default object if it exists. It also checks nested objects. 
		It is useful for setting up an object to store default values. 
	@example
		// our default object as a base set up
		let defaultObj = {
		    name: 'Person',
		    weight: 0,
		    age: 0,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Los Angeles'
		    }
		};
		
		// the custom object
		let customObj = {
		    name: 'Bob',
		    weight: 140,
		    age: 30,
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		};

		let result = ObjectUtils.defaults( customObj, defaultObj, true );
		
		// your result object should look like
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}

		//if not recursive
		let result = ObjectUtils.defaults( customObj, defaultObj, false );

		// your result object should look like ( notice that it takes the whole locationDetail object )
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}
*/
function defaults() {
	var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var defaultObj = arguments[1];
	var recursive = arguments[2];

	var result = clone(obj);

	for (var key in defaultObj) {
		var item = defaultObj[key];

		if (result[key] === undefined) {
			result[key] = defaultObj[key];
		} else if (recursive) {
			if (Object.prototype.toString.call(item) === '[object Object]') {
				result[key] = defaults(result[key], item, recursive);
			}
		}
	}

	return result;
}

exports.defaults = defaults;
exports.objectifier = objectifier;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/TextUtils.js":
/*!************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-utils/lib/TextUtils.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.addSpaces = addSpaces;
exports.getSpecialCharacter = getSpecialCharacter;
exports.trimStartAndEnd = trimStartAndEnd;
exports.removeSpaces = removeSpaces;
exports.pad = pad;
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	TextUtils

	Description:
		This object contains methods necessary for manipulating text.
		<br>
		Import from <a href="https://github.com/ff0000-ad-tech/ad-utils">ad-utils</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { TextUtils } from 'ad-utils'
		</codeblock>
		<br><br>
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* Method: addSpaces()
		Returns the specified number of '&nbsp;' strings.
		
	numberOfSpaces 			-	number of space entities to return */
function addSpaces(numberOfSpaces) {
	var spacingString = '';
	for (var i = 0; i < numberOfSpaces; i++) {
		spacingString += '&nbsp;';
	}
	return spacingString;
}

/* Method: getSpecialCharacter()
		Returns entity equivilent for specified character.
		
	requestedCharacter 		-	character must match the 'label' key 
	isCapital 				-	flag to return the entity as capital */
function getSpecialCharacter(requestedCharacter, isCapital) {
	requestedCharacter = global.proxyStringToLowerCase.apply(requestedCharacter);
	for (var i = 0; i < specialCharacters.length; i++) {
		var currentLabel = global.proxyStringToLowerCase.apply(specialCharacters[i].label);

		if (currentLabel === requestedCharacter) return isCapital ? specialCharacters[i].upperCase : specialCharacters[i].lowerCase;
	}
	return false;
}

var specialCharacters = [{
	label: 'iexcl',
	upperCase: '&#161;',
	lowerCase: '&#161;'
}, {
	label: 'trademark',
	upperCase: '&#153;',
	lowerCase: '&#153;'
}, {
	label: 'copyright',
	upperCase: '&#169;',
	lowerCase: '&#169;'
}, {
	label: 'registered',
	upperCase: '&#174;',
	lowerCase: '&#174;'
}, {
	label: 'nTilde',
	upperCase: '&#209;',
	lowerCase: '&#241;'
}, {
	label: 'aAccent',
	upperCase: '&#193;',
	lowerCase: '&#225;'
}, {
	label: 'eAccent',
	upperCase: '&#201;',
	lowerCase: '&#233;'
}, {
	label: 'iAccent',
	upperCase: '&#205;',
	lowerCase: '&#237;'
}, {
	label: 'oAccent',
	upperCase: '&#211;',
	lowerCase: '&#243;'
}, {
	label: 'uAccent',
	upperCase: '&#218;',
	lowerCase: '&#250;'
}];

/* Method: trimStartAndEnd()
		Removes white space from the start and end of a string.
		
	target -	string to affect */
function trimStartAndEnd(target) {
	return target ? target.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : '';
}

/* Method: removeSpaces()
		Removes all white space from the string.
		
	str 					-	string from which to remove spaces */
function removeSpaces(str) {
	return str.split(' ').join('');
}

/*	Method: pad()

	Pads a number with zeros up to the specified number of places.

	_target				- number to be padded
	_count				- expected result length of the numerical string */
function pad(_target, _count) {
	var _sign = '';
	if (_target < 0) _sign = '-';
	_target = _target.toString().replace(/\-/, '', _target);
	while (_target.length < _count) {
		_target = '0' + _target;
	}return _sign + _target;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js":
/*!***************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Styles = exports.Markup = exports.Align = exports.Clamp = exports.Effects = exports.Ratio = exports.FullScreen = undefined;

var _FullScreen = __webpack_require__(/*! ./lib/FullScreen */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/FullScreen.js");

Object.defineProperty(exports, 'FullScreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FullScreen).default;
  }
});

var _Ratio = __webpack_require__(/*! ./lib/Ratio */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Ratio.js");

var Ratio = _interopRequireWildcard(_Ratio);

var _Effects = __webpack_require__(/*! ./lib/Effects */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Effects.js");

var Effects = _interopRequireWildcard(_Effects);

var _Clamp = __webpack_require__(/*! ./lib/Clamp */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Clamp.js");

var Clamp = _interopRequireWildcard(_Clamp);

var _Align = __webpack_require__(/*! ./lib/Align */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Align.js");

var Align = _interopRequireWildcard(_Align);

var _Styles = __webpack_require__(/*! ./lib/Styles */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js");

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(/*! ./lib/Markup */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js");

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// named exports


exports.Ratio = Ratio;
exports.Effects = Effects;
exports.Clamp = Clamp;
exports.Align = Align;
exports.Markup = Markup;
exports.Styles = Styles;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Align.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Align.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TOP_RIGHT = exports.TOP_LEFT = exports.BOTTOM_RIGHT = exports.BOTTOM_LEFT = exports.TOP = exports.RIGHT = exports.LEFT = exports.CENTER = exports.BOTTOM = undefined;
exports.get = get;
exports.set = set;
exports.calculate = calculate;

var _Markup = __webpack_require__(/*! ./Markup */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js");

var Markup = _interopRequireWildcard(_Markup);

var _Styles = __webpack_require__(/*! ./Styles */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js");

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@npmpackage
	@class Align
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Align } from 'ad-view'
		</codeblock>
		<br><br>

		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set(myDiv, Align.LEFT)   // only align left
			Align.set(myDiv, Align.BOTTOM) // only align bottom
			Align.set(myDiv, Align.CENTER) // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set(myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			})
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set(myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv,
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			})
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set(myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>

		<b>Sample 5</b>
		<br>
		An Array of items can be passed in to the `source` argument. All items will be individually aligned following the rules passed into the `arg` argument
		<br><br>
		<codeblock>
			// aligns all items to the center
			Align.set([myDiv0, myDiv1, myDiv2], Align.CENTER) 

			// aligns all items to the horizontal center and bottom
			Align.set([myDiv0, myDiv1, myDiv2], {
				x: Align.CENTER,
				y: Align.BOTTOM
			}) 
		</codeblock>
		<br><br>

		<b>Sample 6</b>
		<br>
		The optional keys: <b>'against'</b>, <b>'offset'</b>, and <b>'outer'</b> can be set at the top level to apply to <i>BOTH</i> dirctions as applicable.
		However, if a key is set within <b>'x'</b> or <b>'y'</b>, that will take priority
		<br><br>
		<codeblock>
			// aligns all items to the center of myRefDiv
			Align.set([myDiv0, myDiv1, myDiv2], {
				type: Align.CENTER,
				against: myRefDiv
			}) 

			// Note the against set on the top level then in y:
			// This is NOT good syntax but does technically works...
			Align.set([myDiv0, myDiv1, myDiv2], {
				against: myRefDiv,
				offset: 10
				x: Align.CENTER,
				y: {
					type: Align.BOTTOM,
					against: myOtherDiv
				}
			}) 
			// ...in this case use:
			Align.set([myDiv0, myDiv1, myDiv2], {		
				offset: 10
				x: {
					type: Align.CENTER,
					against: myRefDiv
				},
				y: {
					type: Align.BOTTOM,
					against: myOtherDiv
				}
			}) 
		</codeblock>
		<br><br>
*/
var _rect = [{
	x: 'offsetWidth',
	y: 'offsetHeight',
	parent: 'parentNode'
}, {
	x: 'width',
	y: 'height',
	parent: 'stage'
}];

/**
		@memberof Align
		@const {string} BOTTOM
			Synonymous with "alignBottom" 
	*/
var BOTTOM = exports.BOTTOM = 'alignBottom';

/**
	@memberof Align
	@const {string} CENTER
		Synonymous with "alignCenter" 
*/
var CENTER = exports.CENTER = 'alignCenter';

/**
	@memberof Align
	@const {string} LEFT
		Synonymous with "alignLeft" 
*/
var LEFT = exports.LEFT = 'alignLeft';

/**
	@memberof Align
	@const {string} RIGHT
		Synonymous with "alignRight" 
*/
var RIGHT = exports.RIGHT = 'alignRight';

/**
	@memberof Align
	@const {string} TOP
		Synonymous with "alignTop" 
*/
var TOP = exports.TOP = 'alignTop';

/**
	@memberof Align
	@const {string} BOTTOM_LEFT
		Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
*/
var BOTTOM_LEFT = exports.BOTTOM_LEFT = 'alignBottomLeft';

/**
	@memberof Align
	@const {string} BOTTOM_RIGHT
		Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
*/
var BOTTOM_RIGHT = exports.BOTTOM_RIGHT = 'alignBottomRight';

/**
	@memberof Align
	@const {string} TOP_LEFT
		Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
*/
var TOP_LEFT = exports.TOP_LEFT = 'alignTopLeft';

/**
	@memberof Align
	@const {string} TOP_RIGHT
		Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
*/
var TOP_RIGHT = exports.TOP_RIGHT = 'alignTopRight';

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
		@memberof Align
		@method get
		@desc
			Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
			according to provided mode. The constants allow for picking which coordinate to apply.  
	*/
function get(source, arg) {
	var elem = source.canvas || Markup.get(source);
	var obj = {};
	var snap = arg.snap !== false;
	var sourceRect = isDomElement(source) ? 0 : 1;

	if (typeof arg == 'string') {
		arg = calculate(arg);
	}
	// check for top level against
	var topAgainst = arg.against;
	if (arg.type) {
		var typeToObj = calculate(arg.type);
		for (var key in typeToObj) {
			if (!arg.hasOwnProperty(key)) {
				arg[key] = typeToObj[key];
			}
		}
	}

	for (var xy in arg) {
		if (xy == 'x' || xy == 'y') {
			var params = arg[xy];

			// the x or y is null or undefined, so skip this pass of the loop
			if (!params) continue;

			if (typeof params == 'string') {
				params = {
					type: params
				};
			}

			var against = void 0;
			var againstDimension = void 0;
			var againstX = 0;
			var againstNumber = false;
			var offset = params.offset || arg.offset || 0;

			// check the outer vs top
			params.outer = params.outer || arg.outer;

			if (params.against !== undefined || topAgainst !== undefined) {
				// console.log('\t params.against:', params.against, topAgainst)
				if (params.against == 0) {
					against = 0;
				} else {
					against = params.against || topAgainst;
				}
				var againstRect = 0;
				// console.log('\t against:', against)

				if (isDomElement(against)) {
					if (against.canvas) againstRect = 1;else againstX = Styles.getCss(against, xy);
				} else if (typeof against === 'number') {
					againstNumber = true;
					againstX = against;
				} else {
					againstX = against[xy];
					againstRect = 1;
				}

				againstDimension = _rect[againstRect][xy];

				if (params.type === CENTER) params.outer = false;
			} else {
				against = elem[_rect[sourceRect].parent];
				againstDimension = _rect[sourceRect][xy];
			}

			var widthOrHeight = elem[_rect[sourceRect][xy]];

			switch (source._type) {
				case 'arc':
				case 'path':
					if (params.type == CENTER) {
						widthOrHeight = 0;
					} else {
						offset += widthOrHeight / 2;
					}
					break;
				case 'text':
					if (xy === 'x') {
						switch (source.alignText) {
							case 'center':
								widthOrHeight = 0;
							case 'right':
								widthOrHeight *= -1;
						}
					}
					break;
			}

			var pos = calculate(params.type, widthOrHeight, againstNumber ? 0 : against[againstDimension], !againstNumber && !!params.outer);

			if (pos != null) {
				pos += againstX + offset;
				obj[xy] = snap ? Math.round(pos) : pos;
			}
		}
	}

	return obj;
}

/**
		@memberof Align
		@method set
		@desc
			Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
			allow for picking which coordinate to apply. Will additionally return the get() value. NOTE: If setting an array, there will NOT be a return
	*/
function set(source, arg) {
	var _sources = Array.isArray(source) ? source : [source];
	var first = void 0;
	for (var _iterator = _sources, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var item = _ref;

		var obj = get(item, arg);
		if (isDomElement(item)) {
			var elem = item.canvas || Markup.get(item);
			Styles.setCss(elem, obj);
		} else {
			for (var prop in obj) {
				item[prop] = obj[prop];
			}
		}
		if (first == undefined) {
			first = obj;
		}
	}

	if (_sources.length == 1) return first;
}

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS

// used internally by Flipbook
function calculate(mode, source, target, outer) {
	//console.log( 'calculate()', mode, source, target, outer )
	// when only passing a string, this will create {x/y} from string
	var isConvert = arguments.length == 1;
	switch (mode) {
		case 'alignBottom':
			if (outer) source = 0;
			if (!isConvert) return target - source;

		case 'alignTop':
			return isConvert ? { y: mode } : outer ? -source : 0;

		case 'alignRight':
			if (outer) target += source;
			if (!isConvert) return target - source;

		case 'alignLeft':
			return isConvert ? { x: mode } : outer ? -source : 0;

		case 'alignCenter':
			if (outer) target = 0;
			return isConvert ? { x: mode, y: mode } : (target - source) / 2;

		default:
			return null;
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PRIVATE METHODS
function isDomElement(elem) {
	// console.warn(':: Align :: isDomElement() :: elem =', elem)
	return elem && (elem instanceof HTMLElement || elem.canvas != undefined);
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Clamp.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Clamp.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.XY = exports.Y = exports.X = undefined;
exports.set = set;

var _Styles = __webpack_require__(/*! ./Styles */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js");

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(/*! ./Markup */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js");

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@npmpackage
	@class Clamp
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Clamp } from 'ad-view'
		</codeblock>
		<br><br>

		Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
		<br><br>
		
		This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp 
		both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

	@example
		// clamp both directions
		Clamp.set( View.main.myDiv, Clamp.XY );
		
		// clamp both directions while adding some buffer padding on each side
		Clamp.set( View.main.myDiv, Clamp.XY, {
			top : 5,
			left : 10,
			bottom : 5,
			right : 10
		});

		// clamp only horizontally and add a buffer padding on the left
		Clamp.set( View.main.myDiv, Clamp.X, {
			left : 10
		});
*/
var _rect = {
	x: ['offsetWidth', 'width', 'left', 'right'],
	y: ['offsetHeight', 'height', 'top', 'bottom']

	/**
 		@memberof Clamp
 		@const {string} X
 			Synonymous with "clampX" - clamp on the horizontal direction only 
 	*/
};var X = exports.X = 'clampX';

/**
	@memberof Clamp
	@const {string} Y
		Synonymous with "clampY" - clamp on the vertical direction only 
*/
var Y = exports.Y = 'clampY';

/**
	@memberof Clamp
	@const {string} XY
		Synonymous with "clampXY" - clamp on all sides 
*/
var XY = exports.XY = 'clampXY';

/* ------------------------------------------------------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
			@memberof Clamp
			@method set
			@param {element} source
				The DOM element to resize and move.
			@param {string} type
				A String/Constant representing what directions to clamp on.
			@param {object} buffer
				(optional) An Object that has the values to add buffer padding to each side. See properties for more info:
		
				@property {number} buffer.left
					Amount of left padding
				@property {number} buffer.right
					Amount of right padding
				@property {number} buffer.top
					Amount of top padding
				@property {number} buffer.bottom
					Amount of bottom padding
			@desc
				Resizes and moves the source element horizontally and/or vertically, relative to all its children. 
		*/
function set(source, type, buffer, move) {
	var elem = Markup.get(source);
	move = move !== false;

	var children = elem.childNodes;
	var childCoordinates = [];

	var direction = {};
	if (/(x)/gi.exec(type)) direction.x = {};
	if (/(y)/gi.exec(type)) direction.y = {};

	for (var i = 0; i < children.length; i++) {
		var child = children[i];

		childCoordinates[i] = {};

		for (var xy in direction) {
			var xyValue = Styles.getCss(child, xy);
			var whValue = child[_rect[xy][0]];

			var add = xyValue + whValue;

			var xyDirection = direction[xy];

			if (i == 0) {
				xyDirection.min = xyValue;
				xyDirection.max = add;
			}

			if (xyValue < xyDirection.min) xyDirection.min = xyValue;

			if (xyDirection.max < add) xyDirection.max = add;

			childCoordinates[i][xy] = xyValue;
		}
	}

	// process the optional buffer
	var _buffer = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	};

	if (buffer) {
		for (var prop in _buffer) {
			_buffer[prop] = isNaN(buffer) ? buffer[prop] || 0 : buffer;
		}
	}

	// resize and move the container
	var css = {};
	for (var xy in direction) {
		var d = direction[xy];

		if (move) css[xy] = d.min + Styles.getCss(elem, xy) - _buffer[_rect[xy][2]];

		css[_rect[xy][1]] = d.max - d.min + _buffer[_rect[xy][2]] + _buffer[_rect[xy][3]];
	}

	Styles.setCss(elem, css);

	// move all the children
	for (i = 0; i < children.length; i++) {
		var child = children[i];
		var css = {};

		for (var xy in direction) {
			css[xy] = childCoordinates[i][xy] - direction[xy].min + _buffer[_rect[xy][2]];
		}

		Styles.setCss(child, css);
	}
}

/* ------------------------------------------------------------------------------------------------------------------------------- */

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Effects.js":
/*!*********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Effects.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.blur = blur;
exports.dropShadow = dropShadow;
exports.textDropShadow = textDropShadow;
exports.glow = glow;
exports.linearGradient = linearGradient;
exports.radialGradient = radialGradient;

var _adUtils = __webpack_require__(/*! ad-utils */ "./1-build/node_modules/@ff0000-ad-tech/ad-utils/index.js");

var _Styles = __webpack_require__(/*! ./Styles */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js");

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* --------------------------------------------------------------------------------- */
// PUBLIC METHODS

/**
	@memberof Effects
	@method blur
	@param {object} obj
		object containing blur arguments, see Properties for more info:

		@property {element} obj.target
			dom element
		@property {number} obj.amount
			the level of blurriness
	@desc
		Blurs a dom element.
	
	
	@example
		//
		Effects.blur({
			target: _myDiv,
			amount: 10
		});
*/
/**
	@npmpackage
	@class Effects
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Effects } from 'ad-view'
		</codeblock>
		<br><br>

		Utilities for adding effects to elements
*/
function blur(obj) {
	if (obj.amount >= 0) Styles.setCss(obj.target, {
		filter: 'blur(' + obj.amount + 'px)'
	});
}

/**
	@memberof Effects
	@method dropShadow
	@param {object} obj
		object containing drop shadow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.angle
			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
		@property {number} obj.distance
			optional NUMBER for how far away the shadow will offset. Defaults to 0.
		@property {number} obj.size
			optional NUMBER for shadow radius. Defaults to 0.
		@property {number} obj.spread
			optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0.
		@property {string|object} obj.color
			optional color of shadow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
		@property {boolean} obj.inner
			optional BOOLEAN to set the shadow as inset. Defaults to false.

	@desc
		Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.dropShadow({
			target:_myDiv,
			angle: 135,
			distance: 50,
			size: 20, 
			spread: 10,
			color: 'rgb(90, 0, 0)',
			alpha: 0.1,
			inner: true
		});
*/
function dropShadow(obj) {
	Styles.setCss(obj.target, {
		boxShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner)
	});
}

/**
	@memberof Effects
	@method textDropShadow
	@param {object} obj
		object containing drop shadow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.angle
			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
		@property {number} obj.distance
			optional NUMBER for how far away the shadow will offset. Defaults to 0.
		@property {number} obj.size
			optional NUMBER for shadow radius. Defaults to 0.
		@property {string|object} obj.color
			optional color of shadow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.

	@desc
		Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.textDropShadow({
			target:_myText, 
			angle: 45, 
			distance: 15, 
			size: 1, 
			color: '#ff0000', 
			alpha: 0.5
		});
*/
function textDropShadow(obj) {
	Styles.setCss(obj.target, {
		textShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha)
	});
}

/**
	@memberof Effects
	@method glow
	@param {object} obj
		object containing glow arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {number} obj.size
			optional NUMBER for glow radius. Defaults to 0.
		@property {number} obj.spread
			optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0.
		@property {string|object} obj.color
			optional color of glow as a HEX STRING :"#ff0000", 
			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
		@property {number} obj.alpha
			optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1.
		@property {boolean} obj.inner
			optional BOOLEAN to set the glow as inset. Defaults to false.

	@desc
		Adds a glow to a dom element. Follows the same use specs as Photoshop.
		
	@example
		//
		Effects.glow({
			target: _myDiv,
			size: 20, 
			spread: 0,
			color: 'rgb(90, 0, 0)',
			alpha: 0.5,
			inner: true
		});
*/
function glow(obj) {
	obj.angle = 0;
	obj.distance = 0;
	dropShadow(obj);
}

/**
	@memberof Effects
	@method linearGradient
	@param {object} obj
		object containing gradient arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {array} obj.colors
			ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".
		@property {number} obj.angle
			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
	@desc
		Changes the background of a given dom element to be a linear gradient.
		<br><br>

		<b>Example</b><br>
		Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
		<codeblock>
			Effects.linearGradient({
				target: _myDiv, 
				colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
				angle: 90
			});
		</codeblock>
*/
function linearGradient(obj) {
	Styles.setCss(obj.target, {
		background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')'
	});
}

/**
	@memberof Effects
	@method radialGradient
	@param {object} obj
		object containing gradient arguments, see Properties for more info:
		@property {element} obj.target
			dom element
		@property {array} obj.colors
			ARRAY of colors as either a HEX STRING :"#ff0000" 
			or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". 
			<br><br>

			To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"].
		@property {number} obj.angle
			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
	@desc
		Changes the background of a given dom element to be a radial gradient.
		<br><br>

		<b>Example</b><br>
		Adding a gradient from red to blue, with a very large choke on the blue.
		<codeblock>
			Effects.radialGradient({
				target: _myDiv, 
				colors: ['#ff0000', '#0000ff 10%']
			});
		</codeblock>
*/
function radialGradient(obj) {
	Styles.setCss(obj.target, {
		background: 'radial-gradient(' + obj.colors.toString() + ')'
	});
}

/* --------------------------------------------------------------------------------- */
// PRIVATE METHODS
function createShadow(angle, distance, size, spread, color, alpha, inner) {
	var val = '';
	var deg = angle * -1 + 180;
	var rad = _adUtils.MathUtils.toRadians(deg);
	val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
	val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
	val += size + 'px';

	if (spread) val += ' ' + spread + 'px';

	val += ' ' + _adUtils.ColorUtils.toRgbaString(color, alpha);

	inner = !!inner;
	if (inner) val += ' inset';

	return val;
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/FullScreen.js":
/*!************************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/FullScreen.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var FullScreen = new function () {
	var F = this;

	F.isFullScreen = function () {
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	};

	F.enter = function (elem) {
		if (F.isFullScreen()) return;

		if (elem.requestFullscreen) {
			console.log(' -> requestFullscreen');
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			console.log(' -> msRequestFullscreen');
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			console.log(' -> mozRequestFullScreen');
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			console.log(' -> webkitRequestFullscreen');
			elem.webkitRequestFullscreen();
		}
	};

	F.exit = function () {
		if (!F.isFullScreen()) return;

		if (document.exitFullscreen) {
			console.log(' -> exitFullscreen');
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			console.log(' -> msExitFullscreen');
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			console.log(' -> mozCancelFullScreen');
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			console.log(' -> webkitExitFullscreen');
			document.webkitExitFullscreen();
		}
	};
}();

exports.default = FullScreen;

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.get = get;
exports.getElement = getElement;
exports.removeChildren = removeChildren;
exports.addiFrame = addiFrame;
exports.addSvg = addSvg;
exports.applyToElements = applyToElements;
/**
	@npmpackage
	@class Markup
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Markup } from 'ad-view'
		</codeblock>
		<br><br>
		
		This object contains utilities relateed to dom elements.
*/

/**
	@memberof Markup
	@method get
	@param {string} selector
		A string selector. It defaults to find the string as an id, or if the string starts with '#'. 
		If starts with '.', it selects by class name. If wrapped with '<>', it selects by tag name.
	@param {element} parent
		Optional parent element to get the element(s) from. Defaults to document.
	@returns {element|HTMLCollection}
		One single element if the selector is an id. With class name or tag name, it returns an HTML collection ( similiar to an array ).
	@desc
		Used to select elements.

	@example
		// get element by its id called 'myId'
		Markup.get( 'myId' );
		
		// same as above
		Markup.get( '#myId' );
		
		// get element by CSS classname 'myClass'
		Markup.get( '.myClass' );
		
		// get elements by tag name 'head'
		Markup.get( '<head>' );
*/
function get(selector, parent) {
	if (typeof selector !== 'string') {
		return selector;
	}

	parent = parent || document;
	selector = selector.trim();

	switch (selector[0]) {
		case '#':
			// id
			return parent.getElementById(selector.slice(1));
			break;
		case '.':
			// class
			return parent.getElementsByClassName(selector.slice(1));
			break;
		case '<':
			// tag
			return parent.getElementsByTagName(selector.slice(1, selector.length - 1));
			break;
		default:
			// default to id for backworad support
			return parent.getElementById(selector);
	}
}
// the deprecated syntax 12/28/16
function getElement(selector, parent) {
	return get(selector, parent);
}

/**
	@memberof Markup
	@method removeChildren
	@param {element} _target
		element to be targeted
	@desc
		Removes all the children elements of an element
*/
function removeChildren(_target) {
	var element = get(_target);
	console.log('removeChildren (' + _target + ')');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

/* 
	To be deprecated after moving addiFrame and addSvg to UIComponent 
*/
// export function applyContainerCss (_element, _containerData) {
// 	if (!_containerData.css) _containerData.css = {};
// 	if (!_containerData.css.position)
// 		_containerData.css.position = 'absolute';
// 	Styles.setCss(_element, _containerData.css);
// 	Styles.setCss(_element, _containerData.styles);
// }

/**	Method: addIframe()
 Deprecated. Add an iframe to the containerData.target, pointing at containerData.source.  */
function addiFrame(_containerData) {
	var element = document.createElement('iFrame');
	element.id = _containerData.id;
	element.width = _containerData.css.width;
	element.height = _containerData.css.height;

	delete _containerData.css.width;
	delete _containerData.css.height;

	// iframe properties
	element.setAttribute('src', _containerData.source);
	element.setAttribute('frameborder', '0');
	element.setAttribute('scrolling', 'no');
	element.setAttribute('allowfullscreen', '');

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**	Method: addSvg()
	Deprecated.

	_containerData			- object with the necessary keys for creating an element. */
function addSvg(_containerData) {
	var nameSpace = 'http://www.w3.org/2000/svg';
	var element = document.createElementNS(nameSpace, 'svg');
	element.setAttribute('height', _containerData.height);
	element.setAttribute('width', _containerData.width);

	var path = document.createElementNS(nameSpace, 'path');
	path.setAttribute('d', _containerData.d);
	path.setAttribute('fill', _containerData.fill);

	if (_containerData.stroke != undefined) {
		path.setAttribute('stroke', _containerData.stroke);
	}
	if (_containerData.strokeWidth != undefined) {
		path.setAttribute('stroke-width', _containerData.strokeWidth);
	}
	element.appendChild(path);

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**
	@memberof Markup
	@method applyToElements
	@param {object} arg
		See properties for more info:
		@property {object} arg.scope
			the scope of this
		@property {function} arg.method
			the function to use
		@property {element|array} arg.element
			the element(s) to apply the method to, can be a single element or an array
		@property {string|number|array|object} arg.methodArg
			the argument to pass to the method function
	@desc
		Apply a method to multiple elements. Currently assuming the method accepts element as the first argument,
		and a second argument as the setting. 

	@example
		var myElements = Markup.get( '.centered-blocks' );
		Markup.applyToElements({
			scope: Align,
			method: Align.set,
			elements: myElements,
			methodArg: { x: Align.CENTER }
		});
*/
function applyToElements(arg) {
	if (arg.elements.length === undefined) {
		// assume it is a single element
		arg.method.call(arg.scope, arg.elements, arg.methodArg);
	} else {
		// assume it is an array/HTML collection
		var i;
		for (i = 0; i < arg.elements.length; i++) {
			var el = arg.elements[i];
			arg.method.call(arg.scope, el, arg.methodArg);
		}
	}
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Ratio.js":
/*!*******************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Ratio.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.resize = resize;
/**
	@npmpackage
	@class Ratio
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Ratio } from 'ad-view'
		</codeblock>
		<br><br>
		
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/

/**
	@memberof Ratio
	@const {string} EXACT
		'auto' ~ Images display at the exact height and width of the source 
*/
var EXACT = exports.EXACT = 'auto';

/**
	@memberof Ratio
	@const {string} FILL
		'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
*/
var FILL = exports.FILL = 'cover';

/**
	@memberof Ratio
	@const {string} FIT
		'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
*/
var FIT = exports.FIT = 'contain';

/**
	@memberof Ratio
	@const {string} STRETCH
		'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
*/
var STRETCH = exports.STRETCH = '100% 100%';

function resize(mode, source, target, returnObj) {
	mode = mode || EXACT;
	returnObj || (returnObj = {
		width: 0,
		height: 0
	});
	if (mode == EXACT) {
		returnObj.width = source.width;
		returnObj.height = source.height;
	} else if (mode == STRETCH) {
		returnObj.width = target.width;
		returnObj.height = target.height;
	} else {
		var s = source.width / source.height;
		var t = target.width / target.height;
		var a = mode == FILL ? s : t;
		var b = mode == FILL ? t : s;
		if (a < b) {
			returnObj.height = source.height / (source.width / target.width);
			returnObj.width = target.width;
		} else {
			returnObj.width = source.width / (source.height / target.height);
			returnObj.height = target.height;
		}
	}
	return returnObj;
}

/***/ }),

/***/ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Styles.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setCss = setCss;
exports.getCss = getCss;
exports.injectStylesheet = injectStylesheet;
exports.addClass = addClass;
exports.removeClass = removeClass;

var _Markup = __webpack_require__(/*! ./Markup */ "./1-build/node_modules/@ff0000-ad-tech/ad-view/lib/Markup.js");

var Markup = _interopRequireWildcard(_Markup);

var _adControl = __webpack_require__(/*! ad-control */ "./1-build/node_modules/@ff0000-ad-tech/ad-control/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@npmpackage
	@class Styles
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-view">ad-view</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { Styles } from 'ad-view'
		</codeblock>
		<br><br>
		
		Utilities for CSS style related purposes. 
*/

/**
	@memberof Styles
	@method setCss
	@param {string|element} _target
		id or element to which the style(s) should be applied
	@param {string|object|array} args
		any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Sets specified styles on target object.
	@example
		// set multiple styles using a css-string
		Styles.setCss ( myDiv, 'top: 30px; left: 10px' );

		// set multiple styles using a css-object, same as the 'css' property on {@link UIComponent}s
		Styles.setCss ( myDiv, { top:30, left:10 });

		// set a single style, using individual( key, value )args
		Styles.setCss ( myDiv, 'top', 30 );
*/
function setCss(element, args) {
	element = Markup.get(element);
	var cssList = {};
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = _adControl.CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = _adControl.CssManager.conformCssString(arguments[1], element);
	} else {
		cssList = _adControl.CssManager.conformCssObject(arguments[1], element);
	}
	_adControl.CssManager.apply(element, cssList);
}

/**
	@memberof Styles
	@method getCss
	@param {string|element} _target
		id or element to which css style should be applied
	@param {string} key
		css key
	@desc
		Gets a specific style for a particular key.
*/
function getCss(element, key) {
	element = Markup.get(element);

	var cssValue;
	if (key == 'x' || key == 'y') {
		var existingTransform = element.style[_adControl.CssManager.getDeviceKey('transform')];
		var matrix = existingTransform.replace(/[\s\(\)matrix]/g, '').split(',');
		cssValue = matrix.length < 6 ? 0 : +matrix[key == 'x' ? 4 : 5];
	} else {
		var style = window.getComputedStyle(element, null);
		cssValue = style.getPropertyValue(key).replace(/px/, '');
		if (!isNaN(cssValue)) cssValue = parseInt(cssValue, 10);
	}

	return cssValue;
}

/**
	@memberof Styles
	@method injectStylesheet
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string|object|array} styles
		any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles. 

	@example
		// selector/CSS string pair
		Styles.injectStylesheet( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// selector/CSS string pair: add multiple class declarations to the same node
		Styles.injectStylesheet( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// selector/CSS string pair:  have mulitple classes share the same logic
		Styles.injectStylesheet( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// selector/CSS string pair: add style to a tag name globally
		Styles.injectStylesheet( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)

		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		Styles.injectStylesheet( 'myFifthStyle', myCssString );
*/
function injectStylesheet(nodeId, styles) {
	if (document.getElementById(nodeId)) {
		return;
	}

	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = nodeId;

	// if only two parameters, assuming styles is CSS string
	// else process as selector/style pair
	var str = arguments.length === 2 ? styles : '';

	if (arguments.length > 2) {
		for (var i = 0; i < arguments.length - 1; i += 2) {
			// strip out the white space after comma
			var names = arguments[i + 1].replace(/\,\s+/g, ',');

			str += names;
			str += ' { ' + (arguments[i + 2] || '') + ' }\n';
		}
	}
	style.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(style);
}

/**
	@memberof Styles
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/
function addClass(target, className) {
	var element = Markup.get(target);

	// IE does not support multiple classes being added as arguments, so must loop
	for (var i = 0; i < arguments.length - 1; i++) {
		element.classList.add(arguments[i + 1]);
	}
}

/**
	@memberof Styles
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/
function removeClass(target, className) {
	var element = Markup.get(target);
	element.classList.remove(className);
}

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/4494e59a-accb-4458-bc6b-455de349744f.js":
/*!***********************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/4494e59a-accb-4458-bc6b-455de349744f.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-brand-logo
if (false) {}
// prettier-ignore
module.exports = {
  "id": "4494e59a-accb-4458-bc6b-455de349744f",
  "name": "wc-netflix-brand-logo",
  "description": "New Netflix brand logo animation. Netflix --> N; N --> Netflix",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544728731554,
  "full_name": "NetflixAdsEng/wc-netflix-brand-logo",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-brand-logo",
  "username": "GitHub",
  "version": "4.1.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/MorphSVGPlugin.min.js":
/*!*****************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/MorphSVGPlugin.min.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * VERSION: 0.8.1
 * DATE: 2015-12-18
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope =  true && module.exports && "undefined" != typeof global ? global : undefined || window;(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var a = Math.PI / 180,
      b = 180 / Math.PI,
      c = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      d = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      e = /[achlmqstvz]/gi,
      f = _gsScope.TweenLite,
      g = function g(a) {
    window.console && console.log(a);
  },
      h = function h(b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j = Math.ceil(Math.abs(c) / 90),
        k = 0,
        l = [];for (b *= a, c *= a, d = c / j, e = 4 / 3 * Math.sin(d / 2) / (1 + Math.cos(d / 2)), i = 0; j > i; i++) {
      f = b + i * d, g = Math.cos(f), h = Math.sin(f), l[k++] = g - e * h, l[k++] = h + e * g, f += d, g = Math.cos(f), h = Math.sin(f), l[k++] = g + e * h, l[k++] = h - e * g, l[k++] = g, l[k++] = h;
    }return l;
  },
      i = function i(c, d, e, f, g, _i, j, k, l) {
    if (c !== k || d !== l) {
      e = Math.abs(e), f = Math.abs(f);var m = g % 360 * a,
          n = Math.cos(m),
          o = Math.sin(m),
          p = (c - k) / 2,
          q = (d - l) / 2,
          r = n * p + o * q,
          s = -o * p + n * q,
          t = e * e,
          u = f * f,
          v = r * r,
          w = s * s,
          x = v / t + w / u;x > 1 && (e = Math.sqrt(x) * e, f = Math.sqrt(x) * f, t = e * e, u = f * f);var y = _i === j ? -1 : 1,
          z = (t * u - t * w - u * v) / (t * w + u * v);0 > z && (z = 0);var A = y * Math.sqrt(z),
          B = A * (e * s / f),
          C = A * -(f * r / e),
          D = (c + k) / 2,
          E = (d + l) / 2,
          F = D + (n * B - o * C),
          G = E + (o * B + n * C),
          H = (r - B) / e,
          I = (s - C) / f,
          J = (-r - B) / e,
          K = (-s - C) / f,
          L = Math.sqrt(H * H + I * I),
          M = H;y = 0 > I ? -1 : 1;var N = y * Math.acos(M / L) * b;L = Math.sqrt((H * H + I * I) * (J * J + K * K)), M = H * J + I * K, y = 0 > H * K - I * J ? -1 : 1;var O = y * Math.acos(M / L) * b;!j && O > 0 ? O -= 360 : j && 0 > O && (O += 360), O %= 360, N %= 360;var P,
          Q,
          R,
          S = h(N, O),
          T = n * e,
          U = o * e,
          V = o * -f,
          W = n * f,
          X = S.length - 2;for (P = 0; X > P; P += 2) {
        Q = S[P], R = S[P + 1], S[P] = Q * T + R * V + F, S[P + 1] = Q * U + R * W + G;
      }return S[S.length - 2] = k, S[S.length - 1] = l, S;
    }
  },
      j = function j(a) {
    var b,
        d,
        e,
        f,
        h,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r = (a + "").match(c) || [],
        s = [],
        t = 0,
        u = 0,
        v = r.length,
        w = 2,
        x = 0;if (!a || !isNaN(r[0]) || isNaN(r[1])) return g("ERROR: malformed path data: " + a), s;for (b = 0; v > b; b++) {
      if (q = h, isNaN(r[b]) ? (h = r[b].toUpperCase(), j = h !== r[b]) : b--, e = +r[b + 1], f = +r[b + 2], j && (e += t, f += u), 0 === b && (l = e, m = f), "M" === h) k && k.length < 8 && (s.length -= 1, w = 0), t = l = e, u = m = f, k = [e, f], x += w, w = 2, s.push(k), b += 2, h = "L";else if ("C" === h) k || (k = [0, 0]), k[w++] = e, k[w++] = f, j || (t = u = 0), k[w++] = t + 1 * r[b + 3], k[w++] = u + 1 * r[b + 4], k[w++] = t += 1 * r[b + 5], k[w++] = u += 1 * r[b + 6], b += 6;else if ("S" === h) "C" === q || "S" === q ? (n = t - k[w - 4], o = u - k[w - 3], k[w++] = t + n, k[w++] = u + o) : (k[w++] = t, k[w++] = u), k[w++] = e, k[w++] = f, j || (t = u = 0), k[w++] = t += 1 * r[b + 3], k[w++] = u += 1 * r[b + 4], b += 4;else if ("Q" === h) n = e - t, o = f - u, k[w++] = t + 2 * n / 3, k[w++] = u + 2 * o / 3, j || (t = u = 0), t += 1 * r[b + 3], u += 1 * r[b + 4], n = e - t, o = f - u, k[w++] = t + 2 * n / 3, k[w++] = u + 2 * o / 3, k[w++] = t, k[w++] = u, b += 4;else if ("T" === h) n = t - k[w - 4], o = u - k[w - 3], k[w++] = t + n, k[w++] = u + o, n = t + 1.5 * n - e, o = u + 1.5 * o - f, k[w++] = e + 2 * n / 3, k[w++] = f + 2 * o / 3, k[w++] = t = e, k[w++] = u = f, b += 2;else if ("H" === h) f = u, k[w++] = t + (e - t) / 3, k[w++] = u + (f - u) / 3, k[w++] = t + 2 * (e - t) / 3, k[w++] = u + 2 * (f - u) / 3, k[w++] = t = e, k[w++] = f, b += 1;else if ("V" === h) f = e, e = t, j && (f += u - t), k[w++] = e, k[w++] = u + (f - u) / 3, k[w++] = e, k[w++] = u + 2 * (f - u) / 3, k[w++] = e, k[w++] = u = f, b += 1;else if ("L" === h || "Z" === h) "Z" === h && (e = l, f = m, k.closed = !0), ("L" === h || Math.abs(t - e) > .5 || Math.abs(u - f) > .5) && (k[w++] = t + (e - t) / 3, k[w++] = u + (f - u) / 3, k[w++] = t + 2 * (e - t) / 3, k[w++] = u + 2 * (f - u) / 3, k[w++] = e, k[w++] = f, "L" === h && (b += 2)), t = e, u = f;else if ("A" === h) {
        for (p = i(t, u, 1 * r[b + 1], 1 * r[b + 2], 1 * r[b + 3], 1 * r[b + 4], 1 * r[b + 5], (j ? t : 0) + 1 * r[b + 6], (j ? u : 0) + 1 * r[b + 7]), d = 0; d < p.length; d++) {
          k[w++] = p[d];
        }t = k[w - 2], u = k[w - 1], b += 7;
      } else g("Error: malformed path data: " + a);
    }return s.totalPoints = x + w, s;
  },
      k = function k(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = 0,
        r = .999999,
        s = a.length,
        t = b / ((s - 2) / 6);for (o = 2; s > o; o += 6) {
      for (q += t; q > r;) {
        c = a[o - 2], d = a[o - 1], e = a[o], f = a[o + 1], g = a[o + 2], h = a[o + 3], i = a[o + 4], j = a[o + 5], p = 1 / (Math.floor(q) + 1), k = c + (e - c) * p, m = e + (g - e) * p, k += (m - k) * p, m += (g + (i - g) * p - m) * p, l = d + (f - d) * p, n = f + (h - f) * p, l += (n - l) * p, n += (h + (j - h) * p - n) * p, a.splice(o, 4, c + (e - c) * p, d + (f - d) * p, k, l, k + (m - k) * p, l + (n - l) * p, m, n, g + (i - g) * p, h + (j - h) * p), o += 6, s += 6, q--;
      }
    }return a;
  },
      l = function l(a) {
    var b,
        c,
        d,
        e,
        f = "",
        g = a.length,
        h = 100;for (c = 0; g > c; c++) {
      for (e = a[c], f += "M" + e[0] + "," + e[1] + " C", b = e.length, d = 2; b > d; d++) {
        f += (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d++] * h | 0) / h + " " + (e[d++] * h | 0) / h + "," + (e[d] * h | 0) / h + " ";
      }e.closed && (f += "z");
    }return f;
  },
      m = function m(a) {
    for (var b = [], c = a.length - 1, d = 0; --c > -1;) {
      b[d++] = a[c], b[d++] = a[c + 1], c--;
    }for (c = 0; d > c; c++) {
      a[c] = b[c];
    }a.reversed = a.reversed ? !1 : !0;
  },
      n = function n(a) {
    var b,
        c = a.length,
        d = 0,
        e = 0;for (b = 0; c > b; b++) {
      d += a[b++], e += a[b];
    }return [d / (c / 2), e / (c / 2)];
  },
      o = function o(a) {
    var b,
        c,
        d,
        e = a.length,
        f = a[0],
        g = f,
        h = a[1],
        i = h;for (d = 6; e > d; d += 6) {
      b = a[d], c = a[d + 1], b > f ? f = b : g > b && (g = b), c > h ? h = c : i > c && (i = c);
    }return a.centerX = (f + g) / 2, a.centerY = (h + i) / 2, a.size = (f - g) * (h - i);
  },
      p = function p(a) {
    for (var b, c, d, e, f, g = a.length, h = a[0][0], i = h, j = a[0][1], k = j; --g > -1;) {
      for (f = a[g], b = f.length, e = 6; b > e; e += 6) {
        c = f[e], d = f[e + 1], c > h ? h = c : i > c && (i = c), d > j ? j = d : k > d && (k = d);
      }
    }return a.centerX = (h + i) / 2, a.centerY = (j + k) / 2, a.size = (h - i) * (j - k);
  },
      q = function q(a, b) {
    return b.length - a.length;
  },
      r = function r(a, b) {
    var c = a.size || o(a),
        d = b.size || o(b);return Math.abs(d - c) < (c + d) / 20 ? b.centerX - a.centerX || b.centerY - a.centerY : d - c;
  },
      s = function s(a, b) {
    var c,
        d,
        e = a.slice(0),
        f = a.length,
        g = f - 2;for (b = 0 | b, c = 0; f > c; c++) {
      d = (c + b) % g, a[c++] = e[d], a[c] = e[d + 1];
    }
  },
      t = function t(a, b, c, d, e) {
    var f,
        g,
        h,
        i,
        j = a.length,
        k = 0,
        l = j - 2;for (c *= 6, g = 0; j > g; g += 6) {
      f = (g + c) % l, i = a[f] - (b[g] - d), h = a[f + 1] - (b[g + 1] - e), k += Math.sqrt(h * h + i * i);
    }return k;
  },
      u = function u(a, b, c) {
    var d,
        e,
        f,
        g = a.length,
        h = n(a),
        i = n(b),
        j = i[0] - h[0],
        k = i[1] - h[1],
        l = t(a, b, 0, j, k),
        o = 0;for (f = 6; g > f; f += 6) {
      e = t(a, b, f / 6, j, k), l > e && (l = e, o = f);
    }if (c) for (d = a.slice(0), m(d), f = 6; g > f; f += 6) {
      e = t(d, b, f / 6, j, k), l > e && (l = e, o = -f);
    }return o / 6;
  },
      v = function v(a, b, c) {
    for (var d, e, f, g, h, i, j = a.length, k = 99999999999, l = 0, m = 0; --j > -1;) {
      for (d = a[j], i = d.length, h = 0; i > h; h += 6) {
        e = d[h] - b, f = d[h + 1] - c, g = Math.sqrt(e * e + f * f), k > g && (k = g, l = d[h], m = d[h + 1]);
      }
    }return [l, m];
  },
      w = function w(a, b, c, d, e, f) {
    var g,
        h,
        i,
        j,
        k,
        l = b.length,
        m = 0,
        n = Math.min(a.size || o(a), b[c].size || o(b[c])) * d,
        p = 999999999999,
        q = a.centerX + e,
        r = a.centerY + f;for (h = c; l > h && (g = b[h].size || o(b[h]), !(n > g)); h++) {
      i = b[h].centerX - q, j = b[h].centerY - r, k = Math.sqrt(i * i + j * j), p > k && (m = h, p = k);
    }return k = b[m], b.splice(m, 1), k;
  },
      x = function x(a, b, c, d) {
    var e,
        f,
        h,
        i,
        j,
        l,
        n,
        t = b.length - a.length,
        x = t > 0 ? b : a,
        y = t > 0 ? a : b,
        z = 0,
        A = "complexity" === d ? q : r,
        B = "position" === d ? 0 : "number" == typeof d ? d : .8,
        C = y.length,
        D = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c.push ? c.slice(0) : [c],
        E = "reverse" === D[0] || D[0] < 0,
        F = "log" === c;if (y[0]) {
      if (x.length > 1 && (a.sort(A), b.sort(A), l = x.size || p(x), l = y.size || p(y), l = x.centerX - y.centerX, n = x.centerY - y.centerY, A === r)) for (C = 0; C < y.length; C++) {
        x.splice(C, 0, w(y[C], x, C, B, l, n));
      }if (t) for (0 > t && (t = -t), x[0].length > y[0].length && k(y[0], (x[0].length - y[0].length) / 6 | 0), C = y.length; t > z;) {
        i = x[C].size || o(x[C]), h = v(y, x[C].centerX, x[C].centerY), i = h[0], j = h[1], y[C++] = [i, j, i, j, i, j, i, j], y.totalPoints += 8, z++;
      }for (C = 0; C < a.length; C++) {
        e = b[C], f = a[C], t = e.length - f.length, 0 > t ? k(e, -t / 6 | 0) : t > 0 && k(f, t / 6 | 0), E && !f.reversed && m(f), c = D[C] || 0 === D[C] ? D[C] : "auto", c && (f.closed || Math.abs(f[0] - f[f.length - 2]) < .5 && Math.abs(f[1] - f[f.length - 1]) < .5 ? "auto" === c || "log" === c ? (D[C] = c = u(f, e, 0 === C), 0 > c && (E = !0, m(f), c = -c), s(f, 6 * c)) : "reverse" !== c && (C && 0 > c && m(f), s(f, 6 * (0 > c ? -c : c))) : !E && ("auto" === c && Math.abs(e[0] - f[0]) + Math.abs(e[1] - f[1]) + Math.abs(e[e.length - 2] - f[f.length - 2]) + Math.abs(e[e.length - 1] - f[f.length - 1]) > Math.abs(e[0] - f[f.length - 2]) + Math.abs(e[1] - f[f.length - 1]) + Math.abs(e[e.length - 2] - f[0]) + Math.abs(e[e.length - 1] - f[1]) || c % 2) ? (m(f), D[C] = -1, E = !0) : "auto" === c ? D[C] = 0 : "reverse" === c && (D[C] = -1), f.closed !== e.closed && (f.closed = e.closed = !1));
      }return F && g("shapeIndex:[" + D.join(",") + "]"), D;
    }
  },
      y = function y(a, b, c, d) {
    var e = j(a[0]),
        f = j(a[1]);x(e, f, b || 0 === b ? b : "auto", c) && (a[0] = l(e), a[1] = l(f), ("log" === d || d === !0) && g('precompile:["' + a[0] + '","' + a[1] + '"]'));
  },
      z = function z(a, b, c) {
    return b || c || a || 0 === a ? function (d) {
      y(d, a, b, c);
    } : y;
  },
      A = function A(a, b) {
    if (!b) return a;var c,
        e,
        f,
        g = a.match(d) || [],
        h = g.length,
        i = "";for ("reverse" === b ? (e = h - 1, c = -2) : (e = (2 * (parseInt(b, 10) || 0) + 1 + 100 * h) % h, c = 2), f = 0; h > f; f += 2) {
      i += g[e - 1] + "," + g[e] + " ", e = (e + c) % h;
    }return i;
  },
      B = function B(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = 0,
        k = parseFloat(a[0]),
        l = parseFloat(a[1]),
        m = k + "," + l + " ",
        n = .999999;for (e = a.length, c = .5 * b / (.5 * e - 1), d = 0; e - 2 > d; d += 2) {
      if (j += c, h = parseFloat(a[d + 2]), i = parseFloat(a[d + 3]), j > n) for (g = 1 / (Math.floor(j) + 1), f = 1; j > n;) {
        m += (k + (h - k) * g * f).toFixed(2) + "," + (l + (i - l) * g * f).toFixed(2) + " ", j--, f++;
      }m += h + "," + i + " ", k = h, l = i;
    }return m;
  },
      C = function C(a) {
    var b = a[0].match(d) || [],
        c = a[1].match(d) || [],
        e = c.length - b.length;e > 0 ? a[0] = B(b, e) : a[1] = B(c, -e);
  },
      D = function D(a) {
    return isNaN(a) ? C : function (b) {
      C(b), b[1] = A(b[1], parseInt(a, 10));
    };
  },
      E = function E(a, b) {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "path"),
        d = Array.prototype.slice.call(a.attributes),
        e = d.length;for (b = "," + b + ","; --e > -1;) {
      -1 === b.indexOf("," + d[e].nodeName + ",") && c.setAttributeNS(null, d[e].nodeName, d[e].nodeValue);
    }return c;
  },
      F = function F(a, b) {
    var c,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y = a.tagName.toLowerCase(),
        z = .552284749831;return "path" !== y && a.getBBox ? (i = E(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), "rect" === y ? (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, e = +a.getAttribute("x") || 0, f = +a.getAttribute("y") || 0, m = (+a.getAttribute("width") || 0) - 2 * g, n = (+a.getAttribute("height") || 0) - 2 * h, g || h ? (o = e + g * (1 - z), p = e + g, q = p + m, r = q + g * z, s = q + g, t = f + h * (1 - z), u = f + h, v = u + n, w = v + h * z, x = v + h, c = "M" + s + "," + u + " V" + v + " C" + [s, w, r, x, q, x, q - (q - p) / 3, x, p + (q - p) / 3, x, p, x, o, x, e, w, e, v, e, v - (v - u) / 3, e, u + (v - u) / 3, e, u, e, t, o, f, p, f, p + (q - p) / 3, f, q - (q - p) / 3, f, q, f, r, f, s, t, s, u].join(",") + "z") : c = "M" + (e + m) + "," + f + " v" + n + " h" + -m + " v" + -n + " h" + m + "z") : "circle" === y || "ellipse" === y ? ("circle" === y ? (g = h = +a.getAttribute("r") || 0, k = g * z) : (g = +a.getAttribute("rx") || 0, h = +a.getAttribute("ry") || 0, k = h * z), e = +a.getAttribute("cx") || 0, f = +a.getAttribute("cy") || 0, j = g * z, c = "M" + (e + g) + "," + f + " C" + [e + g, f + k, e + j, f + h, e, f + h, e - j, f + h, e - g, f + k, e - g, f, e - g, f - k, e - j, f - h, e, f - h, e + j, f - h, e + g, f - k, e + g, f].join(",") + "z") : "line" === y ? c = "M" + a.getAttribute("x1") + "," + a.getAttribute("y1") + " L" + a.getAttribute("x2") + "," + a.getAttribute("y2") : ("polyline" === y || "polygon" === y) && (l = (a.getAttribute("points") + "").match(d) || [], e = l.shift(), f = l.shift(), c = "M" + e + "," + f + " L" + l.join(","), "polygon" === y && (c += "," + e + "," + f + "z")), i.setAttribute("d", c), b && a.parentNode && (a.parentNode.insertBefore(i, a), a.parentNode.removeChild(a)), i) : a;
  },
      G = function G(a, b, c) {
    var e,
        h,
        i = "string" == typeof a;return (!i || (a.match(d) || []).length < 3) && (e = i ? f.selector(a) : [a], e && e[0] ? (e = e[0], h = e.nodeName.toUpperCase(), b && "PATH" !== h && (e = F(e, !1), h = "PATH"), a = e.getAttribute("PATH" === h ? "d" : "points") || "", e === c && (a = e.getAttributeNS(null, "data-original") || a)) : (g("WARNING: invalid morph to: " + a), a = !1)), a;
  },
      H = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",
      I = _gsScope._gsDefine.plugin({ propName: "morphSVG", API: 2, global: !0, version: "0.8.1", init: function init(a, b, c) {
      var d, f, h, i, j;return "function" != typeof a.setAttribute ? !1 : (d = a.nodeName.toUpperCase(), j = "POLYLINE" === d || "POLYGON" === d, "PATH" === d || j ? (f = "PATH" === d ? "d" : "points", ("string" == typeof b || b.getBBox || b[0]) && (b = { shape: b }), i = G(b.shape || b.d || b.points || "", "d" === f, a), j && e.test(i) ? (g("WARNING: a <" + d + "> cannot accept path data. " + H), !1) : (i && (this._target = a, a.getAttributeNS(null, "data-original") || a.setAttributeNS(null, "data-original", a.getAttribute(f)), h = this._addTween(a, "setAttribute", a.getAttribute(f) + "", i + "", "morphSVG", !1, f, "object" == _typeof(b.precompile) ? function (a) {
        a[0] = b.precompile[0], a[1] = b.precompile[1];
      } : "d" === f ? z(b.shapeIndex, b.map || I.defaultMap, b.precompile) : D(b.shapeIndex)), h && (this._overwriteProps.push("morphSVG"), h.end = i, h.endProp = f)), !0)) : (g("WARNING: cannot morph a <" + d + "> SVG element. " + H), !1));
    }, set: function set(a) {
      var b;if (this._super.setRatio.call(this, a), 1 === a) for (b = this._firstPT; b;) {
        b.end && this._target.setAttribute(b.endProp, b.end), b = b._next;
      }
    } });I.pathFilter = y, I.pointsFilter = C, I.subdivideRawBezier = k, I.defaultMap = "size", I.pathDataToRawBezier = function (a) {
    return j(G(a, !0));
  }, I.equalizeSegmentQuantity = x, I.convertToPath = function (a, b) {
    "string" == typeof a && (a = f.selector(a));for (var c = a && 0 !== a.length ? a.length && a[0] && a[0].nodeType ? Array.prototype.slice.call(a, 0) : [a] : [], d = c.length; --d > -1;) {
      c[d] = F(c[d], b !== !1);
    }return c;
  }, I.pathDataToBezier = function (a, b) {
    var c,
        d,
        e,
        g,
        h,
        i,
        k,
        l,
        m = j(G(a, !0))[0] || [],
        n = 0;if (b = b || {}, l = b.align || b.relative, g = b.matrix || [1, 0, 0, 1, 0, 0], h = b.offsetX || 0, i = b.offsetY || 0, "relative" === l || l === !0 ? (h -= m[0] * g[0] + m[1] * g[2], i -= m[0] * g[1] + m[1] * g[3], n = "+=") : (h += g[4], i += g[5], l && (l = "string" == typeof l ? f.selector(l) : [l], l && l[0] && (k = l[0].getBBox() || { x: 0, y: 0 }, h -= k.x, i -= k.y))), c = [], e = m.length, g) for (d = 0; e > d; d += 2) {
      c.push({ x: n + (m[d] * g[0] + m[d + 1] * g[2] + h), y: n + (m[d] * g[1] + m[d + 1] * g[3] + i) });
    } else for (d = 0; e > d; d += 2) {
      c.push({ x: n + (m[d] + h), y: n + (m[d + 1] + i) });
    }return c;
  };
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/NetflixLogoComponent.js":
/*!*******************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/NetflixLogoComponent.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* wc-netflix-brand-logo:NetflixLogoComponent__759f.js, VERSION: 3.0.4, Published: 2018/07/05 10:23:05 $*/
!function () {
  var COMPONENT_NAME = 'netflix-brand-logo';
  var svg;

  function createGradient(svg, id, stops, p) {
    var isGradient = false;
    var svgNS = svg.namespaceURI;
    var s = [];

    if (id.indexOf('url(') > -1) {
      isGradient = true;
    }
    id = id.replace('url(#', '').replace(')', '');

    if (isGradient) {
      var grad = document.createElementNS(svgNS, 'linearGradient');
      grad.setAttribute('id', id);
      grad.setAttribute('gradientUnits', 'userSpaceOnUse');
      grad.setAttribute('spreadMethod', 'pad');
      grad.setAttribute('x1', p.x1 || 0);
      grad.setAttribute('y1', p.y1 || 0);
      grad.setAttribute('x2', p.x2 || 0);
      grad.setAttribute('y2', p.y2 || 0);
    }

    for (var i = 0; i < stops.length; i++) {
      var attrs = stops[i];
      var stop = document.createElementNS(svgNS, 'stop');
      for (var attr in attrs) {
        if (attrs.hasOwnProperty(attr)) stop.setAttribute(attr, attrs[attr]);
      }
      if (isGradient) grad.appendChild(stop);
      s.push(stop);
    }

    if (isGradient) {
      var defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS(svgNS, 'defs'), svg.firstChild);
      defs.appendChild(grad);
    }

    return s;
  }

  function drawPath(path, fill, gradient) {
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    p.setAttributeNS(null, 'd', path);
    p.setAttribute('fill', fill);

    if (gradient) {
      var stops = [];
      stops.push({ offset: '0%', 'stop-color': gradient.stop1 || '#B60009' });
      if (gradient.stop3) {
        stops.push({ offset: '50%', 'stop-color': gradient.stop2 || '#540001' });
        stops.push({ offset: '100%', 'stop-color': gradient.stop3 || '#B60009' });
      } else {
        stops.push({ offset: '100%', 'stop-color': gradient.stop2 || '#540001' });
      }
      p.gradient = createGradient(svg, fill, stops, gradient);
    }
    return p;
  }

  (function () {
    var component = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function value() {
          this._attached = false;
          this._hasInited = false;
        }
      },
      detachedCallback: {
        value: function value() {
          this._attached = false;
        }
      },
      attachedCallback: {
        value: function value() {
          this._attached = true;

          if (this._hasInited) {
            return;
          }

          this._hasInited = true;

          var comps = document.querySelectorAll(COMPONENT_NAME);

          for (var i = 0; i < comps.length; i++) {
            if (comps[i].uid == undefined) {
              comps[i].uid = i;
            } else {
              continue;
            }
          }

          Utils.createStyle.call(this, COMPONENT_NAME, '', 'position:absolute;  pointer-events:none;', 'svg', '-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:top left;transform-origin:top left;');

          this.lowBranding = this.hasAttribute('lowBranding') || false;
          this.color = this.getAttribute('color') || '#E50914';
          this.animDuration = this.getAttribute('duration') || 1.375;
          svg = this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          this.svg.setAttribute('width', '936px');
          this.svg.setAttribute('height', '254px');
          this.svg.setAttribute('viewBox', '0 0 936 254');

          this.resize();

          if (this.lowBranding) {
            this.n_leftShape = drawPath('M 45 2 L 0 2 0 235 Q 17 231 45 232 L 45 2 Z', 'url(#n_leftGrad' + this.uid + ')', {
              x1: '-48',
              y1: '-141',
              x2: '-38',
              y2: '-144'
            });
            this.n_leftShape.to = 'M 37 2 L 0 2 0 254 Q 19 251 40 249 L 37 2 Z';

            this.n_rightShape = drawPath('M 127 2 L 83 2 83 219 127 235 127 2 Z', 'url(#n_rightGrad' + this.uid + ')', {
              x1: '104',
              y1: '140',
              x2: '84',
              y2: '146'
            });
            this.n_rightShape.to = 'M 128 2 L 90 2 89 242 128 238 129 2 Z';
          } else {
            this.n_leftShape = drawPath('M 45 2 L 0 2 0 235 Q 17 231 45 232 L 45 2 Z', this.color, {
              x1: '-48',
              y1: '-141',
              x2: '-38',
              y2: '-144'
            });
            this.n_leftShape.to = 'M 37 2 L 0 2 0 254 Q 19 251 40 249 L 37 2 Z';

            this.n_rightShape = drawPath('M 127 2 L 83 2 83 219 127 235 127 2 Z', this.color, {
              x1: '104',
              y1: '140',
              x2: '84',
              y2: '146'
            });
            this.n_rightShape.to = 'M 128 2 L 90 2 89 242 128 238 129 2 Z';
          }

          //Define svg shapes
          // N

          this.n_midShape = drawPath('M 45 2 L 0 2 81 232 Q 110 231 127 236 L 45 2 Z', this.color);
          this.n_midShape.to = 'M 37 2 L 0 2 85 243 123 239 37 2 Z';

          //E
          this.e_topShape = drawPath('M 274 41 L 274 1 167 1 167 41 274 41 Z', this.color);
          this.e_topShape.to = 'M 167 41 L 167 1 167 1 167 41 167 41 Z';

          this.e_mainShape = drawPath('M 206 3 L 167 3 167 227 206 227 206 3 Z', this.color, {
            x1: '190',
            y1: '65',
            x2: '190',
            y2: '24',
            stop1: this.color
          });
          this.e_mainShape.to = 'M 206 3 L 206 3 167 3 167 3 206 3 Z';

          this.e_bottomShape = drawPath('M 274 186 L 167 188 167 227 274 225 274 186 Z', this.color, {
            x1: '232',
            y1: '204',
            x2: '197',
            y2: '205',
            stop1: this.color
          });
          this.e_bottomShape.to = 'M 167 188 L 167 188 167 227 167 227 167 188 Z';

          this.e_midShape = drawPath('M 182 134 L 257 134 257 94 182 94 182 134 Z', this.color);
          this.e_midShape.to = 'M 182 94 L 182 94 182 134 182 134 182 94 Z';

          //T
          this.t_midShape = drawPath('M 381 8 L 341 8 341 224 381 222 381 8 Z', this.color, {
            x1: '366',
            y1: '69',
            x2: '366',
            y2: '29',
            stop1: this.color
          });
          this.t_midShape.to = 'M 381 8 L 381 8 341 8 341 8 381 8 Z';

          this.t_topShape = drawPath('M 423 41 L 423 1 300 1 300 41 423 41 Z', this.color);
          this.t_topShape.to = 'M 300 41 L 300 1 300 1 300 41 300 41 ';

          //F
          this.f_topShape = drawPath('M 558 41 L 558 1 448 1 448 41 558 41 Z', this.color);
          this.f_topShape.to = 'M 448 41 L 448 1 448 1 448 41 448 41 Z';

          this.f_midShape = drawPath('M 541 132 L 541 92 466 92 466 132 541 132 Z', this.color);
          this.f_midShape.to = 'M 466 132 L 466 92 466 92 466 132 466 132 Z';

          this.f_mainShape = drawPath('M 488 18 L 448 18 448 222 488 222 488 18 Z', this.color, {
            x1: '472',
            y1: '69',
            x2: '472',
            y2: '28',
            stop1: this.color
          });
          this.f_mainShape.to = 'M 488 18 L 448 18 448 18 488 18 488 18 Z';

          //L
          this.l_bottomShape = drawPath('M 691 231 L 691 192 584 184 584 223 691 231 Z', this.color);
          this.l_bottomShape.to = 'M 584.1 223.1 L 584.1 184.1 584 184 584 223 584.1 223.1 Z';
          this.l_mainShape = drawPath('M 624 0 L 584 0 584 223 624 223 624 0 Z', this.color, {
            x1: '599',
            y1: '158',
            x2: '599',
            y2: '201',
            stop1: this.color
          });
          this.l_mainShape.to = 'M 624 0 L 584 0 584 0 624 0 624 0 Z';

          //I
          this.i_mainShape = drawPath('M 763 0 L 723 0 723 230 763 233 763 0 Z', this.color);
          this.i_mainShape.to = 'M 763 0 L 723 0 723 0 763 0 763 0 Z';

          //X
          this.x_frontShape = drawPath('M 791 236 L 791 236 831 241 831 241 791 236 Z', this.color);
          this.x_frontShape.to = 'M 935 1 L 893 1 791 236 831 241 935 1 Z';

          this.x_backShape = drawPath('M 891 248 L 934 254 837 0 794 0 891 248 Z', this.color, {
            x1: '946',
            y1: '-104',
            x2: '1011',
            y2: '-64',
            stop1: this.color
          });
          this.x_backShape.to = 'M 827 0 L 784 0 791 0 833 0 827 0 Z';

          var arr = ['n_leftShape', 'n_rightShape', 'n_midShape', 'e_bottomShape', 'e_midShape', 'e_mainShape', 'e_topShape', 't_midShape', 't_topShape', 'f_midShape', 'f_mainShape', 'f_topShape', 'l_mainShape', 'l_bottomShape', 'i_mainShape', 'x_backShape', 'x_frontShape'];

          for (var i = 0; i < arr.length; i++) {
            this.svg.appendChild(this[arr[i]]);
          }

          this.appendChild(this.svg);

          function forceRerendering() {
            var points = [0.3, 0.45, 0.6, 0.75, 0.9, 0.98];
            points.forEach(function (time, index) {
              TweenLite.delayedCall(time * this.animDuration, function () {
                var r = index % 2 ? 0.01 : 0;
                TweenLite.set(this, { rotation: r });
              }.bind(this));
            }.bind(this));
          }

          // Create SVG animation timeline
          this.timeline = new TimelineMax({
            paused: true,
            onComplete: this.onPlayComplete.bind(this),
            onStart: forceRerendering.bind(this),
            onReverseComplete: this.onReverseComplete.bind(this)
          });

          var left = Number(window.getComputedStyle(this, 'left').left.replace('px', ''));
          this.timeline.add('start').to(this.n_leftShape, 1.3, { morphSVG: this.n_leftShape.to, ease: Quad.easeOut }, 'start+=.2').to(this.n_leftShape.gradient, 1.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.2').to(this.n_rightShape, 1.3, { morphSVG: this.n_rightShape.to, ease: Quad.easeOut }, 'start+=.2').to(this.n_rightShape.gradient, 1.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.2').to(this.n_midShape, 1.3, { morphSVG: this.n_midShape.to, ease: Quad.easeOut }, 'start+=.2').fromTo(this.e_topShape, 0.15, { morphSVG: this.e_topShape.to }, { morphSVG: this.e_topShape, ease: Quad.easeOut }, 'start+=.425').fromTo(this.e_mainShape, 0.15, { morphSVG: this.e_mainShape.to }, { morphSVG: this.e_mainShape, ease: Quad.easeOut }, 'start+=.45').to(this.e_mainShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.6').fromTo(this.e_midShape, 0.15, { morphSVG: this.e_midShape.to }, { morphSVG: this.e_midShape, ease: Quad.easeOut }, 'start+=.55').fromTo(this.e_bottomShape, 0.15, { morphSVG: this.e_bottomShape.to }, { morphSVG: this.e_bottomShape.to, ease: Quad.easeOut }, 'start+=.575').to(this.e_bottomShape, 0.15, { morphSVG: 'M 274 187 L 167 194 167 233 274 226 274 187 Z', ease: Quad.easeOut }, 'start+=.585').to(this.e_bottomShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.595').fromTo(this.t_topShape, 0.15, { morphSVG: this.t_topShape.to }, { morphSVG: this.t_topShape, ease: Quad.easeOut }, 'start+=.575').fromTo(this.t_midShape, 0.15, { morphSVG: this.t_midShape.to }, { morphSVG: this.t_midShape, ease: Quad.easeOut }, 'start+=.6').to(this.t_midShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.75').fromTo(this.f_topShape, 0.15, { morphSVG: this.f_topShape.to }, { morphSVG: this.f_topShape, ease: Quad.easeOut }, 'start+=.625').fromTo(this.f_mainShape, 0.2, { morphSVG: this.f_mainShape.to }, { morphSVG: this.f_mainShape, ease: Quad.easeOut }, 'start+=.675').fromTo(this.f_midShape, 0.15, { morphSVG: this.f_midShape.to }, { morphSVG: this.f_midShape, ease: Quad.easeOut }, 'start+=.775').to(this.f_mainShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=.9').fromTo(this.l_mainShape, 0.15, { morphSVG: this.l_mainShape.to }, { morphSVG: this.l_mainShape, ease: Quad.easeOut }, 'start+=.725').fromTo(this.l_bottomShape, 0.15, { morphSVG: this.l_bottomShape.to }, { morphSVG: this.l_bottomShape, ease: Quad.easeOut }, 'start+=.85').to(this.l_bottomShape, 0.3, { morphSVG: 'M 691 228 L 691 189 584 184 584 223 691 228 Z', ease: Quad.easeOut }, 'start+=1').to(this.l_mainShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=1.025').fromTo(this.i_mainShape, 0.15, { morphSVG: this.i_mainShape.to }, { morphSVG: this.i_mainShape, ease: Quad.easeOut }, 'start+=.875').fromTo(this.x_backShape, 0.3, { morphSVG: this.x_backShape.to }, { morphSVG: { shape: this.x_backShape, shapeIndex: 2 }, ease: Quad.easeOut }, 'start+=.925').to(this.x_frontShape, 0.3, { morphSVG: { shape: 'M 935 1 L 893 1 790 237 831 241 935 1 Z', shapeIndex: 3 }, ease: Quad.easeOut }, 'start+=1.025').to(this.x_backShape.gradient, 0.3, { stopColor: this.color, ease: Linear.easeNone }, 'start+=1.025');

          this.dispatchEvent(new CustomEvent('ready'));
        },
        enumerable: true
      },

      attributeChangedCallback: {
        value: function value() {
          var width = this.getAttribute('width');
          width = parseInt(width, 10);

          if (this.size && this.size.w !== width) {
            this.resize();
          }
        },
        enumerable: true
      },

      resize: {
        value: function value(s) {
          var width;
          var height;
          var scale;

          if (s) {
            width = s.w;
            height = s.h;
            scale = width / 936;
          } else {
            if (this.lowBranding) {
              width = Number(this.getAttribute('width') || this.offsetWidth || 100);
              height = Number(254 / 127 * width);
              scale = width / 127;
            } else {
              width = Number(this.getAttribute('width') || this.offsetWidth || 100);
              height = Number(254 / 936 * width);
              scale = width / 936;
            }
          }

          this.size = { w: width, h: height };

          TweenLite.set(this, { width: width, height: height });
          this.svg.setAttribute('style', 'transform: scale(' + scale + ');' + '-webkit-transform: scale(' + scale + ');');
        }
      },

      play: {
        value: function value() {
          if (!this.lowBranding) this.timeline.duration(this.animDuration).play();
        }
      },

      reset: {
        value: function value() {
          if (!this.lowBranding) this.timeline.seek(0);
        }
      },

      reverse: {
        value: function value() {
          if (!this.lowBranding) {
            var currentState = 'visible';
            var stylesheet = document.getElementById('netflix-brand-logo-component-stylesheet');

            this.timeline.eventCallback('onUpdate', function () {
              if (stylesheet) stylesheet.innerHTML = '';
              currentState = currentState === 'visible' ? 'hidden' : 'visible';
              Utils.createStyle.call(this, COMPONENT_NAME, '', 'position:absolute;  pointer-events:none;', 'svg', '-webkit-backface-visibility:' + currentState + ';backface-visibility:' + currentState + ';-webkit-transform-origin:top left;transform-origin:top left;');
            });

            this.timeline.reverse();
          }
        }
      },

      progress: {
        value: function value(t) {
          if (!this.lowBranding) {
            this.timeline.progress(t);
            this.timeline.pause();
          }
        }
      },

      onPlayComplete: {
        value: function value() {
          this.dispatchEvent(new CustomEvent('playComplete'));
        }
      },

      onReverseComplete: {
        value: function value() {
          this.dispatchEvent(new CustomEvent('reverseComplete'));
        }
      },

      preview: {
        value: function value() {
          // this.play();
          this.addEventListener('ready', function () {
            this.play();
            setTimeout(this.reverse.bind(this), 3000);
          }.bind(this));
        }
      }
    });

    document.registerElement(COMPONENT_NAME, { prototype: component });
  })();
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/main.js":
/*!***************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/main.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./MorphSVGPlugin.min.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/MorphSVGPlugin.min.js");

__webpack_require__(/*! ./NetflixLogoComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/NetflixLogoComponent.js");

__webpack_require__(/*! ./4494e59a-accb-4458-bc6b-455de349744f.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-brand-logo/4494e59a-accb-4458-bc6b-455de349744f.js");

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/74ac09b5-4f74-4b37-b4d1-7955ed4994fb.js":
/*!****************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-cta/74ac09b5-4f74-4b37-b4d1-7955ed4994fb.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-cta
if (false) {}
// prettier-ignore
module.exports = {
  "id": "74ac09b5-4f74-4b37-b4d1-7955ed4994fb",
  "name": "wc-netflix-cta",
  "description": "CTA button",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544728889095,
  "full_name": "NetflixAdsEng/wc-netflix-cta",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-cta",
  "username": "GitHub",
  "version": "5.0.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/NetflixCtaComponent.js":
/*!***********************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-cta/NetflixCtaComponent.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var COMPONENT_NAME = 'netflix-cta';
  var PREFIX = 'mm-component';
  var TRANSITION_EASING = '.4s cubic-bezier(0.19, 1, 0.22, 1)';
  // the proportion of padding right of the CTA arrow to the CTA width
  var ARROW_PADDING_TO_WIDTH = 0.04;
  // list of attributes that affect CTA layout
  var LAYOUT_ATTRIBUTE_LIST = ['width', 'height', 'font', 'font-size', 'min-font-size', 'max-width', 'stretch-direction', 'arrow'];

  function stretchStrToPercent(stretchStr) {
    if (!stretchStr || stretchStr === 'left') {
      return 0;
    } else if (stretchStr === 'center') {
      return 0.5;
    } else if (stretchStr === 'right') {
      return 1;
    }

    // if it ends with %...
    if (stretchStr.indexOf('%') === stretchStr.length - 1) {
      var stretchPercent = parseFloat(stretchStr);
      // and is valid num...
      if (!isNaN(stretchPercent)) {
        return stretchPercent / 100;
      }
    }
    return 0;
  }

  function parsePaddingAttr(padAttr) {
    if (typeof padAttr === 'number') {
      return padAttr + 'px';
    }

    var parsedNum = parseFloat(padAttr);
    // is number string --> convert to px
    if (!isNaN(parsedNum) && /^(\d|\.)+$/.test(padAttr)) {
      return parsedNum + 'px';
    }
    return padAttr;
  }

  function horizontalPadding(el) {
    var style = window.getComputedStyle(el, null);
    return parseInt(style.getPropertyValue('padding-left'), 10) + parseInt(style.getPropertyValue('padding-right'), 10);
  }

  // Calculate width without padding.
  function innerWidth(el) {
    var style = window.getComputedStyle(el, null);
    return el.clientWidth - parseInt(style.getPropertyValue('padding-left'), 10) - parseInt(style.getPropertyValue('padding-right'), 10);
  }

  // Calculate height without padding.
  function innerHeight(el) {
    var style = window.getComputedStyle(el, null);
    return el.clientHeight - parseInt(style.getPropertyValue('padding-top'), 10) - parseInt(style.getPropertyValue('padding-bottom'), 10);
  }

  function style() {
    // use unique class name as identifier because there are dynamic values in the generated stylesheet
    var UNIQUE_CLASS_NAME = 'uc-' + (Math.random() * 1000000).toFixed(0);

    var horizPaddingAttr = this.getAttribute('horizontal-pad');
    var vertPaddingAttr = this.getAttribute('vertical-pad');

    var horizPadding = parsePaddingAttr(horizPaddingAttr) || '4%';
    var vertPadding = parsePaddingAttr(vertPaddingAttr) || '2%';

    Utils.createStyle.call(this, COMPONENT_NAME + '.' + UNIQUE_CLASS_NAME, '.button', 'will-change: transform;cursor: pointer;overflow: hidden;text-align: center;font-size:' + this.data.size + 'px; font-family: ' + this.data.font, '*', 'box-sizing: border-box;', '.button .fill', 'will-change: transform;width:100%;height:100%;transform-origin:top left;-webkit-transform-origin:top left;transform: scale(0, 1);-webkit-transform: scale(0, 1); transition: transform ' + TRANSITION_EASING + ';', '.button .arrow', 'will-change: transform;position:absolute;text-align: right;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: translate(0%, -50%);transform: translate(0%, -50%);', '.button .arrow svg', 'position:absolute;right:' + ARROW_PADDING_TO_WIDTH * 100 + '%;left:auto;top:0;', '.button .copy', 'will-change: transform;transform-origin: 0 0;letter-spacing:1.1px' +
    // setting each padding independently
    // in case, either padding vars are invalid in CSS
    ';padding-top:' + vertPadding + ';padding-bottom:' + vertPadding + ';padding-left:' + horizPadding + ';padding-right:' + horizPadding + ';transition: color ' + TRANSITION_EASING + ';color:' + this.data.color[1], '.button .border', '-webkit-box-sizing: border-box;box-sizing: border-box;position: absolute;top: 0;left: 0;width:100%;height:100%;border:solid ' + this.borderSize + 'px ' + this.data.color[0], 'div', 'position: absolute;top: 0;left: 0;');

    if (!Utils.isMobile) {
      Utils.createStyle.call(this, COMPONENT_NAME + '.' + UNIQUE_CLASS_NAME, '.button:hover .bgImageHover', 'width:100% !important;', '.button.hover .bgImageHover', 'width:100% !important;', '.button:hover .fill', 'transform: scale(1, 1); -webkit-transform: scale(1, 1);', '.button.hover .fill', 'transform: scale(1, 1); -webkit-transform: scale(1, 1);', '.button:hover .arrow', 'color:' + this.data.color[0], '.button.hover .arrow', 'color:' + this.data.color[0], '.button:hover .copy', 'color:' + this.data.color[0], '.button.hover .copy', 'color:' + this.data.color[0], '.button.isArrow:hover .copy', 'color:' + this.data.color[0]);
    }

    this.className += ' ' + PREFIX + ' ' + UNIQUE_CLASS_NAME;
    this.style.position = 'absolute';
    this.button.style.backgroundColor = this.data.color[0];
    this.fill.style.backgroundColor = this.data.color[1];
  }

  var component = Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function value() {
        this._attached = false;
        this._hasInited = false;
        this._resizeQueued = false;
        this.button = document.createElement('div');
        this.button.className = 'button';
        this.fill = document.createElement('div');
        this.fill.className = 'fill';
        this.copy = document.createElement('div');
        this.copy.className = 'copy';
        this.arrow = document.createElement('div');
        this.arrow.className = 'arrow';
        this.border = document.createElement('div');
        this.border.className = 'border';
      },
      enumerable: true
    },
    detachedCallback: {
      value: function value() {
        this._attached = false;
      }
    },
    attachedCallback: {
      value: function value() {
        this._attached = true;

        if (this._hasInited) {
          if (this._resizeQueued) {
            this.resize();
          }
          return;
        }

        this._hasInited = true;

        this.data = {};
        this.data.color = [this.getAttribute('color-1') || '#e50914', this.getAttribute('color-2') || '#ffffff'];
        this.data.size = parseInt(this.getAttribute('font-size'), 10) || 12;
        this.data.minSize = parseInt(this.getAttribute('min-font-size'), 10) || 8;
        this.data.font = (this.getAttribute('font') || 'Netflix Sans') + ', Arial, sans-serif';
        this.data.text = this.getAttribute('text');

        var bgImg = this.getAttribute('background-image');
        if (bgImg) {
          this.bgImgContainer = document.createElement('div');
          this.bgImgContainer.className = 'bgImage';
          var img = new Image();
          img.src = bgImg;
          this.bgImgContainer.appendChild(img);
          this.button.appendChild(this.bgImgContainer);
          this.bgImgContainer.setAttribute('style', 'position: absolute; top:0;left:0;');
        }

        this.appendChild(this.button);
        this.button.appendChild(this.fill);

        var bgImgHover = this.getAttribute('background-image-hover');
        if (bgImgHover) {
          this.bgImgContainerHover = document.createElement('div');
          this.bgImgContainerHover.className = 'bgImageHover';
          var imgHover = new Image();
          imgHover.src = bgImgHover;
          this.bgImgContainerHover.appendChild(imgHover);
          this.button.appendChild(this.bgImgContainerHover);
          this.bgImgContainerHover.setAttribute('style', 'position: absolute; top:0;left:0;width:0%;overflow:hidden;height:' + this.height + 'px; transition: width ' + TRANSITION_EASING + ';');
          this.fill.setAttribute('style', 'display:none;');
        }

        this.button.appendChild(this.copy);
        this.hasArrow = this._hasTruthyAttribute('arrow');
        this.hasBorder = this.hasAttribute('border-size');
        this.borderSize = this.getAttribute('border-size') || 1;

        if (this.hasArrow) {
          this.button.appendChild(this.arrow);
          this.button.className += ' isArrow';
        }

        if (this.hasBorder) {
          this.button.appendChild(this.border);
        }

        style.call(this);

        this.button.addEventListener('click', function () {
          if (this.click) this.click();
          var c = document.createEvent('CustomEvent');
          c.initCustomEvent('cta-click', !0, !0, 'Netflix CTA Click');
          this.dispatchEvent(c);
        }.bind(this));

        // necessary to get the arrow to change color properly
        this.button.addEventListener('mouseover', function (event) {
          this.mouseover.call(this);
        }.bind(this));

        this.button.addEventListener('mouseout', function (event) {
          this.mouseout.call(this);
        }.bind(this));

        var cta = 'WATCH NOW';

        var MonetComponent = document.querySelector('monet-integrator');
        if (MonetComponent) {
          MonetComponent.register(this);
          MonetComponent.getMonetData().then(function (data) {
            var key = this.getAttribute('data-dynamic-key') || 'CTA';
            var d = key;
            if (d.split('.').length === 1) {
              d = 'rootAssets["text.' + d + '"].text';
            }
            try {
              cta = eval('data.' + d);
              var locale = Monet.getComponentLocale('text.' + key).substr(0, 2);
              this.copy.classList.add(locale);
              if (locale == 'ar' || locale == 'he') {
                this.setAttribute('rtl', true);
              }
              this.text(cta);
              this.dispatchEvent(new CustomEvent('ready'));
            } catch (e) {
              Monet.logEvent('MONET_DATA_ERROR', {
                details: 'Netflix CTA Component error; Could not find data in rootAssets: ' + 'text.' + d,
                stack: e
              });

              MonetComponent.getBackupMonetData().then(function (backupData) {
                var ld = d;
                if (d.split('.').length === 1) {
                  d = 'rootAssets["text.' + d + '"].text';
                }
                cta = eval('backupData.' + d);
                var locale = Monet.getComponentLocale('text.' + key).substr(0, 2);
                this.copy.classList.add(locale);
                if (locale == 'ar' || locale == 'he') {
                  this.setAttribute('rtl', true);
                }
                this.text(cta);

                this.dispatchEvent(new CustomEvent('ready'));
              }.bind(this), function (error) {
                Monet.logEvent('MONET_DATA_ERROR', {
                  details: 'Failed to load backup Monet data',
                  stack: error
                });
              });
            }
          }.bind(this), function (error) {
            Monet.logEvent('MONET_DATA_ERROR', {
              details: 'Failed to load backup Monet data',
              stack: error
            });
          });
        } else {
          this.text(cta);
        }
      },
      enumerable: true
    },

    attributeChangedCallback: {
      value: function value(attrName, oldVal, newVal) {
        if (!this._attached) {
          return;
        }

        // if change in an attribute that affects layout
        if (LAYOUT_ATTRIBUTE_LIST.indexOf(attrName) >= 0 && oldVal !== newVal) {
          this.resize();
        }
      },
      enumerable: true
    },

    text: {
      value: function value(text) {
        var copyText = text || this.copy.innerHTML;
        this.copy.innerHTML = copyText;
        this.resize();
      }
    },

    _hasTruthyAttribute: {
      value: function value(attr) {
        return this.hasAttribute(attr) && this.getAttribute(attr).toString() !== 'false';
      }
    },

    resize: {
      value: function value(w, h, options) {
        /* 
        Resize options:
        - tryingMultiLine - try putting copy on multiple lines
        - tryingStretch - try stretching CTA width
        - originalWidth - first width to try when resizing w/ multiple lines
        - stopRetrying - discontinue resizing routine. Mostly for debugging purposes
        */
        options = options || {};

        // queue resize when the element is back in the dom
        if (!this._attached) {
          this._resizeQueued = true;
          return;
        }

        this._resizeQueued = false;
        this.rtl = this._hasTruthyAttribute('rtl');

        if (this.rtl) {
          TweenMax.set(this.copy, {
            css: {
              right: 0,
              left: 'auto'
            }
          });
          this.arrow.setAttribute('style', 'position:absolute;text-align: left;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: scale(-1,1) translate(0%, -50%);transform: scale(-1,1) translate(0%, -50%);');
        } else {
          TweenMax.set(this.copy, {
            css: {
              right: 'auto',
              left: 0
            }
          });
          this.arrow.setAttribute('style', 'position:absolute;text-align: right;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: translate(0%, -50%);transform: translate(0%, -50%);');
        }

        var parsedWidth = parseInt(this.getAttribute('width'), 10);
        var maxWidth = parseInt(this.getAttribute('max-width'), 10) || 140;

        parsedWidth = isNaN(parsedWidth) ? null : parsedWidth;

        // taking minimum of width and max-width in case someone puts lower max width then width
        var width = w || parsedWidth || this.offsetWidth || 109;
        var height = h || this.getAttribute('height') || this.offsetHeight || 28;
        width = Math.min(width, maxWidth);

        this.copy.style.width = this.button.style.width = this.style.width = width + 'px';
        this.copy.style.height = this.button.style.height = this.style.height = height + 'px';
        this.copy.style.whiteSpace = options.tryingMultiLine ? 'normal' : 'nowrap';

        this.height = height;
        if (this._attached) {
          this.arrow.innerHTML = '';

          // createArrow
          var s = Math.floor(this.height / 3.3);
          TweenMax.set(this.arrow, {
            height: s
          });
          var elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          elem.setAttribute('width', s + 'px');
          elem.setAttribute('height', s + 'px');
          elem.line = new Utils.SvgIcon('line1', 'M0,0 l' + s / 2 + ',' + s / 2 + 'l-' + s / 2 + ',' + s / 2);
          elem.line.setAttribute('fill', 'none');
          elem.line.setAttribute('stroke', this.data.color[1] || 0);
          elem.line.setAttribute('stroke-width', 2);
          elem.appendChild(elem.line);

          this.arrow.appendChild(elem);
        }

        // padding around sides
        var sidePad = ARROW_PADDING_TO_WIDTH * width;
        if (this.hasArrow) {
          this.copy.style.width = width - (sidePad + s) + 'px';
        }

        Utils.textFit(this.copy, {
          detectMultiLine: true,
          multiLine: options.tryingMultiLine,
          alignHoriz: true,
          alignVert: true,
          // subtracting by 1 since textFit bumps up font sizes by 1 internally
          minFontSize: this.data.minSize,
          maxFontSize: this.data.size
        });

        // update multiLine status
        this._multiLine = !!options.tryingMultiLine;

        var noMultiline = this._hasTruthyAttribute('no-multiline');
        if (options.stopRetrying || options.tryingStretch && options.tryingMultiLine ||
        // trying stretch without multiline is the step before multiline rendering
        // if 'no-multiline' is set, stop resizing here
        options.tryingStretch && !options.tryingMultiLine && noMultiline) {
          this._applyCopyFixes();
          return;
        }

        var span = this.copy.querySelector('span');

        // temporarily allow span to wrap around text
        var prevPosition = span.style.position;
        var prevDisplay = span.style.display;
        span.style.position = 'static';
        span.style.display = 'inline';
        var spanWidth = span.offsetWidth;

        // then remove element styling
        span.style.position = prevPosition;
        span.style.display = prevDisplay;

        var spanHeight = span.offsetHeight;

        var copyContainerWidth = innerWidth(this.copy);
        var copyContainerHeight = innerHeight(this.copy);
        var copyExcessWidth = spanWidth - copyContainerWidth;
        var copyExcessHeight = spanHeight - copyContainerHeight;

        var fontSize = getComputedStyle(this.copy).fontSize;

        // if copy bleeds beyond container
        // also implies copy is at minimum font size since textFit utility will try
        // to use min font size to try fitting copy to CTA
        if (copyExcessWidth > 0 || copyExcessHeight > 0) {
          if (!options.tryingStretch) {
            var extraWidth = copyExcessWidth + horizontalPadding(this.copy);
            var potentialNewWidth = width + extraWidth;
            // if CTA height being exceeded,
            // just set newWidth to maxWidth
            // since can't get the exact ideal width
            // to accomodate multiline copy
            var newWidth = copyExcessHeight > 0 ? maxWidth : Math.min(maxWidth, potentialNewWidth);
            this.resize(newWidth, null, {
              originalWidth: width,
              tryingStretch: true,
              tryingMultiLine: options.tryingMultiLine
            });

            // default behavior: stretches from left
            var stretchOrigin = this.getAttribute('stretch-origin');
            var percentOrigin = stretchStrToPercent(stretchOrigin);

            if (percentOrigin > 0) {
              TweenMax.set(this, {
                x: '-=' + extraWidth * percentOrigin
              });
            }
          } else if (!options.tryingMultiLine) {
            this.resize(options.originalWidth, null, {
              originalWidth: options.originalWidth,
              tryingStretch: false,
              tryingMultiLine: true
            });
          }
        } else {
          this._applyCopyFixes();
        }
      }
    },

    mouseover: {
      value: function value() {
        if (!Utils.isMobile) {
          this.button.classList.add('hover');
        }
        this.arrow.querySelector('svg').line.setAttribute('stroke', this.data.color[0]);
      }
    },

    mouseout: {
      value: function value() {
        if (!Utils.isMobile) {
          this.button.classList.remove('hover');
        }
        this.arrow.querySelector('svg').line.setAttribute('stroke', this.data.color[1]);
      }
    },

    preview: {
      value: function value() {
        this.setAttribute('arrow', '');
        this.setAttribute('border-size', '');
        this.setAttribute('size', 12);
      }
    },

    _applyCopyFixes: {
      value: function value() {
        var xFix = this.getAttribute('copy-x-fix');
        var yFix = this.getAttribute('copy-y-fix');
        var parsedXFix = parseFloat(xFix);
        var parsedYFix = parseFloat(yFix);
        // whether to apply copy-y-fix to copy on multiple lines
        var yFixOnMultiLine = this._hasTruthyAttribute('y-fix-on-multiLine');

        if (parsedXFix || parsedYFix) {
          TweenMax.set(this.copy, {
            x: xFix ? '+=' + parsedXFix : 0,
            y: yFix && (!this._multiLine || yFixOnMultiLine) ? '+=' + parsedYFix : 0
          });
        }
      }
    }
  });

  component.observedAttributes = LAYOUT_ATTRIBUTE_LIST;
  if (document.createElement(COMPONENT_NAME).constructor.__proto__ !== window.HTMLElement) {
    document.registerElement(COMPONENT_NAME, {
      prototype: component
    });
  }
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/main.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-cta/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./NetflixCtaComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/NetflixCtaComponent.js");

__webpack_require__(/*! ./74ac09b5-4f74-4b37-b4d1-7955ed4994fb.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-cta/74ac09b5-4f74-4b37-b4d1-7955ed4994fb.js");

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/NetflixFlushedRibbonComponent.js":
/*!********************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/NetflixFlushedRibbonComponent.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var COMPONENT_NAME = 'netflix-flushed-ribbon';

  // checks for existing Utils from shared / imported Utils methods
  window.Utils = function (Utils) {
    Utils.SvgContainer = function (width, height, coordinates, stroke) {
      return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" ' + 'width="' + width + 'px" ' + 'height="' + height + 'px" ' + 'viewBox="0 0 ' + width + ' ' + height + '"><defs><linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" ' + coordinates + ' spreadMethod="pad"><stop  offset="0%" stop-color="#AD050F"/><stop offset="100%" stop-color="#9D030C"/></linearGradient>' + '<g ' + 'transform="scale(' + width / 100 + ',' + height / 100 + ')" >' + '<path fill="#9D030C" stroke="none" d="' + stroke + '"/></g></defs><g transform="matrix( 1, 0, 0, 1, 0,0) "></svg>';
    };

    return Utils;
  }(window.Utils || {});

  var component = Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function value() {
        this._attached = false;
        this._hasInited = false;
      },
      enumerable: true
    },
    detachedCallback: {
      value: function value() {
        this._attached = false;
      }
    },
    attachedCallback: {
      value: function value() {
        this._attached = true;

        if (this._hasInited) {
          return;
        }

        this._hasInited = true;

        function create(name, target) {
          var elem = document.createElement('div');
          elem.classList.add(name);
          if (target) {
            target.appendChild(elem);
          }
          return elem;
        }

        this.leftContainer = create('leftContainer', this);
        this.rightContainer = create('rightContainer', this);
        this.midContainer = create('midContainer', this);
        this.mid = create('mid', this.midContainer);

        this.width = this.getAttribute('width') || this.offsetWidth || 300;
        this.height = this.getAttribute('height') || this.offsetHeight || 250;

        this.scale = 1;

        var defaultScale = {
          '970x250': 2.5,
          '300x600': 1.5,
          '728x90': 2,
          '320x480': 1.3
        };

        var offset = this.width > this.height ? -6 : 7;

        if (defaultScale[this.width + 'x' + this.height]) {
          this.scale = defaultScale[this.width + 'x' + this.height];
        }

        if (Number(this.getAttribute('scale'))) {
          this.scale = Number(this.getAttribute('scale'));
        }

        var scaleWidth = this.width * 0.5;
        var scaleHeight = 600;

        this.leftContainer.innerHTML = Utils.SvgContainer(scaleWidth, scaleHeight, 'x1="-11.475" y1="55.6375" x2="62.875" y2="50.4625"', 'M 0 0 L 0 100 100 100 100 0 0 0 Z');
        this.rightContainer.innerHTML = Utils.SvgContainer(scaleWidth, scaleHeight, 'x1="111.475" y1="44.3125" x2="37.125" y2="49.4875"', 'M 100 100 L 100 0 0 0 0 100 100 100 Z');

        Utils.createStyle.call(this, COMPONENT_NAME, '', 'overflow: hidden; width:' + this.width + 'px; height:' + this.height + 'px; display:block; position:relative; pointer-events:none; z-index:100;', '.leftContainer', 'background-color: #9d030c;position: absolute; top: 0; left: 0; width: 50%; height: ' + this.height + 'px; overflow: hidden;', '.rightContainer', 'background-color: #9d030c;position: absolute; top: 0; right: 0; width: 50%; height: ' + this.height + 'px;overflow: hidden;', '.midContainer', 'position: absolute; width: ' + this.width + 'px; height: ' + this.height + 'px; transform-origin: 50% 50%; -webkit-transform: rotate(-19deg); transform:rotate(-19deg);', '.mid', 'position:absolute; top:50%; left:50%; width: ' + 160 * this.scale + 'px; height: ' + this.height * 2.5 + 'px; overflow: hidden; transform: translate(-50%,-150%); background-color: #e50914;');

        TweenMax.set([this.leftContainer, this.rightContainer], { y: this.height });

        this.timeline = new TimelineMax({ paused: true });
        this.timeline.fromTo(this.leftContainer, 0.2, { y: this.height }, { y: 0, ease: Power2.easeIn }, 'start').fromTo(this.mid, 0.2, { x: '-50%', y: '-150%' }, { x: '-50%', y: '-50%', ease: Power2.easeIn }, 'start+=.2').fromTo(this.rightContainer, 0.2, { y: this.height }, { y: 0, ease: Power2.easeIn, onComplete: this.onCoverComplete.bind(this) }, 'start+=.4').to(this.leftContainer, 0.2, {
          y: -this.height,
          ease: Power2.easeIn,
          onStart: this.onLeftPillarStart.bind(this),
          onComplete: this.onLeftPillarComplete.bind(this)
        }, 'start+=.85').to(this.mid, 0.3, { x: '-50%', y: '200%', ease: Power2.easeIn }, 'start+=1.15').to(this.rightContainer, 0.3, { y: -this.height, ease: Power2.easeIn, onComplete: this.onComplete.bind(this) }, 'start+=1.35');

        this.dispatchEvent(new CustomEvent('ready'));
      },
      enumerable: true
    },

    play: {
      value: function value() {
        this.timeline.play();
      }
    },

    onComplete: {
      value: function value() {
        this.dispatchEvent(new CustomEvent('complete'));
      }
    },

    onCoverComplete: {
      value: function value() {
        this.dispatchEvent(new CustomEvent('coverComplete'));
      }
    },

    onLeftPillarComplete: {
      value: function value() {
        this.dispatchEvent(new CustomEvent('leftPillarComplete'));
      }
    },

    onLeftPillarStart: {
      value: function value() {
        this.dispatchEvent(new CustomEvent('leftPillarStart'));
      }
    },

    progress: {
      value: function value(_value, suppressEvents) {
        this.timeline.progress(_value, suppressEvents);
        this.timeline.pause();
      }
    },

    preview: {
      value: function value() {
        this.addEventListener('ready', this.play);
      }
    }
  });

  document.registerElement(COMPONENT_NAME, { prototype: component });
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/c1c53d0d-0cc6-4377-a710-f34ea9737786.js":
/*!***************************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/c1c53d0d-0cc6-4377-a710-f34ea9737786.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-flushed-ribbon
if (false) {}
// prettier-ignore
module.exports = {
  "id": "c1c53d0d-0cc6-4377-a710-f34ea9737786",
  "name": "wc-netflix-flushed-ribbon",
  "description": "Netflix Brand fully flushed ribbon animation",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544728962981,
  "full_name": "NetflixAdsEng/wc-netflix-flushed-ribbon",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-flushed-ribbon",
  "username": "GitHub",
  "version": "4.1.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/main.js":
/*!*******************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/main.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./NetflixFlushedRibbonComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/NetflixFlushedRibbonComponent.js");

__webpack_require__(/*! ./c1c53d0d-0cc6-4377-a710-f34ea9737786.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-flushed-ribbon/c1c53d0d-0cc6-4377-a710-f34ea9737786.js");

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-fonts/NetflixFontsComponent.js":
/*!***************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-fonts/NetflixFontsComponent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var COMPONENT_NAME = 'netflix-fonts';

  /**
   * Font selection takes the following inputs:
   *  - locale, string matching keys in the `fonts` dictionary below. Locales defined by Monet-Integrator will append.
   *  - light, boolean indicating font weight is required
   *  - normal, boolean indicating font weight
   *  - bold, boolean indicated font weight
   *
   * Font declarations are injected as <link> tags which load stylesheets
   * containing the @font-face.
   *
   * https://github.com/bramstein/fontfaceobserver then monitors for success / fail of those requests.
   *
   * If all weights for a particular family fail, then fallback fonts of corresponding
   * weights will be attempted. Browsers are not strict about weight, so if any one weight of a family
   * succeeds, then all weights are considered successful. See Bramstein's response here: https://github.com/bramstein/fontfaceobserver/issues/38
   *
   * If all fallbacks fail, component will throw.
   *
   * If fonts succeed to load, component will dispatch 'ready'.
   *
   */
  var FONT_CDN = 'https://ae.nflximg.net/monet/fonts';
  var fonts = {
    // english
    en: [{
      fam: 'Netflix Sans',
      weights: {
        '300': 'en__ns__300.css',
        '500': 'en__ns__500.css',
        '700': 'en__ns__700.css'
      },
      test: 'BESbwy'
    }],

    // hebrew
    he: [{
      fam: 'Noto Sans Hebrew',
      weights: {
        '400': 'hebrew/he__nsh__400.css',
        '700': 'hebrew/he__nsh__700.css'
      },
      test: 'צפו עכשיו'
    }, {
      fam: 'Assistant',
      weights: {
        '400': 'hebrew/he__a__400.css',
        '600': 'hebrew/he__a__600.css',
        '700': 'hebrew/he__a__700.css'
      },
      test: 'אצפו עכשיו'
    }, {
      fam: 'Rubik',
      weights: {
        '400': 'hebrew/he__r__400.css',
        '700': 'hebrew/he__r__700.css'
      },
      test: 'צפו עכשיו'
    }],

    // thai
    th: [{
      fam: 'Neue Helvetica Thai',
      weights: {
        '400': 'thai/th__nht__400.css',
        '700': 'thai/th__nht__700.css'
      },
      test: 'รับชมได้แล้ว'
    }, {
      fam: 'Prompt',
      weights: {
        '400': 'thai/th__p__400.css',
        '600': 'thai/th__p__600.css',
        '700': 'thai/th__p__700.css'
      },
      test: 'รับชมได้แล้ว'
    }],

    // arabic
    ar: [{
      fam: 'Neue Helvetica Arab',
      weights: {
        '400': 'arabic/ar__nha__400.css',
        '700': 'arabic/ar__nha__700.css'
      },
      test: 'شاهد الآن'
    }, {
      fam: 'Changa',
      weights: {
        '400': 'arabic/ar__c__400.css',
        '600': 'arabic/ar__c__600.css',
        '700': 'arabic/ar__c__700.css'
      },
      test: 'شاهد الآن'
    }, {
      fam: 'Droid Arabic Kufi',
      weights: {
        '400': 'arabic/ar__dak__400.css',
        '700': 'arabic/ar__dak__700.css'
      },
      test: 'شاهد الآن'
    }]
  };

  /**
   * Weight management
   *
   */

  var weightsMap = {
    light: [300, 400],
    normal: [500, 600],
    bold: [700]
  };
  // enable weight requests by string ('light', 'bold', etc), or by numerical weight (300, 400, etc)
  function getWeights(value) {
    if (isNaN(value)) {
      return weightsMap[value] || [];
    } else {
      return [value];
    }
  }
  function getFontReqsByWeights(font, weightReqs) {
    return weightReqs.map(function (weightReq) {
      var weights = getWeights(weightReq); // standardize weights
      return weights.reduce(function (acc, weight) {
        // verify requested weight has a definition in "fonts"
        if (weight in font.weights) {
          acc.push({
            url: FONT_CDN + '/' + font.weights[weight],
            weight: weight
          });
        }
        return acc;
      }, []);
    });
  }

  /**
   * Font loading
   *
   *
   */
  function loadFonts(component, locales, weights) {
    console.log('loadFonts:', locales, weights);
    var promises = [];
    locales.forEach(function (locale) {
      if (locale in fonts) {
        promises.push(loadLocale(locale, weights));
      }
    });
    Promise.all(promises).then(function () {
      console.log('All fonts are loaded.');
      component.dispatchEvent(new CustomEvent('ready'));
    }).catch(function (err) {
      console.log('Failed to load fonts.', err);
      component.dispatchEvent(new CustomEvent('fail'));
    });
  }
  function loadLocale(locale, weights, index) {
    return new Promise(function (resolve, reject) {
      var localeIndex = index || 0;
      if (localeIndex >= fonts[locale].length) {
        reject(new Error('No more fallback fonts available.'));
      }
      var promises = [];
      var font = fonts[locale][localeIndex];
      var reqs = getFontReqsByWeights(font, weights);
      reqs.forEach(function (req) {
        req.forEach(function (weight) {
          injectFontCss(weight.url);
          promises.push(observeFontLoad(font, locale, weight, localeIndex));
        });
      });
      Promise.all(promises).then(function () {
        resolve();
      }).catch(function (err) {
        reject(err);
      });
    });
  }
  function observeFontLoad(font, locale, weight, index) {
    return new Promise(function (resolve, reject) {
      var observer = new FontFaceObserver(font.fam, { weight: weight.weight });
      observer.load(font.test).then(function (f) {
        console.log('Loaded font: "' + f.family + '", weight: ' + f.weight);
        resolve();
      }).catch(function (err) {
        console.log('Failed to load font: "' + font.fam + '", weight: ' + weight.weight);
        // recurse to next locale for failed weight load
        loadLocale(locale, [weight.weight], index + 1).then(function () {
          resolve();
        }).catch(function (err) {
          reject(err);
        });
      });
    });
  }
  function injectFontCss(url) {
    console.log('injectFontCss()', url);
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
    head.appendChild(link);
  }

  /**
   * Utilities
   *
   */
  function pushUnique(arr, val) {
    if (val && arr.indexOf(val) === -1) {
      arr.push(val);
    }
    return arr;
  }

  /**
   * Element declaration
   *
   */
  if (document.registerElement) {
    var component = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function value() {
          console.log('created');
          this._attached = false;
          this._hasInited = false;
        }
      },
      detachedCallback: {
        value: function value() {
          this._attached = false;
        }
      },
      attachedCallback: {
        value: function value() {
          var dom = this;

          this._attached = true;
          if (this._hasInited) {
            return;
          }
          this._hasInited = true;

          Utils.createStyle.call(dom, '', '.en, .da, .nl, .fi, .fr, .de, .it, .no, .pt, .ro, .es, .sv, .tr, .pl, .el', "font-family: 'Netflix Sans', Helvetica, Arial, sans-serif;", '.zh', "-webkit-locale: 'zh'; font-family: 'Netflix Sans', 'Microsoft JhengHei UI', '微軟正黑體', 'Heiti TC', '黑体-简', Arial, Helvetica, sans-serif;", '.ja', "-webkit-locale: 'ja'; font-family: 'Netflix Sans', 'Yu Gothic Medium', 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ', Arial, Helvetica, sans-serif;", '.ko', "-webkit-locale: 'ko'; font-family: 'Netflix Sans', 'Malgun Gothic', '맑은 고딕', 'Apple SD Gothic Neo', '애플 SD 산돌고딕 Neo', Arial, Helvetica, sans-serif;", '.ar', "font-family: 'Netflix Sans', 'Neue Helvetica Arab', 'Changa', 'Droid Arabic Kufi', Arial, sans-serif;", '.th', "font-family: 'Netflix Sans', 'Neue Helvetica Thai', 'Prompt', Arial, sans-serif;", '.th .cta_copy', 'margin-top: -2px;', '.he', "font-family: 'Netflix Sans', 'Noto Sans Hebrew', 'Assistant', 'Rubik', Arial, sans-serif;");

          // @param: locale
          var locales = this.getAttribute('locale') ? this.getAttribute('locale').split(/\s*,\s*/) : null;

          // @param: weights
          var weights = [];
          // light
          if (this.hasAttribute('light') && this.getAttribute('light').toString() !== 'false') {
            weights.push('light');
          }
          // normal, will load by default, unless explicitly turned off
          if (this.hasAttribute('normal')) {
            if (this.getAttribute('normal').toString() !== 'false') {
              weights.push('normal');
            }
          } else {
            weights.push('normal');
          }
          // bold
          if (this.hasAttribute('bold') && this.getAttribute('bold').toString() !== 'false') {
            weights.push('bold');
          }

          var MonetComponent = document.querySelector('monet-integrator');
          if (MonetComponent) {
            MonetComponent.register(this);
            MonetComponent.getMonetData().then(function (data) {
              var monetLocales = [];
              try {
                for (var i in data.rootAssets) {
                  if (i.split('.')[0] === 'text') {
                    var monetLocale = Monet.getComponentLocale(i).substr(0, 2); // this doesn't catch correctly if data is not present, bc MI doesn't reject the promise
                    monetLocales = pushUnique(monetLocales, monetLocale);
                  }
                }
                loadFonts(dom, locales || monetLocales, weights);
              } catch (e) {
                MonetComponent.getBackupMonetData().then(function (backupData) {
                  for (var i in backupData.rootAssets) {
                    if (i.split('.')[0] === 'text') {
                      monetLocale = Monet.getComponentLocale(i).substr(0, 2); // this doesn't catch correctly if data is not present, bc MI doesn't reject the promise
                      monetLocales = pushUnique(monetLocales, monetLocale);
                    }
                  }
                  loadFonts(dom, locales || monetLocales, weights);
                }, function (error) {
                  Monet.logEvent('MONET_DATA_ERROR', { details: 'Failed to load backup Monet data', stack: error });
                });
              }
            });
          }
        }
      },
      preview: {
        value: function value() {
          return false;
        }
      }
    });
    document.registerElement(COMPONENT_NAME, { prototype: component });
  }
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-fonts/main.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-fonts/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fontfaceobserverEs = __webpack_require__(/*! fontfaceobserver-es */ "./1-build/node_modules/fontfaceobserver-es/dist/fontfaceobserver.esm.js");

var _fontfaceobserverEs2 = _interopRequireDefault(_fontfaceobserverEs);

__webpack_require__(/*! ./NetflixFontsComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-fonts/NetflixFontsComponent.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.FontFaceObserver = _fontfaceobserverEs2.default;

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-img/1bf7de1b-e68a-454b-978e-1fda0c6352a9.js":
/*!****************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-img/1bf7de1b-e68a-454b-978e-1fda0c6352a9.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-img
if (false) {}
// prettier-ignore
module.exports = {
  "id": "1bf7de1b-e68a-454b-978e-1fda0c6352a9",
  "name": "wc-netflix-img",
  "description": "A lightweight component for images that allows dynamic binding for the source",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544729240150,
  "full_name": "NetflixAdsEng/wc-netflix-img",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-img",
  "username": "GitHub",
  "version": "4.2.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-img/NetflixImageComponent.js":
/*!*************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-img/NetflixImageComponent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var COMPONENT_NAME = 'netflix-img';

  if (document.registerElement) {
    var component = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function value() {
          var img = document.createElement('img');
          this.appendChild(img);
          this._attached = false;
          this._hasInited = false;
        }
      },
      detachedCallback: {
        value: function value() {
          this._attached = false;
        }
      },
      attachedCallback: {
        value: function value() {
          this._attached = true;

          if (this._hasInited) {
            return;
          }

          this._hasInited = true;

          var dom = this;
          var img = this.children[0];

          var height = dom.getAttribute('height');
          var width = dom.getAttribute('width');
          if (width) img.setAttribute('width', width);
          if (height) img.setAttribute('height', height);

          var MonetComponent = document.querySelector('monet-integrator');
          if (MonetComponent) {
            MonetComponent.register(this);

            MonetComponent.getMonetData().then(function (data) {
              var imgPath;
              var bindSrc = dom.getAttribute('data-dynamic-key');

              var imgId = dom.getAttribute('id');

              try {
                // absolute paths eg. assets/img.png
                if (/\.(jpe?g|png|gif|svg)$/i.test(bindSrc) || /\.(nflximg.net)/i.test(bindSrc)) {
                  imgPath = bindSrc;
                  img.setAttribute('src', bindSrc);
                } else {
                  imgPath = data.rootAssets['image.' + bindSrc].url;
                  img.setAttribute('src', imgPath);
                }
              } catch (e) {
                MonetComponent.getBackupMonetData().then(function (backupData) {
                  if (backupData.rootAssets['image.' + bindSrc]) {
                    imgPath = backupData.rootAssets['image.' + bindSrc].url;
                    img.setAttribute('src', imgPath);
                  } else {
                    console.warn('Image source incorrectly set!');
                    dom.dispatchEvent(new CustomEvent('ready'));
                  }
                }, function (error) {
                  console.error('Failed to load backup Monet data', error);
                });
              }

              if (imgId) {
                img.setAttribute('id', imgId + '-img');
              }
            });
          }

          img.onload = img.onerror = function (event) {
            dom.style.width = img.width + 'px';
            dom.style.height = img.height + 'px';
            img.style.position = 'absolute';
            dom.dispatchEvent(new CustomEvent('ready'));
          };
        }
      },

      preview: {
        value: function value() {
          var imgPath = '//ae.nflximg.net/monet/img/c20/netflix_placement.svg';
          this.children[0].setAttribute('src', imgPath);
          this.setAttribute('width', 300);
          this.setAttribute('height', 300);
        }
      }
    });

    if (document.createElement(COMPONENT_NAME).constructor.__proto__ !== window.HTMLElement) {
      document.registerElement(COMPONENT_NAME, { prototype: component });
    }
  }
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-img/main.js":
/*!********************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-img/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./1bf7de1b-e68a-454b-978e-1fda0c6352a9.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-img/1bf7de1b-e68a-454b-978e-1fda0c6352a9.js");

__webpack_require__(/*! ./NetflixImageComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-img/NetflixImageComponent.js");

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-text/43232d9b-3b05-4471-9dfe-d0f9815c0e0a.js":
/*!*****************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-text/43232d9b-3b05-4471-9dfe-d0f9815c0e0a.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-text
if (false) {}
// prettier-ignore
module.exports = {
  "id": "43232d9b-3b05-4471-9dfe-d0f9815c0e0a",
  "name": "wc-netflix-text",
  "description": "A simple text component to allow dynamic binding",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544729396093,
  "full_name": "NetflixAdsEng/wc-netflix-text",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-text",
  "username": "GitHub",
  "version": "4.1.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-text/NetflixTextComponent.js":
/*!*************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-text/NetflixTextComponent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  // remove any tags, replace <br> with \n and render back to innerHTML
  function safeBRReplace(str) {
    var frag = document.createDocumentFragment();
    frag.textContent = str.replace(/<br\s*\/?>/gm, '\n');
    return frag.textContent.replace(/\n/gm, '<br>');
  }

  if (document.registerElement) {
    var COMPONENT_NAME = 'netflix-text';

    var component = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function value() {
          var textSpan = document.createElement('span');
          this.appendChild(textSpan);
          this._attached = false;
          this._hasInited = false;
        }
      },
      detachedCallback: {
        value: function value() {
          this._attached = false;
        }
      },
      attachedCallback: {
        value: function value() {
          this._attached = true;

          if (this._hasInited) {
            return;
          }

          this._hasInited = true;

          var dom = this;
          var textSpan = this.children[0];

          var MonetComponent = document.querySelector('monet-integrator');
          if (MonetComponent) {
            MonetComponent.register(this);
            MonetComponent.getMonetData().then(function (data) {
              var bindSrc = dom.getAttribute('data-dynamic-key');
              if (bindSrc.split('.').length == 1) {
                bindSrc = 'rootAssets["text.' + bindSrc + '"].text';
              }

              try {
                var dynamicText = eval('data.' + bindSrc);
                if (dynamicText) {
                  textSpan.innerHTML = safeBRReplace(dynamicText);
                  textSpan.classList.add(Monet.getComponentLocale('text.' + dom.getAttribute('data-dynamic-key')).substr(0, 2));
                }

                dom.dispatchEvent(new CustomEvent('ready'));
              } catch (e) {
                console.error('Monet dynamic ID not found in JSON: ', bindSrc, 'trying backup');

                MonetComponent.getBackupMonetData().then(function (backupData) {
                  if (backupData) {
                    var dynamicText = eval('backupData.' + bindSrc);
                    textSpan.innerHTML = safeBRReplace(dynamicText);
                    textSpan.classList.add(Monet.getComponentLocale('text.' + dom.getAttribute('data-dynamic-key')).substr(0, 2));
                  }
                  dom.dispatchEvent(new CustomEvent('ready'));
                }, function (error) {
                  console.error('Failed to load backup Monet data', error);
                });
              }
            });
          } else {
            console.warn('No "monet-integrator" component found. Dynamic binding is disabled');
          }
        }
      },

      preview: {
        value: function value() {
          this.children[0].innerHTML = 'This is a preview of the text component.';
          // ensure the preview in C2.0 doesn't get cut off
          this.style.height = '40px';
          this.style.display = 'inline-block';
        }
      }
    });
    if (document.createElement(COMPONENT_NAME).constructor.__proto__ !== window.HTMLElement) {
      document.registerElement(COMPONENT_NAME, { prototype: component });
    }
  }
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-text/main.js":
/*!*********************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-text/main.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./43232d9b-3b05-4471-9dfe-d0f9815c0e0a.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-text/43232d9b-3b05-4471-9dfe-d0f9815c0e0a.js");

__webpack_require__(/*! ./NetflixTextComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-text/NetflixTextComponent.js");

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-video/5aacacc2-df1a-4028-9335-6b767bf96670.js":
/*!******************************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-video/5aacacc2-df1a-4028-9335-6b767bf96670.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERIC SOURCE TRACKER: wc-netflix-video
if (false) {}
// prettier-ignore
module.exports = {
  "id": "5aacacc2-df1a-4028-9335-6b767bf96670",
  "name": "wc-netflix-video",
  "description": "A simple video player component for ads",
  "type": "web_components",
  "context": "Default",
  "state": "published",
  "updated": 1544729972330,
  "full_name": "NetflixAdsEng/wc-netflix-video",
  "html_url": "https://github.com/NetflixAdsEng/wc-netflix-video",
  "username": "GitHub",
  "version": "4.1.0",
  "minimum": "3.0.0"
};

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-video/NetflixVideoComponent.js":
/*!***************************************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-video/NetflixVideoComponent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function () {
  var COMPONENT_NAME = 'netflix-video';

  // checks for existing Utils from shared / imported Utils methods
  window.Utils = function (Utils) {
    Utils.tracker = function (s, u, d) {
      if (this.suppressLog) {
        this.suppressLog = false;
        return;
      }
      if (typeof Monet !== 'undefined') {
        Monet.logEvent(s, { url: u, pos: d.time });
      }
      if (typeof Enabler !== 'undefined') {
        switch (s) {
          case 'VIDEO_FIRST_QUART':
            Enabler.counter('VIDEO_FIRST_QUART');
            break;
          case 'VIDEO_SECOND_QUART':
            Enabler.counter('VIDEO_SECOND_QUART');
            break;
          case 'VIDEO_THIRD_QUART':
            Enabler.counter('VIDEO_THIRD_QUART');
            break;
          case 'VIDEO_PLAY':
            Enabler.counter('VIDEO_PLAY');
            break;
          case 'VIDEO_COMPLETE':
            Enabler.counter('VIDEO_COMPLETE');
            break;
          case 'VIDEO_PAUSE':
            Enabler.counter('VIDEO_PAUSE');
            break;
          case 'VIDEO_STOP':
            Enabler.counter('VIDEO_STOP');
            break;
          case 'VIDEO_UNMUTE':
            Enabler.counter('VIDEO_UNMUTE');
            break;
          case 'VIDEO_MUTE':
            Enabler.counter('VIDEO_MUTE');
            break;
        }
      }
    };

    Utils.isAutoplayAvailable = function () {
      if (!this.isMobile) return true;
      if (!this.isiOS) {
        return true;
      } else if (this.isSafari) {
        if (this.isiPad) var os = Number(navigator.userAgent.split('iPad')[1].split(' ')[3].replace('_', '.'));else var os = navigator.userAgent.split('iPhone OS ')[1].split(' ')[0].split('_')[0];
        if (os >= 10) return true;else return false;
      } else {
        return false;
      }
    };

    Utils.timeFormat = function (time) {
      var sn = parseInt(time, 10);
      var h = Math.floor(sn / 3600);
      var m = Math.floor((sn - h * 3600) / 60);
      var s = sn - h * 3600 - m * 60;
      if (m < 10) {
        m = m;
      }
      if (s < 10) {
        s = '0' + s;
      }
      var t = (m || 0) + ':' + (s || '00');
      return t;
    };

    Utils.hide = function (el) {
      el.classList.add('hide');
    };
    Utils.show = function (el) {
      el.classList.remove('hide');
    };

    return Utils;
  }(window.Utils || {});

  var VideoSource = function (id, config) {
    function VideoSource(id, config) {
      this._id = id;
      this.id = id;
      this.title = config.sources[id].split('/').pop().split('.')[0];
      this.plays = 0;
      this.completed = 0;
      this.layers = [];
      this.source = config.sources[id];
      this.customControls = config.customControls[id] || false;
      this.controls = config.controls[id] === undefined ? true : config.controls[id];
      this.muted = config.muted[id] || false;
      this.hideOnComplete = config.hideOnComplete[id] || false;
    }

    VideoSource.prototype.hasBeenPlayed = function () {
      return Boolean(this.plays);
    };
    return VideoSource;
  }();

  var NetflixVideo = function (component, config) {
    function NetflixVideo(component, config) {
      this.component = component;
      this.config = config;
      this.sources = [];
      this.wrapper = document.createElement('div');
      this.closeButton = createCloseButton.call(this);
      this.closeButtonSvg = this.closeButton.getElementsByTagName('svg')[0];
      this.container = document.createElement('div');
      this.container.className = 'netflix-video-container';
      this.clickArea = document.createElement('div');

      this.closeButton.classList.add('close');
      this.clickArea.classList.add('videoClick');
      this.wrapper.classList.add('netflix-video');
      this.wrapper.appendChild(this.container);
      this.wrapper.appendChild(this.clickArea);
      this.wrapper.appendChild(this.closeButton);
      this.component.appendChild(this.wrapper);

      for (var i = 0; i < this.config.sources.length; i++) {
        this.sources.push(new VideoSource(i, this.config));
        this.sources[i].muted = this.config.muted[i];
      }

      this.stopTimer = function () {
        this.playing = false;
        this.component.playing = false;
        clearInterval(this.timer);
        setTimeDisplay.call(this);
      };

      style.call(this);
      buildControls.call(this);
      createPlayer.call(this);

      function createPlayer() {
        var id = 0;
        this.id = id;
        this.video_id = this.component.getAttribute('video_id');

        this.PlayerState = {
          ENDED: 'ended',
          PLAYING: 'loadeddata',
          PAUSED: 'pause',
          CUED: 'loadstart',
          BUFFERING: 'play',
          LOADED: 'loadeddata',
          VOLUME: 'volumechange'
        };

        this._video = document.createElement('video');
        this._video.width = this.config.size[id] ? this.config.size[id].width : this.config.size[0].width;
        this._video.height = this.config.size[id] ? this.config.size[id].height : this.config.size[0].height;

        this._video.addEventListener('ended', onStateChanged.bind(this));
        this._video.addEventListener('play', onStateChanged.bind(this));
        this._video.addEventListener('pause', onStateChanged.bind(this));
        this._video.addEventListener('volumechange', onStateChanged.bind(this));
        this._video.addEventListener('loadeddata', onStateChanged.bind(this));

        this.spinner = document.createElement('div');
        this.wrapper.insertBefore(this.spinner, this.wrapper.firstChild);
        this.spinner.classList.add('spinner');
        this.spinner.innerHTML = '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"> <defs> <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"> <stop stop-color="#fff" stop-opacity="0" offset="0%"/> <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/> <stop stop-color="#fff" offset="100%"/> </linearGradient> </defs> <g fill="none" fill-rule="evenodd"> <g transform="translate(1 1)"> <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/> </path> <circle fill="#fff" cx="36" cy="18" r="1"> <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/> </circle> </g> </g></svg>';
        Utils.createStyle.call(this.component, COMPONENT_NAME, '.spinner', 'position:absolute;top:50%;left:50%;width:38px;height:38px;transform:translate(-50%,-50%)');

        this._video.removeAttribute('controls');
        this.container.appendChild(this._video);
        this.video = {
          cueVideoById: function (src) {
            var htmlElem = document.getElementsByTagName('html')[0];
            var isInception = htmlElem.hasAttribute('monet-inception-pristine-element');
            if (typeof Enabler !== 'undefined' && !isInception) {
              this._video.src = Enabler.getUrl(src);
            } else {
              this._video.src = src;
            }
          }.bind(this),
          getDuration: function () {
            return this._video.duration;
          }.bind(this),
          getCurrentTime: function () {
            return this._video.currentTime;
          }.bind(this),
          isMuted: function () {
            return this._video.muted;
          }.bind(this),
          pauseVideo: function () {
            this._video.pause();
          }.bind(this),
          playVideo: function () {
            // if (!Utils.isMobile)
            this._video.play();
          }.bind(this),
          unMute: function () {
            this._video.muted = false;
          }.bind(this),
          mute: function () {
            this._video.muted = true;
          }.bind(this),
          seekTo: function (t) {
            this._video.currentTime = t;
          }.bind(this)
        };

        this.resize();
        setEvents.call(this);
        this.hide();

        if (Utils.isAutoplayAvailable() && this.config.autoplay === true) {
          if (typeof gwd != 'undefined') {
            this.show();
            this.setSource(0);
            this._video.setAttribute('autoplay', '');
            if (Utils.isMobile) {
              this._video.setAttribute('playsinline', '');
              this._video.setAttribute('muted', '');
            }
          } else {
            this.play(0);
          }
        }

        if (typeof Enabler != 'undefined') Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
          studio.video.Reporter.attach('Video ' + this.video_id, this._video);
        }.bind(this));
      }

      function style() {
        Utils.createStyle.call(this.component, COMPONENT_NAME, '.hide', 'border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important;position: absolute !important;width: 1px !important;', ['.hide', true], 'border: 0 !important;clip: rect(0 0 0 0) !important;height: 1px !important;margin: -1px !important;overflow: hidden !important;padding: 0 !important;position: absolute !important;width: 1px !important;', '.netflix-video', 'background-color:#000; position: absolute; top: 0; left: 0;', '.netflix-video .netflix-video-container', 'position:absolute;top:0;left:0;', '.netflix-video .videoClick', 'position:absolute;top:0;left:0;cursor:pointer;width:100%;height:100%;background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);', '.netflix-video .close', 'position:absolute;top:10px;left:10px;z-index:15;cursor:pointer;width:' + this.config.closeButtonSize + 'px;height:' + this.config.closeButtonSize + 'px;overflow:hidden;', '.netflix-video .videoPanels', 'width:100%;height:100%;position:absolute;pointer-events:none;', '.netflix-video .iVideoPanels', 'width:0;height:0;position:absolute;', '.netflix-video .controls', 'z-index:12;position:absolute;bottom:1px;width:100%;', '.netflix-video .playButton.v_icon', 'margin-left:5px;', '.netflix-video .v_icon', 'width:25px;height:25px;float:left;cursor:pointer;', '.netflix-video .timer', 'float:left;font-family:Arial,sans-serif;font-weight:700;font-size:12px;letter-spacing:1px;text-shadow:0 1px 2px rgba(0,0,0,.5);line-height:26px;margin-left:9px;pointer-events:none;');
      }

      function svgButton(id, hover) {
        var i = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        i.setAttribute('width', '25px');
        i.setAttribute('height', '25px');
        i.setAttribute('viewBox', '0 0 50 50');
        i.id = id || '';
        i.hover = hover;
        return i;
      }

      function createCloseButton() {
        var w = 20;
        var wrapper = document.createElement('div');
        var i = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        i.setAttribute('width', w + 'px');
        i.setAttribute('height', w + 'px');
        i.fill = new Utils.SvgIcon('closeButtonFill', 'M0,' + w / 2 + 'a' + w / 2 + ',' + w / 2 + ' 0 1,0 ' + w + ',0a' + w / 2 + ',' + w / 2 + ' 0 1,0 -' + w + ',0', this.config.closeColors[0]);
        var a = Math.round(w * 0.7);
        var b = w - a;
        i.cross = new Utils.SvgIcon('line1', 'M' + b + ' ' + b + ' L' + a + ' ' + a + ' M' + a + ' ' + b + ' L' + b + ' ' + a + '');
        i.cross.setAttribute('stroke', this.config.closeColors[1]);
        i.cross.setAttribute('stroke-width', w < 15 ? 1 : 2);
        i.appendChild(i.fill);
        i.appendChild(i.cross);

        wrapper.appendChild(i);
        return wrapper;
      }

      function buildControls() {
        this.controls = document.createElement('div');
        TweenMax.set(this.controls, { y: this.config.contolsOffsetY });

        this.bar = document.createElement('div');
        this.bar.classList.add('bar');
        this.bar.innerHTML = '<div class="track"></div>';
        this.barFill = document.createElement('div');
        this.barFill.classList.add('fill');
        this.barFill.style.backgroundColor = this.config.colors[0];
        this.barIndicator = document.createElement('div');
        this.barIndicator.classList.add('indicator');
        this.barIndicator.style.backgroundColor = this.config.colors[0];
        this.bar.appendChild(this.barFill);
        this.bar.appendChild(this.barIndicator);
        Utils.hide(this.barIndicator);
        Utils.hide(this.bar);

        Utils.createStyle.call(this.component, COMPONENT_NAME, '.bar', 'height:15px; position: absolute; top: -10px; left: 10px; cursor:pointer;', '.bar .track', 'width:100%;height:1px; background-color: ' + this.config.colors[1] + ';position: absolute; top: 10px; left: 0;', '.bar .fill', 'height:1px; position: absolute; top: 10px; left: 0;', '.bar .indicator', 'width:10px;height:10px; border-radius:5px; position: absolute; top: 5px; left: 0px;background-color:' + this.config.colors[1] + ';pointer-events: none;');

        if (this.config.controlsAutoHide) {
          this.controls.addEventListener('mouseover', function () {
            TweenMax.to(this.controls, 0.3, { alpha: 1, ease: Cubic.easeOut });
          }.bind(this));

          this.controls.addEventListener('mouseout', function () {
            if (this.playing) {
              TweenMax.to(this.controls, 1, { alpha: 0, ease: Cubic.easeOut });
            }
          }.bind(this));

          this.clickArea.addEventListener('mouseover', function () {
            TweenMax.to(this.controls, 0.3, { alpha: 1, ease: Cubic.easeOut });
          }.bind(this));

          this.clickArea.addEventListener('mouseout', function () {
            if (this.playing) {
              TweenMax.to(this.controls, 1, { alpha: 0, ease: Cubic.easeOut });
            }
          }.bind(this));
        }

        this.bar.addEventListener('click', function (e) {
          var p = e.offsetX / this.bar.getBoundingClientRect().width;
          this.seek(this.video.getDuration() * p);
        }.bind(this));

        this.bar.addEventListener('mouseover', function () {
          Utils.show(this.barIndicator);
          this.barFill.seeking = true;
          this.barFill.current = this.barFill.style.width;
        }.bind(this));

        this.bar.addEventListener('mouseout', function () {
          this.barFill.seeking = false;
          Utils.hide(this.barIndicator);
          this.barFill.style.width = this.barFill.current;
        }.bind(this));

        this.bar.addEventListener('mousemove', function (e) {
          if (e.offsetX < this.bar.getBoundingClientRect().width - 6 && e.offsetX > 6) TweenMax.set(this.barIndicator, { x: e.offsetX - 6 });
          var p = e.offsetX / this.bar.getBoundingClientRect().width * 100;
          TweenMax.set(this.barFill, { width: p + '%' });
        }.bind(this));

        this.playButton = new svgButton(null, 'M16,15 L16,35 24,30 24,19 M24,19 L24,30 35,25 35,25');
        this.playButton.icon = new Utils.SvgIcon('svgIcon', 'M16,15 L16,36 23,36 23,15 M28,15 L28,36 35,36 35,15', this.config.colors[0]);
        this.playButton.appendChild(this.playButton.icon);

        this.playButton.tween = {
          play: function () {
            this.icon.setAttributeNS(null, 'd', this.hover);
          }.bind(this.playButton),
          reverse: function () {
            this.icon.setAttributeNS(null, 'd', this.icon.getAttribute('data-original'));
          }.bind(this.playButton)
        };

        this.muteButton = new svgButton(null, 'M35,20 L46,31 M35,31 L46,20');
        this.muteButton.fill = new Utils.SvgIcon('', 'M13,20 L13,31 21,31 29,37 31,37 31,14 29,14 21,20 13,20 M35,20 L45,30', this.config.colors[0]);
        this.muteButton.appendChild(this.muteButton.fill);
        this.muteButton.icon = new Utils.SvgIcon('svgIcon', 'M35,20 A5,5 0 0,1 35,31', this.config.colors[0]);
        this.muteButton.icon.setAttribute('stroke', this.config.colors[0]);
        this.muteButton.icon.setAttribute('stroke-width', '3');
        this.muteButton.icon.setAttribute('fill-opacity', '0');
        this.muteButton.appendChild(this.muteButton.icon);

        this.muteButton.tween = {
          play: function () {
            this.icon.setAttributeNS(null, 'd', this.hover);
          }.bind(this.muteButton),
          reverse: function () {
            this.icon.setAttributeNS(null, 'd', this.icon.getAttribute('data-original'));
          }.bind(this.muteButton)
        };

        this.timerView = document.createElement('div');
        this.playButton.classList.add('playButton');
        this.playButton.classList.add('v_icon');
        this.muteButton.classList.add('muteButton');
        this.muteButton.classList.add('v_icon');
        this.timerView.className = 'timer';
        this.timerView.style.color = this.config.colors[0];

        this.controls.classList.add('controls');

        this.controls.appendChild(this.playButton);
        this.controls.appendChild(this.muteButton);
        this.controls.appendChild(this.timerView);
        this.controls.appendChild(this.bar);
        this.wrapper.appendChild(this.controls);

        if (Utils.isiOS) Utils.hide(this.muteButton);

        this.playButton.addEventListener('click', togglePlay.bind(this));
        this.playButton.addEventListener('mouseover', function () {
          TweenMax.to(this.playButton.icon, 0.2, { fill: this.config.colors[1], ease: Quad.easeOut });
        }.bind(this));
        this.playButton.addEventListener('mouseout', function () {
          TweenMax.to(this.playButton.icon, 0.2, { fill: this.config.colors[0], ease: Quad.easeOut });
        }.bind(this));

        this.muteButton.addEventListener('click', toggleMute.bind(this));
        this.muteButton.addEventListener('mouseover', function () {
          TweenMax.to(this.muteButton.icon, 0.2, {
            fill: this.config.colors[1],
            stroke: this.config.colors[1],
            ease: Quad.easeOut
          });
          TweenMax.to(this.muteButton.fill, 0.2, { fill: this.config.colors[1], ease: Quad.easeOut });
        }.bind(this));
        this.muteButton.addEventListener('mouseout', function () {
          TweenMax.to(this.muteButton.icon, 0.2, { stroke: this.config.colors[0], ease: Quad.easeOut });
          TweenMax.to(this.muteButton.fill, 0.2, { fill: this.config.colors[0], ease: Quad.easeOut });
        }.bind(this));

        if (this.config.customControlsMobile) {
          TweenMax.set([this.playButton, this.muteButton], { scale: 1.5 });
        }

        this.playButton.classList.remove('pause');
        this.playButton.tween.play();
      }

      function togglePlay() {
        if (this._video.paused) {
          this.resume();
        } else {
          this.pause();
          Utils.tracker('VIDEO_PAUSE', this.currentVideo.source, { time: this.video.getCurrentTime() });
        }
      }

      function toggleMute() {
        if (this.video.isMuted()) {
          this.unmute();
        } else {
          this.mute();
        }
      }

      function startTimer() {
        clearInterval(this.timer);
        this.playing = true;
        this.component.playing = true;
        this.timer = setInterval(function setInterval() {
          timeStep.call(this);
        }.bind(this), 10);
        timeStep.call(this);
      }

      function timeStep() {
        if (this.video.getDuration()) {
          setTimeDisplay.call(this);
          var p = this.video.getCurrentTime() / this.video.getDuration();
          if (!this.barFill.seeking) this.barFill.style.width = p * 100 + '%';
        }

        this.component.dispatch('video-time', {
          currentTime: this.video.getCurrentTime(),
          duration: this.video.getDuration() || 0,
          target: this.component
        });

        switch (Math.round(p * 100)) {
          case 25:
            if (!this.currentVideo.firstQuart) {
              Utils.tracker('VIDEO_FIRST_QUART', this.currentVideo.source, { time: this.video.getCurrentTime() });
              this.currentVideo.firstQuart = true;
            }
            break;

          case 50:
            if (!this.currentVideo.secondQuart) {
              Utils.tracker('VIDEO_SECOND_QUART', this.currentVideo.source, { time: this.video.getCurrentTime() });
              this.currentVideo.secondQuart = true;
            }
            break;

          case 75:
            if (!this.currentVideo.thirdQuart) {
              Utils.tracker('VIDEO_THIRD_QUART', this.currentVideo.source, { time: this.video.getCurrentTime() });
              this.currentVideo.thirdQuart = true;
            }
            break;
        }
      }

      function setTimeDisplay(current) {
        this.timerView.innerHTML = this.timerView.innerHTML = Utils.timeFormat(current || Math.round(this.video.getCurrentTime())) + ' / ' + Utils.timeFormat(Math.round(this.video.getDuration()));
      }

      function setEvents() {
        this.clickArea.addEventListener('click', onVideoClick.bind(this));

        this.closeButton.addEventListener('click', this.close.bind(this));

        this.closeButton.addEventListener('mouseover', function () {
          TweenMax.to(this.closeButtonSvg.fill, 0.3, { fill: this.config.closeColors[1], ease: Quad.easeOut });
          this.closeButtonSvg.cross.setAttribute('stroke', this.config.closeColors[0]);
        }.bind(this));
        this.closeButton.addEventListener('mouseout', function () {
          TweenMax.to(this.closeButtonSvg.fill, 0.3, { fill: this.config.closeColors[0], ease: Quad.easeOut });
          this.closeButtonSvg.cross.setAttribute('stroke', this.config.closeColors[1]);
        }.bind(this));
      }

      function onVideoClick() {
        this.component.dispatch('video-click');
      }

      function onStateChanged(e) {
        switch (e.data != undefined ? e.data : e.type) {
          case 'ended':
            this.active = false;
            onVideoEnded.call(this);
            break;
          case 'loadeddata':
            if (!this.active || this.initPlay) {
              this.initPlay = false;
              onVideoPlay.call(this);
            }
            this.active = true;
            break;
          case 'pause':
            this.component.dispatch('video-pause');
            onVideoPause.call(this);
            break;
          case 'play':
            if (this.ended) onVideoPlay.call(this);
            this.ended = false;
            Utils.tracker('VIDEO_PLAY', this.currentVideo.source, { time: this.video.getCurrentTime() });
            this.component.dispatch('video-play');
            break;
        }
      }

      function onVideoEnded() {
        if (this.currentVideo.hideOnComplete) {
          this.hide();
        }

        this.stopTimer();

        this.initPlay = true;
        this.ended = true;
        this.playing = false;
        this.playButton.classList.remove('pause');
        this.playButton.tween.play();
        this.barFill.style.width = '100%';
        this.barFill.current = this.barFill.style.width;

        Utils.tracker('VIDEO_COMPLETE', this.currentVideo.source, { time: this.video.getCurrentTime() });
        this.component.dispatch('video-complete');
        this.currentVideo.completed++;
      }

      function onVideoPlay() {
        startTimer.call(this);
        Utils.show(this.container);
        this.playButton.classList.add('pause');
        this.playButton.tween.reverse();
        if (this.config.controlsAutoHide && this.config.controlsAutoHide[this.id]) {
          TweenMax.to(this.controls, 2, { alpha: 0, delay: 2, ease: Cubic.easeOut });
        }
        this.currentVideo.duration = this.video.duration;
        if (this.autoplay == true) {
          this.autoplay = false;
        }

        this.currentVideo.plays++;
      }

      function onVideoPause() {
        this.playButton.classList.remove('pause');
        this.playButton.tween.play();
      }
    }

    NetflixVideo.prototype.resize = function (size) {
      size = size || {};
      var i = this.config.size[this.id] ? this.id : 0;
      this.previousSize = { width: this.width, height: this.height };
      this.width = size.width || this.config.size[i].width;
      this.height = size.height || this.config.size[i].height;

      this.container.setAttribute('width', this.width);
      this.container.setAttribute('height', this.height);

      TweenMax.set(this.bar, { width: this.width - 20 });
      TweenMax.set([this.container, this._video, this.wrapper, this.component], { width: this.width, height: this.height });
    };

    NetflixVideo.prototype.setSource = function (id) {
      this.videoLoaded = this.currentVideo === this.sources[id];
      this.currentVideo = this.sources[id];
      this.currentVideo.firstQuart = false;
      this.currentVideo.secondQuart = false;
      this.currentVideo.thirdQuart = false;

      this.video.id = 'video_' + id;
      this.active = false;

      this.resize(this.config.size[id]);

      if (this.config.showBar[id] !== undefined) {
        if (this.config.showBar[id]) Utils.show(this.bar);else Utils.hide(this.bar);
      } else {
        if (this.config.showBar[0]) Utils.show(this.bar);else Utils.hide(this.bar);
      }

      if (!this.currentVideo.customControls) this.disableCustomControls();
      if (this.currentVideo.controls) this.enableControls();
      if (!this.currentVideo.controls) this.disableControls();
      if (this.currentVideo.customControls) this.enableCustomControls();

      this.playHistory = this.playHistory || [];
      this.playHistory.push(this.currentVideo);

      Utils.suppressLog = true;

      if (this.currentVideo.muted) {
        this.mute();
      } else {
        this.unmute();
      }

      this.timerView.innerHTML = '';
      this.video.cueVideoById(this.currentVideo.source);
    };

    NetflixVideo.prototype.play = function (id) {
      this.initPlay = true;

      if (id === -1) {
        this.autoplay = true;
      }

      if (!this.sources.length) return;

      id = this.sources[id] ? id : this.currentVideo ? this.currentVideo._id : 0;

      if (this.config.fullscreen[typeof this.config.fullscreen[id] === 'undefined' ? 0 : id] && id !== -1) {
        this.enterFullscreen();
      }

      this.load(id);

      this.videoPlays = this.videoPlays || {};
      this.videoPlays[id] = this.videoPlays[id] ? this.videoPlays[id] + 1 : 1;

      this.resume();
    };

    NetflixVideo.prototype.pause = function (time) {
      this.initPlay = true;
      this.video.pauseVideo();

      if (time !== null && time !== undefined) {
        this.seek(time);
      }

      this.playing = false;
      this.component.playing = false;
    };

    NetflixVideo.prototype.stop = function () {
      this.initPlay = true;
      if (this._video.ended) return;
      this.pause(0, false);
      this.active = false;

      Utils.tracker('VIDEO_STOP', this.currentVideo.source, { time: this.video.getCurrentTime() });
      Utils.suppressLog = true;

      this.stopTimer();
    };

    NetflixVideo.prototype.resume = function () {
      this.playing = true;
      this.component.playing = true;
      this.video.playVideo();
      this.playButton.classList.add('pause');
      this.playButton.tween.reverse();
    };

    NetflixVideo.prototype.seek = function (time) {
      this.video.seekTo(time || 0);
      this.barFill.current = this.barFill.style.width;
    };

    NetflixVideo.prototype.unmute = function () {
      this.video.unMute();
      this.currentVideo.muted = false;
      Utils.show(this.muteButton);
      this.muteButton.classList.add('unmute');
      this.muteButton.tween.reverse();
      Utils.tracker('VIDEO_UNMUTE', this.currentVideo.source, { time: this.video.getCurrentTime() });
    };

    NetflixVideo.prototype.mute = function () {
      this.video.mute();
      this.currentVideo.muted = true;
      this.muteButton.classList.remove('unmute');
      this.muteButton.tween.play();
      Utils.tracker('VIDEO_MUTE', this.currentVideo.source, { time: this.video.getCurrentTime() });
    };

    NetflixVideo.prototype.load = function (id) {
      if (!this.sources.length) return;

      this.show();

      this.setSource(id);

      if (this._video) this._video.load();
    };

    NetflixVideo.prototype.hide = function () {
      this.pause(null, false);
      Utils.hide(this.component);
      Utils.hide(this.container);
      Utils.hide(this.wrapper);
      this.stopTimer();
      this.active = false;
    };

    NetflixVideo.prototype.show = function () {
      Utils.show(this.component);
      Utils.show(this.wrapper);
      Utils.show(this.container);
    };

    NetflixVideo.prototype.close = function (e) {
      this.hide();
      if (this.currentVideo && this.currentVideo.source && e) {
        Utils.tracker('VIDEO_STOP', this.currentVideo.source, { time: this.video.getCurrentTime() });
      }
      this.component.dispatch('video-close');
    };

    NetflixVideo.prototype.enableCustomControls = function () {
      Utils.show(this.controls);
      Utils.show(this.clickArea);
      this._video.removeAttribute('controls');
    };

    NetflixVideo.prototype.disableCustomControls = function () {
      Utils.hide(this.controls);
      Utils.hide(this.clickArea);
      this._video.setAttribute('controls', 'controls');
    };

    NetflixVideo.prototype.enableControls = function () {
      Utils.hide(this.clickArea);
      this._video.setAttribute('controls', 'controls');
    };

    NetflixVideo.prototype.disableControls = function () {
      Utils.show(this.clickArea);
      this._video.removeAttribute('controls');
    };

    return NetflixVideo;
  }();

  // Component Definition
  (function () {
    var component = Object.create(HTMLElement.prototype, {
      createdCallback: {
        value: function value() {
          this._attached = false;
          this._hasInited = false;
        },
        enumerable: true
      },
      detachedCallback: {
        value: function value() {
          this._attached = false;
        }
      },
      attachedCallback: {
        value: function value() {
          this._attached = true;

          if (this._hasInited) {
            return;
          }

          this._hasInited = true;

          var videoComponent = this;

          this.toggle = true;
          this.width = parseInt(this.getAttribute('width') || this.offsetWidth);
          this.height = parseInt(this.getAttribute('height') || this.offsetHeight);

          var elements = document.querySelectorAll('netflix-video');

          for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute('video_id', i + 1);
            elements[i].style.position = 'absolute';
          }

          var config = this.config = {};
          config.size = [{
            width: this.width,
            height: this.height
          }];

          config.sources = [this.getAttribute('source')];
          config.closeButtonSize = 20;
          config.colors = [this.getAttribute('color-1'), this.getAttribute('color-2')];
          config.showBar = [true];
          config.controlsAutoHide = [this.hasAttribute('controlsAutoHide')];
          config.closeColors = [this.getAttribute('close-color-1') || this.getAttribute('color-1'), this.getAttribute('close-color-2') || this.getAttribute('color-2')];
          config.hideOnComplete = [this.hasAttribute('hideOnComplete')];
          config.customControls = [this.hasAttribute('controls')];
          config.controls = [false];
          config.fullscreen = [this.hasAttribute('fullscreen')];
          config.muted = [this.hasAttribute('muted')];
          config.autoplay = this.hasAttribute('autoplay');
          config.contolsOffsetY = this.getAttribute('controls-offset-y') || 0;

          if (config.autoplay) {
            config.muted[0] = true;
          }

          if (Utils.isMobile) {
            config.controls = [true];
            config.customControls = [false];
          }

          if (!this.getAttribute('data-dynamic-key')) {
            window.addEventListener('adinitialized', function () {
              this.video = new NetflixVideo(this, config);
            }.bind(this), false);
          } else {
            var MonetComponent = document.querySelector('monet-integrator');
            if (MonetComponent) {
              MonetComponent.register(this);
              MonetComponent.getMonetData().then(function (data) {
                var d = videoComponent.getAttribute('data-dynamic-key');

                try {
                  if (setVideoToggle(data)) {
                    config.sources = getVideoNode(data, d);
                    this.video = new NetflixVideo(this, config);
                    this.dispatchEvent(new CustomEvent('ready'));
                  }
                } catch (e) {
                  console.error('Monet dynamic ID:', d, 'not found in JSON. Trying backup');

                  MonetComponent.getBackupMonetData().then(function (backupData) {
                    if (setVideoToggle(backupData)) {
                      config.sources = getVideoNode(backupData, d);
                      this.video = new NetflixVideo(this, config);
                      this.dispatchEvent(new CustomEvent('ready'));
                    }
                  }.bind(this), function (error) {
                    console.error('Failed to load backup Monet data', error);
                  });
                }
              }.bind(this), function (error) {
                console.error('Failed to load Monet data', error);
              });
            } else {
              this.video = new NetflixVideo(this, config);
              this.dispatchEvent(new CustomEvent('ready'));
            }
          }

          function setVideoToggle(data) {
            var d = videoComponent.getAttribute('data-dynamic-key');
            if (data.rootAssets['bool.Toggle_' + d]) {
              if (!data.rootAssets['bool.Toggle_' + d].value) {
                videoComponent.dispatchEvent(new CustomEvent('ready'));
                return videoComponent.toggle = false;
              }
            }
            return true;
          }

          function getVideoNode(data, key) {
            var r = data.rootAssets;
            var types = ['video', 'url'];
            for (var i = 0; i < 2; i++) {
              var combo = types[i] + '.' + key;
              if (r[combo]) {
                return [r[combo].url];
              }
            }
            throw new Error('Monet dynamic ID: ' + key + ' not found in backup JSON');
          }
        },
        enumerable: true
      },

      play: {
        value: function value() {
          if (!this.toggle) {
            this.dispatch('video-complete');
          }
          if (this.video) {
            this.video.play();
          }
        }
      },

      pause: {
        value: function value() {
          if (this.video && this.toggle) {
            this.video.pause();
          }
        }
      },

      close: {
        value: function value(e) {
          if (this.video && this.toggle) {
            this.video.close(e);
          }
        }
      },

      mute: {
        value: function value() {
          if (this.video && this.toggle) {
            this.video.mute();
          }
        }
      },

      unmute: {
        value: function value() {
          if (this.video && this.toggle) {
            this.video.unmute();
          }
        }
      },

      seek: {
        value: function value(t) {
          if (this.video && this.toggle) {
            this.video.seek(t);
          }
        }
      },

      resize: {
        value: function value(w, h) {
          if (this.video && this.toggle) {
            this.video.resize({ width: w, height: h });
          }
        }
      },

      dispatch: {
        value: function value(e, d) {
          var customEvent = document.createEvent('CustomEvent');
          customEvent.initCustomEvent(e, !0, !0, d);
          this.dispatchEvent(customEvent);
        }
      },

      preview: {
        value: function value() {
          this.setAttribute('width', 300);
          this.setAttribute('height', 300);
          this.setAttribute('color-1', '#E50914');
          this.setAttribute('color-2', '#F5F5F1');
          this.setAttribute('close-color-1', '#E50914');
          this.setAttribute('close-color-2', '#F5F5F1');
          this.setAttribute('data-dynamic-key', 'Trailer');
          this.setAttribute('controls', 'true');
          this.setAttribute('autoplay', 'true');
          this.setAttribute('source', '//ae.nflximg.net/monet/video/fpo/1x1.mp4');
        }
      }
    });

    document.registerElement(COMPONENT_NAME, { prototype: component });
  })();
}();

/***/ }),

/***/ "./1-build/node_modules/@netflixadseng/wc-netflix-video/main.js":
/*!**********************************************************************!*\
  !*** ./1-build/node_modules/@netflixadseng/wc-netflix-video/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./NetflixVideoComponent.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-video/NetflixVideoComponent.js");

__webpack_require__(/*! ./5aacacc2-df1a-4028-9335-6b767bf96670.js */ "./1-build/node_modules/@netflixadseng/wc-netflix-video/5aacacc2-df1a-4028-9335-6b767bf96670.js");

/***/ }),

/***/ "./1-build/node_modules/fontfaceobserver-es/dist/fontfaceobserver.esm.js":
/*!*******************************************************************************!*\
  !*** ./1-build/node_modules/fontfaceobserver-es/dist/fontfaceobserver.esm.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* Font Face Observer v3.2.0 - © Bram Stein - Damien Seguin. License: BSD-3-Clause */
var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var styles = {
  maxWidth: "none",
  display: "inline-block",
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "scroll",
  fontSize: "16px"
};

var collapsibleInnerStyles = {
  display: "inline-block",
  height: "200%",
  width: "200%",
  fontSize: "16px",
  maxWidth: "none"
};

var fontStyle = {
  maxWidth: "none",
  minWidth: "20px",
  minHeight: "20px",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  width: "auto",
  margin: "0",
  padding: "0",
  top: "-999px",
  whiteSpace: "nowrap",
  fontSynthesis: "none"
};

var Ruler = function () {
  /**
   *
   * @param {string} text
   */
  function Ruler(text) {
    classCallCheck(this, Ruler);

    this.element = document.createElement("div");
    this.element.setAttribute("aria-hidden", "true");

    this.element.appendChild(document.createTextNode(text));

    this.collapsible = document.createElement("span");
    this.expandable = document.createElement("span");
    this.collapsibleInner = document.createElement("span");
    this.expandableInner = document.createElement("span");

    this.lastOffsetWidth = -1;

    Object.assign(this.collapsible.style, styles);
    Object.assign(this.expandable.style, styles);
    Object.assign(this.expandableInner.style, styles);
    Object.assign(this.collapsibleInner.style, collapsibleInnerStyles);

    this.collapsible.appendChild(this.collapsibleInner);
    this.expandable.appendChild(this.expandableInner);

    this.element.appendChild(this.collapsible);
    this.element.appendChild(this.expandable);
  }

  /**
   * @return {Element}
   */

  createClass(Ruler, [{
    key: "getElement",
    value: function getElement() {
      return this.element;
    }

    /**
     * @param {string} font
     */

  }, {
    key: "setFont",
    value: function setFont(font) {
      Object.assign(this.element.style, _extends({}, fontStyle, { font: font }));
    }

    /**
     * @return {number}
     */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.element.offsetWidth;
    }

    /**
     * @param {string} width
     */

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.element.style.width = width + "px";
    }

    /**
     * @private
     *
     * @return {boolean}
     */

  }, {
    key: "reset",
    value: function reset() {
      var offsetWidth = this.getWidth();
      var width = offsetWidth + 100;

      this.expandableInner.style.width = width + "px";
      this.expandable.scrollLeft = width;
      this.collapsible.scrollLeft = this.collapsible.scrollWidth + 100;

      if (this.lastOffsetWidth !== offsetWidth) {
        this.lastOffsetWidth = offsetWidth;
        return true;
      } else {
        return false;
      }
    }

    /**
     * @private
     * @param {function(number)} callback
     */

  }, {
    key: "onScroll",
    value: function onScroll(callback) {
      if (this.reset() && this.element.parentNode !== null) {
        callback(this.lastOffsetWidth);
      }
    }

    /**
     * @param {function(number)} callback
     */

  }, {
    key: "onResize",
    value: function onResize(callback) {
      var that = this;

      function onScroll() {
        that.onScroll(callback);
      }

      this.collapsible.addEventListener("scroll", onScroll);
      this.expandable.addEventListener("scroll", onScroll);
      this.reset();
    }
  }]);
  return Ruler;
}();

function onReady(callback) {
  document.body ? callback() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
    document.removeEventListener("DOMContentLoaded", c);
    callback();
  }) : document.attachEvent("onreadystatechange", function k() {
    if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), callback();
  });
}

/** Class for FontFaceObserver. */

var FontFaceObserver = function () {
  createClass(FontFaceObserver, null, [{
    key: "getUserAgent",

    /**
     * @return {string}
     */

    /**
     * @type {null|boolean}
     */

    /**
     * @type {null|boolean}
     */
    value: function getUserAgent() {
      return window.navigator.userAgent;
    }

    /**
     * @return {string}
     */

    /**
     * @type {number}
     */

    /**
     * @type {null|boolean}
     */

    /**
     * @type {null|boolean}
     */

  }, {
    key: "getNavigatorVendor",
    value: function getNavigatorVendor() {
      return window.navigator.vendor;
    }

    /**
     * Returns true if this browser is WebKit and it has the fallback bug which is
     * present in WebKit 536.11 and earlier.
     *
     * @return {boolean}
     */

  }, {
    key: "hasWebKitFallbackBug",
    value: function hasWebKitFallbackBug() {
      if (FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG === null) {
        var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(FontFaceObserver.getUserAgent());

        FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
      }
      return FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG;
    }

    /**
     * Returns true if the browser has the Safari 10 bugs. The native font load
     * API in Safari 10 has two bugs that cause the document.fonts.load and
     * FontFace.prototype.load methods to return promises that don't reliably get
     * settled.
     *
     * The bugs are described in more detail here:
     *  - https://bugs.webkit.org/show_bug.cgi?id=165037
     *  - https://bugs.webkit.org/show_bug.cgi?id=164902
     *
     * If the browser is made by Apple, and has native font loading support, it is
     * potentially affected. But the API was fixed around AppleWebKit version 603,
     * so any newer versions that that does not contain the bug.
     *
     * @return {boolean}
     */

  }, {
    key: "hasSafari10Bug",
    value: function hasSafari10Bug() {
      if (FontFaceObserver.HAS_SAFARI_10_BUG === null) {
        if (FontFaceObserver.supportsNativeFontLoading() && /Apple/.test(FontFaceObserver.getNavigatorVendor())) {
          var match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(FontFaceObserver.getUserAgent());

          FontFaceObserver.HAS_SAFARI_10_BUG = !!match && parseInt(match[1], 10) < 603;
        } else {
          FontFaceObserver.HAS_SAFARI_10_BUG = false;
        }
      }
      return FontFaceObserver.HAS_SAFARI_10_BUG;
    }

    /**
     * Returns true if the browser supports the native font loading API.
     *
     * @return {boolean}
     */

  }, {
    key: "supportsNativeFontLoading",
    value: function supportsNativeFontLoading() {
      if (FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING === null) {
        FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING = !!document["fonts"];
      }
      return FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING;
    }

    /**
     * Returns true if the browser supports font-style in the font short-hand
     * syntax.
     *
     * @return {boolean}
     */

  }, {
    key: "supportStretch",
    value: function supportStretch() {
      if (FontFaceObserver.SUPPORTS_STRETCH === null) {
        var div = document.createElement("div");

        try {
          div.style.font = "condensed 100px sans-serif";
        } catch (e) {}
        FontFaceObserver.SUPPORTS_STRETCH = div.style.font !== "";
      }

      return FontFaceObserver.SUPPORTS_STRETCH;
    }

    /**
     * @typedef {Object} Descriptors
     * @property {string|undefined} style
     * @property {string|undefined} weight
     * @property {string|undefined} stretch
     */
    /**
     *
     * @param {string} family font-family name (required)
     * @param {Descriptors} descriptors an object describing the variation
     * (optional). The object can contain `weight`, `style`, and `stretch`
     * properties. If a property is not present it will default to `normal`.
     */

  }]);

  function FontFaceObserver(family) {
    var descriptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, FontFaceObserver);

    this.family = family;

    this.style = descriptors.style || "normal";
    this.weight = descriptors.weight || "normal";
    this.stretch = descriptors.stretch || "normal";

    return this;
  }

  /**
   * @param {string=} text Optional test string to use for detecting if a font
   * is available.
   * @param {number=} timeout Optional timeout for giving up on font load
   * detection and rejecting the promise (defaults to 3 seconds).
   * @return {Promise.<FontFaceObserver>}
   */

  createClass(FontFaceObserver, [{
    key: "load",
    value: function load(text, timeout) {
      var that = this;
      var testString = text || "BESbswy";
      var timeoutId = 0;
      var timeoutValue = timeout || FontFaceObserver.DEFAULT_TIMEOUT;
      var start = that.getTime();

      return new Promise(function (resolve, reject) {
        if (FontFaceObserver.supportsNativeFontLoading() && !FontFaceObserver.hasSafari10Bug()) {
          var loader = new Promise(function (resolve, reject) {
            var check = function check() {
              var now = that.getTime();

              if (now - start >= timeoutValue) {
                reject();
              } else {
                document.fonts.load(that.getStyle('"' + that["family"] + '"'), testString).then(function (fonts) {
                  if (fonts.length >= 1) {
                    resolve();
                  } else {
                    setTimeout(check, 25);
                  }
                }, function () {
                  reject();
                });
              }
            };
            check();
          });

          var timer = new Promise(function (resolve, reject) {
            timeoutId = setTimeout(reject, timeoutValue);
          });

          Promise.race([timer, loader]).then(function () {
            clearTimeout(timeoutId);
            resolve(that);
          }, function () {
            reject(that);
          });
        } else {
          onReady(function () {
            var rulerA = new Ruler(testString);
            var rulerB = new Ruler(testString);
            var rulerC = new Ruler(testString);

            var widthA = -1;
            var widthB = -1;
            var widthC = -1;

            var fallbackWidthA = -1;
            var fallbackWidthB = -1;
            var fallbackWidthC = -1;

            var container = document.createElement("div");

            /**
             * @private
             */
            function removeContainer() {
              if (container.parentNode !== null) {
                container.parentNode.removeChild(container);
              }
            }

            /**
             * @private
             *
             * If metric compatible fonts are detected, one of the widths will be
             * -1. This is because a metric compatible font won't trigger a scroll
             * event. We work around this by considering a font loaded if at least
             * two of the widths are the same. Because we have three widths, this
             * still prevents false positives.
             *
             * Cases:
             * 1) Font loads: both a, b and c are called and have the same value.
             * 2) Font fails to load: resize callback is never called and timeout
             *    happens.
             * 3) WebKit bug: both a, b and c are called and have the same value,
             *    but the values are equal to one of the last resort fonts, we
             *    ignore this and continue waiting until we get new values (or a
             *    timeout).
             */
            function check() {
              if (widthA != -1 && widthB != -1 || widthA != -1 && widthC != -1 || widthB != -1 && widthC != -1) {
                if (widthA == widthB || widthA == widthC || widthB == widthC) {
                  // All values are the same, so the browser has most likely
                  // loaded the web font

                  if (FontFaceObserver.hasWebKitFallbackBug()) {
                    // Except if the browser has the WebKit fallback bug, in which
                    // case we check to see if all values are set to one of the
                    // last resort fonts.

                    if (widthA == fallbackWidthA && widthB == fallbackWidthA && widthC == fallbackWidthA || widthA == fallbackWidthB && widthB == fallbackWidthB && widthC == fallbackWidthB || widthA == fallbackWidthC && widthB == fallbackWidthC && widthC == fallbackWidthC) {
                      // The width we got matches some of the known last resort
                      // fonts, so let's assume we're dealing with the last resort
                      // font.
                      return;
                    }
                  }
                  removeContainer();
                  clearTimeout(timeoutId);
                  resolve(that);
                }
              }
            }

            // This ensures the scroll direction is correct.
            container.dir = "ltr";

            rulerA.setFont(that.getStyle("sans-serif"));
            rulerB.setFont(that.getStyle("serif"));
            rulerC.setFont(that.getStyle("monospace"));

            container.appendChild(rulerA.getElement());
            container.appendChild(rulerB.getElement());
            container.appendChild(rulerC.getElement());

            document.body.appendChild(container);

            fallbackWidthA = rulerA.getWidth();
            fallbackWidthB = rulerB.getWidth();
            fallbackWidthC = rulerC.getWidth();

            function checkForTimeout() {
              var now = that.getTime();

              if (now - start >= timeoutValue) {
                removeContainer();
                reject(that);
              } else {
                var hidden = document["hidden"];
                if (hidden === true || hidden === undefined) {
                  widthA = rulerA.getWidth();
                  widthB = rulerB.getWidth();
                  widthC = rulerC.getWidth();
                  check();
                }
                timeoutId = setTimeout(checkForTimeout, 50);
              }
            }

            checkForTimeout();

            rulerA.onResize(function (width) {
              widthA = width;
              check();
            });

            rulerA.setFont(that.getStyle('"' + that["family"] + '",sans-serif'));

            rulerB.onResize(function (width) {
              widthB = width;
              check();
            });

            rulerB.setFont(that.getStyle('"' + that["family"] + '",serif'));

            rulerC.onResize(function (width) {
              widthC = width;
              check();
            });

            rulerC.setFont(that.getStyle('"' + that["family"] + '",monospace'));
          });
        }
      });
    }

    /**
     * @private
     *
     * @param {string} family
     * @return {string}
     */

  }, {
    key: "getStyle",
    value: function getStyle(family) {
      return [this.style, this.weight, FontFaceObserver.supportStretch() ? this.stretch : "", "100px", family].join(" ");
    }
    /**
     * @private
     *
     * @return {number}
     */

  }, {
    key: "getTime",
    value: function getTime() {
      return new Date().getTime();
    }
  }]);
  return FontFaceObserver;
}();

FontFaceObserver.Ruler = Ruler;
FontFaceObserver.HAS_WEBKIT_FALLBACK_BUG = null;
FontFaceObserver.HAS_SAFARI_10_BUG = null;
FontFaceObserver.SUPPORTS_STRETCH = null;
FontFaceObserver.SUPPORTS_NATIVE_FONT_LOADING = null;
FontFaceObserver.DEFAULT_TIMEOUT = 3000;

exports.default = FontFaceObserver;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "ad-load":
/*!*************************!*\
  !*** external "adLoad" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = adLoad;

/***/ })

/******/ });
//# sourceMappingURL=build.bundle.js.map