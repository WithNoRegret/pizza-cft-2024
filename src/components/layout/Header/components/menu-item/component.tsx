import { Link } from "@tanstack/react-router"

import './styles.css'

interface MenuItemProps {
  type: 'link' | 'button'
  children?: React.ReactNode
  path?: string
  onClick?: () => void
  icon: string
}

export const MenuItem = ({ type, children, path, onClick, icon }: MenuItemProps) => {
  if (type === 'link')
    return <Link to={path} className="header__link">
            <img src={icon} alt="icon" />
            {children}
          </Link>
  else
    return <button onClick={onClick} className="header__link">
              <img src={icon} alt="icon" />
              {children}
          </button>
}