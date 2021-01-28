import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | org/repos/issues', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:org/repos/issues');
    assert.ok(route);
  });
});
