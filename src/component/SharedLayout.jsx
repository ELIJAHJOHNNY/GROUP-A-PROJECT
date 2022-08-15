import React from 'react';
import Navs from './Navs';
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
      <Navs/>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default SharedLayout
