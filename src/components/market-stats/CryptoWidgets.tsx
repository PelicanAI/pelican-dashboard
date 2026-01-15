import { CryptoMomentum } from './widgets/CryptoMomentum';
import { CryptoStress } from './widgets/CryptoStress';

export function CryptoWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <CryptoMomentum />
      <CryptoStress />
    </div>
  );
}

