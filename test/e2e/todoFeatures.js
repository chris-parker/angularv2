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
  });
});
