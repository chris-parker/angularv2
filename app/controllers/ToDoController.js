toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2', false)];

  self.addToDo = function(toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.deleteToDo = function() {
    self.todos.pop();
  };
}]);
