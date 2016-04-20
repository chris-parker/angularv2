describe('Todos tracker', function() {

  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  describe('Todos tracker', function() {

    it('has two todos', function() {
      browser.get('/app');
      var todos = $$('#todo p');
      expect(todos.first().getText()).toEqual('ToDo1: completed');
      expect(todos.last().getText()).toEqual('ToDo2: not completed');
    });

    it('can add a todo', function() {
      browser.get('/app');
      $('#addToDo').sendKeys('lunch');
      $('#add').click();
      var todos = $$('#todo p');
      expect(todos.last().getText()).toEqual('lunch: not completed');
    });

    it('can delete a todo', function() {
      browser.get('/app');
      $('#delete').click();
      var todos = $$('#todo p');
      expect(todos.last().getText()).toEqual('ToDo1: completed');
    });

  });
});
