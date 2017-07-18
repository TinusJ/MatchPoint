"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import * as firebase from "firebase";
var firebase = require("nativescript-plugin-firebase");
core_1.Injectable();
var AuthService = (function () {
    function AuthService() {
        if (!this.isIns) {
            this.initFirebase();
            this.isIns = true;
        }
    }
    AuthService.prototype.initFirebase = function () {
        var config = {
            apiKey: "AIzaSyBlMLzryIYIjW0Cse77Jm63Vq_sAdACLKw",
            authDomain: "https://match-point-5eb87.firebaseapp.com",
            databaseURL: "https://match-point-5eb87.firebaseio.com",
            projectId: "match-point-5eb87",
            //  storageBucket: "project-anubis.appspot.com",
            messagingSenderId: "13968492704"
        };
        firebase.init(config).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    AuthService.prototype.isSignedIn = function () {
        firebase.getCurrentUser().then(function (user) {
            alert("User uid: " + user.uid);
            return true;
        }, function (error) {
            alert("Trouble in paradise: " + error);
        });
        return false;
    };
    AuthService.prototype.getAuth = function () {
        return firebase.auth();
    };
    AuthService.prototype.loginWithEmailAndPassword = function (email, password) {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            email: email,
            password: password
        }).then(function (result) {
            JSON.stringify(result);
            return true;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
        return false;
    };
    AuthService.prototype.createUserWithEmailAndPassword = function (email, password) {
        firebase.createUser({
            email: email,
            password: password
        }).then(function (result) {
            alert("User created :" + result.key);
        }, function (errorMessage) {
            alert("no user created :" + errorMessage);
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        firebase.resetPassword({
            email: email
        }).then(function () {
            alert('Password reset: check email please');
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    AuthService.prototype.changePassword = function (email, oldpassword, newpassword) {
        firebase.changePassword({
            email: email,
            oldPassword: oldpassword,
            newPassword: newpassword
        }).then(function () {
            alert('Password change was succesfull');
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    /*  public facebookLogin():boolean{
          
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
      }*/
    AuthService.prototype.googleLogin = function () {
        firebase.login({
            // note that you need to enable Google auth in your firebase instance
            type: firebase.LoginType.GOOGLE
        }).then(function (result) {
            JSON.stringify(result);
            return true;
        }, function (errorMessage) {
            console.log(errorMessage);
            return false;
        });
        return false;
    };
    AuthService.prototype.guestLogin = function () {
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        }).then(function (user) {
            alert("User uid: " + user.uid);
            return true;
        }, function (error) {
            alert("Trouble in paradise: " + error);
        });
        return false;
    };
    AuthService.prototype.phoneVerification = function (cell) {
        firebase.login({
            type: firebase.LoginType.PHONE,
            phoneOptions: {
                phoneNumber: cell,
                verificationPrompt: "The received verification code" // default "Verification code"
            }
        }).then(function (result) {
            JSON.stringify(result);
            return true;
        }, function (errorMessage) {
            console.log(errorMessage);
            return false;
        });
        return false;
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUF1QztBQUV2QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUl2RCxpQkFBVSxFQUFFLENBQUE7QUFDWjtJQUtJO1FBRUksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO0lBRUwsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBRUssSUFBSSxNQUFNLEdBQUc7WUFDVixNQUFNLEVBQUUseUNBQXlDO1lBQ2pELFVBQVUsRUFBRSwyQ0FBMkM7WUFDdkQsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsbUJBQW1CO1lBQ2hDLGdEQUFnRDtZQUM5QyxpQkFBaUIsRUFBRSxhQUFhO1NBQ25DLENBQUM7UUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEIsVUFBQyxRQUFRO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVNLGdDQUFVLEdBQWpCO1FBRUssUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDaEMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNqQixDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ0wsS0FBSyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sNkJBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLCtDQUF5QixHQUFoQyxVQUFpQyxLQUFZLEVBQUMsUUFBZTtRQUV0RCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1YsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztRQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLG9EQUE4QixHQUFyQyxVQUFzQyxLQUFZLEVBQUMsUUFBZTtRQUNsRCxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxLQUFLO1lBQ1osUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDWCxVQUFVLE1BQU07WUFDWixLQUFLLENBQUUsZ0JBQWdCLEdBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDakIsS0FBSyxDQUFFLG1CQUFtQixHQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVNLG1DQUFhLEdBQXBCLFVBQXFCLEtBQVk7UUFDN0IsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUNmLEtBQUssRUFBQyxLQUFLO1NBQ2QsQ0FBQyxDQUFDLElBQUksQ0FDSDtZQUNJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFFTSxvQ0FBYyxHQUFyQixVQUFzQixLQUFZLEVBQUMsV0FBa0IsRUFBQyxXQUFrQjtRQUNsRSxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxLQUFLO1lBQ1osV0FBVyxFQUFFLFdBQVc7WUFDeEIsV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FDSDtZQUNJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFSDs7Ozs7Ozs7Ozs7Ozs7OztTQWdCSztJQUVJLGlDQUFXLEdBQWxCO1FBRUEsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNiLHFFQUFxRTtZQUNyRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBVSxNQUFNO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUNKLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGdDQUFVLEdBQWpCO1FBQ0ksUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7U0FDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDUixLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDSixLQUFLLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSx1Q0FBaUIsR0FBeEIsVUFBeUIsSUFBVztRQUN4QixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ25CLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDOUIsWUFBWSxFQUFFO2dCQUNkLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixrQkFBa0IsRUFBRSxnQ0FBZ0MsQ0FBQyw4QkFBOEI7YUFDbEY7U0FDSixDQUFDLENBQUMsSUFBSSxDQUNILFVBQVUsTUFBTTtZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQ0QsVUFBVSxZQUFZO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQ0osQ0FBQztRQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXRMRCxJQXNMQztBQXRMWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vL2ltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xyXG5cclxudmFyIGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcblxyXG5cclxuXHJcbkluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2V7XHJcblxyXG5cclxuICAgIHByaXZhdGUgaXNJbnM6Ym9vbGVhbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuaXNJbnMpe1xyXG4gICAgICAgICAgIHRoaXMuaW5pdEZpcmViYXNlKCk7XHJcbiAgICAgICAgICAgdGhpcy5pc0lucyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRGaXJlYmFzZSgpe1xyXG5cclxuICAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiBcIkFJemFTeUJsTUx6cnlJWUlqVzBDc2U3N0ptNjNWcV9zQWRBQ0xLd1wiLFxyXG4gICAgICAgICAgICBhdXRoRG9tYWluOiBcImh0dHBzOi8vbWF0Y2gtcG9pbnQtNWViODcuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vbWF0Y2gtcG9pbnQtNWViODcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgICAgICAgICAgcHJvamVjdElkOiBcIm1hdGNoLXBvaW50LTVlYjg3XCIsXHJcbiAgICAgICAgICAvLyAgc3RvcmFnZUJ1Y2tldDogXCJwcm9qZWN0LWFudWJpcy5hcHBzcG90LmNvbVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMzk2ODQ5MjcwNFwiXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZpcmViYXNlLmluaXQoY29uZmlnKS50aGVuKFxyXG4gICAgICAgICAgICAoaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNTaWduZWRJbigpOmJvb2xlYW57XHJcblxyXG4gICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50VXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgIGFsZXJ0KFwiVXNlciB1aWQ6IFwiICsgdXNlci51aWQpO1xyXG4gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXV0aCgpe1xyXG4gICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ2luV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWw6c3RyaW5nLHBhc3N3b3JkOnN0cmluZyk6Ym9vbGVhbntcclxuXHJcbiAgICAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsOnN0cmluZyxwYXNzd29yZDpzdHJpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoIFwiVXNlciBjcmVhdGVkIDpcIityZXN1bHQua2V5KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgYWxlcnQoIFwibm8gdXNlciBjcmVhdGVkIDpcIitlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0UGFzc3dvcmQoZW1haWw6c3RyaW5nKXtcclxuICAgICAgICBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOmVtYWlsXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkIHJlc2V0OiBjaGVjayBlbWFpbCBwbGVhc2UnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQoZW1haWw6c3RyaW5nLG9sZHBhc3N3b3JkOnN0cmluZyxuZXdwYXNzd29yZDpzdHJpbmcpe1xyXG4gICAgICAgICAgZmlyZWJhc2UuY2hhbmdlUGFzc3dvcmQoe1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIG9sZFBhc3N3b3JkOiBvbGRwYXNzd29yZCxcclxuICAgICAgICAgICAgbmV3UGFzc3dvcmQ6IG5ld3Bhc3N3b3JkXHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Bhc3N3b3JkIGNoYW5nZSB3YXMgc3VjY2VzZnVsbCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgLyogIHB1YmxpYyBmYWNlYm9va0xvZ2luKCk6Ym9vbGVhbntcclxuICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddIC8vIG9wdGlvbmFsOiBkZWZhdWx0cyB0byBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cclxuICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSovXHJcblxyXG4gICAgcHVibGljIGdvb2dsZUxvZ2luKCk6Ym9vbGVhbntcclxuICAgIFxyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAvLyBub3RlIHRoYXQgeW91IG5lZWQgdG8gZW5hYmxlIEdvb2dsZSBhdXRoIGluIHlvdXIgZmlyZWJhc2UgaW5zdGFuY2VcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxyXG4gICAgfSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ3Vlc3RMb2dpbigpOmJvb2xlYW57XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuQU5PTllNT1VTXHJcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJVc2VyIHVpZDogXCIgKyB1c2VyLnVpZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVHJvdWJsZSBpbiBwYXJhZGlzZTogXCIgKyBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGhvbmVWZXJpZmljYXRpb24oY2VsbDpzdHJpbmcpOmJvb2xlYW57XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QSE9ORSxcclxuICAgICAgICAgICAgcGhvbmVPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBjZWxsLFxyXG4gICAgICAgICAgICB2ZXJpZmljYXRpb25Qcm9tcHQ6IFwiVGhlIHJlY2VpdmVkIHZlcmlmaWNhdGlvbiBjb2RlXCIgLy8gZGVmYXVsdCBcIlZlcmlmaWNhdGlvbiBjb2RlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0=