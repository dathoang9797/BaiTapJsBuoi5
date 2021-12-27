class people {
  getCostInvoice() {
    return 4.5;
  }

  getCostServiceBasic() {
    return 20.5;
  }

  getRentPremiumChannel() {
    return 7.5;
  }

  getCableBill(numberOfChannelVal) {
    const costInvoice = this.getCostInvoice();
    const costServiceBasic = this.getCostServiceBasic();
    const costRentPremiumChannel = this.getRentPremiumChannel();
    const totalPay = costInvoice + costServiceBasic + costRentPremiumChannel * numberOfChannelVal;
    return totalPay.toLocaleString();
  }
}
export default people;
