import Route from '@ember/routing/route';

export default class OrgIndexRoute extends Route {
  beforeModel(/* transition */)  {
    super.beforeModel(...arguments);
    this.transitionTo('org.repos');
  }
}
