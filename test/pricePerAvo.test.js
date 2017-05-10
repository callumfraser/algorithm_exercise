const assert = require('assert');
const pricePerAvo = require('../pricePerAvo')

describe('The price per avo calculator', function(){

    it('should find these correct values as the ratio of price to amount of avos', function(){
        assert.deepEqual(['R3.00','R3.50','R3.33','R2.90'], pricePerAvo("1 for R3,2 for R7,3 for R10,5 for R14.50"));
    });
});
