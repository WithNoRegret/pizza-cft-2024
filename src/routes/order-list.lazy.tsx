import { createLazyFileRoute } from '@tanstack/react-router'

import { OrderListPage } from '../pages/OrderListPage/page'

export const Route = createLazyFileRoute('/order-list')({
  component: OrderListPage,
})