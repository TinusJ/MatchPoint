import { Injectable } from "@angular/core";
//import * as firebase from "firebase";

var firebase = require("nativescript-plugin-firebase");



Injectable()
export class AuthService{


    private isIns:boolean;

    public constructor(){

        if(!this.isIns){
           this.initFirebase();
           this.isIns = true;
        }

    }

    private initFirebase(){

         var config = {
            apiKey: "AIzaSyBlMLzryIYIjW0Cse77Jm63Vq_sAdACLKw",
            authDomain: "https://match-point-5eb87.firebaseapp.com",
            databaseURL: "https://match-point-5eb87.firebaseio.com",
            projectId: "match-point-5eb87",
          //  storageBucket: "project-anubis.appspot.com",
            messagingSenderId: "13968492704"
        };
    
        firebase.init(config).then(
            (instance) => {
                console.log("firebase.init done");
            },
            (error) => {
                console.log("firebase.init error: " + error);
            }
            );
    }

    public isSignedIn():boolean{

         firebase.getCurrentUser().then((user) => {
             alert("User uid: " + user.uid);
             return true;
        }, (error) => {
            alert("Trouble in paradise: " + error);
        });

        return false;
    }

    public getAuth(){
        return firebase.auth();
    }

    public loginWithEmailAndPassword(email:string,password:string):boolean{

           firebase.login({
                type: firebase.LoginType.PASSWORD,
                email: email,
                password: password
            }).then(
                function (result) {
                    JSON.stringify(result);
                    return true;
                },
                function (errorMessage) {
                    console.log(errorMessage);
                }
            );

            return false;
    }

    public createUserWithEmailAndPassword(email:string,password:string){
                    firebase.createUser({
                        email: email,
                        password: password
                    }).then(
                function (result) {
                    alert( "User created :"+result.key)
                },
                function (errorMessage) {
                     alert( "no user created :"+errorMessage)
                }
            );
    }

    public resetPassword(email:string){
        firebase.resetPassword({
                email:email
            }).then(
                function () {
                    alert('Password reset: check email please');
                },
                function (errorMessage) {
                    console.log(errorMessage);
                }
            );
    }

    public changePassword(email:string,oldpassword:string,newpassword:string){
          firebase.changePassword({
            email: email,
            oldPassword: oldpassword,
            newPassword: newpassword
        }).then(
            function () {
                alert('Password change was succesfull');
            },
            function (errorMessage) {
                console.log(errorMessage);
            }
        );
    }

   public facebookLogin():boolean{
        
        firebase.login({
                type: firebase.LoginType.FACEBOOK,
                scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
            }).then(
                function (result) {
                    JSON.stringify(result);
                    return true;
                },
                function (errorMessage) {
                    console.log(errorMessage);
                }
            );

            return false;
    }

    public googleLogin():boolean{
    
    firebase.login({
      // note that you need to enable Google auth in your firebase instance
      type: firebase.LoginType.GOOGLE
    }).then(
        function (result) {
          JSON.stringify(result);
          return true;
        },
        function (errorMessage) {
            console.log(errorMessage);
            return false;
        }
    );
     return false;
    }

    public guestLogin():boolean{
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(user => {
            alert("User uid: " + user.uid);

            return true;
        }, error => {
            alert("Trouble in paradise: " + error);
        });

        return false;
    }

    public phoneVerification(cell:string):boolean{
                firebase.login({
            type: firebase.LoginType.PHONE,
            phoneOptions: {
            phoneNumber: cell,
            verificationPrompt: "The received verification code" // default "Verification code"
            }
        }).then(
            function (result) {
                JSON.stringify(result);
                return true;
            },
            function (errorMessage) {
                console.log(errorMessage);
                return false;
            }
        );

        return false;
    }
}



