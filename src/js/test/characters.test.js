import Character from '../Character';

test('Создание new Character', () => {
  expect(() => {
    new Character();
  }).toThrow();
});

test('Создание Magician', () => {
  class Magician extends Character {
    constructor(level) {
      super(level);
      this.level = level;
      this.attack = 10;
      this.defence = 40;
      this.distance = 1;
      this.distanceAttack = 4;
      this.health = 50;
      this.type = 'magician';
    }
  }
  const expected = {
    level: 1,
    health: 50,
    type: 'magician',
    attack: 10,
    defence: 40,
    distance: 1,
    distanceAttack: 4,
  };
  const received = new Magician(1);
  expect(received).toEqual(expected);
});
