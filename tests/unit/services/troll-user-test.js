import { moduleFor, test } from 'ember-qunit';

moduleFor('service:troll-user', 'Unit | Service | troll user', {
  beforeEach () {
    window.alert = function (message) {
      return message;
    };
  }
});

test('it calls the alert function on window', function(assert) {
  var service = this.subject();

  assert.equal(service.sendAlert('Boo!'), 'Boo!');
});
