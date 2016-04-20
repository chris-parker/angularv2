describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises several todos', function() {
    var todos = [
      {task: "ToDo1", completed: true},
      {task: "ToDo2", completed: false}
    ];
    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('task1');
    var todo = {task: 'task1', completed: false};
    expect(ctrl.todos).toContain(todo);
  });

  it('deletes the last todo', function() {
    var todo = [{task: "ToDo1", completed: true}];
    ctrl.deleteToDo();
    expect(ctrl.todos).toEqual(todo);
  });
});
