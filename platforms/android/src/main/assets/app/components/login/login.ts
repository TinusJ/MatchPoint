import { Component, OnInit } from "@angular/core";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";
import {Router,NavigationExtras} from "@angular/router";
import { Location } from "@angular/common";
import { Http ,Headers,RequestOptions} from "@angular/http";

import "rxjs/Rx";

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "bol-login",
    moduleId: module.id,
    templateUrl: "./login.html",
})
export class LoginComponent implements OnInit {

    public username:string;
    public password:string;

    constructor(private _router: Router,private _location: Location,private _http:Http) { 
        this.password = "";
        this.username = "";
    }

    ngOnInit(): void {

       
    }

    public loginNormal(){

    }

    public loginFacebook(){
       this.loginSuccess();
    }

    public loginTwitter(){
      alert('Not Implemented');
    }

    public loginGoogle(){
       alert('Not Implemented');
    }

    public loginSuccess(){
       this._router.navigate(["dash"]);
    }

}

