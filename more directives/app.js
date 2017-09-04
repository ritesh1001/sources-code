var app = angular.module("more_directives",[]);

app.controller("More_directives_ctrl",directives);

function directives(){
    this.myList = [1, 2, 3, 4];
}
