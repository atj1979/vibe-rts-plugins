# Vibe RTS Plugins

Plugin packs for Something Vibe RTS. This repo will host units/buildings content that the main game can load by tag and group name.

## Structure (planned)

- src/index.js
- src/plugins/<group>/plugin.json
- src/plugins/<group>/units.js
- src/plugins/<group>/buildings.js

## Current Status

Core group added:
- `src/plugins/core/units.js`
- `src/plugins/core/buildings.js`
- `src/plugins/core/plugin.json`

The main game will load these by tag + group name once the plugin loader is wired.
