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
        alert('Not Implemented');
    };
    LoginComponent.prototype.loginGoogle = function () {
        this._auth.googleLogin();
        // this.loginSuccess();
    };
    LoginComponent.prototype.loginTwitter = function () {
        alert('Not Implemented');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwQ0FBd0Q7QUFDeEQsMENBQTJDO0FBQzNDLHNDQUE0RDtBQUM1RCw2REFBMkQ7QUFFM0QsbUJBQWlCO0FBRWpCO0lBQ0ksa0JBQW1CLEVBQVUsRUFBUyxJQUFZO1FBQS9CLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUMzRCxlQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFRRCxJQUFhLGNBQWM7SUFLdkIsd0JBQW9CLE9BQWUsRUFBUyxTQUFtQixFQUFTLEtBQVUsRUFBUyxLQUFpQjtRQUF4RixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ3hHLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHNDQUFhLEdBQXBCO1FBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLG9DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQix1QkFBdUI7SUFDM0IsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0UsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUlNLHFDQUFZLEdBQW5CO1FBQ0csSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxjQUFjO0tBQzlCLENBQUM7cUNBTStCLGVBQU0sRUFBb0IsaUJBQVEsRUFBZSxXQUFJLEVBQWUsMEJBQVc7R0FMbkcsY0FBYyxDQXNDMUI7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7Um91dGVyLE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEh0dHAgLEhlYWRlcnMsUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCBcInJ4anMvUnhcIjtcclxuXHJcbmNsYXNzIERhdGFJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXAtbG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwdWJsaWMgdXNlcm5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhc3N3b3JkOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24scHJpdmF0ZSBfaHR0cDpIdHRwLHByaXZhdGUgX2F1dGg6QXV0aFNlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luTm9ybWFsKCl7XHJcbiAgICAgICAgYWxlcnQoJ05vdCBJbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbkZhY2Vib29rKCl7XHJcbiAgICAgICAgYWxlcnQoJ05vdCBJbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgICBwdWJsaWMgbG9naW5Hb29nbGUoKXtcclxuICAgICAgICAgdGhpcy5fYXV0aC5nb29nbGVMb2dpbigpO1xyXG4gICAgICAgIC8vIHRoaXMubG9naW5TdWNjZXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luVHdpdHRlcigpe1xyXG4gICAgICBhbGVydCgnTm90IEltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBwdWJsaWMgbG9naW5TdWNjZXNzKCl7XHJcbiAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wiZGFzaFwiXSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=