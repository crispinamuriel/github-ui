import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  model() {
    const githubOrgs = ['facebook', 'netflix', 'yahoo', 'emberjs'];
    return githubOrgs
  }
}
