export const buildings = [
  {
    id: 'command_center',
    name: 'Command Center',
    cost: 0,
    maxHealth: 5000,
    constructionTime: 0,
    canProduce: true,
    producibleUnits: ['constructor'],
    productionTime: 15.0
  },
  {
    id: 'barracks',
    name: 'Barracks',
    cost: 300,
    maxHealth: 1500,
    constructionTime: 10.0,
    canProduce: true,
    producibleUnits: ['scout', 'soldier'],
    productionTime: 8.0
  },
  {
    id: 'factory',
    name: 'Factory',
    cost: 500,
    maxHealth: 2000,
    constructionTime: 15.0,
    canProduce: true,
    producibleUnits: ['tank', 'artillery'],
    productionTime: 12.0
  },
  {
    id: 'shield_generator',
    name: 'Shield Generator',
    cost: 400,
    maxHealth: 1000,
    constructionTime: 12.0,
    canProduce: false,
    shield: {
      radius: 15.0,
      strength: 500
    }
  }
];
