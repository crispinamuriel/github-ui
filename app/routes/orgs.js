import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  model() {
    const githubOrgs = [
      { id: "emberjs" },
      { id: "ember-cli" },
      { id: "microsoft" },
      { id: "crispinamuriel" },
      { id: "facebook" },
      { id: "netflix" },
      { id: "yahoo" },
    ];
    return githubOrgs;
  }
}
