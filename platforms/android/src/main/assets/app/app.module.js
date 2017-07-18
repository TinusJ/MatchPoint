"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var dashboard_1 = require("./components/dashboard/dashboard");
var login_1 = require("./components/login/login");
var auth_service_1 = require("./providers/auth.service");
var elementRegistryModule = require("nativescript-angular/element-registry");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
elementRegistryModule.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var firebase = require("nativescript-plugin-firebase");
firebase.init({}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            http_1.NativeScriptHttpModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_1.DashboardComponent,
            login_1.LoginComponent
        ],
        providers: [
            auth_service_1.AuthService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzREFBdUU7QUFDdkUsa0RBQW1FO0FBRW5FLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsOERBQXNFO0FBQ3RFLGtEQUEwRDtBQUMxRCx5REFBcUQ7QUFFckQsNkVBQStFO0FBQy9FLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQ25HLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBRXJHLHVEQUEwRDtBQUUxRCxRQUFRLENBQUMsSUFBSSxDQUFDLEVBRWIsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFDLFFBQVE7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxFQUNELFVBQUMsS0FBSztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUM7QUEwQkYsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBeEJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0EsT0FBTyxFQUFFLENBQUMsd0NBQWtCO1lBQ25CLGlDQUF3QjtZQUN4Qiw2QkFBc0I7WUFDdEIsK0JBQXVCO1lBQ3ZCLDhCQUFnQjtTQUN6QjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ2QsOEJBQWtCO1lBQ2xCLHNCQUFjO1NBRWY7UUFDRCxTQUFTLEVBQUU7WUFDUiwwQkFBVztTQUNiO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUVXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luJztcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4vcHJvdmlkZXJzL2F1dGguc2VydmljZSc7XG5cbmltcG9ydCAqIGFzIGVsZW1lbnRSZWdpc3RyeU1vZHVsZSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5JztcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuZmlyZWJhc2UuaW5pdCh7XG5cbn0pLnRoZW4oXG4gIChpbnN0YW5jZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICB9XG4pO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgICBBcHBSb3V0aW5nTW9kdWxlICAgICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgICAgTG9naW5Db21wb25lbnRcbiAgICAgICAgXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICBBdXRoU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==