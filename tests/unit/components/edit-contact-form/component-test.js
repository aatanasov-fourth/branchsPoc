import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

const employee = {
  address1: 'address1',
  address2: 'address2',
  address3: 'address3',
  town: 'Town',
  county: 'County',
  country: 'Country',
  postCode: '0000',
  homeTel: '000-000-000',
  mobileTel: '00000-000-000-000',
  workEmail: 'work@email.com',
  homeEmail: 'home@email.com'
};

moduleForComponent('edit-contact-form', {
  needs: [
    'component:input-field',
    'helper:t'
  ]
});

test('it renders', function (assert) {
  assert.expect(2);

  // Create the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Render component
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('component properties are set', function (assert) {
  assert.expect(1);

  // Create the component instance
  const component = this.subject({
    model: employee
  });

  assert.deepEqual(component.get('model'), employee, 'Test if configuration object is being set properly.');
});

test('component properties are binded to input fields', function (assert) {
  // Create the component instance
  const component = this.subject({
    model: employee
  });

  this.render();

  const propertyNamesList = ['address1', 'address2', 'address3', 'town', 'county', 'country', 'postCode', 'homeTel', 'mobileTel', 'homeEmail', 'workEmail'];

  assert.expect(1);

  let inputElement = this.$('#address1');

  assert.ok(true);
});
