import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
export default  function AdminContextProvider({children}){

    const [admin, setAdmin] = useState({});
const Login = async (username,password)=>{
    try {
        let response = await fetch('/api/admin/login', {
            method:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify({username,password})
        });
        if (response.ok) {
            let data = await response.json();
            setAdmin(data);
        }
         
    } catch (error) {
        
    }
}
const UpdateUsername = async (username)=>{
    try {
        let response = await fetch('/api/admin/updateUsername',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username})
        });
        if (response.ok) {
            let data = await response.json();
            setAdmin(data);
            
        }
    } catch (error) {
        
    }
}
const UpdatePassword = async (password)=>{
    try {
        let response = await fetch('/api/admin/updatePassword',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({password})
        });
        if (response.ok) {
            let data = await response.json();
            setAdmin(data);
            
        }
    } catch (error) {
        
    }
}
const GetAdminById = async (id) =>{
    try {
        let response = await fetch('/api/admin/getAdminById',{
            method:'GET',
            body:JSON.stringfy({admin})
        });
        if(response.ok){
            let data = await response.json();
            setAdmin(data);
        }
    } catch (error) {
        
    }
}


    const value = {
        admin,
        Login,
        UpdateUsername,
        UpdatePassword,
        GetAdminById
    }

    return(
        <AdminContext.Provider value = {value}>
            {children}
        </AdminContext.Provider>
    )

}
