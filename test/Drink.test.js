const Drink = require('../lib/Drink.js');

describe('Drink', () => {
  describe('Initialization', () => {
    it('should be an instance of Drink', () => {
      const drink = new Drink();
      expect(drink).toBeInstanceOf(Drink);
    });
  });
});
// should have a name
// should have a milk which defaults to none
// sweetner: sugar, sweetnlow, equal, splenda
// sweetner count: 0
// size: small, medium, large
// shots: 0
