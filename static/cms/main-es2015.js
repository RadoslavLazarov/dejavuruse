(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <nav>\n          <ul>\n            <li><a href=\"#\" routerLink=\"/content\">Home</a></li>\n            <li><a href=\"#\" routerLink=\"/content/test\">Test</a></li>\n            <li><a href=\"#\" routerLink=\"/content/login\" *ngIf=\"authService.loggedIn()\"\n                (click)=\"authService.logoutUser()\">Logout</a></li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</header> -->\n<!-- <header>\n  <mat-toolbar color=\"primary\" class=\"header-toolbar\">\n    <mat-toolbar-row>\n      <span>Custom Toolbar</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</header>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav mode=\"side\" opened>\n    <nav>\n      <ul>\n        <li><a href=\"#\" routerLink=\"/content\">Home</a></li>\n        <li><a href=\"#\" routerLink=\"/content/test\">Test</a></li>\n        <li><a href=\"#\" routerLink=\"/content/login\" *ngIf=\"authService.loggedIn()\"\n            (click)=\"authService.logoutUser()\">Logout</a></li>\n      </ul>\n    </nav>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider>\n    <button mat-button>Click me!</button>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\" gutterSize=\"15px\">\n      <mat-grid-tile>1</mat-grid-tile>\n      <mat-grid-tile>2</mat-grid-tile>\n      <mat-grid-tile>3</mat-grid-tile>\n      <mat-grid-tile>4</mat-grid-tile>\n    </mat-grid-list>\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<mat-sidenav-container>\n  <mat-sidenav mode=\"side\" opened class=\"sidenav\">\n    <app-sidebar></app-sidebar>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <!-- <mat-spinner [diameter]=\"diameter\"></mat-spinner> -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/fullwidth/fullwidth.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/fullwidth/fullwidth.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf='validate'>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"hover-wrapper\" [class.active]=\"clickCounter > 7\">\n        <span (click)=\"countClick()\" class=\"hover\">click</span>\n        <p>clicks: {{ clickCounter }}</p>\n      </div>\n\n      <div class=\"form\" [ngStyle]=\"{\n          'background-color': clickCounter > 2 ? 'red' : 'blue'\n        }\">\n        <input type=\"text\" [(ngModel)]=\"name\" />\n        <div>{{ name }}</div>\n      </div>\n\n      <div [style.background-color]=\"clickCounter > 5 ? 'yellow' : 'red'\">\n        <ng-template [ngIf]=\"clickCounter > 4\" [ngIfElse]=\"none\">\n          Greater than 4\n        </ng-template>\n        <ng-template #none>\n          Not greater\n        </ng-template>\n      </div>\n\n      <div [ngClass]=\"setClasses()\">test classes</div>\n    </div>\n  </div>\n</div>\n\n\n<mat-grid-list cols=\"1\" rowHeight=\"100px\" gutterSize=\"15px\">\n  <mat-grid-tile>\n    <mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider>\n    <button mat-button>Click me!</button>\n  </mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"15px\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"15px\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"15px\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"15px\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n<mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"15px\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n\n<div class=\"card rounded-0\">\n  <div class=\"card-header\">\n    <h3 class=\"mb-0\">Login</h3>\n  </div>\n  <div class=\"card-body\">\n    <form class=\"form\">\n      <div class=\"form-group\">\n        <label for=\"uname1\">Username</label>\n        <input type=\"text\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.name\" name=\"name\" required>\n      </div>\n      <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control rounded-0\" [(ngModel)]=\"loginUserData.pass\" name=\"pass\" required>\n      </div>\n      <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-success float-right\">Login</button>\n    </form>\n  </div>\n</div>\n\n</div>\n\n\n</div>\n</div> -->\n<!-- <form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Потребител\" [(ngModel)]=\"loginUserData.name\" name=\"name\" required>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Парола\" [(ngModel)]=\"loginUserData.pass\" name=\"pass\" required>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"loginUser()\">Вход</button>\n</form> -->\n\n<mat-card class=\"login-container\">\n  <mat-card-header>\n    <mat-card-title>Вход</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Потребител\" [(ngModel)]=\"loginUserData.name\" name=\"name\" required>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Парола\" [(ngModel)]=\"loginUserData.pass\" name=\"pass\" required>\n      </mat-form-field>\n    </form>\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"loginUser()\">Вход</button>\n  </mat-card-actions>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test/test.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test/test.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test works!</p>\n<span (click)=\"buttonClick()\">click</span>\n\n<ul *ngIf=\"galleryCategories\">\n  <li *ngFor=\"let category of galleryCategories\">\n    {{ category.name.bg }}\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <mat-toolbar color=\"primary\" class=\"header-toolbar-container\">\n    <!-- <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar> -->\n    <mat-toolbar-row class=\"header-toolbar\">\n      <div class=\"header-toolbar__left\">\n        <img src=\"assets/images/logo-small.png\" alt=\"\" class=\"logo\">\n        <span>Управление на сайта</span>\n      </div>\n      <div class=\"header-toolbar__right\">\n        <span class=\"nav-item\">\n          <a href=\"/\" mat-button>Сайт</a>\n        </span>\n        <span class=\"nav-item\">\n          <a mat-button routerLink=\"/content/login\" *ngIf=\"authService.loggedIn()\"\n            (click)=\"authService.logoutUser()\">Изход</a>\n        </span>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <ul>\n    <li><a href=\"#\" routerLink=\"/content\">Home</a></li>\n    <li><a href=\"#\" routerLink=\"/content/test\">Test</a></li>\n    <li><a href=\"#\" routerLink=\"/content/login\" *ngIf=\"authService.loggedIn()\"\n        (click)=\"authService.logoutUser()\">Logout</a></li>\n  </ul>\n</nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _layouts_fullwidth_fullwidth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/fullwidth/fullwidth.component */ "./src/app/layouts/fullwidth/fullwidth.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _modules_test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/test/test.component */ "./src/app/modules/test/test.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");








// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { TestComponent } from './test/test.component';

// const routes: Routes = [
//   { path: 'content', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'content/test', component: TestComponent },
//   { path: 'content/login', component: LoginComponent }
// ];
const routes = [{
        path: 'content',
        component: _layouts_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [{
                path: '',
                component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }, {
                path: 'test',
                component: _modules_test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"]
            }]
    }, {
        path: 'content',
        component: _layouts_fullwidth_fullwidth_component__WEBPACK_IMPORTED_MODULE_4__["FullwidthComponent"],
        children: [
            {
                path: 'login',
                component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            }
        ]
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-toolbar {\n  position: fixed;\n  z-index: 2; }\n\nul {\n  display: flex;\n  justify-content: center;\n  list-style: none; }\n\nul li {\n    margin-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFdlYiBQcm9qZWN0c1xcRGVqYVZ1LU5ld1xcZGVqYXZ1XFxjbXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixVQUFVLEVBQUE7O0FBSVo7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUhsQjtJQUtJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAuZXhhbXBsZS1jb250YWluZXIge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgYm90dG9tOiAwO1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vICAgcmlnaHQ6IDA7XHJcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcclxuLy8gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'cms';
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/default/default.module */ "./src/app/layouts/default/default.module.ts");
/* harmony import */ var _layouts_fullwidth_fullwidth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/fullwidth/fullwidth.module */ "./src/app/layouts/fullwidth/fullwidth.module.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");









// import { TestComponent } from './test/test.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';




// Material Design

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _layouts_default_default_module__WEBPACK_IMPORTED_MODULE_7__["DefaultModule"],
            _layouts_fullwidth_fullwidth_module__WEBPACK_IMPORTED_MODULE_8__["FullwidthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            // Material Design
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"]
        ],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['content/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginUrl = 'http://127.0.0.1:3000/content/login';
    }
    loginUser(user) {
        return this.http.post(this.loginUrl, user);
    }
    logoutUser() {
        localStorage.removeItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    myMethod() {
        return this.http.get('http://127.0.0.1:3000/content/http-test');
    }
    fetchHome() {
        return this.http.get('http://127.0.0.1:3000/content/home-fetch');
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav {\n  padding: 0 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L0M6XFxXZWIgUHJvamVjdHNcXERlamFWdS1OZXdcXGRlamF2dVxcY21zL3NyY1xcYXBwXFxsYXlvdXRzXFxkZWZhdWx0XFxkZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdiB7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() {
        this.diameter = 70;
    }
    ngOnInit() {
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/layouts/default/default.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/default/default.module.ts ***!
  \***************************************************/
/*! exports provided: DefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultModule", function() { return DefaultModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _modules_test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/test/test.component */ "./src/app/modules/test/test.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







let DefaultModule = class DefaultModule {
};
DefaultModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _modules_test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]
    })
], DefaultModule);



/***/ }),

