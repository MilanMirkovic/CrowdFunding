(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container \">\n    <form class=\"form-horizontal\" (ngSubmit)=\"saveProject()\">\n     \n     \n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-1\" for=\"input-project\">Name of the Project</label>\n        <div class=\"col-sm-11\">\n            <input class=\"form-control\" name=\"name-project\" id=\"input-title\" [(ngModel)]=\"newProject.name\"/>\n          </div>\n      </div>\n  \n  \n  \n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-1\" for=\"input-author\">Category: </label>\n          <div class=\"col-sm-11\">\n            <select class=\"form-control\" name=\"input-category\" id=\"input-kategorija\"  [(ngModel)]=\"newProject.category\">\n              <option *ngFor=\"let c of categories\" [ngValue]=\"c\">{{c.name}}</option>\n            </select>\n          </div>\n        </div>\n  \n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-image-url\">Image Url: </label>\n            <div class=\"col-sm-11\">\n              <input class=\"form-control\" name=\"input-image-url\" id=\"input-image-url\" [(ngModel)]=\"newProject.imageUrl\"/>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-image-url\">Video Url: </label>\n            <div class=\"col-sm-11\">\n              <input class=\"form-control\" name=\"video-url\" id=\"input-image-url\" [(ngModel)]=\"newProject.videoUrl\"/>\n            </div>\n        </div>\n  \n  \n  \n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-price\">Description: </label>\n            <div class=\"col-sm-11\">\n              <input class=\"form-control\" name=\"input-description\" id=\"input-price\" [(ngModel)]=\"newProject.description\"/>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-price\">About: </label>\n            <div class=\"col-sm-11\">\n              <textarea class=\"form-control\" name=\"input-description\" id=\"input-price\" [(ngModel)]=\"newProject.aboutProject\"></textarea>\n            </div>\n        </div>\n  \n  \n        <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-price\">Money Target: </label>\n            <div class=\"col-sm-11\">\n              <input class=\"form-control\" name=\"input-price\" id=\"input-price\" [(ngModel)]=\"newProject.moneyTarget\"/>\n            </div>\n        </div>\n  \n  \n         <div class=\"form-group save\">\n              <input class=\"btn btn-primary\" type=\"submit\" value=\"save\"/>\n         </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/project.model */ "./src/app/models/project.model.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/category.service */ "./src/app/service/category.service.ts");







var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(projectService, authenticationService, route, categoryService) {
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.categoryService = categoryService;
        this.newProject = new _models_project_model__WEBPACK_IMPORTED_MODULE_2__["Project"]({
            name: '',
            imageUrl: '',
            videoUrl: '',
            description: '',
            aboutProject: '',
            moneyTarget: 0,
            user: {},
            category: {}
        });
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.fillCategories();
        this.getUserName();
        this.completeUser();
    };
    AddProjectComponent.prototype.getUserName = function () {
        this.username = this.authenticationService.getUser();
    };
    AddProjectComponent.prototype.completeUser = function () {
        var _this = this;
        this.projectService.getUser(this.username).subscribe(function (res) {
            _this.user = res;
        });
    };
    AddProjectComponent.prototype.saveProject = function () {
        var _this = this;
        this.newProject.user = this.user;
        this.projectService.saveProject(this.newProject).subscribe(function (res) {
            _this.route.navigate(["/main"]);
        });
    };
    AddProjectComponent.prototype.fillCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _service_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _filter_projects_filter_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-projects/filter-projects.component */ "./src/app/filter-projects/filter-projects.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _projects_of_category_projects_of_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects-of-category/projects-of-category.component */ "./src/app/projects-of-category/projects-of-category.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");










