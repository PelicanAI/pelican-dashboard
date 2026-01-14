import { TrendingDown } from 'lucide-react';
import { StatCard } from '../StatCard';
import { StockRow } from '../StockRow';
import { mockStocks, getTopLosers } from '../../../data/mockStocks';

export function TopLosers() {
  const losers = getTopLosers(mockStocks, 20, 10);

  return (
    <StatCard title="Top Losers" icon={TrendingDown} badge="$20+" badgeType="filter">
      <div className="space-y-0.5">
        {losers.map((stock, index) => (
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
