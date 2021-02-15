import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    linksToggled(num) {
      alert('omg clicked' + num);
    },
  },
});
