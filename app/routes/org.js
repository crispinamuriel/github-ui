import Route from '@ember/routing/route';

export default class OrgRoute extends Route {
  model(params) {
    let { org_name } = params;
    org_name = org_name[0].toUpperCase() + org_name.slice(1);
    return org_name;
  }
}
