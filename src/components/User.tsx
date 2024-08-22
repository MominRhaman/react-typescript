import React from 'react'

//String, number, boolean, void, null
// user defined types => object, array, enum, union, any, custom type

type UserProps = {
  user: {
    name: string;
    department: string;
    age: number;
    isregistered: boolean;
    lang: string[];
  };
};

const User = ({user}: UserProps) => {
  return (
    <div style={{ border: "1px solid", margin: "0.5rem"}}>

      {/* <h2>Md. Mominur Rhaman</h2>
      <h3>mominrhaman007@gmail.com</h3>
      <p>I'm 28 years old</p> */}

      <p>Your Name: {user.name}</p>
      <p>Your Positions: {user.department} </p>
      <p>Your Age: {user.age} years old.</p>
      {user.isregistered ? <p> Registered Employee</p> : <p> Not Registered Employee</p>}
      <p>
        Speaks:
        {user.lang.map((language, index) => {
          return <span key={index}> {language} </span>
        })}
      </p>
    </div>
  )
}

export default User
