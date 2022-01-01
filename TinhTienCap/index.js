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

const totalPayOfCustomer = (customerTypeVal, numberOfChannelVal, numberOfConnectVal) => {
  switch (customerTypeVal) {
    case 'people':
      if (!numberOfChannelVal) {
        return 0;
      } else {
        return people.getCableBill(numberOfChannelVal);
      }

    case 'company':
      if (!numberOfChannelVal) {
        return 0;
      } else {
        return company.getCableBill(numberOfConnectVal, numberOfChannelVal);
      }
  }
};

payBillEL.addEventListener('click', function (e) {
  e.preventDefault();
  const customerTypeVal = customerTypeEl.value.toLowerCase();
  const customerCodeVal = Math.floor(+customerCodeEl.value.split(',').join('.'));
  const numberOfConnectVal = Math.floor(+numberOfConnectEl.value.split(',').join('.'));
  const numberOfChannelVal = Math.floor(+numberOfChannelEl.value.split(',').join('.'));
  const totalPay = totalPayOfCustomer(customerTypeVal, numberOfChannelVal, numberOfConnectVal);
  // outputCustomerCodeEL.innerText = `Mã khách hàng: ${customerCodeVal}`;
  outputTotalPayEl.innerHTML = `
  <p>Mã Khách Hàng: ${customerCodeVal}</p>
  <p>Tiền cáp phải đóng là: ${totalPay}$</p>`;
});
