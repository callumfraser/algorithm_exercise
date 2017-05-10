const assert = require('assert');
const expensiveDeal = require('../expensiveDeal')

describe('The registration number filter count', function(){

    it('should calculate the most expensive deal as 2 for R7, R3.50 per avo', function(){
        assert.deepEqual('2 for R7, R3.50 per avo', expensiveDeal("1 for R3,2 for R7,3 for R10,5 for R14.50"));
    });
});
