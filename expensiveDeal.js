module.exports = function cheapestDeal(offerString){
  var individualOffers = offerString.split(',');
  var ratioValues = [];
  var priceRatio = [];
  var expensiveDeal;
  for (i=0;i<individualOffers.length;i++){
    ratioValues.push(
      {
        amount: Number(individualOffers[i].substr(0,1)),
        price: Number(individualOffers[i].substr(7,(individualOffers[i].length-7)))
  })
}
  for (i=0;i<ratioValues.length;i++){
    priceRatio.push(
      Number(ratioValues[i].price / ratioValues[i].amount).toFixed(2)
    )
  }
  var expensiveRatio = Math.max.apply(Math, priceRatio);
  for (i=0;i<priceRatio.length;i++){
    if (priceRatio[i] == expensiveRatio){
      expensiveDeal = individualOffers[i] + ", R" + expensiveRatio.toFixed(2) + " per avo"
    }
  }
  return expensiveDeal
};
