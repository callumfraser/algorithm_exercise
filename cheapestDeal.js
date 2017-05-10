module.exports = function cheapestDeal(offerString){
  var individualOffers = offerString.split(',');
  var ratioValues = [];
  var priceRatio = [];
  var cheapestDeal = 999;
  for (i=0;i<individualOffers.length;i++){
    ratioValues.push(
      {
        amount: Number(individualOffers[i].substr(0,1)),
        price: Number(individualOffers[i].substr(7,(individualOffers[i].length-7)))
  })
}
  for (i=0;i<ratioValues.length;i++){
    priceRatio.push(
      (ratioValues[i].price / ratioValues[i].amount).toFixed(2)
    )
  }
  for (i=0;i<priceRatio.length;i++){
    if (priceRatio[i] < cheapestDeal){
      cheapestDeal ==priceRatio[i]
    }
  }
};

//
// module.exports =
