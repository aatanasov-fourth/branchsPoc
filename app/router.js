import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('rotas');
  this.route('payslips', function() {
    this.route('payslip', { path: '/:id' });
  });
  this.route('rota');
  this.route('details');
});

export default Router;
