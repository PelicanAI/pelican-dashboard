import { TopGainers } from './cards/TopGainers';
import { TopLosers } from './cards/TopLosers';
import { VolumeLeaders } from './cards/VolumeLeaders';
import { UnusualVolume } from './cards/UnusualVolume';
import { GapAndGo } from './cards/GapAndGo';
import { GapAndFade } from './cards/GapAndFade';
import { NearHOD } from './cards/NearHOD';
import { NearLOD } from './cards/NearLOD';

export function MarketStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <TopGainers />
      <TopLosers />
      <VolumeLeaders />
      <UnusualVolume />
      <GapAndGo />
      <GapAndFade />
      <NearHOD />
      <NearLOD />
    </div>
  );
}
