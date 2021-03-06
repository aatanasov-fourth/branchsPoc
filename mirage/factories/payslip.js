import Mirage, { faker } from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  address1: faker.address.streetAddress,
  address2: faker.address.streetName,
  address3: faker.address.secondaryAddress,
  address4: faker.address.secondaryAddress,
  accountName: faker.name.findName,
  companyName: faker.company.companyName,
  county: faker.address.county,
  currentGrossPay: faker.finance.amount,
  employeeAVCToDate: faker.finance.amount,
  employeeFSAVCToDate: faker.finance.amount,
  employeeNumber: faker.finance.amount,
  employeePension: faker.finance.amount,
  employerPensionContribution: faker.finance.amount,
  employerPensionContributionHeader() { return ''; },
  employeePensionToDate: faker.finance.amount,
  employeePensionContributionHeaderYearToDate() { return ''; },
  employerPensionToDate: faker.finance.amount,
  employerPensionContributionHeaderYearToDate() { return ''; },
  employerSHPTotal: faker.finance.amount,
  fullName: faker.name.findName,
  grossNIContribution: faker.finance.amount,
  grossNIContributionToDate: faker.finance.amount,
  grossPayForTaxToDate: faker.finance.amount,
  grossPayYearToDate: faker.finance.amount,
  grossTaxable: faker.finance.amount,
  jobTitle: faker.name.jobTitle,
  monthWeekNumber() {
    return Math.floor(Math.random() * 52) + 1;
  },
  nationalInsuranceCategory: faker.commerce.department,
  nationalInsuranceNumber: faker.random.uuid,
  niContributionToDate: faker.finance.amount,
  employerNIContributionToDate: faker.finance.amount,
  netPay: faker.finance.amount,
  netPayInWords: faker.finance.amount,
  paymentMethodDescription: faker.finance.transactionType,
  payPeriod() {
    return Math.floor(Math.random() * 12) + 1;
  },
  payPreEmployment: faker.finance.amount,
  payslipNote: faker.lorem.paragraph,
  postCode: faker.address.zipCode,
  processingDate(i) {
    return moment().subtract(i, 'month').startOf('month').toDate();
  },
  reference: faker.random.uuid,
  studentLoanYearToDate: faker.finance.amount,
  taxCode: faker.random.uuid,
  taxDueToDate: faker.finance.amount,
  taxPreEmployment: faker.finance.amount,
  totalDeductions: faker.finance.amount,
  totalGrossPayToDate: faker.finance.amount,
  totalPayments: faker.finance.amount,
  town: faker.address.city
});
