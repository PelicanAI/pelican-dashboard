import { TrendingUp } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getTopGainers } from '../../../data/mockStocks';

export function TopGainers() {
  const gainers = getTopGainers(mockStocks, 20, 10);

  return (
    <StatCard title="Top Gainers" icon={TrendingUp} badge="$20+" badgeType="filter">
      <div className="space-y-0.5">
        {gainers.map((stock, index) => (
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
