var app = angular.module('todoapp', []);


app.controller('appCtrl', function($scope) {
    $scope.tasks = [];

    var taskData = localStorage['tasksList'];


    if(taskData !==undefined){
      $scope.tasks = JSON.parse(taskData);
    }
    $scope.searchEnter = function(){
      // console.log(event.which || event.keyCode);
      if(event.which == 13 && $scope.task != ""){
        $scope.addTask();


      }
      };
    $scope.name = "John";
    /**
     * :
     * 1.use $http to call backend rest API
     * GET todos(Which is corresponding to index() function inside TodoController)(AJAX CALL)
     * 2.store all data in todolist variable, then use ng-repeat to show a list(using ul li tag) in index.html
     */
    // $scope.todoList = undefined;

    /**
     * :
     * 1.Each task can be delete. when user click(need to create event handler) on that task.
     * 2.Send delete request to rest API to delete it in mysql database.(AJAX CALL)
     */

    /**
     * :
     * 1.create a form under the todo list
     * 2.user create a new todo task; send data to backend rest API
     * 3.store the new todo task in database and return the new list
     * 4.update $scope.todoList with the API returned new list
     */

    /**
     * optional tasks:
     * 1.edit todo task
     */

   $scope.addTask = function(){
      $scope.tasks.push({'taskMessage': $scope.task, 'status':'false'});
      $scope.task =  '';
      localStorage['tasksList'] = JSON.stringify($scope.tasks);
   };
   $scope.removeTask = function(msg){
     var index = $scope.taskMessage.indexOf(msg);
     alert("Deleting Message: " + index);
     $scope.taskMessage.spice(index,1);
   };
   $scope.contentEdit = function(msg){
     // console.log('something');
     for(i=0;i<$scope.tasks.length;i++){
          if($scope.tasks[i].taskMessage == msg){
            $scope.tasks[i].taskMessage = event.target.innerText;
          }
     }
     localStorage['tasksList'] = JSON.stringify($scope.tasks);
     console.log($scope.tasks);
     event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

      };
      $scope.enterAgain = function(msg){
        if(event.which == 13 && msg != ""){
          $scope.contentEdit(msg);
        }
      }

});
