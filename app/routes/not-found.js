/* eslint-disable ember/no-get */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class NotFoundRoute extends Route {
  @service('authentication')

  setupController(controller) {
    super.setupController(...arguments);
        controller.set('records', this.get('authentication.records'));
  }
}
