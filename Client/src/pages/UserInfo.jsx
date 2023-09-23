import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../Context/AdminContext'

export default function UserInfo() {
    const {admin,  GetAdminByEmail} = useContext(AdminContext);
    console.log(admin);
  const [user,setUser] = useState({})
  // const data=localStorage.getItem("userdata")
  essionStorage.setItem('user',JSON.stringify(user)); 
navigate('UserInfo');
    
    useEffect(()=>{
   setUser(data)
     
    },[])

    useEffect(()=>{
      let user = JSON.parse(sessionStorage.getItem('user'));
      setUser(user);
      },[]);
    console.log(user);
  return (
    <>
    <div>
    <h1> Hello {admin.email}</h1>

    <p> password:{admin.password}</p>
    </div>
    </>
  )
}
