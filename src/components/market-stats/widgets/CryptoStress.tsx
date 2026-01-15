import { IntelligenceCard } from '../IntelligenceCard';
import { StockRow } from '../StockRow';
import { ColumnHeaders } from '../ColumnHeaders';
import { mockCryptoStress } from '../../../data/mockStocks';
import { formatVolume } from '../../../utils/formatters';

export function CryptoStress() {
  const cryptos = mockCryptoStress;

  return (
    <IntelligenceCard
      emoji="🔥"
      label="Crypto Stress"
      badge={{ text: "LIQUIDATION", variant: "alert" }}
      isEmpty={cryptos.length === 0}
    >
      <ColumnHeaders columns={[
        { label: '' },
        { label: 'Symbol' },
        { label: 'Price', align: 'right' },
        { label: 'Chg', align: 'right' },
        { label: 'Vol', align: 'right' },
      ]} />
      <tbody>
        {cryptos.map((crypto, i) => (
          <StockRow
            key={crypto.symbol}
            rank={i + 1}
            ticker={crypto.symbol}
            price={crypto.price}
            change={crypto.change}
            volume={formatVolume(crypto.volume)}
          />
        ))}
      </tbody>
    </IntelligenceCard>
  );
}

