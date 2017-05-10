module.exports = function pricePerAvo(offerString){
  var individualOffers = offerString.split(',');
  var ratioValues = [];
  var priceRatio = [];
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
  return priceRatio
};

//
// module.exports =
