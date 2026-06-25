import React from 'react'

const UserList = () => {
  const users =[
    {id:1, name:'Saim', age:21}, 
    {id:2, name:'Ali', age:18},
    {id:3, name:'Anne', age:19}, 
  ];
    return (
    <div>
        {users.map((user)=>(
            <ul key={user.id}>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>

            </ul>
        ))}
    </div>
  )
}

export default UserList