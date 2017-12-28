import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('org', { path: 'org/:id' }, function() {
    this.route('repos', {});
  });

  this.route('orgs');

  this.route('notfound', { path: '*path' });
  this.route('find', {path: 'find/:username'});
});

export default Router;
