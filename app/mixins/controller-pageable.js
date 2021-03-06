import Ember from 'ember';
import config from 'ess/config/environment';

export default Ember.Mixin.create({
  queryParams: ['page', 'items'],
  page: 1,
  items: config.pagination.pageSize
});
