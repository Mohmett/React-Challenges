// import { useState } from "react";

const UserList = () => {
  const users= [
    {
        id:crypto.randomUUID(),
        name:"Khalid",
        email:"khalid@gmail.com"
    }, {
        id:crypto.randomUUID(),
        name:"Jamal",
        email:"Jamal@gmail.com"
    }, {
        id:crypto.randomUUID(),
        name:"Mustaf",
        email:"Mustaf@gmail.com"
    }, {
        id:crypto.randomUUID(),
        name:"Yasin",
        email:"Yasin@gmail.com"
    },
];


  return(
<>
<h1>Users List</h1>

<div>
    {
        users.length>0?(
            <ol>
                {
                    users.map(user=>(
                        <li key={user.id}>{user.name} ({user.email})</li>
                    ))
                }
            </ol>
        ): <p>No Users Found</p>
    }
</div>
</>

  ) 
};
export default UserList;
