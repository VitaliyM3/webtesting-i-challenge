// const enhancer = require('./enhancer.js');
const {succeed, fail, repair, get} = require('./enhancer.js');

// test away!

describe('repair item', function() {
    describe(".repair()", function() {
        it('should take an item and restore its durability to 100%', function() {
            const item = {
                name: "sword",
                durability: 90,
                enhancement: 17
            };

            const repairedItem = {
                name: "sword",
                durability: 100,
                enhancement: 17
            };

            const repairItem = repair(item);
            expect(repairItem).toEqual(repairedItem);
        });
    });
});

describe('enhancment succeeds', function() {
    describe(".succeed()", function() {
        it('should increase enhancement by 1 with a max of 20', function() {
            const item = {
                name: "sword",
                durability: 75,
                enhancement: 17
            };

            const enhanced = {
                name: "sword",
                durability: 75,
                enhancement: 18
            };

            const enhanceItem = succeed(item);
            expect(enhanced).toEqual(enhanceItem);
        });
    });
});

describe('enhancement fails', function() {
    describe(".fail if enh < 15", function() {
        it('if enh is < 15, dec dur by 5. if enh is 15 or more, dec dur by 10. if item enh > 16, enh dec by 1', function() {
            const item = {
                name: "sword",
                durability: 75,
                enhancement: 13
            };

            const expectedRes = {
                name: "sword",
                durability: 70,
                enhancement: 13
            };

            const failedItem = fail(item);
            expect(failedItem).toEqual(expectedRes);
        });
    });
});