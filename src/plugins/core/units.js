export const units = [
  {
    id: 'scout',
    name: 'Scout',
    role: 'light',
    costs: { energy: 50, metal: 25 },
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
    costs: { energy: 100, metal: 50 },
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
    costs: { energy: 200, metal: 150 },
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
    costs: { energy: 250, metal: 100 },
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
    costs: { energy: 150, metal: 75 },
    stats: {
      maxHealth: 80,
      speed: 4.0,
      damage: 0,
      attackRange: 0.0,
      attackCooldown: 0.0
    },
    gatherer: true,
    gatherRate: 5
  }
];
