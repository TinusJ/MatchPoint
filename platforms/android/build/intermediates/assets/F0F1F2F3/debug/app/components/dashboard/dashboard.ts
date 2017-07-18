import { Component, OnInit } from "@angular/core";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "mp-dash",
    moduleId: module.id,
    templateUrl: "./dashboard.html",
})
export class DashboardComponent implements OnInit {
  
   public tabSelectedIndex: number;
   public tabTitle: string;

    private counter: number;

    constructor() { 
         this.tabSelectedIndex = 1;
         this.tabTitle = "Activity Feed";
    }

    ngOnInit(): void {

       
    }

    onTabViewLoaded(args) {
        let customTabview = args.object;
        
        customTabview.on(TabView.selectedIndexChangedEvent, (args: SelectedIndexChangedEventData) => {
            
            switch(args.newIndex){

                case 0:
                    this.tabTitle  = "Activity Feed";
                    break;
                case 1:
                    this.tabTitle  = "Home";
                    break;
                case 2:
                    this.tabTitle  = "Achievements";
                    break;
            }
        });
    }

    oops(arg:string){
        
    }

    fabTap(){
        this.oops('Fab fab');
    }

     public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
}

