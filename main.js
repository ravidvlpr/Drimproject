(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ravid\Desktop\New folder\AngularAppService\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "B1Om":
/*!*********************************************************!*\
  !*** ./src/app/nav-menu/nav-menu/nav-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function () { return ["/home"]; };
const _c1 = function (a0) { return { show: a0 }; };
const _c2 = function () { return ["link-active"]; };
const _c3 = function () { return { exact: true }; };
const _c4 = function () { return ["/about"]; };
const _c5 = function () { return ["/fetch-data"]; };
const _c6 = function () { return ["/employees"]; };
class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
        this.path = "['/counter']";
    }
    ngOnInit() {
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
NavMenuComponent.??fac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 21, vars: 24, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item", 3, "routerLinkActive"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Dream Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavMenuComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Fetch data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](13, _c1, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](15, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](16, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](20, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](21, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](23, _c6));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbWVudS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "C55A":
/*!**********************************************************!*\
  !*** ./src/app/employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/employee.service */ "FOT/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EmployeeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class EmployeeComponent {
    constructor(employeeService, toastr) {
        this.employeeService = employeeService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        this.employeeService.formdata = {
            Id: 0,
            FullName: '',
            PhoneNumber: '',
            PinNumber: ''
        };
    }
    onSubmit(form) {
        this.employeeService.insertEmployee(form.value);
        if (form.value.Id == null) {
            this.resetForm();
            this.toastr.success('Inserted successfully', "EMP. Register");
        }
        else {
            this.resetForm();
            this.toastr.warning('Update successfully', "EMP. Register");
        }
    }
}
EmployeeComponent.??fac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
EmployeeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 22, vars: 7, consts: [[3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], [1, "mb-3"], [1, "form-label"], ["name", "FullName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FullName", "ngModel"], ["class", "validate-error", 4, "ngIf"], ["name", "PhoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PhoneNumber", "ngModel"], ["name", "PinNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PinNumber", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "validate-error"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function EmployeeComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_2_listener($event) { return ctx.employeeService.formdata.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.employeeService.formdata.FullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EmployeeComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.employeeService.formdata.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pin Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_18_listener($event) { return ctx.employeeService.formdata.PinNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.PhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.PinNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.employeeService.buttonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%]\r\n{\r\n    border-color: red;\r\n}\r\n.validate-error[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6ImVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuLnZhbGlkYXRlLWVycm9yXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "FOT/":
/*!********************************************!*\
  !*** ./src/app/shared/employee.service.ts ***!
  \********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EmployeeService {
    constructor() {
        this.buttonText = "Submit";
        this.listEmployee = [];
        this.localItem = localStorage.getItem("employee");
        if (this.localItem == null) {
            this.listEmployee = [];
        }
        else {
            this.listEmployee = JSON.parse(this.localItem);
        }
    }
    insertEmployee(emp) {
        console.log(emp);
        if (emp.Id != null && emp.Id != 0) {
            this.listEmployee.splice(this.listEmployee.indexOf(emp), 1, emp);
        }
        else {
            emp.Id = this.listEmployee.length + 1;
            this.listEmployee.push(emp);
            localStorage.setItem("employee", JSON.stringify(this.listEmployee));
            console.log('in save');
        }
    }
    getEmployee() {
        return this.listEmployee;
    }
    deleteEmployee(emp) {
        const index = this.listEmployee.indexOf(emp);
        console.log(index);
        this.listEmployee.splice(index, 1);
        localStorage.setItem("employee", JSON.stringify(this.listEmployee));
        this.getEmployee();
    }
    editGet(employee) {
        this.buttonText = "Update";
        this.formdata = Object.assign({}, employee);
    }
}
EmployeeService.??fac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(); };
EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: EmployeeService, factory: EmployeeService.??fac, providedIn: 'root' });


/***/ }),

/***/ "MT+8":
/*!************************************************!*\
  !*** ./src/app/Login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/login.service */ "nP7O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class LoginComponent {
    constructor(loginService, rout) {
        this.loginService = loginService;
        this.rout = rout;
        this.loginUser = [];
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm() {
        this.loginService.formData = {
            id: 0,
            user: '',
            password: ''
        };
    }
    onSubmit(form) {
        this.loginService.getUsers().subscribe((response) => {
            this.loginUser = response;
            this.rout.navigate(['/home']);
            // this.angular.forEach(this.loginUser, function(value, key) {
            // if(value.user==form.value.user && value.password==form.value.password)
            // {
            //   console.log('pass');
            // }
            // });
        });
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 3, consts: [[1, "container"], [1, "row", "align-items-start"], [1, "col-md-4"], [1, "col-md-4", "bg-primary"], [3, "submit"], ["form", "ngForm"], [1, "text-center", "my-5"], [1, "mb-3", "row", "my-1"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "name", "user", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["user", "ngModel"], [1, "mb-3", "row"], ["for", "inputPassword", 1, "col-sm-2", "col-form-label"], ["type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function LoginComponent_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginService.formData.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) { return ctx.loginService.formData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.loginService.formData.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.loginService.formData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".center_div[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    width:80% \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsUUFBUSxFQUFFLG9EQUFvRDtBQUNsRSIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcl9kaXZ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOjgwJSAvKiB2YWx1ZSBvZiB5b3VyIGNob2ljZSB3aGljaCBzdWl0cyB5b3VyIGFsaWdubWVudCAqL1xyXG59Il19 */"] });


/***/ }),

/***/ "Qj6i":
/*!**********************************************************!*\
  !*** ./src/app/Employees/employee/employee.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/employee.service */ "FOT/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function EmployeeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Full Name field required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class EmployeeComponent {
    constructor(employeeService, toastr) {
        this.employeeService = employeeService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        this.employeeService.formdata = {
            Id: 0,
            FullName: '',
            PhoneNumber: '',
            PinNumber: ''
        };
    }
    onSubmit(form) {
        this.employeeService.insertEmployee(form.value);
        if (form.value.Id == null) {
            this.resetForm();
            this.toastr.success('Inserted successfully', "EMP. Register");
        }
        else {
            this.resetForm();
            this.toastr.warning('Update successfully', "EMP. Register");
        }
    }
}
EmployeeComponent.??fac = function EmployeeComponent_Factory(t) { return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
EmployeeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeComponent, selectors: [["app-employee"]], decls: 22, vars: 7, consts: [[3, "submit"], ["form", "ngForm"], ["type", "hidden", "name", "Id", 3, "ngModel", "ngModelChange"], ["Id", "ngModel"], [1, "mb-3"], [1, "form-label"], ["name", "FullName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["FullName", "ngModel"], ["class", "validate-error", 4, "ngIf"], ["name", "PhoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PhoneNumber", "ngModel"], ["name", "PinNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["PinNumber", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "validate-error"]], template: function EmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function EmployeeComponent_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_2_listener($event) { return ctx.employeeService.formdata.Id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.employeeService.formdata.FullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, EmployeeComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.employeeService.formdata.PhoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Pin Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_18_listener($event) { return ctx.employeeService.formdata.PinNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.Id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.FullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.PhoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.employeeService.formdata.PinNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.employeeService.buttonText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%]\r\n{\r\n    border-color: red;\r\n}\r\n.validate-error[_ngcontent-%COMP%]\r\n{\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksVUFBVTtBQUNkIiwiZmlsZSI6ImVtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWRcclxue1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuLnZhbGlkYXRlLWVycm9yXHJcbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-menu/nav-menu/nav-menu.component */ "B1Om");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'AngularAppService';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
    } }, directives: [_nav_menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Uflk":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee/employee.component */ "C55A");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "zVi1");



class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmployeesComponent.??fac = function EmployeesComponent_Factory(t) { return new (t || EmployeesComponent)(); };
EmployeesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeesComponent, selectors: [["app-employees"]], decls: 12, vars: 0, consts: [[1, "container", "my-3"], [1, "col"], [1, "p-3", "border", "bg-light", "text-center"], [1, "container", "px-4", "my-3"], [1, "row", "gx-5"], [1, "col-md-5"], [1, "p-3", "bg-light"], [1, "col-md-7"]], template: function EmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Employee Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "app-employee-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_employee_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "VQtb":
/*!**************************************************************!*\
  !*** ./src/app/FetchData/fetch-data/fetch-data.component.ts ***!
  \**************************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_fetchdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/fetchdata.service */ "ofrq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "oOf3");




function FetchDataComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r0.loadingImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function FetchDataComponent_div_2_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const emp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", emp_r3.name.title, " ", emp_r3.name.first, " ", emp_r3.name.last, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](emp_r3.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](emp_r3.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](emp_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", emp_r3.picture.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 10, currentPage: a2, totalItems: a3 }; };
function FetchDataComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Employees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, FetchDataComponent_div_2_tr_17_Template, 11, 7, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function FetchDataComponent_div_2_Template_pagination_controls_pageChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](18, 1, ctx_r1.employees, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](4, _c0, ctx_r1.page, ctx_r1.totalRec)));
} }
class FetchDataComponent {
    constructor(randomuser) {
        this.randomuser = randomuser;
        this.totalRec = 0;
        this.page = 1;
        this.loadingImage = "./assets/Loader.gif";
    }
    ngOnInit() {
        this.randomuser.getData().subscribe((data) => {
            this.employees = data.results;
            this.totalRec = this.employees.length;
            console.log(this.employees);
        });
    }
}
FetchDataComponent.??fac = function FetchDataComponent_Factory(t) { return new (t || FetchDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_fetchdata_service__WEBPACK_IMPORTED_MODULE_1__["FetchdataService"])); };
FetchDataComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FetchDataComponent, selectors: [["app-fetch-data"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "d-flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], [3, "src"], [1, "table", "table-bordered", "table-striped"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"]], template: function FetchDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, FetchDataComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, FetchDataComponent_div_2_Template, 21, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalRec == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.totalRec > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: ["thead[_ngcontent-%COMP%]{\r\n    background-color:seagreen;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5Qjs7QUFFN0IiLCJmaWxlIjoiZmV0Y2gtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNlYWdyZWVuO1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-order-pipe */ "cudM");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/employees.component */ "Uflk");
/* harmony import */ var _Employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Employees/employee/employee.component */ "Qj6i");
/* harmony import */ var _Employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Employees/employee-list/employee-list.component */ "pJwU");
/* harmony import */ var _Login_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Login/login/login.component */ "MT+8");
/* harmony import */ var _nav_menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav-menu/nav-menu/nav-menu.component */ "B1Om");
/* harmony import */ var _Home_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Home/home/home.component */ "b/7Y");
/* harmony import */ var _FetchData_fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./FetchData/fetch-data/fetch-data.component */ "VQtb");
/* harmony import */ var _About_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./About/about/about.component */ "r2dE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
            ng2_order_pipe__WEBPACK_IMPORTED_MODULE_3__["Ng2OrderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            // ,
            // Ng2SearchPipe
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"],
        _Employees_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"],
        _Employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeListComponent"],
        _Login_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _nav_menu_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["NavMenuComponent"],
        _Home_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
        _FetchData_fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_15__["FetchDataComponent"],
        _About_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["NgxPaginationModule"],
        ng2_order_pipe__WEBPACK_IMPORTED_MODULE_3__["Ng2OrderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        // ,
        // Ng2SearchPipe
    ] }); })();