var routes = [
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'project/:id', component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailsComponent"] },
    { path: 'filter/:id/:name', component: _filter_projects_filter_projects_component__WEBPACK_IMPORTED_MODULE_6__["FilterProjectsComponent"] },
    { path: 'addproject', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_7__["AddProjectComponent"] },
    { path: 'project/group/:id', component: _projects_of_category_projects_of_category_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsOfCategoryComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<html>\r\n<body>\r\n\t\r\n\r\n\r\n<app-navigation-bar></app-navigation-bar>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/can-activate-auth.guard */ "./src/app/security/can-activate-auth.guard.ts");
/* harmony import */ var _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./security/token-interceptor.service */ "./src/app/security/token-interceptor.service.ts");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./project-details/project-details.component */ "./src/app/project-details/project-details.component.ts");
/* harmony import */ var _project_details_SafePipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./project-details/SafePipe */ "./src/app/project-details/SafePipe.ts");
/* harmony import */ var _filter_projects_filter_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter-projects/filter-projects.component */ "./src/app/filter-projects/filter-projects.component.ts");
/* harmony import */ var _projects_of_category_projects_of_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects-of-category/projects-of-category.component */ "./src/app/projects-of-category/projects-of-category.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _project_details_SafePipe__WEBPACK_IMPORTED_MODULE_16__["SafePipe"],
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_13__["NavigationBarComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDetailsComponent"],
                _filter_projects_filter_projects_component__WEBPACK_IMPORTED_MODULE_17__["FilterProjectsComponent"],
                _projects_of_category_projects_of_category_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsOfCategoryComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_20__["AddProjectComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _security_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                    multi: true
                },
                _security_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _security_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_10__["CanActivateAuthGuard"],
                _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_12__["JwtUtilsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter-projects/filter-projects.component.css":
/*!***************************************************************!*\
  !*** ./src/app/filter-projects/filter-projects.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n  }\r\n \r\n  #one-project{\r\n      margin-bottom: 40px;\r\n  }\r\n \r\n  .filter{\r\n      float: left;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLXByb2plY3RzL2ZpbHRlci1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0VBQ3ZCOztFQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztFQUVBO01BQ0ksV0FBVyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLXByb2plY3RzL2ZpbHRlci1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuIFxyXG4gICNvbmUtcHJvamVjdHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXJ7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O30iXX0= */"

/***/ }),

/***/ "./src/app/filter-projects/filter-projects.component.html":
/*!****************************************************************!*\
  !*** ./src/app/filter-projects/filter-projects.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n    <div class=\"row\">\n      <ul id=\"lista\">\n        <div>\n          <li *ngFor=\"let p of project\">\n  \n            <div id=\"one-project\" class=\"col-md-6\">\n              <span><a [routerLink]=\"['/project', p.id]\">\n                  <h3>{{p.name}}</h3>\n                </a></span>\n              <span>\n                <p>{{p.description}}</p>\n              </span>\n              <div><img class=\"img-rounded\" width=\"250\" height=\"250\" src=\"{{p.imageUrl}}\"></div>\n            </div>\n          </li>\n        </div>\n      </ul>\n    \n    </div>\n  </div>\n  \n  \n  "

/***/ }),

/***/ "./src/app/filter-projects/filter-projects.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/filter-projects/filter-projects.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterProjectsComponent", function() { return FilterProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var FilterProjectsComponent = /** @class */ (function () {
    function FilterProjectsComponent(route, http, authenticationService, projectService) {
        this.route = route;
        this.http = http;
        this.authenticationService = authenticationService;
        this.projectService = projectService;
        console.log(this.categoryId, this.name);
    }
    FilterProjectsComponent.prototype.ngOnInit = function () {
        console.log(this.name);
        this.filterProjects();
    };
    FilterProjectsComponent.prototype.filterProjects = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.name = params['name'];
            _this.projectService.filterProjects(_this.id, _this.name).subscribe(function (res) {
                _this.project = res;
                console.log(_this.id, _this.name);
            });
        });
    };
    FilterProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-projects',
            template: __webpack_require__(/*! ./filter-projects.component.html */ "./src/app/filter-projects/filter-projects.component.html"),
            styles: [__webpack_require__(/*! ./filter-projects.component.css */ "./src/app/filter-projects/filter-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _service_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], FilterProjectsComponent);
    return FilterProjectsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer >\n\n\t\t<!-- Footer Elements -->\n\t\t<div class=\"container\">\n\t  \n\t\t  <!-- Call to action -->\n\t\t  <ul class=\"list-unstyled list-inline text-center py-2\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t  <h5 class=\"mb-1\">Register for free</h5>\n\t\t\t</li>\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t  <a href=\"#!\" class=\"btn btn-outline-white btn-rounded\">Sign up!</a>\n\t\t\t</li>\n\t\t  </ul>\n\t\t  <!-- Call to action -->\n\t  \n\t\t</div>\n\t\t<!-- Footer Elements -->\n\t  \n\t\t<!-- Copyright -->\n\t\t<div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n\t\t  <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a>\n\t\t</div>\n\t\t<!-- Copyright -->\n\t  \n\t  </footer>\n\t  <!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-signin{\r\n    width:30%;\r\n    margin:0 auto;\r\n}\r\n\r\n.container{\r\n    margin-top:100px;\r\n    margin-bottom:15%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1zaWduaW57XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDoxMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTUlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<form class=\"form-signin\" (ngSubmit)=\"login()\">\r\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n  <label for=\"username\" class=\"sr-only\">Username</label>\r\n  <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required autofocus>\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\r\n  <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n</form>\r\n<div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\r\n  Wrong username or password.\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n  }\r\n \r\n  #one-project{\r\n      margin-bottom: 40px;\r\n  }\r\n \r\n  .filter{\r\n      float: left;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7RUFDdkI7O0VBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiBcclxuICAjb25lLXByb2plY3R7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVye1xyXG4gICAgICBmbG9hdDogbGVmdDt9Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <div class=\"row\">\n    <ul id=\"lista\">\n      <div>\n        <li *ngFor=\"let p of randomProjects\">\n\n          <div id=\"one-project\" class=\"col-md-6\">\n            <span><a [routerLink]=\"['/project', p.id]\">\n                <h3>{{p.name}}</h3>\n              </a></span>\n            <span>\n              <p>{{p.description}}</p>\n            </span>\n            <div><img class=\"img-rounded\" width=\"250\" height=\"250\" src=\"{{p.imageUrl}}\"></div>\n          </div>\n        </li>\n      </div>\n    </ul>\n  \n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(projectService) {
        this.projectService = projectService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getRandomProjects();
    };
    MainComponent.prototype.getRandomProjects = function () {
        var _this = this;
        this.projectService.getRandomProjects().subscribe(function (res) { _this.randomProjects = res; });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/models/commentar.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/commentar.model.ts ***!
  \*******************************************/
/*! exports provided: Commentar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commentar", function() { return Commentar; });
var Commentar = /** @class */ (function () {
    function Commentar(c) {
        this.id = c.id;
        this.commentar = c.commentar;
        this.project = c.project;
        this.user = c.user;
    }
    return Commentar;
}());



/***/ }),

