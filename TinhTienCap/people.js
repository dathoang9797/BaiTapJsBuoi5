class people {
  getCostInvoice = () => 4.5;
  getCostServiceBasic = () => 20.5;
  getRentPremiumChannel = () => 7.5;

  getCableBill(numberOfChannelVal) {
    const totalPay = this.getCostInvoice() + this.getCostServiceBasic() + this.getRentPremiumChannel() * numberOfChannelVal;
    return totalPay.toLocaleString();
  }
}
export default people;
