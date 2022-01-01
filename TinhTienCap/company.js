class companyObj {
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
    switch (true) {
      case numberOfConnection === 0:
        return this.getCostInvoice() + this.getRentPremiumChannel() * numberOfChannel;

      case numberOfConnection === 1:
        return this.getCableBillFrom1(numberOfChannel).toLocaleString();

      case numberOfConnection <= 10:
        return this.getCableBillFrom1To10(numberOfConnection, numberOfChannel).toLocaleString();

      case numberOfConnection > 10:
        return this.getCableBillFrom10(numberOfConnection, numberOfChannel).toLocaleString();
    }
  }
}
