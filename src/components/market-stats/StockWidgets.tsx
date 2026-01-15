import { MomentumHolding } from './widgets/MomentumHolding';
import { ForcedSelling } from './widgets/ForcedSelling';
import { GapAndHold } from './widgets/GapAndHold';
import { GapAndFade } from './widgets/GapAndFade';
import { NearHOD } from './widgets/NearHOD';
import { NearLOD } from './widgets/NearLOD';
import { WideRange } from './widgets/WideRange';
import { QuietInstitutional } from './widgets/QuietInstitutional';

export function StockWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <MomentumHolding />
      <ForcedSelling />
      <GapAndHold />
      <GapAndFade />
      <NearHOD />
      <NearLOD />
      <WideRange />
      <QuietInstitutional />
    </div>
  );
}

