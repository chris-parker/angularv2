describe('Todos tracker', function() {

  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  describe('Todos tracker', function() {

    it('has two todos', function() {
      browser.get('/app');
      var todos = $$('#todos p');
      expect(todos.first().getText()).toMatch('ToDo1: completed');
      expect(todos.last().getText()).toMatch('ToDo2: not completed');
    });

    it('can add a todo', function() {
      browser.get('/app');
      $('#addToDo').sendKeys('lunch');
      $('#add').click();
      var todos = $$('#todos p').last();
      expect(todos.getText()).toMatch('lunch: not completed');
    });

    it('can delete a todo', function() {
      browser.get('/app');
      $('#delete').click();
      var todos = $$('#todos p').last();
      expect(todos.getText()).toMatch('ToDo1: completed');
    });

    it('can mark a todo as complete', function() {
      browser.get('/app');
      var todo = $$('#todos p').last();
      todo.element(by.css('.complete')).click();
      expect(todo.getText()).toMatch('ToDo2: completed');
    });

  });
});
