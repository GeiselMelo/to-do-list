var app = angular.module('toDoListApp', []);



app.controller('toDoListController', function ($scope) {

    
    $scope.newTask = "";
    $scope.tasks = [];

    $scope.addTask = function () {
        if ($scope.newTask) {
            $scope.tasks.push({ name: $scope.newTask, completed: false });
            $scope.newTask = "";
        }
    };

    $scope.toggleCompleted = function (task) {
        task.completed = !task.completed;
    };

    $scope.removeTask = function (task) {
        var index = $scope.tasks.indexOf(task);
        if (index > -1) {
            $scope.tasks.splice(index, 1);
        }
    };
});

