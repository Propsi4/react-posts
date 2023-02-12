import React  from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../components/UI/appbar/AppBar'

const Layout = () => {
  return (
    <main>
      <AppBar></AppBar>
      <Outlet></Outlet>
    </main>
  )
}

export default Layout