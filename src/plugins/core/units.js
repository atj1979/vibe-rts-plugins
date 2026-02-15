export const units = [
  {
    id: 'scout',
    name: 'Scout',
    role: 'light',
    cost: 50,
    stats: {
      maxHealth: 50,
      speed: 8.0,
      damage: 5,
      attackRange: 4.0,
      attackCooldown: 0.5
    }
  },
  {
    id: 'soldier',
    name: 'Soldier',
    role: 'balanced',
    cost: 100,
    stats: {
      maxHealth: 100,
      speed: 5.0,
      damage: 10,
      attackRange: 5.0,
      attackCooldown: 1.0
    }
  },
  {
    id: 'tank',
    name: 'Tank',
    role: 'heavy',
    cost: 200,
    stats: {
      maxHealth: 200,
      speed: 2.5,
      damage: 25,
      attackRange: 6.0,
      attackCooldown: 2.0
    }
  },
  {
    id: 'artillery',
    name: 'Artillery',
    role: 'siege',
    cost: 250,
    stats: {
      maxHealth: 75,
      speed: 1.5,
      damage: 40,
      attackRange: 15.0,
      attackCooldown: 3.0
    }
  },
  {
    id: 'constructor',
    name: 'Constructor',
    role: 'support',
    cost: 150,
    stats: {
      maxHealth: 80,
      speed: 4.0,
      damage: 0,
      attackRange: 0.0,
      attackCooldown: 0.0
    }
  }
];
