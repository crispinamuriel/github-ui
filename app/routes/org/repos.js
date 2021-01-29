import Route from '@ember/routing/route';

export default class OrgReposRoute extends Route {
  model() {
    const repos = ['react', 'relay', 'watchman', 'react-native', 'ember.js'];
    return repos;
  }
}