/***/ }),

/***/ "b/7Y":
/*!*********************************************!*\
  !*** ./src/app/Home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
        this.image1 = "./assets/sampleImage.jpg";
        this.image2 = "./assets/sampleImage1.jpg";
        this.image3 = "./assets/sampleImage2.jpg";
    }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 155, vars: 0, consts: [["id", "myCarousel", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "0", "aria-label", "Slide 1", 1, ""], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "1", "aria-label", "Slide 2", 1, ""], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide-to", "2", "aria-label", "Slide 3", "aria-current", "true", 1, "active"], [1, "carousel-inner"], [1, "carousel-item"], ["width", "100%", "height", "100%", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", 1, "bd-placeholder-img"], ["width", "100%", "height", "100%", "fill", "#777"], [1, "container"], [1, "carousel-caption", "text-start"], ["href", "#", 1, "btn", "btn-lg", "btn-primary"], [1, "carousel-caption"], [1, "carousel-item", "active"], [1, "carousel-caption", "text-end"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#myCarousel", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container", "marketing"], [1, "row"], [1, "col-lg-4"], ["width", "140", "height", "140", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "aria-label", "Placeholder: 140x140", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", 1, "bd-placeholder-img", "rounded-circle"], ["x", "50%", "y", "50%", "fill", "#777", "dy", ".3em"], ["href", "#", 1, "btn", "btn-secondary"], [1, "featurette-divider"], [1, "row", "featurette"], [1, "col-md-7"], [1, "featurette-heading"], [1, "text-muted"], [1, "lead"], [1, "col-md-5"], ["width", "500", "height", "500", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "aria-label", "Placeholder: 500x500", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", 1, "bd-placeholder-img", "bd-placeholder-img-lg", "featurette-image", "img-fluid", "mx-auto"], ["width", "100%", "height", "100%", "fill", "#eee"], ["x", "50%", "y", "50%", "fill", "#aaa", "dy", ".3em"], [1, "col-md-7", "order-md-2"], [1, "col-md-5", "order-md-1"], [1, "float-end"], ["href", "#"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Example headline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Some representative placeholder content for the first slide of the carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sign up today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Another example headline.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Some representative placeholder content for the second slide of the carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "One more for good measure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Some representative placeholder content for the third slide of this carousel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Browse gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "140x140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Some representative placeholder content for the three columns of text below the carousel. This is the first column.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "View details \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "140x140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Another exciting bit of representative placeholder content. This time, we've moved on to the second column.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "View details \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "140x140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "And lastly this, the third column of representative placeholder content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "View details \u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "First featurette heading. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "It\u2019ll blow your mind.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Some great placeholder content for the first featurette here. Imagine some exciting prose here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "500x500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "Oh yeah, it\u2019s that good. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "See for yourself.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "500x500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "And lastly, this one. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Checkmate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "svg", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "rect", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "text", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "500x500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Back to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "\u00A9 2017\u20132021 Company, Inc. \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, " \u00B7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "nP7O":
/*!*****************************************!*\
  !*** ./src/app/shared/login.service.ts ***!
  \*****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class LoginService {
    constructor(http) {
        this.http = http;
    }
    getUsers() {
        return this.http.get('./assets/db.json');
    }
}
LoginService.??fac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoginService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LoginService, factory: LoginService.??fac, providedIn: 'root' });


/***/ }),

