class company {
  getCostInvoice = () => 15;
  getCostServiceBasic = () => 7.5;
  getCostServiceBasicFrom10 = () => 5;
  getRentPremiumChannel = () => 50;

  getCableBillFrom1(numberOfChannel) {
    return this.getCostInvoice() + this.getCostServiceBasic() + this.getRentPremiumChannel() * numberOfChannel;
  }

  getCableBillFrom1To10(numberOfConnection, numberOfChannel) {
    return this.getCableBillFrom1(numberOfChannel) + this.getCostServiceBasic() * (numberOfConnection - 1);
  }

  getCableBillFrom10(numberOfConnection, numberOfChannel) {
    return this.getCableBillFrom1(numberOfChannel) + this.getCostServiceBasic() * (10 - 1) + this.getCostServiceBasicFrom10() * (numberOfConnection - 10);
  }

  getCableBill(numberOfConnection, numberOfChannel) {
    if (numberOfConnection === 0) {
      return 0;
    }

    if (numberOfConnection === 1) {
      const totalPay = this.getCableBillFrom1(numberOfChannel);
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
