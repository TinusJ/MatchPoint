"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var auth_service_1 = require("../../providers/auth.service");
require("rxjs/Rx");
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var LoginComponent = (function () {
    function LoginComponent(_router, _location, _http, _auth) {
        this._router = _router;
        this._location = _location;
        this._http = _http;
        this._auth = _auth;
        this.password = "";
        this.username = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginNormal = function () {
        alert('Not Implemented');
    };
    LoginComponent.prototype.loginFacebook = function () {
        if (this._auth.facebookLogin()) {
            this.loginSuccess();
        }
    };
    LoginComponent.prototype.loginGoogle = function () {
        this._auth.googleLogin();
        this.loginSuccess();
    };
    LoginComponent.prototype.loginTwitter = function () {
        this._auth.phoneVerification("+27817435874");
    };
    LoginComponent.prototype.loginSuccess = function () {
        this._router.navigate(["dash"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "mp-login",
        moduleId: module.id,
        templateUrl: "./login.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, common_1.Location, http_1.Http, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBd0Q7QUFDeEQsMENBQTJDO0FBQzNDLHNDQUE0RDtBQUM1RCw2REFBMkQ7QUFFM0QsbUJBQWlCO0FBRWpCO0lBQ0ksa0JBQW1CLEVBQVUsRUFBUyxJQUFZO1FBQS9CLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUMzRCxlQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFRRCxJQUFhLGNBQWM7SUFLdkIsd0JBQW9CLE9BQWUsRUFBUyxTQUFtQixFQUFTLEtBQVUsRUFBUyxLQUFpQjtRQUF4RixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3hHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNDQUFhLEdBQXBCO1FBQ0ksRUFBRSxDQUFBLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDTixDQUFDO0lBRU8sb0NBQVcsR0FBbEI7UUFDRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFJTSxxQ0FBWSxHQUFuQjtRQUNHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsY0FBYztLQUM5QixDQUFDO3FDQU0rQixlQUFNLEVBQW9CLGlCQUFRLEVBQWUsV0FBSSxFQUFlLDBCQUFXO0dBTG5HLGNBQWMsQ0F1QzFCO0FBdkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5pbXBvcnQge1JvdXRlcixOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBIdHRwICxIZWFkZXJzLFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgXCJyeGpzL1J4XCI7XHJcblxyXG5jbGFzcyBEYXRhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1wLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHVibGljIHVzZXJuYW1lOnN0cmluZztcclxuICAgIHB1YmxpYyBwYXNzd29yZDpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLHByaXZhdGUgX2h0dHA6SHR0cCxwcml2YXRlIF9hdXRoOkF1dGhTZXJ2aWNlKSB7IFxyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW5Ob3JtYWwoKXtcclxuICAgICAgICBhbGVydCgnTm90IEltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luRmFjZWJvb2soKXtcclxuICAgICAgICBpZiggdGhpcy5fYXV0aC5mYWNlYm9va0xvZ2luKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcygpO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBsb2dpbkdvb2dsZSgpe1xyXG4gICAgICAgIHRoaXMuX2F1dGguZ29vZ2xlTG9naW4oKTtcclxuICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpblR3aXR0ZXIoKXtcclxuICAgICAgdGhpcy5fYXV0aC5waG9uZVZlcmlmaWNhdGlvbihcIisyNzgxNzQzNTg3NFwiKTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIHB1YmxpYyBsb2dpblN1Y2Nlc3MoKXtcclxuICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJkYXNoXCJdKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==