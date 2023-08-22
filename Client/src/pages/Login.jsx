import React, {useState} from 'react'

export default function Login() {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

  async function Submit(event){
         event.preventDefault();
         CheckUserName();
         CheckPassWord();
         let admin = {username, password};
        let res = await fetch('http://localhost:5500/api/admin/login', {
            mehod:'POST',
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(admin)
        });
        let data = await res.json();
        console.log(data);
        alert('welcome' + data.username);
    }
    const CheckUserName=()=>{
        check = false;
        if(username.length < 10 && username.length > 0){
            check = true;
        } 
        for (let index = 0; index < username.length; index++) {
          const element = username[index];
          if (element >= 'A' && element <='Z' || element >= 'a' && element <='z' && element >= '0' || element <= '9' ) {
            continue;
          }
          else{check = false
             return check;}      
        }

    }
    const CheckPassWord=()=>{
        check = false;
    if (password.length >= 7 || password.length <= 12) {
        check = true;
    }
    count = 0;
    for (let index = 0; index < password.length; index++) {
       if (element >= 'A' && element <='Z' || element >= 'a' && element <='z' && element >= '0' || element <= '9' )  {
         count++;
         check = true;
       }           
    }
    return check;
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={(event)=>Submit(event)}>
            <input type='text' placeholder='username' required onChange={(event)=>SetUsername(event.target.value)}/>
            <input type='password' placeholder='password' required onChange={(event)=>SetPassword(event.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}