/***/ "ofrq":
/*!*********************************************!*\
  !*** ./src/app/shared/fetchdata.service.ts ***!
  \*********************************************/
/*! exports provided: FetchdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchdataService", function() { return FetchdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FetchdataService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        const url = "https://randomuser.me/api/?results=500";
        return this.http.get(url);
    }
}
FetchdataService.??fac = function FetchdataService_Factory(t) { return new (t || FetchdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchdataService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: FetchdataService, factory: FetchdataService.??fac, providedIn: 'root' });


/***/ }),

/***/ "pJwU":
/*!********************************************************************!*\
  !*** ./src/app/Employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/employee.service */ "FOT/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");






function EmployeeListComponent_div_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r3.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r5.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r7.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r9.onDelete(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.PinNumber);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 5, currentPage: a2, totalItems: a3 }; };
function EmployeeListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeListComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.firstName = $event; })("ngModelChange", function EmployeeListComponent_div_0_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.Search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeeListComponent_div_0_tr_14_Template, 12, 4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "pagination-controls", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function EmployeeListComponent_div_0_Template_pagination_controls_pageChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](15, 2, ctx_r0.employees, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, ctx_r0.page, ctx_r0.totalRedord)));
} }
class EmployeeListComponent {
    constructor(employeeService, toastr) {
        this.employeeService = employeeService;
        this.toastr = toastr;
        this.page = 1;
    }
    ngOnInit() {
        this.employees = this.employeeService.getEmployee();
        this.totalRedord = this.employees.length;
    }
    onDelete(employee) {
        if (confirm('Are you sure to delete this record?')) {
            this.employeeService.deleteEmployee(employee);
            this.toastr.warning('Delete successfully', 'EMP register');
        }
    }
    popup(employee) {
        this.employeeService.editGet(employee);
    }
    Search() {
        if (this.firstName == "") {
            this.ngOnInit();
        }
        else {
            this.employees = this.employees.filter(res => {
                return res.FullName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
            });
        }
    }
    sort(key) {
    }
}
EmployeeListComponent.??fac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
EmployeeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "text", "name", "FullName", "placeholder", "Enter full name to search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"], [3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EmployeeListComponent_div_0_Template, 18, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.employees.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "r2dE":
/*!************************************************!*\
  !*** ./src/app/About/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.??fac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _About_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About/about/about.component */ "r2dE");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees/employees.component */ "Uflk");
