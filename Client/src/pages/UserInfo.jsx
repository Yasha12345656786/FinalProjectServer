import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'

export default function UserInfo() {
    const {admin,  GetAdminByEmail} = useContext(AdminContext);
    
  return (
    <>
    <h1> Hello {admin.email}</h1>

    <p> password:{admin.password}</p>
    </>
  )
}
