# Vibe RTS Plugins

Plugin packs for Something Vibe RTS. This repo hosts unit/building content that the main game loads by tag and group id.

## Structure

- src/index.js
- src/plugins/<group>/manifest.js
- src/plugins/<group>/units.js
- src/plugins/<group>/buildings.js

## Plugin Group Contract

Each group exports:

```javascript
{
	manifest: { id, name, version, description, group },
	units: [ ... ],
	buildings: [ ... ]
}
```

### Required IDs

These ids must exist in every group so the main game systems work:

- Units: `scout`, `soldier`, `tank`, `artillery`, `constructor`
- Buildings: `command_center`, `barracks`, `factory`, `shield_generator`

### Unit Shape

```javascript
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
}
```

### Building Shape

```javascript
{
	id: 'barracks',
	name: 'Barracks',
	cost: 300,
	maxHealth: 1500,
	constructionTime: 10.0,
	canProduce: true,
	producibleUnits: ['scout', 'soldier'],
	productionTime: 8.0,
	shield: { radius: 15.0, strength: 500 } // optional
}
```

## Validation

The main game validates plugin groups at runtime and during `npm run build`. If a group is missing required data, the game will still run but it will log warnings and show a UI banner.

## Publishing

Tag releases so the main game can pin to a stable version:

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Current Status

Core group added:
- src/plugins/core/units.js
- src/plugins/core/buildings.js
- src/plugins/core/manifest.js
