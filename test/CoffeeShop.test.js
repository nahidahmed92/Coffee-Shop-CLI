const CoffeeShop = require('../lib/CoffeeShop.js');

describe('CoffeeShop', () => {
  describe('Initialization', () => {
    it('should be an instance of CoffeeShop', () => {
      const coffeeShop = new CoffeeShop();
      expect(coffeeShop).toBeInstanceOf(CoffeeShop);
    });
  });
});
// should have a name
// should have a milk which defaults to none
// sweetner: sugar, sweetnlow, equal, splenda
// sweetner count: 0
// size: small, medium, large
// shots: 0
