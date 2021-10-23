import { merge_orderbook_with_user_orders } from './merge_orderbook_with_user_orders'

import {input_user_orders, input_orderbook} from './test_data'

it('test merge_orders_orderbook', () => {
  const result = merge_orderbook_with_user_orders(input_user_orders)(input_orderbook)
  // console.log(result)

  expect(result.asks.length).toBe(8)
  expect(result.bids.length).toBe(8)

  expect(result.bids[0].user).toBe('suenot')
  expect(result.bids[0].price).toBe(130)
  expect(result.bids[2].user).toBe('fishrod')
  expect(result.bids[2].price).toBe(128)
})





