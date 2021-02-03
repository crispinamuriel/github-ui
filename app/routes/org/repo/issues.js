import Route from '@ember/routing/route';

export default class OrgRepoIssuesRoute extends Route {
  async model() {
    let org_name = this.modelFor('org');
    let repo_name = this.modelFor('org.repo');

    const data = await fetch(`https://api.github.com/repos/${org_name}/${repo_name}/issues`)
        .then((response) => response.json())
        .then((json) => {
          return json;
        }).catch((err) => console.log("Request Failed: ", err));

    return data;
  }
}
// async model() {
//     let org_name = this.modelFor('org');

//     const data = await fetch(`https://api.github.com/orgs/${org_name}/repos`)
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         return json; // return json to data variable
//       })
//       .catch((err) => console.log("Request Failed", err)); // catch errors
//     return data;
//   }
