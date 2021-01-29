import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel(/*transition*/){
    super.beforeModel(...arguments);
    this.replaceWith('orgs');
  }
}
