describe('angularjs homepage todo list', function() {
  it('should display hello world', function() {
    browser.get('/app');
    element(by.id("hello")).getText().then(function(text){
    expect(text).toEqual("Hello World!");
    });
  });
});
