const assert = require('assert');
const cheapestDeal = require('../cheapestDeal')

describe('The registration number filter count', function(){

    it('should calculate the cheapest deal as 5 for R14.50, R2.90 per avo', function(){
        assert.deepEqual('5 for R14.50, R2.90 per avo', cheapestDeal("1 for R3,2 for R7,3 for R10,5 for R14.50"));
    });
});
