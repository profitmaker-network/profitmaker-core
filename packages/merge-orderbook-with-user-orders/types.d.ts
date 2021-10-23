export interface OrderBook {
    id?: string,
    pair: string,
    isin?: string,
    exchange: string,
    broker: string,
    timestamp: number,
    trade_status?: boolean,
    bids: Order[],
    asks: Order[],
    min_price_increment?: number
  }
  
  // it can be the user market position or orderbook order
  export type Order = {
    price: number,
    amount: number,
    total?: number,
    percent?: number,
    sum?: number,
    wall?: boolean,
    user?: string,
    pair?: string,
    isin?: string,
    exchange?: string,
    broker?: string,
    timestamp?: number,
    trade_status?: string,
    side?: string,
    fee?: number,
    user_order?: boolean
  }
  