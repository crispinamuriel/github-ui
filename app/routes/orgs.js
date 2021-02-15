import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {

  model() {
    const githubOrgs = [
      { id: "adobe" },
      { id: "RedHatOfficial" },
      { id: "cfpb" },
      { id: "netflix" },
      { id: "esri" },
      { id: "square" },
      { id: "twitter" },
      { id: "ibm" },
      { id: "alibaba" },
      { id: "emberjs" },
      { id: "ember-cli" },
      { id: "microsoft" },
      { id: "godaddy" },
      { id: "facebook" },
      { id: "yahoo" },
      { id: "yelp" },
      { id: "crispina" },
    ];
    return githubOrgs;
  }
}
