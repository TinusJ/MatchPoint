import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard";

const routes: Routes = [
    { path: "", redirectTo: "/dash", pathMatch: "full" },
    { path: "dash", component: DashboardComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }