const assert = require('assert');
const averagePrice = require('../averagePrice')

describe('The average price check', function(){

    it('should calculate the average price as R3.18', function(){
        assert.deepEqual('R3.18', averagePrice("1 for R3,2 for R7,3 for R10,5 for R14.50"));
    });
});
