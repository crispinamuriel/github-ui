import EmberRouter from '@ember/routing/router';
import config from 'github-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('orgs');
  this.route('org', {path: 'org/:org_name'}, function() {
    this.route('repos', function() {
      this.route('issues');
      this.route('contributors');
    });
  });
});
