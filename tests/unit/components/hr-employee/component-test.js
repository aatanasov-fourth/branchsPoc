import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';
import t from 'ess/helpers/t';
import moment from 'ess/helpers/moment';

moduleForComponent('hr-employee', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  beforeEach: function () {
    Ember.Handlebars.registerHelper('t', t);
    Ember.Handlebars.registerHelper('moment', moment);
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
