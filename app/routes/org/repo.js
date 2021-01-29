import Route from '@ember/routing/route';

export default class OrgRepoRoute extends Route {
  model(params) {
    let { repo_name } = params;
    repo_name = repo_name[0].toUpperCase() + repo_name.slice(1);
    return repo_name;
  }
}