/***/ "./src/app/models/donation.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/donation.model.ts ***!
  \******************************************/
/*! exports provided: Donation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Donation", function() { return Donation; });
var Donation = /** @class */ (function () {
    function Donation(donation) {
        this.id = donation.id;
        this.user = donation.user;
        this.donation = donation.donation;
        this.project = donation.project;
    }
    return Donation;
}());



/***/ }),

/***/ "./src/app/models/faq.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/faq.model.ts ***!
  \*************************************/
/*! exports provided: Faq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return Faq; });
var Faq = /** @class */ (function () {
    function Faq(f) {
        this.id = f.id;
        this.answer = f.answer;
        this.question = f.question;
        this.project = f.project;
    }
    return Faq;
}());



/***/ }),

/***/ "./src/app/models/filter.ts":
/*!**********************************!*\
  !*** ./src/app/models/filter.ts ***!
  \**********************************/
/*! exports provided: Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
var Filter = /** @class */ (function () {
    function Filter(f) {
        this.id = f.id;
        this.name = f.name;
    }
    return Filter;
}());



/***/ }),

/***/ "./src/app/models/project.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(p) {
        this.id = p.id;
        this.moneyTarget = p.moneyTarget;
        this.name = p.name;
        this.description = p.description;
        this.videoUrl = p.videoUrl;
        this.imageUrl = p.imageUrl;
        this.user = p.user;
        this.donations = p.donations;
        this.faqs = p.faqs;
        this.aboutProject = p.aboutProject;
        this.comments = p.comments;
        this.category = p.category;
        this.updates = p.updates;
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/models/update.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/update.model.ts ***!
  \****************************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
