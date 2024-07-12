import { createLazyFileRoute } from '@tanstack/react-router'

import { CartPage } from '../pages/CartPage/page'

export const Route = createLazyFileRoute('/cart')({
  component: CartPage,
})