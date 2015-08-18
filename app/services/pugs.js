import Ember from 'ember';

export default Ember.Service.extend({
  getPugs () {
    return Ember.$.get({url: "http://www.reddit.com/r/pugs.json"});
  },
  getDynamic (category) {
    return Ember.$.get({url: `http://www.reddit.com/r/${category}.json`});
  }
});
