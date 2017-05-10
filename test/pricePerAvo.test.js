const assert = require('assert');
const countAllFromTown = require('../countAllFromTown')

describe('The registration number filter count', function(){

    it('should calculate these prices per avo as R3.00;R3.50;R3.33;R2.9', function(){
        assert.equal('[R3.00,R3.50,R3.33,R2.9]', pricePerAvo("1 for R3, 2 for R7, 3 for R10, 5 for R14.50"));
    });
});
