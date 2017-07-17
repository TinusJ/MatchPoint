import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { DashboardComponent } from './components/dashboard/dashboard';
import { LoginComponent } from './components/login/login';

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);
elementRegistryModule.registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);


@NgModule({
    bootstrap: [
        AppComponent
    ],
     imports: [NativeScriptModule,
              NativeScriptRouterModule,
              NativeScriptHttpModule,
              NativeScriptFormsModule,
              AppRoutingModule      
    ],
    declarations: [
        AppComponent,
      DashboardComponent,
      LoginComponent
        
    ],
    providers: [
       // ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
