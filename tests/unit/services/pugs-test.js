import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';
import sinon from 'sinon';

var ajaxStub;

moduleFor('service:pugs', 'Unit | Service | pugs', {
  beforeEach () {
    ajaxStub = sinon.stub(Ember.$, 'get');
    ajaxStub.returns({
      then: function(){
        
      }
    });
  },
  afterEach () {
    Ember.$.get.restore();
  }
});

test('It calls reddit api', function (assert) {
  var service = this.subject();
  service.getPugs();
  assert.ok(ajaxStub.calledOnce);
});

test('It calls with the correct arguments', function (assert) {
  var service = this.subject();
  service.getPugs();
  var args = ajaxStub.args[0][0];

  assert.equal(args, 'http://www.reddit.com/r/pugs.json');
});

test('It calls with dynamic arguments', function (assert) {
  var service = this.subject();

  service.getDynamic('muggles');
  var args = ajaxStub.args[0][0];

  assert.equal(args.url, `http://www.reddit.com/r/${'muggles'}.json`);
});
