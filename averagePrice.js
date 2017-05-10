module.exports = function cheapestDeal(offerString) {
    var individualOffers = offerString.split(",");
    var priceRatio = [];
    var ratioValues = [];
    for (var i = 0; i < individualOffers.length; i++) {
        priceRatio.push({
            amount: Number(individualOffers[i].substr(0, 1)),
            price: Number(individualOffers[i].substr(7, (individualOffers[i].length - 7)))
        })
    }
    for (var j = 0; j < priceRatio.length; j++)
        ratioValues.push((priceRatio[j].price / priceRatio[j].amount).toFixed(2));
    var total = 0;
    for (var k = 0; k < ratioValues.length; k++) {
        total += Number(ratioValues[k])
    }
    console.log(total)
    return "R" + (total/ratioValues.length).toFixed(2)
};
