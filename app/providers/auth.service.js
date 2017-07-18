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
    AuthService.prototype.facebookLogin = function () {
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
        }).then(function (result) {
            JSON.stringify(result);
            return true;
        }, function (errorMessage) {
            console.log(errorMessage);
        });
        return false;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHVDQUF1QztBQUV2QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUl2RCxpQkFBVSxFQUFFLENBQUE7QUFDWjtJQUtJO1FBRUksRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO0lBRUwsQ0FBQztJQUVPLGtDQUFZLEdBQXBCO1FBRUssSUFBSSxNQUFNLEdBQUc7WUFDVixNQUFNLEVBQUUseUNBQXlDO1lBQ2pELFVBQVUsRUFBRSwyQ0FBMkM7WUFDdkQsV0FBVyxFQUFFLDBDQUEwQztZQUN2RCxTQUFTLEVBQUUsbUJBQW1CO1lBQ2hDLGdEQUFnRDtZQUM5QyxpQkFBaUIsRUFBRSxhQUFhO1NBQ25DLENBQUM7UUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDdEIsVUFBQyxRQUFRO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVNLGdDQUFVLEdBQWpCO1FBRUssUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDaEMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNqQixDQUFDLEVB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QUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUNKLENBQUM7UUFFRixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUF0TEQsSUFzTEM7QUF0TFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuLy9pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2VcIjtcclxuXHJcbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5cclxuXHJcblxyXG5JbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNle1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGlzSW5zOmJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmlzSW5zKXtcclxuICAgICAgICAgICB0aGlzLmluaXRGaXJlYmFzZSgpO1xyXG4gICAgICAgICAgIHRoaXMuaXNJbnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RmlyZWJhc2UoKXtcclxuXHJcbiAgICAgICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogXCJBSXphU3lCbE1MenJ5SVlJalcwQ3NlNzdKbTYzVnFfc0FkQUNMS3dcIixcclxuICAgICAgICAgICAgYXV0aERvbWFpbjogXCJodHRwczovL21hdGNoLXBvaW50LTVlYjg3LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgICAgICAgICBkYXRhYmFzZVVSTDogXCJodHRwczovL21hdGNoLXBvaW50LTVlYjg3LmZpcmViYXNlaW8uY29tXCIsXHJcbiAgICAgICAgICAgIHByb2plY3RJZDogXCJtYXRjaC1wb2ludC01ZWI4N1wiLFxyXG4gICAgICAgICAgLy8gIHN0b3JhZ2VCdWNrZXQ6IFwicHJvamVjdC1hbnViaXMuYXBwc3BvdC5jb21cIixcclxuICAgICAgICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTM5Njg0OTI3MDRcIlxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICBmaXJlYmFzZS5pbml0KGNvbmZpZykudGhlbihcclxuICAgICAgICAgICAgKGluc3RhbmNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU2lnbmVkSW4oKTpib29sZWFue1xyXG5cclxuICAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICBhbGVydChcIlVzZXIgdWlkOiBcIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIlRyb3VibGUgaW4gcGFyYWRpc2U6IFwiICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1dGgoKXtcclxuICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsOnN0cmluZyxwYXNzd29yZDpzdHJpbmcpOmJvb2xlYW57XHJcblxyXG4gICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbDpzdHJpbmcscGFzc3dvcmQ6c3RyaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5jcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCBcIlVzZXIgY3JlYXRlZCA6XCIrcmVzdWx0LmtleSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCBcIm5vIHVzZXIgY3JlYXRlZCA6XCIrZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldFBhc3N3b3JkKGVtYWlsOnN0cmluZyl7XHJcbiAgICAgICAgZmlyZWJhc2UucmVzZXRQYXNzd29yZCh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDplbWFpbFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdQYXNzd29yZCByZXNldDogY2hlY2sgZW1haWwgcGxlYXNlJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkKGVtYWlsOnN0cmluZyxvbGRwYXNzd29yZDpzdHJpbmcsbmV3cGFzc3dvcmQ6c3RyaW5nKXtcclxuICAgICAgICAgIGZpcmViYXNlLmNoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBvbGRQYXNzd29yZDogb2xkcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIG5ld1Bhc3N3b3JkOiBuZXdwYXNzd29yZFxyXG4gICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdQYXNzd29yZCBjaGFuZ2Ugd2FzIHN1Y2Nlc2Z1bGwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICBwdWJsaWMgZmFjZWJvb2tMb2dpbigpOmJvb2xlYW57XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnXSAvLyBvcHRpb25hbDogZGVmYXVsdHMgdG8gWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCddXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29vZ2xlTG9naW4oKTpib29sZWFue1xyXG4gICAgXHJcbiAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgIC8vIG5vdGUgdGhhdCB5b3UgbmVlZCB0byBlbmFibGUgR29vZ2xlIGF1dGggaW4geW91ciBmaXJlYmFzZSBpbnN0YW5jZVxyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBndWVzdExvZ2luKCk6Ym9vbGVhbntcclxuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5BTk9OWU1PVVNcclxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChcIlVzZXIgdWlkOiBcIiArIHVzZXIudWlkKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUcm91YmxlIGluIHBhcmFkaXNlOiBcIiArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwaG9uZVZlcmlmaWNhdGlvbihjZWxsOnN0cmluZyk6Ym9vbGVhbntcclxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBIT05FLFxyXG4gICAgICAgICAgICBwaG9uZU9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGNlbGwsXHJcbiAgICAgICAgICAgIHZlcmlmaWNhdGlvblByb21wdDogXCJUaGUgcmVjZWl2ZWQgdmVyaWZpY2F0aW9uIGNvZGVcIiAvLyBkZWZhdWx0IFwiVmVyaWZpY2F0aW9uIGNvZGVcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==