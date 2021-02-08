import Route from '@ember/routing/route';

export default class OrgRoute extends Route {

  beforeModel(/*transition*/) {
    this.replaceWith('org.repos');
  }
  model(params) {
    let { org_name } = params;

    return org_name;
  }
}
