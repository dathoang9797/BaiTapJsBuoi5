class costElectron {
  getGiaKwDauTien(kw) {
    if (kw < 50) {
      return 10 * kw;
    }
    return 500;
  }

  getGiaKwFrom50To100(kw) {
    if (kw < 100) {
      return 13 * (kw - 50);
    }
    return 650;
  }

  getGiaKwFrom100To200(kw) {
    if (kw < 200) {
      return 8.5 * (kw - 100);
    }
    return 850;
  }

  getGiaKwFrom200To350(kw) {
    if (kw < 350) {
      return 7.3 * (kw - 200);
    }
    return 1100;
  }

  getGiaKwFrom350(kw) {
    return 1300 * (kw - 350);
  }

  getTotalBill(kw) {
    if (kw <= 50) {
      return this.getGiaKwDauTien(kw);
    }

    if (kw <= 100) {
      return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw);
    }

    if (kw <= 200) {
      return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw);
    }

    if (kw <= 350) {
      return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw) + this.getGiaKwFrom200To350(kw);
    }

    if (kw >= 350) {
      return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw) + this.getGiaKwFrom200To350(kw) + this.getGiaKwFrom350(kw);
    }
  }
}

export default costElectron;
