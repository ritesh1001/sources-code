var app = angular.module("hellomod",[]);

app.controller("molctrl",fun);

function fun(){
    this.hellomsg = "i'm from the main module";
}