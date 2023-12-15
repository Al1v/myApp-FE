import React from 'react'

export default function User(userData) {
  console.log(userData.data)

  if(userData.data){
    const {id, fullName, email, roles} = userData.data
  return (
    <div>
      <div>id: {id}</div>
      <div>fullName: {fullName}</div>
      <div>email: {email}</div>
      <div>roles: {roles.map(role => <li key={role.value}>{role.value} </li>)}</div>
    </div>
  )
}else{
  return <div></div>
}
}

