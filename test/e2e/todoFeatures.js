describe('Todos tracker', function() {

  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  describe('Todos tracker', function() {
    it('has a todo', function() {
      browser.get('/app');
      var todo = $('#todo');
      expect(todo.getText()).toEqual('ToDo1');
    });
  });
});
