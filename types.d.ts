// GLOBAL
type Exchange = 'binance' | 'bitfinex'
type Ticker_id = string
type Orders_id = string
type Trades_id = string
type Candles_id = string

export interface Ticker {
    id: string,
    exchange: string,
    pair: string,
    bid_price: number,
    ask_price: number,
    date: Date,
}

export interface Tickers {
    [key: string]: Ticker
}

// BITFINEX
export type Bitfinex_ws = Bitfinex_updated_ws | Bitfinex_info_ws | Bitfinex_hb_ws | Bitfinex_ticker_ws | Bitfinex_orders_ws | Bitfinex_trades_ws | Bitfinex_candles_ws
export type Bitfinex_updated_ws = any // TODO
export type Bitfinex_info_ws = any // TODO
export type Bitfinex_hb_ws = any // TODO

// BITFINEX ORDERS
// https://docs.bitfinex.com/reference#ws-public-books
export type Bitfinex_order = Bitfinex_order_pair | Bitfinex_order_currency

// on trading pairs (ex. tBTCUSD)
export type Bitfinex_order_pair = [
    PRICE: number,
    COUNT: number,
    AMOUNT: number
]

// on funding currencies (ex. fUSD)
export type Bitfinex_order_currency = [
    RATE: number,
    PERIOD: number,
    COUNT: number,
    AMOUNT: number
]

export type Bitfinex_orders_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_order[]
]

export type Bitfinex_orders_pair_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_order_pair[]
]

export type Bitfinex_orders_currency_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_order_currency[]
]

// BITFINEX TICKERS
// https://docs.bitfinex.com/reference#ws-public-ticker
export type Bitfinex_ticker = Bitfinex_ticker_pair | Bitfinex_ticker_currency

export type Bitfinex_ticker_pair = [
    BID: number,
    BID_SIZE: number,
    ASK: number,
    ASK_SIZE: number,
    DAILY_CHANGE: number,
    DAILY_CHANGE_RELATIVE: number,
    LAST_PRICE: number,
    VOLUME: number,
    HIGH: number,
    LOW: number,
]

export type Bitfinex_ticker_currency = [
    FRR: number,
    BID: number,
    BID_PERIOD: number,
    BID_SIZE: number,
    ASK: number,
    ASK_PERIOD: number,
    ASK_SIZE: number,
    DAILY_CHANGE: number,
    DAILY_CHANGE_PERC: number,
    LAST_PRICE: number,
    VOLUME: number,
    HIGH: number,
    LOW: number,
    _PLACEHOLDER: any,
    _PLACEHOLDER: any,
    FRR_AMOUNT_AVAILABLE: number
]

export type Bitfinex_tickers_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_ticker[]
]

export type Bitfinex_tickers_pair_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_ticker_pair[]
]

export type Bitfinex_tickers_currency_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_ticker_currency[]
]

// BITFINEX TRADES
// https://docs.bitfinex.com/reference#ws-public-trades
export type Bitfinex_trades = Bitfinex_trade_pair[] | Bitfinex_trade_currency[]

// on trading pairs (ex. tBTCUSD)
export type Bitfinex_trade_pair = [
    ID: number,
    MTS: number,
    AMOUNT: number,
    PRICE: number,
]

// on funding currencies (ex. fUSD)
export type Bitfinex_trade_currency = [
    ID: number,
    MTS: number,
    AMOUNT: number,
    RATE: number,
    PERIOD: number,
]

export type Bitfinex_trades_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_trades
]

export type Bitfinex_trades_pair_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_trade_pair[]
]

export type Bitfinex_trades_currency_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_trade_currency[]
]

// BITFINEX CANDLES
// https://docs.bitfinex.com/reference#ws-public-candles
export type Bitfinex_candle = [
    MTS: number,
    OPEN: number,
    CLOSE: number,
    HIGH: number,
    LOW: number,
    VOLUME: number,
]

export type Bitfinex_candles_ws = [
    CHANNEL_ID: number,
    DATA: Bitfinex_candle[]
]

// BINANCE
export interface Binance_ticker {
    updateId: number,
    symbol: string,
    bestBid: string,
    bestBidQty: string,
    bestAsk: string,
    bestAskQty: string,
}

export interface Binance_ticker_ws {
    [key: string]: {
        updateId: number,
        symbol: string,
        bestBid: string,
        bestBidQty: string,
        bestAsk: string,
        bestAskQty: string,
      }
}