/***/ "./src/app/layouts/fullwidth/fullwidth.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/fullwidth/fullwidth.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9mdWxsd2lkdGgvQzpcXFdlYiBQcm9qZWN0c1xcRGVqYVZ1LU5ld1xcZGVqYXZ1XFxjbXMvc3JjXFxhcHBcXGxheW91dHNcXGZ1bGx3aWR0aFxcZnVsbHdpZHRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2Z1bGx3aWR0aC9mdWxsd2lkdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/layouts/fullwidth/fullwidth.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/fullwidth/fullwidth.component.ts ***!
  \**********************************************************/
/*! exports provided: FullwidthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullwidthComponent", function() { return FullwidthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FullwidthComponent = class FullwidthComponent {
    constructor() { }
    ngOnInit() {
    }
};
FullwidthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fullwidth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fullwidth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/fullwidth/fullwidth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fullwidth.component.scss */ "./src/app/layouts/fullwidth/fullwidth.component.scss")).default]
    })
], FullwidthComponent);



/***/ }),

/***/ "./src/app/layouts/fullwidth/fullwidth.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/fullwidth/fullwidth.module.ts ***!
  \*******************************************************/
/*! exports provided: FullwidthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullwidthModule", function() { return FullwidthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _fullwidth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullwidth.component */ "./src/app/layouts/fullwidth/fullwidth.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let FullwidthModule = class FullwidthModule {
};
FullwidthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _fullwidth_component__WEBPACK_IMPORTED_MODULE_3__["FullwidthComponent"],
            _modules_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]
    })
], FullwidthModule);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.clickCounter = 0;
        this.name = '';
        this.validate = false;
    }
    ngOnInit() {
        this.http.fetchHome().subscribe(data => {
            console.log(data);
            this.validate = true;
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401 || err.status === 500) {
                    this.router.navigate(['content/login']);
                }
            }
        });
    }
    countClick() {
        this.clickCounter += 1;
    }
    setClasses() {
        const myClasses = {
            active: this.clickCounter > 4,
            notactive: this.clickCounter <= 4,
        };
        return myClasses;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.login-container mat-card-actions {\n  margin: 0; }\n\n.login-container mat-card-actions button {\n    padding: 0 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sb2dpbi9DOlxcV2ViIFByb2plY3RzXFxEZWphVnUtTmV3XFxkZWphdnVcXGNtcy9zcmNcXGFwcFxcbW9kdWxlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFFSSxTQUFTLEVBQUE7O0FBRmI7SUFJTSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.loginUserData = {};
    }
    ngOnInit() {
    }
    loginUser() {
        this.auth.loginUser(this.loginUserData).subscribe(res => {
            if (!res.success) {
                this.router.navigate(['content/login']);
                console.log('res.error');
            }
            else {
                console.log('res.success');
                localStorage.setItem('token', res.token);
                this.router.navigate(['content']);
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/test/test.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/test/test.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/test/test.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/test/test.component.ts ***!
  \************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let TestComponent = class TestComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() { }
    buttonClick() {
        this.http.myMethod().subscribe(data => {
            this.galleryCategories = data;
            console.log(this.galleryCategories);
        }, err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
                if (err.status === 401 || err.status === 500) {
                    this.router.navigate(['content/login']);
                }
            }
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/modules/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-toolbar-container {\n  font-size: 17px; }\n  .header-toolbar-container .header-toolbar {\n    justify-content: space-between; }\n  .header-toolbar-container .header-toolbar__left {\n      display: flex;\n      align-items: center; }\n  .header-toolbar-container .header-toolbar__left .logo {\n        margin: 0 25px 0 50px;\n        width: 34px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxXZWIgUHJvamVjdHNcXERlamFWdS1OZXdcXGRlamF2dVxcY21zL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBO0VBRGpCO0lBR0ksOEJBQThCLEVBQUE7RUFIbEM7TUFLTSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7RUFOekI7UUFRUSxxQkFBcUI7UUFDckIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9vbGJhci1jb250YWluZXIge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICAuaGVhZGVyLXRvb2xiYXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgJl9fbGVmdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW46IDAgMjVweCAwIDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgLm5hdi1pdGVtIGEge1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    // color = 'primary';
    // mode = 'indeterminate';
    // value = 50;
    // bufferValue = 75;
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth.service */ "./src/app/auth.service.ts");



let SidebarComponent = class SidebarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/components/sidebar/sidebar.component.scss")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");







// Material Design

let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            // Material Design
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        const tokenizedReq = req.clone({ setHeaders: { Authorization: `Bearer ${authService.getToken()}` } });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptorService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Web Projects\DejaVu-New\dejavu\cms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map