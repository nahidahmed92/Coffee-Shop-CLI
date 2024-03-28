const Drink = require('../lib/Drink.js');

describe('Drink', () => {
  describe('Initialization', () => {
    it('should be an instance of Drink', () => {
      const drink = new Drink();
      expect(drink).toBeInstanceOf(Drink);
    });
    // should have a name
    it('should be a name property', () => {
      const drinkName = 'Green Tea Latte';
      const drink = new Drink(drinkName);
      expect(drink.name).toBe(drinkName);
    });
    // should have a milk which defaults to none
    it('should be a milk which defaults to null', () => {
      const drinkName = 'Green Tea Latte';
      const drink = new Drink(drinkName);
      expect(drink.milk).toBe(null);
    });
    // sweetner: sugar, sweetnlow, equal, splenda
    it('should be a sweetener  which defaults to null', () => {
      const drinkName = 'Green Tea Latte';
      const drink = new Drink(drinkName);
      expect(drink.sweetener).toBe(null);
    });
    // sweetner count: 0
    it('should be a sweetener count  which defaults to 0', () => {
      const drinkName = 'Green Tea Latte';
      const drink = new Drink(drinkName);
      expect(drink.sweetenerCount).toBe(0);
    });
    // size: small, medium, large
    // shots: 0
  });
});
