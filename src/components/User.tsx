import React from 'react'

//String, number, boolean, void, null

type UserProps = {
    name: string, 
    age: number, 
    department: string, 
    isregistered: boolean,
};

const User = ({name, age, department, isregistered}: UserProps) => {
  return (
    <div>

      {/* <h2>Md. Mominur Rhaman</h2>
      <h3>mominrhaman007@gmail.com</h3>
      <p>I'm 28 years old</p> */}

      <h2>Your Name: {name}</h2>
      <p>Your Positions: {department} </p>
      <p>Your Age: {age} years old.</p>
      {isregistered ? <p> Registered Employee</p> : <p> Not Registered Employee</p>}
    </div>
  )
}

export default User
