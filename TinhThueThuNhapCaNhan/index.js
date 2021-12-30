const hoTenEl = document.getElementById('hoTen');
const tongThuNhapEl = document.getElementById('tongThuNhap');
const soNguoiPhuThuocEl = document.getElementById('soNguoiPhuThuoc');
const outputTotalPayEl = document.getElementById('outputTotalPay');
const payBillEL = document.getElementById('payBill');

const tinhThuePhaiTra = (thuNhapChiuThue) => {
  switch (true) {
    case thuNhapChiuThue <= 60:
      return thuNhapChiuThue * 0.05;

    case thuNhapChiuThue <= 120:
      return thuNhapChiuThue * 0.1;

    case thuNhapChiuThue <= 210:
      return thuNhapChiuThue * 0.15;

    case thuNhapChiuThue <= 384:
      return thuNhapChiuThue * 0.2;

    case thuNhapChiuThue <= 624:
      return thuNhapChiuThue * 0.25;

    case thuNhapChiuThue <= 960:
      return thuNhapChiuThue * 0.3;

    case thuNhapChiuThue > 960:
      return thuNhapChiuThue * 0.35;
  }
};

payBillEL.addEventListener('click', function (e) {
  e.preventDefault();
  const hoTenVal = hoTenEl.value;
  const tongThuNhapVal = +tongThuNhapEl.value.replace(/,/g, '.');
  const soNguoiPhuThuocVal = +soNguoiPhuThuocEl.value.replace(/,/g, '.');
  const thuNhapChiuThue = tongThuNhapVal - 4 - soNguoiPhuThuocVal * 1.6;
  const thuePhaiTra = tinhThuePhaiTra(thuNhapChiuThue).toFixed(2);

  outputTotalPayEl.innerHTML = `
  <p>Họ Tên: ${hoTenVal}</p>
  <p>Tổng Thu Nhập Năm: ${tongThuNhapVal}</p>
  <p>Số Người Phụ Thuộc: ${soNguoiPhuThuocVal}</p>
  <p>Tiền Thuế Phải Trả: ${thuePhaiTra}vnd</p>
  `;
});
