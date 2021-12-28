const outputTotalPayEl = document.getElementById('outputTotalPay');
const btnResultEL = document.getElementById('btnResult');
const diemToanEl = document.getElementById('diemToan');
const diemLyEl = document.getElementById('diemLy');
const diemHoaEl = document.getElementById('diemHoa');
const diemChuanEl = document.getElementById('diemChuan');
const doiTuongDuThiEl = document.getElementById('doiTuongDuThi');
const khuVucEl = document.getElementById('khuVuc');

const getDiemKhuVucA = () => 2;
const getDiemKhuVucB = () => 1;
const getDiemKhuVucC = () => 0.5;
const getDiemDoiTuong1 = () => 2.5;
const getDiemDoiTuong2 = () => 1.5;
const getDiemDoiTuong3 = () => 1;

const getDiemKhuVuc = (khuVuc) => {
  if (khuVuc === 'a') {
    return getDiemKhuVucA();
  }
  if (khuVuc === 'b') {
    return getDiemKhuVucB();
  }
  if (khuVuc === 'c') {
    return getDiemKhuVuc();
  }
  return 0;
};

const getDiemDoiTuong = (doiTuong) => {
  if (doiTuong == 1) {
    return getDiemDoiTuong1();
  }
  if (doiTuong == 2) {
    return getDiemDoiTuong2();
  }
  if (doiTuong == 3) {
    return getDiemDoiTuong3();
  }
  return 0;
};

btnResultEL.addEventListener('click', function (e) {
  e.preventDefault();
  const diemToan = +diemToanEl.value.replace(/,/g, '.');
  const diemLy = +diemLyEl.value.replace(/,/g, '.');
  const diemHoa = +diemHoaEl.value.replace(/,/g, '.');
  const diemChuan = +diemChuanEl.value.replace(/,/g, '.');
  const khuVuc = khuVucEl.value.toLowerCase();
  const doiTuongDuThi = doiTuongDuThiEl.value;
  const diemKhuVuc = getDiemKhuVuc(khuVuc);
  const diemDoiTuong = getDiemDoiTuong(doiTuongDuThi);
  const diemTongKet = diemToan + diemLy + diemHoa + diemKhuVuc + diemDoiTuong;

  //Debug
  // console.log({ diemToan });
  // console.log({ diemLy });
  // console.log({ diemHoa });
  // console.log({ diemChuan });
  // console.log({ khuVuc });
  // console.log({ doiTuongDuThi });
  // console.log({ diemKhuVuc });
  // console.log({ diemDoiTuong });
  // console.log({ diemTongKet });

  if (!diemToan || !diemLy || !diemHoa) {
    outputTotalPay.innerText = 'Rớt';
    return;
  }

  if (diemTongKet >= diemChuan) {
    outputTotalPay.innerText = 'Đậu';
  } else {
    outputTotalPay.innerText = 'Rớt';
  }
});
