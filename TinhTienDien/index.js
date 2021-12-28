import costElectron from './CostElectron.js';

const soKWEl = document.getElementById('soKW');
const outputTotalPayEl = document.getElementById('outputTotalPay');
const hoTenEL = document.getElementById('hoten');
const payBillEL = document.getElementById('payBill');
const Electron = new costElectron();

payBillEL.addEventListener('click', function (e) {
  e.preventDefault();
  const hoTenVal = hoTenEL.value;
  const soKWVal = +soKWEl.value.replace(/,/g, '.');
  const costPayBill = Electron.getTotalBill(soKWVal);

  outputTotalPayEl.innerHTML = `
  <p>Họ Tên: ${hoTenVal}</p>
  <p>Tiền điện phải đóng là: ${costPayBill}</p>
  
  `;
});
