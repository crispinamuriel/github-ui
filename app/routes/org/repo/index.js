import Route from '@ember/routing/route';

export default class OrgRepoIndexRoute extends Route {
  beforeModel(/* transition */) {
    super.beforeModel(...arguments);
    this.replaceWith('org.repo.issues');
  }
}
