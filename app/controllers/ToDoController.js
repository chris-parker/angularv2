toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [{ task: "ToDo1", completed: true }, { task: "ToDo2", completed: false }];

  self.addToDo = function(toDoText) {
    self.todos.push({task: toDoText, completed: false});
  };

  self.deleteToDo = function() {
    self.todos.pop();
  };
});
