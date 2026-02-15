export const buildings = [
  {
    id: 'command_center',
    name: 'Command Center',
    costs: {},
    maxHealth: 5000,
    constructionTime: 0,
    canProduce: true,
    producibleUnits: ['constructor'],
    productionTime: 15.0,
    resourceDepot: true,
    startingResources: { energy: 500, metal: 300, rare: 50 }
  },
  {
    id: 'barracks',
    name: 'Barracks',
    costs: { energy: 300, metal: 200 },
    maxHealth: 1500,
    constructionTime: 10.0,
    canProduce: true,
    producibleUnits: ['scout', 'soldier'],
    productionTime: 8.0,
    resourceDepot: false
  },
  {
    id: 'factory',
    name: 'Factory',
    costs: { energy: 500, metal: 400 },
    maxHealth: 2000,
    constructionTime: 15.0,
    canProduce: true,
    producibleUnits: ['tank', 'artillery'],
    productionTime: 12.0,
    resourceDepot: false
  },
  {
    id: 'shield_generator',
    name: 'Shield Generator',
    costs: { energy: 400, metal: 300, rare: 100 },
    maxHealth: 1000,
    constructionTime: 12.0,
    canProduce: false,
    resourceDepot: false,
    shield: {
      radius: 15.0,
      strength: 500
    }
  }
];
