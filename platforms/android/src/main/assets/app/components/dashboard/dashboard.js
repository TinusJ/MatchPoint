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
        selector: "mp-dash",
        moduleId: module.id,
        templateUrl: "./dashboard.html",
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHdDQUFxRTtBQUVyRTtJQUNJLGtCQUFtQixFQUFVLEVBQVMsSUFBWTtRQUEvQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFDM0QsZUFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQsSUFBYSxrQkFBa0I7SUFPM0I7UUFDSyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO0lBR0EsQ0FBQztJQUVELDRDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFrQkM7UUFqQkcsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVoQyxhQUFhLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMseUJBQXlCLEVBQUUsVUFBQyxJQUFtQztZQUVwRixNQUFNLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFFbEIsS0FBSyxDQUFDO29CQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUksZUFBZSxDQUFDO29CQUNqQyxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUksTUFBTSxDQUFDO29CQUN4QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLEtBQUksQ0FBQyxRQUFRLEdBQUksY0FBYyxDQUFDO29CQUNoQyxLQUFLLENBQUM7WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLEdBQVU7SUFFZixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLHNDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQWhEWSxrQkFBa0I7SUFMOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixXQUFXLEVBQUUsa0JBQWtCO0tBQ2xDLENBQUM7O0dBQ1csa0JBQWtCLENBZ0Q5QjtBQWhEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFRhYlZpZXcsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInVpL3RhYi12aWV3XCI7XHJcblxyXG5jbGFzcyBEYXRhSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIG5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm1wLWRhc2hcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Rhc2hib2FyZC5odG1sXCIsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gICBwdWJsaWMgdGFiU2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gICBwdWJsaWMgdGFiVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIGNvdW50ZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgICAgICAgIHRoaXMudGFiVGl0bGUgPSBcIkFjdGl2aXR5IEZlZWRcIjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBvblRhYlZpZXdMb2FkZWQoYXJncykge1xyXG4gICAgICAgIGxldCBjdXN0b21UYWJ2aWV3ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3VzdG9tVGFidmlldy5vbihUYWJWaWV3LnNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnQsIChhcmdzOiBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKGFyZ3MubmV3SW5kZXgpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYlRpdGxlICA9IFwiQWN0aXZpdHkgRmVlZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiVGl0bGUgID0gXCJIb21lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJUaXRsZSAgPSBcIkFjaGlldmVtZW50c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb29wcyhhcmc6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmYWJUYXAoKXtcclxuICAgICAgICB0aGlzLm9vcHMoJ0ZhYiBmYWInKTtcclxuICAgIH1cclxuXHJcbiAgICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSXRlbVRhcHBlZDogXCIgKyBhcmdzLmluZGV4KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19