var Update = /** @class */ (function () {
    function Update(u) {
        this.id = u.id;
        this.updateDescription = u.updateDescription;
        this.date = u.date;
        u.project = u.project;
    }
    return Update;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(ucf) {
        this.id = ucf.id;
        this.firstName = ucf.firstName;
        this.lastName = ucf.lastName;
        this.username = ucf.username;
        this.password = ucf.password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".li{\r\n    float: none;\r\n    display: inline-block;\r\n    text-align: center;\r\n  }\r\n\r\n  .pull-right{\r\n    display: inline-block;\r\n}\r\n\r\n  ul {\r\n    list-style-type: none;\r\n  }\r\n\r\n  a{\r\n      padding-top: 10px;\r\n  }\r\n\r\n  .search{\r\n    height: 24px;\r\n    width: 130px;\r\n    border-radius: 3px;\r\n}\r\n\r\n  select{\r\n  height: 24px;\r\n  border-radius: 3px;\r\n}\r\n\r\n  #filterBar{\r\n  margin-top: 13px;\r\n}\r\n\r\n  .btn{\r\n  padding-top: 1px;\r\n  padding-bottom: 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0FBQ3pCOztFQUVBO0lBQ0kscUJBQXFCO0VBQ3ZCOztFQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0VBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGl7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wdWxsLXJpZ2h0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgLnNlYXJjaHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5zZWxlY3R7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4jZmlsdGVyQmFye1xyXG4gIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a [routerLink]=\"['main']\"><img\n      src=\"https://startupsac.com/wp-content/uploads/2016/08/Equity-Crowdfunding-02-640x287.png\"\n      class=\"img-responsive center-block\" alt=\"Responsive image\"> </a>\n</div>\n<nav class=\"navbar navbar-inverse  \" role=\"navigation\" align=\"center\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand\" [routerLink]=\"['main']\" href=\"#\">Home</a> -->\n      <!-- <a class=\"navbar-brand success\" [routerLink]=\"['addproject']\" *ngIf=\"isLoggedIn()\"><span class=\"glyphicon glyphicon-plus-sign\"></span>Create New Project</a> -->\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav li \" *ngFor=\"let c of categories\">\n        <li><a [routerLink]=\"['/project/group', c.id]\">{{c.name}}</a></li>\n\n\n\n      </ul>\n      <ul class=\"nav navbar-nav pull-right\">\n          <li><a [routerLink]=\"['/addproject']\" *ngIf=\"isLoggedIn()\">Add Project</a> </li>\n        <li><a id=\"logOut\" *ngIf=\"isLoggedIn()\" (click)=\"logout()\">LogOut</a></li>\n        <li><a id=\"logOut\" [routerLink]=\"['login']\" *ngIf=\"!isLoggedIn()\">LogIn</a></li>\n        <li><a [routerLink]=\"['/register']\" *ngIf=\"!isLoggedIn()\">Register</a> </li>\n        \n      </ul>\n\n      <ul class=\"nav navbar-nav pull-left\" id=\"filterBar\">\n        <div>\n          <span> <input class=\"search\" type=\"text\" name=\"name\" id=\"\" [(ngModel)]=\"name\">\n            <select class=\"mdb-select md-form colorful-select dropdown-primary\" id=\"exam-subject\" required\n              [(ngModel)]=\"id\" name=\"id\">\n              <option *ngFor=\"let c of categories\" [ngValue]=\"c.id\">{{c.name}}</option>\n            </select>\n          </span>\n          <a [routerLink]=\"['filter',id, name ]\" class=\"btn btn-primary\">filter</a>\n          <a (click)=\"resetFilter()\" class=\"btn btn-danger\">reset</a>\n        </div>\n      </ul>\n\n      \n\n    </div>\n    <!-- /.navbar-collapse -->\n\n  </div><!-- /.container-fluid -->\n</nav>\n\n"

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/filter */ "./src/app/models/filter.ts");






var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(categoryService, authenticationService, router) {
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.id = 1;
        this.name = '';
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    NavigationBarComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) { _this.categories = res; });
    };
    NavigationBarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NavigationBarComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    NavigationBarComponent.prototype.resetFilter = function () {
        this.id = 0;
        this.name = '';
        this.router.navigate(['/main']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_filter__WEBPACK_IMPORTED_MODULE_5__["Filter"])
    ], NavigationBarComponent.prototype, "newFilter", void 0);
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! ./navigation-bar.component.html */ "./src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  There is nothing here!\r\n</h1>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/project-details/SafePipe.ts":
/*!*********************************************!*\
  !*** ./src/app/project-details/SafePipe.ts ***!
  \*********************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/project-details/project-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/project-details/project-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#donation{\r\n    border-style: solid;\r\n  border-color: green;\r\n  text-align: center;\r\n  border-radius: 25px;\r\n  border: 2px solid #73AD21;\r\n  padding: 20px; \r\n  width: 280px;\r\n  margin-top: 75px;\r\n  margin-left: 30px;\r\n}\r\n\r\ninput{\r\n    width: 100px;\r\n}\r\n\r\n.btn{\r\n    border-radius: 10px;\r\n}\r\n\r\n.navbar{\r\n    background: white;\r\n    border: 0px;\r\n    \r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n  }\r\n\r\n#faq{\r\n \r\n    border-radius: 10px;\r\n    border: 1px solid gray;\r\n    width: 60%;\r\n}\r\n\r\np:nth-child(even) {\r\n    background:rgb(189, 187, 187);\r\n    margin: 0px;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n  }\r\n\r\n#Menu3{\r\n    display: none;\r\n  }\r\n\r\n.comment{\r\n    font-style: italic;\r\n    width: 60%;\r\n    border-radius: 10px;\r\n    border: 1px solid gray;\r\n    \r\n}\r\n\r\n#comment-div{\r\n  padding-left: 40px;\r\n  width: 62%;\r\n}\r\n\r\n.comment-box{\r\n  width: 100%;\r\n}\r\n\r\n.update{\r\n  width: 60%;\r\n  border-radius: 10px;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.descritpion{\r\n  padding-left: 5px;\r\n  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxxQkFBcUI7RUFDdkI7O0FBQ0Y7O0lBRUksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLCtCQUErQjtJQUMvQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7O0FBRTFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsaUJBQWlCOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkb25hdGlvbntcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNzNBRDIxO1xyXG4gIHBhZGRpbmc6IDIwcHg7IFxyXG4gIHdpZHRoOiAyODBweDtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuI2ZhcXtcclxuIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG5wOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigxODksIDE4NywgMTg3KTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gICNNZW51M3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuLmNvbW1lbnR7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBcclxufVxyXG5cclxuI2NvbW1lbnQtZGl2e1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB3aWR0aDogNjIlO1xyXG59XHJcblxyXG4uY29tbWVudC1ib3h7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51cGRhdGV7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmRlc2NyaXRwaW9ue1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/project-details/project-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/project-details/project-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <h1>{{project.name}}</h1>\n      <span>Project By: {{project.user.username}}</span>\n      <div>\n        <iframe width=\"560\" height=\"315\" [src]=\"project.videoUrl | safe\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n      <br>\n      <p>{{project.description}}</p>\n    </div>\n    <div *ngIf=\"project.donations\" class=\"col-md-4 donation\" id=\"donation\">\n      <h3 class=\"target\"> Target: <span> {{project.moneyTarget}} $</span></h3>\n      <br>\n      <br>\n      <h4> Money Raised: {{donationSum}} $</h4>\n      <p>Number Of Donations: {{numberOfDonations}}</p>\n      <br>\n      <br>\n      <span *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/login']\">Login</a>/<a [routerLink]=\"['/register']\">Register</a> to Donate.</span>\n      <div *ngIf=\"isLoggedIn()\">\n        <span> <input type=\"number\" name=\"novaDonacija\" [(ngModel)]=\"newDonation.donation\"></span>\n        <button (click)=\"saveDonation()\" class=\"btn btn-primary\">Donate</button>\n      </div>\n    </div>\n  </div>\n\n\n\n\n  <br>\n  <br>\n  <br>\n  <div class=\"container\">\n\n    <nav class=\"navbar navbar-default\">\n      <ul class=\"nav navbar-nav\">\n        <li><a type=\"button\" (click)=\"toggleVisibility('Menu1');\" role=\"button\">FAQ</a></li>\n        <li><a type=\"button\" (click)=\"toggleVisibility('Menu2');\" role=\"button\">UPDATES</a></li>\n        <li><a type=\"button\" (click)=\"toggleVisibility('Menu3');\" role=\"button\">ABOUT PROJECT</a></li>\n        <li><a type=\"button\" (click)=\"toggleVisibility('Menu4');\" role=\"button\">COMMENTS</a></li>\n      </ul>\n    </nav>\n\n    <div id=\"Menu1\" style=\"display: none;\">\n      <ul *ngFor=\"let f of project.faqs;\">\n        <li>\n          <div id=\"faq\">\n            <h5>Question: {{f.question}}</h5>\n            <p>Answer: {{f.answer}}</p>\n          </div>\n          <button *ngIf=\"checkUser()\" (click)=\"deleteFaq(f)\" class=\"btn btn-danger\"> Delete</button> \n        </li>\n        \n        \n      </ul>\n      <button *ngIf=\"checkUser()\" class=\"btn btn-primary\" (click)=\"addFaqToggle()\">Add new Faq</button>\n\n      <form *ngIf=\"checkUser() && faqToggle\" class=\"form-horizontal\" (ngSubmit)=\"addFaq()\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-question\">Question: </label>\n            <div class=\"col-sm-11\">\n              <input class=\"form-control\" name=\"name-project\" id=\"input-title\" style=\"width:500px\" [(ngModel)]=\"newFaq.question\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-author\">Answer: </label>\n            <input class=\"form-control\" name=\"answer\" id=\"input-answer\" style=\"width:500px\" [(ngModel)]=\"newFaq.answer\"/>\n          </div> \n          \n          <div class=\"form-group save\">\n              <input class=\"btn btn-success\" type=\"submit\" value=\"save\"/>\n         </div>\n      </form>\n  \n  </div>\n\n  <div id=\"Menu2\" style=\"display: none; \">\n      <ul *ngFor=\"let u of project.updates\">\n        <li>\n          <div class=\"update\" >\n            <h5 class=\"description\">{{u.updateDescription}}</h5>\n            <p class=\"description\">{{u.date | date}}</p>\n           </div>\n      </li>\n      </ul>\n      <form *ngIf=\"checkUser()\" class=\"form-horizontal\" (ngSubmit)=\"addUpdate()\">\n\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-1\" for=\"input-update\">Add Update: </label>\n            <input class=\"form-control\" name=\"update\" id=\"input-update\" style=\"width:500px\" [(ngModel)]=\"newUpdate.updateDescription\"/>\n          </div> \n          \n          <div class=\"form-group save\">\n              <input class=\"btn btn-success\" type=\"submit\" value=\"save\"/>\n         </div>\n      </form>\n  </div>\n\n\n  <div id=\"Menu3\">\n    <p>{{project.aboutProject}}</p>\n  </div>\n\n\n  <div *ngIf=\"project.comments\" id=\"Menu4\">\n    <ul *ngFor=\"let p of project.comments\">\n      <li>\n        <div class=\"comment\">\n          <p>{{p.commentar}}</p>\n          <p>By: {{p.user.username}}</p>\n        </div>\n        <button *ngIf=\"checkUser()\" (click)=\"deleteComment(p)\" class=\"btn btn-danger\"> Delete</button> \n      </li>\n    </ul>\n    <span *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/login']\">Login</a>/<a [routerLink]=\"['/register']\">Register</a> to Comment.</span>\n    <form *ngIf=\"isLoggedIn()\" (ngSubmit)=\"addComment()\">\n      <div id=\"comment-div\">\n        <label for=\"\">Comment this project: </label>\n        <textarea class=\"comment-box\" name=\"input-project\" id=\"input-commentar\" [(ngModel)]=\"newCommentar.commentar\" ></textarea>\n        <input class=\"btn btn-success\" type=\"submit\" value=\"Dodaj\" />\n\n      </div>\n    </form>\n  </div>\n\n\n</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/project-details/project-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _models_donation_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/donation.model */ "./src/app/models/donation.model.ts");
