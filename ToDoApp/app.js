var app = angular.module("ToDoApp",[]);
app.controller("todoctrl",todo);

function todo(){

    this.editmode = false;
    this.todos=[
        "learn angular 1",
        "try out exercises",
        "visit java brains site"
    ];
    this.addnewtodo = function(){
        this.todos.push(this.newtodo);
        this.newtodo = "";
    }
    this.edittodo = function(){
        this.editmode = !this.editmode;
    }
    this.delete = function(index){
        this.todos.splice(index,1);
    }
}