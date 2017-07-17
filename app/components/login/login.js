"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var LoginComponent = (function () {
    function LoginComponent(_router, _location, _http) {
        this._router = _router;
        this._location = _location;
        this._http = _http;
        this.password = "";
        this.username = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginNormal = function () {
    };
    LoginComponent.prototype.loginFacebook = function () {
        this.loginSuccess();
    };
    LoginComponent.prototype.loginTwitter = function () {
        alert('Not Implemented');
    };
    LoginComponent.prototype.loginGoogle = function () {
        alert('Not Implemented');
    };
    LoginComponent.prototype.loginSuccess = function () {
        this._router.navigate(["dash"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "bol-login",
        moduleId: module.id,
        templateUrl: "./login.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location, http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBd0Q7QUFDeEQsMENBQTJDO0FBQzNDLHNDQUE0RDtBQUU1RCxtQkFBaUI7QUFFakI7SUFDSSxrQkFBbUIsRUFBVSxFQUFTLElBQVk7UUFBL0IsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7SUFBSSxDQUFDO0lBQzNELGVBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQVFELElBQWEsY0FBYztJQUt2Qix3QkFBb0IsT0FBZSxFQUFTLFNBQW1CLEVBQVMsS0FBVTtRQUE5RCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFHQSxDQUFDO0lBRU0sb0NBQVcsR0FBbEI7SUFFQSxDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0csS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFuQ0QsSUFtQ0M7QUFuQ1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBTStCLGVBQU0sRUFBb0IsaUJBQVEsRUFBZSxXQUFJO0dBTHpFLGNBQWMsQ0FtQzFCO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5pbXBvcnQge1JvdXRlcixOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBIdHRwICxIZWFkZXJzLFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9SeFwiO1xyXG5cclxuY2xhc3MgRGF0YUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJib2wtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhc3N3b3JkOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24scHJpdmF0ZSBfaHR0cDpIdHRwKSB7IFxyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbk5vcm1hbCgpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5GYWNlYm9vaygpe1xyXG4gICAgICAgdGhpcy5sb2dpblN1Y2Nlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5Ud2l0dGVyKCl7XHJcbiAgICAgIGFsZXJ0KCdOb3QgSW1wbGVtZW50ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5Hb29nbGUoKXtcclxuICAgICAgIGFsZXJ0KCdOb3QgSW1wbGVtZW50ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiZGFzaFwiXSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=