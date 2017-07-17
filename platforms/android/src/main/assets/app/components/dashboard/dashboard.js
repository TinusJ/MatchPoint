"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tab_view_1 = require("ui/tab-view");
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.tabSelectedIndex = 1;
        this.tabTitle = "Activity Feed";
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onTabViewLoaded = function (args) {
        var _this = this;
        var customTabview = args.object;
        customTabview.on(tab_view_1.TabView.selectedIndexChangedEvent, function (args) {
            switch (args.newIndex) {
                case 0:
                    _this.tabTitle = "Activity Feed";
                    break;
                case 1:
                    _this.tabTitle = "Home";
                    break;
                case 2:
                    _this.tabTitle = "Achievements";
                    break;
            }
        });
    };
    DashboardComponent.prototype.oops = function (arg) {
    };
    DashboardComponent.prototype.fabTap = function () {
        this.oops('Fab fab');
    };
    DashboardComponent.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: "bol-dash",
        moduleId: module.id,
        templateUrl: "./dashboard.html",
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdDQUFxRTtBQUVyRTtJQUNJLGtCQUFtQixFQUFVLEVBQVMsSUFBWTtRQUEvQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDM0QsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQsSUFBYSxrQkFBa0I7SUFPM0I7UUFDSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBRWxDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVEsR0FBUjtJQUdBLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFBcEIsaUJBa0JDO1FBakJHLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxrQkFBTyxDQUFDLHlCQUF5QixFQUFFLFVBQUMsSUFBbUM7WUFFcEYsTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBRWxCLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsUUFBUSxHQUFJLGVBQWUsQ0FBQztvQkFDakMsS0FBSyxDQUFDO2dCQUNWLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsUUFBUSxHQUFJLE1BQU0sQ0FBQztvQkFDeEIsS0FBSyxDQUFDO2dCQUNWLEtBQUssQ0FBQztvQkFDRixLQUFJLENBQUMsUUFBUSxHQUFJLGNBQWMsQ0FBQztvQkFDaEMsS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxHQUFVO0lBRWYsQ0FBQztJQUVELG1DQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTyxzQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksa0JBQWtCO0lBTDlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLGtCQUFrQjtLQUNsQyxDQUFDOztHQUNXLGtCQUFrQixDQXVEOUI7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ1aS90YWItdmlld1wiO1xyXG5cclxuY2xhc3MgRGF0YUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyBuYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJib2wtZGFzaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZGFzaGJvYXJkLmh0bWxcIixcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgIHB1YmxpYyB0YWJTZWxlY3RlZEluZGV4OiBudW1iZXI7XHJcbiAgIHB1YmxpYyB0YWJUaXRsZTogc3RyaW5nO1xyXG4gICAgcHVibGljIG15SXRlbXM6IEFycmF5PERhdGFJdGVtPjtcclxuICAgIHByaXZhdGUgY291bnRlcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICAgdGhpcy50YWJTZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAgdGhpcy50YWJUaXRsZSA9IFwiQWN0aXZpdHkgRmVlZFwiO1xyXG5cclxuICAgICAgIHRoaXMubXlJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IDA7XHJcbiAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLm15SXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaSwgXCJkYXRhIGl0ZW0gXCIgKyBpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFiVmlld0xvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGN1c3RvbVRhYnZpZXcgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBcclxuICAgICAgICBjdXN0b21UYWJ2aWV3Lm9uKFRhYlZpZXcuc2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudCwgKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2goYXJncy5uZXdJbmRleCl7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVGl0bGUgID0gXCJBY3Rpdml0eSBGZWVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUaXRsZSAgPSBcIkhvbWVcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRpdGxlICA9IFwiQWNoaWV2ZW1lbnRzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvb3BzKGFyZzpzdHJpbmcpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZhYlRhcCgpe1xyXG4gICAgICAgIHRoaXMub29wcygnRmFiIGZhYicpO1xyXG4gICAgfVxyXG5cclxuICAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBJdGVtVGFwcGVkOiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=