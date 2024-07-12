import { createLazyFileRoute } from '@tanstack/react-router'

import { CreditCardPage } from '../pages/CreditCardPage/page'

export const Route = createLazyFileRoute('/credit-card')({
  component: CreditCardPage,
})