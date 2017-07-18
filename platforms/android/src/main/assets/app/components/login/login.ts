import { Component, OnInit } from "@angular/core";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";
import {Router,NavigationExtras} from "@angular/router";
import { Location } from "@angular/common";
import { Http ,Headers,RequestOptions} from "@angular/http";
import { AuthService } from "../../providers/auth.service";

import "rxjs/Rx";

class DataItem {
    constructor(public id: number, public name: string) { }
}


@Component({
    selector: "mp-login",
    moduleId: module.id,
    templateUrl: "./login.html",
})
export class LoginComponent implements OnInit {

    public username:string;
    public password:string;

    constructor(private _router: Router,private _location: Location,private _http:Http,private _auth:AuthService) { 
        this.password = "";
        this.username = "";
    }

    ngOnInit(): void {

    }

    public loginNormal(){
        alert('Not Implemented');
    }

    public loginFacebook(){
        if( this._auth.facebookLogin()){
            this.loginSuccess();
         }
    }

     public loginGoogle(){
        this._auth.googleLogin();
        this.loginSuccess();
    }

    public loginTwitter(){
      this._auth.phoneVerification("+27817435874");
    }

   

    public loginSuccess(){
       this._router.navigate(["dash"]);
    }

}

