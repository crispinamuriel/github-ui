import Component from "@ember/component";
export default Component.extend({
  isExpanded: true,
  actions: {
    toggle(num) {
      this.toggleProperty("isExpanded");
      this.sendAction("on-social-toggle", num);
    },
    linksToggled() {
      console.log("TOGGLED");
    }
  },
});
// import Ember from 'ember';
// export default Ember.Component.extend({

// });

/* https://medium.com/@Dhaulagiri/embers-javascript-modules-api-b4483782f329
Examples of incorrect code for this rule:

Ember.Component.extend({});
Ember.Object.extend({});
Ember.computed(function () {});
Ember.inject.service('foo');


Examples of correct code for this rule:

import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import Service, { inject } from '@ember/service';
*/
