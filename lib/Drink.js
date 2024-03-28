class Drink {
  constructor(name) {
    this.name = name;
    this.milk = null;
    this.sweetener = null;
    this.sweetenerCount = 0;
    this.size = 'Medium';
    this.shots = 0;
  }
}

module.exports = Drink;
