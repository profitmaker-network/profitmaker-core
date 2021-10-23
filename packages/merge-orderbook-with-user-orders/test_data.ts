import {OrderBook, Order} from './types'

export const input_user_orders: Order[] = [
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'fishrod',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'buy',
      price: 128,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'undefined_order',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'buy',
      price: 126,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'market_order',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'buy',
      price: 126,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'simple_bot',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'sell',
      price: 128,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'awesome_bot',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'sell',
      price: 126,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'thatmean',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'sell',
      price: 126,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'suenot',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'buy',
      price: 130,
      amount: 1,
      fee: 10
    },
    {
      pair: 'AAPL__USD',
      user_order: true,
      isin: 'BBG000B9XRY4',
      user: 'some_bot',
      exchange: 'SPBX',
      broker: 'tinkoff',
      timestamp: 12331233233,
      trade_status: 'active',
      side: 'sell',
      price: 130,
      amount: 1,
      fee: 10
    },
  ]
  
  export const input_orderbook: OrderBook = {
    pair: 'AAPL__USD',
    isin: 'BBG000B9XRY4',
    exchange: 'SPBX',
    broker: 'tinkoff',
    trade_status: true,
    timestamp: 12331233233,
    min_price_increment: 0.1,
    asks: [
      {
        price: 128,
        amount: 1,
        total: 128,
        sum: 128,
        percent: 1.622,
        wall: false
      },
      {
        price: 127,
        amount: 2,
        total: 254,
        sum: 382,
        percent: 3.218,
        wall: false
      },
      {
        price: 126,
        amount: 10,
        total: 1260,
        sum: 1642,
        percent: 15.966,
        wall: true
      },
      {
        price: 125,
        amount: 50,
        total: 6250,
        sum: 7892,
        percent: 79.194,
        wall: true
      }
    ],
    bids:[
      {
        price: 128,
        amount: 1,
        total: 128,
        sum: 128,
        percent: 1.622,
        wall: false
      },
      {
        price: 127,
        amount: 2,
        total: 254,
        sum: 382,
        percent: 3.218,
        wall: false
      },
      {
        price: 126,
        amount: 10,
        total: 1260,
        sum: 1642,
        percent: 15.966,
        wall: true
      },
      {
        price: 125,
        amount: 50,
        total: 6250,
        sum: 7892,
        percent: 79.194,
        wall: true
      }
    ]
  }


  export const output_orderbook = {
    pair: 'AAPL__USD',
    isin: 'BBG000B9XRY4',
    exchange: 'SPBX',
    broker: 'tinkoff',
    trade_status: true,
    timestamp: 12331233233,
    min_price_increment: 0.1,
    asks: [
      {
        price: 125,
        amount: 50,
        total: 6250,
        sum: 7892,
        percent: 79.194,
        wall: true
      },
      {
        price: 126,
        amount: 10,
        total: 1260,
        sum: 1642,
        percent: 15.966,
        wall: true
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'awesome_bot',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'sell',
        price: 126,
        amount: 1,
        fee: 10
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'thatmean',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'sell',
        price: 126,
        amount: 1,
        fee: 10
      },
      {
        price: 127,
        amount: 2,
        total: 254,
        sum: 382,
        percent: 3.218,
        wall: false
      },
      {
        price: 128,
        amount: 1,
        total: 128,
        sum: 128,
        percent: 1.622,
        wall: false
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'simple_bot',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'sell',
        price: 128,
        amount: 1,
        fee: 10
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'some_bot',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'sell',
        price: 130,
        amount: 1,
        fee: 10
      }
    ],
    bids: [
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'suenot',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'buy',
        price: 130,
        amount: 1,
        fee: 10
      },
      {
        price: 128,
        amount: 1,
        total: 128,
        sum: 128,
        percent: 1.622,
        wall: false
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'fishrod',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'buy',
        price: 128,
        amount: 1,
        fee: 10
      },
      {
        price: 127,
        amount: 2,
        total: 254,
        sum: 382,
        percent: 3.218,
        wall: false
      },
      {
        price: 126,
        amount: 10,
        total: 1260,
        sum: 1642,
        percent: 15.966,
        wall: true
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'undefined_order',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'buy',
        price: 126,
        amount: 1,
        fee: 10
      },
      {
        pair: 'AAPL__USD',
        user_order: true,
        isin: 'BBG000B9XRY4',
        user: 'market_order',
        exchange: 'SPBX',
        broker: 'tinkoff',
        timestamp: 12331233233,
        trade_status: 'active',
        side: 'buy',
        price: 126,
        amount: 1,
        fee: 10
      },
      {
        price: 125,
        amount: 50,
        total: 6250,
        sum: 7892,
        percent: 79.194,
        wall: true
      }
    ]
  }