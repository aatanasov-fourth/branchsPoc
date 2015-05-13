import DS from 'ember-data';
import Ember from 'ember';
import i18n from 'ess/i18n';

var attr = DS.attr;
var computed = Ember.computed;
var filterBy = computed.filterBy;
var dayMonthFormat = i18n.t('dateFormats.dayMonth');

var Payslip = DS.Model.extend({
  address1: attr('string'),
  address2: attr('string'),
  address3: attr('string'),
  address4: attr('string'),
  accountName: attr('string'),      // appears to be obsolete - no longer in spec
  companyName: attr('string'),
  county: attr('string'),
  currentGrossPay: attr('number'),
  employeeAVCToDate: attr('number'),
  employeeFSAVCToDate: attr('number'),
  employeeNumber: attr('string'),
  employeePension: attr('number'),
  employerPensionContribution: attr('number'),
  employeePensionToDate: attr('number'),
  employerPensionToDate: attr('number'),
  employerSHPTotal: attr('number'),
  fullName: attr('string'),
  grossNIContribution: attr('number'),
  grossNIContributionToDate: attr('number'),
  grossPayForTaxToDate: attr('number'),
  grossPayYearToDate: attr('number'),
  grossTaxable: attr('number'),
  jobTitle: attr('string'),
  monthWeekNumber: attr('number'),
  nationalInsuranceCategory: attr('string'),
  nationalInsuranceNumber: attr('string'),
  niContributionToDate: attr('number'),
  netPay: attr('number'),
  netPayInWords: attr('string'),
  paymentMethodDescription: attr('string'),
  payPeriod: attr('string'),
  payPreEmployment: attr('number'),
  payslipNote: attr('string'),
  postCode: attr('string'),
  processingDate: attr('string'),
  reference: attr('string'),
  taxCode: attr('string'),
  taxDueToDate: attr('number'),
  taxPreEmployment: attr('number'),
  totalGrossPayToDate: attr('number'),
  town: attr('string'),

  payslipElements: DS.hasMany('payslipElement'),

  grossPay: computed.alias('currentGrossPay'),
  payments: filterBy('payslipElements', 'category', 'Payment'),
  deductions: filterBy('payslipElements', 'category', 'Deduction'),

  currentPayPeriod: function () {
    var props = this.getProperties('payPeriod', 'monthWeekNumber');
    return props.payPeriod || props.monthWeekNumber;
  }.property('payPeriod', 'monthWeekNumber'),

  totalDeductions: function () {
    var props = this.getProperties('currentGrossPay', 'netPay');
    return (props.currentGrossPay - props.netPay).toFixed(2);
  }.property('currentGrossPay', 'netPay'),

  formattedProcessingDate: function () {
    return moment(this.get('processingDate')).format(dayMonthFormat);
  }.property('processingDate')
});

export default Payslip;
