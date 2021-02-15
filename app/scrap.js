// import Route from "@ember/routing/route";
// import { inject as service } from "@ember/service";
// import RSVP from "rsvp";

// export default class SongsRoute extends Route {
//   @service store;

//   model() {
//     return RSVP.hash({
//       songs: this.store.findAll("song"),
//       albums: this.store.findAll("album"),
//     });
//   }
// }

// <button type="button">{{@text}}</button>

// {{#if this.isConfirming}}
//   <div class="confirm-dialog">
//     <button type="button" class="confirm-submit">
//       OK
//     </button>
//     <button type="button" class="confirm-cancel">
//       Cancel
//     </button>
//   </div>
// {{/if}}

// import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';

// export default class ButtonWithConfirmationComponent extends Component {
//   @tracked isConfirming = false;
// }