/* harmony import */ var _models_faq_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/faq.model */ "./src/app/models/faq.model.ts");
/* harmony import */ var _service_commentar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/commentar.service */ "./src/app/service/commentar.service.ts");
/* harmony import */ var _models_commentar_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/commentar.model */ "./src/app/models/commentar.model.ts");
/* harmony import */ var _service_faq_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/faq.service */ "./src/app/service/faq.service.ts");
/* harmony import */ var _service_update_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service/update.service */ "./src/app/service/update.service.ts");
/* harmony import */ var _models_update_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../models/update.model */ "./src/app/models/update.model.ts");












var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(updateService, faqService, route, projectService, authenticationService, commentService) {
        this.updateService = updateService;
        this.faqService = faqService;
        this.route = route;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.commentService = commentService;
        this.faqToggle = false;
        this.divs = ["Menu1", "Menu2", "Menu3", "Menu4"];
        this.visibleDivId = null;
        this.newDonation = new _models_donation_model__WEBPACK_IMPORTED_MODULE_5__["Donation"]({
            user: {},
            donation: 0,
            project: {}
        });
        this.newCommentar = new _models_commentar_model__WEBPACK_IMPORTED_MODULE_8__["Commentar"]({
            commentar: '',
            user: {},
            project: {}
        });
        this.newFaq = new _models_faq_model__WEBPACK_IMPORTED_MODULE_6__["Faq"]({
            answer: '',
            question: '',
            project: {}
        });
        this.newUpdate = new _models_update_model__WEBPACK_IMPORTED_MODULE_11__["Update"]({
            updateDescription: '',
            project: {},
            date: new Date(),
        });
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject();
        this.getUserName();
        this.completeUser();
    };
    ProjectDetailsComponent.prototype.getProject = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.projectService.getProject(_this.id).subscribe(function (res) {
                _this.project = res;
                _this.sumDonations();
            });
        });
    };
    ProjectDetailsComponent.prototype.sumDonations = function () {
        var s = 0;
        for (var _i = 0, _a = this.project.donations; _i < _a.length; _i++) {
            var d = _a[_i];
            s += d.donation;
        }
        this.numberOfDonations = this.project.donations.length;
        this.donationSum = s;
    };
    ProjectDetailsComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    ProjectDetailsComponent.prototype.saveDonation = function () {
        var _this = this;
        console.log(this.newDonation.donation);
        this.newDonation.project = this.project;
        this.newDonation.user = this.user;
        this.projectService.saveDonation(this.newDonation).subscribe(function (res) {
            _this.getProject();
        });
        console.log(this.newDonation.donation);
    };
    ProjectDetailsComponent.prototype.getUserName = function () {
        this.username = this.authenticationService.getUser();
    };
    ProjectDetailsComponent.prototype.completeUser = function () {
        var _this = this;
        this.projectService.getUser(this.username).subscribe(function (res) {
            _this.user = res;
        });
    };
    ProjectDetailsComponent.prototype.checkUser = function () {
        if (this.username === this.project.user.username) {
            return true;
        }
        else {
            return false;
        }
    };
    ProjectDetailsComponent.prototype.toggleVisibility = function (divId) {
        if (this.visibleDivId === divId) {
            this.visibleDivId = null;
        }
        else {
            this.visibleDivId = divId;
        }
        this.hideNonVisibleDivs();
    };
    ProjectDetailsComponent.prototype.hideNonVisibleDivs = function () {
        var i, divId, div;
        for (i = 0; i < this.divs.length; i++) {
            divId = this.divs[i];
            div = document.getElementById(divId);
            if (this.visibleDivId === divId) {
                div.style.display = "block";
            }
            else {
                div.style.display = "none";
            }
        }
    };
    ProjectDetailsComponent.prototype.addComment = function () {
        var _this = this;
        this.newCommentar.project = this.project;
        this.newCommentar.user = this.user;
        this.commentService.saveCommentar(this.newCommentar).subscribe(function (res) {
            _this.getProject();
            _this.newCommentar = new _models_commentar_model__WEBPACK_IMPORTED_MODULE_8__["Commentar"]({
                commentar: '',
                user: {},
                project: {}
            });
        });
    };
    ProjectDetailsComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.commentService.deleteCommentar(comment.id).subscribe(function (res) {
            _this.getProject();
        });
    };
    ProjectDetailsComponent.prototype.addFaq = function () {
        var _this = this;
        this.newFaq.project = this.project;
        this.faqService.saveFaq(this.newFaq).subscribe(function (res) {
            _this.getProject();
        });
    };
    ProjectDetailsComponent.prototype.addFaqToggle = function () {
        this.faqToggle = !this.faqToggle;
    };
    ProjectDetailsComponent.prototype.deleteFaq = function (f) {
        var _this = this;
        this.faqService.deleteFaq(f.id).subscribe(function (res) {
            _this.getProject();
        });
    };
    ProjectDetailsComponent.prototype.addUpdate = function () {
        var _this = this;
        this.newUpdate.date = new Date();
        this.newUpdate.project = this.project;
        this.updateService.saveUpdate(this.newUpdate).subscribe(function (res) {
            _this.getProject();
        });
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_update_service__WEBPACK_IMPORTED_MODULE_10__["UpdateService"], _service_faq_service__WEBPACK_IMPORTED_MODULE_9__["FaqService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _security_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _service_commentar_service__WEBPACK_IMPORTED_MODULE_7__["CommentarService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/projects-of-category/projects-of-category.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/projects-of-category/projects-of-category.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n  }\r\n \r\n  #one-project{\r\n      margin-bottom: 40px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtb2YtY2F0ZWdvcnkvcHJvamVjdHMtb2YtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtFQUN2Qjs7RUFFQTtNQUNJLG1CQUFtQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzLW9mLWNhdGVnb3J5L3Byb2plY3RzLW9mLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gXHJcbiAgI29uZS1wcm9qZWN0e1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects-of-category/projects-of-category.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/projects-of-category/projects-of-category.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n      <ul id=\"lista\">\n        <div>\n          <li *ngFor=\"let p of projects\">\n  \n            <div id=\"one-project\" class=\"col-md-6\">\n              <span><a [routerLink]=\"['/project', p.id]\">\n                  <h3>{{p.name}}</h3>\n                </a></span>\n              <span>\n                <p>{{p.description}}</p>\n              </span>\n              <div><img class=\"img-rounded\" width=\"250\" height=\"250\" src=\"{{p.imageUrl}}\"></div>\n            </div>\n          </li>\n        </div>\n      </ul>\n    \n    </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/projects-of-category/projects-of-category.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/projects-of-category/projects-of-category.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectsOfCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsOfCategoryComponent", function() { return ProjectsOfCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/project.service */ "./src/app/service/project.service.ts");




var ProjectsOfCategoryComponent = /** @class */ (function () {
    function ProjectsOfCategoryComponent(route, projectService) {
        this.route = route;
        this.projectService = projectService;
    }
    ProjectsOfCategoryComponent.prototype.ngOnInit = function () {
        this.projectsOfGroup();
    };
    ProjectsOfCategoryComponent.prototype.projectsOfGroup = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.projectService.projectsOfCategory(_this.id).subscribe(function (res) { _this.projects = res; });
        });
    };
    ProjectsOfCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects-of-category',
            template: __webpack_require__(/*! ./projects-of-category.component.html */ "./src/app/projects-of-category/projects-of-category.component.html"),
            styles: [__webpack_require__(/*! ./projects-of-category.component.css */ "./src/app/projects-of-category/projects-of-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _service_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], ProjectsOfCategoryComponent);
    return ProjectsOfCategoryComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <form  class=\"form-signin\" (ngSubmit) = \"register()\">\n        <h2 class=\"form-signin-heading\">Register Here</h2>\n      <label for=\"student-number\">Name </label>\n      <input class=\"form-control\" name=\"name\"  type=\"text\" [(ngModel)]=\"newUser.firstName\"/>\n      <br/>\n      <label for=\"student-number\">LastName</label>\n      <input class=\"form-control\" name=\"surname\"  type=\"text\" [(ngModel)]=\"newUser.lastName\"/>\n      <br/>\n      <label for=\"student-number\">Username</label>\n      <input class=\"form-control\" name=\"username\"  type=\"text\" [(ngModel)]=\"newUser.username\"  />\n      <br/>\n      <label for=\"student-number\">Password</label>\n      <input  class=\"form-control\" name=\"pass\"  type=\"password\" [(ngModel)]=\"newUser.password\"/>\n      <input  class=\"btn btn-primary btn-block\" type=\"submit\" value=\"Register\"/>\n    \n    \n      <div *ngIf=existingUser class=\"alert alert-warning box-msg\" role=\"alert\">\n        Choose diferent username\n      </div>\n    </form>\n   </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        });
        this.existingUser = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    RegisterComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getAllUsers().subscribe(function (res) {
            _this.usersInSystem = res;
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.chechUser(this.newUser.username);
        this.userService.register(this.newUser).subscribe(function (res) {
            if (!_this.existingUser) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.existingUser = true;
            }
        });
    };
    RegisterComponent.prototype.chechUser = function (username) {
        for (var _i = 0, _a = this.usersInSystem; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.username === username) {
                this.existingUser = true;
            }
            else {
                this.existingUser = false;
            }
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/security/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../security/jwt-utils.service */ "./src/app/security/jwt-utils.service.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.getUser = function () {
        if (localStorage.currentUser) {
            var user = JSON.parse(localStorage.getItem('currentUser'));
            return user.username;
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _security_jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/security/can-activate-auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/security/can-activate-auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/security/jwt-utils.service.ts":
/*!***********************************************!*\
  !*** ./src/app/security/jwt-utils.service.ts ***!
  \***********************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/security/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/security/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _security_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../security/authentication.service */ "./src/app/security/authentication.service.ts");




var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_security_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get('/api/categories');
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/service/commentar.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/commentar.service.ts ***!
  \**********************************************/
/*! exports provided: CommentarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentarService", function() { return CommentarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CommentarService = /** @class */ (function () {
    function CommentarService(http) {
        this.http = http;
    }
    CommentarService.prototype.saveCommentar = function (comment) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/commentar', JSON.stringify(comment), { headers: headers });
    };
    CommentarService.prototype.deleteCommentar = function (id) {
        return this.http.delete("api/commentar/" + id);
    };
    CommentarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommentarService);
    return CommentarService;
}());



/***/ }),

