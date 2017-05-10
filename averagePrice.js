module.exports = function averagePrice(offerString) {
    var individualOffers = offerString.split(',');
    var ratioValues = [];
    var priceRatio = [];
    var expensiveDeal;
    for (i = 0; i < individualOffers.length; i++) {
        ratioValues.push({
            amount: Number(individualOffers[i].substr(0, 1)),
            price: Number(individualOffers[i].substr(7, (individualOffers[i].length - 7)))
        })
    }
    for (var i = 0; i < ratioValues.length; i++) {
        priceRatio.push(
            Number(ratioValues[i].price / ratioValues[i].amount).toFixed(2)
        )
    }

    var total = 0;
    for (var y = 0; y < priceRatio.length; y++) {
        total += Number(priceRatio[y])
    }

    var averagePrice = total / priceRatio.length;
    return "R" + averagePrice.toFixed(2);
};
