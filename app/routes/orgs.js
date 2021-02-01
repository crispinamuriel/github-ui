import Route from '@ember/routing/route';

export default class OrgsRoute extends Route {
  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('items', this.get('favorites.items'));
  },

  actions: {
    addToFavorites(value) {
      this.get('favorites.items').addObject({ id: value });
      console.log(this.get('favorites.items'));
    },
  },
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