/* harmony import */ var _FetchData_fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FetchData/fetch-data/fetch-data.component */ "VQtb");
/* harmony import */ var _Home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home/home/home.component */ "b/7Y");
/* harmony import */ var _Login_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login/login/login.component */ "MT+8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _Login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'home', component: _Home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"] },
    { path: 'fetch-data', component: _FetchData_fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_3__["FetchDataComponent"] },
    { path: 'about', component: _About_about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zVi1":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/employee.service */ "FOT/");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");






function EmployeeListComponent_div_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r3.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r5.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r6.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r7.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r8.popup(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_0_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4); const employee_r2 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r9.onDelete(employee_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const employee_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.FullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.PhoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](employee_r2.PinNumber);
} }
const _c0 = function (a2, a3) { return { id: "listing_pagination", itemsPerPage: 5, currentPage: a2, totalItems: a3 }; };
function EmployeeListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function EmployeeListComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.firstName = $event; })("ngModelChange", function EmployeeListComponent_div_0_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r12.Search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, EmployeeListComponent_div_0_tr_14_Template, 12, 4, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](15, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "pagination-controls", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function EmployeeListComponent_div_0_Template_pagination_controls_pageChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r13.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](15, 2, ctx_r0.employees, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](5, _c0, ctx_r0.page, ctx_r0.totalRedord)));
} }
class EmployeeListComponent {
    constructor(employeeService, toastr) {
        this.employeeService = employeeService;
        this.toastr = toastr;
        this.page = 1;
    }
    ngOnInit() {
        this.employees = this.employeeService.getEmployee();
        this.totalRedord = this.employees.length;
    }
    onDelete(employee) {
        if (confirm('Are you sure to delete this record?')) {
            this.employeeService.deleteEmployee(employee);
            this.toastr.warning('Delete successfully', 'EMP register');
        }
    }
    popup(employee) {
        this.employeeService.editGet(employee);
    }
    Search() {
        if (this.firstName == "") {
            this.ngOnInit();
        }
        else {
            this.employees = this.employees.filter(res => {
                return res.FullName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
            });
        }
    }
    sort(key) {
    }
}
EmployeeListComponent.??fac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_shared_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
EmployeeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "text", "name", "FullName", "placeholder", "Enter full name to search", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["id", "listing_pagination", "maxSize", "5", "directionLinks", "true", 3, "pageChange"], [3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, EmployeeListComponent_div_0_Template, 18, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.employees.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map