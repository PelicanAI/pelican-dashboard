import { FXCompression } from './widgets/FXCompression';
import { USDStrength } from './widgets/USDStrength';

export function ForexWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <FXCompression />
      <USDStrength />
    </div>
  );
}

