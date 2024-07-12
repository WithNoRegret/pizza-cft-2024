import { Link } from '@tanstack/react-router'

export const CartPage = () => {

    return (
        <>
            This is Cart Page
            <br />
            <Link to='/order-details'>Оформить заказ</Link>
        </>
    )
}