/***/ "./src/app/service/faq.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/faq.service.ts ***!
  \****************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FaqService = /** @class */ (function () {
    function FaqService(http) {
        this.http = http;
    }
    FaqService.prototype.saveFaq = function (faq) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/faq', JSON.stringify(faq), { headers: headers });
    };
    FaqService.prototype.deleteFaq = function (id) {
        return this.http.delete("api/faq/" + id);
    };
    FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getRandomProjects = function () {
        return this.http.get('api/random/projects');
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get("api/projects/" + id);
    };
    ProjectService.prototype.filterProjects = function (id, name) {
        return this.http.get("api/projects/filter/" + id + "?project=" + name);
    };
    ProjectService.prototype.projectsOfCategory = function (id) {
        return this.http.get("api/projects/category/" + id);
    };
    ProjectService.prototype.saveDonation = function (donation) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/donation', JSON.stringify(donation), { headers: headers });
    };
    ProjectService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user);
    };
    ProjectService.prototype.saveProject = function (project) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/projects', JSON.stringify(project), { headers: headers });
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/service/update.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/update.service.ts ***!
  \*******************************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UpdateService = /** @class */ (function () {
    function UpdateService(http) {
        this.http = http;
    }
    UpdateService.prototype.saveUpdate = function (update) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/update', JSON.stringify(update), { headers: headers });
    };
    UpdateService.prototype.delete = function (id) {
        return this.http.delete("api/update/" + id);
    };
    UpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UpdateService);
    return UpdateService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get('api/users');
    };
    UserService.prototype.register = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('api/register', JSON.stringify(user), { headers: headers });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programiranje\CvProjects\CrowdFunding\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map