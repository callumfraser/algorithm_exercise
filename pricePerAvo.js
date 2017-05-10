
module.exports = function pricePerAvo(offerString){
  var individualOffers = offerString.split(',');
  var placeValues = [];
  for (i=0;i<individualOffers.length;i++){
    placeValues.push(indivdualOffers[i].substr(1,5).splice());
  }
  console.log(placeValues)
};


var pricePerAvo = function (offerString){
  console.log('hi22')
  var individualOffers = offerString.split(',');
  var placeValues = [];
  for (i=0;i<individualOffers.length;i++){
    placeValues.push(individualOffers[i].substr(1,5));
  }
  console.log(placeValues)
};
console.log(pricePerAvo("123456789,3333432,36356363,4346346346346"))
console.log("hi")

// console.log(pricePerAvo("1,2,3,4"))
