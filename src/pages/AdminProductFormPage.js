import React from 'react'
import NavBar from '../features/navbar/Navbar'
import { ProductForm } from '../features/admin/components/ProductForm'
export const AdminProductFormPage = () => {
  return (
    <div>
        <NavBar>
            <ProductForm></ProductForm>
        </NavBar>
    </div>
  )
}
