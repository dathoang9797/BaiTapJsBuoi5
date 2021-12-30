class costElectron {
  getGiaKwDauTien(kw) {
    switch (true) {
      case kw < 50:
        return 10 * kw;
      default:
        return 500;
    }
  }
  getGiaKwFrom50To100(kw) {
    switch (true) {
      case kw < 100:
        return 13 * (kw - 50);
      default:
        return 650;
    }
  }

  getGiaKwFrom100To200(kw) {
    switch (true) {
      case kw < 200:
        return 8.5 * (kw - 100);
      default:
        return 850;
    }
  }

  getGiaKwFrom200To350(kw) {
    switch (true) {
      case kw < 350:
        return 7.3 * (kw - 200);
      default:
        return 1100;
    }
  }

  getGiaKwFrom350(kw) {
    return 1300 * (kw - 350);
  }

  getTotalBill(kw) {
    switch (true) {
      case kw <= 50:
        return this.getGiaKwDauTien(kw);
      case kw <= 100:
        return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw);
      case kw <= 200:
        return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw);
      case kw <= 350:
        return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw) + this.getGiaKwFrom200To350(kw);
      case kw >= 350:
        return this.getGiaKwDauTien(kw) + this.getGiaKwFrom50To100(kw) + this.getGiaKwFrom100To200(kw) + this.getGiaKwFrom200To350(kw) + this.getGiaKwFrom350(kw);
    }
  }
}
