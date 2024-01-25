import React from 'react'
import NavBar from '../features/navbar/Navbar'
import AdminProductDetail from '../features/admin/components/AdminProductDetail'
export const AdminProductDetailPage = () => {
  return (
    <div>
        <NavBar>
            <AdminProductDetail></AdminProductDetail>
        </NavBar>
    </div>
  )
}