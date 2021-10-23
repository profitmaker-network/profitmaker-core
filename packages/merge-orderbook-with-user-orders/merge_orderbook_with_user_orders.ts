import R from 'ramda'
import {OrderBook, Order} from './types'

export const is_order_buy = (order:Order) => {
  if (order.side === 'buy') {
    return true
  } else if (order.side === 'sell') {
    return false
  }
}

export const merge_orders_quotation = (side: string) => (orders: Order[]) => (quotation: Order[]) => {
  let quotes = R.clone(quotation)
  let user_orders = R.clone(orders)

  for (let order of user_orders) {
    quotes.push(order)
  }
  if (side === 'buy') {
    return R.sort(R.descend(R.prop('price')), quotes)
  } else if (side === 'sell') {
    return R.sort(R.ascend(R.prop('price')), quotes)
  }
}

export const merge_orderbook_with_user_orders = (orders: Order[]) => (orderBook: OrderBook) => {
  let user_orders = R.clone(orders)
  let book = R.clone(orderBook)
  let buys_to_merge = R.filter(is_order_buy, user_orders)
  let sells_to_merge = R.reject(is_order_buy, user_orders)
  book.bids = merge_orders_quotation('buy')(buys_to_merge)(book.bids)
  book.asks = merge_orders_quotation('sell')(sells_to_merge)(book.asks)
  return book
}