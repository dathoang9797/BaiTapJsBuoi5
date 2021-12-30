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
  switch (true) {
    case khuVuc === 'a':
      return getDiemKhuVucA();
    case khuVuc === 'b':
      return getDiemKhuVucB();
    case khuVuc === 'c':
      return getDiemKhuVucC();
    default:
      return 0;
  }
};

const getDiemDoiTuong = (doiTuong) => {
  switch (true) {
    case doiTuong === 1:
      return getDiemDoiTuong1();
    case doiTuong === 2:
      return getDiemDoiTuong2();
    case doiTuong === 3:
      return getDiemDoiTuong3();
    default:
      return 0;
  }
};

btnResultEL.addEventListener('click', function (e) {
  e.preventDefault();
  const diemToan = +diemToanEl.value.replace(/,/g, '.');
  const diemLy = +diemLyEl.value.replace(/,/g, '.');
  const diemHoa = +diemHoaEl.value.replace(/,/g, '.');
  const diemChuan = +diemChuanEl.value.replace(/,/g, '.');
  const khuVuc = khuVucEl.value.toLowerCase();
  const doiTuongDuThi = +doiTuongDuThiEl.value;
  const diemKhuVuc = getDiemKhuVuc(khuVuc);
  const diemDoiTuong = getDiemDoiTuong(doiTuongDuThi);
  const diemTongKet = diemToan + diemLy + diemHoa + diemKhuVuc + diemDoiTuong;

  if (!diemToan || !diemLy || !diemHoa) {
    outputTotalPay.innerText = 'Rớt';
    return;
  }

  if (diemTongKet >= diemChuan) {
    outputTotalPay.innerText = 'Đậu';
  } else {
    outputTotalPay.innerText = 'Rớt';
  }

  //Debug
  console.log({ diemToan });
  console.log({ diemLy });
  console.log({ diemHoa });
  console.log({ diemChuan });
  console.log({ khuVuc });
  console.log({ doiTuongDuThi });
  console.log({ diemKhuVuc });
  console.log({ diemDoiTuong });
  console.log({ diemTongKet });
});
