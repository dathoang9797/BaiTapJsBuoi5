import peopleObj from './people.js';
import companyObj from './company.js';

const people = new peopleObj();
const company = new companyObj();
const customerCodeEl = document.getElementById('customerCode');
const numberOfConnectEl = document.getElementById('numberOfConnections');
const numberOfChannelEl = document.getElementById('numberOfChannels');
const customerTypeEl = document.getElementById('customerType');
const outputTotalPayEl = document.getElementById('outputTotalPay');
const payBillEL = document.getElementById('payBill');
const outputCustomerCodeEL = document.getElementById('outputCustomerCode');

customerTypeEl.addEventListener('change', function () {
  if (this.value.toLowerCase() === 'people') {
    numberOfConnections.setAttribute('disabled', 'disabled');
  } else {
    numberOfConnections.removeAttribute('disabled');
  }
});

payBillEL.addEventListener('click', function (e) {
  e.preventDefault();
  const customerTypeVal = customerTypeEl.value.toLowerCase();
  const customerCodeVal = +customerCodeEl.value.replace(/,/g, '.');
  const numberOfConnectVal = +numberOfConnectEl.value.replace(/,/g, '.');
  const numberOfChannelVal = +numberOfChannelEl.value.replace(/,/g, '.');
  outputCustomerCodeEL.innerText = `Mã khách hàng: ${customerCodeVal}`;

  if (customerTypeVal === 'people') {
    const totalPay = people.getCableBill(numberOfChannelVal);
    outputTotalPayEl.innerText = `${totalPay}$`;
    return;
  }

  if (customerTypeVal === 'company') {
    const totalPay = company.getCableBill(numberOfConnectVal, numberOfChannelVal);
    outputTotalPayEl.innerText = `${totalPay}$`;
    return;
  }
});
