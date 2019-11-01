(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (factory((global.dcExtensionsSdk = {})));
}(this, (function (exports) { 'use strict';
  
  (function (CONTEXT) {
    CONTEXT["GET"] = "context-get";
  })(exports.CONTEXT || (exports.CONTEXT = {}));
  (function (CONTENT_ITEM) {
    CONTENT_ITEM["GET"] = "content-item-get";
  })(exports.CONTENT_ITEM || (exports.CONTENT_ITEM = {}));
  (function (MEDIA_LINK) {
    MEDIA_LINK["IMAGE_GET"] = "media-image-get";
    MEDIA_LINK["VIDEO_GET"] = "media-video-get";
  })(exports.MEDIA_LINK || (exports.MEDIA_LINK = {}));
  (function (CONTENT_LINK) {
    CONTENT_LINK["CONTENT_GET"] = "content-link-get";
  })(exports.CONTENT_LINK || (exports.CONTENT_LINK = {}));
  (function (CONTENT_REFERENCE) {
    CONTENT_REFERENCE["CONTENT_REF_GET"] = "content-reference-get";
  })(exports.CONTENT_REFERENCE || (exports.CONTENT_REFERENCE = {}));
  (function (FIELD) {
    FIELD["MODEL_GET"] = "field-model-get";
    FIELD["MODEL_SET"] = "field-model-set";
    FIELD["MODEL_RESET"] = "field-model-reset";
    FIELD["MODEL_IS_VALID"] = "field-model-is-valid";
    FIELD["MODEL_VALIDATE"] = "field-model-validate";
    FIELD["SCHEMA_GET"] = "field-schema-get";
  })(exports.FIELD || (exports.FIELD = {}));
  (function (FORM) {
    FORM["READ_ONLY"] = "form-read-only-change";
    FORM["GET_FORM_MODEL"] = "form-model-get";
  })(exports.FORM || (exports.FORM = {}));
  (function (FRAME) {
    FRAME["HEIGHT_GET"] = "height-get";
    FRAME["HEIGHT_SET"] = "height-set";
  })(exports.FRAME || (exports.FRAME = {}));
  
  var MediaLink = /** @class */ (function () {
    /**
     * Media Link - Use to open the media browser.
     * @param connection message.io connection
     */
    function MediaLink(connection) {
      this.connection = connection;
    }
    /**
     * This method will trigger an image browser. It returns a promise that will resolve to the chosen Image Link.
     */
    MediaLink.prototype.getImage = function () {
      return this.connection.request(exports.MEDIA_LINK.IMAGE_GET, null, { timeout: false });
    };
    /**
     * This method will trigger a video browser. It returns a promise that will resolve to the chosen Video Link.
     */
    MediaLink.prototype.getVideo = function () {
      return this.connection.request(exports.MEDIA_LINK.VIDEO_GET, null, { timeout: false });
    };
    return MediaLink;
  }());
  
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  
  var __assign = function() {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0: case 1: t = op; break;
          case 4: _.label++; return { value: op[1], done: false };
          case 5: _.label++; y = op[1]; op = [0]; continue;
          case 7: op = _.ops.pop(); _.trys.pop(); continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
            if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
            if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
            if (t[2]) _.ops.pop();
            _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  
  var ERRORS_INIT;
  (function (ERRORS_INIT) {
    ERRORS_INIT["CONTEXT"] = "Failed to fetch context for UI Extension";
    ERRORS_INIT["CONNTECTION_TIMEOUT"] = "Failed to establish connection to DC Application";
  })(ERRORS_INIT || (ERRORS_INIT = {}));
  var ERRORS_CONTENT_ITEM;
  (function (ERRORS_CONTENT_ITEM) {
    ERRORS_CONTENT_ITEM["NO_IDS"] = "Please provide content type ids";
  })(ERRORS_CONTENT_ITEM || (ERRORS_CONTENT_ITEM = {}));
  var ERRORS_FRAME;
  (function (ERRORS_FRAME) {
    ERRORS_FRAME["SET_HEIGHT_NUMBER"] = "setHeight() only accepts an optional number argument";
  })(ERRORS_FRAME || (ERRORS_FRAME = {}));
  var FORM;
  (function (FORM) {
    FORM["NO_MODEL"] = "Unable to retrieve form model as form context does not have an active model.";
  })(FORM || (FORM = {}));
  
  var ContentLink = /** @class */ (function () {
    /**
     * Content Link - Use to open the content browser.
     * @param connection message.io connection
     */
    function ContentLink(connection) {
      this.connection = connection;
    }
    /**
     * This method will trigger a content browser. It returns a promise that will resolve to the chosen Content Link.
     * @param contentTypeIds list of Content Type Ids to filter the Content Browser by.
     */
    ContentLink.prototype.get = function (contentTypeIds) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (!contentTypeIds || !Array.isArray(contentTypeIds) || !contentTypeIds.length) {
            throw new Error(ERRORS_CONTENT_ITEM.NO_IDS);
          }
          return [2 /*return*/, this.connection.request(exports.CONTENT_LINK.CONTENT_GET, contentTypeIds, { timeout: false })];
        });
      });
    };
    return ContentLink;
  }());
  
  var ContentItem = /** @class */ (function () {
    /**
     * Content Item - Used for fetching the model of the Content Item that is being edited.
     * @param connection message.io connection
     * @param id Content Item id - optional, Content Item may not have an id if it has not been saved.
     */
    function ContentItem(connection, id) {
      this.connection = connection;
      this.id = id;
    }
    /**
     * Use to fetch the model of the Content Item that is being edited. Returns a promise which will resolve to a [[ContentItemModel]]
     */
    ContentItem.prototype.getValue = function () {
      return __awaiter(this, void 0, void 0, function () {
        var contentItem;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, this.connection.request(exports.CONTENT_ITEM.GET)];
            case 1:
              contentItem = _a.sent();
              if (contentItem && contentItem.id) {
                this.id = contentItem.id;
              }
              return [2 /*return*/, contentItem];
          }
        });
      });
    };
    return ContentItem;
  }());
  
  var Frame = /** @class */ (function () {
    /**
     * Use in order to control the re-sizing of the Extension
     * @param connection message.io connection
     * @param win override the default window object
     */
    function Frame(connection, win) {
      var _this = this;
      if (win === void 0) { win = window; }
      this.connection = connection;
      this.win = win;
      this.isAutoResizing = false;
      this.observer = new MutationObserver(function () { return _this.updateHeight(); });
      var frameLoaded = new Promise(function (resolve) {
        if (win.document.readyState === 'complete') {
          resolve(true);
        }
        win.addEventListener('load', function () {
          resolve(true);
        });
      });
      this.connection.on(exports.FRAME.HEIGHT_GET, function (_payload, resolve) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, frameLoaded];
            case 1:
              _a.sent();
              resolve(this.getHeight());
              return [2 /*return*/];
          }
        });
      }); });
    }
    /**
     * Get the height of the Extension
     */
    Frame.prototype.getHeight = function () {
      var documentElement = this.win.document.documentElement;
      if (documentElement) {
        var height = documentElement.getBoundingClientRect().height;
        return height;
      }
      return 0;
    };
    /**
     * Set the height of the frame to the height of the Extension. Can optionally override the measured height with a defined value.
     * @param height - should be used if you want to override the calculated height of your extension
     */
    Frame.prototype.setHeight = function (height) {
      if (height !== undefined && typeof height !== 'number') {
        throw new TypeError(ERRORS_FRAME.SET_HEIGHT_NUMBER);
      }
      var h = height === undefined ? this.getHeight() : height;
      this.previousHeight = height;
      this.connection.emit(exports.FRAME.HEIGHT_SET, h < 0 ? 0 : h);
    };
    /**
     * Start the auto-resizer
     */
    Frame.prototype.startAutoResizer = function () {
      var _this = this;
      if (this.isAutoResizing) {
        return;
      }
      this.isAutoResizing = true;
      this.observer.observe(this.win.document.body, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
      });
      this.win.addEventListener('resize', function () { return _this.updateHeight(); });
    };
    /**
     * Stop the auto-resizer
     */
    Frame.prototype.stopAutoResizer = function () {
      var _this = this;
      if (!this.isAutoResizing) {
        return;
      }
      this.isAutoResizing = false;
      this.observer.disconnect();
      this.win.removeEventListener('resize', function () { return _this.updateHeight(); });
    };
    Frame.prototype.updateHeight = function () {
      var height = this.getHeight();
      if (height === this.previousHeight) {
        return;
      }
      this.setHeight(height);
    };
    return Frame;
  }());
  
  var Field = /** @class */ (function () {
    /**
     * Allows you to perform actions on the field that is being edited.
     * @param connection message.io connection
     * @param schema JSON Schema of the field
     */
    function Field(connection, schema) {
      this.connection = connection;
      this.schema = schema;
    }
    /**
     * Fetch the value of the field
     */
    Field.prototype.getValue = function () {
      return this.connection.request(exports.FIELD.MODEL_GET);
    };
    /**
     * Change the value of the field
     * @param value The new value you want to set on the field
     */
    Field.prototype.setValue = function (value) {
      return __awaiter(this, void 0, void 0, function () {
        var errors;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, this.connection.request(exports.FIELD.MODEL_SET, value)];
            case 1:
              errors = _a.sent();
              if (errors && errors.length) {
                return [2 /*return*/, Promise.reject(errors)];
              }
              return [2 /*return*/];
          }
        });
      });
    };
    /**
     * Check if your value is valid
     * @param value The value you wish to test
     */
    Field.prototype.isValid = function (value) {
      return __awaiter(this, void 0, void 0, function () {
        var isValid;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, this.connection.request(exports.FIELD.MODEL_IS_VALID, value)];
            case 1:
              isValid = _a.sent();
              return [2 /*return*/, isValid];
          }
        });
      });
    };
    /**
     * Check the validation of your value. Returns an array containing any JSON Schema errors found.
     * @param value The value you whish to test
     */
    Field.prototype.validate = function (value) {
      return __awaiter(this, void 0, void 0, function () {
        var errors;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0: return [4 /*yield*/, this.connection.request(exports.FIELD.MODEL_VALIDATE, value)];
            case 1:
              errors = _a.sent();
              return [2 /*return*/, errors && errors.length ? errors : undefined];
          }
        });
      });
    };
    /**
     * Reset the value to the previously loaded state
     */
    Field.prototype.reset = function () {
      return this.connection.request(exports.FIELD.MODEL_RESET);
    };
    return Field;
  }());
  
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  
  (function(global) {
    /**
     * Polyfill URLSearchParams
     *
     * Inspired from : https://github.com/WebReflection/url-search-params/blob/master/src/url-search-params.js
     */
    
    var checkIfIteratorIsSupported = function() {
      try {
        return !!Symbol.iterator;
      } catch (error) {
        return false;
      }
    };
    
    
    var iteratorSupported = checkIfIteratorIsSupported();
    
    var createIterator = function(items) {
      var iterator = {
        next: function() {
          var value = items.shift();
          return { done: value === void 0, value: value };
        }
      };
      
      if (iteratorSupported) {
        iterator[Symbol.iterator] = function() {
          return iterator;
        };
      }
      
      return iterator;
    };
    
    /**
     * Search param name and values should be encoded according to https://url.spec.whatwg.org/#urlencoded-serializing
     * encodeURIComponent() produces the same result except encoding spaces as `%20` instead of `+`.
     */
    var serializeParam = function(value) {
      return encodeURIComponent(value).replace(/%20/g, '+');
    };
    
    var deserializeParam = function(value) {
      return decodeURIComponent(String(value).replace(/\+/g, ' '));
    };
    
    var polyfillURLSearchParams = function() {
      
      var URLSearchParams = function(searchString) {
        Object.defineProperty(this, '_entries', { writable: true, value: {} });
        var typeofSearchString = typeof searchString;
        
        if (typeofSearchString === 'undefined') ; else if (typeofSearchString === 'string') {
          if (searchString !== '') {
            this._fromString(searchString);
          }
        } else if (searchString instanceof URLSearchParams) {
          var _this = this;
          searchString.forEach(function(value, name) {
            _this.append(name, value);
          });
        } else if ((searchString !== null) && (typeofSearchString === 'object')) {
          if (Object.prototype.toString.call(searchString) === '[object Array]') {
            for (var i = 0; i < searchString.length; i++) {
              var entry = searchString[i];
              if ((Object.prototype.toString.call(entry) === '[object Array]') || (entry.length !== 2)) {
                this.append(entry[0], entry[1]);
              } else {
                throw new TypeError('Expected [string, any] as entry at index ' + i + ' of URLSearchParams\'s input');
              }
            }
          } else {
            for (var key in searchString) {
              if (searchString.hasOwnProperty(key)) {
                this.append(key, searchString[key]);
              }
            }
          }
        } else {
          throw new TypeError('Unsupported input\'s type for URLSearchParams');
        }
      };
      
      var proto = URLSearchParams.prototype;
      
      proto.append = function(name, value) {
        if (name in this._entries) {
          this._entries[name].push(String(value));
        } else {
          this._entries[name] = [String(value)];
        }
      };
      
      proto.delete = function(name) {
        delete this._entries[name];
      };
      
      proto.get = function(name) {
        return (name in this._entries) ? this._entries[name][0] : null;
      };
      
      proto.getAll = function(name) {
        return (name in this._entries) ? this._entries[name].slice(0) : [];
      };
      
      proto.has = function(name) {
        return (name in this._entries);
      };
      
      proto.set = function(name, value) {
        this._entries[name] = [String(value)];
      };
      
      proto.forEach = function(callback, thisArg) {
        var entries;
        for (var name in this._entries) {
          if (this._entries.hasOwnProperty(name)) {
            entries = this._entries[name];
            for (var i = 0; i < entries.length; i++) {
              callback.call(thisArg, entries[i], name, this);
            }
          }
        }
      };
      
      proto.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return createIterator(items);
      };
      
      proto.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return createIterator(items);
      };
      
      proto.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return createIterator(items);
      };
      
      if (iteratorSupported) {
        proto[Symbol.iterator] = proto.entries;
      }
      
      proto.toString = function() {
        var searchArray = [];
        this.forEach(function(value, name) {
          searchArray.push(serializeParam(name) + '=' + serializeParam(value));
        });
        return searchArray.join('&');
      };
      
      
      global.URLSearchParams = URLSearchParams;
    };
    
    var checkIfURLSearchParamsSupported = function() {
      try {
        var URLSearchParams = global.URLSearchParams;
        
        return (new URLSearchParams('?a=1').toString() === 'a=1') && (typeof URLSearchParams.prototype.set === 'function');
      } catch (e) {
        return false;
      }
    };
    
    if (!checkIfURLSearchParamsSupported()) {
      polyfillURLSearchParams();
    }
    
    var proto = global.URLSearchParams.prototype;
    
    if (typeof proto.sort !== 'function') {
      proto.sort = function() {
        var _this = this;
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
          if (!_this._entries) {
            _this.delete(name);
          }
        });
        items.sort(function(a, b) {
          if (a[0] < b[0]) {
            return -1;
          } else if (a[0] > b[0]) {
            return +1;
          } else {
            return 0;
          }
        });
        if (_this._entries) { // force reset because IE keeps keys index
          _this._entries = {};
        }
        for (var i = 0; i < items.length; i++) {
          this.append(items[i][0], items[i][1]);
        }
      };
    }
    
    if (typeof proto._fromString !== 'function') {
      Object.defineProperty(proto, '_fromString', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(searchString) {
          if (this._entries) {
            this._entries = {};
          } else {
            var keys = [];
            this.forEach(function(value, name) {
              keys.push(name);
            });
            for (var i = 0; i < keys.length; i++) {
              this.delete(keys[i]);
            }
          }
          
          searchString = searchString.replace(/^\?/, '');
          var attributes = searchString.split('&');
          var attribute;
          for (var i = 0; i < attributes.length; i++) {
            attribute = attributes[i].split('=');
            this.append(
              deserializeParam(attribute[0]),
              (attribute.length > 1) ? deserializeParam(attribute[1]) : ''
            );
          }
        }
      });
    }
    
    // HTMLAnchorElement
    
  })(
    (typeof commonjsGlobal !== 'undefined') ? commonjsGlobal
      : ((typeof window !== 'undefined') ? window
      : ((typeof self !== 'undefined') ? self : commonjsGlobal))
  );
  
  (function(global) {
    /**
     * Polyfill URL
     *
     * Inspired from : https://github.com/arv/DOM-URL-Polyfill/blob/master/src/url.js
     */
    
    var checkIfURLIsSupported = function() {
      try {
        var u = new global.URL('b', 'http://a');
        u.pathname = 'c%20d';
        return (u.href === 'http://a/c%20d') && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    
    
    var polyfillURL = function() {
      var _URL = global.URL;
      
      var URL = function(url, base) {
        if (typeof url !== 'string') url = String(url);
        
        // Only create another document if the base is different from current location.
        var doc = document, baseElement;
        if (base && (global.location === void 0 || base !== global.location.href)) {
          doc = document.implementation.createHTMLDocument('');
          baseElement = doc.createElement('base');
          baseElement.href = base;
          doc.head.appendChild(baseElement);
          try {
            if (baseElement.href.indexOf(base) !== 0) throw new Error(baseElement.href);
          } catch (err) {
            throw new Error('URL unable to set base ' + base + ' due to ' + err);
          }
        }
        
        var anchorElement = doc.createElement('a');
        anchorElement.href = url;
        if (baseElement) {
          doc.body.appendChild(anchorElement);
          anchorElement.href = anchorElement.href; // force href to refresh
        }
        
        if (anchorElement.protocol === ':' || !/:/.test(anchorElement.href)) {
          throw new TypeError('Invalid URL');
        }
        
        Object.defineProperty(this, '_anchorElement', {
          value: anchorElement
        });
        
        
        // create a linked searchParams which reflect its changes on URL
        var searchParams = new global.URLSearchParams(this.search);
        var enableSearchUpdate = true;
        var enableSearchParamsUpdate = true;
        var _this = this;
        ['append', 'delete', 'set'].forEach(function(methodName) {
          var method = searchParams[methodName];
          searchParams[methodName] = function() {
            method.apply(searchParams, arguments);
            if (enableSearchUpdate) {
              enableSearchParamsUpdate = false;
              _this.search = searchParams.toString();
              enableSearchParamsUpdate = true;
            }
          };
        });
        
        Object.defineProperty(this, 'searchParams', {
          value: searchParams,
          enumerable: true
        });
        
        var search = void 0;
        Object.defineProperty(this, '_updateSearchParams', {
          enumerable: false,
          configurable: false,
          writable: false,
          value: function() {
            if (this.search !== search) {
              search = this.search;
              if (enableSearchParamsUpdate) {
                enableSearchUpdate = false;
                this.searchParams._fromString(this.search);
                enableSearchUpdate = true;
              }
            }
          }
        });
      };
      
      var proto = URL.prototype;
      
      var linkURLWithAnchorAttribute = function(attributeName) {
        Object.defineProperty(proto, attributeName, {
          get: function() {
            return this._anchorElement[attributeName];
          },
          set: function(value) {
            this._anchorElement[attributeName] = value;
          },
          enumerable: true
        });
      };
      
      ['hash', 'host', 'hostname', 'port', 'protocol']
        .forEach(function(attributeName) {
          linkURLWithAnchorAttribute(attributeName);
        });
      
      Object.defineProperty(proto, 'search', {
        get: function() {
          return this._anchorElement['search'];
        },
        set: function(value) {
          this._anchorElement['search'] = value;
          this._updateSearchParams();
        },
        enumerable: true
      });
      
      Object.defineProperties(proto, {
        
        'toString': {
          get: function() {
            var _this = this;
            return function() {
              return _this.href;
            };
          }
        },
        
        'href': {
          get: function() {
            return this._anchorElement.href.replace(/\?$/, '');
          },
          set: function(value) {
            this._anchorElement.href = value;
            this._updateSearchParams();
          },
          enumerable: true
        },
        
        'pathname': {
          get: function() {
            return this._anchorElement.pathname.replace(/(^\/?)/, '/');
          },
          set: function(value) {
            this._anchorElement.pathname = value;
          },
          enumerable: true
        },
        
        'origin': {
          get: function() {
            // get expected port from protocol
            var expectedPort = { 'http:': 80, 'https:': 443, 'ftp:': 21 }[this._anchorElement.protocol];
            // add port to origin if, expected port is different than actual port
            // and it is not empty f.e http://foo:8080
            // 8080 != 80 && 8080 != ''
            var addPortToOrigin = this._anchorElement.port != expectedPort &&
              this._anchorElement.port !== '';
            
            return this._anchorElement.protocol +
              '//' +
              this._anchorElement.hostname +
              (addPortToOrigin ? (':' + this._anchorElement.port) : '');
          },
          enumerable: true
        },
        
        'password': { // TODO
          get: function() {
            return '';
          },
          set: function(value) {
          },
          enumerable: true
        },
        
        'username': { // TODO
          get: function() {
            return '';
          },
          set: function(value) {
          },
          enumerable: true
        },
      });
      
      URL.createObjectURL = function(blob) {
        return _URL.createObjectURL.apply(_URL, arguments);
      };
      
      URL.revokeObjectURL = function(url) {
        return _URL.revokeObjectURL.apply(_URL, arguments);
      };
      
      global.URL = URL;
      
    };
    
    if (!checkIfURLIsSupported()) {
      polyfillURL();
    }
    
    if ((global.location !== void 0) && !('origin' in global.location)) {
      var getOrigin = function() {
        return global.location.protocol + '//' + global.location.hostname + (global.location.port ? (':' + global.location.port) : '');
      };
      
      try {
        Object.defineProperty(global.location, 'origin', {
          get: getOrigin,
          enumerable: true
        });
      } catch (e) {
        setInterval(function() {
          global.location.origin = getOrigin();
        }, 100);
      }
    }
    
  })(
    (typeof commonjsGlobal !== 'undefined') ? commonjsGlobal
      : ((typeof window !== 'undefined') ? window
      : ((typeof self !== 'undefined') ? self : commonjsGlobal))
  );
  
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */
  
  var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
  };
  
  function __extends$1(d, b) {
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  
  var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
    return __assign$1.apply(this, arguments);
  };
  
  /**
   * The set of possible message types.
   */
  var MESSAGE_TYPE;
  (function (MESSAGE_TYPE) {
    MESSAGE_TYPE["SUBSCRIBE"] = "subscribe";
    MESSAGE_TYPE["EMIT"] = "emit";
    MESSAGE_TYPE["REQUEST"] = "request";
    MESSAGE_TYPE["RESOLVE"] = "resolve";
    MESSAGE_TYPE["REJECT"] = "reject";
  })(MESSAGE_TYPE || (MESSAGE_TYPE = {}));
  /**
   * The set of internally used event triggers that can be bound to.
   */
  var MIO_EVENTS;
  (function (MIO_EVENTS) {
    MIO_EVENTS["HANDSHAKE"] = "mio-handshake";
    MIO_EVENTS["CONNECTED"] = "mio-connected";
    MIO_EVENTS["DISCONNECTED"] = "mio-disconnected";
    MIO_EVENTS["CONNECTION_TIMEOUT"] = "mio-connection-timeout";
  })(MIO_EVENTS || (MIO_EVENTS = {}));
  /**
   * Connection Base Class.
   *
   * It is used to provide the shared functionality of [[ServerConnection]] and [[ClientConnection]]
   *
   */
  var Connection = /** @class */ (function () {
    /**
     * Creates a Connection instance.
     * @param options Connection configuration options
     * @param options.timeout Default request timeout (ms). This will trigger a reject on a any request that takes longer than this value. 200ms by default.
     * @param options.connectionTimeout Connection timeout (ms). This will trigger the CONNECTION_TIMEOUT if a connection hasn't been established by this time.
     * @param options.debug Enabling uses console.log to output what MIO is doing behind the scenes. Used for debugging. Disabled by default.
     * @param options.onload Uses the onload event of an iframe to trigger the process for creating a connection. If set to false the connection process needs to be triggered manually. Note a connection will only work if the child frame has loaded. Enabled by default.
     * @param options.targetOrigin Limits the iframe to send messages to only the specified origins. '*' by Default.
     * @param options.clientInitiates Awaits an postMessage (init) trigger from the child before it sets up and sends the MessageChannel port to the child. false by Default.
     */
    function Connection(options) {
      if (options === void 0) { options = {}; }
      /**
       * Indicates if a connection has been established
       */
      this.connected = false;
      this.backlog = [];
      this.promises = {};
      this.emitters = {};
      this.connectionStep = '';
      this.defaultOptions = {
        window: window,
        connectionTimeout: 2000,
        timeout: 200,
        debug: false,
        onload: true,
        clientInitiates: false,
        targetOrigin: '*'
      };
      this.options = __assign$1({}, this.defaultOptions, options);
    }
    /**
     * This method will emit an event to its counterpart.
     * @param event The name of the event to emit.
     * @param payload Payload to be sent with the event.
     * @return Returns Connection instance.
     */
    Connection.prototype.emit = function (event, payload) {
      this.message({
        type: MESSAGE_TYPE.EMIT,
        event: event,
        payload: payload
      });
      return this;
    };
    /**
     * Bind a callback to an event.
     * @param event The name of the event to listen for.
     * @param callback The function to call when the event is fired.
     * @return Returns Connection instance.
     */
    Connection.prototype.on = function (event, callback) {
      this.emitters[event] = callback;
      return this;
    };
    /**
     * Make a request of the counterpart. It will automatically reject the promise if the timeout time is exceeded.
     * @param event The name of the event to emit
     * @param payload Payload to be sent with the request
     * @param options
     * @param options.timeout Override for the default promise timeout, can be an interger or false
     * @returns A promise that can resolve with any payload
     */
    Connection.prototype.request = function (event, payload, options) {
      var _this = this;
      if (options === void 0) { options = {}; }
      return new Promise(function (resolve, reject) {
        var uuid = _this.uuidv4();
        var timeout = _this.getRequestTimeout(options.timeout);
        var ct;
        if (timeout !== false && typeof timeout === 'number') {
          ct = window.setTimeout(function () { return reject('timeout'); }, timeout);
        }
        _this.promises[uuid] = {
          resolve: function (resolvedData) {
            resolve(resolvedData);
            if (ct) {
              clearTimeout(ct);
            }
          },
          reject: function (error) {
            reject(error);
            if (ct) {
              clearTimeout(ct);
            }
          }
        };
        _this.message({
          type: MESSAGE_TYPE.REQUEST,
          event: event,
          id: uuid,
          payload: payload
        });
      });
    };
    /**
     * Close the port being used to communicate. It will prevent any further messages being sent or received.
     */
    Connection.prototype.close = function () {
      if (this.connected) {
        this.port.close();
        this.connected = false;
      }
      if (this.clientInitListener) {
        this.options.window.removeEventListener('message', this.clientInitListener, false);
      }
    };
    Connection.prototype.setConnectionTimeout = function () {
      var _this = this;
      clearTimeout(this.connectionTimeout);
      if (this.options.connectionTimeout !== false) {
        this.connectionTimeout = window.setTimeout(function () {
          if (_this.clientInitListener) {
            _this.options.window.removeEventListener('message', _this.clientInitListener, false);
          }
          _this.handleMessage({
            type: MESSAGE_TYPE.EMIT,
            event: MIO_EVENTS.CONNECTION_TIMEOUT,
            payload: { message: 'Connection timed out while ' + _this.connectionStep }
          });
        }, Number(this.options.connectionTimeout));
      }
    };
    Connection.prototype.uuidv4 = function () {
      var crypt = window.crypto || window.msCrypto;
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ (crypt.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16);
      });
    };
    Connection.prototype.clearConnectionTimeout = function () {
      clearTimeout(this.connectionTimeout);
    };
    Connection.prototype.initPortEvents = function () {
      var _this = this;
      this.port.onmessage = function (message) {
        _this.handleMessage(message.data);
      };
      this.port.onmessageerror = function (error) {
        _this.handleError(error);
      };
    };
    Connection.prototype.finishInit = function () {
      this.connected = true;
      this.clearConnectionTimeout();
      this.emit(MIO_EVENTS.CONNECTED);
      this.completeBacklog();
    };
    Connection.prototype.completeBacklog = function () {
      var _this = this;
      this.backlog.forEach(function (message) {
        _this.portMessage(message);
      });
      this.backlog = [];
    };
    Connection.prototype.handleError = function (error) {
      if (this.options.debug) {
        console.error(error);
      }
    };
    Connection.prototype.handleMessage = function (message) {
      var _this = this;
      if (this.options.debug) {
        console.log("handle by " + (this.isClient() ? 'client' : 'server') + " - [" + message.type + "] \"" + message.event + "\", payload: ", message.payload);
      }
      switch (message.type) {
        case MESSAGE_TYPE.EMIT:
          if (!this.emitters[message.event]) {
            return;
          }
          this.emitters[message.event](message.payload);
          break;
        case MESSAGE_TYPE.REQUEST:
          if (!this.emitters[message.event]) {
            return;
          }
          this.emitters[message.event](message.payload, function (payload) {
            _this.message({
              id: message.id,
              type: MESSAGE_TYPE.RESOLVE,
              event: message.event,
              payload: payload
            });
          }, function (payload) {
            _this.message({
              id: message.id,
              type: MESSAGE_TYPE.REJECT,
              event: message.event,
              payload: payload
            });
          });
          break;
        case MESSAGE_TYPE.RESOLVE:
          if (!this.promises[message.id]) {
            return;
          }
          this.promises[message.id].resolve(message.payload);
          delete this.promises[message.id];
          break;
        case MESSAGE_TYPE.REJECT:
          if (!this.promises[message.id]) {
            return;
          }
          this.promises[message.id].reject(message.payload);
          delete this.promises[message.id];
          break;
      }
    };
    Connection.prototype.getRequestTimeout = function (timeout) {
      if (typeof timeout === 'number' && timeout >= 0) {
        return timeout;
      }
      else if (typeof timeout === 'number') {
        return 0;
      }
      else if (timeout === true) {
        return this.options.timeout;
      }
      else if (timeout === false) {
        return false;
      }
      else {
        return this.options.timeout;
      }
    };
    Connection.prototype.isClient = function () {
      return false;
    };
    Connection.prototype.message = function (message) {
      var force = false;
      if (message.event === MIO_EVENTS.HANDSHAKE ||
        message.event === MIO_EVENTS.CONNECTED ||
        message.event === MIO_EVENTS.DISCONNECTED) {
        force = true;
      }
      if (!this.connected && !force) {
        this.backlog.push(message);
      }
      else if (this.port) {
        this.portMessage(message);
      }
    };
    Connection.prototype.portMessage = function (message) {
      if (this.options.debug) {
        console.log("send from " + (this.isClient() ? 'client' : 'server') + " - [" + message.type + "] \"" + message.event + "\", payload: ", message.payload);
      }
      this.port.postMessage(message);
    };
    return Connection;
  }());
  
  var CONNECTION_STEPS;
  (function (CONNECTION_STEPS) {
    CONNECTION_STEPS["CONNECTION"] = "waiting for connection.";
    CONNECTION_STEPS["IFRAME_LOADING"] = "waiting for iframe to load.";
    CONNECTION_STEPS["INITIATION_FROM_CLIENT"] = "waiting for initiation from client.";
  })(CONNECTION_STEPS || (CONNECTION_STEPS = {}));
  /**
   * The parent side of the connection.
   */
  var ServerConnection = /** @class */ (function (_super) {
    __extends$1(ServerConnection, _super);
    /**
     *
     * @param frame The iframe target to setup the connection on.
     * @param options Connection configuration options.
     * @param options.timeout Default request timeout (ms). This will trigger a reject on a any request that takes longer than this value. 200ms by default.
     * @param options.connectionTimeout Connection timeout (ms). This will trigger the CONNECTION_TIMEOUT if a connection hasn't been established by this time.
     * @param options.debug Enabling uses console.log to output what MIO is doing behind the scenes. Used for debugging. Disabled by default.
     * @param options.onload Uses the onload event of an iframe to trigger the process for creating a connection. If set to false the connection process needs to be triggered manually. Note a connection will only work if the child frame has loaded. Enabled by default.
     * @param options.targetOrigin Limits the iframe to send messages to only the specified origins. '*' by Default.
     * @param options.clientInitiates Awaits an postMessage (init) trigger from the child before it sets up and sends the MessageChannel port to the child. false by Default.
     */
    function ServerConnection(frame, options) {
      if (options === void 0) { options = {}; }
      var _this = _super.call(this, options) || this;
      _this.frame = frame;
      _this.connectionStep = CONNECTION_STEPS.CONNECTION;
      _this.frame.classList.add('mio-iframe');
      if (_this.options.onload) {
        _this.setupLoadInit();
      }
      if (_this.options.clientInitiates) {
        _this.setupClientInit();
      }
      _this.setConnectionTimeout();
      _this.on(MIO_EVENTS.DISCONNECTED, function () { return (_this.connected = false); });
      return _this;
    }
    ServerConnection.prototype.clientInitiation = function (e) {
      if (e.data === this.name) {
        this.connectionStep = CONNECTION_STEPS.CONNECTION;
        this.setConnectionTimeout();
        this.options.window.removeEventListener('message', this.clientInitListener, false);
        if (this.options.debug) {
          console.log('Server: Client triggered initiation');
        }
        this.init();
      }
    };
    ServerConnection.prototype.setupLoadInit = function () {
      var _this = this;
      this.connectionStep = CONNECTION_STEPS.IFRAME_LOADING;
      this.frame.addEventListener('load', function () {
        _this.connectionStep = _this.options.clientInitiates
          ? CONNECTION_STEPS.INITIATION_FROM_CLIENT
          : CONNECTION_STEPS.CONNECTION;
        _this.setConnectionTimeout();
        _this.init();
      });
    };
    ServerConnection.prototype.setupClientInit = function () {
      var _this = this;
      this.connectionStep = CONNECTION_STEPS.INITIATION_FROM_CLIENT;
      var numFrames = this.options.window.document.querySelectorAll('iframe.mio-iframe').length;
      this.name = 'mio-' + numFrames;
      var url = new URL(this.frame.src);
      url.searchParams.append('mio-name', this.name);
      this.frame.src = url.toString();
      this.clientInitListener = function (e) { return _this.clientInitiation(e); };
      this.options.window.addEventListener('message', this.clientInitListener);
    };
    /**
     * Used to trigger the initiation of a connection manually. To be used if the onload, and clientInitiates options are disabled.
     */
    ServerConnection.prototype.init = function () {
      if (!this.frame.contentWindow || !this.frame.src || this.connected) {
        return false;
      }
      this.setupChannel();
      this.initPortEvents();
      this.listenForHandshake();
      this.sendPortToClient();
    };
    ServerConnection.prototype.sendPortToClient = function () {
      if (!this.frame.contentWindow || !this.frame.src) {
        return false;
      }
      this.frame.contentWindow.postMessage(null, this.options.targetOrigin ? this.options.targetOrigin : '*', [this.channel.port2]);
    };
    ServerConnection.prototype.listenForHandshake = function () {
      var _this = this;
      this.on(MIO_EVENTS.HANDSHAKE, function (payload, resolve) {
        _this.finishInit();
        resolve(payload);
      });
    };
    ServerConnection.prototype.setupChannel = function () {
      this.channel = new MessageChannel();
      this.port = this.channel.port1;
    };
    return ServerConnection;
  }(Connection));
  
  var CONNECTION_STEPS$1;
  (function (CONNECTION_STEPS) {
    CONNECTION_STEPS["CONNECTION"] = "waiting for connection.";
    CONNECTION_STEPS["HANDSHAKE"] = "waiting for handshake.";
  })(CONNECTION_STEPS$1 || (CONNECTION_STEPS$1 = {}));
  /**
   * The child side of a connection.
   */
  var ClientConnection = /** @class */ (function (_super) {
    __extends$1(ClientConnection, _super);
    function ClientConnection(options) {
      if (options === void 0) { options = {}; }
      var _this = _super.call(this, options) || this;
      _this.messageListener = function (e) { return _this.messageHandler(e); };
      _this.options.window.addEventListener('message', _this.messageListener);
      if (_this.options.connectionTimeout !== false) {
        _this.connectionStep = CONNECTION_STEPS$1.CONNECTION;
        _this.setConnectionTimeout();
      }
      return _this;
    }
    ClientConnection.prototype.init = function () {
      var url = new URL(this.options.window.location.toString());
      var id = url.searchParams.get('mio-name');
      if (this.options.debug) {
        console.log('Client: sent postMessage value:', id);
      }
      this.options.window.parent.postMessage(id, this.options.targetOrigin);
    };
    ClientConnection.prototype.messageHandler = function (e) {
      if (e.ports[0]) {
        this.port = e.ports[0];
        this.initPortEvents();
        this.listenForHandshake();
        this.options.window.removeEventListener('message', this.messageListener);
      }
    };
    ClientConnection.prototype.listenForHandshake = function () {
      var _this = this;
      if (this.options.connectionTimeout !== false) {
        this.connectionStep = CONNECTION_STEPS$1.HANDSHAKE;
        this.setConnectionTimeout();
      }
      this.request(MIO_EVENTS.HANDSHAKE)
        .then(function () {
          _this.addBeforeUnloadEvent();
          _this.finishInit();
        })
        .catch(function (e) {
          _this.handleError(e);
        });
    };
    ClientConnection.prototype.addBeforeUnloadEvent = function () {
      var _this = this;
      this.options.window.addEventListener('beforeunload', function (event) {
        _this.emit(MIO_EVENTS.DISCONNECTED);
      });
    };
    ClientConnection.prototype.isClient = function () {
      return true;
    };
    return ClientConnection;
  }(Connection));
  
  var ContentReference = /** @class */ (function () {
    /**
     * Content Link - Use to open the content browser.
     * @param connection message.io connection
     */
    function ContentReference(connection) {
      this.connection = connection;
    }
    /**
     * This method will trigger a content browser. It returns a promise that will resolve to the chosen Content Link.
     * @param contentTypeIds list of Content Type Ids to filter the Content Browser by.
     */
    ContentReference.prototype.get = function (contentTypeIds) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (!contentTypeIds || !Array.isArray(contentTypeIds) || !contentTypeIds.length) {
            throw new Error(ERRORS_CONTENT_ITEM.NO_IDS);
          }
          return [2 /*return*/, this.connection.request(exports.CONTENT_REFERENCE.CONTENT_REF_GET, contentTypeIds, {
            timeout: false
          })];
        });
      });
    };
    return ContentReference;
  }());
  
  var Form = /** @class */ (function () {
    function Form(connection, readOnly) {
      var _this = this;
      this.connection = connection;
      this.readOnly = readOnly;
      this.onChangeStack = [];
      this.connection.on(exports.FORM.READ_ONLY, function (readonly) {
        _this.readOnly = readonly;
        _this.onChangeStack.forEach(function (cb) { return cb(_this.readOnly); });
      });
    }
    /**
     *
     * Functions to be run after readonly changes
     * @param cb function that handles what happens after readonly changes
     */
    Form.prototype.onReadOnlyChange = function (cb) {
      this.onChangeStack.push(cb);
      return this;
    };
    /**
     * Get the current model state of all the fields in the form.
     */
    Form.prototype.getValue = function () {
      return __awaiter(this, void 0, void 0, function () {
        var value, e_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, , 3]);
              return [4 /*yield*/, this.connection.request(exports.FORM.GET_FORM_MODEL)];
            case 1:
              value = _a.sent();
              return [2 /*return*/, value];
            case 2:
              e_1 = _a.sent();
              throw new Error(FORM.NO_MODEL);
            case 3: return [2 /*return*/];
          }
        });
      });
    };
    return Form;
  }());
  
  var SDK = /** @class */ (function () {
    /**
     * The SDK instance is the central place for all SDK methods. It takes an optional options object.
     * @param options
     */
    function SDK(options) {
      if (options === void 0) { options = {}; }
      this.defaultOptions = {
        window: window,
        connectionTimeout: 1000,
        debug: false
      };
      this.options = __assign(__assign({}, this.defaultOptions), options);
      this.connection = new ClientConnection(this.options);
      this.mediaLink = new MediaLink(this.connection);
      this.contentLink = new ContentLink(this.connection);
      this.contentReference = new ContentReference(this.connection);
      this.frame = new Frame(this.connection, this.options.window);
    }
    /**
     * Initialiser. Returns a promise that resolves to an instance of the SDK.
     */
    SDK.prototype.init = function () {
      return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
          return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
              this.connection.init();
              this.connection.on(MIO_EVENTS.CONNECTED, function () { return __awaiter(_this, void 0, void 0, function () {
                var e_1;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      _a.trys.push([0, 2, , 3]);
                      return [4 /*yield*/, this.setupContext(resolve, reject)];
                    case 1:
                      _a.sent();
                      resolve(this);
                      return [3 /*break*/, 3];
                    case 2:
                      e_1 = _a.sent();
                      reject(new Error(ERRORS_INIT.CONTEXT));
                      return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                  }
                });
              }); });
              this.connection.on(MIO_EVENTS.CONNECTION_TIMEOUT, function () {
                reject(new Error(ERRORS_INIT.CONNTECTION_TIMEOUT));
              });
              return [2 /*return*/];
            });
          }); })];
        });
      });
    };
    SDK.prototype.setupContext = function (resolve, reject) {
      return __awaiter(this, void 0, void 0, function () {
        var _a, contentItemId, fieldSchema, params, locales, stagingEnvironment, readOnly, visualisation;
        return __generator(this, function (_b) {
          switch (_b.label) {
            case 0: return [4 /*yield*/, this.requestContext()];
            case 1:
              _a = _b.sent(), contentItemId = _a.contentItemId, fieldSchema = _a.fieldSchema, params = _a.params, locales = _a.locales, stagingEnvironment = _a.stagingEnvironment, readOnly = _a.readOnly, visualisation = _a.visualisation;
              this.contentItem = new ContentItem(this.connection, contentItemId);
              this.field = new Field(this.connection, fieldSchema);
              this.form = new Form(this.connection, readOnly);
              this.params = params;
              this.locales = locales;
              this.visualisation = visualisation;
              this.stagingEnvironment = stagingEnvironment;
              return [2 /*return*/];
          }
        });
      });
    };
    SDK.prototype.requestContext = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2 /*return*/, this.connection.request(exports.CONTEXT.GET, null, { timeout: false })];
        });
      });
    };
    return SDK;
  }());
  
  /**
   * The method that starts it all
   * @param options
   * @return Returns a promise that will resolve with a new [[SDK]] instance
   */
  function init(options) {
    return __awaiter(this, void 0, void 0, function () {
      var sdk;
      return __generator(this, function (_a) {
        sdk = new SDK(options);
        return [2 /*return*/, sdk.init()];
      });
    });
  }
  
  exports.MediaLink = MediaLink;
  exports.ContentLink = ContentLink;
  exports.ContentItem = ContentItem;
  exports.Frame = Frame;
  exports.Field = Field;
  exports.init = init;
  exports.SDK = SDK;
  
  Object.defineProperty(exports, '__esModule', { value: true });
  
})));
//# sourceMappingURL=dc-extensions-sdk.umd.js.map
