import { Outlet } from "@tanstack/react-router"
import { Header } from "./Header/component"

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}