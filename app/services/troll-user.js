import Ember from 'ember';

export default Ember.Service.extend({
  sendAlert (message) {
    return window.alert(message);
  }
});
