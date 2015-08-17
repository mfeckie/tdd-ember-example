import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'tdd/tests/helpers/start-app';

module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('shows list of colors', function(assert) {
  visit('/');

  andThen(function () {
    var list = find('.ui.label');
    assert.equal(list.length, 3, 'Expected list to have three elements');
  });
});

test('Items have color class', function(assert) {
  visit('/');
  andThen(function () {
    var firstItem = find('.ui.label:first');
    assert.ok(firstItem.hasClass('red'));
  });
});
