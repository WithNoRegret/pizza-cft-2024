import { Link } from '@tanstack/react-router'

import Logo from '@assets/images/logo.svg'

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between py-6">
        <div className="flex items-center justify-between gap-8">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Link to="/profile">Профиль</Link>
          <Link to="/order-list">Заказы</Link>
        </div>
        <div className="flex items-center justify-between gap-8">
          <Link to="/cart">Корзина</Link>
          <button onClick={() => console.log('выход')}>Выйти</button>
        </div>
      </div>
    </header>
  )
}