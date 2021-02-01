import Route from '@ember/routing/route';

export default class OrgReposRoute extends Route {
  async model() {
    let org_name = this.modelFor('org');

    const data = await fetch(`https://api.github.com/orgs/${org_name}/repos`)
      // Handle success
      .then((response) => response.json()) // convert to json
      .then((json) => {
        return json; // return json to data variable
      })
      .catch((err) => console.log("Request Failed", err)); // catch errors
    return data;
  }
}
