import { createLazyFileRoute } from '@tanstack/react-router'

import { OrderDetailsPage } from '../pages/OrderDetailsPage/page'

export const Route = createLazyFileRoute('/order-details')({
  component: OrderDetailsPage,
})