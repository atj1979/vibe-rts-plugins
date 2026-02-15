import { manifest as coreManifest } from './plugins/core/manifest.js';
import { units as coreUnits } from './plugins/core/units.js';
import { buildings as coreBuildings } from './plugins/core/buildings.js';

export const pluginGroups = [
  {
    manifest: coreManifest,
    units: coreUnits,
    buildings: coreBuildings
  }
];

export function listPluginGroups() {
  return pluginGroups.slice();
}
