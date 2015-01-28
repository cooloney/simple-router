
Router.configure({
  layoutTemplate: 'hello',
  notFoundTemplate: 'pageNotFound'
});

Router.route('/', 'hello');
Router.route('test');
