import { Link } from '@tanstack/react-router'
import './styles.css'
import Logo from '@assets/images/logo.svg'
import { MenuItem } from './components/menu-item/component'

import cart from '@assets/images/top-navigation-icons/cart.svg'
import entrance from '@assets/images/top-navigation-icons/entrance.svg'
import exit from '@assets/images/top-navigation-icons/exit.svg'
import time from '@assets/images/top-navigation-icons/time.svg'
import user from '@assets/images/top-navigation-icons/user.svg'

export const Header = () => {

  console.log(cart);
  return (
    <header className='header'>
      <div className="container header__inner">
        <div className="header__left">
          <Link to='/'>
            <img src={Logo} alt="logo" />
          </Link>
          <MenuItem type='link' path='/profile' icon={user}>Профиль</MenuItem>
          <MenuItem type='link' path='/order-list' icon={time}>Заказы</MenuItem>
        </div>
        <div className="header__right">
          <MenuItem type='link' path='/cart' icon={cart}>Корзина</MenuItem>
          <MenuItem type='button' onClick={() => alert('Войти')} icon={entrance}>Войти</MenuItem>
          {null && <MenuItem type='button' onClick={() => alert('Выйти')} icon={exit}>Выйти</MenuItem>}
        </div>
      </div>
    </header>
  )
}