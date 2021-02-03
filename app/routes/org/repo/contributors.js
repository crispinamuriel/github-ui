import Route from '@ember/routing/route';

export default class OrgRepoContributorsRoute extends Route {
  async model() {

    const org_name = this.modelFor('org');
    const repo_name = this.modelFor('org.repo');

    const data = await fetch(`https://api.github.com/repos/${org_name}/${repo_name}/contributors`)
        .then((response) => response.json())
        .then((json) => {
          return json;
        }).catch((err) => console.log('Request Error: ', err));

    return data
  }
}
