export interface CryptoModel {
  readonly symbol: string;
  readonly priceChange: number;
  readonly priceChangePercent: number;
  readonly weightedAvgPrice: number;
  readonly prevClosePrice: number;
  readonly lastPrice: number;
  readonly lastQty: number;
  readonly bidPrice: number;
  readonly bidQty: number;
  readonly askPrice: number;
  readonly askQty: number;
  readonly openPrice: number;
  readonly highPrice: number;
  readonly lowPrice: number;
  readonly volume: number;
  readonly quoteVolume: number;
  readonly openTime: number;
  readonly closeTime: number;
  readonly firstId: number;
  readonly lastId: number;
  readonly count: number;
}
