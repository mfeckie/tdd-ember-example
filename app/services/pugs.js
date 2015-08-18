import Ember from 'ember';

export default Ember.Service.extend({
  getPugs () {
    return Ember.$.get('http://www.reddit.com/r/pugs.json').then((result) => {
      return result.data.children.map((child) => {
        return {
          id: child.data.title,
          domain: child.data.domain,
          url: child.data.url,
          score: child.data.score,
          author: child.data.author,
          date: new Date(child.data.created).toLocaleString()
        };
      });
    });
  },
  getDynamic (category) {
    return Ember.$.get({url: `http://www.reddit.com/r/${category}.json`});
  }
});
