Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {

  this.route('home', {path: '/'});
  this.route('projects', {path: '/projects'});
  this.route('about', {path: '/about'});

});

