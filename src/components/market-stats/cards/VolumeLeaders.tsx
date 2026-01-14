import { BarChart3 } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getVolumeLeaders } from '../../../data/mockStocks';

export function VolumeLeaders() {
  const leaders = getVolumeLeaders(mockStocks, 10);

  return (
    <StatCard title="Volume Leaders" icon={BarChart3} badge="Live" badgeType="live">
      <div className="space-y-0.5">
        {leaders.map((stock, index) => (
          <StockRow
            key={stock.ticker}
            rank={index + 1}
            ticker={stock.ticker}
            price={stock.price}
            change={stock.change}
            volume={stock.volume}
          />
        ))}
      </div>
    </StatCard>
  );
}
