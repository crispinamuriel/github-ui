import Route from '@ember/routing/route';

export default class OrgReposRoute extends Route {
  model() {
    const repos = [
      { id: "react" },
      { id: "relay" },
      { id: "watchman" },
      { id: "react-native" },
      { id: "ember.js" },
    ];
    return repos;
  }
}
