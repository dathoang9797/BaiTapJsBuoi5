class company {
  getCostInvoice() {
    return 15;
  }

  getCostServiceBasic() {
    return 7.5;
  }

  getCostServiceBasicFrom10() {
    return 5;
  }

  getRentPremiumChannel() {
    return 50;
  }

  getCableBillOneChannel(numberOfChannel) {
    const costInvoice = this.getCostInvoice();
    const costServiceBasic = this.getCostServiceBasic();
    const costRentPremiumChannel = this.getRentPremiumChannel();
    const totalPay = costInvoice + costServiceBasic + costRentPremiumChannel * numberOfChannel;
    return totalPay;
  }

  getCableBillFrom1To10(numberOfConnection, numberOfChannel) {
    const costServiceBasic = this.getCostServiceBasic();
    const costCableBillOneChannel = this.getCableBillOneChannel(numberOfChannel);
    const totalPay = costCableBillOneChannel + costServiceBasic * (numberOfConnection - 1);
    return totalPay;
  }

  getCableBillFrom10(numberOfConnection, numberOfChannel) {
    const costServiceBasic = this.getCostServiceBasic();
    const costServiceBasicFrom10 = this.getCostServiceBasicFrom10();
    const costCableBillOneChannel = this.getCableBillOneChannel(numberOfChannel);
    const totalPay = costCableBillOneChannel + costServiceBasic * (10 - 1) + costServiceBasicFrom10 * (numberOfConnection - 10);
    return totalPay;
  }

  getCableBill(numberOfConnection, numberOfChannel) {
    if (numberOfConnection === 0) {
      return 0;
    }

    if (numberOfConnection === 1) {
      const totalPay = this.getCableBillOneChannel(numberOfChannel);
      return totalPay.toLocaleString();
    }

    if (numberOfConnection <= 10) {
      const totalPay = this.getCableBillFrom1To10(numberOfConnection, numberOfChannel);
      return totalPay.toLocaleString();
    }

    if (numberOfConnection > 10) {
      const totalPay = this.getCableBillFrom10(numberOfConnection, numberOfChannel);
      return totalPay.toLocaleString();
    }
  }
}

export default company;
