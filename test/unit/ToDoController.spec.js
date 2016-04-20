describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with several todos', function() {
    var todo1 = new ToDoFactory("ToDo1", true);
    var todo2 = new ToDoFactory("ToDo2", false);
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a new todo', function() {
    ctrl.addToDo('task1');
    var todo = new ToDoFactory("task1");
    expect(ctrl.todos).toContain(todo);
  });

  it('deletes the last todo', function() {
    initialCount = ctrl.todos.length;
    ctrl.deleteToDo();
    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });

});
