import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('rota-schedule', {
  // Specify the other units that are required for this test.
});

test('calculateShifts', function(assert) {
  var model = this.subject();

  Ember.run(() => {
    model.setProperties({
      location: "Some Restaurant",
      jobTitle: "Waiter",
      shiftDate: new Date(2015, 0, 1),
      shiftTimes: ['00:00', '05:00', '17:00', '23:00']
    });

    model.calculateShifts();
    var shifts = model.get('shifts');
    assert.equal(shifts.get('length'), 2, 'the correct number of shifts were returned');

    var shiftLocations = [shifts.get('firstObject.location'), shifts.get('lastObject.location')];
    assert.deepEqual(['Some Restaurant', 'Some Restaurant'], shiftLocations, 'the shifts contain the location');

    var shiftJobTitle = [shifts.get('firstObject.jobTitle'), shifts.get('lastObject.jobTitle')];
    assert.deepEqual(['Waiter', 'Waiter'], shiftJobTitle, 'the shifts contain the job title');
  });
});

test('it can detect non-rota days', function(assert) {
  assert.expect(7);

  // Creates the component instance
  var model = this.subject();

  Ember.run(() => {
    model.set('type', 'on');
    assert.equal(model.get('isNotRota'), false);
    model.set('type', 'off');
    assert.equal(model.get('isNotRota'), false);
    model.set('type', 'On');
    assert.equal(model.get('isNotRota'), false);
    model.set('type', 'OFF');
    assert.equal(model.get('isNotRota'), false);
    model.set('type', 'Xon');
    assert.equal(model.get('isNotRota'), true);
    model.set('type', 'Xoff');
    assert.equal(model.get('isNotRota'), true);
    model.set('type', 'Holiday');
    assert.equal(model.get('isNotRota'), true);
  });
});

test('calculated shift objects can return shift times as minutes', function(assert) {
  assert.expect(4);
  var model = this.subject();

  Ember.run(() => {
    model.setProperties({
      shiftTimes: ['00:00', '05:00', '17:00', '23:00']
    });

    model.calculateShifts();

    var shifts = model.get('shifts');
    assert.equal(shifts.get('0.startAsMinutes'), 0, 'first shift.startAsMinutes is 0');
    assert.equal(shifts.get('0.endAsMinutes'), 5 * 60, 'first shift.endAsMinutes is 5 * 60');
    assert.equal(shifts.get('1.startAsMinutes'), 17 * 60, 'second shift.startAsMinutes is 17 * 60');
    assert.equal(shifts.get('1.endAsMinutes'), 23 * 60, 'second shift.endAsMinutes is 23 * 60');
  });
});
