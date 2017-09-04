var app = angular.module("cal",[]);

app.controller("calculator",calculator);

function calculator()
{
    this.resultvalue = 0;
    this.buttonclicked = function(button)
    {
        console.log("1");
        this.selectedoperation = button;
    } 
    this.computeresult = function()
    {
        var num1 = parseFloat(this.input1);
        var num2 = parseFloat(this.input2);
        if(this.selectedoperation ==='+')
        {
            this.resultvalue = num1+num2;
        }
        else if(this.selectedoperation ==='-')
        {
            this.resultvalue = num1-num2;
        }
        else if(this.selectedoperation ==='*')
        {
            this.resultvalue = num1*num2;
        }
        else if(this.selectedoperation ==='/')
        {
            this.resultvalue = num1/num2;
        }
    }


}