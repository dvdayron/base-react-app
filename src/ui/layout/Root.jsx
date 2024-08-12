import { Outlet } from 'react-router'
import { Navbar } from '../components'

export const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
