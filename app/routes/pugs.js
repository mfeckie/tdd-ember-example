import Ember from 'ember';

export default Ember.Route.extend({
  pugs: Ember.inject.service(),
  model () {
    return this.get('pugs').getPugs();
  }
});
