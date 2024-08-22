import React from 'react'

type UserDemoProps = {
    users: {
        id: number;
        name: string;
        email: string;
        age: number;
    }[];
};

const UserDemo = ({users}: UserDemoProps) => {
    console.log(users);
  return (
    <div style={{ border: "1px solid", margin: "0.5rem"}}>
      {users.map((user) => {
        const {id, name, age, email} = user
        return (
            <div key={id}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{age} Yers old</p>
            </div>
        )
      })}
    </div>
  )
}

export default UserDemo
