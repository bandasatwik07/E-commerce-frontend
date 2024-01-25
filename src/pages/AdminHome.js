import React from 'react'
import Navbar from '../features/navbar/Navbar'
import AdminProductList from '../features/admin/components/AdminProductList'
const Home = () => {
  return (
    <>
        <Navbar>
            <AdminProductList></AdminProductList>
        </Navbar>
    </>
  )
}

export default Home