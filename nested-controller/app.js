var app = angular.module("nested-contrl",[]);

app.controller("ctrl1",ctrl1);
app.controller("ctrl2",ctrl2);

function ctrl1()
{
    this.test_ctrl = "from1";
}

function ctrl2()
{
    this.test_ctrl = "from2";    
}