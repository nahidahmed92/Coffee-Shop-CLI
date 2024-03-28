const Order = require('../lib/Order.js');

describe('Order', () => {
  describe('Initialization', () => {
    it('should be an instance of Order', () => {
      const order = new Order();
      expect(order).toBeInstanceOf(Order);
    });
  });
});
// should have a name
// should have a milk which defaults to none
// sweetner: sugar, sweetnlow, equal, splenda
// sweetner count: 0
// size: small, medium, large
// shots: 0
